declare function gtag(...args: any[]): void;
declare global {
  interface Window {
    gtag: typeof gtag;
    dataLayer: any[];
  }
}
export {};
