import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { FirebaseConfigService } from './../../core/services/firebase-config.service';

@Injectable()
export class BugService {

    private bugsDbRef = this.firebaseConfig.database.ref('/bugs');

    constructor(private firebaseConfig: FirebaseConfigService) { }

    getAddedBugs(): Observable<any>
    {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_added', bug => {
                obs.next(bug.val());
            },
            err => {
                obs.throw(err);
            })
        })
    }
}