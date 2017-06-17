import { Component } from '@angular/core';

import { FirebaseConfigService } from './../../core/services/firebase-config.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent  {
    constructor(private firebaseConfig: FirebaseConfigService) { }

}