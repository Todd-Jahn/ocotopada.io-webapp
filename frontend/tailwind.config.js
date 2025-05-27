/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'octopoda-primary': '#244285',
        'octopoda-coral': '#FF7262',
        'octopoda-ivory': '#F8F6F1',
        'octopoda-sage': '#5FA896',
        'octopoda-lilac': '#A5A7FF',
        'coral-600': '#FF5842',
        'blue-700': '#1A2E5C',
      },
      fontFamily: {
        'sans': ['Noto Sans SC', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Microsoft YaHei', '微软雅黑', 'sans-serif'],
        'display': ['Noto Sans SC', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Microsoft YaHei', '微软雅黑', 'sans-serif'],
        'chinese': ['Noto Sans SC', 'Microsoft YaHei', '微软雅黑', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '24px',
        xl: '40px',
      },
      boxShadow: {
        'octopoda': '0 25px 50px -12px rgba(36, 66, 133, 0.25)',
        'coral': '0 25px 50px -12px rgba(255, 114, 98, 0.25)',
        'sage': '0 25px 50px -12px rgba(95, 168, 150, 0.25)',
        'glow': '0 0 20px rgba(255, 114, 98, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 114, 98, 0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.02em',
        'wide': '0.05em',
        'wider': '0.1em',
      },
      lineHeight: {
        '3': '.75rem',
        '4': '1rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
      },
    },
  },
  plugins: [],
};