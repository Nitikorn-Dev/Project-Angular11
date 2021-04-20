import { Theme } from "./symbols";

export const darkTheme: Theme = {
  name: "dark",
  properties: {
    "--background": "#1F2125",
    "--on-background": "#fff",
    "--box-shadow":"0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)",
    "--primary": "#2F90FF",
    "--on-primary": "#fff",
    "--secondary": "#474A4F",
    "--on-secondary": "#fff",
    "--surface": "#282A2F",
    "--on-surface": "#dddede",
    "--error": "#E74E3C",
    "--on-error": "#fff"
  }
};
