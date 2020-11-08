import {
  HEADER_STYLE,
} from '@header/constants/header-constants';

export interface Header {
  classType: string;
  showOptions: boolean;
  title: string;
  showTitle: boolean;
}

export type HeaderSelection = Readonly<{
  style: string;
  title: string;
  showTitle: boolean;
}>;

export const HEADER_STYLES: Header[] = [
  {
    classType: HEADER_STYLE.BANNER,
    showOptions: true,
    title: null,
    showTitle: false,
  },
  {
    classType: HEADER_STYLE.BASIC,
    showOptions: false,
    title: null,
    showTitle: false,
  },
];
