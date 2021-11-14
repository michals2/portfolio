/**
 * https://theme-ui.com/theming/
 * text - Body foreground color
 * background - Body background color
 * primary - Primary brand color for links, buttons, etc.
 * secondary - A secondary brand color for alternative styling
 * accent - A contrast color for emphasizing UI
 * highlight - A background color for highlighting text
 * muted - A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
 */

// const colorPalettes = {
//   miami: ["#70ffdf", "#ff4df0", "#045ded", "#1d269b", "#9d4dff"],
// }

const themeUiConfig = {
  colors: {
    modes: {
      light: {
        background: "#eeeeee",
        muted: "#c8c5c5",
        text: "#050607",
        primary: "#303841",
        secondary: "#1d269b",
        accent: "#70ffdf",
        highlight: "#ff4df0"
      },
      dark: {
        background: "#202124",
        muted: "#303841",
        text: "#eeeeee",
        primary: "#70ffdf",
        secondary: "#1d269b",
        accent: "#9d4dff",
        highlight: "#ff4df0"
      },
    },
  },
}

export default themeUiConfig
