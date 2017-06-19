import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { StatusPipe } from './pipes/status.pipe';
import { SeverityPipe } from './pipes/severity.pipe';

@NgModule({
    imports: [ CommonModule ],
    exports: [ 
        CommonModule,
        StatusPipe,
        SeverityPipe
    ],
    declarations: [
        StatusPipe,
        SeverityPipe
    ]
})

export class SharedModule { }
