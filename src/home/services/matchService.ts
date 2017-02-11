import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Match} from '../models/match';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchService {

    baseUrl: string = 'http://139.59.168.89:5984/squash';

    constructor(private http: Http) {

    }

    getAll() : Observable<any> {
        return this.http.get(this.baseUrl + '/_all_docs?include_docs=true').map((res: Response) => res.json().rows);
    }

    get(id: string){
        return this.http.get(this.baseUrl + '/' + id).map((res: Response) => res.json());
    }

    create(match: Match){
        return this.http.post(this.baseUrl, match)
        .map((res: Response) => res.json());
    }
}