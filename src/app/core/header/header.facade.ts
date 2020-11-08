import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '@app/store/state/state';

import { Header, HeaderSelection } from '@header/components/interfaces/header.interface';
import { headerActions } from '@header/store/actions/header.action';
import { fetchHeaderStyle } from '@header/store/selects/header.selector';


@Injectable()
export class HeaderFacade {

  constructor(private store: Store<State>) {}

  public headerStyle$: Observable<Header> = this.store.pipe(
    select(fetchHeaderStyle)
  );

  public setHeaderStyle(selection: HeaderSelection): void {
    this.store.dispatch(headerActions.setHeaderStyleAction({
      selection
    }));
  }
}
