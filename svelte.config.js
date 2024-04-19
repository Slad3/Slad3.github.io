import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const dev = process.argv.includes('dev')


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
            "$routes/*": "./src/routes/index/*",
        },
        paths: {

            base: dev ? '' : process.env.BASE_PATH

        }
    },
};

export default config;
