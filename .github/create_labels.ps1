# Synchronize GitHub labels for the DedSec repository.
# Usage: .github/create_labels.ps1 -Token "YOUR_GITHUB_TOKEN"

param (
    [string]$Token = $env:GITHUB_TOKEN
)

$remoteUrl = git remote get-url origin
if ($remoteUrl -match "github.com[:/]([^/]+/[^.]+)") {
    $repo = $Matches[1]
} else {
    Write-Error "Could not parse GitHub repository name from git remote origin."
    exit 1
}

if (-not $Token) {
    $Token = Read-Host -Prompt "Enter your GitHub Personal Access Token (PAT)"
    if (-not $Token) {
        Write-Error "GitHub token is required."
        exit 1
    }
}

$headers = @{
    "Authorization" = "token $Token"
    "Accept"        = "application/vnd.github.v3+json"
    "User-Agent"    = "DedSec-Label-Sync"
}

$labelFile = Join-Path (Get-Location) ".github/labels.yml"
if (-not (Test-Path $labelFile)) {
    Write-Error "Label source file not found: $labelFile"
    exit 1
}

$labels = @()
$current = $null

foreach ($line in Get-Content $labelFile) {
    if ($line -match "^- name: (.+)$") {
        if ($current) { $labels += $current }
        $current = @{
            name = $Matches[1].Trim().Trim('"')
        }
    } elseif ($current -and $line -match "^\s+color: (.+)$") {
        $current.color = $Matches[1].Trim().Trim('"')
    } elseif ($current -and $line -match "^\s+description: (.+)$") {
        $current.description = $Matches[1].Trim().Trim('"')
    }
}
if ($current) { $labels += $current }

Write-Host "Syncing $($labels.Count) labels for repository: $repo..."

foreach ($l in $labels) {
    $name = [Uri]::EscapeDataString($l.name)
    $url = "https://api.github.com/repos/$repo/labels/$name"

    $exists = $false
    try {
        $existing = Invoke-RestMethod -Uri $url -Headers $headers -Method Get -ErrorAction SilentlyContinue
        if ($existing) { $exists = $true }
    } catch {
        # 404 is expected if the label does not exist.
    }

    $bodyObj = @{
        color = $l.color
        description = $l.description
    }
    if (-not $exists) {
        $bodyObj.name = $l.name
    }
    $body = $bodyObj | ConvertTo-Json

    try {
        if ($exists) {
            Write-Host "Updating existing label: $($l.name)..."
            Invoke-RestMethod -Uri $url -Headers $headers -Method Patch -Body $body -ContentType "application/json" | Out-Null
        } else {
            Write-Host "Creating new label: $($l.name)..."
            $urlPost = "https://api.github.com/repos/$repo/labels"
            Invoke-RestMethod -Uri $urlPost -Headers $headers -Method Post -Body $body -ContentType "application/json" | Out-Null
        }
        Write-Host "  Success!" -ForegroundColor Green
    } catch {
        Write-Error "Failed to sync label $($l.name): $_"
    }
}
