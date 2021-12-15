import {defineConfig} from 'vite'

export default defineConfig({
    /* ... */

    // Peeky config
    test: {
        // Use the DOM environment for all tests by default
        runtimeEnv: 'dom',
        ignored: ['**/node_modules/**', '**/ignored_files/**']
    },
})