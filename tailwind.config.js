/** @type {DefaultColors} */
const colors = require('tailwindcss/colors');
const { createThemes } = require('tw-colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {},
  plugins: [
    // require('tailwindcss-themer')({
    //   defaultTheme: {
    //     // put the default values of any config you want themed
    //     // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
    //     extend: {
    //       // colors is used here for demonstration purposes
    //       colors: {
    //         transparent: 'transparent',
    //         current: 'currentColor',
    //         black: colors.black,
    //         white: colors.white,
    //         gray: colors.slate,
    //         primary: colors.cyan,
    //         green: colors.emerald,
    //         yellow: colors.yellow,
    //         red: colors.rose,
    //       }
    //     }
    //   },
    //   themes: [
    //     {
    //       name: 'red',
    //       // put any overrides your theme has here
    //       // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
    //       extend: {
    //         colors: {
    //           primary: colors.red
    //         }
    //       }
    //     },
    //     {
    //       name: 'blue',
    //       // put any overrides your theme has here
    //       // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
    //       extend: {
    //         colors: {
    //           primary: colors.blue
    //         }
    //       }
    //     }
    //   ]
    // })

      createThemes({
        forest: {
            primary: colors.green
        },
        zopdev: {
            primary: colors.cyan
        }
      })
  ],
}

