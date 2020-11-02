import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BROWSER_PROPERTIES,
  IS_BROWSER,
  IS_MOBILE,
  LOCAL_STORAGE,
  SESSION_STORAGE,
} from '@app/core/tokens/app.tokens';

import { SessionStorage } from '@app/core/models/session-storage';
import { BrowserProperties } from '@app/core/models/browser-properties';
import { LocalStorage } from '@app/core/models/local-storage';

export function getLocalStorage(): LocalStorage {
  return {
    getItem(key: string): string {
      return localStorage.getItem(key);
    },

    setItem(key: string, value: string): void {
      localStorage.setItem(key, value);
    },

    removeItem(key: string): void {
      localStorage.removeItem(key);
    },

    has(key: string): boolean {
      return localStorage.getItem(key) ? true : false;
    },
  };
}

export function getSessionStorage(): SessionStorage {
  return {
    getItem(key: string): string {
      return sessionStorage.getItem(key);
    },

    setItem(key: string, value: string): void {
      sessionStorage.setItem(key, value);
    },

    removeItem(key: string): void {
      sessionStorage.removeItem(key);
    },

    has(key: string): boolean {
      return sessionStorage.getItem(key) ? true : false;
    },
  };
}

export function browserProperties(): BrowserProperties {
  const userAgent = navigator.userAgent;

  const browserName =
    userAgent.indexOf('Opera') !== -1
      ? 'Opera'
      : userAgent.indexOf('MSIE') !== -1
      ? 'Microsoft Internet Explorer'
      : userAgent.indexOf('Chrome') !== -1
      ? 'Chrome'
      : userAgent.indexOf('Safari') !== -1
      ? 'Safari'
      : userAgent.indexOf('Firefox') !== -1
      ? 'Firefox'
      : 'unknown';

  const BROWSER_SUPPORT_WEBP = ['Chrome', 'Opera'];

  return {
    browserName,
    supportWebp: BROWSER_SUPPORT_WEBP.includes(browserName),
  };
}

function testRegex(regex: RegExp): boolean {
  return regex.test(navigator.userAgent.toLowerCase());
}

export function isMobile(): boolean {
  const isiPad = testRegex(/ipad/i);
  const isiPod = testRegex(/ipod/i);
  const isWebOS = testRegex(/webos/i);
  const isiPhone = testRegex(/iphone/i);
  const isAndroid = testRegex(/android/i);
  const isiDevice = testRegex(/ipad|iphone|ipod/i);
  const isWindowsPhone = testRegex(/windows phone/i);
  const isSamsungBrowser = testRegex(/SamsungBrowser/i);
  const isMobileSafariBrowser = testRegex(/mobile safari/i);

  return (
    isAndroid ||
    isiPad ||
    isiPhone ||
    isiPod ||
    isiDevice ||
    isWebOS ||
    isWindowsPhone ||
    isSamsungBrowser ||
    isMobileSafariBrowser
  );
}



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: IS_BROWSER, useValue: true },
    { provide: IS_MOBILE, useFactory: isMobile, deps: [] },
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage, deps: [] },
    { provide: SESSION_STORAGE, useFactory: getSessionStorage, deps: [] },
    { provide: BROWSER_PROPERTIES, useFactory: browserProperties, deps: [] },
  ],
})
export class AppBrowserModule { }
