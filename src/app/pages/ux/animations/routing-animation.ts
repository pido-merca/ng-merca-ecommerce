import { transition, trigger, query, style, animate, group } from '@angular/animations';
import { homeRootAnimation } from '@app/app-routing.module';

const slideRightAnimation = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: '4' }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('300ms ease-in-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' }))
    ], { optional: true }),
  ])
];

const slideLeftAnimation = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: '4' }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('300ms ease-in-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('300ms ease-in-out', style({ transform: 'translateX(100%)' }))
    ], { optional: true }),
  ])
];

const slideLeftAnimationWithOutFixed = [
  query(':enter, :leave', style({ position: 'absolute', left: 0, right: 0 })),
  query(':leave', style({ transform: 'translateX(0%)' }), { optional: true }),
  query(':enter', style({ transform: 'translateX(-100%)' })),
  group([
      query(':leave', [
          animate('250ms ease-out', style({ transform: 'translateX(100%)' })),
      ], { optional: true }),
      query(':enter', [
          animate('250ms ease-in', style({ transform: 'translateX(0%)' })),
      ])
  ])
];

export const routeAnimations = [
  trigger('routeAnimations', [
    transition(`${homeRootAnimation} => *`, slideRightAnimation),
    transition(`* => ${homeRootAnimation}`, slideLeftAnimation),
  ])
];
