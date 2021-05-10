import {
  trigger,
  state,
  style,
  transition,
  animate,
  animateChild,
  query
} from "@angular/animations";

export const onSideNavChange = trigger("onSideNavChange", [
  state(
    "close",
    style({
      "min-width": "50px"
    })
  ),
  state(
    "open",
    style({
      "min-width": "200px"
    })
  ),
  transition("close => open", animate("250ms ease-in-out")),
  transition("open => close", animate("250ms ease-in-out"))
]);

export const onToolbarChange = trigger("onToolbarChange", [
  state(
    "close",
    style({
      "left": "60px",
      "width": "calc(100% - 60px)"
    })
  ),
  state(
    "open",
    style({
      "left": "220px",
      "width": "calc(100% - 220px)"

    })
  ),
  state(
    "default",
    style({
      "left": "0px",
      "width": "calc(100% - 0px)"

    })
  ),
  // transition("close => open", animate("250ms ease-in-out")),
  // transition("open => close", animate("250ms ease-in-out"))
  transition("close => default", animate("250ms ease-in-out"))
]);

export const onMainContentChange = trigger("onMainContentChange", [
  state(
    "close",
    style({
      "margin-left": "60px"
    })
  ),
  state(
    "open",
    style({
      "margin-left": "220px"
    })
  ),
  transition("close => open", animate("250ms ease-in-out")),
  transition("open => close", animate("250ms ease-in-out"))
]);

export const animateText = trigger("animateText", [
  state(
    "hide",
    style({
      display: "none",
      opacity: 0
    })
  ),
  state(
    "show",
    style({
      display: "block",
      opacity: 1
    })
  ),
  transition("close => open", animate("50ms ease-in-out")),
  transition("open => close", animate("250ms ease-in-out"))
]);
