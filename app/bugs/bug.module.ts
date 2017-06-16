import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
    imports: [ 
        SharedModule
    ],
    exports: [],
    declarations: [
        BugListComponent
    ],
    providers: [],
})
export class BugModule { }
