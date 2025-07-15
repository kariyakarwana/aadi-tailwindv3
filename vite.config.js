import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // This is a common workaround for the "Cannot add property 0, object is not extensible" error
    // which often originates from Rollup's internal optimizations conflicting with certain code patterns.
    // Setting 'minify' to false or adjusting 'target' can sometimes resolve it.
    // If 'minify: false' fixes it, you can then try 'minify: 'terser'' or 'esbuild' with specific options
    // to re-enable minification if needed for production, but start with false for diagnosis.
    minify: false, // Try setting minify to false to disable Rollup's minification/optimization that might cause the error
    
    // Another potential fix is to explicitly set the target environment for the build.
    // This ensures compatibility with the Vercel build environment's Node.js version.
    // For Vercel, 'es2015' or 'es2017' are generally safe.
    target: 'es2017', // Ensure compatibility with older Node.js environments if Vercel uses one
  }
})
