import { Directive, OnInit, Renderer2, ElementRef } from "@angular/core";
import { ThemeService } from "./theme.service";
import { Theme } from "./symbols";

@Directive({
  selector: "[theme]"
})
export class ThemeDirective implements OnInit {
  constructor(
    private _themeService: ThemeService,
    private _elRef: ElementRef,
    private _renDerer: Renderer2
  ) {}

  ngOnInit() {
    const active = this._themeService.getActiveTheme();
    console.log(active)
    if (active) {
      this.updateTheme(active);
    }
  }

  updateTheme(theme: Theme) {
    for (const key in theme.properties) {
      this._elRef.nativeElement.style.setProperty(key, theme.properties[key]);
    }
  }
}
