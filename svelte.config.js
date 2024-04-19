import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        alias: {
            $routes: "./src/routes",
            // '$routes/': './src/routes/index',
            "$routes/*": "./src/routes/index/*",
        },
        paths: {

            base: process.argv.includes('dev') ? '' : '/Slad3.github.io'

        }
    },
};

export default config;
