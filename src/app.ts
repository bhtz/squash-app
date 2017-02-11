import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<nav class="navbar navbar-inverse" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" [routerLink]="['']">
						<i class="fa fa-home"></i> Squash App
					</a>
				</div>
		
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li><a [routerLink]="['new']"><i class="fa fa-info-circle"></i> Nouveau</a></li>
						<li><a [routerLink]="['matchs']"><i class="fa fa-info-circle"></i> Liste</a></li>
					</ul>
				</div>
			</div>
		</nav>
		
		<div class="container">
			<router-outlet></router-outlet>
		</div>
	`
})
export class AppComponent implements OnInit { 
	constructor() { }

	ngOnInit() { }
}