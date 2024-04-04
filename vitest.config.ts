import { defineConfig, mergeConfig } from 'vitest/config';
import vitestConfig from './vitest.config';

export default mergeConfig(vitestConfig, defineConfig({
    test: {
        bail: 1,
        coverage: {
            provider: 'v8',
            reporter: [ 'text', 'json', 'html' ],
            reportsDirectory: './tests/coverage',
        },
        environment: 'jsdom',
        globals: true,
        reporters: 'verbose'
    }
}));