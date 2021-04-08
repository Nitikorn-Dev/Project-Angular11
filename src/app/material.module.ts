import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [MatCardModule, MatSidenavModule, MatToolbarModule, MatIconModule]
})
export class MaterialModule {}
