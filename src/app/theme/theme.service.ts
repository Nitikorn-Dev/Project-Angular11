import { Injectable, Inject } from "@angular/core";
import { Theme, THEMES, ACTIVE_THEME } from "./symbols";

@Injectable({ providedIn: "root" })
export class ThemeService {
  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public theme: string
  ) {
    // console.log(theme)
    // console.log(this.theme)
    // console.log(this.themes)
    // this.getActiveTheme()
    // this.getProperty('--primary')
    // this.updateTheme("light", { "--primay": "g" });
  }

  getTheme(name: string) {
    const theme = this.themes.find(t => t.name === name);
    if (!theme) {
      throw new Error(`Theme not found ${name}`);
    }
    // console.log(theme)
    return theme;
  }

  getActiveTheme() {
    return this.getTheme(this.theme);
  }

  getProperty(propName: string) {
    return this.getActiveTheme().properties[propName];
  }

  registerTheme(theme: Theme) {
    this.themes.push(theme);
  }

  // updateTheme(name: string, properties: { [key: string]: string }) {
  //   const theme = this.getTheme(name);
  //   theme.properties = { ...theme.properties, ...properties };
  //   console.log(theme.properties);
  // }
}
