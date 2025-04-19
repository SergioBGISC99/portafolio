import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

export const fadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),

    query(':enter', [style({ opacity: 0 })], { optional: true }),

    group([
      query(':leave', [animate('600ms ease', style({ opacity: 0 }))], {
        optional: true,
      }),
      query(':enter', [animate('600ms ease', style({ opacity: 1 }))], {
        optional: true,
      }),
    ]),
  ]),
]);
