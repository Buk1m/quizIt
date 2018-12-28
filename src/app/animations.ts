import {animate, state, style, transition, trigger} from '@angular/animations';

export const appear = trigger(
  'enterAnimation', [
    transition(':enter', [
      style({transform: 'translateY(75px)', opacity: 0}),
      animate('350ms', style({transform: 'translateY(0)', opacity: 1}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0)', opacity: 1}),
      animate('0ms', style({transform: 'translateY(100%)', opacity: 0}))
    ])
  ],
);

export const fade = trigger(
  'fadeInOut', [
    state(' *', style({opacity: 1})),
    state('void', style({opacity: 0})),
    transition('void => *', [
      animate('300ms')
    ])
  ]
);




