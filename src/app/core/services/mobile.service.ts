import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IS_MOBILE } from '@core/tokens/app.tokens';
import { EventManager } from '@angular/platform-browser';

export const MIN_WIDTH_MOBILE = 1023;
@Injectable({
  providedIn: 'root',
})
export class MobileService {
    
  public isMobileDeviceSubject$: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isMobile || typeof window !== 'undefined'
      ? window.innerWidth <= MIN_WIDTH_MOBILE
      : this.isMobile
  );

  constructor(
    private eventManager: EventManager,
    @Inject(IS_MOBILE) public isMobile: boolean
  ) {
    if (typeof window === 'undefined') {
      return;
    }
    this.eventManager.addGlobalEventListener(
      'window',
      'resize',
      this.onResize.bind(this)
    );
  }

  get isMobileDevice$(): Observable<boolean> {
    return this.isMobileDeviceSubject$.asObservable();
  }

  private onResize(event: any): void {
    this.isMobileDeviceSubject$.next(
      this.isMobile || event.target.innerWidth <= MIN_WIDTH_MOBILE
    );
  }
}
