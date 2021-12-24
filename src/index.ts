if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

export {withThemeProvider} from "./withThemeProvider";
// make it work with --isolatedModules
export default {};
