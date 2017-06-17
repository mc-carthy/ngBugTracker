import { Injectable } from '@angular/core';

import { FirebaseConfigService } from './../../core/services/firebase-config.service';

@Injectable()
export class BugService {

    constructor(private firebaseConfig: FirebaseConfigService) { }

}