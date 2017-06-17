import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
require('firebase/databse');

import { FIREBASE_CONFIG } from './../constants/constants';

@Injectable()
export class FirebaseConfigService {

    private database: firebase.database.Database;

    constructor() {
        this.configureApp();
        this.configureDatabase();
    }

    configureApp()
    {
        firebase.initializeApp(FIREBASE_CONFIG);
    }

    configureDatabase()
    {
        this.database = firebase.database();
    }

}