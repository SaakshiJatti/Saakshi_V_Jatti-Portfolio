/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* white-10 */
        input: "var(--color-input)", /* slate-800 */
        ring: "var(--color-ring)", /* cyan-400 */
        background: "var(--color-background)", /* true-dark */
        foreground: "var(--color-foreground)", /* zinc-200 */
        primary: {
          DEFAULT: "var(--color-primary)", /* gray-950 */
          foreground: "var(--color-primary-foreground)", /* zinc-200 */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* slate-900 */
          foreground: "var(--color-secondary-foreground)", /* zinc-200 */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* slate-900 */
          foreground: "var(--color-muted-foreground)", /* zinc-400 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* cyan-400 */
          foreground: "var(--color-accent-foreground)", /* gray-950 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* slate-900 */
          foreground: "var(--color-popover-foreground)", /* zinc-200 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* slate-800 */
          foreground: "var(--color-card-foreground)", /* zinc-200 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* gray-950 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        surface: "var(--color-surface)", /* slate-800 */
        'text-primary': "var(--color-text-primary)", /* zinc-200 */
        'text-secondary': "var(--color-text-secondary)", /* zinc-400 */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'heading': ['JetBrains Mono', 'monospace'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Roboto Mono', 'monospace'],
        'data': ['Source Code Pro', 'monospace'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elevation-1': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-2': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation-3': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(0, 245, 255, 0.3)',
        'glow-sm': '0 0 10px rgba(0, 245, 255, 0.2)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "float": "float 20s infinite linear",
        "pulse-glow": "pulse-glow 2s infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "33%": { transform: "translate3d(30px, -30px, 0) rotate(120deg)" },
          "66%": { transform: "translate3d(-20px, 20px, 0) rotate(240deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)" },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}