import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition(':enter',[
    style({
        opacity:0,
    }),
    animate(500),
  ]),
  transition(':leave',[
    animate(500, style({
        opacity:0,
    })),
  ])
]);





