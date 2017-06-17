import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Bug } from './../models/bug';

import { FirebaseConfigService } from './../../core/services/firebase-config.service';

@Injectable()
export class BugService {

    private bugsDbRef = this.firebaseConfig.database.ref('/bugs');

    constructor(private firebaseConfig: FirebaseConfigService) { }

    getAddedBugs(): Observable<any>
    {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_added', bug => {
                const newBug = bug.val() as Bug;
                obs.next(newBug);
            },
            err => {
                obs.throw(err);
            })
        })
    }
}