/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_X_RapidAPI_Key: string;
  readonly VITE_X_RapidAPI_Host: string;
  readonly VITE_Rapid_Api_Url: string;
  readonly VITE_X_RapidAPI_Host_News: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
