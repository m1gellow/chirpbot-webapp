declare global {
  interface Window {
    Telegram: {
      WebApp: {
        close: () => void;
        ready: () => void;
        initData: string;
        initDataUnsafe: any;
        // и другие свойства/методы, которые вам нужны
      };
    };
  }
}

export {};