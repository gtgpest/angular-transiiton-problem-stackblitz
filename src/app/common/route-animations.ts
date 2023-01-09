import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from "@angular/animations";

const _trigger = "routeAnimations";

export const fadeAnimation = trigger(_trigger, [
  transition("* => *", [
    query(":enter", [style({ opacity: 0, position: "absolute", width: "100%" })], {
      optional: true,
    }),
    query(":leave", [style({ opacity: 1, position: "absolute", width: "100%" })], {
      optional: true,
    }),
  query(
    ":leave",
    [animate("0.4s", style({ opacity: 0 }))],
    { optional: true }
  ),
  query(
    ":enter",
    [animate("0.4s", style({ opacity: 1 }))],
    { optional: true }
  ),   
  ]),
]);


export const slideAnimation = trigger(_trigger, [
  transition("page1 => page2", [
    query(":enter, :leave", style({position: "absolute", width: "100%"}), {
      optional: true,
    }),
    group([
      query(
        ":enter",
        [
          style({transform: "translateX(100%)"}),
          animate("0.5s ease-in-out", style({transform: "translateX(0%)"})),
        ],
        {optional: true}
      ),
      query(
        ":leave",
        [
          style({transform: "translateX(0%)"}),
          animate(
            "0.5s ease-in-out",
            style({transform: "translateX(-100%)"})
          ),
        ],
        {optional: true}
      ),
    ]),
  ]),
  transition("page2 => page1", [
    query(":enter, :leave", style({position: "absolute", width: "100%"}), {
      optional: true,
    }),
    group([
      query(
        ":enter",
        [
          style({transform: "translateX(-100%)"}),
          animate("0.5s ease-in-out", style({transform: "translateX(0%)"})),
        ],
        {optional: true}
      ),
      query(
        ":leave",
        [
          style({transform: "translateX(0%)"}),
          animate("0.5s ease-in-out", style({transform: "translateX(100%)"})),
        ],
        {optional: true}
      ),
    ]),
  ]),
]);
