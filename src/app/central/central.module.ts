import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CentralRoutingModule } from "./central-routing.module";
import { CentralComponent } from "./central.component";
import { HeaderComponent } from "./header/header.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [CentralComponent, HeaderComponent, AboutUsComponent, FooterComponent,HomeComponent],
    imports: [
        CommonModule,
        CentralRoutingModule
    ]
})
export class CentralModule { }