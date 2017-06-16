import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { BugRoutingModule } from './bug-routing.module';

import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
    imports: [ 
        SharedModule,
        BugRoutingModule
    ],
    exports: [],
    declarations: [
        BugListComponent
    ],
    providers: [],
})
export class BugModule { }
