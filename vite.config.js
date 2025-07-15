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

    // Add specific Rollup options to try and bypass the error.
    // This 'output' configuration often helps with issues related to how modules are bundled.
    rollupOptions: {
      output: {
        // This setting can sometimes resolve issues with Rollup's static analysis
        // when dealing with complex or dynamically imported modules.
        // It prevents Rollup from trying to optimize certain module structures.
        // It might increase bundle size slightly, but if it fixes the build, it's worth it.
        sanitizeFileName: false, // Prevents Rollup from sanitizing filenames, which can sometimes cause issues
        manualChunks: undefined, // Disables automatic chunking, which can sometimes interfere with analysis
      },
      // This is a more aggressive option to tell Rollup to be less strict about
      // certain types of warnings or optimizations, which can sometimes bypass build errors.
      // Use with caution as it might hide other potential issues.
      treeshake: false, // Disable tree-shaking entirely as a diagnostic step
    },
  }
})
