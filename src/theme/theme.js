import { extendTheme } from "@chakra-ui/react";

// const config = {
//     initialColorMode: 'light',
//     useSystemColorMode: false,
//   }

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
});

export default theme;