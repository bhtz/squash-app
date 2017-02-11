import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import { HomeComponent } from './components/home';
import { NewComponent } from './components/new';
import { ListComponent } from './components/list';

import { MatchService } from './services/matchService';

@NgModule({
    declarations: [HomeComponent, NewComponent, ListComponent],
    providers: [MatchService],
    imports     : [BrowserModule, FormsModule, HttpModule],
})
export class HomeModule {
}