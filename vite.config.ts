const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                login: resolve(__dirname, "pages/login/index.html"),
                home: resolve(__dirname, "pages/home/index.html"),
            },
        },
    },
});