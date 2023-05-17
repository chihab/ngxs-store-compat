import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLibState } from './ngxs-lib.state';

@NgModule({
    imports: [
        CommonModule,
        NgxsModule.forRoot([NgxsLibState], {
            selectorOptions: {
                injectContainerState: false,
            },
        }),
    ]
})
export class ShellModule { }
