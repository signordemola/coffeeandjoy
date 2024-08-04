// types/locomotive-scroll
declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el: Element;
    smooth?: boolean;
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    destroy(): void;
  }
}
