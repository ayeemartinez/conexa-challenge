import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary':{
          '100':'#ffcddf',
          '200':'#ff607e',
          '300':'#EE1D52',
        },
        'secondary':{
          '100':'#916400',
          '200':'#FFC107',
        },
        'neutrals':{
          '100':'#F7F7F7',
          '200':'#EDEDED',
          '300':'#C4C4C4',
          '400':'#5C5C5C',
          '500':'#333333',
        }

      }
    },
  },
  plugins: [],
}
export default config
