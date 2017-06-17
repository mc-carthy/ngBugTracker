import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

import { FirebaseConfigService } from './services/firebase-config.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: []
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule)
    {
        if (parentModule)
        {
            throw new Error("An instance of CoreModule already exists. Only import in the root (App) Module");
        }
    }

    static forRoot(): ModuleWithProviders
    {
        return {
            ngModule: CoreModule,
            providers: [ FirebaseConfigService ]
        }
    }
}
