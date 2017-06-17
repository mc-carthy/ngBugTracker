import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { BugRoutingModule } from './bug-routing.module';

import { BugListComponent } from './bug-list/bug-list.component';

import { BugService } from './services/bug.service';

@NgModule({
    imports: [ 
        SharedModule,
        BugRoutingModule
    ],
    exports: [],
    declarations: [
        BugListComponent
    ],
    providers: [
        BugService
    ],
})
export class BugModule { }
