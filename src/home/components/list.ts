import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match';
import { MatchService } from '../services/matchService';

@Component({
    templateUrl: '/home/components/list.html'
})
export class ListComponent implements OnInit {

    public matchs: Array<Match> = new Array<Match>();

    constructor(private matchService: MatchService) {

    }

    ngOnInit() {
        this.matchService.getAll().subscribe((matchs) => {
            this.matchs = matchs.map((item:any) => {return item.doc});
        });
    }
}