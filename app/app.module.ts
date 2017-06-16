import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BugModule } from './bugs/bug.module';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        BugModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule
{

}