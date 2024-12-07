// remix.config.mjs
/** @type {import('@remix-run/dev').AppConfig} */
export default {
    // Specify where to serve static assets from
    assetsBuildDirectory: "public/build",
    publicPath: "/build/",
    // Specify the directory for your entry files
    serverBuildDirectory: "build",
    // If you're using TypeScript, you can specify the path to your tsconfig
    tsconfig: "./tsconfig.json",
    // Enable or disable various features
    devServerBroadcastDelay: 1000,
    // Additional configurations can be added here
    dev: {
        // Enable this option for better error visibility during development
        debug: true,
    },
    future: {
        v7_skipActionErrorRevalidation: true,
    },
};