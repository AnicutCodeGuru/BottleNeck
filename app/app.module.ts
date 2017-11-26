import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { ProductService, PubSubService } from './_services/index';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBFwLDpxcSARYvT5PtDdytAVLnEWBC86ZE'
        })
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [
        ProductService,
        PubSubService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }