import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("dedsec", {
  app: {
    getInfo: () => ipcRenderer.invoke("app:get-info")
  },
  shell: {
    openExternal: (url: string) => ipcRenderer.invoke("shell:open-external", url)
  }
});
