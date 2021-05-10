import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";

import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { FullLayoutComponent } from "./full-layout/full-layout.component";
import { SidebarComponent } from "./full-layout/sidebar/sidebar.component";
import { ToolbarComponent } from "./full-layout/toolbar/toolbar.component";
import { ThemeModule, darkTheme, lightTheme } from "./theme";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ThemeModule.forRoot({
      themes: [darkTheme, lightTheme],
      active: "dark"
    }),
    FormsModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
