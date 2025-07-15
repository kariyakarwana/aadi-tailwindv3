// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // The 'content' array tells Tailwind which files to scan for class names.
  content: [
    "./index.html", // Scans your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all .js, .ts, .jsx, and .tsx files in the 'src' directory and its subfolders
  ],
  // Setting 'important: true' will append '!important' to all of Tailwind's utility classes.
  // This gives them the highest specificity, ensuring they override other conflicting styles.
  // Use with caution, as it can make custom CSS overrides more challenging.
  important: true, 
  theme: {
    // The 'extend' object allows you to add to Tailwind's default theme.
    extend: {},
  },
  // The 'plugins' array is where you can add official or third-party Tailwind CSS plugins.
  plugins: [],
}
