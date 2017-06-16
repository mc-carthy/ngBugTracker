import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugListComponent } from './bugs/bug-list/bug-list.component';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', component: BugListComponent }
    ])
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
