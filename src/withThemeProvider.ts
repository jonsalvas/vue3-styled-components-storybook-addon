
import { Story } from "@storybook/api";
import { ThemeProvider } from "vue3-styled-components";

export const withThemeProvider = (themes: any) => (story: Story) => ({
  components: { story, ThemeProvider },
  data: () => ({
    themes,
    themeOptions: Object.keys(themes),
    selectedThemeOption: Object.keys(themes)[1],
    themeUpdateCount: 0
  }),
  computed: {
    selectedTheme() {
        return this.themes[this.selectedThemeOption];
    }
  },
  watch: {
    selectedTheme() {
      // force update of theme as theme provider is not reactive
      this.themeUpdateCount += 1;
    }
  },
  template: `

  <ThemeProvider  :key="themeUpdateCount" :theme="selectedTheme"><story/></ThemeProvider>
  
  <button class="themepicker">☰</button>
    <nav class="menu">
    <select class="menuselect" v-model="selectedThemeOption" size="3">
        <option v-for="option in themeOptions" :value="option">{{ option }}</option>
    </select>
    </nav>
  
  `,
});

