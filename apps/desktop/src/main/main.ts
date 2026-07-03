import { app, BrowserWindow, ipcMain, shell } from "electron";
import path from "node:path";

const rendererUrl = process.env.DEDSEC_RENDERER_URL;

function createWindow() {
  const window = new BrowserWindow({
    width: 1180,
    height: 760,
    minWidth: 920,
    minHeight: 640,
    title: "DedSec",
    backgroundColor: "#080a0f",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "../preload/preload.js"),
      sandbox: true
    }
  });

  if (rendererUrl) {
    void window.loadURL(rendererUrl);
  } else {
    void window.loadFile(path.join(__dirname, "../../dist-renderer/index.html"));
  }
}

ipcMain.handle("app:get-info", () => ({
  name: app.getName(),
  version: app.getVersion(),
  platform: process.platform
}));

ipcMain.handle("shell:open-external", async (_event, url: string) => {
  const parsed = new URL(url);
  if (!["https:", "mailto:"].includes(parsed.protocol)) {
    throw new Error("Unsupported URL protocol.");
  }

  await shell.openExternal(parsed.toString());
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
