declare module 'instafeed.js' {
  interface InstafeedOptions {
    accessToken: string;
    limit?: number;
    template?: string;
    container: HTMLElement;
    after?: () => void;
    error?: (error: any) => void;
    filter?: (image: any) => boolean;
    [key: string]: any;
  }

  class Instafeed {
    constructor(options: InstafeedOptions);
    run(): void;
  }

  export default Instafeed;
}