# Script to synchronize GitHub labels for DedSec repository
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

$labels = @(
    @{ name = "feature"; color = "0E8A16"; description = "New product functionality or capabilities." },
    @{ name = "bug"; color = "D93F0B"; description = "Runtime, behavior, or interface defect fixes." },
    @{ name = "hotfix"; color = "E11D21"; description = "Urgent fixes for critical production or staging issues." },
    @{ name = "refactor"; color = "5319E7"; description = "Code structure improvements without external behavior changes." },
    @{ name = "documentation"; color = "0075CA"; description = "Documentation, workflow, and snapshot changes." },
    @{ name = "performance"; color = "FBCA04"; description = "Changes that optimize speed, memory, or resource usage." },
    @{ name = "security"; color = "000000"; description = "Security patches, dependency audit work, or privacy adjustments." },
    @{ name = "dependencies"; color = "C5DEF5"; description = "npm, Electron, framework, or library dependency updates." },
    @{ name = "utility"; color = "bfdadc"; description = "Tooling, development scripts, CI/CD, and maintenance tasks." },
    @{ name = "design"; color = "F472B6"; description = "Visual design, CSS, layout, palette, and animation changes." },
    @{ name = "testing"; color = "4ADE80"; description = "Unit, integration, or verification script changes." }
)

Write-Host "Syncing labels for repository: $repo..."

foreach ($l in $labels) {
    $name = [Uri]::EscapeDataString($l.name)
    $url = "https://api.github.com/repos/$repo/labels/$name"

    $exists = $false
    try {
        $existing = Invoke-RestMethod -Uri $url -Headers $headers -Method Get -ErrorAction SilentlyContinue
        if ($existing) {
            $exists = $true
        }
    } catch {
        # 404 is expected if it does not exist.
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
