import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';
// base './' makes asset + music paths work on GitHub Pages (user.github.io/repo/) and locally.
export default defineConfig({base:'./',plugins:[react()]});
