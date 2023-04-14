/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_X_RapidAPI_Key: string;
  readonly VITE_X_RapidAPI_Host: string;
  readonly VITE_Rapid_Api_Url: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
