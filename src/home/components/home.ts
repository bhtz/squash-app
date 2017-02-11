import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home',
	template: `
		<div class="jumbotron text-center">
			<div class="container">
				<p class="lead">
					SQUASH APP
				</p>
			</div>
		</div>
	`
})
export class HomeComponent implements OnInit{
	constructor() { }

	ngOnInit() { }
}