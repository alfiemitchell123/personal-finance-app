import { defineConfig } from 'cypress';

// Export Cypress configuration
export default defineConfig({
    e2e: {
        // Base URL of your application
        baseUrl: 'http://localhost:5173',

        // Support file
        supportFile: 'cypress/support/index.ts',

        // Directory where Cypress should look for integration tests
        specPattern: 'cypress/e2e/**/*.{js,ts}',

        // Environment variables to use in your tests
        env: {
            apiKey: process.env.VITE_FIREBASE_API_KEY,
            authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.VITE_FIREBASE_PROJECT_ID,
            storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.VITE_FIREBASE_APP_ID,
        },

        // Setup any global configurations or plugins
        setupNodeEvents(on, config) {
            // implement node event listeners here
            // e.g., on('task', ...)
        },

        // Configuration options for Cypress
        defaultCommandTimeout: 10000, // Timeout for commands in milliseconds
        viewportWidth: 1280, // Default viewport width
        viewportHeight: 720, // Default viewport height
        retries: 1, // Number of retries on failure
        video: true, // Record videos of the tests
        screenshotOnRunFailure: true, // Take screenshots on failure
    },
});
