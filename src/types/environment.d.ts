export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_PORT: number;
      DB_USER: string;
      DB_DATABASE: string;
      DB_PASSWORD: string;
    }
  }
}
