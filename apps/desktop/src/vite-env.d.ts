/// <reference types="vite/client" />

interface Window {
  dedsec: {
    app: {
      getInfo: () => Promise<{
        name: string;
        version: string;
        platform: NodeJS.Platform;
      }>;
    };
    shell: {
      openExternal: (url: string) => Promise<void>;
    };
  };
}
