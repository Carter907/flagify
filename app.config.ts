import { defineConfig } from "@solidjs/start/config";

export default defineConfig({


  ssr: false,

  server: {

    baseURL: "flagify",
    preset: "static"
  }

});

