import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppSearchComponent} from "./app-search/app-search.component";
import {AppSearchTemplateDirective} from "./app-search/app-search-template.directive";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        AppSearchComponent,
        AppSearchTemplateDirective,
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
