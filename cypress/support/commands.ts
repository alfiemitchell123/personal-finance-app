// Suppress hydration errors during tests
Cypress.on('window:before:load', (win) => {
    // Override console.error to suppress hydration errors
    const originalConsoleError = win.console.error;

    win.console.error = (message, ...args) => {
        if (typeof message === 'string' && message.includes('Hydration')) {
            // Suppress hydration errors
            return;
        }
        // Call the original console.error for other errors
        originalConsoleError(message, ...args);
    };
});