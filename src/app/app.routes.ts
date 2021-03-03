import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContentComponent } from "./content/content.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "content", component: ContentComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "contactus", component: ContactusComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes,
  {
    useHash: true
  }
);
