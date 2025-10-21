interface GtagEvent {
  [key: string]: string | number | boolean | object;
}

declare global {
  function gtag(command: 'event', action: string, data?: GtagEvent): void;
  function gtag(command: 'config', id: string, config?: GtagEvent): void;
  function gtag(command: 'js', config: Date): void;
  function gtag(...args: any[]): void;

  interface Window {
    gtag: typeof gtag;
    dataLayer: any[];
  }
}
