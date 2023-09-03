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
      width: {
        '13':'13%',
        '14':'14%',
        '15':'15%',
        '16':'16%',
        '35': '35%',
        '800':'800px',
        '900':'900px'
      },
      height: {
        '900':'900px',
        '1000':'1000px',
        '1100':'1100px',
        '1800':'1800px',
        '4000':'4000px',
        '490':'490px',
        '600':'600px',
        '9/10':'89%'
      },
      colors: {
        customGray: '#D9D9D9',
      },
      minHeight: {
        '10': '10rem', 
        '20': '20rem', 
        '50': '50rem',
        '60': '60rem',
        '900':'900px',
        '1100':'1100px'
      },
      minWidth: {
        '800':'800px'
      },
      scale: {
        '2': '0.2',
        '1.5': '0.15',
        '1.3': '0.13',
        '1.2': '0.12',
      },
      borderWidth: {
        '5':'5px'
      },
      fontSize: { 
        'mxsm':'0.7rem',
        'xsm':'0.56rem'
      },
      backgroundColor: {
        'deepblue':'#474D71'
      }
    },
  },
  plugins: [],
}
export default config
