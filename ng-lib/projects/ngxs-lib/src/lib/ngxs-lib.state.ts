import { State } from '@ngxs/store';

export interface NgxsLibStateModel {
  value: string;
}

@State<NgxsLibStateModel>({
  name: 'ngxsLib',
  defaults: {
    value: 'ngxs-lib'
  }
})
export class NgxsLibState {
}
