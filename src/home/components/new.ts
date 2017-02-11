import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match';
import { MatchService } from '../services/matchService';

@Component({
	templateUrl: 'home/components/new.html'
})
export class NewComponent {

	match: Match = new Match();

	constructor(private matchService: MatchService){

	}

	onSubmit() {
		this.matchService.create(this.match)
			.subscribe((res)=> console.log(res), (err)=> console.log(err));
	}
}