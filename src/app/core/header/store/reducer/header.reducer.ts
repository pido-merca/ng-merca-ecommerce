import { Action, createReducer, on } from '@ngrx/store';
import { HEADER_STYLE } from '@header/constants/header-constants';
import {
  Header,
  HEADER_STYLES,
} from '@header/components/interfaces/header.interface';
import { setHeaderStyleAction } from '@header/store/actions/header.action';

export const initialState: Header = HEADER_STYLES.find(
  (item) => item.classType === HEADER_STYLE.BANNER
);

const reducer = createReducer(
  initialState,
  on(setHeaderStyleAction, (state, { selection }) => {
    const headerStyles = {
      ...HEADER_STYLES.find((item) => item.classType === selection.style),
    };
    return {
      ...headerStyles,
      title: selection.title,
      showTitle: selection.showTitle,
    };
  })
);

export function headerStyleReducer(state: Header, action: Action): Header {
  return reducer(state, action);
}
