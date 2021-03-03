import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContentComponent } from "./content/content.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { routing } from "./app.routes";

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AboutusComponent,
    ContentComponent,
    ContactusComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
