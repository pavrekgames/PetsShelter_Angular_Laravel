import './polyfills.server.mjs';
import {
  ActivatedRoute,
  ApplicationRef,
  BehaviorSubject,
  BrowserAnimationsModule,
  BrowserModule,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  DecimalPipe,
  Directive,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  Self,
  ServerModule,
  SkipSelf,
  Subject,
  TitleCasePipe,
  UpperCasePipe,
  Version,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  __classPrivateFieldGet,
  animate,
  animateChild,
  booleanAttribute,
  combineLatest,
  concat,
  debounceTime,
  delay,
  filter,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPlatformBrowser,
  isPromise,
  isSubscribable,
  keyframes,
  map,
  of,
  provideHttpClient,
  provideRouter,
  query,
  setClassMetadata,
  skip,
  startWith,
  state,
  style,
  take,
  takeUntil,
  tap,
  transition,
  trigger,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-DIM4OLSY.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-24VIC3GD.mjs";

// node_modules/ngx-spinner/fesm2022/ngx-spinner.mjs
var _c0 = ["overlay"];
function NgxSpinnerComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function NgxSpinnerComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NgxSpinnerComponent_div_0_div_2_div_1_Template, 1, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.spinner.class);
    \u0275\u0275styleProp("color", ctx_r2.spinner.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.spinner.divArray);
  }
}
function NgxSpinnerComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r3.template), \u0275\u0275sanitizeHtml);
  }
}
function NgxSpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1, 2);
    \u0275\u0275template(2, NgxSpinnerComponent_div_0_div_2_Template, 2, 5, "div", 3)(3, NgxSpinnerComponent_div_0_div_3_Template, 2, 3, "div", 4);
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.spinner.bdColor)("z-index", ctx_r0.spinner.zIndex)("position", ctx_r0.spinner.fullScreen ? "fixed" : "absolute");
    \u0275\u0275property("@.disabled", ctx_r0.disableAnimation)("@fadeIn", "in");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.template);
    \u0275\u0275advance();
    \u0275\u0275styleProp("z-index", ctx_r0.spinner.zIndex);
  }
}
var _c1 = ["*"];
var LOADERS = {
  "ball-8bits": 16,
  "ball-atom": 4,
  "ball-beat": 3,
  "ball-circus": 5,
  "ball-climbing-dot": 4,
  "ball-clip-rotate": 1,
  "ball-clip-rotate-multiple": 2,
  "ball-clip-rotate-pulse": 2,
  "ball-elastic-dots": 5,
  "ball-fall": 3,
  "ball-fussion": 4,
  "ball-grid-beat": 9,
  "ball-grid-pulse": 9,
  "ball-newton-cradle": 4,
  "ball-pulse": 3,
  "ball-pulse-rise": 5,
  "ball-pulse-sync": 3,
  "ball-rotate": 1,
  "ball-running-dots": 5,
  "ball-scale": 1,
  "ball-scale-multiple": 3,
  "ball-scale-pulse": 2,
  "ball-scale-ripple": 1,
  "ball-scale-ripple-multiple": 3,
  "ball-spin": 8,
  "ball-spin-clockwise": 8,
  "ball-spin-clockwise-fade": 8,
  "ball-spin-clockwise-fade-rotating": 8,
  "ball-spin-fade": 8,
  "ball-spin-fade-rotating": 8,
  "ball-spin-rotate": 2,
  "ball-square-clockwise-spin": 8,
  "ball-square-spin": 8,
  "ball-triangle-path": 3,
  "ball-zig-zag": 2,
  "ball-zig-zag-deflect": 2,
  cog: 1,
  "cube-transition": 2,
  fire: 3,
  "line-scale": 5,
  "line-scale-party": 5,
  "line-scale-pulse-out": 5,
  "line-scale-pulse-out-rapid": 5,
  "line-spin-clockwise-fade": 8,
  "line-spin-clockwise-fade-rotating": 8,
  "line-spin-fade": 8,
  "line-spin-fade-rotating": 8,
  pacman: 6,
  "square-jelly-box": 2,
  "square-loader": 1,
  "square-spin": 1,
  timer: 1,
  "triangle-skew-spin": 1
};
var DEFAULTS = {
  BD_COLOR: "rgba(51,51,51,0.8)",
  SPINNER_COLOR: "#fff",
  Z_INDEX: 99999
};
var PRIMARY_SPINNER = "primary";
var NgxSpinner = class _NgxSpinner {
  constructor(init) {
    Object.assign(this, init);
  }
  static create(init) {
    if (!init?.template && !init?.type) {
      console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`);
    }
    return new _NgxSpinner(init);
  }
};
var _NgxSpinnerService = class _NgxSpinnerService {
  /**
   * Creates an instance of NgxSpinnerService.
   * @memberof NgxSpinnerService
   */
  constructor() {
    this.spinnerObservable = new BehaviorSubject(null);
  }
  /**
   * Get subscription of desired spinner
   * @memberof NgxSpinnerService
   **/
  getSpinner(name) {
    return this.spinnerObservable.asObservable().pipe(filter((x) => x && x.name === name));
  }
  /**
   * To show spinner
   *
   * @memberof NgxSpinnerService
   */
  show(name = PRIMARY_SPINNER, spinner) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (spinner && Object.keys(spinner).length) {
          spinner["name"] = name;
          this.spinnerObservable.next(new NgxSpinner(__spreadProps(__spreadValues({}, spinner), {
            show: true
          })));
          resolve(true);
        } else {
          this.spinnerObservable.next(new NgxSpinner({
            name,
            show: true
          }));
          resolve(true);
        }
      }, 10);
    });
  }
  /**
   * To hide spinner
   *
   * @memberof NgxSpinnerService
   */
  hide(name = PRIMARY_SPINNER, debounce = 10) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.spinnerObservable.next(new NgxSpinner({
          name,
          show: false
        }));
        resolve(true);
      }, debounce);
    });
  }
};
_NgxSpinnerService.\u0275fac = function NgxSpinnerService_Factory(t) {
  return new (t || _NgxSpinnerService)();
};
_NgxSpinnerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NgxSpinnerService,
  factory: _NgxSpinnerService.\u0275fac,
  providedIn: "root"
});
var NgxSpinnerService = _NgxSpinnerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var NGX_SPINNER_CONFIG = new InjectionToken("NGX_SPINNER_CONFIG");
var _SafeHtmlPipe = class _SafeHtmlPipe {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
  transform(v) {
    if (v) {
      return this._sanitizer.bypassSecurityTrustHtml(v);
    }
  }
};
_SafeHtmlPipe.\u0275fac = function SafeHtmlPipe_Factory(t) {
  return new (t || _SafeHtmlPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
};
_SafeHtmlPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "safeHtml",
  type: _SafeHtmlPipe,
  pure: true
});
var SafeHtmlPipe = _SafeHtmlPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml"
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, null);
})();
var _NgxSpinnerComponent = class _NgxSpinnerComponent {
  // TODO: https://github.com/Napster2210/ngx-spinner/issues/259
  // @HostListener("document:keydown", ["$event"])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (this.spinnerDOM && this.spinnerDOM.nativeElement) {
  //     if (
  //       this.fullScreen ||
  //       (!this.fullScreen && this.isSpinnerZone(event.target))
  //     ) {
  //       event.returnValue = false;
  //       event.preventDefault();
  //     }
  //   }
  // }
  /**
   * Creates an instance of NgxSpinnerComponent.
   *
   * @memberof NgxSpinnerComponent
   */
  constructor(spinnerService, changeDetector, elementRef, globalConfig) {
    this.spinnerService = spinnerService;
    this.changeDetector = changeDetector;
    this.elementRef = elementRef;
    this.globalConfig = globalConfig;
    this.disableAnimation = false;
    this.spinner = new NgxSpinner();
    this.ngUnsubscribe = new Subject();
    this.setDefaultOptions = () => {
      const {
        type
      } = this.globalConfig ?? {};
      this.spinner = NgxSpinner.create({
        name: this.name,
        bdColor: this.bdColor,
        size: this.size,
        color: this.color,
        type: this.type ?? type,
        fullScreen: this.fullScreen,
        divArray: this.divArray,
        divCount: this.divCount,
        show: this.show,
        zIndex: this.zIndex,
        template: this.template,
        showSpinner: this.showSpinner
      });
    };
    this.bdColor = DEFAULTS.BD_COLOR;
    this.zIndex = DEFAULTS.Z_INDEX;
    this.color = DEFAULTS.SPINNER_COLOR;
    this.size = "large";
    this.fullScreen = true;
    this.name = PRIMARY_SPINNER;
    this.template = null;
    this.showSpinner = false;
    this.divArray = [];
    this.divCount = 0;
    this.show = false;
  }
  initObservable() {
    this.spinnerService.getSpinner(this.name).pipe(takeUntil(this.ngUnsubscribe)).subscribe((spinner) => {
      this.setDefaultOptions();
      Object.assign(this.spinner, spinner);
      if (spinner.show) {
        this.onInputChange();
      }
      this.changeDetector.detectChanges();
    });
  }
  /**
   * Initialization method
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnInit() {
    this.setDefaultOptions();
    this.initObservable();
  }
  /**
   * To check event triggers inside the Spinner Zone
   *
   * @param {*} element
   * @returns {boolean}
   * @memberof NgxSpinnerComponent
   */
  isSpinnerZone(element) {
    if (element === this.elementRef.nativeElement.parentElement) {
      return true;
    }
    return element.parentNode && this.isSpinnerZone(element.parentNode);
  }
  /**
   * On changes event for input variables
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnChanges(changes) {
    for (const propName in changes) {
      if (propName) {
        const changedProp = changes[propName];
        if (changedProp.isFirstChange()) {
          return;
        } else if (typeof changedProp.currentValue !== "undefined" && changedProp.currentValue !== changedProp.previousValue) {
          if (changedProp.currentValue !== "") {
            this.spinner[propName] = changedProp.currentValue;
            if (propName === "showSpinner") {
              if (changedProp.currentValue) {
                this.spinnerService.show(this.spinner.name, this.spinner);
              } else {
                this.spinnerService.hide(this.spinner.name);
              }
            }
            if (propName === "name") {
              this.initObservable();
            }
          }
        }
      }
    }
  }
  /**
   * To get class for spinner
   *
   * @memberof NgxSpinnerComponent
   */
  getClass(type, size) {
    this.spinner.divCount = LOADERS[type];
    this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((_, i) => i);
    let sizeClass = "";
    switch (size.toLowerCase()) {
      case "small":
        sizeClass = "la-sm";
        break;
      case "medium":
        sizeClass = "la-2x";
        break;
      case "large":
        sizeClass = "la-3x";
        break;
      default:
        break;
    }
    return "la-" + type + " " + sizeClass;
  }
  /**
   * Check if input variables have changed
   *
   * @memberof NgxSpinnerComponent
   */
  onInputChange() {
    this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
  }
  /**
   * Component destroy event
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
};
_NgxSpinnerComponent.\u0275fac = function NgxSpinnerComponent_Factory(t) {
  return new (t || _NgxSpinnerComponent)(\u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NGX_SPINNER_CONFIG, 8));
};
_NgxSpinnerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgxSpinnerComponent,
  selectors: [["ngx-spinner"]],
  viewQuery: function NgxSpinnerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.spinnerDOM = _t.first);
    }
  },
  inputs: {
    bdColor: "bdColor",
    size: "size",
    color: "color",
    type: "type",
    fullScreen: "fullScreen",
    name: "name",
    zIndex: "zIndex",
    template: "template",
    showSpinner: "showSpinner",
    disableAnimation: "disableAnimation"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 1,
  consts: [["class", "ngx-spinner-overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "ngx-spinner-overlay"], ["overlay", ""], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
  template: function NgxSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, NgxSpinnerComponent_div_0_Template, 6, 12, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.spinner.show);
    }
  },
  dependencies: [NgForOf, NgIf, SafeHtmlPipe],
  styles: [".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],
  data: {
    animation: [trigger("fadeIn", [state("in", style({
      opacity: 1
    })), transition(":enter", [style({
      opacity: 0
    }), animate(300)]), transition(":leave", animate(200, style({
      opacity: 0
    })))])]
  },
  changeDetection: 0
});
var NgxSpinnerComponent = _NgxSpinnerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("fadeIn", [state("in", style({
        opacity: 1
      })), transition(":enter", [style({
        opacity: 0
      }), animate(300)]), transition(":leave", animate(200, style({
        opacity: 0
      })))])],
      template: `<div
  [@.disabled]="disableAnimation"
  [@fadeIn]="'in'"
  *ngIf="spinner.show"
  class="ngx-spinner-overlay"
  [style.background-color]="spinner.bdColor"
  [style.z-index]="spinner.zIndex"
  [style.position]="spinner.fullScreen ? 'fixed' : 'absolute'"
  #overlay
>
  <div *ngIf="!template" [class]="spinner.class" [style.color]="spinner.color">
    <div *ngFor="let index of spinner.divArray"></div>
  </div>
  <div *ngIf="template" [innerHTML]="template | safeHtml"></div>
  <div class="loading-text" [style.z-index]="spinner.zIndex">
    <ng-content></ng-content>
  </div>
</div>
`,
      styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}\n"]
    }]
  }], function() {
    return [{
      type: NgxSpinnerService
    }, {
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [NGX_SPINNER_CONFIG]
      }]
    }];
  }, {
    bdColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    showSpinner: [{
      type: Input
    }],
    disableAnimation: [{
      type: Input
    }],
    spinnerDOM: [{
      type: ViewChild,
      args: ["overlay"]
    }]
  });
})();
var _NgxSpinnerModule = class _NgxSpinnerModule {
  static forRoot(config2) {
    return {
      ngModule: _NgxSpinnerModule,
      providers: [{
        provide: NGX_SPINNER_CONFIG,
        useValue: config2
      }]
    };
  }
};
_NgxSpinnerModule.\u0275fac = function NgxSpinnerModule_Factory(t) {
  return new (t || _NgxSpinnerModule)();
};
_NgxSpinnerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgxSpinnerModule
});
_NgxSpinnerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
var NgxSpinnerModule = _NgxSpinnerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [NgxSpinnerComponent, SafeHtmlPipe],
      exports: [NgxSpinnerComponent]
    }]
  }], null, null);
})();

// src/app/services/spinner.service.ts
var _SpinnerService = class _SpinnerService {
  constructor(spinner) {
    this.spinner = spinner;
  }
  show() {
    this.spinner.show();
  }
  hide() {
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }
};
_SpinnerService.\u0275fac = function SpinnerService_Factory(t) {
  return new (t || _SpinnerService)(\u0275\u0275inject(NgxSpinnerService));
};
_SpinnerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpinnerService, factory: _SpinnerService.\u0275fac, providedIn: "root" });
var SpinnerService = _SpinnerService;

// src/environments/environment.development.ts
var environment = {
  production: false,
  API_URL: "http://127.0.0.1:8000/api/"
};

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.title = "PetsShelter_Angular";
    _AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }
};
_AppComponent.isBrowser = new BehaviorSubject(true);
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["type", "ball-square-clockwise-spin", "color", "#6a994e"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ngx-spinner", 0)(1, "router-outlet");
  }
}, dependencies: [RouterOutlet, NgxSpinnerComponent], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 10 });
})();

// src/app/LocalStorage.ts
var LocalStorage = class {
  constructor() {
    this.length = 0;
  }
  clear() {
  }
  getItem(key) {
    return null;
  }
  key(index) {
    return null;
  }
  removeItem(key) {
  }
  setItem(key, value) {
  }
};
var _LocalstorageService = class _LocalstorageService {
  constructor() {
    this.length = 0;
    this.storage = new LocalStorage();
    AppComponent.isBrowser.subscribe((isBrowser) => {
      if (isBrowser) {
        this.storage = localStorage;
      }
    });
  }
  clear() {
    this.storage.clear();
  }
  getItem(key) {
    return this.storage.getItem(key);
  }
  key(index) {
    return this.storage.key(index);
  }
  removeItem(key) {
    return this.storage.removeItem(key);
  }
  setItem(key, value) {
    return this.storage.setItem(key, value);
  }
};
_LocalstorageService.\u0275fac = function LocalstorageService_Factory(t) {
  return new (t || _LocalstorageService)();
};
_LocalstorageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocalstorageService, factory: _LocalstorageService.\u0275fac, providedIn: "root" });
var LocalstorageService = _LocalstorageService;

// src/app/services/token.service.ts
var _TokenService = class _TokenService {
  constructor(localStorage2) {
    this.localStorage = localStorage2;
  }
  handleToken(token) {
    this.setToken(token);
  }
  setToken(token) {
    return this.localStorage.setItem("token", token);
  }
  getToken() {
    return this.localStorage.getItem("token");
  }
  removeToken() {
    this.localStorage.removeItem("token");
  }
  isTokenValid() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return payload.iss === "http://127.0.0.1:8000/api/login" ? true : false;
      }
    }
    return false;
  }
  payload(token) {
    const payload = token.split(".")[1];
    return this.decodeToken(payload);
  }
  decodeToken(token) {
    return JSON.parse(window.atob(token));
  }
  loggedIn() {
    return this.isTokenValid();
  }
  getTokenValue() {
    const token = this.getToken();
    return token;
  }
  isTokenExpired() {
    const token = this.getToken();
    if (token !== null) {
      const expiry = JSON.parse(atob(token.split(".")[1]));
      return expiry.exp < Date.now() / 1e3;
    } else {
      return false;
    }
  }
};
_TokenService.\u0275fac = function TokenService_Factory(t) {
  return new (t || _TokenService)(\u0275\u0275inject(LocalstorageService));
};
_TokenService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
var TokenService = _TokenService;

// src/app/services/api-pets.service.ts
var _ApiPetsService = class _ApiPetsService {
  constructor(http, tokenService) {
    this.http = http;
    this.tokenService = tokenService;
    this.API_URL = environment.API_URL;
  }
  addPet(data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "add-pet", data, { "headers": headers });
  }
  getNewestPets() {
    return this.http.get(this.API_URL + "newest-pets");
  }
  getPetsToAdopt() {
    return this.http.get(this.API_URL + "pets-to-adopt");
  }
  getMyPets() {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "my-pets", { "headers": headers });
  }
  getPetToAdopt(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "pets-to-adopt/" + id, { "headers": headers });
  }
  getPetToEdit(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "my-pets/edit/" + id, { "headers": headers });
  }
  editPet(id, data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.put(this.API_URL + "my-pets/edit/" + id, data, { "headers": headers });
  }
  editPetPhoto(id, data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "my-pets/edit-photo/" + id, data, { "headers": headers });
  }
  deletePet(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.delete(this.API_URL + "my-pets/delete/" + id, { "headers": headers });
  }
  getSavedPets() {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "saved-pets", { "headers": headers });
  }
  checkSavedPet(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "check-saved-pet/" + id, { "headers": headers });
  }
  savePet(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "add-saved-pet/" + id, null, { "headers": headers });
  }
  deleteSavedPet(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.delete(this.API_URL + "saved-pets/delete/" + id, { "headers": headers });
  }
};
_ApiPetsService.\u0275fac = function ApiPetsService_Factory(t) {
  return new (t || _ApiPetsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(TokenService));
};
_ApiPetsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiPetsService, factory: _ApiPetsService.\u0275fac, providedIn: "root" });
var ApiPetsService = _ApiPetsService;

// node_modules/@angular/forms/fesm2022/forms.mjs
var _BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
};
_BaseControlValueAccessor.\u0275fac = function BaseControlValueAccessor_Factory(t) {
  return new (t || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
};
_BaseControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BaseControlValueAccessor
});
var BaseControlValueAccessor = _BaseControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var _BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
};
_BuiltInControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuiltInControlValueAccessor_BaseFactory;
  return function BuiltInControlValueAccessor_Factory(t) {
    return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
  };
})();
_BuiltInControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BuiltInControlValueAccessor,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var BuiltInControlValueAccessor = _BuiltInControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var _CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
};
_CheckboxControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxControlValueAccessor_BaseFactory;
  return function CheckboxControlValueAccessor_Factory(t) {
    return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
  };
})();
_CheckboxControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxControlValueAccessor = _CheckboxControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent2 = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent2.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var _DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
};
_DefaultValueAccessor.\u0275fac = function DefaultValueAccessor_Factory(t) {
  return new (t || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
};
_DefaultValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var DefaultValueAccessor = _DefaultValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```typescript
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `min` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static min(min) {
    return minValidator(min);
  }
  /**
   * @description
   * Validator that requires the control's value to be less than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 15
   *
   * ```typescript
   * const control = new FormControl(16, Validators.max(15));
   *
   * console.log(control.errors); // {max: {max: 15, actual: 16}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `max` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static max(max) {
    return maxValidator(max);
  }
  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static required(control) {
    return requiredValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```typescript
   * const control = new FormControl('some value', Validators.requiredTrue);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   * pattern suitable for common use cases. The pattern is based on the definition of a valid email
   * address in the [WHATWG HTML
   * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
   * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
   * lengths of different parts of the address).
   *
   * The differences from the WHATWG version include:
   * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
   * - Disallow `local-part` to be longer than 64 characters.
   * - Disallow the whole address to be longer than 254 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static email(control) {
    return emailValidator(control);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use the
   * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays. The
   * `minLength` validator logic is also not invoked for values when their `length` property is 0
   * (for example in case of an empty string or an empty array), to support optional controls. You
   * can use the standard `required` validator if empty values should not be considered valid.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```typescript
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  /**
   * @description
   * Validator that requires the length of the control's value to be less than or equal
   * to the provided maximum length. This validator is also provided by default if you use the
   * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
   * only for types that have a numeric `length` property, such as strings or arrays.
   *
   * @usageNotes
   *
   * ### Validate that the field has maximum of 5 characters
   *
   * ```typescript
   * const control = new FormControl('Angular', Validators.maxLength(5));
   *
   * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
   * ```
   *
   * ```html
   * <input maxlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `maxlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  /**
   * @description
   * Validator that requires the control's value to match a regex pattern. This validator is also
   * provided by default if you use the HTML5 `pattern` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field only contains letters or spaces
   *
   * ```typescript
   * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
   *
   * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
   * ```
   *
   * ```html
   * <input pattern="[a-zA-Z ]*">
   * ```
   *
   * ### Pattern matching with the global or sticky flag
   *
   * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
   * can produce different results on the same input when validations are run consecutively. This is
   * due to how the behavior of `RegExp.prototype.test` is
   * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
   * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
   * Due to this behavior, it is recommended that when using
   * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
   * flag enabled.
   *
   * ```typescript
   * // Not recommended (since the `g` flag is used)
   * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
   *
   * // Good
   * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
   * ```
   *
   * @param pattern A regular expression to be used as is to test the values, or a string.
   * If a string is passed, the `^` character is prepended and the `$` character is
   * appended to the provided string (if not already present), and the resulting regular
   * expression is used to test the values.
   *
   * @returns A validator function that returns an error map with the
   * `pattern` property if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  /**
   * @description
   * Validator that performs no operation.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static nullValidator(control) {
    return nullValidator(control);
  }
  static compose(validators) {
    return compose(validators);
  }
  /**
   * @description
   * Compose multiple async validators into a single function that returns the union
   * of the individual error objects for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error objects of the async validators if the validation check fails, otherwise `null`.
   *
   * @see {@link updateValueAndValidity()}
   *
   */
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var _NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatus.\u0275fac = function NgControlStatus_Factory(t) {
  return new (t || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
};
_NgControlStatus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatus = _NgControlStatus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var _NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatusGroup.\u0275fac = function NgControlStatusGroup_Factory(t) {
  return new (t || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
};
_NgControlStatusGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 16,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatusGroup = _NgControlStatusGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop5 = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop5);
    dir.valueAccessor.registerOnTouched(noop5);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange2) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange2);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop5 = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop5);
  registerOnValidatorChange(dir._rawAsyncValidators, noop5);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange2 = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange2);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange2);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var _NgForm = class _NgForm extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
};
_NgForm.\u0275fac = function NgForm_Factory(t) {
  return new (t || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgForm.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: [InputFlags.None, "ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
});
var NgForm = _NgForm;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var _AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
};
_AbstractFormGroupDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AbstractFormGroupDirective_BaseFactory;
  return function AbstractFormGroupDirective_Factory(t) {
    return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
  };
})();
_AbstractFormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractFormGroupDirective,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var AbstractFormGroupDirective = _AbstractFormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var _NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
};
_NgModelGroup.\u0275fac = function NgModelGroup_Factory(t) {
  return new (t || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_NgModelGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: [InputFlags.None, "ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
});
var NgModelGroup = _NgModelGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var _NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name)
      this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
};
_NgModel.\u0275fac = function NgModel_Factory(t) {
  return new (t || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgModel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: [InputFlags.None, "disabled", "isDisabled"],
    model: [InputFlags.None, "ngModel", "model"],
    options: [InputFlags.None, "ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var NgModel = _NgModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var _\u0275NgNoValidate = class _\u0275NgNoValidate {
};
_\u0275NgNoValidate.\u0275fac = function \u0275NgNoValidate_Factory(t) {
  return new (t || _\u0275NgNoValidate)();
};
_\u0275NgNoValidate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
var \u0275NgNoValidate = _\u0275NgNoValidate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var _NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_NumberValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NumberValueAccessor_BaseFactory;
  return function NumberValueAccessor_Factory(t) {
    return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(t || _NumberValueAccessor);
  };
})();
_NumberValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var NumberValueAccessor = _NumberValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var _RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control)
      return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
};
_RadioControlRegistry.\u0275fac = function RadioControlRegistry_Factory(t) {
  return new (t || _RadioControlRegistry)();
};
_RadioControlRegistry.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RadioControlRegistry,
  factory: _RadioControlRegistry.\u0275fac,
  providedIn: "root"
});
var RadioControlRegistry = _RadioControlRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName)
      this.name = this.formControlName;
  }
};
_RadioControlValueAccessor.\u0275fac = function RadioControlValueAccessor_Factory(t) {
  return new (t || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
};
_RadioControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RadioControlValueAccessor = _RadioControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var _RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_RangeValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RangeValueAccessor_BaseFactory;
  return function RangeValueAccessor_Factory(t) {
    return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(t || _RangeValueAccessor);
  };
})();
_RangeValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RangeValueAccessor = _RangeValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var _FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
};
_FormControlDirective._ngModelWarningSentOnce = false;
_FormControlDirective.\u0275fac = function FormControlDirective_Factory(t) {
  return new (t || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormControlDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    form: [InputFlags.None, "formControl", "form"],
    isDisabled: [InputFlags.None, "disabled", "isDisabled"],
    model: [InputFlags.None, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var _FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
};
_FormGroupDirective.\u0275fac = function FormGroupDirective_Factory(t) {
  return new (t || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: [InputFlags.None, "formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormGroupDirective = _FormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var _FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
};
_FormGroupName.\u0275fac = function FormGroupName_Factory(t) {
  return new (t || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormGroupName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: [InputFlags.None, "formGroupName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormGroupName = _FormGroupName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var _FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
};
_FormArrayName.\u0275fac = function FormArrayName_Factory(t) {
  return new (t || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormArrayName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: [InputFlags.None, "formArrayName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormArrayName = _FormArrayName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var _FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added)
      this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException();
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
};
_FormControlName._ngModelWarningSentOnce = false;
_FormControlName.\u0275fac = function FormControlName_Factory(t) {
  return new (t || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};
_FormControlName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    name: [InputFlags.None, "formControlName", "name"],
    isDisabled: [InputFlags.None, "disabled", "isDisabled"],
    model: [InputFlags.None, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlName = _FormControlName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var _SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
};
_SelectControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectControlValueAccessor_BaseFactory;
  return function SelectControlValueAccessor_Factory(t) {
    return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
  };
})();
_SelectControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectControlValueAccessor = _SelectControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select)
      this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select)
      this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_NgSelectOption.\u0275fac = function NgSelectOption_Factory(t) {
  return new (t || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
};
_NgSelectOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var NgSelectOption = _NgSelectOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var _SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
};
_SelectMultipleControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectMultipleControlValueAccessor_BaseFactory;
  return function SelectMultipleControlValueAccessor_Factory(t) {
    return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
  };
})();
_SelectMultipleControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectMultipleControlValueAccessor = _SelectMultipleControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _\u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_\u0275NgSelectMultipleOption.\u0275fac = function \u0275NgSelectMultipleOption_Factory(t) {
  return new (t || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
};
_\u0275NgSelectMultipleOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var \u0275NgSelectMultipleOption = _\u0275NgSelectMultipleOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var _AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
};
_AbstractValidatorDirective.\u0275fac = function AbstractValidatorDirective_Factory(t) {
  return new (t || _AbstractValidatorDirective)();
};
_AbstractValidatorDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractValidatorDirective,
  features: [\u0275\u0275NgOnChangesFeature]
});
var AbstractValidatorDirective = _AbstractValidatorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var _MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
};
_MaxValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxValidator_BaseFactory;
  return function MaxValidator_Factory(t) {
    return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(t || _MaxValidator);
  };
})();
_MaxValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxValidator,
  selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  inputs: {
    max: "max"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxValidator = _MaxValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var _MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
};
_MinValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinValidator_BaseFactory;
  return function MinValidator_Factory(t) {
    return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(t || _MinValidator);
  };
})();
_MinValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinValidator,
  selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  inputs: {
    min: "min"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinValidator = _MinValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var _RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_RequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RequiredValidator_BaseFactory;
  return function RequiredValidator_Factory(t) {
    return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(t || _RequiredValidator);
  };
})();
_RequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var RequiredValidator = _RequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var _CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
};
_CheckboxRequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxRequiredValidator_BaseFactory;
  return function CheckboxRequiredValidator_Factory(t) {
    return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
  };
})();
_CheckboxRequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxRequiredValidator = _CheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var _EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_EmailValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EmailValidator_BaseFactory;
  return function EmailValidator_Factory(t) {
    return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(t || _EmailValidator);
  };
})();
_EmailValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var EmailValidator = _EmailValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var _MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
};
_MinLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinLengthValidator_BaseFactory;
  return function MinLengthValidator_Factory(t) {
    return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(t || _MinLengthValidator);
  };
})();
_MinLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinLengthValidator = _MinLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var _MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
};
_MaxLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxLengthValidator_BaseFactory;
  return function MaxLengthValidator_Factory(t) {
    return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(t || _MaxLengthValidator);
  };
})();
_MaxLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxLengthValidator = _MaxLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var _PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
};
_PatternValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PatternValidator_BaseFactory;
  return function PatternValidator_Factory(t) {
    return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(t || _PatternValidator);
  };
})();
_PatternValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var PatternValidator = _PatternValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var _\u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
};
_\u0275InternalFormsSharedModule.\u0275fac = function \u0275InternalFormsSharedModule_Factory(t) {
  return new (t || _\u0275InternalFormsSharedModule)();
};
_\u0275InternalFormsSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _\u0275InternalFormsSharedModule
});
_\u0275InternalFormsSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var \u0275InternalFormsSharedModule = _\u0275InternalFormsSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var _FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
};
_FormBuilder.\u0275fac = function FormBuilder_Factory(t) {
  return new (t || _FormBuilder)();
};
_FormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FormBuilder,
  factory: _FormBuilder.\u0275fac,
  providedIn: "root"
});
var FormBuilder = _FormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NonNullableFormBuilder = class _NonNullableFormBuilder {
};
_NonNullableFormBuilder.\u0275fac = function NonNullableFormBuilder_Factory(t) {
  return new (t || _NonNullableFormBuilder)();
};
_NonNullableFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NonNullableFormBuilder,
  factory: () => (() => inject(FormBuilder).nonNullable)(),
  providedIn: "root"
});
var NonNullableFormBuilder = _NonNullableFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var _UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
};
_UntypedFormBuilder.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UntypedFormBuilder_BaseFactory;
  return function UntypedFormBuilder_Factory(t) {
    return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(t || _UntypedFormBuilder);
  };
})();
_UntypedFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UntypedFormBuilder,
  factory: _UntypedFormBuilder.\u0275fac,
  providedIn: "root"
});
var UntypedFormBuilder = _UntypedFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("17.1.2");
var _FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_FormsModule.\u0275fac = function FormsModule_Factory(t) {
  return new (t || _FormsModule)();
};
_FormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _FormsModule
});
_FormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var FormsModule = _FormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var _ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_ReactiveFormsModule.\u0275fac = function ReactiveFormsModule_Factory(t) {
  return new (t || _ReactiveFormsModule)();
};
_ReactiveFormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReactiveFormsModule
});
_ReactiveFormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var ReactiveFormsModule = _ReactiveFormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/ngx-pagination/fesm2020/ngx-pagination.mjs
function PaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("keyup.enter", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r8);
      \u0275\u0275nextContext(3);
      const _r0 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(_r0.previous());
    })("click", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      \u0275\u0275nextContext(3);
      const _r0 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(_r0.previous());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.previousLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.previousLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9);
    \u0275\u0275template(1, PaginationControlsComponent_ul_3_li_1_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_1_span_2_Template, 4, 2, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const _r0 = \u0275\u0275reference(1);
    \u0275\u0275classProp("disabled", _r0.isFirstPage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", 1 < _r0.getCurrent());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", _r0.isFirstPage());
  }
}
function PaginationControlsComponent_ul_3_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("keyup.enter", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r15);
      const page_r10 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275nextContext(2);
      const _r0 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(_r0.setCurrent(page_r10.value));
    })("click", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const page_r10 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275nextContext(2);
      const _r0 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(_r0.setCurrent(page_r10.value));
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r11.screenReaderPageLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r10.label === "..." ? page_r10.label : \u0275\u0275pipeBind2(5, 2, page_r10.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 16)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r12.screenReaderCurrentLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r10.label === "..." ? page_r10.label : \u0275\u0275pipeBind2(6, 2, page_r10.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, PaginationControlsComponent_ul_3_li_4_a_1_Template, 6, 5, "a", 10)(2, PaginationControlsComponent_ul_3_li_4_ng_container_2_Template, 7, 5, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const _r0 = \u0275\u0275reference(1);
    \u0275\u0275classProp("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", _r0.getCurrent() !== page_r10.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", _r0.getCurrent() === page_r10.value);
  }
}
function PaginationControlsComponent_ul_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("keyup.enter", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r23);
      \u0275\u0275nextContext(3);
      const _r0 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(_r0.next());
    })("click", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      \u0275\u0275nextContext(3);
      const _r0 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(_r0.next());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r20 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r20.nextLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r20.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r21 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r21.nextLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r21.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275template(1, PaginationControlsComponent_ul_3_li_5_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_5_span_2_Template, 4, 2, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const _r0 = \u0275\u0275reference(1);
    \u0275\u0275classProp("disabled", _r0.isLastPage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !_r0.isLastPage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", _r0.isLastPage());
  }
}
function PaginationControlsComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275template(1, PaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 5);
    \u0275\u0275elementStart(2, "li", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PaginationControlsComponent_ul_3_li_4_Template, 3, 6, "li", 7)(5, PaginationControlsComponent_ul_3_li_5_Template, 3, 4, "li", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const _r0 = \u0275\u0275reference(1);
    \u0275\u0275classProp("responsive", ctx_r1.responsive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.directionLinks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", _r0.pages)("ngForTrackBy", ctx_r1.trackByIndex);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.directionLinks);
  }
}
var PaginationService = class {
  constructor() {
    this.change = new EventEmitter();
    this.instances = {};
    this.DEFAULT_ID = "DEFAULT_PAGINATION_ID";
  }
  defaultId() {
    return this.DEFAULT_ID;
  }
  /**
   * Register a PaginationInstance with this service. Returns a
   * boolean value signifying whether the instance is new or
   * updated (true = new or updated, false = unchanged).
   */
  register(instance) {
    if (instance.id == null) {
      instance.id = this.DEFAULT_ID;
    }
    if (!this.instances[instance.id]) {
      this.instances[instance.id] = instance;
      return true;
    } else {
      return this.updateInstance(instance);
    }
  }
  /**
   * Check each property of the instance and update any that have changed. Return
   * true if any changes were made, else return false.
   */
  updateInstance(instance) {
    let changed = false;
    for (let prop in this.instances[instance.id]) {
      if (instance[prop] !== this.instances[instance.id][prop]) {
        this.instances[instance.id][prop] = instance[prop];
        changed = true;
      }
    }
    return changed;
  }
  /**
   * Returns the current page number.
   */
  getCurrentPage(id) {
    if (this.instances[id]) {
      return this.instances[id].currentPage;
    }
    return 1;
  }
  /**
   * Sets the current page number.
   */
  setCurrentPage(id, page) {
    if (this.instances[id]) {
      let instance = this.instances[id];
      let maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
      if (page <= maxPage && 1 <= page) {
        this.instances[id].currentPage = page;
        this.change.emit(id);
      }
    }
  }
  /**
   * Sets the value of instance.totalItems
   */
  setTotalItems(id, totalItems) {
    if (this.instances[id] && 0 <= totalItems) {
      this.instances[id].totalItems = totalItems;
      this.change.emit(id);
    }
  }
  /**
   * Sets the value of instance.itemsPerPage.
   */
  setItemsPerPage(id, itemsPerPage) {
    if (this.instances[id]) {
      this.instances[id].itemsPerPage = itemsPerPage;
      this.change.emit(id);
    }
  }
  /**
   * Returns a clone of the pagination instance object matching the id. If no
   * id specified, returns the instance corresponding to the default id.
   */
  getInstance(id = this.DEFAULT_ID) {
    if (this.instances[id]) {
      return this.clone(this.instances[id]);
    }
    return {};
  }
  /**
   * Perform a shallow clone of an object.
   */
  clone(obj) {
    var target = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        target[i] = obj[i];
      }
    }
    return target;
  }
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = class {
  constructor(service) {
    this.service = service;
    this.state = {};
  }
  transform(collection, args) {
    if (!(collection instanceof Array)) {
      let _id = args.id || this.service.defaultId();
      if (this.state[_id]) {
        return this.state[_id].slice;
      } else {
        return collection;
      }
    }
    let serverSideMode = args.totalItems && args.totalItems !== collection.length;
    let instance = this.createInstance(collection, args);
    let id = instance.id;
    let start, end3;
    let perPage = instance.itemsPerPage;
    let emitChange = this.service.register(instance);
    if (!serverSideMode && collection instanceof Array) {
      perPage = +perPage || LARGE_NUMBER;
      start = (instance.currentPage - 1) * perPage;
      end3 = start + perPage;
      let isIdentical = this.stateIsIdentical(id, collection, start, end3);
      if (isIdentical) {
        return this.state[id].slice;
      } else {
        let slice = collection.slice(start, end3);
        this.saveState(id, collection, slice, start, end3);
        this.service.change.emit(id);
        return slice;
      }
    } else {
      if (emitChange) {
        this.service.change.emit(id);
      }
      this.saveState(id, collection, collection, start, end3);
      return collection;
    }
  }
  /**
   * Create an PaginationInstance object, using defaults for any optional properties not supplied.
   */
  createInstance(collection, config2) {
    this.checkConfig(config2);
    return {
      id: config2.id != null ? config2.id : this.service.defaultId(),
      itemsPerPage: +config2.itemsPerPage || 0,
      currentPage: +config2.currentPage || 1,
      totalItems: +config2.totalItems || collection.length
    };
  }
  /**
   * Ensure the argument passed to the filter contains the required properties.
   */
  checkConfig(config2) {
    const required = ["itemsPerPage", "currentPage"];
    const missing = required.filter((prop) => !(prop in config2));
    if (0 < missing.length) {
      throw new Error(`PaginatePipe: Argument is missing the following required properties: ${missing.join(", ")}`);
    }
  }
  /**
   * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
   * array for a given id. This means that the next time the pipe is run on this collection & id, we just
   * need to check that the collection, start and end points are all identical, and if so, return the
   * last sliced array.
   */
  saveState(id, collection, slice, start, end3) {
    this.state[id] = {
      collection,
      size: collection.length,
      slice,
      start,
      end: end3
    };
  }
  /**
   * For a given id, returns true if the collection, size, start and end values are identical.
   */
  stateIsIdentical(id, collection, start, end3) {
    let state2 = this.state[id];
    if (!state2) {
      return false;
    }
    let isMetaDataIdentical = state2.size === collection.length && state2.start === start && state2.end === end3;
    if (!isMetaDataIdentical) {
      return false;
    }
    return state2.slice.every((element, index) => element === collection[start + index]);
  }
};
PaginatePipe.\u0275fac = function PaginatePipe_Factory(t) {
  return new (t || PaginatePipe)(\u0275\u0275directiveInject(PaginationService, 16));
};
PaginatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "paginate",
  type: PaginatePipe,
  pure: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatePipe, [{
    type: Pipe,
    args: [{
      name: "paginate",
      pure: false
    }]
  }], function() {
    return [{
      type: PaginationService
    }];
  }, null);
})();
var DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)"
                         (pageBoundsCorrection)="pageBoundsCorrection.emit($event)">
    <nav role="navigation" [attr.aria-label]="screenReaderPaginationLabel">
    <ul class="ngx-pagination" 
        [class.responsive]="responsive"
        *ngIf="!(autoHide && p.pages.length <= 1)">

        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> 
            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()" aria-disabled="true">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li> 

        <li class="small-screen">
            {{ p.getCurrent() }} / {{ p.getLastPage() }}
        </li>

        <li [class.current]="p.getCurrent() === page.value" 
            [class.ellipsis]="page.label === '...'"
            *ngFor="let page of p.pages; trackBy: trackByIndex">
            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">
                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </a>
            <ng-container *ngIf="p.getCurrent() === page.value">
              <span aria-live="polite">
                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> 
              </span>
            </ng-container>
        </li>

        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()" aria-disabled="true">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

    </ul>
    </nav>
    </pagination-template>
    `;
var DEFAULT_STYLES = `
.ngx-pagination {
  margin-left: 0;
  margin-bottom: 1rem; }
  .ngx-pagination::before, .ngx-pagination::after {
    content: ' ';
    display: table; }
  .ngx-pagination::after {
    clear: both; }
  .ngx-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    margin-right: 0.0625rem;
    border-radius: 0; }
  .ngx-pagination li {
    display: inline-block; }
  .ngx-pagination a,
  .ngx-pagination button {
    color: #0a0a0a; 
    display: block;
    padding: 0.1875rem 0.625rem;
    border-radius: 0; }
    .ngx-pagination a:hover,
    .ngx-pagination button:hover {
      background: #e6e6e6; }
  .ngx-pagination .current {
    padding: 0.1875rem 0.625rem;
    background: #2199e8;
    color: #fefefe;
    cursor: default; }
  .ngx-pagination .disabled {
    padding: 0.1875rem 0.625rem;
    color: #cacaca;
    cursor: default; } 
    .ngx-pagination .disabled:hover {
      background: transparent; }
  .ngx-pagination a, .ngx-pagination button {
    cursor: pointer; }

.ngx-pagination .pagination-previous a::before,
.ngx-pagination .pagination-previous.disabled::before { 
  content: '\xAB';
  display: inline-block;
  margin-right: 0.5rem; }

.ngx-pagination .pagination-next a::after,
.ngx-pagination .pagination-next.disabled::after {
  content: '\xBB';
  display: inline-block;
  margin-left: 0.5rem; }

.ngx-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }
.ngx-pagination .small-screen {
  display: none; }
@media screen and (max-width: 601px) {
  .ngx-pagination.responsive .small-screen {
    display: inline-block; } 
  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {
    display: none; }
}
  `;
var PaginationControlsDirective = class {
  constructor(service, changeDetectorRef) {
    this.service = service;
    this.changeDetectorRef = changeDetectorRef;
    this.maxSize = 7;
    this.pageChange = new EventEmitter();
    this.pageBoundsCorrection = new EventEmitter();
    this.pages = [];
    this.changeSub = this.service.change.subscribe((id) => {
      if (this.id === id) {
        this.updatePageLinks();
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  ngOnInit() {
    if (this.id === void 0) {
      this.id = this.service.defaultId();
    }
    this.updatePageLinks();
  }
  ngOnChanges(changes) {
    this.updatePageLinks();
  }
  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }
  /**
   * Go to the previous page
   */
  previous() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() - 1);
  }
  /**
   * Go to the next page
   */
  next() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() + 1);
  }
  /**
   * Returns true if current page is first page
   */
  isFirstPage() {
    return this.getCurrent() === 1;
  }
  /**
   * Returns true if current page is last page
   */
  isLastPage() {
    return this.getLastPage() === this.getCurrent();
  }
  /**
   * Set the current page number.
   */
  setCurrent(page) {
    this.pageChange.emit(page);
  }
  /**
   * Get the current page number.
   */
  getCurrent() {
    return this.service.getCurrentPage(this.id);
  }
  /**
   * Returns the last page number
   */
  getLastPage() {
    let inst = this.service.getInstance(this.id);
    if (inst.totalItems < 1) {
      return 1;
    }
    return Math.ceil(inst.totalItems / inst.itemsPerPage);
  }
  getTotalItems() {
    return this.service.getInstance(this.id).totalItems;
  }
  checkValidId() {
    if (this.service.getInstance(this.id).id == null) {
      console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`);
    }
  }
  /**
   * Updates the page links and checks that the current page is valid. Should run whenever the
   * PaginationService.change stream emits a value matching the current ID, or when any of the
   * input values changes.
   */
  updatePageLinks() {
    let inst = this.service.getInstance(this.id);
    const correctedCurrentPage = this.outOfBoundCorrection(inst);
    if (correctedCurrentPage !== inst.currentPage) {
      setTimeout(() => {
        this.pageBoundsCorrection.emit(correctedCurrentPage);
        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
      });
    } else {
      this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
    }
  }
  /**
   * Checks that the instance.currentPage property is within bounds for the current page range.
   * If not, return a correct value for currentPage, or the current value if OK.
   */
  outOfBoundCorrection(instance) {
    const totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
    if (totalPages < instance.currentPage && 0 < totalPages) {
      return totalPages;
    } else if (instance.currentPage < 1) {
      return 1;
    }
    return instance.currentPage;
  }
  /**
   * Returns an array of Page objects to use in the pagination controls.
   */
  createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
    paginationRange = +paginationRange;
    let pages = [];
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    let ellipsesNeeded = paginationRange < totalPages;
    let i = 1;
    while (i <= totalPages && i <= paginationRange) {
      let label;
      let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
      let openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
      let closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);
      if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
        label = "...";
      } else {
        label = pageNumber;
      }
      pages.push({
        label,
        value: pageNumber
      });
      i++;
    }
    return pages;
  }
  /**
   * Given the position in the sequence of pagination links [i],
   * figure out what page number corresponds to that position.
   */
  calculatePageNumber(i, currentPage, paginationRange, totalPages) {
    let halfWay = Math.ceil(paginationRange / 2);
    if (i === paginationRange) {
      return totalPages;
    } else if (i === 1) {
      return i;
    } else if (paginationRange < totalPages) {
      if (totalPages - halfWay < currentPage) {
        return totalPages - paginationRange + i;
      } else if (halfWay < currentPage) {
        return currentPage - halfWay + i;
      } else {
        return i;
      }
    } else {
      return i;
    }
  }
};
PaginationControlsDirective.\u0275fac = function PaginationControlsDirective_Factory(t) {
  return new (t || PaginationControlsDirective)(\u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
PaginationControlsDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: PaginationControlsDirective,
  selectors: [["pagination-template"], ["", "pagination-template", ""]],
  inputs: {
    id: "id",
    maxSize: "maxSize"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  exportAs: ["paginationApi"],
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationControlsDirective, [{
    type: Directive,
    args: [{
      selector: "pagination-template,[pagination-template]",
      exportAs: "paginationApi"
    }]
  }], function() {
    return [{
      type: PaginationService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    id: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageBoundsCorrection: [{
      type: Output
    }]
  });
})();
function coerceToBoolean(input) {
  return !!input && input !== "false";
}
var PaginationControlsComponent = class {
  constructor() {
    this.maxSize = 7;
    this.previousLabel = "Previous";
    this.nextLabel = "Next";
    this.screenReaderPaginationLabel = "Pagination";
    this.screenReaderPageLabel = "page";
    this.screenReaderCurrentLabel = `You're on page`;
    this.pageChange = new EventEmitter();
    this.pageBoundsCorrection = new EventEmitter();
    this._directionLinks = true;
    this._autoHide = false;
    this._responsive = false;
  }
  get directionLinks() {
    return this._directionLinks;
  }
  set directionLinks(value) {
    this._directionLinks = coerceToBoolean(value);
  }
  get autoHide() {
    return this._autoHide;
  }
  set autoHide(value) {
    this._autoHide = coerceToBoolean(value);
  }
  get responsive() {
    return this._responsive;
  }
  set responsive(value) {
    this._responsive = coerceToBoolean(value);
  }
  trackByIndex(index) {
    return index;
  }
};
PaginationControlsComponent.\u0275fac = function PaginationControlsComponent_Factory(t) {
  return new (t || PaginationControlsComponent)();
};
PaginationControlsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: PaginationControlsComponent,
  selectors: [["pagination-controls"]],
  inputs: {
    id: "id",
    maxSize: "maxSize",
    directionLinks: "directionLinks",
    autoHide: "autoHide",
    responsive: "responsive",
    previousLabel: "previousLabel",
    nextLabel: "nextLabel",
    screenReaderPaginationLabel: "screenReaderPaginationLabel",
    screenReaderPageLabel: "screenReaderPageLabel",
    screenReaderCurrentLabel: "screenReaderCurrentLabel"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  decls: 4,
  vars: 4,
  consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["role", "navigation"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], ["aria-disabled", "true", 4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], ["aria-disabled", "true"], [4, "ngIf"], ["aria-live", "polite"], [1, "pagination-next"]],
  template: function PaginationControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "pagination-template", 0, 1);
      \u0275\u0275listener("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
        return ctx.pageChange.emit($event);
      })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
        return ctx.pageBoundsCorrection.emit($event);
      });
      \u0275\u0275elementStart(2, "nav", 2);
      \u0275\u0275template(3, PaginationControlsComponent_ul_3_Template, 6, 8, "ul", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const _r0 = \u0275\u0275reference(1);
      \u0275\u0275property("id", ctx.id)("maxSize", ctx.maxSize);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.screenReaderPaginationLabel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
    }
  },
  dependencies: [PaginationControlsDirective, NgIf, NgForOf, DecimalPipe],
  styles: ['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationControlsComponent, [{
    type: Component,
    args: [{
      selector: "pagination-controls",
      template: DEFAULT_TEMPLATE,
      styles: [DEFAULT_STYLES],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    id: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    directionLinks: [{
      type: Input
    }],
    autoHide: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    previousLabel: [{
      type: Input
    }],
    nextLabel: [{
      type: Input
    }],
    screenReaderPaginationLabel: [{
      type: Input
    }],
    screenReaderPageLabel: [{
      type: Input
    }],
    screenReaderCurrentLabel: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageBoundsCorrection: [{
      type: Output
    }]
  });
})();
var NgxPaginationModule = class {
};
NgxPaginationModule.\u0275fac = function NgxPaginationModule_Factory(t) {
  return new (t || NgxPaginationModule)();
};
NgxPaginationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxPaginationModule
});
NgxPaginationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [PaginationService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPaginationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
      providers: [PaginationService],
      exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
    }]
  }], null, null);
})();

// node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var faSackDollar = {
  prefix: "fas",
  iconName: "sack-dollar",
  icon: [512, 512, [128176], "f81d", "M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"]
};
var faUser = {
  prefix: "fas",
  iconName: "user",
  icon: [448, 512, [128100, 62144], "f007", "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]
};
var faAnglesRight = {
  prefix: "fas",
  iconName: "angles-right",
  icon: [512, 512, [187, "angle-double-right"], "f101", "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
};
var faHeart = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
};
var faShieldDog = {
  prefix: "fas",
  iconName: "shield-dog",
  icon: [512, 512, [], "e573", "M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64V160h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80H272v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160h40 8v32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]
};
var faEnvelope = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
};
var faPlus = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
};
var faAnglesLeft = {
  prefix: "fas",
  iconName: "angles-left",
  icon: [512, 512, [171, "angle-double-left"], "f100", "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"]
};

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var _Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
};
_Platform.\u0275fac = function Platform_Factory(t) {
  return new (t || _Platform)(\u0275\u0275inject(PLATFORM_ID));
};
_Platform.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Platform,
  factory: _Platform.\u0275fac,
  providedIn: "root"
});
var Platform = _Platform;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _PlatformModule = class _PlatformModule {
};
_PlatformModule.\u0275fac = function PlatformModule_Factory(t) {
  return new (t || _PlatformModule)();
};
_PlatformModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PlatformModule
});
_PlatformModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var PlatformModule = _PlatformModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));

// node_modules/@angular/cdk/fesm2022/layout.mjs
var _LayoutModule = class _LayoutModule {
};
_LayoutModule.\u0275fac = function LayoutModule_Factory(t) {
  return new (t || _LayoutModule)();
};
_LayoutModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _LayoutModule
});
_LayoutModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var LayoutModule = _LayoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var _MediaMatcher = class _MediaMatcher {
  constructor(_platform, _nonce) {
    this._platform = _platform;
    this._nonce = _nonce;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window)
    ) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query2) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query2, this._nonce);
    }
    return this._matchMedia(query2);
  }
};
_MediaMatcher.\u0275fac = function MediaMatcher_Factory(t) {
  return new (t || _MediaMatcher)(\u0275\u0275inject(Platform), \u0275\u0275inject(CSP_NONCE, 8));
};
_MediaMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MediaMatcher,
  factory: _MediaMatcher.\u0275fac,
  providedIn: "root"
});
var MediaMatcher = _MediaMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], null);
})();
function createEmptyStyleRule(query2, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query2)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.nonce = nonce;
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query2} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query2);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query2) {
  return {
    matches: query2 === "all" || query2 === "",
    media: query2,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var _BreakpointObserver = class _BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    this._queries = /* @__PURE__ */ new Map();
    this._destroySubject = new Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query2) => this._registerQuery(query2).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query: query2
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query2] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query2) {
    if (this._queries.has(query2)) {
      return this._queries.get(query2);
    }
    const mql = this._mediaMatcher.matchMedia(query2);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query: query2,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query2, output);
    return output;
  }
};
_BreakpointObserver.\u0275fac = function BreakpointObserver_Factory(t) {
  return new (t || _BreakpointObserver)(\u0275\u0275inject(MediaMatcher), \u0275\u0275inject(NgZone));
};
_BreakpointObserver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _BreakpointObserver,
  factory: _BreakpointObserver.\u0275fac,
  providedIn: "root"
});
var BreakpointObserver = _BreakpointObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MediaMatcher
  }, {
    type: NgZone
  }], null);
})();
function splitQueries(queries) {
  return queries.map((query2) => query2.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query2) => query2.trim());
}
var Breakpoints = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset: "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape: "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
};

// src/app/services/api-service.ts
var _ApiService = class _ApiService {
  constructor(http, tokenService) {
    this.http = http;
    this.tokenService = tokenService;
    this.API_URL = environment.API_URL;
  }
  register(data) {
    return this.http.post(this.API_URL + "register", data);
  }
  login(data) {
    return this.http.post(this.API_URL + "login", data);
  }
  authorizedUser() {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "me", null, { "headers": headers });
  }
  editProfile(data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.put(this.API_URL + "edit-profile", data, { "headers": headers });
  }
  changePassword(data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.put(this.API_URL + "change-password", data, { "headers": headers });
  }
  resetPassword(data) {
    return this.http.post(this.API_URL + "reset-password", data);
  }
  getUsers() {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "users", { "headers": headers });
  }
  deleteUser(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.delete(this.API_URL + "users/delete/" + id, { "headers": headers });
  }
};
_ApiService.\u0275fac = function ApiService_Factory(t) {
  return new (t || _ApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(TokenService));
};
_ApiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
var ApiService = _ApiService;

// src/app/services/auth.service.ts
var _AuthService = class _AuthService {
  constructor(tokenService, apiService) {
    this.tokenService = tokenService;
    this.apiService = apiService;
    this.user = {
      id: 0,
      name: "x",
      surname: "xxx",
      email: "xxx",
      role: "user",
      tokens_count: 0
    };
    this.hasLoggedIn = new BehaviorSubject(this.tokenService.loggedIn());
    this.authStatus = this.hasLoggedIn.asObservable();
  }
  changeAuthStatus(value) {
    this.hasLoggedIn.next(value);
  }
  setAuthUser() {
    this.apiService.authorizedUser().subscribe({
      next: (user) => {
        this.handleAuthUser(user);
      }
    });
  }
  handleAuthUser(user) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
};
_AuthService.\u0275fac = function AuthService_Factory(t) {
  return new (t || _AuthService)(\u0275\u0275inject(TokenService), \u0275\u0275inject(ApiService));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;

// src/app/services/messages.service.ts
var _MessagesService = class _MessagesService {
  constructor() {
    this.messagesCountObs = new BehaviorSubject(0);
    this.conversationMessagesCountObs = new BehaviorSubject([0, 0]);
  }
  updateMessagesCount(messagesCount) {
    this.messagesCountObs.next(messagesCount);
  }
  updateConversationMessagesCount(messagesCount, conversationId) {
    this.conversationMessagesCountObs.next([messagesCount, conversationId]);
  }
};
_MessagesService.\u0275fac = function MessagesService_Factory(t) {
  return new (t || _MessagesService)();
};
_MessagesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessagesService, factory: _MessagesService.\u0275fac, providedIn: "root" });
var MessagesService = _MessagesService;

// src/app/services/api-messages.service.ts
var _ApiMessagesService = class _ApiMessagesService {
  constructor(http, tokenService) {
    this.http = http;
    this.tokenService = tokenService;
    this.API_URL = environment.API_URL;
  }
  createConversation(data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "api/create-conversation", data, { "headers": headers });
  }
  getConversations() {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "conversations", { "headers": headers });
  }
  getConversation(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "conversations/" + id, { "headers": headers });
  }
  createMessage(data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "create-message", data, { "headers": headers });
  }
  getMessages(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "messages/" + id, { "headers": headers });
  }
  getUnreadMessagesCount() {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "messages-count", { "headers": headers });
  }
  getUnreadConversationMessagesCount(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "messages-count/" + id, { "headers": headers });
  }
};
_ApiMessagesService.\u0275fac = function ApiMessagesService_Factory(t) {
  return new (t || _ApiMessagesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(TokenService));
};
_ApiMessagesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiMessagesService, factory: _ApiMessagesService.\u0275fac, providedIn: "root" });
var ApiMessagesService = _ApiMessagesService;

// node_modules/@fortawesome/fontawesome-svg-core/index.mjs
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var noop = function noop2() {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== "undefined")
    _WINDOW = window;
  if (typeof document !== "undefined")
    _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined")
    _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined")
    _PERFORMANCE = performance;
} catch (e) {
}
var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var _familyProxy;
var _familyProxy2;
var _familyProxy3;
var _familyProxy4;
var _familyProxy5;
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
var DATA_PREFIX = "data-prefix";
var DATA_ICON = "data-icon";
var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
var MUTATION_APPROACH_ASYNC = "async";
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
var PRODUCTION = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch (e) {
    return false;
  }
}();
var FAMILY_CLASSIC = "classic";
var FAMILY_SHARP = "sharp";
var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];
function familyProxy(obj) {
  return new Proxy(obj, {
    get: function get2(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
  "fa": "solid",
  "fas": "solid",
  "fa-solid": "solid",
  "far": "regular",
  "fa-regular": "regular",
  "fal": "light",
  "fa-light": "light",
  "fat": "thin",
  "fa-thin": "thin",
  "fad": "duotone",
  "fa-duotone": "duotone",
  "fab": "brands",
  "fa-brands": "brands",
  "fak": "kit",
  "fakd": "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), _defineProperty(_familyProxy, FAMILY_SHARP, {
  "fa": "solid",
  "fass": "solid",
  "fa-solid": "solid",
  "fasr": "regular",
  "fa-regular": "regular",
  "fasl": "light",
  "fa-light": "light",
  "fast": "thin",
  "fa-thin": "thin"
}), _familyProxy));
var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), _defineProperty(_familyProxy2, FAMILY_SHARP, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), _familyProxy2));
var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), _defineProperty(_familyProxy3, FAMILY_SHARP, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), _familyProxy3));
var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), _defineProperty(_familyProxy4, FAMILY_SHARP, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), _familyProxy4));
var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/;
var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), _defineProperty(_familyProxy5, FAMILY_SHARP, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), _familyProxy5));
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
var DUOTONE_CLASSES = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var prefixes = /* @__PURE__ */ new Set();
Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function(n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function(n) {
  return "w-".concat(n);
}));
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "")
    return true;
  if (val === "false")
    return false;
  if (val === "true")
    return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
  attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach(function(_ref2) {
    var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
    var val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var attrs;
var _default = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
var _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg)
  _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function(key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set2(val) {
      _config[key] = val;
      _onChangeCb.forEach(function(cb) {
        return cb(config);
      });
    },
    get: function get2() {
      return _config[key];
    }
  });
});
Object.defineProperty(config, "familyPrefix", {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach(function(cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return function() {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  var style2 = DOCUMENT.createElement("style");
  style2.setAttribute("type", "text/css");
  style2.innerHTML = css2;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style2, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  var size = 12;
  var id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  var array = [];
  for (var i = (obj || []).length >>> 0; i--; ) {
    array[i] = obj[i];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute("class") || "").split(" ").filter(function(i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
  }, "");
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref2) {
  var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform, _ref2$width = _ref2.width, width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = "";
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }
  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
    var rPatt = new RegExp("\\.".concat(drc), "g");
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
var _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER])
  w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles)
  w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks)
  w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims)
  w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function listener2() {
  DOCUMENT.removeEventListener("DOMContentLoaded", listener2);
  loaded = 1;
  functions.map(function(fn) {
    return fn();
  });
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded)
    DOCUMENT.addEventListener("DOMContentLoaded", listener);
}
function domready(fn) {
  if (!IS_DOM)
    return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
var bindInternal4 = function bindInternal42(func, thisContext) {
  return function(a, b, c, d2) {
    return func.call(thisContext, a, b, c, d2);
  };
};
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
  if (initialValue === void 0) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function ucs2decode(string) {
  var output = [];
  var counter2 = 0;
  var length = string.length;
  while (counter2 < length) {
    var value = string.charCodeAt(counter2++);
    if (value >= 55296 && value <= 56319 && counter2 < length) {
      var extra = string.charCodeAt(counter2++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter2--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;
  if (first >= 55296 && first <= 56319 && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function(acc, iconName) {
    var icon3 = icons[iconName];
    var expanded = !!icon3.icon;
    if (expanded) {
      acc[icon3.iconName] = icon3.icon;
    } else {
      acc[iconName] = icon3;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  if (prefix === "fas") {
    defineIcons("fa", icons);
  }
}
var _LONG_STYLE;
var _PREFIXES;
var _PREFIXES_FOR_FAMILY;
var styles = namespace.styles;
var shims = namespace.shims;
var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  var parts = cls.split("-");
  var prefix = parts[0];
  var iconName = parts.slice(1).join("-");
  if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build2() {
  var lookup = function lookup2(reducer) {
    return reduce(styles, function(o, style2, prefix) {
      o[prefix] = reduce(style2, reducer, {});
      return o;
    }, {});
  };
  _byUnicode = lookup(function(acc, icon3, iconName) {
    if (icon3[3]) {
      acc[icon3[3]] = iconName;
    }
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a) {
        return typeof a === "number";
      });
      aliases.forEach(function(alias) {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup(function(acc, icon3, iconName) {
    acc[iconName] = iconName;
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a) {
        return typeof a === "string";
      });
      aliases.forEach(function(alias) {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup(function(acc, icon3, iconName) {
    var aliases = icon3[2];
    acc[iconName] = iconName;
    aliases.forEach(function(alias) {
      acc[alias] = iconName;
    });
    return acc;
  });
  var hasRegular = "far" in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function(acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];
    if (prefix === "far" && !hasRegular) {
      prefix = "fas";
    }
    if (typeof maybeNameMaybeUnicode === "string") {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === "number") {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function(c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode("fas", unicode);
  return oldUnicode || (newUnicode ? {
    prefix: "fas",
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon2() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$family = params.family, family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style2 = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style2];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
function getCanonicalIcon(values) {
  var _famProps;
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;
  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }
  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }
  var canonical = values.reduce(function(acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);
    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }
    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === "fa" ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);
      if (shim.prefix) {
        givenPrefix = null;
      }
      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;
      if (acc.prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
        acc.prefix = "fas";
      }
    }
    return acc;
  }, emptyCanonicalIcon());
  if (values.includes("fa-brands") || values.includes("fab")) {
    canonical.prefix = "fab";
  }
  if (values.includes("fa-duotone") || values.includes("fad")) {
    canonical.prefix = "fad";
  }
  if (!canonical.prefix && family === FAMILY_SHARP && (styles["fass"] || config.autoFetchSvg)) {
    canonical.prefix = "fass";
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }
  if (canonical.prefix === "fa" || givenPrefix === "fa") {
    canonical.prefix = getDefaultUsablePrefix() || "fas";
  }
  return canonical;
}
var Library = /* @__PURE__ */ function() {
  function Library2() {
    _classCallCheck(this, Library2);
    this.definitions = {};
  }
  _createClass(Library2, [{
    key: "add",
    value: function add() {
      var _this = this;
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function(key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);
        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
        if (longPrefix)
          defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function(key) {
        var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon3 = _normalized$key.icon;
        var aliases = icon3[2];
        if (!additions[prefix])
          additions[prefix] = {};
        if (aliases.length > 0) {
          aliases.forEach(function(alias) {
            if (typeof alias === "string") {
              additions[prefix][alias] = icon3;
            }
          });
        }
        additions[prefix][iconName] = icon3;
      });
      return additions;
    }
  }]);
  return Library2;
}();
var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref2) {
  var obj = _ref2.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function(k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach(function(plugin) {
    var mixout8 = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout8).forEach(function(tk) {
      if (typeof mixout8[tk] === "function") {
        obj[tk] = mixout8[tk];
      }
      if (_typeof(mixout8[tk]) === "object") {
        Object.keys(mixout8[tk]).forEach(function(sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout8[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      var hooks8 = plugin.hooks();
      Object.keys(hooks8).forEach(function(hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks8[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args));
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    hookFn.apply(null, args);
  });
  return void 0;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === "fa") {
    iconLookup.prefix = "fas";
  }
  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName)
    return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto2() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks("noAuto");
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (IS_DOM) {
      callHooks("beforeI2svg", params);
      callProvided("pseudoElements2svg", params);
      return callProvided("i2svg", params);
    } else {
      return Promise.reject("Operation requires a DOM of some kind.");
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(function() {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks("watch", params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }
    if (_typeof(_icon) === "object" && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }
    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof _icon === "string" && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof _icon === "string") {
      var _prefix = getDefaultUsablePrefix();
      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
var autoReplace = function autoReplace2() {
  var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg)
    api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
};
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function get2() {
      return val.abstract.map(function(a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, "node", {
    get: function get2() {
      if (!IS_DOM)
        return;
      var container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref2) {
  var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width, height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread2(_objectSpread2({}, styles2), {}, {
      "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref2) {
  var prefix = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
  var isUploadedIcon = prefix === "fak";
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter(function(c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function(c) {
    return c !== "" || !!c;
  }).concat(extra.classes).join(" ");
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      "data-prefix": prefix,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title) {
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });
  var _ref22 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
    children: [],
    attributes: {}
  } : callProvided("generateAbstractIcon", args) || {
    children: [],
    attributes: {}
  }, children = _ref22.children, attributes = _ref22.attributes;
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content, width = params.width, height = params.height, transform = params.transform, title = params.title, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = "";
  }
  var styles2 = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles2["transform"] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles2["-webkit-transform"] = styles2["transform"];
  }
  var styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content, title = params.title, extra = params.extra;
  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  var styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
var styles$1 = namespace.styles;
function asFoundIcon(icon3) {
  var width = icon3[0];
  var height = icon3[1];
  var _icon$slice = icon3.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
  }
}
function findIcon(iconName, prefix) {
  var givenPrefix = prefix;
  if (prefix === "fa" && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise(function(resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: callProvided("missingIconAbstract") || {}
    };
    if (givenPrefix === "fa") {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon3 = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon3));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
    }));
  });
}
var noop$1 = function noop3() {
};
var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = 'FA "6.5.1"';
var begin = function begin2(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function() {
    return end(name);
  };
};
var end = function end2(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};
var noop$2 = function noop4() {
};
function isWatched(node) {
  var i2svg2 = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg2 === "string";
}
function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon3 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon3;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
}
function createElement(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? createElementNS : createElement : _params$ceFn;
  if (typeof abstractObj === "string") {
    return DOCUMENT.createTextNode(abstractObj);
  }
  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function(key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function(child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  return comment;
}
var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach(function(_abstract) {
        node.parentNode.insertBefore(convertSVG(_abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var _abstract2 = mutation[1];
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete _abstract2[0].attributes.id;
    if (_abstract2[0].attributes.class) {
      var splitClasses = _abstract2[0].attributes.class.split(" ").reduce(function(acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      _abstract2[0].attributes.class = splitClasses.toSvg.join(" ");
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute("class");
      } else {
        node.setAttribute("class", splitClasses.toNode.join(" "));
      }
    }
    var newInnerHTML = _abstract2.map(function(a) {
      return toHtml(a);
    }).join("\n");
    node.setAttribute(DATA_FA_I2SVG, "");
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  var callbackFunction = typeof callback === "function" ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(function() {
      var mutator = getMutator();
      var mark = perf.begin("mutate");
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function(objects) {
    if (disabled)
      return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function(mutationRecord) {
      if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName)
            mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM)
    return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo)
    return;
  mo.disconnect();
}
function styleParser(node) {
  var style2 = node.getAttribute("style");
  var val = [];
  if (style2) {
    val = style2.split(";").reduce(function(acc, style3) {
      var styles2 = style3.split(":");
      var prop = styles2[0];
      var value = styles2.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(":").trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  var existingPrefix = node.getAttribute("data-prefix");
  var existingIconName = node.getAttribute("data-icon");
  var innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
  var val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function(acc, attr) {
    if (acc.name !== "class" && acc.name !== "style") {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  var title = node.getAttribute("title");
  var titleId = node.getAttribute("data-fa-title-id");
  if (config.autoA11y) {
    if (title) {
      extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes["aria-hidden"] = "true";
      extraAttributes["focusable"] = "false";
    }
  }
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  };
  var _classParser = classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest;
  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks("parseNodeAttributes", {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName,
    title: node.getAttribute("title"),
    titleId: node.getAttribute("data-fa-title-id"),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}
var styles$2 = namespace.styles;
function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided("generateLayersText", node, nodeMeta);
  } else {
    return callProvided("generateSvgReplacementMutation", node, nodeMeta);
  }
}
var knownPrefixes = /* @__PURE__ */ new Set();
FAMILIES.map(function(family) {
  knownPrefixes.add("fa-".concat(family));
});
Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
knownPrefixes = _toConsumableArray(knownPrefixes);
function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!IS_DOM)
    return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd2(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var hclRemove = function hclRemove2(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var prefixes2 = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2));
  if (!prefixes2.includes("fa")) {
    prefixes2.push("fa");
  }
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes2.map(function(p2) {
    return ".".concat(p2, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(", ");
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  var candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {
  }
  if (candidates.length > 0) {
    hclAdd("pending");
    hclRemove("complete");
  } else {
    return Promise.resolve();
  }
  var mark = perf.begin("onTree");
  var mutations = candidates.reduce(function(acc, node) {
    try {
      var mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e.name === "MissingIcon") {
          console.error(e);
        }
      }
    }
    return acc;
  }, []);
  return new Promise(function(resolve, reject) {
    Promise.all(mutations).then(function(resolvedMutations) {
      perform(resolvedMutations, function() {
        hclAdd("active");
        hclAdd("complete");
        hclRemove("pending");
        if (typeof callback === "function")
          callback();
        mark();
        resolve();
      });
    }).catch(function(e) {
      mark();
      reject(e);
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  generateMutation(node).then(function(mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask
    }));
  };
}
var render = function render2(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition)
    return;
  var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon3 = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: "icon"
  }, iconDefinition), function() {
    callHooks("beforeDOMElementCreation", {
      iconDefinition,
      params
    });
    if (config.autoA11y) {
      if (title) {
        attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon3),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles: styles2,
        classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout2() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks2() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {
      } : _params$callback;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
      var iconName = nodeMeta.iconName, title = nodeMeta.title, titleId = nodeMeta.titleId, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
      return new Promise(function(resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(_ref2) {
          var _ref22 = _slicedToArray(_ref2, 2), main = _ref22[0], mask2 = _ref22[1];
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask: mask2
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            title,
            titleId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function(_ref3) {
      var children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles2 = _ref3.styles;
      var styleString = joinStyles(styles2);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      var nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided("generateAbstractTransformGrouping", {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};
var Layers = {
  mixout: function mixout3() {
    return {
      layer: function layer2(assembler) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: "layer"
        }, function() {
          callHooks("beforeDOMElementCreation", {
            assembler,
            params
          });
          var children = [];
          assembler(function(args) {
            Array.isArray(args) ? args.map(function(a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: "span",
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(" ")
            },
            children
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout: function mixout4() {
    return {
      counter: function counter2(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "counter",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout: function mixout5() {
    return {
      text: function text2(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "text",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides2(providers$$1) {
    providers$$1.generateLayersText = function(node, nodeMeta) {
      var title = nodeMeta.title, transform = nodeMeta.transform, extra = nodeMeta.extra;
      var width = null;
      var height = null;
      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config.autoA11y && !title) {
        extra.attributes["aria-hidden"] = "true";
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};
var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
  return new Promise(function(resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      return resolve();
    }
    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function(c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles2 = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles2.getPropertyValue("font-family").match(FONT_FAMILY_PATTERN);
    var fontWeight = styles2.getPropertyValue("font-weight");
    var content = styles2.getPropertyValue("content");
    if (alreadyProcessedPseudoElement && !fontFamily) {
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== "none" && content !== "") {
      var _content = styles2.getPropertyValue("content");
      var family = ~["Sharp"].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];
      var _hexValueFromContent = hexValueFromContent(_content), hexValue = _hexValueFromContent.value, isSecondary = _hexValueFromContent.isSecondary;
      var isV4 = fontFamily[0].startsWith("FontAwesome");
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;
      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          node.removeChild(alreadyProcessedPseudoElement);
        }
        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function(main) {
          var _abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          var element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (position === "::before") {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = _abstract.map(function(a) {
            return toHtml(a);
          }).join("\n");
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace2(node) {
  return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function searchPseudoElements(root) {
  if (!IS_DOM)
    return;
  return new Promise(function(resolve, reject) {
    var operations = toArray(root.querySelectorAll("*")).filter(processable).map(replace2);
    var end3 = perf.begin("searchPseudoElements");
    disableObservation();
    Promise.all(operations).then(function() {
      end3();
      enableObservation();
      resolve();
    }).catch(function() {
      end3();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks: function hooks3() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides3(providers$$1) {
    providers$$1.pseudoElements2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout6() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks4() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks("mutationObserverCallbacks", {}));
      },
      noAuto: function noAuto3() {
        disconnect();
      },
      watch: function watch2(params) {
        var observeMutationsRoot = params.observeMutationsRoot;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks("mutationObserverCallbacks", {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};
var parseTransformString = function parseTransformString2(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(" ").reduce(function(acc, n) {
    var parts = n.toLowerCase().split("-");
    var first = parts[0];
    var rest = parts.slice(1).join("-");
    if (first && rest === "h") {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === "v") {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case "grow":
        acc.size = acc.size + rest;
        break;
      case "shrink":
        acc.size = acc.size - rest;
        break;
      case "left":
        acc.x = acc.x - rest;
        break;
      case "right":
        acc.x = acc.x + rest;
        break;
      case "up":
        acc.y = acc.y - rest;
        break;
      case "down":
        acc.y = acc.y + rest;
        break;
      case "rotate":
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout7() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks5() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute("data-fa-transform");
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides: function provides4(providers2) {
    providers2.generateAbstractTransformGrouping = function(_ref2) {
      var main = _ref2.main, transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer,
        inner,
        path
      };
      return {
        tag: "g",
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: "g",
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = "black";
  }
  return _abstract;
}
function deGroup(_abstract2) {
  if (_abstract2.tag === "g") {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}
var Masks = {
  hooks: function hooks6() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute("data-fa-mask");
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map(function(i) {
          return i.trim();
        }));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute("data-fa-mask-id");
        return accumulator;
      }
    };
  },
  provides: function provides5(providers2) {
    providers2.generateAbstractMask = function(_ref2) {
      var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform;
      var mainWidth = main.width, mainPath = main.icon;
      var maskWidth = mask.width, maskPath = mask.icon;
      var trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: "rect",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: "white"
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: "mask",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: "rect",
        attributes: _objectSpread2({
          fill: "currentColor",
          "clip-path": "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides: function provides6(providers2) {
    var reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    providers2.missingIconAbstract = function() {
      var gChildren = [];
      var FILL = {
        fill: "currentColor"
      };
      var ANIMATION_BASE = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: "opacity"
      });
      var dot = {
        tag: "circle",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;1;1;0;1;"
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: reduceMotion ? [] : [{
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      });
      if (!reduceMotion) {
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: "0;0;1;1;0;0;"
            })
          }]
        });
      }
      return {
        tag: "g",
        attributes: {
          "class": "missing"
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks: function hooks7() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute("data-fa-symbol");
        var symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
        accumulator["symbol"] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon2 = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;

// node_modules/@fortawesome/angular-fontawesome/fesm2022/angular-fontawesome.mjs
var _c02 = ["*"];
var faWarnIfIconDefinitionMissing = (iconSpec) => {
  throw new Error(`Could not find icon with iconName=${iconSpec.iconName} and prefix=${iconSpec.prefix} in the icon library.`);
};
var faWarnIfIconSpecMissing = () => {
  throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.");
};
var faClassList = (props) => {
  const classes = {
    [`fa-${props.animation}`]: props.animation != null && !props.animation.startsWith("spin"),
    "fa-spin": props.animation === "spin" || props.animation === "spin-reverse",
    "fa-spin-pulse": props.animation === "spin-pulse" || props.animation === "spin-pulse-reverse",
    "fa-spin-reverse": props.animation === "spin-reverse" || props.animation === "spin-pulse-reverse",
    // According to https://fontawesome.com/docs/web/style/animate#spin fa-pulse
    // class is deprecated, remove the below line when Font Awesome 5 support
    // is dropped.
    "fa-pulse": props.animation === "spin-pulse" || props.animation === "spin-pulse-reverse",
    "fa-fw": props.fixedWidth,
    "fa-border": props.border,
    "fa-inverse": props.inverse,
    "fa-layers-counter": props.counter,
    "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
    "fa-flip-vertical": props.flip === "vertical" || props.flip === "both",
    [`fa-${props.size}`]: props.size !== null,
    [`fa-rotate-${props.rotate}`]: props.rotate !== null,
    [`fa-pull-${props.pull}`]: props.pull !== null,
    [`fa-stack-${props.stackItemSize}`]: props.stackItemSize != null
  };
  return Object.keys(classes).map((key) => classes[key] ? key : null).filter((key) => key);
};
var isIconLookup = (i) => i.prefix !== void 0 && i.iconName !== void 0;
var faNormalizeIconSpec = (iconSpec, defaultPrefix) => {
  if (isIconLookup(iconSpec)) {
    return iconSpec;
  }
  if (typeof iconSpec === "string") {
    return {
      prefix: defaultPrefix,
      iconName: iconSpec
    };
  }
  return {
    prefix: iconSpec[0],
    iconName: iconSpec[1]
  };
};
var _FaConfig = class _FaConfig {
  constructor() {
    this.defaultPrefix = "fas";
    this.fallbackIcon = null;
  }
};
_FaConfig.\u0275fac = function FaConfig_Factory(t) {
  return new (t || _FaConfig)();
};
_FaConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FaConfig,
  factory: _FaConfig.\u0275fac,
  providedIn: "root"
});
var FaConfig = _FaConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _FaIconLibrary = class _FaIconLibrary {
  constructor() {
    this.definitions = {};
  }
  addIcons(...icons) {
    for (const icon3 of icons) {
      if (!(icon3.prefix in this.definitions)) {
        this.definitions[icon3.prefix] = {};
      }
      this.definitions[icon3.prefix][icon3.iconName] = icon3;
      for (const alias of icon3.icon[2]) {
        if (typeof alias === "string") {
          this.definitions[icon3.prefix][alias] = icon3;
        }
      }
    }
  }
  addIconPacks(...packs) {
    for (const pack of packs) {
      const icons = Object.keys(pack).map((key) => pack[key]);
      this.addIcons(...icons);
    }
  }
  getIconDefinition(prefix, name) {
    if (prefix in this.definitions && name in this.definitions[prefix]) {
      return this.definitions[prefix][name];
    }
    return null;
  }
};
_FaIconLibrary.\u0275fac = function FaIconLibrary_Factory(t) {
  return new (t || _FaIconLibrary)();
};
_FaIconLibrary.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FaIconLibrary,
  factory: _FaIconLibrary.\u0275fac,
  providedIn: "root"
});
var FaIconLibrary = _FaIconLibrary;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaIconLibrary, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _FaStackItemSizeDirective = class _FaStackItemSizeDirective {
  constructor() {
    this.stackItemSize = "1x";
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.');
    }
  }
};
_FaStackItemSizeDirective.\u0275fac = function FaStackItemSizeDirective_Factory(t) {
  return new (t || _FaStackItemSizeDirective)();
};
_FaStackItemSizeDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FaStackItemSizeDirective,
  selectors: [["fa-icon", "stackItemSize", ""], ["fa-duotone-icon", "stackItemSize", ""]],
  inputs: {
    stackItemSize: "stackItemSize",
    size: "size"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var FaStackItemSizeDirective = _FaStackItemSizeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaStackItemSizeDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "fa-icon[stackItemSize],fa-duotone-icon[stackItemSize]",
      standalone: true
    }]
  }], null, {
    stackItemSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var _FaStackComponent = class _FaStackComponent {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, "fa-stack");
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      if (changes.size.currentValue != null) {
        this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes.size.currentValue}`);
      }
      if (changes.size.previousValue != null) {
        this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes.size.previousValue}`);
      }
    }
  }
};
_FaStackComponent.\u0275fac = function FaStackComponent_Factory(t) {
  return new (t || _FaStackComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
};
_FaStackComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _FaStackComponent,
  selectors: [["fa-stack"]],
  inputs: {
    size: "size"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function FaStackComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2
});
var FaStackComponent = _FaStackComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaStackComponent, [{
    type: Component,
    args: [{
      selector: "fa-stack",
      standalone: true,
      template: `<ng-content></ng-content>`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    size: [{
      type: Input
    }]
  });
})();
var _FaIconComponent = class _FaIconComponent {
  /**
   * @deprecated Use animation="spin" instead. To be removed in 0.14.0.
   */
  set spin(value) {
    this.animation = value ? "spin" : void 0;
  }
  /**
   * @deprecated Use animation="spin-pulse" instead. To be removed in 0.14.0.
   */
  set pulse(value) {
    this.animation = value ? "spin-pulse" : void 0;
  }
  constructor(sanitizer, config2, iconLibrary, stackItem, stack) {
    this.sanitizer = sanitizer;
    this.config = config2;
    this.iconLibrary = iconLibrary;
    this.stackItem = stackItem;
    this.classes = [];
    if (stack != null && stackItem == null) {
      console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.');
    }
  }
  ngOnChanges(changes) {
    if (this.icon == null && this.config.fallbackIcon == null) {
      faWarnIfIconSpecMissing();
      return;
    }
    if (changes) {
      const iconToBeRendered = this.icon != null ? this.icon : this.config.fallbackIcon;
      const iconDefinition = this.findIconDefinition(iconToBeRendered);
      if (iconDefinition != null) {
        const params = this.buildParams();
        this.renderIcon(iconDefinition, params);
      }
    }
  }
  /**
   * Programmatically trigger rendering of the icon.
   *
   * This method is useful, when creating {@link FaIconComponent} dynamically or
   * changing its inputs programmatically as in these cases icon won't be
   * re-rendered automatically.
   */
  render() {
    this.ngOnChanges({});
  }
  findIconDefinition(i) {
    const lookup = faNormalizeIconSpec(i, this.config.defaultPrefix);
    if ("icon" in lookup) {
      return lookup;
    }
    const definition = this.iconLibrary.getIconDefinition(lookup.prefix, lookup.iconName);
    if (definition != null) {
      return definition;
    }
    faWarnIfIconDefinitionMissing(lookup);
    return null;
  }
  buildParams() {
    const classOpts = {
      flip: this.flip,
      animation: this.animation,
      border: this.border,
      inverse: this.inverse,
      size: this.size || null,
      pull: this.pull || null,
      rotate: this.rotate || null,
      fixedWidth: typeof this.fixedWidth === "boolean" ? this.fixedWidth : this.config.fixedWidth,
      stackItemSize: this.stackItem != null ? this.stackItem.stackItemSize : null
    };
    const parsedTransform = typeof this.transform === "string" ? parse$1.transform(this.transform) : this.transform;
    return {
      title: this.title,
      transform: parsedTransform,
      classes: [...faClassList(classOpts), ...this.classes],
      mask: this.mask != null ? this.findIconDefinition(this.mask) : null,
      styles: this.styles != null ? this.styles : {},
      symbol: this.symbol,
      attributes: {
        role: this.a11yRole
      }
    };
  }
  renderIcon(definition, params) {
    const renderedIcon = icon2(definition, params);
    this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(renderedIcon.html.join("\n"));
  }
};
_FaIconComponent.\u0275fac = function FaIconComponent_Factory(t) {
  return new (t || _FaIconComponent)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(FaConfig), \u0275\u0275directiveInject(FaIconLibrary), \u0275\u0275directiveInject(FaStackItemSizeDirective, 8), \u0275\u0275directiveInject(FaStackComponent, 8));
};
_FaIconComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _FaIconComponent,
  selectors: [["fa-icon"]],
  hostAttrs: [1, "ng-fa-icon"],
  hostVars: 2,
  hostBindings: function FaIconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("innerHTML", ctx.renderedIconHTML, \u0275\u0275sanitizeHtml);
      \u0275\u0275attribute("title", ctx.title);
    }
  },
  inputs: {
    icon: "icon",
    title: "title",
    animation: "animation",
    spin: "spin",
    pulse: "pulse",
    mask: "mask",
    styles: "styles",
    flip: "flip",
    size: "size",
    pull: "pull",
    border: "border",
    inverse: "inverse",
    symbol: "symbol",
    rotate: "rotate",
    fixedWidth: "fixedWidth",
    classes: "classes",
    transform: "transform",
    a11yRole: "a11yRole"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 0,
  vars: 0,
  template: function FaIconComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var FaIconComponent = _FaIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaIconComponent, [{
    type: Component,
    args: [{
      selector: "fa-icon",
      standalone: true,
      template: ``,
      host: {
        class: "ng-fa-icon",
        "[attr.title]": "title"
      }
    }]
  }], () => [{
    type: DomSanitizer
  }, {
    type: FaConfig
  }, {
    type: FaIconLibrary
  }, {
    type: FaStackItemSizeDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FaStackComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    spin: [{
      type: Input
    }],
    pulse: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pull: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    inverse: [{
      type: Input
    }],
    symbol: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }],
    classes: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    a11yRole: [{
      type: Input
    }],
    renderedIconHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var _FaDuotoneIconComponent = class _FaDuotoneIconComponent extends FaIconComponent {
  findIconDefinition(i) {
    const definition = super.findIconDefinition(i);
    if (definition != null && !Array.isArray(definition.icon[4])) {
      throw new Error(`The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: <fa-duotone-icon [icon]="['fad', '${definition.iconName}']"></fa-duotone-icon> or use: <fa-icon icon="${definition.iconName}"></fa-icon> instead.`);
    }
    return definition;
  }
  buildParams() {
    const params = super.buildParams();
    if (this.swapOpacity === true || this.swapOpacity === "true") {
      params.classes.push("fa-swap-opacity");
    }
    if (this.primaryOpacity != null) {
      params.styles["--fa-primary-opacity"] = this.primaryOpacity.toString();
    }
    if (this.secondaryOpacity != null) {
      params.styles["--fa-secondary-opacity"] = this.secondaryOpacity.toString();
    }
    if (this.primaryColor != null) {
      params.styles["--fa-primary-color"] = this.primaryColor;
    }
    if (this.secondaryColor != null) {
      params.styles["--fa-secondary-color"] = this.secondaryColor;
    }
    return params;
  }
};
_FaDuotoneIconComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FaDuotoneIconComponent_BaseFactory;
  return function FaDuotoneIconComponent_Factory(t) {
    return (\u0275FaDuotoneIconComponent_BaseFactory || (\u0275FaDuotoneIconComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FaDuotoneIconComponent)))(t || _FaDuotoneIconComponent);
  };
})();
_FaDuotoneIconComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _FaDuotoneIconComponent,
  selectors: [["fa-duotone-icon"]],
  inputs: {
    swapOpacity: "swapOpacity",
    primaryOpacity: "primaryOpacity",
    secondaryOpacity: "secondaryOpacity",
    primaryColor: "primaryColor",
    secondaryColor: "secondaryColor"
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 0,
  vars: 0,
  template: function FaDuotoneIconComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var FaDuotoneIconComponent = _FaDuotoneIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaDuotoneIconComponent, [{
    type: Component,
    args: [{
      selector: "fa-duotone-icon",
      standalone: true,
      template: ``
    }]
  }], null, {
    swapOpacity: [{
      type: Input
    }],
    primaryOpacity: [{
      type: Input
    }],
    secondaryOpacity: [{
      type: Input
    }],
    primaryColor: [{
      type: Input
    }],
    secondaryColor: [{
      type: Input
    }]
  });
})();
var faWarnIfParentNotExist = (parent, parentName, childName) => {
  if (!parent) {
    throw new Error(`${childName} should be used as child of ${parentName} only.`);
  }
};
var _FaLayersComponent = class _FaLayersComponent {
  constructor(renderer, elementRef, config2) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.config = config2;
  }
  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, "fa-layers");
    this.fixedWidth = typeof this.fixedWidth === "boolean" ? this.fixedWidth : this.config.fixedWidth;
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      if (changes.size.currentValue != null) {
        this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes.size.currentValue}`);
      }
      if (changes.size.previousValue != null) {
        this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes.size.previousValue}`);
      }
    }
  }
};
_FaLayersComponent.\u0275fac = function FaLayersComponent_Factory(t) {
  return new (t || _FaLayersComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FaConfig));
};
_FaLayersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _FaLayersComponent,
  selectors: [["fa-layers"]],
  hostVars: 2,
  hostBindings: function FaLayersComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("fa-fw", ctx.fixedWidth);
    }
  },
  inputs: {
    size: "size",
    fixedWidth: "fixedWidth"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function FaLayersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2
});
var FaLayersComponent = _FaLayersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers",
      standalone: true,
      template: `<ng-content></ng-content>`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: FaConfig
  }], {
    size: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.fa-fw"]
    }]
  });
})();
var _FaLayersCounterComponent = class _FaLayersCounterComponent {
  constructor(parent, sanitizer) {
    this.parent = parent;
    this.sanitizer = sanitizer;
    this.classes = [];
    faWarnIfParentNotExist(this.parent, "FaLayersComponent", this.constructor.name);
  }
  ngOnChanges(changes) {
    if (changes) {
      const params = this.buildParams();
      this.updateContent(params);
    }
  }
  buildParams() {
    const classes = [];
    if (this.classes != null) {
      classes.push(...this.classes);
    }
    if (this.position != null) {
      classes.push(`fa-layers-${this.position}`);
    }
    return {
      title: this.title,
      classes,
      styles: this.styles
    };
  }
  updateContent(params) {
    this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(counter(this.content || "", params).html.join(""));
  }
};
_FaLayersCounterComponent.\u0275fac = function FaLayersCounterComponent_Factory(t) {
  return new (t || _FaLayersCounterComponent)(\u0275\u0275directiveInject(FaLayersComponent, 8), \u0275\u0275directiveInject(DomSanitizer));
};
_FaLayersCounterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _FaLayersCounterComponent,
  selectors: [["fa-layers-counter"]],
  hostAttrs: [1, "ng-fa-layers-counter"],
  hostVars: 1,
  hostBindings: function FaLayersCounterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("innerHTML", ctx.renderedHTML, \u0275\u0275sanitizeHtml);
    }
  },
  inputs: {
    content: "content",
    title: "title",
    styles: "styles",
    classes: "classes",
    position: "position"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 0,
  vars: 0,
  template: function FaLayersCounterComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var FaLayersCounterComponent = _FaLayersCounterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersCounterComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers-counter",
      standalone: true,
      template: "",
      host: {
        class: "ng-fa-layers-counter"
      }
    }]
  }], () => [{
    type: FaLayersComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }], {
    content: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    classes: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    renderedHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var _FaLayersTextComponent = class _FaLayersTextComponent {
  /**
   * @deprecated This input was incorrectly exposed and never worked correctly. To be removed in 0.14.0.
   */
  set spin(value) {
    this.animation = value ? "spin" : void 0;
  }
  /**
   * @deprecated This input was incorrectly exposed and never worked correctly. To be removed in 0.14.0.
   */
  set pulse(value) {
    this.animation = value ? "spin-pulse" : void 0;
  }
  constructor(parent, sanitizer) {
    this.parent = parent;
    this.sanitizer = sanitizer;
    this.classes = [];
    faWarnIfParentNotExist(this.parent, "FaLayersComponent", this.constructor.name);
  }
  ngOnChanges(changes) {
    if (changes) {
      const params = this.buildParams();
      this.updateContent(params);
    }
  }
  /**
   * Updating params by component props.
   */
  buildParams() {
    const classOpts = {
      flip: this.flip,
      animation: this.animation,
      border: this.border,
      inverse: this.inverse,
      size: this.size || null,
      pull: this.pull || null,
      rotate: this.rotate || null,
      fixedWidth: this.fixedWidth
    };
    const parsedTransform = typeof this.transform === "string" ? parse$1.transform(this.transform) : this.transform;
    return {
      transform: parsedTransform,
      classes: [...faClassList(classOpts), ...this.classes],
      title: this.title,
      styles: this.styles
    };
  }
  updateContent(params) {
    this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(text(this.content || "", params).html.join("\n"));
  }
};
_FaLayersTextComponent.\u0275fac = function FaLayersTextComponent_Factory(t) {
  return new (t || _FaLayersTextComponent)(\u0275\u0275directiveInject(FaLayersComponent, 8), \u0275\u0275directiveInject(DomSanitizer));
};
_FaLayersTextComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _FaLayersTextComponent,
  selectors: [["fa-layers-text"]],
  hostAttrs: [1, "ng-fa-layers-text"],
  hostVars: 1,
  hostBindings: function FaLayersTextComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("innerHTML", ctx.renderedHTML, \u0275\u0275sanitizeHtml);
    }
  },
  inputs: {
    content: "content",
    title: "title",
    styles: "styles",
    classes: "classes",
    spin: "spin",
    pulse: "pulse",
    flip: "flip",
    size: "size",
    pull: "pull",
    border: "border",
    inverse: "inverse",
    rotate: "rotate",
    fixedWidth: "fixedWidth",
    transform: "transform"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 0,
  vars: 0,
  template: function FaLayersTextComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var FaLayersTextComponent = _FaLayersTextComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersTextComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers-text",
      standalone: true,
      template: "",
      host: {
        class: "ng-fa-layers-text"
      }
    }]
  }], () => [{
    type: FaLayersComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }], {
    content: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    classes: [{
      type: Input
    }],
    spin: [{
      type: Input
    }],
    pulse: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pull: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    inverse: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    renderedHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var _FontAwesomeModule = class _FontAwesomeModule {
};
_FontAwesomeModule.\u0275fac = function FontAwesomeModule_Factory(t) {
  return new (t || _FontAwesomeModule)();
};
_FontAwesomeModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _FontAwesomeModule
});
_FontAwesomeModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var FontAwesomeModule = _FontAwesomeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FontAwesomeModule, [{
    type: NgModule,
    args: [{
      imports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
      exports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective]
    }]
  }], null, null);
})();

// src/app/navbar/navbar.component.ts
function NavbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function NavbarComponent_ng_template_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "fa-icon", 20);
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r5.faSackDollar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.loggedUser.tokens_count);
  }
}
function NavbarComponent_ng_template_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 22);
    \u0275\u0275element(2, "fa-icon", 8);
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r6.faEnvelope);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r6.messagesCount > 0 ? "visible" : "invisible");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.messagesCount, " ");
  }
}
function NavbarComponent_ng_template_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 25);
    \u0275\u0275text(2, " Dodaj ");
    \u0275\u0275element(3, "fa-icon", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r7.faPlus);
  }
}
function NavbarComponent_ng_template_1_div_14_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "li");
    \u0275\u0275element(2, "hr", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "li")(4, "a", 36);
    \u0275\u0275text(5, "U\u017Cytkownicy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li")(7, "a", 37);
    \u0275\u0275text(8, "Chore zwierz\u0119ta");
    \u0275\u0275elementEnd()()();
  }
}
function NavbarComponent_ng_template_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "fa-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 28)(5, "li")(6, "a", 29);
    \u0275\u0275text(7, "Edytuj profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li")(9, "a", 30);
    \u0275\u0275text(10, "Moje zwierz\u0119ta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li")(12, "a", 31);
    \u0275\u0275text(13, "Zapisane");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li")(15, "a", 32);
    \u0275\u0275text(16, "Do\u0142aduj \u017Cetony");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, NavbarComponent_ng_template_1_div_14_div_17_Template, 9, 0, "div", 33);
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275element(19, "hr", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "a", 35);
    \u0275\u0275listener("click", function NavbarComponent_ng_template_1_div_14_Template_a_click_21_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r12 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r12.logout());
    });
    \u0275\u0275text(22, "Wyloguj");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r8.loggedUser.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r8.faUser);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r8.loggedUser.role == "admin");
  }
}
function NavbarComponent_ng_template_1_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275text(1, "Rejestracja");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_ng_template_1_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39);
    \u0275\u0275text(1, "Zaloguj");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nav", 5)(3, "div", 6)(4, "div", 7);
    \u0275\u0275element(5, "fa-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 9);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275text(8, " Pets Shelter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12);
    \u0275\u0275template(11, NavbarComponent_ng_template_1_div_11_Template, 4, 2, "div", 13)(12, NavbarComponent_ng_template_1_div_12_Template, 5, 3, "div", 14)(13, NavbarComponent_ng_template_1_div_13_Template, 4, 1, "div", 15)(14, NavbarComponent_ng_template_1_div_14_Template, 23, 3, "div", 16)(15, NavbarComponent_ng_template_1_a_15_Template, 2, 0, "a", 17)(16, NavbarComponent_ng_template_1_a_16_Template, 2, 0, "a", 18);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r1.faShieldDog);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoggedIn);
  }
}
function NavbarComponent_ng_template_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "a", 38);
    \u0275\u0275text(4, "Rejestracja");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 53)(6, "a", 39);
    \u0275\u0275text(7, "Zaloguj");
    \u0275\u0275elementEnd()()()();
  }
}
function NavbarComponent_ng_template_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "fa-icon", 20);
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r15.faSackDollar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r15.loggedUser.tokens_count);
  }
}
function NavbarComponent_ng_template_3_div_13_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "li");
    \u0275\u0275element(2, "hr", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "li")(4, "a", 66);
    \u0275\u0275text(5, "U\u017Cytkownicy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li")(7, "a", 67);
    \u0275\u0275text(8, "Chore zwierz\u0119ta");
    \u0275\u0275elementEnd()()();
  }
}
function NavbarComponent_ng_template_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "button", 56);
    \u0275\u0275element(2, "fa-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 57)(4, "li", 58)(5, "button", 59);
    \u0275\u0275text(6, " Dodaj ");
    \u0275\u0275element(7, "fa-icon", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275element(9, "hr", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li")(11, "a", 61);
    \u0275\u0275text(12, "Edytuj profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 62);
    \u0275\u0275text(15, "Moje zwierz\u0119ta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "a", 63);
    \u0275\u0275text(18, "Zapisane");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li")(20, "a", 64);
    \u0275\u0275text(21, "Do\u0142aduj \u017Cetony");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, NavbarComponent_ng_template_3_div_13_div_22_Template, 9, 0, "div", 33);
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275element(24, "hr", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li")(26, "a", 65);
    \u0275\u0275listener("click", function NavbarComponent_ng_template_3_div_13_Template_a_click_26_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r21 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r21.logout());
    });
    \u0275\u0275text(27, "Wyloguj");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r16.faUser);
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r16.faPlus);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r16.loggedUser.role == "admin");
  }
}
function NavbarComponent_ng_template_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "button", 68);
    \u0275\u0275element(2, "fa-icon", 8);
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r17.faEnvelope);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r17.messagesCount > 0 ? "visible" : "invisible");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r17.messagesCount, " ");
  }
}
function NavbarComponent_ng_template_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
}
function NavbarComponent_ng_template_3_div_18_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "li");
    \u0275\u0275element(2, "hr", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "li")(4, "a", 36);
    \u0275\u0275text(5, "U\u017Cytkownicy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li")(7, "a", 37);
    \u0275\u0275text(8, "Chore zwierz\u0119ta");
    \u0275\u0275elementEnd()()();
  }
}
function NavbarComponent_ng_template_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "fa-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 28)(5, "li")(6, "button", 25);
    \u0275\u0275text(7, " Dodaj ");
    \u0275\u0275element(8, "fa-icon", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li");
    \u0275\u0275element(10, "hr", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li")(12, "a", 29);
    \u0275\u0275text(13, "Edytuj profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li")(15, "a", 30);
    \u0275\u0275text(16, "Moje zwierz\u0119ta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li")(18, "a", 31);
    \u0275\u0275text(19, "Zapisane");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "li")(21, "a", 32);
    \u0275\u0275text(22, "Do\u0142aduj \u017Cetony");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, NavbarComponent_ng_template_3_div_18_div_23_Template, 9, 0, "div", 33);
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275element(25, "hr", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li")(27, "a", 35);
    \u0275\u0275listener("click", function NavbarComponent_ng_template_3_div_18_Template_a_click_27_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r24 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r24.logout());
    });
    \u0275\u0275text(28, "Wyloguj");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r19 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r19.loggedUser.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r19.faUser);
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r19.faPlus);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r19.loggedUser.role == "admin");
  }
}
function NavbarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "nav", 11)(3, "div", 6)(4, "div", 42)(5, "div", 43);
    \u0275\u0275element(6, "fa-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 44)(8, "a", 45)(9, "h6");
    \u0275\u0275text(10, " Pets Shelter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, NavbarComponent_ng_template_3_div_11_Template, 8, 0, "div", 46)(12, NavbarComponent_ng_template_3_div_12_Template, 4, 2, "div", 47)(13, NavbarComponent_ng_template_3_div_13_Template, 28, 3, "div", 48)(14, NavbarComponent_ng_template_3_div_14_Template, 5, 3, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 49)(16, "div", 12);
    \u0275\u0275template(17, NavbarComponent_ng_template_3_div_17_Template, 1, 0, "div", 15)(18, NavbarComponent_ng_template_3_div_18_Template, 29, 4, "div", 16);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("icon", ctx_r3.faShieldDog);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r3.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("hidden", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLoggedIn);
  }
}
var _NavbarComponent = class _NavbarComponent {
  constructor(authService, router, tokenService, apiService, messagesService, breakPointService, apiMessagessService) {
    this.authService = authService;
    this.router = router;
    this.tokenService = tokenService;
    this.apiService = apiService;
    this.messagesService = messagesService;
    this.breakPointService = breakPointService;
    this.apiMessagessService = apiMessagessService;
    this.isMobile = false;
    this.isBigMobile = false;
    this.isMedium = false;
    this.faShieldDog = faShieldDog;
    this.faUser = faUser;
    this.faPlus = faPlus;
    this.faSackDollar = faSackDollar;
    this.faEnvelope = faEnvelope;
    this.isLoggedIn = false;
    this.isTokenExpired = false;
    this.messagesCount = 0;
    this.loggedUser = {
      id: 0,
      name: "",
      surname: "",
      email: "",
      role: "",
      tokens_count: 0
    };
    this.messagesService.messagesCountObs.subscribe((messagesCount) => this.messagesCount = messagesCount);
  }
  ngOnInit() {
    this.authService.authStatus.subscribe((value) => {
      this.isLoggedIn = value;
    });
    this.checkUserLogged();
    this.checkDeviceSize();
  }
  checkUserLogged() {
    if (this.isLoggedIn) {
      this.getAuthorizedUser();
      this.getMessagesCount();
      this.checkToken();
      this.messagesService.messagesCountObs.subscribe((messagesCount) => this.messagesCount = messagesCount);
    }
  }
  getAuthorizedUser() {
    this.apiService.authorizedUser().subscribe({
      next: (data) => {
        this.handleUser(data);
      }
    });
  }
  getMessagesCount() {
    this.apiMessagessService.getUnreadMessagesCount().subscribe({
      next: (data) => {
        this.getUnreadMessagesCount(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).subscribe((result) => {
      this.isMobile = false;
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        this.isBigMobile = true;
      } else {
        this.isBigMobile = false;
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        this.isMedium = true;
      } else {
        this.isMedium = false;
      }
    });
  }
  logout() {
    this.router.navigate(["/"]);
    this.tokenService.removeToken();
    this.authService.changeAuthStatus(false);
    alertify.success("Zosta\u0142e\u015B wylogowany");
  }
  handleUser(data) {
    this.loggedUser.id = data.id;
    this.loggedUser.name = data.name;
    this.loggedUser.surname = data.surname;
    this.loggedUser.email = data.email;
    this.loggedUser.role = data.role;
    this.loggedUser.tokens_count = data.tokens_count;
    this.authService.setAuthUser();
  }
  checkToken() {
    this.isTokenExpired = this.tokenService.isTokenExpired();
    if (this.isTokenExpired) {
      this.logout();
    }
  }
  getUnreadMessagesCount(data) {
    this.messagesCount = data.messagesCount;
  }
};
_NavbarComponent.\u0275fac = function NavbarComponent_Factory(t) {
  return new (t || _NavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TokenService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MessagesService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiMessagesService));
};
_NavbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], inputs: { messagesCount: "messagesCount" }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], [1, "app-background", "px-6", "pb-1"], [1, "theme-bgr", "ps-5", "pe-5"], [1, "navbar", "navbar-expand-lg", "mb-1", "m-3"], [1, "container-fluid"], [1, "fa-3x", "ms-1"], [3, "icon"], ["href", "#", "routerLink", "", 1, "navbar-collapse", "navbar-brand", "text-light"], [1, "ps-2"], [1, ""], [1, "navbar-nav", "ms-auto"], ["class", "fa-xl pe-3 pt-2 text-dark", 4, "ngIf"], ["class", "fa-1x pe-3", 4, "ngIf"], ["class", "fa-1x pe-1", 4, "ngIf"], ["class", "btn-group", 4, "ngIf"], ["class", "nav-link text-light", "aria-current", "page", "href", "#", "routerLink", "/register", 4, "ngIf"], ["class", "nav-link text-light", "href", "#", "routerLink", "/login", 4, "ngIf"], [1, "fa-xl", "pe-3", "pt-2", "text-dark"], [1, "pe-1", 3, "icon"], [1, "fa-1x", "pe-3"], ["type", "button", "routerLink", "/messages", 1, "btn", "btn-primary", "position-relative"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger", 3, "ngClass"], [1, "fa-1x", "pe-1"], ["type", "button", "routerLink", "/add-pet", 1, "btn", "btn-primary"], [1, "btn-group"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", "routerLink", "/edit-profile", 1, "dropdown-item"], ["href", "#", "routerLink", "/my-pets", 1, "dropdown-item"], ["href", "#", "routerLink", "/saved-pets", 1, "dropdown-item"], ["href", "#", "routerLink", "/tokens-bundles", 1, "dropdown-item"], [4, "ngIf"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"], ["href", "#", "routerLink", "/users", 1, "dropdown-item"], ["href", "#", "routerLink", "/sick-pets-manager", 1, "dropdown-item"], ["aria-current", "page", "href", "#", "routerLink", "/register", 1, "nav-link", "text-light"], ["href", "#", "routerLink", "/login", 1, "nav-link", "text-light"], [1, "app-background", "pb-1"], [1, "theme-bgr"], [1, "d-flex"], [1, "fa-3x", "pe-1"], [1, "pt-4"], ["href", "#", "routerLink", "", 1, "navbar-brand", "text-light"], ["class", "ms-auto", 4, "ngIf"], ["class", "fa-lg pt-4 text-dark ms-auto", 4, "ngIf"], ["class", "fa-1x pt-3 ps-2", 4, "ngIf"], [1, "", 3, "hidden"], [1, "ms-auto"], [1, "col-auto"], [1, "pt-2"], [1, "pt-1"], [1, "fa-lg", "pt-4", "text-dark", "ms-auto"], [1, "fa-1x", "pt-3", "ps-2"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "btn-sm", "dropdown-toggle"], [1, "dropdown-menu", "bg-success", 2, "width", "100%"], [1, "dropdown-item"], ["type", "button", "routerLink", "/add-pet", 1, "btn", "btn-primary", "btn-sm"], [1, "dropdown-divider", "text-light"], ["href", "#", "routerLink", "/edit-profile", 1, "dropdown-item", "text-light"], ["href", "#", "routerLink", "/my-pets", 1, "dropdown-item", "text-light"], ["href", "#", "routerLink", "/saved-pets", 1, "dropdown-item", "text-light"], ["href", "#", "routerLink", "/tokens-bundles", 1, "dropdown-item", "text-light"], ["href", "#", 1, "dropdown-item", "text-light", 3, "click"], ["href", "#", "routerLink", "/users", 1, "dropdown-item", "text-light"], ["href", "#", "routerLink", "/sick-pets-manager", 1, "dropdown-item", "text-light"], ["type", "button", "routerLink", "/messages", 1, "btn", "btn-primary", "position-relative", "btn-sm"]], template: function NavbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NavbarComponent_div_0_Template, 1, 0, "div", 0)(1, NavbarComponent_ng_template_1_Template, 17, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(3, NavbarComponent_ng_template_3_Template, 19, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(2);
    const _r4 = \u0275\u0275reference(4);
    \u0275\u0275property("ngIf", ctx.isMobile || ctx.isBigMobile || ctx.isMedium)("ngIfThen", _r4)("ngIfElse", _r2);
  }
}, dependencies: [NgClass, NgIf, RouterLink, FaIconComponent], styles: ["\n\n.dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background-image: none !important;\n}\n.dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background-color: #E4A11B !important;\n}\n.dropdown-menu[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background-color: #E4A11B;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
var NavbarComponent = _NavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\navbar\\navbar.component.ts", lineNumber: 23 });
})();

// src/app/pet-to-adopt/pet-to-adopt.component.ts
function PetToAdoptComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function PetToAdoptComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9)(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "span", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 9)(16, "span", 10);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 11)(19, "button", 12);
    \u0275\u0275text(20, " Zobacz wi\u0119cej ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.pet.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.pet.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pet.species);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 6, ctx_r1.pet.race));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pet.size);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("routerLink", "/pets-to-adopt/", ctx_r1.pet.id, "");
  }
}
function PetToAdoptComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17)(7, "div", 18)(8, "div", 9)(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "span", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 9)(16, "span", 10);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 11)(19, "button", 12);
    \u0275\u0275text(20, " Zobacz wi\u0119cej ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.pet.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.pet.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.pet.species);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 6, ctx_r3.pet.race));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.pet.size);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("routerLink", "/pets-to-adopt/", ctx_r3.pet.id, "");
  }
}
var _PetToAdoptComponent = class _PetToAdoptComponent {
  constructor(breakPointService) {
    this.breakPointService = breakPointService;
    this.isMobile = false;
    this.pet = {
      id: 0,
      name: "Carlos",
      species: "Pies",
      race: "kundel",
      size: "\u015Bredni",
      description: "brak",
      photo_path: "./assets/PetsBgr.jpg",
      user_id: 0
    };
  }
  ngOnInit() {
    this.checkDeviceSize();
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
};
_PetToAdoptComponent.\u0275fac = function PetToAdoptComponent_Factory(t) {
  return new (t || _PetToAdoptComponent)(\u0275\u0275directiveInject(BreakpointObserver));
};
_PetToAdoptComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PetToAdoptComponent, selectors: [["app-pet-to-adopt"]], inputs: { pet: "pet" }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], [1, "mx-auto", "row", "px-7", "app-background", "text-light", "justify-content-center", "pb-2"], [1, "col-3", "theme-bgr", "p-2", "border-start", "border-top", "border-bottom", "border-warning", "border-3"], [1, "img-size", 3, "src"], [1, "col-6", "theme-bgr", "p-2", "border", "border-warning", "border-3"], [1, "row", "justify-content-center"], [1, "col-auto", "p-2", "pe-4"], [1, "col-auto", "p-1"], [1, "p-3", "badge", "bg-primary", "rounded-pill"], [1, "p-4", "row", "justify-content-center"], ["type", "button", 1, "btn", "btn-warning", "btn-rounded", 3, "routerLink"], [1, "mx-auto", "row", "px-7", "p-1", "app-background", "text-light", "justify-content-center", "pb-2"], [1, "col-12", "theme-bgr", "p-2", "border-start", "border-top", "border-end", "border-warning", "border-3", "text-center"], [1, "img-size", "center-block", 3, "src"], [1, "col-12", "p-2", "theme-bgr", "border-start", "border-end", "border-warning", "border-3", "text-center"], [1, "theme-bgr", "p-2", "border-start", "border-bottom", "border-end", "border-warning", "border-3"], [1, "row", "justify-content-center", "p-1"]], template: function PetToAdoptComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PetToAdoptComponent_div_0_Template, 1, 0, "div", 0)(1, PetToAdoptComponent_ng_template_1_Template, 21, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(3, PetToAdoptComponent_ng_template_3_Template, 21, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(2);
    const _r4 = \u0275\u0275reference(4);
    \u0275\u0275property("ngIf", !ctx.isMobile)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgIf, RouterLink, TitleCasePipe], styles: ["\n\n/*# sourceMappingURL=pet-to-adopt.component.css.map */"] });
var PetToAdoptComponent = _PetToAdoptComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PetToAdoptComponent, { className: "PetToAdoptComponent", filePath: "src\\app\\pet-to-adopt\\pet-to-adopt.component.ts", lineNumber: 10 });
})();

// src/app/pipes/search.pipe.ts
var _SearchPipe = class _SearchPipe {
  transform(value, args) {
    if (!value)
      return null;
    if (!args)
      return value;
    args = args.toLowerCase();
    return value.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
};
_SearchPipe.\u0275fac = function SearchPipe_Factory(t) {
  return new (t || _SearchPipe)();
};
_SearchPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "search", type: _SearchPipe, pure: true });
var SearchPipe = _SearchPipe;

// src/app/pets-adopt-page/pets-adopt-page.component.ts
function PetsAdoptPageComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-pet-to-adopt", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pet_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("pet", pet_r2);
  }
}
var _c03 = (a0, a1) => ({ itemsPerPage: a0, currentPage: a1 });
function PetsAdoptPageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PetsAdoptPageComponent_div_15_div_1_Template, 2, 1, "div", 10);
    \u0275\u0275pipe(2, "paginate");
    \u0275\u0275pipe(3, "search");
    \u0275\u0275elementStart(4, "div", 11)(5, "pagination-controls", 12);
    \u0275\u0275listener("pageChange", function PetsAdoptPageComponent_div_15_Template_pagination_controls_pageChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.page = $event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(2, 1, \u0275\u0275pipeBind2(3, 4, ctx_r0.pets, ctx_r0.searchText), \u0275\u0275pureFunction2(7, _c03, ctx_r0.petsPerPage, ctx_r0.page)));
  }
}
var _PetsAdoptPageComponent = class _PetsAdoptPageComponent {
  constructor(spinnerService, apiPetsService) {
    this.spinnerService = spinnerService;
    this.apiPetsService = apiPetsService;
    this.page = 1;
    this.petsPerPage = 4;
  }
  ngOnInit() {
    this.spinnerService.show();
    this.getPetToAdopt();
  }
  getPetToAdopt() {
    this.apiPetsService.getPetsToAdopt().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllPets(data);
      }
    });
  }
  handleAllPets(data) {
    this.pets = data;
  }
};
_PetsAdoptPageComponent.\u0275fac = function PetsAdoptPageComponent_Factory(t) {
  return new (t || _PetsAdoptPageComponent)(\u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(ApiPetsService));
};
_PetsAdoptPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PetsAdoptPageComponent, selectors: [["app-pets-adopt-page"]], decls: 16, vars: 3, consts: [["href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet"], [1, "app-background", "text-center", "text-light", "p-5"], [1, "app-background", "px-6", "d-flex", "justify-content-center", "pb-3"], [1, "p-2"], ["type", "button", 1, "btn", "text-light", "btn-rounded", 2, "background-color", "#6a994e", 3, "disabled"], ["type", "button", "routerLink", "/sick-pets", 1, "btn", "text-light", "btn-rounded", 2, "background-color", "#6a994e"], [1, "mx-auto", "row", "app-background", "justify-content-center", "px-6", "p-5"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-6", "col-xl-4"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "\uF002 Szukaj po gatunku, rasie czy rozmiarze", 1, "form-control", 2, "font-family", "Arial, FontAwesome", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "app-background", "d-flex", "justify-content-center", "p-3"], ["previousLabel", "", "nextLabel", "", 1, "paginator", 3, "pageChange"], [3, "pet"]], template: function PetsAdoptPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "link", 0)(1, "app-navbar");
    \u0275\u0275elementStart(2, "div", 1)(3, "h2");
    \u0275\u0275text(4, " Przegl\u0105daj zwierz\u0119ta do adopcji");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "button", 4);
    \u0275\u0275text(8, " Zwierz\u0119ta do adopcji ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 3)(10, "button", 5);
    \u0275\u0275text(11, " Chore zwierz\u0119ta ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "input", 8);
    \u0275\u0275listener("ngModelChange", function PetsAdoptPageComponent_Template_input_ngModelChange_14_listener($event) {
      return ctx.searchText = $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, PetsAdoptPageComponent_div_15_Template, 6, 10, "div", 9);
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.pets != null);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, DefaultValueAccessor, NgControlStatus, NgModel, PaginationControlsComponent, NavbarComponent, PetToAdoptComponent, PaginatePipe, SearchPipe], styles: ['\n\n.paginator[_ngcontent-%COMP%] {\n  font-family: "Lato", sans-serif;\n  font-size: 15px;\n  color: white !important;\n  padding: 5px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination {\n  display: flex;\n  gap: 4px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background: #6a994e;\n  border-radius: 4px;\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination a {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination .disabled {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #E4A11B;\n  border-radius: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  text-decoration: none;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:focus, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #d4d4d4;\n}\n/*# sourceMappingURL=pets-adopt-page.component.css.map */'] });
var PetsAdoptPageComponent = _PetsAdoptPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PetsAdoptPageComponent, { className: "PetsAdoptPageComponent", filePath: "src\\app\\pets-adopt-page\\pets-adopt-page.component.ts", lineNumber: 10 });
})();

// src/app/app-routing.module.ts
var routes = [];
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
var AppRoutingModule = _AppRoutingModule;

// src/app/register/register.component.ts
function RegisterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Imi\u0119 jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Podane imi\u0119 jest za d\u0142ugie");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Nazwisko jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Podane nazwisko jest za d\u0142ugie");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "E-mail jest wymagany");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Wpisz poprawny adres e-mail");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " Podany e-mail ju\u017C istnieje! Wprowad\u017A inny adres e-mail ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Has\u0142o jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Has\u0142o musi mie\u0107 minimalnie 6 znak\xF3w");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Pole nie mo\u017Ce by\u0107 puste");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Has\u0142a nie s\u0105 takie same");
    \u0275\u0275elementEnd();
  }
}
var _RegisterComponent = class _RegisterComponent {
  constructor(formBuilder, router, apiService, spinnerService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.apiService = apiService;
    this.spinnerService = spinnerService;
    this.hasSubmitted = false;
    this.isPasswordsSame = true;
    this.error = [];
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(25)]],
      surname: ["", [Validators.required, Validators.maxLength(25)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];
    this.checkPassword();
    this.validateRegisterForm();
  }
  validateRegisterForm() {
    if (this.registerForm.valid && this.isPasswordsSame) {
      this.spinnerService.show();
      const formData = this.registerForm.getRawValue();
      this.register(formData);
    } else {
      console.log("Form is invalid");
    }
  }
  register(formData) {
    this.apiService.register(formData).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  checkPassword() {
    const firstPassword = this.registerForm.controls["password"].value;
    const repeatedPassword = this.registerForm.controls["confirmPassword"].value;
    if (firstPassword == repeatedPassword) {
      this.isPasswordsSame = true;
    } else {
      this.isPasswordsSame = false;
    }
  }
  handleResponse() {
    this.router.navigate(["/login"]);
    alertify.success("Zosta\u0142e\u015B zarejestrowany");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("B\u0142\u0105d rejestracji");
  }
};
_RegisterComponent.\u0275fac = function RegisterComponent_Factory(t) {
  return new (t || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(SpinnerService));
};
_RegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 38, vars: 12, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "p-4", "text-light", "text-center"], [1, "text-light"], [1, "form", 3, "formGroup", "ngSubmit"], ["for", "task-title", 1, "form-label", "m-2"], ["type", "text", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "name", 1, "form-control"], ["class", "text-danger p-1", 4, "ngIf"], ["type", "text", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "surname", 1, "form-control"], ["type", "email", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "email", 1, "form-control"], ["type", "password", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "password", 1, "form-control"], ["type", "password", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "confirmPassword", 1, "form-control"], [1, "text-center", "m-4"], ["type", "submit", 1, "btn", "btn-warning"], [1, "text-danger", "p-1"]], template: function RegisterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Rejestracja");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "label", 6);
    \u0275\u0275text(10, "Imi\u0119:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275template(12, RegisterComponent_div_12_Template, 2, 0, "div", 8)(13, RegisterComponent_div_13_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(14, "label", 6);
    \u0275\u0275text(15, "Nazwisko:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 9);
    \u0275\u0275template(17, RegisterComponent_div_17_Template, 2, 0, "div", 8)(18, RegisterComponent_div_18_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(19, "label", 6);
    \u0275\u0275text(20, "E-mail:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 10);
    \u0275\u0275template(22, RegisterComponent_div_22_Template, 2, 0, "div", 8)(23, RegisterComponent_div_23_Template, 2, 0, "div", 8)(24, RegisterComponent_div_24_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(25, "label", 6);
    \u0275\u0275text(26, "Has\u0142o:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 11);
    \u0275\u0275template(28, RegisterComponent_div_28_Template, 2, 0, "div", 8)(29, RegisterComponent_div_29_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(30, "label", 6);
    \u0275\u0275text(31, "Powt\xF3rz has\u0142o:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 12);
    \u0275\u0275template(33, RegisterComponent_div_33_Template, 2, 0, "div", 8)(34, RegisterComponent_div_34_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(35, "div", 13)(36, "button", 14);
    \u0275\u0275text(37, "Za\u0142\xF3\u017C konto");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.registerForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && (((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.registerForm.get("name")) == null ? null : tmp_2_0.hasError("maxlength")) && (((tmp_2_0 = ctx.registerForm.get("name")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.registerForm.get("name")) == null ? null : tmp_2_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.registerForm.get("surname")) == null ? null : tmp_3_0.hasError("required")) && (((tmp_3_0 = ctx.registerForm.get("surname")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.registerForm.get("surname")) == null ? null : tmp_3_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.registerForm.get("surname")) == null ? null : tmp_4_0.hasError("maxlength")) && (((tmp_4_0 = ctx.registerForm.get("surname")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.registerForm.get("surname")) == null ? null : tmp_4_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.registerForm.get("email")) == null ? null : tmp_5_0.hasError("required")) && (((tmp_5_0 = ctx.registerForm.get("email")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.registerForm.get("email")) == null ? null : tmp_5_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.registerForm.get("email")) == null ? null : tmp_6_0.hasError("email")) && (((tmp_6_0 = ctx.registerForm.get("email")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.registerForm.get("email")) == null ? null : tmp_6_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error.email && ctx.hasSubmitted);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.registerForm.get("password")) == null ? null : tmp_8_0.hasError("required")) && (((tmp_8_0 = ctx.registerForm.get("password")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.registerForm.get("password")) == null ? null : tmp_8_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.registerForm.get("password")) == null ? null : tmp_9_0.hasError("minlength")) && (((tmp_9_0 = ctx.registerForm.get("password")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.registerForm.get("password")) == null ? null : tmp_9_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_10_0.hasError("required")) && (((tmp_10_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_10_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isPasswordsSame && (((tmp_11_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_11_0.dirty) || ((tmp_11_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_11_0.touched) || ctx.hasSubmitted));
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NavbarComponent], styles: ['\n\n.register-form-bgr[_ngcontent-%COMP%] {\n  background-color: #386641;\n  opacity: 0.9;\n}\n.register-bgr-image[_ngcontent-%COMP%] {\n  background-image: "/assets/PetsBgr.jpg";\n}\n/*# sourceMappingURL=register.component.css.map */'] });
var RegisterComponent = _RegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\register\\register.component.ts", lineNumber: 14 });
})();

// src/app/login/login.component.ts
function LoginComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "E-mail jest wymagany");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Wpisz poprawny adres e-mail");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Has\u0142o jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " Email lub has\u0142o nieprawid\u0142owe ");
    \u0275\u0275elementEnd();
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(formBuilder, router, apiService, tokenService, authService, spinnerService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.apiService = apiService;
    this.tokenService = tokenService;
    this.authService = authService;
    this.spinnerService = spinnerService;
    this.hasSubmitted = false;
    this.error = null;
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }
  ngOnInit() {
    this.hasSubmitted = false;
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = null;
    this.validateLoginForm();
  }
  validateLoginForm() {
    if (this.loginForm.valid) {
      this.spinnerService.show();
      const formData = this.loginForm.getRawValue();
      this.login(formData);
    } else {
      console.log("Form is invalid");
    }
  }
  login(formData) {
    this.apiService.login(formData).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse(data);
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  handleResponse(data) {
    this.tokenService.handleToken(data.access_token);
    this.authService.changeAuthStatus(true);
    this.router.navigate(["/"]);
    alertify.success("Zosta\u0142e\u015B zalogowany");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("B\u0142\u0105d logowania");
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(TokenService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SpinnerService));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 25, vars: 5, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "p-4", "text-light", "text-center"], [1, "text-light"], [1, "form", 3, "formGroup", "ngSubmit"], ["for", "task-title", 1, "form-label", "m-2"], ["type", "email", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "email", 1, "form-control"], ["class", "text-danger p-1", 4, "ngIf"], ["type", "password", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "password", 1, "form-control"], [1, "text-center", "m-4"], ["type", "submit", 1, "btn", "btn-warning"], ["href", "#", "routerLink", "/reset-password"], [1, "text-danger", "p-1"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Logowanie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "label", 6);
    \u0275\u0275text(10, "E-mail:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275template(12, LoginComponent_div_12_Template, 2, 0, "div", 8)(13, LoginComponent_div_13_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(14, "label", 6);
    \u0275\u0275text(15, "Has\u0142o:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 9);
    \u0275\u0275template(17, LoginComponent_div_17_Template, 2, 0, "div", 8)(18, LoginComponent_div_18_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(19, "div", 10)(20, "button", 11);
    \u0275\u0275text(21, "Zaloguj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "a", 12);
    \u0275\u0275text(24, " Nie pami\u0119tam has\u0142a");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.loginForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("required")) && (((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("email")) && (((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.hasError("required")) && (((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
  }
}, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NavbarComponent], styles: ["\n\n.login-form-bgr[_ngcontent-%COMP%] {\n  background-color: #386641;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\login\\login.component.ts", lineNumber: 17 });
})();

// src/app/home/home.component.ts
function HomeComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-pet-to-adopt", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pet_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("pet", pet_r2);
  }
}
function HomeComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, HomeComponent_div_15_div_1_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.pets);
  }
}
var _HomeComponent = class _HomeComponent {
  constructor(spinnerService, apiPetsService) {
    this.spinnerService = spinnerService;
    this.apiPetsService = apiPetsService;
  }
  ngOnInit() {
    this.spinnerService.show();
    this.getNewestPets();
  }
  getNewestPets() {
    this.apiPetsService.getNewestPets().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleNewestPets(data);
        console.log(data);
      }
    });
  }
  handleNewestPets(data) {
    this.pets = data;
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(\u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(ApiPetsService));
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 16, vars: 1, consts: [[1, "app-background", "text-center", "text-light", "p-5"], [1, "app-background", "d-flex", "justify-content-center"], [1, "p-2"], ["type", "button", "routerLink", "/pets-to-adopt", 1, "btn", "text-light", "btn-rounded", 2, "background-color", "#6a994e"], ["type", "button", "routerLink", "/sick-pets", 1, "btn", "text-light", "btn-rounded", 2, "background-color", "#6a994e"], [1, "app-background", "text-start", "text-light", "px-7", "pb-1"], [1, "p-5"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "pet"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "h2");
    \u0275\u0275text(3, " Zaadoptuj zwierzaka lub pom\xF3\u017C w inny spos\xF3b!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 1)(5, "div", 2)(6, "button", 3);
    \u0275\u0275text(7, " Zwierz\u0119ta do adopcji ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 2)(9, "button", 4);
    \u0275\u0275text(10, " Chore zwierz\u0119ta ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 5)(12, "h5", 6)(13, "b");
    \u0275\u0275text(14, "Najnowsze:");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, HomeComponent_div_15_Template, 2, 1, "div", 7);
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx.pets != null);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, NavbarComponent, PetToAdoptComponent], styles: ["\n\n/*# sourceMappingURL=home.component.css.map */"] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\home\\home.component.ts", lineNumber: 10 });
})();

// src/app/add-pet/add-pet.component.ts
function AddPetComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Imi\u0119 jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function AddPetComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Gatunek jest wymagany");
    \u0275\u0275elementEnd();
  }
}
function AddPetComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Gatunek musi mie\u0107 minimalnie 3 znaki");
    \u0275\u0275elementEnd();
  }
}
function AddPetComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Rasa jest wymagana");
    \u0275\u0275elementEnd();
  }
}
function AddPetComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Rasa musi mie\u0107 minimalnie 3 znaki");
    \u0275\u0275elementEnd();
  }
}
function AddPetComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Zdj\u0119cie jest wymagane");
    \u0275\u0275elementEnd();
  }
}
var _AddPetComponent = class _AddPetComponent {
  constructor(formBuilder, router, spinnerService, apiPetsService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.spinnerService = spinnerService;
    this.apiPetsService = apiPetsService;
    this.hasSubmitted = false;
    this.userId = 1;
    this.error = [];
    this.addPetForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      species: ["", [Validators.required, Validators.minLength(3)]],
      race: ["", [Validators.required, Validators.minLength(3)]],
      size: ["Ma\u0142y", [Validators.required]],
      description: [""],
      photo: [null, [Validators.required]],
      userId: [this.userId, [Validators.required]]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];
    this.validatePetForm();
  }
  validatePetForm() {
    if (this.addPetForm.valid) {
      this.spinnerService.show();
      this.addPet();
    } else {
      console.log("Form is invalid");
    }
  }
  addPet() {
    this.apiPetsService.addPet(this.getFormData()).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  handleResponse() {
    this.router.navigate(["/"]);
    alertify.success("Dodano zwierz\u0119");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  onFileChange(event) {
    const photoToUpload = event.target.files[0];
    this.addPetForm.patchValue({ photo: photoToUpload });
    this.addPetForm.get("photo")?.updateValueAndValidity();
  }
  getFormData() {
    const formData = new FormData();
    formData.append("name", this.addPetForm.get("name")?.value);
    formData.append("species", this.addPetForm.get("species")?.value);
    formData.append("race", this.addPetForm.get("race")?.value);
    formData.append("size", this.addPetForm.get("size")?.value);
    formData.append("description", this.addPetForm.get("description")?.value);
    formData.append("photo", this.addPetForm.get("photo")?.value);
    return formData;
  }
};
_AddPetComponent.\u0275fac = function AddPetComponent_Factory(t) {
  return new (t || _AddPetComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(ApiPetsService));
};
_AddPetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPetComponent, selectors: [["app-add-pet"]], decls: 42, vars: 7, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "p-4", "text-light", "text-center"], [1, "text-light"], ["enctype", "multipart/form-data", 1, "form", 3, "formGroup", "ngSubmit"], ["for", "pet-name", 1, "form-label", "m-2"], ["type", "text", "id", "pet-name", "placeholder", "", "name", "pet-name", "formControlName", "name", 1, "form-control"], ["class", "text-danger p-1", 4, "ngIf"], ["for", "species", 1, "form-label", "m-2"], ["type", "text", "id", "species", "placeholder", "", "name", "species", "formControlName", "species", 1, "form-control"], ["for", "race", 1, "form-label", "m-2"], ["type", "text", "id", "race", "placeholder", "", "name", "race", "formControlName", "race", 1, "form-control"], [1, "mt-3", "ms-2"], ["for", "size", 1, "form-label"], ["type", "radio", "id", "small", "name", "size", "value", "Ma\u0142y", "formControlName", "size", "checked", "true", 1, "form-check-input", "m-2"], ["type", "radio", "id", "medium", "name", "size", "value", "\u015Aredni", "formControlName", "size", 1, "form-check-input", "m-2"], ["type", "radio", "id", "big", "name", "size", "value", "Du\u017Cy", "formControlName", "size", 1, "form-check-input", "m-2"], ["for", "description", 1, "form-label", "m-2"], ["id", "description", "rows", "3", "formControlName", "description", 1, "form-control"], ["for", "photo", 1, "form-label", "m-2"], ["type", "file", "id", "photo", "name", "photo", 1, "form-control", 3, "change"], [1, "text-center", "m-4"], ["type", "submit", 1, "btn", "btn-warning"], [1, "text-danger", "p-1"]], template: function AddPetComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Dodaj zwierz\u0119");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5);
    \u0275\u0275listener("ngSubmit", function AddPetComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "label", 6);
    \u0275\u0275text(10, "Imi\u0119:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275template(12, AddPetComponent_div_12_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(13, "label", 9);
    \u0275\u0275text(14, "Gatunek:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 10);
    \u0275\u0275template(16, AddPetComponent_div_16_Template, 2, 0, "div", 8)(17, AddPetComponent_div_17_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(18, "label", 11);
    \u0275\u0275text(19, "Rasa:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 12);
    \u0275\u0275template(21, AddPetComponent_div_21_Template, 2, 0, "div", 8)(22, AddPetComponent_div_22_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(23, "div", 13)(24, "label", 14);
    \u0275\u0275text(25, "Rozmiar:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 15);
    \u0275\u0275text(27, "Ma\u0142y ");
    \u0275\u0275element(28, "input", 16);
    \u0275\u0275text(29, "\u015Aredni ");
    \u0275\u0275element(30, "input", 17);
    \u0275\u0275text(31, "Du\u017Cy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 18);
    \u0275\u0275text(33, "Opis:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 19);
    \u0275\u0275elementStart(35, "label", 20);
    \u0275\u0275text(36, "Dodaj zdj\u0119cie:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 21);
    \u0275\u0275listener("change", function AddPetComponent_Template_input_change_37_listener($event) {
      return ctx.onFileChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, AddPetComponent_div_38_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(39, "div", 22)(40, "button", 23);
    \u0275\u0275text(41, "Dodaj");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.addPetForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.addPetForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && (((tmp_1_0 = ctx.addPetForm.get("name")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.addPetForm.get("name")) == null ? null : tmp_1_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.addPetForm.get("species")) == null ? null : tmp_2_0.hasError("required")) && (((tmp_2_0 = ctx.addPetForm.get("species")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.addPetForm.get("species")) == null ? null : tmp_2_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.addPetForm.get("species")) == null ? null : tmp_3_0.hasError("minlength")) && (((tmp_3_0 = ctx.addPetForm.get("species")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.addPetForm.get("species")) == null ? null : tmp_3_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.addPetForm.get("race")) == null ? null : tmp_4_0.hasError("required")) && (((tmp_4_0 = ctx.addPetForm.get("race")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.addPetForm.get("race")) == null ? null : tmp_4_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.addPetForm.get("race")) == null ? null : tmp_5_0.hasError("minlength")) && (((tmp_5_0 = ctx.addPetForm.get("race")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.addPetForm.get("race")) == null ? null : tmp_5_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.addPetForm.get("photo")) == null ? null : tmp_6_0.hasError("required")) && (((tmp_6_0 = ctx.addPetForm.get("photo")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.addPetForm.get("photo")) == null ? null : tmp_6_0.touched) || ctx.hasSubmitted));
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=add-pet.component.css.map */"] });
var AddPetComponent = _AddPetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPetComponent, { className: "AddPetComponent", filePath: "src\\app\\add-pet\\add-pet.component.ts", lineNumber: 14 });
})();

// src/app/guards/logged.guard.ts
var loggedGuard = (route, state2) => {
  const router = inject(Router);
  const tokenService = inject(TokenService);
  if (!tokenService.loggedIn()) {
    router.navigate(["/login"]);
    return false;
  } else {
    return true;
  }
};

// src/app/guards/not-logged.guard.ts
var notLoggedGuard = (route, state2) => {
  const router = inject(Router);
  const tokenService = inject(TokenService);
  if (tokenService.loggedIn()) {
    router.navigate(["/"]);
    return false;
  } else {
    return true;
  }
};

// node_modules/@costlydeveloper/ngx-awesome-popup/fesm2020/costlydeveloper-ngx-awesome-popup.mjs
var _c04 = ["elConfirmBoxWrapper"];
var _c12 = ["elTextWrapper"];
var _c2 = ["elTitleWrapper"];
var _c3 = ["elButtonWrapper"];
var _c4 = ["elButton"];
function ConfirmBoxWrapperComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8, 9)(2, "div", 10)(3, "div", 11)(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmBoxBelonging.dispatch.title, " ");
  }
}
function ConfirmBoxWrapperComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r8.getIconClasses());
  }
}
function ConfirmBoxWrapperComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13, 14);
    \u0275\u0275template(2, ConfirmBoxWrapperComponent_div_4_div_2_Template, 2, 1, "div", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 10);
    \u0275\u0275element(5, "div", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.confirmBoxBelonging.dispatch.title ? "" : "without-title");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.confirmBoxBelonging.confirmBoxCoreConfig.disableIcon);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r2.confirmBoxBelonging.dispatch.message, \u0275\u0275sanitizeHtml);
  }
}
function ConfirmBoxWrapperComponent_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22, 23);
    \u0275\u0275listener("click", function ConfirmBoxWrapperComponent_div_7_button_1_Template_button_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r13);
      const button_r10 = restoredCtx.$implicit;
      const ctx_r12 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r12.onCustomButton(button_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r10 = ctx.$implicit;
    const ctx_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", button_r10.hidden ? "none" : "inline");
    \u0275\u0275property("disabled", button_r10.disabled)("className", ctx_r9.layoutHelper.getButtonClasses(button_r10.layoutType, "ed-btn ed-btn-md"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", button_r10.label, " ");
  }
}
var _c5 = (a0) => ({
  "text-align": a0
});
function ConfirmBoxWrapperComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ConfirmBoxWrapperComponent_div_7_button_1_Template, 3, 5, "button", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c5, ctx_r4.confirmBoxBelonging.confirmBoxCoreConfig.buttonPosition));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.confirmBoxBelonging.buttons);
  }
}
function ConfirmBoxWrapperComponent_div_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26, 23);
    \u0275\u0275listener("click", function ConfirmBoxWrapperComponent_div_8_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r17 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r17.onButtonClick("decline"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r15.confirmBoxBelonging.confirmBoxCoreConfig.declineLabel, " ");
  }
}
function ConfirmBoxWrapperComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 24, 23);
    \u0275\u0275listener("click", function ConfirmBoxWrapperComponent_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.onButtonClick("confirm"));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ConfirmBoxWrapperComponent_div_8_button_4_Template, 3, 1, "button", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c5, ctx_r5.confirmBoxBelonging.confirmBoxCoreConfig.buttonPosition));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r5.layoutHelper.getButtonClasses(ctx_r5.confirmBoxBelonging.confirmBoxCoreConfig.layoutType, "ed-btn ed-btn-md", "auto-button"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r5.confirmBoxBelonging.confirmBoxCoreConfig.confirmLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.confirmBoxBelonging.confirmBoxCoreConfig.declineLabel);
  }
}
var _c6 = (a0) => ({
  closeDelay: a0
});
var _c7 = (a0, a1) => ({
  value: a0,
  params: a1
});
var _c8 = (a0, a1, a2) => ({
  width: a0,
  height: a1,
  opacity: a2
});
var _c9 = ["elDialogWrapper"];
function DialogWrapperComponent_ng_template_5_Template(rf, ctx) {
}
function DialogWrapperComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DialogWrapperComponent_ng_template_7_Template(rf, ctx) {
}
function DialogWrapperComponent_ng_template_11_Template(rf, ctx) {
}
function DialogWrapperComponent_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16, 17);
    \u0275\u0275listener("click", function DialogWrapperComponent_div_14_button_1_Template_button_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r12);
      const button_r9 = restoredCtx.$implicit;
      const ctx_r11 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r11.onCustomButton(button_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r9 = ctx.$implicit;
    const ctx_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", button_r9.hidden ? "none" : "inline");
    \u0275\u0275property("disabled", button_r9.disabled)("className", ctx_r8.layoutHelper.getButtonClasses(button_r9.layoutType, "ed-btn ed-btn-lg"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", button_r9.label, " ");
  }
}
function DialogWrapperComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, DialogWrapperComponent_div_14_button_1_Template, 3, 5, "button", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c5, ctx_r7.dialogBelonging.dialogCoreConfig.buttonPosition));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r7.dialogBelonging.buttons);
  }
}
var _c10 = () => ({
  maxWidth: "100%",
  maxHeight: "100%",
  height: "100%",
  width: "100%",
  borderRadius: "0"
});
var _c11 = () => ({
  width: "100%",
  height: "100%"
});
var _c122 = (a0, a1, a2, a3, a4, a5) => ({
  width: a0,
  minWidth: a1,
  maxWidth: a2,
  height: a3,
  minHeight: a4,
  maxHeight: a5
});
function ToastNotificationSimpleWrapperComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r7.getIconClasses());
  }
}
function ToastNotificationSimpleWrapperComponent_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275listener("click", function ToastNotificationSimpleWrapperComponent_div_2_span_6_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.closeIcon());
    });
    \u0275\u0275elementEnd();
  }
}
function ToastNotificationSimpleWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8, 9);
    \u0275\u0275template(2, ToastNotificationSimpleWrapperComponent_div_2_div_2_Template, 2, 1, "div", 10);
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275template(6, ToastNotificationSimpleWrapperComponent_div_2_span_6_Template, 1, 0, "span", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.toastNotificationBelonging.toastCoreConfig.disableIcon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.toastNotificationBelonging.dispatch.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.buttonsExist);
  }
}
function ToastNotificationSimpleWrapperComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r12.toastNotificationBelonging.dispatch.message);
  }
}
function ToastNotificationSimpleWrapperComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r13.toastNotificationBelonging.dispatch.message, \u0275\u0275sanitizeHtml);
  }
}
function ToastNotificationSimpleWrapperComponent_div_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275listener("click", function ToastNotificationSimpleWrapperComponent_div_3_span_6_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r15 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r15.closeIcon());
    });
    \u0275\u0275elementEnd();
  }
}
var _c13 = (a0) => ({
  "only-message": a0
});
function ToastNotificationSimpleWrapperComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17, 18)(2, "div", 19)(3, "div", 11);
    \u0275\u0275template(4, ToastNotificationSimpleWrapperComponent_div_3_div_4_Template, 3, 1, "div", 20)(5, ToastNotificationSimpleWrapperComponent_div_3_div_5_Template, 1, 1, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ToastNotificationSimpleWrapperComponent_div_3_span_6_Template, 1, 0, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c5, ctx_r1.toastNotificationBelonging.toastCoreConfig.textPosition))("ngClass", \u0275\u0275pureFunction1(7, _c13, !ctx_r1.toastNotificationBelonging.dispatch.title));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.toastNotificationBelonging.toastCoreConfig.allowHtmlMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.toastNotificationBelonging.toastCoreConfig.allowHtmlMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.buttonsExist && !ctx_r1.toastNotificationBelonging.dispatch.title);
  }
}
function ToastNotificationSimpleWrapperComponent_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25, 26);
    \u0275\u0275listener("click", function ToastNotificationSimpleWrapperComponent_div_6_button_1_Template_button_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r21);
      const button_r18 = restoredCtx.$implicit;
      const ctx_r20 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r20.onCustomButton(button_r18));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r18 = ctx.$implicit;
    const ctx_r17 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", button_r18.hidden ? "none" : "inline");
    \u0275\u0275property("disabled", button_r18.disabled)("className", ctx_r17.layoutHelper.getButtonClasses(button_r18.layoutType, "ed-btn ed-btn-sm"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", button_r18.label, " ");
  }
}
function ToastNotificationSimpleWrapperComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, ToastNotificationSimpleWrapperComponent_div_6_button_1_Template, 3, 5, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c5, ctx_r3.toastNotificationBelonging.toastCoreConfig.buttonPosition));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.toastNotificationBelonging.buttons);
  }
}
function ToastNotificationSimpleWrapperComponent_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ToastNotificationSimpleWrapperComponent_div_7_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r24 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r24.onButtonClick("confirm"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r22 = \u0275\u0275nextContext(2);
    \u0275\u0275property("className", ctx_r22.layoutHelper.getButtonClasses(ctx_r22.toastNotificationBelonging.toastCoreConfig.layoutType, "ed-btn ed-btn-sm", "auto-button"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r22.toastNotificationBelonging.toastCoreConfig.confirmLabel, " ");
  }
}
function ToastNotificationSimpleWrapperComponent_div_7_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ToastNotificationSimpleWrapperComponent_div_7_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r26 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r26.onButtonClick("decline"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r23 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r23.toastNotificationBelonging.toastCoreConfig.declineLabel, " ");
  }
}
function ToastNotificationSimpleWrapperComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, ToastNotificationSimpleWrapperComponent_div_7_button_1_Template, 2, 2, "button", 27)(2, ToastNotificationSimpleWrapperComponent_div_7_button_2_Template, 2, 1, "button", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c5, ctx_r4.toastNotificationBelonging.toastCoreConfig.buttonPosition));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.toastNotificationBelonging.toastCoreConfig.confirmLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.toastNotificationBelonging.toastCoreConfig.declineLabel);
  }
}
var _c14 = (a0) => ({
  width: a0
});
function ToastNotificationSimpleWrapperComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c14, (ctx_r5.toastNotificationBelonging.toastCoreConfig.progressBar === 1 ? ctx_r5.timer.Progress : ctx_r5.timer.Remaining) + "%"));
  }
}
function ToastNotificationWrapperComponent_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function ToastNotificationWrapperComponent_div_2_span_5_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r8.closeIcon());
    });
    \u0275\u0275elementEnd();
  }
}
function ToastNotificationWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8, 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275template(5, ToastNotificationWrapperComponent_div_2_span_5_Template, 1, 0, "span", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.toastNotificationBelonging.dispatch.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.buttonsExist);
  }
}
function ToastNotificationWrapperComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r11.getIconClasses());
  }
}
function ToastNotificationWrapperComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r12.toastNotificationBelonging.dispatch.message);
  }
}
function ToastNotificationWrapperComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r13.toastNotificationBelonging.dispatch.message, \u0275\u0275sanitizeHtml);
  }
}
function ToastNotificationWrapperComponent_div_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function ToastNotificationWrapperComponent_div_3_span_7_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r15 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r15.closeIcon());
    });
    \u0275\u0275elementEnd();
  }
}
function ToastNotificationWrapperComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14, 15);
    \u0275\u0275template(2, ToastNotificationWrapperComponent_div_3_div_2_Template, 2, 1, "div", 16);
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 10);
    \u0275\u0275template(5, ToastNotificationWrapperComponent_div_3_div_5_Template, 3, 1, "div", 18)(6, ToastNotificationWrapperComponent_div_3_div_6_Template, 1, 1, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ToastNotificationWrapperComponent_div_3_span_7_Template, 1, 0, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.toastNotificationBelonging.toastCoreConfig.disableIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c5, ctx_r1.toastNotificationBelonging.toastCoreConfig.textPosition))("ngClass", \u0275\u0275pureFunction1(8, _c13, !ctx_r1.toastNotificationBelonging.dispatch.title));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.toastNotificationBelonging.toastCoreConfig.allowHtmlMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.toastNotificationBelonging.toastCoreConfig.allowHtmlMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.buttonsExist && !ctx_r1.toastNotificationBelonging.dispatch.title);
  }
}
function ToastNotificationWrapperComponent_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25, 26);
    \u0275\u0275listener("click", function ToastNotificationWrapperComponent_div_6_button_1_Template_button_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r21);
      const button_r18 = restoredCtx.$implicit;
      const ctx_r20 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r20.onCustomButton(button_r18));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r18 = ctx.$implicit;
    const ctx_r17 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", button_r18.hidden ? "none" : "inline");
    \u0275\u0275property("disabled", button_r18.disabled)("className", ctx_r17.layoutHelper.getButtonClasses(button_r18.layoutType, "ed-btn ed-btn-sm"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", button_r18.label, " ");
  }
}
function ToastNotificationWrapperComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, ToastNotificationWrapperComponent_div_6_button_1_Template, 3, 5, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c5, ctx_r3.toastNotificationBelonging.toastCoreConfig.buttonPosition));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.toastNotificationBelonging.buttons);
  }
}
function ToastNotificationWrapperComponent_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29, 26);
    \u0275\u0275listener("click", function ToastNotificationWrapperComponent_div_7_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r25 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r25.onButtonClick("confirm"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r22 = \u0275\u0275nextContext(2);
    \u0275\u0275property("className", ctx_r22.layoutHelper.getButtonClasses(ctx_r22.toastNotificationBelonging.toastCoreConfig.layoutType, "ed-btn ed-btn-sm", "auto-button"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r22.toastNotificationBelonging.toastCoreConfig.confirmLabel, " ");
  }
}
function ToastNotificationWrapperComponent_div_7_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30, 26);
    \u0275\u0275listener("click", function ToastNotificationWrapperComponent_div_7_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r28 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r28.onButtonClick("decline"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r23 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r23.toastNotificationBelonging.toastCoreConfig.declineLabel, " ");
  }
}
function ToastNotificationWrapperComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, ToastNotificationWrapperComponent_div_7_button_1_Template, 3, 2, "button", 27)(2, ToastNotificationWrapperComponent_div_7_button_2_Template, 3, 1, "button", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c5, ctx_r4.toastNotificationBelonging.toastCoreConfig.buttonPosition));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.toastNotificationBelonging.toastCoreConfig.confirmLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.toastNotificationBelonging.toastCoreConfig.declineLabel);
  }
}
function ToastNotificationWrapperComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c14, (ctx_r5.toastNotificationBelonging.toastCoreConfig.progressBar === 1 ? ctx_r5.timer.Progress : ctx_r5.timer.Remaining) + "%"));
  }
}
var DialogLayoutDisplay;
(function(DialogLayoutDisplay2) {
  DialogLayoutDisplay2[DialogLayoutDisplay2["NONE"] = 0] = "NONE";
  DialogLayoutDisplay2[DialogLayoutDisplay2["SUCCESS"] = 1] = "SUCCESS";
  DialogLayoutDisplay2[DialogLayoutDisplay2["INFO"] = 2] = "INFO";
  DialogLayoutDisplay2[DialogLayoutDisplay2["WARNING"] = 3] = "WARNING";
  DialogLayoutDisplay2[DialogLayoutDisplay2["DANGER"] = 4] = "DANGER";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_ONE"] = 20] = "CUSTOM_ONE";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_TWO"] = 21] = "CUSTOM_TWO";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_THREE"] = 22] = "CUSTOM_THREE";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_FOUR"] = 23] = "CUSTOM_FOUR";
  DialogLayoutDisplay2[DialogLayoutDisplay2["CUSTOM_FIVE"] = 24] = "CUSTOM_FIVE";
})(DialogLayoutDisplay || (DialogLayoutDisplay = {}));
var ButtonLayoutDisplay;
(function(ButtonLayoutDisplay2) {
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["NONE"] = 0] = "NONE";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["SUCCESS"] = 1] = "SUCCESS";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["INFO"] = 2] = "INFO";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["WARNING"] = 3] = "WARNING";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["DANGER"] = 4] = "DANGER";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["DARK"] = 5] = "DARK";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["LIGHT"] = 6] = "LIGHT";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["PRIMARY"] = 7] = "PRIMARY";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["SECONDARY"] = 8] = "SECONDARY";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["LINK"] = 9] = "LINK";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_ONE"] = 20] = "CUSTOM_ONE";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_TWO"] = 21] = "CUSTOM_TWO";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_THREE"] = 22] = "CUSTOM_THREE";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_FOUR"] = 23] = "CUSTOM_FOUR";
  ButtonLayoutDisplay2[ButtonLayoutDisplay2["CUSTOM_FIVE"] = 24] = "CUSTOM_FIVE";
})(ButtonLayoutDisplay || (ButtonLayoutDisplay = {}));
var ColorVariance;
(function(ColorVariance2) {
  ColorVariance2[ColorVariance2["SUCCESS"] = 1] = "SUCCESS";
  ColorVariance2[ColorVariance2["INFO"] = 2] = "INFO";
  ColorVariance2[ColorVariance2["WARNING"] = 3] = "WARNING";
  ColorVariance2[ColorVariance2["DANGER"] = 4] = "DANGER";
  ColorVariance2[ColorVariance2["DARK"] = 5] = "DARK";
  ColorVariance2[ColorVariance2["LIGHT"] = 6] = "LIGHT";
  ColorVariance2[ColorVariance2["PRIMARY"] = 7] = "PRIMARY";
  ColorVariance2[ColorVariance2["SECONDARY"] = 8] = "SECONDARY";
  ColorVariance2[ColorVariance2["LINK"] = 9] = "LINK";
  ColorVariance2[ColorVariance2["CUSTOM_ONE"] = 20] = "CUSTOM_ONE";
  ColorVariance2[ColorVariance2["CUSTOM_TWO"] = 21] = "CUSTOM_TWO";
  ColorVariance2[ColorVariance2["CUSTOM_THREE"] = 22] = "CUSTOM_THREE";
  ColorVariance2[ColorVariance2["CUSTOM_FOUR"] = 23] = "CUSTOM_FOUR";
  ColorVariance2[ColorVariance2["CUSTOM_FIVE"] = 24] = "CUSTOM_FIVE";
})(ColorVariance || (ColorVariance = {}));
var AppearanceAnimation;
(function(AppearanceAnimation2) {
  AppearanceAnimation2["NONE"] = "noneIn";
  AppearanceAnimation2["BOUNCE_IN"] = "bounceIn";
  AppearanceAnimation2["SWING"] = "swing";
  AppearanceAnimation2["ZOOM_IN"] = "zoomIn";
  AppearanceAnimation2["ZOOM_IN_ROTATE"] = "zoomInRotate";
  AppearanceAnimation2["ELASTIC"] = "elastic";
  AppearanceAnimation2["JELLO"] = "jello";
  AppearanceAnimation2["FADE_IN"] = "fadeIn";
  AppearanceAnimation2["SLIDE_IN_UP"] = "slideInUp";
  AppearanceAnimation2["SLIDE_IN_DOWN"] = "slideInDown";
  AppearanceAnimation2["SLIDE_IN_LEFT"] = "slideInLeft";
  AppearanceAnimation2["SLIDE_IN_RIGHT"] = "slideInRight";
})(AppearanceAnimation || (AppearanceAnimation = {}));
var DisappearanceAnimation;
(function(DisappearanceAnimation2) {
  DisappearanceAnimation2["NONE"] = "noneOut";
  DisappearanceAnimation2["FADE_OUT"] = "fadeOut";
  DisappearanceAnimation2["ZOOM_OUT_WIND"] = "zoomOutWind";
  DisappearanceAnimation2["BOUNCE_OUT"] = "bounceOut";
  DisappearanceAnimation2["FLIP_OUT"] = "flipOutY";
  DisappearanceAnimation2["ZOOM_OUT"] = "zoomOut";
  DisappearanceAnimation2["ZOOM_OUT_ROTATE"] = "zoomOutRotate";
  DisappearanceAnimation2["SLIDE_OUT_UP"] = "slideOutUp";
  DisappearanceAnimation2["SLIDE_OUT_DOWN"] = "slideOutDown";
  DisappearanceAnimation2["SLIDE_OUT_LEFT"] = "slideOutLeft";
  DisappearanceAnimation2["SLIDE_OUT_RIGHT"] = "slideOutRight";
})(DisappearanceAnimation || (DisappearanceAnimation = {}));
var MotionBlockAnimation;
(function(MotionBlockAnimation2) {
  MotionBlockAnimation2[MotionBlockAnimation2["NONE"] = 0] = "NONE";
  MotionBlockAnimation2["WOBBLE"] = "wobble";
})(MotionBlockAnimation || (MotionBlockAnimation = {}));
var Sizes = class {
  constructor() {
    this.width = null;
    this.minWidth = null;
    this.maxWidth = null;
    this.height = null;
    this.minHeight = null;
    this.maxHeight = null;
    this.fullScreen = null;
  }
};
var dispatch = class {
  constructor() {
    this.title = null;
    this.message = null;
  }
};
var GlobalUserConfig = class {
  constructor(_GlobalUserConfig2) {
    this.colorList = new ColorTypes();
    if (_GlobalUserConfig2) {
      const dataControl = new DataControl();
      dataControl.copyValuesFrom(_GlobalUserConfig2, this);
      const colorList = new ColorTypes();
      this.colorList = dataControl.copyValuesFrom(this.colorList, colorList);
    }
  }
};
var ColorTypes = class {
  constructor() {
    this.primary = null;
    this.secondary = null;
    this.success = null;
    this.info = null;
    this.warning = null;
    this.danger = null;
    this.light = null;
    this.dark = null;
    this.customOne = null;
    this.customTwo = null;
    this.customThree = null;
    this.customFour = null;
    this.customFive = null;
  }
};
var GlobalConfig = class {
  constructor() {
    this.displayColor = new DisplayColor();
  }
};
var DisplayColor = class {
  constructor() {
    this.primary = null;
    this.secondary = null;
    this.success = null;
    this.info = null;
    this.warning = null;
    this.danger = null;
    this.light = null;
    this.dark = null;
    this.customOne = null;
    this.customTwo = null;
    this.customThree = null;
    this.customFour = null;
    this.customFive = null;
  }
};
var ColorProvider = class {
  constructor(_Color) {
    this.Base = null;
    this.Brighten = null;
    this.BrightenForShade = null;
    this.Darken = null;
    this.DarkenForShade = null;
    this.ContrastColor = null;
    this.TransparentDarkenVariance = null;
    this.BrightShade = null;
    this.BrightWarmly = null;
    this.IsBaseBright = null;
    if (this.Base = this.isColor(_Color)) {
      this.Brighten = this.brightness(this.Base, "brighten", 25);
      this.BrightenForShade = this.brightness(this.Base, "brighten", 10);
      this.Darken = this.brightness(this.Base, "darken", 20);
      this.DarkenForShade = this.brightness(this.Base, "darken", 10);
      const luminance = Math.floor(this.luminance(this.Base) * 100);
      const darken = luminance > 50 ? 5 : luminance > 40 ? 10 : luminance > 20 ? 15 : luminance;
      const brighten = luminance > 55 ? 65 : luminance > 45 ? 60 : luminance > 20 ? 55 : luminance > 10 ? 45 : 80;
      this.BrightShade = this.brightness(this.brightness(this.Base, "darken", darken), "brighten", brighten);
      this.BrightWarmly = this.brightness(this.brightness(this.saturate(this.Base), "darken", darken - 10), "brighten", brighten - 5);
      this.TransparentDarkenVariance = this.brightness(this.transparentize(this.Base, 80), "darken", 40);
      if (this.isBright(this.Base)) {
        this.ContrastColor = "rgba(58,65,71,0.5)";
        this.IsBaseBright = true;
      } else {
        this.ContrastColor = "rgb(255,255,255, 0.7)";
        this.IsBaseBright = false;
      }
    }
  }
  saturate(_Rgb) {
    const rgbIntArray = this.getRGBArray(_Rgb);
    const greyVal = this.getLightnessOfRGB(_Rgb) * 55;
    const [lowest, middle, highest] = this.getLowMidHi(rgbIntArray);
    if (lowest.val === highest.val) {
      return _Rgb;
    }
    const saturationRange = Math.round(Math.min(255 - greyVal, greyVal));
    const maxChange = Math.min(255 - highest.val, lowest.val);
    const changeAmount = Math.min(saturationRange / 10, maxChange);
    const middleValueRatio = (greyVal - middle.val) / (greyVal - highest.val) + 0.07;
    const returnArray = [];
    returnArray[highest.index] = Math.round(highest.val + changeAmount);
    returnArray[lowest.index] = Math.round(lowest.val - changeAmount);
    returnArray[middle.index] = Math.round(greyVal + (returnArray[highest.index] - greyVal) * middleValueRatio + 5);
    return `rgb(${[returnArray].join()})`;
  }
  brightness(_Rgb, _Action, _Percentage) {
    const rgbIntArray = this.getRGBArray(_Rgb);
    const [lowest, middle, highest] = this.getLowMidHi(rgbIntArray);
    if (_Action === "brighten" && lowest.val === 255) {
      return _Rgb;
    }
    if (_Action === "darken" && highest.val === 0) {
      return _Rgb;
    }
    const amount = _Percentage / 100 * 255;
    let returnList = [];
    if (_Action === "brighten") {
      returnList[lowest.index] = Math.round(lowest.val + Math.min(255 - lowest.val, amount));
      const increaseFraction = (returnList[lowest.index] - lowest.val) / (255 - lowest.val);
      returnList[middle.index] = middle.val + (255 - middle.val) * increaseFraction;
      returnList[highest.index] = highest.val + (255 - highest.val) * increaseFraction;
    }
    if (_Action === "darken") {
      returnList[highest.index] = highest.val - Math.min(highest.val, amount);
      const decreaseFraction = (highest.val - returnList[highest.index]) / highest.val;
      returnList[middle.index] = middle.val - middle.val * decreaseFraction;
      returnList[lowest.index] = lowest.val - lowest.val * decreaseFraction;
    }
    returnList = returnList.map((item) => Math.round(item));
    if (rgbIntArray.length > 3) {
      returnList.push(rgbIntArray[3]);
      return `rgba(${returnList.join()})`;
    }
    return `rgb(${returnList.join()})`;
  }
  getLightnessOfRGB(_Rgb) {
    const rgbIntArray = this.getRGBArray(_Rgb);
    const highest = Math.max(...rgbIntArray);
    const lowest = Math.min(...rgbIntArray);
    return (highest + lowest) / 2 / 255;
  }
  isBright(_Rgb) {
    return this.contrast(this.luminance(_Rgb));
  }
  getLowMidHi(_RgbArray) {
    const rgbArrayCopy = _RgbArray.slice();
    const rgbArrayWithoutAlpha = _RgbArray.length > 3 ? rgbArrayCopy.reverse().slice(1).reverse() : _RgbArray;
    let highest = {
      val: -1,
      index: -1
    };
    let lowest = {
      val: Infinity,
      index: -1
    };
    rgbArrayWithoutAlpha.map((val, index) => {
      if (val > highest.val) {
        highest = {
          val,
          index
        };
      }
      if (val < lowest.val) {
        lowest = {
          val,
          index
        };
      }
    });
    if (lowest.index === highest.index) {
      lowest.index = highest.index + 1;
    }
    const middleIndex = 3 - highest.index - lowest.index;
    const middle = {
      val: rgbArrayWithoutAlpha[middleIndex],
      index: middleIndex
    };
    return [lowest, middle, highest];
  }
  contrast(_Luminance) {
    const brightest = Math.max(1.05, _Luminance + 0.05);
    const darkest = Math.min(1.05, _Luminance + 0.05);
    const contrast = brightest / darkest;
    return contrast < 2.7;
  }
  isColor(_StrColor) {
    const CSSDeclaration = new Option().style;
    CSSDeclaration.color = _StrColor;
    return CSSDeclaration.color ? CSSDeclaration.color : null;
  }
  getRGBArray(_Rgb) {
    return _Rgb.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(",").map((x) => +x);
  }
  luminance(_Rgb) {
    const rgbIntArray = this.getRGBArray(_Rgb);
    const W3algorithm = rgbIntArray.map((item) => {
      item /= 255;
      return item <= 0.03928 ? item / 12.92 : Math.pow((item + 0.055) / 1.055, 2.4);
    });
    return W3algorithm[0] * 0.2126 + W3algorithm[1] * 0.7152 + W3algorithm[2] * 0.0722;
  }
  transparentize(_Rgb, _Percentage) {
    const baseArray = this.Base.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(",").map((x) => +x);
    if (baseArray.length > 3) {
      baseArray.pop();
    }
    const amount = (100 - _Percentage) / 100;
    baseArray.push(amount);
    return `rgb(${baseArray.join()})`;
  }
};
var DataControl = class {
  copyValuesFrom(_Data, _DestinationObject) {
    if (typeof _Data !== "object") {
      return _DestinationObject;
    }
    const dataKeys = Object.keys(_Data);
    const destinationObjectKeys = Object.keys(_DestinationObject);
    dataKeys.forEach((key) => {
      if (destinationObjectKeys.find((tKey) => tKey === key || tKey === "_" + key)) {
        if (key.includes("Date")) {
          const date = Date.parse(_Data[key]);
          if (date) {
            _DestinationObject[key] = new Date(date);
          } else {
            if (_Data[key] !== null) {
              _DestinationObject[key] = _Data[key];
            }
          }
        } else {
          if (_Data[key] !== null) {
            _DestinationObject[key] = _Data[key];
          }
        }
      }
    });
    return _DestinationObject;
  }
};
var Timer = class {
  constructor() {
    this.TimePassed = 0;
    this.Progress = 0;
    this.Remaining = 100;
  }
  setMilliseconds(_Milliseconds) {
    this.Milliseconds = _Milliseconds;
  }
  reset() {
    this.TimePassed = 0;
    this.Progress = 0;
  }
  pause() {
    this.TimePassed = 0;
    this.Progress = 0;
  }
  stop() {
    this.TimePassed = 0;
    clearInterval(this.Timer);
  }
  start() {
    this.Timer = setInterval(() => {
      if (this.TimePassed >= this.Milliseconds) {
        clearInterval(this.Timer);
        return;
      }
      this.TimePassed += 100;
      this.Progress = this.TimePassed * 100 / this.Milliseconds;
      this.Remaining = 100 - this.Progress;
    }, 100);
  }
};
var ServiceLocator = class {
};
var ConfirmBoxConfigService = class {
  constructor(userConfig = {}) {
    this.userConfig = userConfig;
    this.authorConfig = new ConfirmBoxSettings();
    this.productionConfig = new ConfirmBoxSettings();
    const userConfigBase = new ConfirmBoxSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(userConfig.confirmBoxCoreConfig, userConfigBase.confirmBoxCoreConfig);
    userConfig.confirmBoxCoreConfig = userConfigBase.confirmBoxCoreConfig;
    this.authorConfig.confirmBoxCoreConfig.width = "auto";
    this.authorConfig.confirmBoxCoreConfig.height = "auto";
    this.authorConfig.confirmBoxCoreConfig.buttonPosition = "center";
    this.authorConfig.confirmBoxCoreConfig.confirmLabel = "Confirm";
    this.authorConfig.confirmBoxCoreConfig.declineLabel = "Decline";
    this.authorConfig.confirmBoxCoreConfig.disableIcon = false;
    this.authorConfig.confirmBoxCoreConfig.allowHtmlMessage = false;
    this.authorConfig.confirmBoxCoreConfig.layoutType = DialogLayoutDisplay.NONE;
    this.authorConfig.confirmBoxCoreConfig.animationIn = AppearanceAnimation.ZOOM_IN;
    this.authorConfig.confirmBoxCoreConfig.animationOut = DisappearanceAnimation.ZOOM_OUT;
    this.authorConfig.confirmBoxCoreConfig.customStyles = new ConfirmBoxCustomStyles();
    this.authorConfig.confirmBoxCoreConfig.iconStyleClass = null;
    dataControl.copyValuesFrom(this.authorConfig.confirmBoxCoreConfig, this.productionConfig.confirmBoxCoreConfig);
    dataControl.copyValuesFrom(userConfig.confirmBoxCoreConfig, this.productionConfig.confirmBoxCoreConfig);
  }
};
ConfirmBoxConfigService.\u0275fac = function ConfirmBoxConfigService_Factory(t) {
  return new (t || ConfirmBoxConfigService)(\u0275\u0275inject("confirmBoxConfig"));
};
ConfirmBoxConfigService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: ConfirmBoxConfigService,
  factory: ConfirmBoxConfigService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["confirmBoxConfig"]
      }]
    }];
  }, null);
})();
var DialogInjector = class {
  constructor(ParentInjector, AdditionalTokens) {
    this.ParentInjector = ParentInjector;
    this.AdditionalTokens = AdditionalTokens;
  }
  get(token, notFoundValue, flags) {
    const value = this.AdditionalTokens.get(token);
    if (value) {
      return value;
    }
    return this.ParentInjector.get(token, notFoundValue);
  }
};
var bounceIn = [style({
  transform: "scale3d(0.7, 0.7, 0.7)",
  offset: 0,
  opacity: 0
}), style({
  transform: "scale3d(1.3, 1.3, 1.3)",
  offset: 0.3,
  opacity: 0.3
}), style({
  transform: "scale3d(0.95, 0.95, 0.95)",
  offset: 0.6,
  opacity: 1
}), style({
  transform: "scale3d(1.03, 1.03, 1.03)",
  opacity: 1,
  offset: 0.8
}), style({
  transform: "scale3d(0.97, 0.97, 0.97)",
  offset: 0.9
}), style({
  transform: "scale3d(1, 1, 1)",
  offset: 1,
  opacity: 1
})];
var swing = [style({
  offset: 0,
  opacity: 0
}), style({
  transform: "rotate3d(0, 0, 1, 10deg)",
  offset: 0.2
}), style({
  transform: "rotate3d(0, 0, 1, -7deg)",
  offset: 0.3,
  opacity: 1
}), style({
  transform: "rotate3d(0, 0, 1, 3deg)",
  offset: 0.55
}), style({
  transform: "rotate3d(0, 0, 1, -3deg)",
  offset: 0.8
}), style({
  transform: "none",
  offset: 1
})];
var zoomIn = [style({
  transform: "scale3d(0.3, 0.3, 0.3)",
  offset: 0
}), style({
  offset: 0.1,
  opacity: 1
}), style({
  transform: "scale3d(1, 1, 1)",
  offset: 1
})];
var zoomInRotate = [style({
  transform: "scale(0.1) rotate(30deg)",
  offset: 0,
  opacity: 0
}), style({
  transform: "rotate(-10deg)",
  offset: 0.5,
  opacity: 1
}), style({
  transform: "rotate(3deg)",
  offset: 0.7
}), style({
  transform: "scale(1)",
  offset: 1
})];
var elastic = [style({
  transform: "scale3d(1, 1, 1)",
  offset: 0,
  opacity: 0
}), style({
  transform: "scale3d(1.25, 0.75, 1)",
  offset: 0.3
}), style({
  transform: "scale3d(0.75, 1.25, 1)",
  offset: 0.4,
  opacity: 1
}), style({
  transform: "scale3d(1.15, 0.85, 1)",
  offset: 0.5
}), style({
  transform: "scale3d(0.95, 1.05, 1)",
  offset: 0.6
}), style({
  transform: "scale3d(1.05, 0.95, 1)",
  offset: 0.7
}), style({
  transform: "scale3d(1, 1, 1)",
  offset: 1
})];
var jello = [style({
  offset: 0,
  opacity: 0
}), style({
  transform: "skewX(-12.5deg) skewY(-12.5deg)",
  offset: 0.111
}), style({
  transform: "skewX(6.25deg) skewY(6.25deg)",
  offset: 0.222
}), style({
  transform: "skewX(-3.125deg) skewY(-3.125deg)",
  offset: 0.333,
  opacity: 1
}), style({
  transform: "skewX(1.5625deg) skewY(1.5625deg)",
  offset: 0.444
}), style({
  transform: "skewX(-0.78125deg) skewY(-0.78125deg)",
  offset: 0.555
}), style({
  transform: "skewX(0.390625deg) skewY(0.390625deg)",
  offset: 0.666
}), style({
  transform: "skewX(0.390625deg) skewY(0.390625deg)",
  offset: 0.777
}), style({
  transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)",
  offset: 0.888
}), style({
  transform: "none",
  offset: 1
})];
var fadeIn = [style({
  offset: 0,
  opacity: 0
}), style({
  offset: 1,
  opacity: 1
})];
var slideInUp = [style({
  offset: 0,
  opacity: 0,
  transform: "translate3d(0, 100%, 0)"
}), style({
  offset: 1,
  opacity: 1,
  transform: "translate3d(0, 0, 0)"
})];
var slideInDown = [style({
  offset: 0,
  opacity: 0,
  transform: "translate3d(0, -100%, 0)"
}), style({
  offset: 1,
  opacity: 1,
  transform: "translate3d(0, 0, 0)"
})];
var slideInLeft = [style({
  offset: 0,
  opacity: 0,
  transform: "translate3d(-100%, 0, 0)"
}), style({
  offset: 1,
  opacity: 1,
  transform: "translate3d(0, 0, 0)"
})];
var slideInRight = [style({
  offset: 0,
  opacity: 0,
  transform: "translate3d(100%, 0, 0)"
}), style({
  offset: 1,
  opacity: 1,
  transform: "translate3d(0, 0, 0)"
})];
var fadeOut = [style({
  offset: 0,
  opacity: 1
}), style({
  offset: 1,
  opacity: 0
})];
var zoomOutWind = [style({
  transform: "scale3d(.475, .475, .475) translate3d(-42px, 0, 0)",
  offset: 0.4
}), style({
  transform: "scale(.1) translate3d(400px, 0, 0)",
  "transform-origin": "top center",
  offset: 1,
  opacity: 0
})];
var bounceOut = [style({
  transform: "scale3d(1.3, 1.3, 1.3)",
  offset: 0.3
}), style({
  transform: "scale3d(0.9, 0.9, 0.9)",
  offset: 0.5
}), style({
  transform: "scale3d(0.3, 0.3, 0.3)",
  opacity: 0,
  offset: 1
})];
var flipOutY = [style({
  transform: "perspective(400px)",
  offset: 0
}), style({
  transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)",
  opacity: 1,
  offset: 0.33
}), style({
  transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
  opacity: 0,
  offset: 0.9
})];
var zoomOut = [style({
  opacity: 1,
  offset: 0
}), style({
  offset: 0.5,
  transform: "scale3d(0.3, 0.3, 0.3)",
  opacity: 0
}), style({
  offset: 1,
  opacity: 0
})];
var zoomOutRotate = [style({
  opacity: 1,
  offset: 0
}), style({
  offset: 0.9,
  transform: "rotate(200deg) scale(0.1)",
  opacity: 0
})];
var slideOutUp = [style({
  transform: "translate3d(0, 0, 0)",
  offset: 0
}), style({
  transform: "translate3d(0, -100%, 0)",
  opacity: 0,
  offset: 1
})];
var slideOutDown = [style({
  transform: "translate3d(0, 0, 0)",
  offset: 0
}), style({
  transform: "translate3d(0, 100%, 0)",
  opacity: 0,
  offset: 1
})];
var slideOutLeft = [style({
  transform: "translate3d(0, 0, 0)",
  offset: 0
}), style({
  transform: "translate3d(-100%, 0, 0)",
  opacity: 0,
  offset: 1
})];
var slideOutRight = [style({
  transform: "translate3d(0, 0, 0)",
  offset: 0
}), style({
  transform: "translate3d(100%, 0, 0)",
  opacity: 0,
  offset: 1
})];
var wobble = [style({
  transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
  offset: 0.15
}), style({
  transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
  offset: 0.3
}), style({
  transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
  offset: 0.45
}), style({
  transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
  offset: 0.6
}), style({
  transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
  offset: 0.75
}), style({
  transform: "none",
  offset: 1
})];
function boxAnimations() {
  return trigger("boxAnimations", [state("reset", style({
    opacity: 1
  })), state("noneIn", style({
    opacity: 1
  })), state("bounceIn", style({
    opacity: 1
  })), state("swing", style({
    opacity: 1
  })), state("zoomIn", style({
    opacity: 1
  })), state("zoomInRotate", style({
    opacity: 1
  })), state("elastic", style({
    opacity: 1
  })), state("jello", style({
    opacity: 1
  })), state("fadeIn", style({
    opacity: 1
  })), state("slideInUp", style({
    opacity: 1
  })), state("slideInDown", style({
    opacity: 1
  })), state("slideInLeft", style({
    opacity: 1
  })), state("slideInRight", style({
    opacity: 1
  })), transition("* => noneIn", animate("10ms", keyframes(fadeIn))), transition("* => bounceIn", animate("1000ms cubic-bezier(0.215, 0.61, 0.355, 1)", keyframes(bounceIn))), transition("* => swing", animate("800ms", keyframes(swing))), transition("* => zoomIn", animate("400ms ease-in", keyframes(zoomIn))), transition("* => zoomInRotate", animate("800ms ease-in", keyframes(zoomInRotate))), transition("* => elastic", animate("1000ms", keyframes(elastic))), transition("* => jello", animate(1e3, keyframes(jello))), transition("* => fadeIn", animate("400ms ease-in", keyframes(fadeIn))), transition("* => slideInUp", animate("400ms ease-in", keyframes(slideInUp))), transition("* => slideInDown", animate("400ms ease-in", keyframes(slideInDown))), transition("* => slideInLeft", animate("400ms ease-in", keyframes(slideInLeft))), transition("* => slideInRight", animate("400ms ease-in", keyframes(slideInRight))), transition("* => reset", style({
    opacity: 1
  })), state("noneOut", style({
    opacity: 0
  })), state("fadeOut", style({
    opacity: 0
  })), state("zoomOutWind", style({
    opacity: 0
  })), state("bounceOut", style({
    opacity: 0
  })), state("flipOutY", style({
    opacity: 0
  })), state("zoomOut", style({
    opacity: 0
  })), state("zoomOutRotate", style({
    opacity: 0
  })), state("slideOutUp", style({
    opacity: 0
  })), state("slideOutDown", style({
    opacity: 0
  })), state("slideOutLeft", style({
    opacity: 0
  })), state("slideOutRight", style({
    opacity: 0
  })), transition("* => noneOut", animate("100ms ease-out", keyframes(fadeOut))), transition("* => fadeOut", animate("300ms ease-out", keyframes(fadeOut))), transition("* => zoomOutWind", animate("400ms ease-out", keyframes(zoomOutWind))), transition("* => bounceOut", animate("400ms ease-out", keyframes(bounceOut))), transition("* => flipOutY", animate("400ms ease-out", keyframes(flipOutY))), transition("* => zoomOut", animate("400ms ease-out", keyframes(zoomOut))), transition("* => zoomOutRotate", animate("400ms ease-out", keyframes(zoomOutRotate))), transition("* => slideOutUp", animate("300ms ease-out", keyframes(slideOutUp))), transition("* => slideOutDown", animate("300ms ease-out", keyframes(slideOutDown))), transition("* => slideOutLeft", animate("300ms ease-out", keyframes(slideOutLeft))), transition("* => slideOutRight", animate("300ms ease-out", keyframes(slideOutRight))), transition("* => wobble", animate(1e3, keyframes(wobble)))]);
}
function fadeInOut() {
  return trigger("fadeInOut", [state("open", style({
    opacity: 1
  })), state("close-fast", style({
    opacity: 0
  })), state("close-instant", style({
    opacity: 0
  })), transition("* => close-fast", [query("*", [animateChild()]), animate("{{closeDelay}}")]), transition("* => open", [animate(100)]), transition("* => close-instant", [animate(0)])]);
}
var LayoutHelperService = class {
  getIconClasses(layoutType, iconStyleClass) {
    let returnString = "";
    if (iconStyleClass) {
      returnString += iconStyleClass;
      return returnString;
    }
    switch (layoutType) {
      case DialogLayoutDisplay.SUCCESS: {
        returnString += "ap-icon-success icon-check-circle";
        break;
      }
      case DialogLayoutDisplay.INFO: {
        returnString += "ap-icon-info icon-info-circle";
        break;
      }
      case DialogLayoutDisplay.WARNING: {
        returnString += "ap-icon-warning icon-warning";
        break;
      }
      case DialogLayoutDisplay.DANGER: {
        returnString += "ap-icon-danger icon-times-circle";
        break;
      }
    }
    return returnString;
  }
  getButtonClasses(layoutType, perm = "", type) {
    let returnString = perm + " ";
    if (type === "auto-button" && layoutType === DialogLayoutDisplay.NONE) {
      layoutType = ButtonLayoutDisplay.PRIMARY;
    }
    switch (layoutType) {
      case ButtonLayoutDisplay.SUCCESS: {
        returnString += "ed-btn-success";
        break;
      }
      case ButtonLayoutDisplay.INFO: {
        returnString += "ed-btn-info";
        break;
      }
      case ButtonLayoutDisplay.WARNING: {
        returnString += "ed-btn-warning";
        break;
      }
      case ButtonLayoutDisplay.DANGER: {
        returnString += "ed-btn-danger";
        break;
      }
      case ButtonLayoutDisplay.DARK: {
        returnString += "ed-btn-dark";
        break;
      }
      case ButtonLayoutDisplay.LIGHT: {
        returnString += "ed-btn-light";
        break;
      }
      case ButtonLayoutDisplay.PRIMARY: {
        returnString += "ed-btn-primary";
        break;
      }
      case ButtonLayoutDisplay.SECONDARY: {
        returnString += "ed-btn-secondary";
        break;
      }
      case ButtonLayoutDisplay.LINK: {
        returnString += "ed-btn-link";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_ONE: {
        returnString += "ed-btn-customone";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_TWO: {
        returnString += "ed-btn-customtwo";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_THREE: {
        returnString += "ed-btn-customthree";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_FOUR: {
        returnString += "ed-btn-customfour";
        break;
      }
      case ButtonLayoutDisplay.CUSTOM_FIVE: {
        returnString += "ed-btn-customfive";
        break;
      }
    }
    return returnString;
  }
  getBoxClasses(layoutType, perm = "") {
    let returnString = perm + " ";
    switch (layoutType) {
      case DialogLayoutDisplay.NONE: {
        returnString += "standard-dialog";
        break;
      }
      case DialogLayoutDisplay.SUCCESS: {
        returnString += "success-dialog";
        break;
      }
      case DialogLayoutDisplay.INFO: {
        returnString += "info-dialog";
        break;
      }
      case DialogLayoutDisplay.WARNING: {
        returnString += "warning-dialog";
        break;
      }
      case DialogLayoutDisplay.DANGER: {
        returnString += "danger-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_ONE: {
        returnString += "customone-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_TWO: {
        returnString += "customtwo-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_THREE: {
        returnString += "customthree-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_FOUR: {
        returnString += "customfour-dialog";
        break;
      }
      case DialogLayoutDisplay.CUSTOM_FIVE: {
        returnString += "customfive-dialog";
        break;
      }
    }
    return returnString;
  }
};
LayoutHelperService.\u0275fac = function LayoutHelperService_Factory(t) {
  return new (t || LayoutHelperService)();
};
LayoutHelperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: LayoutHelperService,
  factory: LayoutHelperService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutHelperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfirmBoxWrapperComponent = class {
  constructor(confirmBoxBelonging, cd, layoutHelper) {
    this.confirmBoxBelonging = confirmBoxBelonging;
    this.cd = cd;
    this.layoutHelper = layoutHelper;
    this.fadeInOutAnimation = "open";
    this.appearanceAnimation = AppearanceAnimation;
    this.disappearanceAnimation = DisappearanceAnimation;
    setTimeout(() => {
      this.boxAnimation = this.confirmBoxBelonging.confirmBoxCoreConfig.animationIn;
    }, 1);
  }
  ngAfterViewInit() {
    this.setResponse(false);
    this.cd.detectChanges();
    this.setCustomStyles();
  }
  setResponse(_IsSuccess, _ClickedButtonID) {
    const response = new ConfirmBoxDefaultResponse();
    if (_ClickedButtonID) {
      response.clickedButtonID = _ClickedButtonID;
    }
    response.setSuccess(_IsSuccess);
    response.setBelonging(this.confirmBoxBelonging);
    this.confirmBoxBelonging.eventsController.setDefaultResponse(response);
  }
  onOverlayClicked(evt) {
  }
  onCustomButton(_Button) {
    this.confirmBoxBelonging.eventsController.onButtonClick(_Button);
    this.setResponse(true, _Button.ID);
    this.confirmBoxBelonging.eventsController.close();
  }
  onButtonClick(_Type) {
    let buttonID;
    if (_Type === "confirm") {
      buttonID = this.confirmBoxBelonging.confirmBoxCoreConfig.confirmLabel.toLowerCase();
    } else if (_Type === "decline") {
      buttonID = this.confirmBoxBelonging.confirmBoxCoreConfig.declineLabel.toLowerCase();
    }
    this.setResponse(_Type === "confirm", buttonID);
    this.confirmBoxBelonging.eventsController.close();
  }
  closeParent$() {
    this.boxAnimation = this.confirmBoxBelonging.confirmBoxCoreConfig.animationOut;
    const closeDuration = this.confirmBoxBelonging.confirmBoxCoreConfig.animationOut ? 800 : 200;
    this.fadeInOutAnimation = "close-fast";
    return new Observable((observer) => {
      observer.next("");
      observer.complete();
    }).pipe(delay(closeDuration));
  }
  setCustomStyles() {
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.wrapperCSS && this.elConfirmBoxWrapper) {
      this.elConfirmBoxWrapper.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.wrapperCSS;
    }
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.textCSS && this.elTextWrapper) {
      this.elTextWrapper.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.textCSS;
    }
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.titleCSS && this.elTitleWrapper) {
      this.elTitleWrapper.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.titleCSS;
    }
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.buttonSectionCSS && this.elButtonWrapper) {
      this.elButtonWrapper.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.buttonSectionCSS;
    }
    if (this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.buttonCSS && this.elButton) {
      this.elButton.forEach((el) => {
        el.nativeElement.style.cssText += this.confirmBoxBelonging.confirmBoxCoreConfig.customStyles.buttonCSS;
      });
    }
  }
  getIconClasses() {
    return "icon-type-confirm-box  " + this.layoutHelper.getIconClasses(this.confirmBoxBelonging.confirmBoxCoreConfig.layoutType, this.confirmBoxBelonging.confirmBoxCoreConfig.iconStyleClass);
  }
  getButtonClasses(layoutType) {
    return this.layoutHelper.getButtonClasses(layoutType);
  }
};
ConfirmBoxWrapperComponent.\u0275fac = function ConfirmBoxWrapperComponent_Factory(t) {
  return new (t || ConfirmBoxWrapperComponent)(\u0275\u0275directiveInject("confirmBoxBelonging"), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(LayoutHelperService));
};
ConfirmBoxWrapperComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: ConfirmBoxWrapperComponent,
  selectors: [["app-confirm-box-wrapper"]],
  viewQuery: function ConfirmBoxWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
      \u0275\u0275viewQuery(_c12, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
      \u0275\u0275viewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elConfirmBoxWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elTextWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elTitleWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elButtonWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elButton = _t);
    }
  },
  features: [\u0275\u0275ProvidersFeature([LayoutHelperService])],
  decls: 9,
  vars: 18,
  consts: [[1, "ngx-awesome-popup-overlay", "confirm-box-overlay", 3, "dblclick"], [3, "className", "ngStyle"], ["elConfirmBoxWrapper", ""], ["class", "confirm-box-title-content", 4, "ngIf"], ["class", "content-holder", 3, "ngClass", 4, "ngIf"], [1, "button-holder"], ["elButtonWrapper", ""], ["class", "button-section", 3, "ngStyle", 4, "ngIf"], [1, "confirm-box-title-content"], ["elTitleWrapper", ""], [1, "dont-break-out"], [1, "text-wrapper", "dont-break-out"], [1, "confirm-box-title-text"], [1, "content-holder", 3, "ngClass"], ["elTextWrapper", ""], ["class", "icon-section", 4, "ngIf"], [1, "text-wrapper-section", "confirm-box-inner-content"], [1, "text-wrapper", 3, "innerHTML"], [1, "icon-section"], [3, "className"], [1, "button-section", 3, "ngStyle"], [3, "disabled", "display", "className", "click", 4, "ngFor", "ngForOf"], [3, "disabled", "className", "click"], ["elButton", ""], [1, "ed-btn", "ed-btn-md", 3, "className", "click"], ["class", "ed-btn ed-btn-md ed-btn-secondary", 3, "click", 4, "ngIf"], [1, "ed-btn", "ed-btn-md", "ed-btn-secondary", 3, "click"]],
  template: function ConfirmBoxWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("dblclick", function ConfirmBoxWrapperComponent_Template_div_dblclick_0_listener($event) {
        return ctx.onOverlayClicked($event);
      });
      \u0275\u0275elementStart(1, "div", 1, 2);
      \u0275\u0275template(3, ConfirmBoxWrapperComponent_div_3_Template, 6, 1, "div", 3)(4, ConfirmBoxWrapperComponent_div_4_Template, 6, 3, "div", 4);
      \u0275\u0275elementStart(5, "div", 5, 6);
      \u0275\u0275template(7, ConfirmBoxWrapperComponent_div_7_Template, 2, 4, "div", 7)(8, ConfirmBoxWrapperComponent_div_8_Template, 5, 6, "div", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeInOut", \u0275\u0275pureFunction2(11, _c7, ctx.fadeInOutAnimation, \u0275\u0275pureFunction1(9, _c6, ctx.confirmBoxBelonging.confirmBoxCoreConfig.animationOut === ctx.disappearanceAnimation.NONE ? "200ms" : "300ms")));
      \u0275\u0275advance();
      \u0275\u0275property("@.disabled", ctx.confirmBoxBelonging.confirmBoxCoreConfig.animationIn === ctx.appearanceAnimation.NONE && ctx.confirmBoxBelonging.confirmBoxCoreConfig.animationOut === ctx.disappearanceAnimation.NONE)("@boxAnimations", ctx.boxAnimation)("className", ctx.layoutHelper.getBoxClasses(ctx.confirmBoxBelonging.confirmBoxCoreConfig.layoutType, "evolve-confirm-box"))("ngStyle", \u0275\u0275pureFunction3(14, _c8, ctx.confirmBoxBelonging.confirmBoxCoreConfig.width, ctx.confirmBoxBelonging.confirmBoxCoreConfig.height, ctx.confirmBoxBelonging.confirmBoxCoreConfig.animationIn === ctx.appearanceAnimation.NONE ? 1 : 0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.confirmBoxBelonging.dispatch.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmBoxBelonging.dispatch.message);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.confirmBoxBelonging.buttons.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.confirmBoxBelonging.buttons.length);
    }
  },
  dependencies: [NgStyle, NgIf, NgClass, NgForOf],
  encapsulation: 2,
  data: {
    animation: [fadeInOut(), boxAnimations()]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxWrapperComponent, [{
    type: Component,
    args: [{
      selector: "app-confirm-box-wrapper",
      animations: [fadeInOut(), boxAnimations()],
      providers: [LayoutHelperService],
      template: `<div
  class="ngx-awesome-popup-overlay confirm-box-overlay"
  (dblclick)="onOverlayClicked($event)"
  [@fadeInOut]="{
    value: fadeInOutAnimation,
    params: {
      closeDelay: confirmBoxBelonging.confirmBoxCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'
    }
  }">
  <div
    [@.disabled]="
      confirmBoxBelonging.confirmBoxCoreConfig.animationIn === appearanceAnimation.NONE &&
      confirmBoxBelonging.confirmBoxCoreConfig.animationOut === disappearanceAnimation.NONE
    "
    [@boxAnimations]="boxAnimation"
    #elConfirmBoxWrapper
    [className]="layoutHelper.getBoxClasses(confirmBoxBelonging.confirmBoxCoreConfig.layoutType, 'evolve-confirm-box')"
    [ngStyle]="{
      width: confirmBoxBelonging.confirmBoxCoreConfig.width,
      height: confirmBoxBelonging.confirmBoxCoreConfig.height,
      opacity: confirmBoxBelonging.confirmBoxCoreConfig.animationIn === appearanceAnimation.NONE ? 1 : 0
    }">
    <div class="confirm-box-title-content" #elTitleWrapper *ngIf="confirmBoxBelonging.dispatch.title">
      <div class="dont-break-out">
        <div class="text-wrapper dont-break-out">
          <div class="confirm-box-title-text">
            {{ confirmBoxBelonging.dispatch.title }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="content-holder"
      #elTextWrapper
      [ngClass]="confirmBoxBelonging.dispatch.title ? '' : 'without-title'"
      *ngIf="confirmBoxBelonging.dispatch.message">
      <div class="icon-section" *ngIf="!confirmBoxBelonging.confirmBoxCoreConfig.disableIcon">
        <span [className]="getIconClasses()"></span>
      </div>
      <div class="text-wrapper-section confirm-box-inner-content">
        <div class="dont-break-out">
          <div class="text-wrapper" [innerHTML]="confirmBoxBelonging.dispatch.message"></div>
        </div>
      </div>
    </div>
    <div class="button-holder" #elButtonWrapper>
      <div
        class="button-section"
        *ngIf="confirmBoxBelonging.buttons.length"
        [ngStyle]="{
          'text-align': confirmBoxBelonging.confirmBoxCoreConfig.buttonPosition
        }">
        <button
          #elButton
          *ngFor="let button of confirmBoxBelonging.buttons"
          (click)="onCustomButton(button)"
          [disabled]="button.disabled"
          [style.display]="button.hidden ? 'none' : 'inline'"
          [className]="layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-md')">
          {{ button.label }}
        </button>
      </div>
      <div
        class="button-section"
        *ngIf="!confirmBoxBelonging.buttons.length"
        [ngStyle]="{
          'text-align': confirmBoxBelonging.confirmBoxCoreConfig.buttonPosition
        }">
        <button
          class="ed-btn ed-btn-md"
          #elButton
          (click)="onButtonClick('confirm')"
          [className]="
            layoutHelper.getButtonClasses(confirmBoxBelonging.confirmBoxCoreConfig.layoutType, 'ed-btn ed-btn-md', 'auto-button')
          ">
          {{ confirmBoxBelonging.confirmBoxCoreConfig.confirmLabel }}
        </button>
        <button
          class="ed-btn ed-btn-md ed-btn-secondary"
          #elButton
          (click)="onButtonClick('decline')"
          *ngIf="confirmBoxBelonging.confirmBoxCoreConfig.declineLabel">
          {{ confirmBoxBelonging.confirmBoxCoreConfig.declineLabel }}
        </button>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], function() {
    return [{
      type: ConfirmBoxBelonging,
      decorators: [{
        type: Inject,
        args: ["confirmBoxBelonging"]
      }]
    }, {
      type: ChangeDetectorRef
    }, {
      type: LayoutHelperService
    }];
  }, {
    elConfirmBoxWrapper: [{
      type: ViewChild,
      args: ["elConfirmBoxWrapper"]
    }],
    elTextWrapper: [{
      type: ViewChild,
      args: ["elTextWrapper"]
    }],
    elTitleWrapper: [{
      type: ViewChild,
      args: ["elTitleWrapper"]
    }],
    elButtonWrapper: [{
      type: ViewChild,
      args: ["elButtonWrapper"]
    }],
    elButton: [{
      type: ViewChildren,
      args: ["elButton"]
    }]
  });
})();
var GlobalConfigService = class {
  constructor(userGlobalConfig) {
    this.userGlobalConfig = userGlobalConfig;
    this.authorGlobalConfig = new GlobalConfig();
    this.productionGlobalConfig = new GlobalConfig();
    this.userGeneratedConfig = new GlobalUserConfig(userGlobalConfig);
    this.authorGlobalConfig.displayColor.primary = null;
    this.authorGlobalConfig.displayColor.secondary = null;
    this.authorGlobalConfig.displayColor.success = null;
    this.authorGlobalConfig.displayColor.info = null;
    this.authorGlobalConfig.displayColor.warning = null;
    this.authorGlobalConfig.displayColor.danger = null;
    this.authorGlobalConfig.displayColor.light = null;
    this.authorGlobalConfig.displayColor.dark = null;
    this.authorGlobalConfig.displayColor.customOne = null;
    this.authorGlobalConfig.displayColor.customTwo = null;
    this.authorGlobalConfig.displayColor.customThree = null;
    this.authorGlobalConfig.displayColor.customFour = null;
    this.authorGlobalConfig.displayColor.customFive = null;
    this.productionGlobalConfig.displayColor = this.authorGlobalConfig.displayColor;
    this.setUserColors(this.userGeneratedConfig.colorList);
    this.setNodeStyles(this.productionGlobalConfig.displayColor);
  }
  resetStyles() {
    this.setUserColors(this.userGeneratedConfig.colorList);
    this.setNodeStyles(this.productionGlobalConfig.displayColor, true);
  }
  setNodeStyles(_ProductionColorTypes, _Reset = false) {
    if (_Reset) {
      const evolveDialogStyleNode = document.getElementById("ngx-awesome-popup-glob-styles");
      if (evolveDialogStyleNode) {
        evolveDialogStyleNode.remove();
      }
    }
    this.setToastStyles();
    Object.keys(_ProductionColorTypes).forEach((key) => {
      if (_ProductionColorTypes[key]) {
        this.setButtonStyling(key, _ProductionColorTypes[key]);
        this.setIconStyling(key, _ProductionColorTypes[key]);
        this.setToastStyling(key, _ProductionColorTypes[key]);
        this.setDialogFrame(key, _ProductionColorTypes[key]);
        if (ColorVariance[key.toUpperCase()] === ColorVariance.PRIMARY) {
          this.getSheet("ngx-awesome-popup-styles").addRule(".ngx-awesome-popup-overlay", `background:  ${_ProductionColorTypes[key].TransparentDarkenVariance}!important;`);
        }
      }
    });
  }
  setUserColors(_UserColorTypes) {
    if (typeof _UserColorTypes !== "object") {
      return;
    }
    const userKeys = Object.keys(_UserColorTypes);
    const productionObjectKeys = Object.keys(this.productionGlobalConfig.displayColor);
    userKeys.forEach((key) => {
      if (productionObjectKeys.find((tKey) => tKey === key)) {
        if (_UserColorTypes[key]) {
          const baseColorProvider = new ColorProvider(_UserColorTypes[key]);
          if (baseColorProvider.Base) {
            this.productionGlobalConfig.displayColor[key] = baseColorProvider;
          }
        } else {
          this.productionGlobalConfig.displayColor[key] = null;
        }
      }
    });
  }
  getSheet(_StyleID) {
    let evolveDialogStyleNode = document.getElementById(_StyleID);
    if (!evolveDialogStyleNode) {
      const headNode = document.head || document.getElementsByTagName("head")[0];
      if (!headNode) {
        return;
      }
      evolveDialogStyleNode = document.createElement("style");
      evolveDialogStyleNode.setAttribute("id", _StyleID);
      evolveDialogStyleNode.appendChild(document.createTextNode(""));
      headNode.appendChild(evolveDialogStyleNode);
    }
    return evolveDialogStyleNode ? evolveDialogStyleNode.sheet : null;
  }
  setToastStyling(_Key, _ColorProvider) {
    const standardToast = `.toast-wrapper.standard-toast .evolve-toast.${_Key.toLowerCase()}-dialog`;
    const standardToastStyle = `
        background:  ${_ColorProvider.BrightShade}!important;
        border-color: ${_ColorProvider.Brighten}!important;
        `;
    const simpleToast = `.toast-wrapper.simple-toast .evolve-toast.${_Key.toLowerCase()}-dialog`;
    const simpleToastStyle = `
        background:  ${_ColorProvider.BrightWarmly}!important;
        color:  ${_ColorProvider.Darken}!important;
        `;
    const baseProgress = `.toast-wrapper .evolve-toast.${_Key.toLowerCase()}-dialog .progress-bar`;
    const baseProgressStyle = `
        background-color:  ${_ColorProvider.Brighten}!important;
        `;
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(baseProgress, baseProgressStyle);
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(standardToast, standardToastStyle);
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(simpleToast, simpleToastStyle);
  }
  setButtonStyling(_Key, _ColorProvider) {
    const baseButtonClass = `.ed-btn-${_Key.toLowerCase()}`;
    const baseStyle = `
        color: ${_ColorProvider.ContrastColor}!important;
        background:  ${_ColorProvider.Base}!important;
        border-color: ${_ColorProvider.BrightenForShade}!important;
        `;
    const hoverButtonClass = `.ed-btn-${_Key.toLowerCase()}:hover`;
    const hoverStyle = `
        background:  ${_ColorProvider.IsBaseBright ? _ColorProvider.DarkenForShade : _ColorProvider.BrightenForShade}!important;
        border-color: ${_ColorProvider.IsBaseBright ? _ColorProvider.Darken : _ColorProvider.Brighten}!important;
        `;
    const focusActiveButtonClass = `.ed-btn-${_Key.toLowerCase()}:focus, .ed-btn-${_Key.toLowerCase()}:active`;
    const focusActiveStyle = `
        box-shadow: 0 0 1px 2px ${_ColorProvider.IsBaseBright ? _ColorProvider.Darken : _ColorProvider.Brighten}!important;
        `;
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(baseButtonClass, baseStyle);
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(hoverButtonClass, hoverStyle);
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(focusActiveButtonClass, focusActiveStyle);
  }
  setIconStyling(_Key, _ColorProvider) {
    const baseIconClass = `.ap-icon-${_Key.toLowerCase()}`;
    const baseStyle = `color: ${_ColorProvider.BrightenForShade}!important;`;
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(baseIconClass, baseStyle);
  }
  setDialogFrame(_Key, _ColorProvider) {
    const baseDialogFrameClass = `.ngx-awesome-popup-overlay .${_Key.toLowerCase()}-dialog`;
    const baseStyle = `
        border-color: ${_ColorProvider.Brighten}!important;
        `;
    this.getSheet("ngx-awesome-popup-glob-styles").addRule(baseDialogFrameClass, baseStyle);
  }
  setToastStyles() {
    this.getSheet("ngx-awesome-popup-styles").addRule(`.toast-entity`, `all 0.5s ease;`);
    this.getSheet("ngx-awesome-popup-styles").addRule(`.toast-entity:first-child`, `animation: move 0.7s ease-out;`);
    const isIEOrEdge = /msie\s|trident\//i.test(window.navigator.userAgent);
    if (!isIEOrEdge) {
      this.getSheet("ngx-awesome-popup-styles").addRule(`@-webkit-keyframes move`, `
                                        0% {margin-top: -5px; opacity: 0.4;}
                                        30% {margin-top: -4px; opacity: 0.7;}
                                        100% {margin-top: 0px; opacity: 1;}
                                        `);
      this.getSheet("ngx-awesome-popup-styles").addRule(`@keyframes move`, `
                                        0% {margin-top: -5px; opacity: 0.4;}
                                        30% {margin-top: -4px; opacity: 0.7;}
                                        100% {margin-top: 0px; opacity: 1;}
                                        `);
    }
  }
};
GlobalConfigService.\u0275fac = function GlobalConfigService_Factory(t) {
  return new (t || GlobalConfigService)(\u0275\u0275inject("cdGlobalConfig"));
};
GlobalConfigService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: GlobalConfigService,
  factory: GlobalConfigService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["cdGlobalConfig"]
      }]
    }];
  }, null);
})();
var ConfirmBoxService = class {
  constructor(componentFactoryResolver, injector, appRef, gConfigService) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.appRef = appRef;
    this.gConfigService = gConfigService;
    this.confirmBoxComponentRefList = [];
  }
  open(_ConfirmBoxBelonging) {
    const dialogController = _ConfirmBoxBelonging.eventsController;
    const componentRef = this.getComponentRef(dialogController, _ConfirmBoxBelonging);
    this.confirmBoxComponentRefList.push(componentRef);
    componentRef.instance.confirmBoxBelonging = _ConfirmBoxBelonging;
    this.appendToBodyParentComponent(componentRef);
    this.listeners(dialogController);
    return dialogController;
  }
  getComponentRef(_eventsController, _ConfirmBoxBelonging) {
    let componentFactory;
    const dialogIndex = this.findDialogIndex(_ConfirmBoxBelonging.entityUniqueID);
    if (dialogIndex === -1) {
      const weakMap = /* @__PURE__ */ new WeakMap();
      weakMap.set(ConfirmBoxeventsController, _eventsController);
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfirmBoxWrapperComponent);
      return componentFactory.create(new DialogInjector(this.injector, weakMap));
    }
    return null;
  }
  listeners(_eventsController) {
    const closeDialogSubscription = _eventsController.afterClosed$.subscribe((response) => {
      const modalIndex = this.findDialogIndex(response.confirmBoxBelonging.entityUniqueID);
      this.removeFromBodyParentComponent(modalIndex);
      closeDialogSubscription.unsubscribe();
    });
  }
  appendToBodyParentComponent(_ComponentRef) {
    this.appRef.attachView(_ComponentRef.hostView);
    const domElem = _ComponentRef.hostView.rootNodes[0];
    document.body.appendChild(domElem);
  }
  closeDialogWrapperComponent(_DialogUniqueID) {
    const modalIndex = this.findDialogIndex(_DialogUniqueID);
    this.removeFromBodyParentComponent(modalIndex);
  }
  removeFromBodyParentComponent(_DialogIndex) {
    if (_DialogIndex > -1) {
      this.confirmBoxComponentRefList[_DialogIndex].instance.closeParent$().pipe(tap((item) => {
        this.appRef.detachView(this.confirmBoxComponentRefList[_DialogIndex].hostView);
        this.confirmBoxComponentRefList[_DialogIndex].destroy();
        this.confirmBoxComponentRefList.splice(_DialogIndex, 1);
      }), take(1)).subscribe();
    }
  }
  findDialogIndex(_DialogUniqueID) {
    return this.confirmBoxComponentRefList.findIndex((item) => {
      return _DialogUniqueID === item.instance.confirmBoxBelonging.entityUniqueID;
    });
  }
};
ConfirmBoxService.\u0275fac = function ConfirmBoxService_Factory(t) {
  return new (t || ConfirmBoxService)(\u0275\u0275inject(ComponentFactoryResolver$1), \u0275\u0275inject(Injector), \u0275\u0275inject(ApplicationRef), \u0275\u0275inject(GlobalConfigService));
};
ConfirmBoxService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: ConfirmBoxService,
  factory: ConfirmBoxService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ApplicationRef
    }, {
      type: GlobalConfigService
    }];
  }, null);
})();
var ConfirmBoxInitializer = class {
  constructor() {
    this.confirmBoxCarrier = new ConfirmBoxCarrier();
  }
  openConfirmBox$() {
    return this.confirmBoxCarrier.openConfirmBox$().pipe(map((resp) => {
      const basicConfirmBoxResponse = new ConfirmBoxResponse();
      const dataControl = new DataControl();
      dataControl.copyValuesFrom(resp, basicConfirmBoxResponse);
      return basicConfirmBoxResponse;
    }), take(1));
  }
  setButtons(_Buttons) {
    this.confirmBoxCarrier.setButtons(_Buttons);
  }
  setConfig(_ConfirmBoxCoreConfig) {
    this.confirmBoxCarrier.setConfig(_ConfirmBoxCoreConfig);
  }
  setDispatch(_Title, _Message = null) {
    this.confirmBoxCarrier.setTitle(_Title);
    this.confirmBoxCarrier.setMessage(_Message);
  }
  setTitle(_Title) {
    this.confirmBoxCarrier.setTitle(_Title);
  }
  setMessage(_Message) {
    this.confirmBoxCarrier.setMessage(_Message);
  }
  setButtonLabels(_Confirm, _Decline) {
    this.confirmBoxCarrier.setButtonLabels(_Confirm, _Decline);
  }
};
var ConfirmBoxResponse = class extends DataControl {
  constructor() {
    super();
    this.success = null;
    this.clickedButtonID = null;
  }
  setSuccess(_IsSuccess) {
    this.success = _IsSuccess;
  }
  setClickedButtonID(_ClickedButtonID) {
    this.clickedButtonID = _ClickedButtonID;
  }
};
var ConfirmBoxeventsController = class {
  constructor(entityUniqueID) {
    this.entityUniqueID = entityUniqueID;
    this._afterClosed = new Subject();
    this._onButtonClick = new Subject();
    this._buttonList = new Subject();
    this.afterClosed$ = this._afterClosed.asObservable();
    this.onButtonClick$ = this._onButtonClick.asObservable();
    this.buttonList$ = this._buttonList.asObservable();
  }
  close(_Response) {
    const response = _Response ? _Response : this.defaultResponse;
    this._afterClosed.next(response);
  }
  onButtonClick(_Button) {
    this.defaultResponse.setClickedButtonID(_Button.ID);
    this._onButtonClick.next(_Button);
  }
  setButtonList(_ButtonList) {
    this._buttonList.next(_ButtonList);
  }
  setDefaultResponse(_Response) {
    this.defaultResponse = _Response;
  }
};
var ConfirmBoxDefaultResponse = class extends ConfirmBoxResponse {
  constructor() {
    super();
    this.confirmBoxBelonging = null;
  }
  setBelonging(_ConfirmBoxBelonging) {
    this.confirmBoxBelonging = _ConfirmBoxBelonging;
  }
};
var ConfirmBoxCarrier = class {
  constructor() {
    this.confirmBoxBelonging = new ConfirmBoxBelonging();
  }
  setButtons(_Buttons) {
    if (_Buttons.length) {
      this.confirmBoxBelonging.buttons = _Buttons;
    }
  }
  setTitle(_Title) {
    this.confirmBoxBelonging.dispatch.title = _Title;
  }
  setMessage(_Message) {
    this.confirmBoxBelonging.dispatch.message = _Message;
  }
  setButtonLabels(_Confirm, _Decline) {
    this.confirmBoxBelonging.confirmBoxCoreConfig.confirmLabel = _Confirm;
    this.confirmBoxBelonging.confirmBoxCoreConfig.declineLabel = _Decline;
  }
  setConfig(_ConfirmBoxBelonging) {
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(_ConfirmBoxBelonging, this.confirmBoxBelonging.confirmBoxCoreConfig);
  }
  openConfirmBox$() {
    const service = ServiceLocator.injector.get(ConfirmBoxService);
    const confirmBoxController = service.open(this.confirmBoxBelonging);
    return confirmBoxController.afterClosed$;
  }
};
var ConfirmBoxSettings = class {
  constructor() {
    this.buttons = [];
    this.confirmBoxCoreConfig = new confirmBoxCoreConfig();
    this.dispatch = new dispatch();
  }
};
var ConfirmBoxCustomStyles = class {
  constructor() {
    this.titleCSS = null;
    this.textCSS = null;
    this.buttonSectionCSS = null;
    this.buttonCSS = null;
    this.wrapperCSS = null;
  }
};
var confirmBoxCoreConfig = class {
  constructor() {
    this.width = null;
    this.height = null;
    this.buttonPosition = null;
    this.layoutType = null;
    this.dispatch = null;
    this.confirmLabel = null;
    this.declineLabel = null;
    this.disableIcon = null;
    this.allowHtmlMessage = null;
    this.animationIn = null;
    this.animationOut = null;
    this.customStyles = new ConfirmBoxCustomStyles();
    this.iconStyleClass = null;
  }
};
var ConfirmBoxBelonging = class extends ConfirmBoxSettings {
  constructor() {
    super();
    this.entityUniqueID = "C" + Math.random().toString(36).substr(2, 9);
    this.eventsController = new ConfirmBoxeventsController(this.entityUniqueID);
    const ConfirmBoxCoreConfigurator = ServiceLocator.injector.get(ConfirmBoxConfigService);
    const baseSettings = new ConfirmBoxSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(ConfirmBoxCoreConfigurator.productionConfig.confirmBoxCoreConfig, baseSettings.confirmBoxCoreConfig);
    this.confirmBoxCoreConfig = baseSettings.confirmBoxCoreConfig;
    this.buttons = ConfirmBoxCoreConfigurator.productionConfig.buttons.slice();
  }
};
var DefaultLoaderComponent = class {
};
DefaultLoaderComponent.\u0275fac = function DefaultLoaderComponent_Factory(t) {
  return new (t || DefaultLoaderComponent)();
};
DefaultLoaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: DefaultLoaderComponent,
  selectors: [["ng-component"]],
  decls: 7,
  vars: 0,
  consts: [[1, "box-position"], [1, "loader-center"], [1, "lds-ring"]],
  template: function DefaultLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div")(4, "div")(5, "div")(6, "div");
      \u0275\u0275elementEnd()()();
    }
  },
  styles: [".box-position[_ngcontent-%COMP%]{height:auto;left:50%;margin:0 auto;position:absolute;text-align:center;top:44%;transform:translate(-50%,-40%)}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]{display:inline-block;height:80px;position:relative;width:80px}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid;border-color:#d4d4d4 transparent transparent transparent;border-radius:50%;box-sizing:border-box;display:block;height:64px;margin:8px;position:absolute;width:64px}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){animation-delay:-.45s}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.3s}.box-position[_ngcontent-%COMP%]   .loader-center[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.15s}@keyframes _ngcontent-%COMP%_lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultLoaderComponent, [{
    type: Component,
    args: [{
      template: '<div class="box-position">\n  <div class="loader-center">\n    <div class="lds-ring">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n</div>\n',
      styles: [".box-position{height:auto;left:50%;margin:0 auto;position:absolute;text-align:center;top:44%;transform:translate(-50%,-40%)}.box-position .loader-center{align-items:center;display:flex;justify-content:center}.box-position .loader-center .lds-ring{display:inline-block;height:80px;position:relative;width:80px}.box-position .loader-center .lds-ring div{animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid;border-color:#d4d4d4 transparent transparent transparent;border-radius:50%;box-sizing:border-box;display:block;height:64px;margin:8px;position:absolute;width:64px}.box-position .loader-center .lds-ring div:nth-child(1){animation-delay:-.45s}.box-position .loader-center .lds-ring div:nth-child(2){animation-delay:-.3s}.box-position .loader-center .lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
    }]
  }], null, null);
})();
var DialogConfigService = class {
  constructor(userConfig = {}, gConfigService) {
    this.userConfig = userConfig;
    this.gConfigService = gConfigService;
    this.authorConfig = new DialogSettings();
    this.productionConfig = new DialogSettings();
    const userConfigBase = new DialogSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(userConfig.dialogCoreConfig, userConfigBase.dialogCoreConfig);
    userConfig.dialogCoreConfig = userConfigBase.dialogCoreConfig;
    if (userConfig.dialogCoreConfig.loaderComponent !== null) {
      userConfig.dialogCoreConfig.displayLoader = userConfig.dialogCoreConfig.displayLoader === null;
    }
    this.authorConfig.dialogCoreConfig.width = "auto";
    this.authorConfig.dialogCoreConfig.height = "auto";
    this.authorConfig.dialogCoreConfig.hideScrollbar = false;
    this.authorConfig.dialogCoreConfig.escapeKeyClose = false;
    this.authorConfig.dialogCoreConfig.buttonPosition = "right";
    this.authorConfig.dialogCoreConfig.displayLoader = false;
    this.authorConfig.dialogCoreConfig.fullScreen = false;
    this.authorConfig.dialogCoreConfig.layoutType = DialogLayoutDisplay.NONE;
    this.authorConfig.dialogCoreConfig.loaderComponent = DefaultLoaderComponent;
    this.authorConfig.dialogCoreConfig.animationIn = AppearanceAnimation.ZOOM_IN;
    this.authorConfig.dialogCoreConfig.animationOut = DisappearanceAnimation.ZOOM_OUT;
    this.authorConfig.dialogCoreConfig.customStyles = new DialogCustomStyles();
    dataControl.copyValuesFrom(this.authorConfig.dialogCoreConfig, this.productionConfig.dialogCoreConfig);
    dataControl.copyValuesFrom(userConfig.dialogCoreConfig, this.productionConfig.dialogCoreConfig);
  }
};
DialogConfigService.\u0275fac = function DialogConfigService_Factory(t) {
  return new (t || DialogConfigService)(\u0275\u0275inject("dialogConfig"), \u0275\u0275inject(GlobalConfigService));
};
DialogConfigService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: DialogConfigService,
  factory: DialogConfigService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["dialogConfig"]
      }]
    }, {
      type: GlobalConfigService
    }];
  }, null);
})();
var InsertionLoaderDirective = class {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
};
InsertionLoaderDirective.\u0275fac = function InsertionLoaderDirective_Factory(t) {
  return new (t || InsertionLoaderDirective)(\u0275\u0275directiveInject(ViewContainerRef));
};
InsertionLoaderDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: InsertionLoaderDirective,
  selectors: [["", "appInsertionLoader", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InsertionLoaderDirective, [{
    type: Directive,
    args: [{
      selector: "[appInsertionLoader]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var InsertionDirective = class {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
};
InsertionDirective.\u0275fac = function InsertionDirective_Factory(t) {
  return new (t || InsertionDirective)(\u0275\u0275directiveInject(ViewContainerRef));
};
InsertionDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: InsertionDirective,
  selectors: [["", "appInsertion", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InsertionDirective, [{
    type: Directive,
    args: [{
      selector: "[appInsertion]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, null);
})();
var DialogWrapperComponent = class {
  constructor(dialogBelonging, componentFactoryResolver, cd, layoutHelper) {
    this.dialogBelonging = dialogBelonging;
    this.componentFactoryResolver = componentFactoryResolver;
    this.cd = cd;
    this.layoutHelper = layoutHelper;
    this.fadeInOutAnimation = "open";
    this.showLoader = true;
    this.appearanceAnimation = AppearanceAnimation;
    this.disappearanceAnimation = DisappearanceAnimation;
    setTimeout(() => {
      this.boxAnimation = this.dialogBelonging.dialogCoreConfig.animationIn;
    }, 1);
  }
  ngAfterViewInit() {
    this.hideScrollbar();
    this.loadChildComponent(this.childComponentType);
    this.loadLoaderComponent(this.dialogBelonging.dialogCoreConfig.loaderComponent);
    this.setDefaultResponse();
    this.cd.detectChanges();
    this.setCustomStyles();
  }
  hideScrollbar() {
    if (this.dialogBelonging.dialogCoreConfig.hideScrollbar) {
      this.bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
  }
  revertScrollbarSettings() {
    if (this.dialogBelonging.dialogCoreConfig.hideScrollbar) {
      document.body.style.overflow = this.bodyOverflow;
    }
  }
  setDefaultResponse() {
    const dialogResponse = new DialogDefaultResponse();
    dialogResponse.setBelonging(this.dialogBelonging);
    this.dialogBelonging.eventsController.setDefaultResponse(dialogResponse);
  }
  ngOnDestroy() {
    this.revertScrollbarSettings();
    if (this.childComponentRef) {
      this.childComponentRef.destroy();
    }
    if (this.loaderComponentRef) {
      this.loaderComponentRef.destroy();
    }
  }
  hideScroller() {
  }
  loadChildComponent(_ComponentType) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_ComponentType);
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.childComponentRef = viewContainerRef.createComponent(componentFactory);
    this.childComponentRef.instance.dialogBelonging = this.dialogBelonging;
  }
  loadLoaderComponent(_LoaderRef) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_LoaderRef);
    const viewContainerRef = this.loaderInsertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.loaderComponentRef = viewContainerRef.createComponent(componentFactory);
  }
  close() {
    this.dialogBelonging.eventsController.close();
  }
  closeParent$() {
    this.boxAnimation = this.dialogBelonging.dialogCoreConfig.animationOut;
    const closeDuration = this.dialogBelonging.dialogCoreConfig.animationOut ? 800 : 200;
    this.fadeInOutAnimation = "close-fast";
    return new Observable((observer) => {
      observer.next("");
      observer.complete();
    }).pipe(delay(closeDuration));
  }
  onOverlayClicked(evt) {
  }
  onCustomButton(_Button) {
    this.dialogBelonging.eventsController.onButtonClick(_Button);
  }
  closeLoader() {
    this.showLoader = false;
  }
  setCustomStyles() {
    if (this.dialogBelonging.dialogCoreConfig.customStyles.wrapperCSS && this.elDialogWrapper) {
      this.elDialogWrapper.nativeElement.style.cssText += this.dialogBelonging.dialogCoreConfig.customStyles.wrapperCSS;
    }
    if (this.dialogBelonging.dialogCoreConfig.customStyles.buttonSectionCSS && this.elButtonWrapper) {
      this.elButtonWrapper.nativeElement.style.cssText += this.dialogBelonging.dialogCoreConfig.customStyles.buttonSectionCSS;
    }
    if (this.dialogBelonging.dialogCoreConfig.customStyles.buttonCSS && this.elButton) {
      this.elButton.forEach((el) => {
        el.nativeElement.style.cssText += this.dialogBelonging.dialogCoreConfig.customStyles.buttonCSS;
      });
    }
  }
  keyEvent(event) {
    if (event.key === "Escape" && this.dialogBelonging.dialogCoreConfig.escapeKeyClose) {
      this.close();
    }
  }
};
DialogWrapperComponent.\u0275fac = function DialogWrapperComponent_Factory(t) {
  return new (t || DialogWrapperComponent)(\u0275\u0275directiveInject("dialogBelonging"), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(LayoutHelperService));
};
DialogWrapperComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: DialogWrapperComponent,
  selectors: [["dialog-popup-wrapper"]],
  viewQuery: function DialogWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c9, 5);
      \u0275\u0275viewQuery(_c3, 5);
      \u0275\u0275viewQuery(InsertionDirective, 7);
      \u0275\u0275viewQuery(InsertionLoaderDirective, 7);
      \u0275\u0275viewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elDialogWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elButtonWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.insertionPoint = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderInsertionPoint = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elButton = _t);
    }
  },
  hostBindings: function DialogWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keyup", function DialogWrapperComponent_keyup_HostBindingHandler($event) {
        return ctx.keyEvent($event);
      }, false, \u0275\u0275resolveWindow);
    }
  },
  features: [\u0275\u0275ProvidersFeature([LayoutHelperService])],
  decls: 15,
  vars: 25,
  consts: [[1, "ngx-awesome-popup-overlay", "aw-dialog-modal", 3, "dblclick"], [1, "evolve-parent-dialog", 3, "ngStyle", "className"], ["elDialogWrapper", ""], [1, "loader-holder", 3, "ngClass"], [1, "dialog-loader"], ["appInsertionLoader", ""], [4, "ngIf", "ngIfElse"], ["fullScreen", ""], [1, "content-holder", 3, "ngStyle"], [1, "component-content", 3, "ngClass"], ["appInsertion", ""], [1, "button-holder"], ["elButtonWrapper", ""], ["class", "button-section", 3, "ngStyle", 4, "ngIf"], [1, "button-section", 3, "ngStyle"], [3, "disabled", "display", "className", "click", 4, "ngFor", "ngForOf"], [3, "disabled", "className", "click"], ["elButton", ""]],
  template: function DialogWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("dblclick", function DialogWrapperComponent_Template_div_dblclick_0_listener($event) {
        return ctx.onOverlayClicked($event);
      });
      \u0275\u0275elementStart(1, "div", 1, 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275template(5, DialogWrapperComponent_ng_template_5_Template, 0, 0, "ng-template", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, DialogWrapperComponent_ng_container_6_Template, 1, 0, "ng-container", 6)(7, DialogWrapperComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
      \u0275\u0275template(11, DialogWrapperComponent_ng_template_11_Template, 0, 0, "ng-template", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11, 12);
      \u0275\u0275template(14, DialogWrapperComponent_div_14_Template, 2, 4, "div", 13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const _r4 = \u0275\u0275reference(8);
      \u0275\u0275property("@fadeInOut", \u0275\u0275pureFunction2(13, _c7, ctx.fadeInOutAnimation, \u0275\u0275pureFunction1(11, _c6, ctx.dialogBelonging.dialogCoreConfig.animationOut === ctx.disappearanceAnimation.NONE ? "200ms" : "300ms")));
      \u0275\u0275advance();
      \u0275\u0275property("@.disabled", ctx.dialogBelonging.dialogCoreConfig.animationIn === ctx.appearanceAnimation.NONE && ctx.dialogBelonging.dialogCoreConfig.animationOut === ctx.disappearanceAnimation.NONE)("@boxAnimations", ctx.boxAnimation)("ngStyle", ctx.dialogBelonging.dialogCoreConfig.fullScreen && \u0275\u0275pureFunction0(16, _c10))("className", ctx.layoutHelper.getBoxClasses(ctx.dialogBelonging.dialogCoreConfig.layoutType, "evolve-parent-dialog"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", !ctx.dialogBelonging.dialogCoreConfig.displayLoader ? "dialog-loader-off" : ctx.showLoader ? "dialog-loader-active" : "dialog-loader-gone");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.dialogBelonging.dialogCoreConfig.fullScreen)("ngIfElse", _r4);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngStyle", ctx.dialogBelonging.dialogCoreConfig.fullScreen ? \u0275\u0275pureFunction0(17, _c11) : \u0275\u0275pureFunction6(18, _c122, ctx.dialogBelonging.dialogCoreConfig.width, ctx.dialogBelonging.dialogCoreConfig.minWidth, ctx.dialogBelonging.dialogCoreConfig.maxWidth, ctx.dialogBelonging.dialogCoreConfig.height, ctx.dialogBelonging.dialogCoreConfig.minHeight, ctx.dialogBelonging.dialogCoreConfig.maxHeight));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", !ctx.dialogBelonging.dialogCoreConfig.displayLoader ? "component-content-loader-off" : ctx.showLoader ? "component-content-preparing" : "component-content-ready");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.dialogBelonging.buttons.length > 0);
    }
  },
  dependencies: [NgStyle, NgClass, InsertionLoaderDirective, NgIf, InsertionDirective, NgForOf],
  encapsulation: 2,
  data: {
    animation: [fadeInOut(), boxAnimations()]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogWrapperComponent, [{
    type: Component,
    args: [{
      selector: "dialog-popup-wrapper",
      animations: [fadeInOut(), boxAnimations()],
      providers: [LayoutHelperService],
      template: `<div
  class="ngx-awesome-popup-overlay aw-dialog-modal"
  (dblclick)="onOverlayClicked($event)"
  [@fadeInOut]="{
    value: fadeInOutAnimation,
    params: {
      closeDelay: dialogBelonging.dialogCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'
    }
  }">
  <div
    class="evolve-parent-dialog"
    [@.disabled]="
      dialogBelonging.dialogCoreConfig.animationIn === appearanceAnimation.NONE &&
      dialogBelonging.dialogCoreConfig.animationOut === disappearanceAnimation.NONE
    "
    [@boxAnimations]="boxAnimation"
    #elDialogWrapper
    [ngStyle]="
      dialogBelonging.dialogCoreConfig.fullScreen && {
        maxWidth: '100%',
        maxHeight: '100%',
        height: '100%',
        width: '100%',
        borderRadius: '0'
      }
    "
    [className]="layoutHelper.getBoxClasses(dialogBelonging.dialogCoreConfig.layoutType, 'evolve-parent-dialog')">
    <div
      class="loader-holder"
      [ngClass]="
        !dialogBelonging.dialogCoreConfig.displayLoader ? 'dialog-loader-off' : showLoader ? 'dialog-loader-active' : 'dialog-loader-gone'
      ">
      <div class="dialog-loader">
        <ng-template appInsertionLoader></ng-template>
      </div>
    </div>
    <ng-container *ngIf="!dialogBelonging.dialogCoreConfig.fullScreen; else fullScreen"></ng-container>
    <ng-template #fullScreen></ng-template>
    <div
      class="content-holder"
      [ngStyle]="
        dialogBelonging.dialogCoreConfig.fullScreen
          ? {
              width: '100%',
              height: '100%'
            }
          : {
              width: dialogBelonging.dialogCoreConfig.width,
              minWidth: dialogBelonging.dialogCoreConfig.minWidth,
              maxWidth: dialogBelonging.dialogCoreConfig.maxWidth,
              height: dialogBelonging.dialogCoreConfig.height,
              minHeight: dialogBelonging.dialogCoreConfig.minHeight,
              maxHeight: dialogBelonging.dialogCoreConfig.maxHeight
            }
      ">
      <div
        class="component-content"
        [ngClass]="
          !dialogBelonging.dialogCoreConfig.displayLoader
            ? 'component-content-loader-off'
            : showLoader
            ? 'component-content-preparing'
            : 'component-content-ready'
        ">
        <ng-template appInsertion></ng-template>
      </div>
    </div>

    <div class="button-holder" #elButtonWrapper>
      <div
        class="button-section"
        *ngIf="dialogBelonging.buttons.length > 0"
        [ngStyle]="{
          'text-align': dialogBelonging.dialogCoreConfig.buttonPosition
        }">
        <button
          #elButton
          *ngFor="let button of dialogBelonging.buttons"
          [disabled]="button.disabled"
          [style.display]="button.hidden ? 'none' : 'inline'"
          (click)="onCustomButton(button)"
          [className]="layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-lg')">
          {{ button.label }}
        </button>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], function() {
    return [{
      type: DialogBelonging,
      decorators: [{
        type: Inject,
        args: ["dialogBelonging"]
      }]
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: ChangeDetectorRef
    }, {
      type: LayoutHelperService
    }];
  }, {
    elDialogWrapper: [{
      type: ViewChild,
      args: ["elDialogWrapper"]
    }],
    elButtonWrapper: [{
      type: ViewChild,
      args: ["elButtonWrapper"]
    }],
    elButton: [{
      type: ViewChildren,
      args: ["elButton"]
    }],
    insertionPoint: [{
      type: ViewChild,
      args: [InsertionDirective, {
        static: true
      }]
    }],
    loaderInsertionPoint: [{
      type: ViewChild,
      args: [InsertionLoaderDirective, {
        static: true
      }]
    }],
    keyEvent: [{
      type: HostListener,
      args: ["window:keyup", ["$event"]]
    }]
  });
})();
var DialogService = class {
  constructor(componentFactoryResolver, injector, appRef) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.appRef = appRef;
    this.dialogParentComponentRefList = [];
  }
  open(_ComponentType, _DialogBelonging) {
    const dialogController = _DialogBelonging.eventsController;
    const componentRef = this.getComponentRef(dialogController, _DialogBelonging);
    this.dialogParentComponentRefList.push(componentRef);
    componentRef.instance.dialogBelonging = _DialogBelonging;
    componentRef.instance.childComponentType = _ComponentType;
    this.appendToBodyParentComponent(componentRef);
    this.listeners(dialogController);
    return dialogController;
  }
  getComponentRef(_eventsController, _DialogBelonging) {
    let componentFactory;
    const dialogIndex = this.findDialogIndex(_DialogBelonging.entityUniqueID);
    if (dialogIndex === -1) {
      const weakMap = /* @__PURE__ */ new WeakMap();
      weakMap.set(DialogeventsController, _eventsController);
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogWrapperComponent);
      return componentFactory.create(new DialogInjector(this.injector, weakMap));
    }
    return null;
  }
  listeners(_eventsController) {
    const closeDialogSubscription = _eventsController.afterClosed$.subscribe((response) => {
      const modalIndex = this.findDialogIndex(response.DialogBelonging.entityUniqueID);
      this.removeFromBodyDialogWrapperComponent(modalIndex);
      closeDialogSubscription.unsubscribe();
    });
    const closeLoaderSubscription = _eventsController.afterLoader$.subscribe((_DialogUniqueID) => {
      if (_DialogUniqueID) {
        const modalIndex = this.findDialogIndex(_DialogUniqueID);
        if (modalIndex !== -1) {
          this.dialogParentComponentRefList[modalIndex].instance.closeLoader();
        }
      }
      closeLoaderSubscription.unsubscribe();
    });
  }
  childComponentResolver() {
  }
  appendToBodyParentComponent(_ComponentRef) {
    this.appRef.attachView(_ComponentRef.hostView);
    const domElem = _ComponentRef.hostView.rootNodes[0];
    document.body.appendChild(domElem);
  }
  closeDialogWrapperComponent(_DialogUniqueID) {
    const modalIndex = this.findDialogIndex(_DialogUniqueID);
    this.removeFromBodyDialogWrapperComponent(modalIndex);
  }
  removeFromBodyDialogWrapperComponent(_DialogIndex) {
    if (_DialogIndex > -1) {
      this.dialogParentComponentRefList[_DialogIndex].instance.closeParent$().pipe(tap((item) => {
        this.appRef.detachView(this.dialogParentComponentRefList[_DialogIndex].hostView);
        this.dialogParentComponentRefList[_DialogIndex].destroy();
        this.dialogParentComponentRefList.splice(_DialogIndex, 1);
      }), take(1)).subscribe();
    }
  }
  findDialogIndex(_DialogUniqueID) {
    return this.dialogParentComponentRefList.findIndex((item) => {
      return _DialogUniqueID === item.instance.dialogBelonging.entityUniqueID;
    });
  }
};
DialogService.\u0275fac = function DialogService_Factory(t) {
  return new (t || DialogService)(\u0275\u0275inject(ComponentFactoryResolver$1), \u0275\u0275inject(Injector), \u0275\u0275inject(ApplicationRef));
};
DialogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: DialogService,
  factory: DialogService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ApplicationRef
    }];
  }, null);
})();
var DialogResponse = class extends DataControl {
  constructor() {
    super();
    this.payload = null;
    this.success = null;
    this.clickedButtonID = null;
  }
  setPayload(_Payload) {
    this.payload = _Payload;
  }
  setClickedButtonID(_ClickedButtonID) {
    this.clickedButtonID = _ClickedButtonID;
  }
};
var DialogeventsController = class {
  constructor(entityUniqueID) {
    this.entityUniqueID = entityUniqueID;
    this._afterClosed = new Subject();
    this._afterLoader = new Subject();
    this._onButtonClick = new Subject();
    this._buttonList = new Subject();
    this.onButtonClick$ = this._onButtonClick.asObservable();
    this.afterClosed$ = this._afterClosed.asObservable();
    this.afterLoader$ = this._afterLoader.asObservable();
    this.buttonList$ = this._buttonList.asObservable();
  }
  close(_Payload = null) {
    this.defaultResponse.setPayload(_Payload);
    this._afterClosed.next(this.defaultResponse);
  }
  onButtonClick(_Button) {
    this.defaultResponse.setClickedButtonID(_Button.ID);
    this._onButtonClick.next(_Button);
  }
  setButtonList(_ButtonList) {
    this._buttonList.next(_ButtonList);
  }
  closeLoader() {
    setTimeout(() => {
      this._afterLoader.next(this.entityUniqueID);
    }, 0);
  }
  setDefaultResponse(_Response) {
    this.defaultResponse = _Response;
  }
};
var DialogDefaultResponse = class extends DialogResponse {
  constructor() {
    super();
    this.DialogBelonging = null;
  }
  setBelonging(_DialogBelonging) {
    this.DialogBelonging = _DialogBelonging;
  }
};
var DialogCustomStyles = class {
  constructor() {
    this.buttonSectionCSS = null;
    this.buttonCSS = null;
    this.wrapperCSS = null;
  }
};
var dialogCoreConfig = class extends Sizes {
  constructor() {
    super(...arguments);
    this.escapeKeyClose = null;
    this.hideScrollbar = null;
    this.buttonPosition = null;
    this.layoutType = null;
    this.displayLoader = null;
    this.loaderComponent = null;
    this.animationIn = null;
    this.animationOut = null;
    this.customStyles = new DialogCustomStyles();
  }
};
var DialogSettings = class {
  constructor() {
    this.buttons = [];
    this.dialogCoreConfig = new dialogCoreConfig();
  }
};
var DialogBelonging = class extends DialogSettings {
  constructor() {
    super();
    this.entityUniqueID = "D" + Math.random().toString(36).substr(2, 9);
    this.customData = null;
    this.eventsController = new DialogeventsController(this.entityUniqueID);
    const dialogConfigurator = ServiceLocator.injector.get(DialogConfigService);
    const baseSettings = new DialogSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(dialogConfigurator.productionConfig.dialogCoreConfig, baseSettings.dialogCoreConfig);
    this.dialogCoreConfig = baseSettings.dialogCoreConfig;
    this.buttons = dialogConfigurator.productionConfig.buttons.slice();
  }
};
var ToastProgressBarEnum;
(function(ToastProgressBarEnum2) {
  ToastProgressBarEnum2[ToastProgressBarEnum2["NONE"] = 0] = "NONE";
  ToastProgressBarEnum2[ToastProgressBarEnum2["INCREASE"] = 1] = "INCREASE";
  ToastProgressBarEnum2[ToastProgressBarEnum2["DECREASE"] = 2] = "DECREASE";
})(ToastProgressBarEnum || (ToastProgressBarEnum = {}));
var ToastPositionEnum;
(function(ToastPositionEnum2) {
  ToastPositionEnum2["TOP_LEFT"] = "top-left";
  ToastPositionEnum2["TOP_CENTER"] = "top-center";
  ToastPositionEnum2["TOP_RIGHT"] = "top-right";
  ToastPositionEnum2["TOP_FULL_WIDTH"] = "top-fullwidth";
  ToastPositionEnum2["BOTTOM_LEFT"] = "bottom-left";
  ToastPositionEnum2["BOTTOM_CENTER"] = "bottom-center";
  ToastPositionEnum2["BOTTOM_RIGHT"] = "bottom-right";
  ToastPositionEnum2["BOTTOM_FULL_WIDTH"] = "bottom-fullwidth";
})(ToastPositionEnum || (ToastPositionEnum = {}));
var ToastUserViewTypeEnum;
(function(ToastUserViewTypeEnum2) {
  ToastUserViewTypeEnum2["SIMPLE"] = "simple";
  ToastUserViewTypeEnum2["STANDARD"] = "standard";
})(ToastUserViewTypeEnum || (ToastUserViewTypeEnum = {}));
var ToastNotificationConfigService = class {
  constructor(userConfig = {}) {
    this.userConfig = userConfig;
    this.dataControl = new DataControl();
    this.authorConfig = new ToastSettings();
    this.productionConfig = new ToastSettings();
    const userConfigBase = new ToastSettings();
    this.dataControl.copyValuesFrom(userConfig.toastCoreConfig, userConfigBase.toastCoreConfig);
    userConfig.toastCoreConfig = userConfigBase.toastCoreConfig;
    this.authorConfig.toastCoreConfig.buttonPosition = "right";
    this.authorConfig.toastCoreConfig.textPosition = "left";
    this.authorConfig.toastCoreConfig.toastPosition = ToastPositionEnum.TOP_RIGHT;
    this.authorConfig.toastCoreConfig.progressBar = ToastProgressBarEnum.INCREASE;
    this.authorConfig.toastCoreConfig.toastUserViewType = ToastUserViewTypeEnum.SIMPLE;
    this.authorConfig.toastCoreConfig.autoCloseDelay = 2500;
    this.authorConfig.toastCoreConfig.disableIcon = false;
    this.authorConfig.toastCoreConfig.allowHtmlMessage = true;
    this.authorConfig.toastCoreConfig.layoutType = DialogLayoutDisplay.NONE;
    this.authorConfig.globalSettings.allowedNotificationsAtOnce = 5;
    this.authorConfig.toastCoreConfig.animationIn = AppearanceAnimation.ZOOM_IN;
    this.authorConfig.toastCoreConfig.animationOut = DisappearanceAnimation.ZOOM_OUT;
    this.authorConfig.toastCoreConfig.customStyles = new ToastCustomStyles();
    this.authorConfig.toastCoreConfig.iconStyleClass = null;
    this.setResetGlobalToastConfig();
    this.dataControl.copyValuesFrom(this.authorConfig.toastCoreConfig, this.productionConfig.toastCoreConfig);
    this.dataControl.copyValuesFrom(this.userConfig.toastCoreConfig, this.productionConfig.toastCoreConfig);
  }
  setResetGlobalToastConfig(globalToastConfig) {
    this.dataControl.copyValuesFrom(this.authorConfig.globalSettings, this.productionConfig.globalSettings);
    this.dataControl.copyValuesFrom(globalToastConfig ? globalToastConfig : this.userConfig.globalSettings, this.productionConfig.globalSettings);
  }
};
ToastNotificationConfigService.\u0275fac = function ToastNotificationConfigService_Factory(t) {
  return new (t || ToastNotificationConfigService)(\u0275\u0275inject("toastNotificationConfig"));
};
ToastNotificationConfigService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: ToastNotificationConfigService,
  factory: ToastNotificationConfigService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["toastNotificationConfig"]
      }]
    }];
  }, null);
})();
var WrapperAbstraction = class {
  constructor(toastNotificationBelonging, layoutHelper) {
    this.toastNotificationBelonging = toastNotificationBelonging;
    this.layoutHelper = layoutHelper;
    this.closeIsClicked = false;
    this.autoClosingHasStarted = false;
    this.fadeInOutAnimation = "open";
    this.timerStarted$ = new BehaviorSubject("start-counter");
    this.isTimerStarted = false;
    this.timer = new Timer();
    this.appearanceAnimation = AppearanceAnimation;
    this.disappearanceAnimation = DisappearanceAnimation;
    setTimeout(() => {
      this.boxAnimation = this.toastNotificationBelonging.toastCoreConfig.animationIn;
    }, 1);
  }
  get autoCloseCondition() {
    return this.toastNotificationBelonging.toastCoreConfig.autoCloseDelay && !(this.toastNotificationBelonging.buttons.length || this.toastNotificationBelonging.toastCoreConfig.declineLabel || this.toastNotificationBelonging.toastCoreConfig.confirmLabel);
  }
  get buttonsExist() {
    return !!this.toastNotificationBelonging.buttons.length || !!this.toastNotificationBelonging.toastCoreConfig.declineLabel || !!this.toastNotificationBelonging.toastCoreConfig.confirmLabel;
  }
  setCustomStyles() {
    if (this.toastNotificationBelonging.toastCoreConfig.customStyles.textCSS && this.elTextWrapper) {
      this.elTextWrapper.nativeElement.style.cssText += this.toastNotificationBelonging.toastCoreConfig.customStyles.textCSS;
    }
    if (this.toastNotificationBelonging.toastCoreConfig.customStyles.titleCSS && this.elTitleWrapper) {
      this.elTitleWrapper.nativeElement.style.cssText += this.toastNotificationBelonging.toastCoreConfig.customStyles.titleCSS;
    }
    if (this.toastNotificationBelonging.toastCoreConfig.customStyles.buttonSectionCSS && this.elButtonWrapper) {
      this.elButtonWrapper.nativeElement.style.cssText += this.toastNotificationBelonging.toastCoreConfig.customStyles.buttonSectionCSS;
    }
    if (this.toastNotificationBelonging.toastCoreConfig.customStyles.buttonCSS && this.elButton) {
      this.elButton.forEach((el) => {
        el.nativeElement.style.cssText += this.toastNotificationBelonging.toastCoreConfig.customStyles.buttonCSS;
      });
    }
  }
  mouseOver() {
    if (!this.buttonsExist && !this.closeIsClicked && !this.autoClosingHasStarted) {
      this.timerStarted$.next("stop-counter");
      this.fadeInOutAnimation = "open";
      this.subsToClosingDelay?.unsubscribe();
      this.boxAnimation = "reset";
    }
  }
  mouseOut() {
    if (!this.buttonsExist && !this.closeIsClicked && !this.autoClosingHasStarted) {
      this.timerStarted$.next("start-counter");
    }
  }
  onOverlayClicked(evt) {
  }
  onToastClicked(evt) {
  }
  setResponse(_IsSuccess, _ClickedButtonID) {
    const response = new ToastNotificationDefaultResponse();
    if (_ClickedButtonID) {
      response.clickedButtonID = _ClickedButtonID;
    }
    response.setSuccess(_IsSuccess);
    response.setBelonging(this.toastNotificationBelonging);
    this.toastNotificationBelonging.eventsController.setDefaultResponse(response);
  }
  onCustomButton(_Button) {
    this.toastNotificationBelonging.eventsController.onButtonClick(_Button);
    this.setResponse(true, _Button.ID);
    this.toastNotificationBelonging.eventsController.close();
  }
  onButtonClick(_Type) {
    let buttonID;
    if (_Type === "confirm") {
      buttonID = this.toastNotificationBelonging.toastCoreConfig.confirmLabel.toLowerCase();
    } else if (_Type === "decline") {
      buttonID = this.toastNotificationBelonging.toastCoreConfig.declineLabel.toLowerCase();
    }
    this.setResponse(_Type === "confirm", buttonID);
    this.toastNotificationBelonging.eventsController.close();
  }
  autoClose() {
    if (this.autoCloseCondition) {
      this.timer.setMilliseconds(this.toastNotificationBelonging.toastCoreConfig.autoCloseDelay);
      this.subTimer = this.timerStarted$.pipe(tap((next) => {
        if ("start-counter" === next) {
          this.timer.start();
          this.isTimerStarted = true;
          this.timeout = setTimeout(() => {
            this.subsToClosingDelay = this.closeParent$().subscribe((resp) => {
              this.toastNotificationBelonging.eventsController.close();
            });
          }, this.toastNotificationBelonging.toastCoreConfig.autoCloseDelay);
        } else if ("stop-counter" === next) {
          if (this.isTimerStarted) {
            this.timer.stop();
            clearTimeout(this.timeout);
            this.isTimerStarted = false;
          }
        }
      })).subscribe();
    }
  }
  closeParent$() {
    this.autoClosingHasStarted = true;
    this.boxAnimation = this.toastNotificationBelonging.toastCoreConfig.animationOut;
    const closeDuration = this.toastNotificationBelonging.toastCoreConfig.animationOut ? 400 : 200;
    this.fadeInOutAnimation = "close-fast";
    return of("").pipe(delay(closeDuration));
  }
  close() {
    this.toastNotificationBelonging.eventsController.close();
  }
  closeIcon() {
    this.closeIsClicked = true;
    this.subsToClosingDelay?.unsubscribe();
    this.closeParent$().pipe(take(1)).subscribe((resp) => {
      this.toastNotificationBelonging.eventsController.close();
    });
  }
  ngOnDestroy() {
    this.subsToClosingDelay?.unsubscribe();
    this.subTimer?.unsubscribe();
  }
  getIconClasses() {
    return "icon-type-toast " + this.layoutHelper.getIconClasses(this.toastNotificationBelonging.toastCoreConfig.layoutType, this.toastNotificationBelonging.toastCoreConfig.iconStyleClass);
  }
};
WrapperAbstraction.\u0275fac = function WrapperAbstraction_Factory(t) {
  return new (t || WrapperAbstraction)(\u0275\u0275directiveInject("toastNotificationBelonging"), \u0275\u0275directiveInject(LayoutHelperService));
};
WrapperAbstraction.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: WrapperAbstraction,
  viewQuery: function WrapperAbstraction_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c12, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
      \u0275\u0275viewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elTextWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elTitleWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elButtonWrapper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elButton = _t);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WrapperAbstraction, [{
    type: Directive
  }], function() {
    return [{
      type: ToastNotificationBelonging,
      decorators: [{
        type: Inject,
        args: ["toastNotificationBelonging"]
      }]
    }, {
      type: LayoutHelperService
    }];
  }, {
    elTextWrapper: [{
      type: ViewChild,
      args: ["elTextWrapper"]
    }],
    elTitleWrapper: [{
      type: ViewChild,
      args: ["elTitleWrapper"]
    }],
    elButtonWrapper: [{
      type: ViewChild,
      args: ["elButtonWrapper"]
    }],
    elButton: [{
      type: ViewChildren,
      args: ["elButton"]
    }]
  });
})();
var ToastNotificationSimpleWrapperComponent = class extends WrapperAbstraction {
  constructor(toastNotificationBelonging, gConfig, cd, layoutHelper) {
    super(toastNotificationBelonging, layoutHelper);
    this.toastNotificationBelonging = toastNotificationBelonging;
    this.gConfig = gConfig;
    this.cd = cd;
    this.layoutHelper = layoutHelper;
  }
  ngAfterViewInit() {
    this.setResponse(false);
    this.cd.detectChanges();
    this.autoClose();
    this.setCustomStyles();
  }
};
ToastNotificationSimpleWrapperComponent.\u0275fac = function ToastNotificationSimpleWrapperComponent_Factory(t) {
  return new (t || ToastNotificationSimpleWrapperComponent)(\u0275\u0275directiveInject("toastNotificationBelonging"), \u0275\u0275directiveInject(GlobalConfigService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(LayoutHelperService));
};
ToastNotificationSimpleWrapperComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: ToastNotificationSimpleWrapperComponent,
  selectors: [["app-toast-notification-simple-wrapper"]],
  features: [\u0275\u0275ProvidersFeature([LayoutHelperService]), \u0275\u0275InheritDefinitionFeature],
  decls: 9,
  vars: 14,
  consts: [[1, "toast-wrapper", "simple-toast", 3, "dblclick"], [3, "className", "mouseover", "mouseout", "click"], ["class", "toast-title-content", 4, "ngIf"], ["class", "content-holder toast-text", 4, "ngIf"], [1, "button-holder"], ["elButtonWrapper", ""], ["class", "button-section", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar-container", 4, "ngIf"], [1, "toast-title-content"], ["elTitleWrapper", ""], ["class", "icon-section", 4, "ngIf"], [1, "dont-break-out"], [1, "text-wrapper", "dont-break-out"], ["class", "close-ico icon-times-circle", 3, "click", 4, "ngIf"], [1, "icon-section"], [3, "className"], [1, "close-ico", "icon-times-circle", 3, "click"], [1, "content-holder", "toast-text"], ["elTextWrapper", ""], [1, "text-wrapper-section", "toast-inner-content", 3, "ngStyle", "ngClass"], ["class", "text-wrapper dont-break-out", 4, "ngIf"], ["class", "text-wrapper", 3, "innerHTML", 4, "ngIf"], [1, "text-wrapper", 3, "innerHTML"], [1, "button-section", 3, "ngStyle"], [3, "disabled", "display", "className", "click", 4, "ngFor", "ngForOf"], [3, "disabled", "className", "click"], ["elButton", ""], [3, "className", "click", 4, "ngIf"], ["class", "ed-btn ed-btn-sm ed-btn-secondary", 3, "click", 4, "ngIf"], [3, "className", "click"], [1, "ed-btn", "ed-btn-sm", "ed-btn-secondary", 3, "click"], [1, "progress-bar-container"], [1, "progress-bar", 3, "ngStyle"]],
  template: function ToastNotificationSimpleWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("dblclick", function ToastNotificationSimpleWrapperComponent_Template_div_dblclick_0_listener($event) {
        return ctx.onOverlayClicked($event);
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("mouseover", function ToastNotificationSimpleWrapperComponent_Template_div_mouseover_1_listener() {
        return ctx.mouseOver();
      })("mouseout", function ToastNotificationSimpleWrapperComponent_Template_div_mouseout_1_listener() {
        return ctx.mouseOut();
      })("click", function ToastNotificationSimpleWrapperComponent_Template_div_click_1_listener($event) {
        return ctx.onToastClicked($event);
      });
      \u0275\u0275template(2, ToastNotificationSimpleWrapperComponent_div_2_Template, 7, 3, "div", 2)(3, ToastNotificationSimpleWrapperComponent_div_3_Template, 7, 9, "div", 3);
      \u0275\u0275elementStart(4, "div", 4, 5);
      \u0275\u0275template(6, ToastNotificationSimpleWrapperComponent_div_6_Template, 2, 4, "div", 6)(7, ToastNotificationSimpleWrapperComponent_div_7_Template, 3, 5, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ToastNotificationSimpleWrapperComponent_div_8_Template, 2, 3, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeInOut", \u0275\u0275pureFunction2(11, _c7, ctx.fadeInOutAnimation, \u0275\u0275pureFunction1(9, _c6, ctx.toastNotificationBelonging.toastCoreConfig.animationOut === ctx.disappearanceAnimation.NONE ? "200ms" : "300ms")));
      \u0275\u0275advance();
      \u0275\u0275property("@.disabled", ctx.toastNotificationBelonging.toastCoreConfig.animationIn === ctx.appearanceAnimation.NONE && ctx.toastNotificationBelonging.toastCoreConfig.animationOut === ctx.disappearanceAnimation.NONE)("@boxAnimations", ctx.boxAnimation)("className", ctx.layoutHelper.getBoxClasses(ctx.toastNotificationBelonging.toastCoreConfig.layoutType, "evolve-toast"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toastNotificationBelonging.dispatch.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toastNotificationBelonging.dispatch.message);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.toastNotificationBelonging.buttons.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.toastNotificationBelonging.buttons.length && (ctx.toastNotificationBelonging.toastCoreConfig.declineLabel || ctx.toastNotificationBelonging.toastCoreConfig.confirmLabel));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.buttonsExist && ctx.toastNotificationBelonging.toastCoreConfig.progressBar !== 0);
    }
  },
  dependencies: [NgIf, NgStyle, NgClass, NgForOf],
  encapsulation: 2,
  data: {
    animation: [fadeInOut(), boxAnimations()]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationSimpleWrapperComponent, [{
    type: Component,
    args: [{
      selector: "app-toast-notification-simple-wrapper",
      animations: [fadeInOut(), boxAnimations()],
      providers: [LayoutHelperService],
      template: `<div
  class="toast-wrapper simple-toast"
  (dblclick)="onOverlayClicked($event)"
  [@fadeInOut]="{
    value: fadeInOutAnimation,
    params: {
      closeDelay: toastNotificationBelonging.toastCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'
    }
  }">
  <div
    [@.disabled]="
      toastNotificationBelonging.toastCoreConfig.animationIn === appearanceAnimation.NONE &&
      toastNotificationBelonging.toastCoreConfig.animationOut === disappearanceAnimation.NONE
    "
    [@boxAnimations]="boxAnimation"
    (mouseover)="mouseOver()"
    (mouseout)="mouseOut()"
    (click)="onToastClicked($event)"
    [className]="layoutHelper.getBoxClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'evolve-toast')">
    <div class="toast-title-content" #elTitleWrapper *ngIf="toastNotificationBelonging.dispatch.title">
      <div class="icon-section" *ngIf="!toastNotificationBelonging.toastCoreConfig.disableIcon">
        <span [className]="getIconClasses()"></span>
      </div>
      <div class="dont-break-out">
        <div class="text-wrapper dont-break-out">
          {{ toastNotificationBelonging.dispatch.title }}
          <span class="close-ico icon-times-circle" (click)="closeIcon()" *ngIf="!buttonsExist"></span>
        </div>
      </div>
    </div>

    <div class="content-holder toast-text" #elTextWrapper *ngIf="toastNotificationBelonging.dispatch.message">
      <div
        class="text-wrapper-section toast-inner-content"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.textPosition
        }"
        [ngClass]="{
          'only-message': !toastNotificationBelonging.dispatch.title
        }">
        <div class="dont-break-out">
          <div class="text-wrapper dont-break-out" *ngIf="!toastNotificationBelonging.toastCoreConfig.allowHtmlMessage">
            <p>{{ toastNotificationBelonging.dispatch.message }}</p>
          </div>
          <div
            class="text-wrapper"
            *ngIf="toastNotificationBelonging.toastCoreConfig.allowHtmlMessage"
            [innerHTML]="toastNotificationBelonging.dispatch.message"></div>
        </div>
      </div>
      <span
        class="close-ico icon-times-circle"
        (click)="closeIcon()"
        *ngIf="buttonsExist && !toastNotificationBelonging.dispatch.title"></span>
    </div>

    <div class="button-holder" #elButtonWrapper>
      <div
        class="button-section"
        *ngIf="toastNotificationBelonging.buttons.length"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition
        }">
        <button
          #elButton
          *ngFor="let button of toastNotificationBelonging.buttons"
          (click)="onCustomButton(button)"
          [disabled]="button.disabled"
          [style.display]="button.hidden ? 'none' : 'inline'"
          [className]="layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-sm')">
          {{ button.label }}
        </button>
      </div>

      <div
        class="button-section"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition
        }"
        *ngIf="
          !toastNotificationBelonging.buttons.length &&
          (toastNotificationBelonging.toastCoreConfig.declineLabel || toastNotificationBelonging.toastCoreConfig.confirmLabel)
        ">
        <button
          *ngIf="toastNotificationBelonging.toastCoreConfig.confirmLabel"
          (click)="onButtonClick('confirm')"
          [className]="
            layoutHelper.getButtonClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'ed-btn ed-btn-sm', 'auto-button')
          ">
          {{ toastNotificationBelonging.toastCoreConfig.confirmLabel }}
        </button>
        <button
          class="ed-btn ed-btn-sm ed-btn-secondary"
          (click)="onButtonClick('decline')"
          *ngIf="toastNotificationBelonging.toastCoreConfig.declineLabel">
          {{ toastNotificationBelonging.toastCoreConfig.declineLabel }}
        </button>
      </div>
    </div>

    <div class="progress-bar-container" *ngIf="!buttonsExist && toastNotificationBelonging.toastCoreConfig.progressBar !== 0">
      <div
        class="progress-bar"
        [ngStyle]="{
          width: (toastNotificationBelonging.toastCoreConfig.progressBar === 1 ? timer.Progress : timer.Remaining) + '%'
        }"></div>
    </div>
  </div>
</div>
`
    }]
  }], function() {
    return [{
      type: ToastNotificationBelonging,
      decorators: [{
        type: Inject,
        args: ["toastNotificationBelonging"]
      }]
    }, {
      type: GlobalConfigService
    }, {
      type: ChangeDetectorRef
    }, {
      type: LayoutHelperService
    }];
  }, null);
})();
var ToastNotificationWrapperComponent = class extends WrapperAbstraction {
  constructor(toastNotificationBelonging, gConfig, cd, layoutHelper) {
    super(toastNotificationBelonging, layoutHelper);
    this.toastNotificationBelonging = toastNotificationBelonging;
    this.gConfig = gConfig;
    this.cd = cd;
    this.layoutHelper = layoutHelper;
  }
  ngAfterViewInit() {
    this.setResponse(false);
    this.cd.detectChanges();
    this.autoClose();
    this.setCustomStyles();
  }
};
ToastNotificationWrapperComponent.\u0275fac = function ToastNotificationWrapperComponent_Factory(t) {
  return new (t || ToastNotificationWrapperComponent)(\u0275\u0275directiveInject("toastNotificationBelonging"), \u0275\u0275directiveInject(GlobalConfigService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(LayoutHelperService));
};
ToastNotificationWrapperComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: ToastNotificationWrapperComponent,
  selectors: [["app-toast-notification-wrapper"]],
  features: [\u0275\u0275ProvidersFeature([LayoutHelperService]), \u0275\u0275InheritDefinitionFeature],
  decls: 9,
  vars: 14,
  consts: [[1, "toast-wrapper", "standard-toast", 3, "dblclick"], [3, "className", "mouseover", "mouseout", "click"], ["class", "toast-title-content", 4, "ngIf"], ["class", "content-holder toast-text", 4, "ngIf"], [1, "button-holder"], ["elButtonWrapper", ""], ["class", "button-section", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar-container", 4, "ngIf"], [1, "toast-title-content"], ["elTitleWrapper", ""], [1, "dont-break-out"], [1, "text-wrapper", "dont-break-out"], ["class", "close-ico icon-times-circle", 3, "click", 4, "ngIf"], [1, "close-ico", "icon-times-circle", 3, "click"], [1, "content-holder", "toast-text"], ["elTextWrapper", ""], ["class", "icon-section", 4, "ngIf"], [1, "text-wrapper-section", "toast-inner-content", 3, "ngStyle", "ngClass"], ["class", "text-wrapper dont-break-out", 4, "ngIf"], ["class", "text-wrapper", 3, "innerHTML", 4, "ngIf"], [1, "icon-section"], [3, "className"], [1, "text-wrapper", 3, "innerHTML"], [1, "button-section", 3, "ngStyle"], [3, "disabled", "display", "className", "click", 4, "ngFor", "ngForOf"], [3, "disabled", "className", "click"], ["elButton", ""], [3, "className", "click", 4, "ngIf"], ["class", "ed-btn ed-btn-sm ed-btn-secondary", 3, "click", 4, "ngIf"], [3, "className", "click"], [1, "ed-btn", "ed-btn-sm", "ed-btn-secondary", 3, "click"], [1, "progress-bar-container"], [1, "progress-bar", 3, "ngStyle"]],
  template: function ToastNotificationWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("dblclick", function ToastNotificationWrapperComponent_Template_div_dblclick_0_listener($event) {
        return ctx.onOverlayClicked($event);
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("mouseover", function ToastNotificationWrapperComponent_Template_div_mouseover_1_listener() {
        return ctx.mouseOver();
      })("mouseout", function ToastNotificationWrapperComponent_Template_div_mouseout_1_listener() {
        return ctx.mouseOut();
      })("click", function ToastNotificationWrapperComponent_Template_div_click_1_listener($event) {
        return ctx.onToastClicked($event);
      });
      \u0275\u0275template(2, ToastNotificationWrapperComponent_div_2_Template, 6, 2, "div", 2)(3, ToastNotificationWrapperComponent_div_3_Template, 8, 10, "div", 3);
      \u0275\u0275elementStart(4, "div", 4, 5);
      \u0275\u0275template(6, ToastNotificationWrapperComponent_div_6_Template, 2, 4, "div", 6)(7, ToastNotificationWrapperComponent_div_7_Template, 3, 5, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ToastNotificationWrapperComponent_div_8_Template, 2, 3, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeInOut", \u0275\u0275pureFunction2(11, _c7, ctx.fadeInOutAnimation, \u0275\u0275pureFunction1(9, _c6, ctx.toastNotificationBelonging.toastCoreConfig.animationOut === ctx.disappearanceAnimation.NONE ? "200ms" : "300ms")));
      \u0275\u0275advance();
      \u0275\u0275property("@.disabled", ctx.toastNotificationBelonging.toastCoreConfig.animationIn === ctx.appearanceAnimation.NONE && ctx.toastNotificationBelonging.toastCoreConfig.animationOut === ctx.disappearanceAnimation.NONE)("@boxAnimations", ctx.boxAnimation)("className", ctx.layoutHelper.getBoxClasses(ctx.toastNotificationBelonging.toastCoreConfig.layoutType, "evolve-toast"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toastNotificationBelonging.dispatch.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toastNotificationBelonging.dispatch.message);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.toastNotificationBelonging.buttons.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.toastNotificationBelonging.buttons.length && (ctx.toastNotificationBelonging.toastCoreConfig.declineLabel || ctx.toastNotificationBelonging.toastCoreConfig.confirmLabel));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.buttonsExist && ctx.toastNotificationBelonging.toastCoreConfig.progressBar !== 0);
    }
  },
  dependencies: [NgIf, NgStyle, NgClass, NgForOf],
  encapsulation: 2,
  data: {
    animation: [fadeInOut(), boxAnimations()]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationWrapperComponent, [{
    type: Component,
    args: [{
      selector: "app-toast-notification-wrapper",
      animations: [fadeInOut(), boxAnimations()],
      providers: [LayoutHelperService],
      template: `<div
  class="toast-wrapper standard-toast"
  (dblclick)="onOverlayClicked($event)"
  [@fadeInOut]="{
    value: fadeInOutAnimation,
    params: {
      closeDelay: toastNotificationBelonging.toastCoreConfig.animationOut === disappearanceAnimation.NONE ? '200ms' : '300ms'
    }
  }">
  <div
    [@.disabled]="
      toastNotificationBelonging.toastCoreConfig.animationIn === appearanceAnimation.NONE &&
      toastNotificationBelonging.toastCoreConfig.animationOut === disappearanceAnimation.NONE
    "
    [@boxAnimations]="boxAnimation"
    (mouseover)="mouseOver()"
    (mouseout)="mouseOut()"
    (click)="onToastClicked($event)"
    [className]="layoutHelper.getBoxClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'evolve-toast')">
    <div class="toast-title-content" #elTitleWrapper *ngIf="toastNotificationBelonging.dispatch.title">
      <div class="dont-break-out">
        <div class="text-wrapper dont-break-out">
          {{ toastNotificationBelonging.dispatch.title }}
          <span class="close-ico icon-times-circle" (click)="closeIcon()" *ngIf="!buttonsExist"></span>
        </div>
      </div>
    </div>

    <div class="content-holder toast-text" #elTextWrapper *ngIf="toastNotificationBelonging.dispatch.message">
      <div class="icon-section" *ngIf="!toastNotificationBelonging.toastCoreConfig.disableIcon">
        <span [className]="getIconClasses()"></span>
      </div>
      <div
        class="text-wrapper-section toast-inner-content"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.textPosition
        }"
        [ngClass]="{
          'only-message': !toastNotificationBelonging.dispatch.title
        }">
        <div class="dont-break-out">
          <div class="text-wrapper dont-break-out" *ngIf="!toastNotificationBelonging.toastCoreConfig.allowHtmlMessage">
            <p>{{ toastNotificationBelonging.dispatch.message }}</p>
          </div>
          <div
            class="text-wrapper"
            *ngIf="toastNotificationBelonging.toastCoreConfig.allowHtmlMessage"
            [innerHTML]="toastNotificationBelonging.dispatch.message"></div>
        </div>
      </div>
      <span
        class="close-ico icon-times-circle"
        (click)="closeIcon()"
        *ngIf="buttonsExist && !toastNotificationBelonging.dispatch.title"></span>
    </div>

    <div class="button-holder" #elButtonWrapper>
      <div
        class="button-section"
        *ngIf="toastNotificationBelonging.buttons.length"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition
        }">
        <button
          #elButton
          *ngFor="let button of toastNotificationBelonging.buttons"
          [disabled]="button.disabled"
          [style.display]="button.hidden ? 'none' : 'inline'"
          (click)="onCustomButton(button)"
          [className]="layoutHelper.getButtonClasses(button.layoutType, 'ed-btn ed-btn-sm')">
          {{ button.label }}
        </button>
      </div>

      <div
        class="button-section"
        [ngStyle]="{
          'text-align': toastNotificationBelonging.toastCoreConfig.buttonPosition
        }"
        *ngIf="
          !toastNotificationBelonging.buttons.length &&
          (toastNotificationBelonging.toastCoreConfig.declineLabel || toastNotificationBelonging.toastCoreConfig.confirmLabel)
        ">
        <button
          #elButton
          *ngIf="toastNotificationBelonging.toastCoreConfig.confirmLabel"
          (click)="onButtonClick('confirm')"
          [className]="
            layoutHelper.getButtonClasses(toastNotificationBelonging.toastCoreConfig.layoutType, 'ed-btn ed-btn-sm', 'auto-button')
          ">
          {{ toastNotificationBelonging.toastCoreConfig.confirmLabel }}
        </button>
        <button
          class="ed-btn ed-btn-sm ed-btn-secondary"
          #elButton
          (click)="onButtonClick('decline')"
          *ngIf="toastNotificationBelonging.toastCoreConfig.declineLabel">
          {{ toastNotificationBelonging.toastCoreConfig.declineLabel }}
        </button>
      </div>
    </div>

    <div class="progress-bar-container" *ngIf="!buttonsExist && toastNotificationBelonging.toastCoreConfig.progressBar !== 0">
      <div
        class="progress-bar"
        [ngStyle]="{
          width: (toastNotificationBelonging.toastCoreConfig.progressBar === 1 ? timer.Progress : timer.Remaining) + '%'
        }"></div>
    </div>
  </div>
</div>
`
    }]
  }], function() {
    return [{
      type: ToastNotificationBelonging,
      decorators: [{
        type: Inject,
        args: ["toastNotificationBelonging"]
      }]
    }, {
      type: GlobalConfigService
    }, {
      type: ChangeDetectorRef
    }, {
      type: LayoutHelperService
    }];
  }, null);
})();
var ToastNotificationService = class {
  constructor(componentFactoryResolver, injector, appRef, toastConfig, gConfigService) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.appRef = appRef;
    this.toastConfig = toastConfig;
    this.gConfigService = gConfigService;
    this.toastComponentRefList = [];
    this.bufferToastRawList = [];
    this.bufferCheckingIntervalIsReady = true;
  }
  openToast$(_ToastNotificationBelonging) {
    const eventController = _ToastNotificationBelonging.eventsController;
    const toastRawInstance = this.prepareRawToast(eventController, _ToastNotificationBelonging);
    this.listeners(eventController);
    this.internalRouting(toastRawInstance);
    return eventController.afterClosed$;
  }
  internalRouting(_ToastRawInstance) {
    if (this.isRefListAvailable()) {
      this.sendToProduction(_ToastRawInstance);
      return true;
    } else {
      this.sendToBuffer(_ToastRawInstance);
      return false;
    }
  }
  sendToBuffer(_ToastRawInstance) {
    this.bufferToastRawList.push(_ToastRawInstance);
  }
  sendToProduction(_ToastRawInstance) {
    const componentRef = this.getComponentRef(_ToastRawInstance);
    if (componentRef) {
      this.toastComponentRefList.push(componentRef);
      componentRef.instance.toastNotificationBelonging = _ToastRawInstance.toastBelonging;
      this.appendToBodyParentComponent(componentRef);
    }
  }
  isRefListAvailable() {
    return this.toastComponentRefList.length < this.toastConfig.productionConfig.globalSettings.allowedNotificationsAtOnce;
  }
  prepareRawToast(_eventsController, _ToastNotificationBelonging) {
    const weakMap = /* @__PURE__ */ new WeakMap();
    weakMap.set(ToastNotificationeventsController, _eventsController);
    return {
      weakMap,
      toastBelonging: _ToastNotificationBelonging
    };
  }
  getComponentRef(_ToastNotificationRawState) {
    const dialogIndex = this.findDialogIndex(_ToastNotificationRawState.toastBelonging.entityUniqueID);
    if (dialogIndex === -1) {
      let toastUserViewComponent = ToastNotificationWrapperComponent;
      if (_ToastNotificationRawState.toastBelonging.toastCoreConfig.toastUserViewType === ToastUserViewTypeEnum.SIMPLE) {
        toastUserViewComponent = ToastNotificationSimpleWrapperComponent;
      }
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(toastUserViewComponent);
      return componentFactory.create(new DialogInjector(this.injector, _ToastNotificationRawState.weakMap));
    }
    return null;
  }
  listeners(_eventsController) {
    const closeDialogSubscription = _eventsController.afterClosed$.subscribe((response) => {
      this.removeFromBody(response.toastNotificationBelonging.entityUniqueID);
      closeDialogSubscription.unsubscribe();
    });
  }
  appendToBodyParentComponent(_ComponentRef) {
    this.appRef.attachView(_ComponentRef.hostView);
    const toastPosition = _ComponentRef.instance.toastNotificationBelonging.toastCoreConfig.toastPosition;
    const openInElementID = _ComponentRef.instance.toastNotificationBelonging.toastCoreConfig.openInElementID;
    let targetNode;
    if (!openInElementID) {
      this.setToastWrapperNode(_ComponentRef.instance.toastNotificationBelonging.toastCoreConfig.toastPosition, this.setToastOverlayNode());
      targetNode = document.getElementById(`toast-wrapper-${toastPosition}`);
    } else {
      targetNode = document.getElementById(openInElementID);
    }
    const domElem = _ComponentRef.hostView.rootNodes[0];
    const toastEntity = document.createElement("div");
    toastEntity.setAttribute("id", _ComponentRef.instance.toastNotificationBelonging.entityUniqueID);
    toastEntity.className = "toast-entity";
    const split = toastPosition.split("-");
    if (split[1] === "fullwidth") {
      toastEntity.style.width = "93vw";
    } else if (openInElementID) {
      toastEntity.style.width = "100%";
    } else {
      toastEntity.style.width = "300px";
    }
    toastEntity.style.margin = "auto";
    toastEntity.prepend(domElem);
    targetNode.prepend(toastEntity);
  }
  removeFromBody(_entityUniqueID) {
    const modalIndex = this.findDialogIndex(_entityUniqueID);
    if (modalIndex > -1) {
      if (this.bufferToastRawList.length) {
        this.sendToProduction(this.bufferToastRawList[0]);
        this.bufferToastRawList.splice(0, 1);
      }
      this.toastComponentRefList[modalIndex].instance.closeParent$().pipe(tap((item) => {
        const modalIndex2 = this.findDialogIndex(_entityUniqueID);
        if (this.toastComponentRefList[modalIndex2]) {
          const toastEntity = document.getElementById(this.toastComponentRefList[modalIndex2].instance.toastNotificationBelonging.entityUniqueID);
          toastEntity.remove();
          this.appRef.detachView(this.toastComponentRefList[modalIndex2].hostView);
          this.toastComponentRefList[modalIndex2].destroy();
          this.toastComponentRefList.splice(modalIndex2, 1);
        }
      }), take(1)).subscribe();
    }
  }
  findDialogIndex(_DialogUniqueID) {
    return this.toastComponentRefList.findIndex((item) => {
      return _DialogUniqueID === item.instance.toastNotificationBelonging.entityUniqueID;
    });
  }
  setToastOverlayNode() {
    const bodyNode = document.body || document.getElementsByTagName("body")[0];
    if (!bodyNode) {
      return;
    }
    const toastOverlayNode = document.getElementById("toast-overlay-container");
    if (!toastOverlayNode) {
      const toastOverlayNode2 = document.createElement("div");
      toastOverlayNode2.setAttribute("id", "toast-overlay-container");
      toastOverlayNode2.appendChild(document.createTextNode(""));
      toastOverlayNode2.style.position = "fixed";
      toastOverlayNode2.style.top = "0";
      toastOverlayNode2.style.left = "0";
      toastOverlayNode2.style.zIndex = "999999999999";
      bodyNode.appendChild(toastOverlayNode2);
      return toastOverlayNode2;
    }
    return toastOverlayNode;
  }
  setToastWrapperNode(_Position, _ToastOverlayNode) {
    const toastWrapperNode = document.getElementById(`toast-wrapper-${_Position}`);
    if (!toastWrapperNode) {
      const toastWrapper = document.createElement("div");
      toastWrapper.setAttribute("id", "toast-wrapper-" + _Position);
      toastWrapper.appendChild(document.createTextNode(""));
      _ToastOverlayNode.prepend(toastWrapper);
      const split = _Position.split("-");
      if (split[1] === "right" || split[1] === "left") {
        this.gConfigService.getSheet("ngx-awesome-popup-styles").addRule(`#toast-wrapper-${_Position}`, `${split[0]}: 20px; ${split[1]}: 20px; position: fixed; z-index: 999999999;`);
      }
      if (split[1] === "center") {
        this.gConfigService.getSheet("ngx-awesome-popup-styles").addRule(`#toast-wrapper-${_Position}`, `${split[0]}: 20px; width: 100%; position: fixed; z-index: 999999999; pointer-events: none;`);
      }
      if (split[1] === "fullwidth") {
        this.gConfigService.getSheet("ngx-awesome-popup-styles").addRule(`#toast-wrapper-${_Position}`, `${split[0]}: 10px; width: 100%; position: fixed; z-index: 999999999; pointer-events: none;`);
      }
    }
  }
};
ToastNotificationService.\u0275fac = function ToastNotificationService_Factory(t) {
  return new (t || ToastNotificationService)(\u0275\u0275inject(ComponentFactoryResolver$1), \u0275\u0275inject(Injector), \u0275\u0275inject(ApplicationRef), \u0275\u0275inject(ToastNotificationConfigService), \u0275\u0275inject(GlobalConfigService));
};
ToastNotificationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: ToastNotificationService,
  factory: ToastNotificationService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ApplicationRef
    }, {
      type: ToastNotificationConfigService
    }, {
      type: GlobalConfigService
    }];
  }, null);
})();
var ToastNotificationInitializer = class {
  constructor() {
    this.toastNotificationCarrier = new ToastNotificationCarrier();
  }
  openToastNotification$() {
    return this.toastNotificationCarrier.openToastNotification$().pipe(map((resp) => {
      const basicToastNotificationResponse = new ToastNotificationResponse();
      const dataControl = new DataControl();
      dataControl.copyValuesFrom(resp, basicToastNotificationResponse);
      return basicToastNotificationResponse;
    }), take(1));
  }
  setButtons(_Buttons) {
    this.toastNotificationCarrier.setButtons(_Buttons);
  }
  setConfig(_ToastNotificationConfig) {
    this.toastNotificationCarrier.setConfig(_ToastNotificationConfig);
  }
  setDispatch(_Title, _Message = null) {
    this.toastNotificationCarrier.setTitle(_Title);
    this.toastNotificationCarrier.setMessage(_Message);
  }
  setTitle(_Title) {
    this.toastNotificationCarrier.setTitle(_Title);
  }
  setMessage(_Message) {
    this.toastNotificationCarrier.setMessage(_Message);
  }
  setButtonLabels(_Confirm, _Decline) {
    this.toastNotificationCarrier.setButtonLabels(_Confirm, _Decline);
  }
};
var ToastNotificationResponse = class extends DataControl {
  constructor() {
    super();
    this.success = null;
    this.clickedButtonID = null;
  }
  setSuccess(_IsSuccess) {
    this.success = _IsSuccess;
  }
  setClickedButtonID(_ClickedButtonID) {
    this.clickedButtonID = _ClickedButtonID;
  }
};
var ToastNotificationeventsController = class {
  constructor(entityUniqueID) {
    this.entityUniqueID = entityUniqueID;
    this._onButtonClick = new Subject();
    this._afterClosed = new Subject();
    this._buttonList = new Subject();
    this.afterClosed$ = this._afterClosed.asObservable();
    this.onButtonClick$ = this._onButtonClick.asObservable();
    this.buttonList$ = this._buttonList.asObservable();
  }
  close(_Response) {
    const response = _Response ? _Response : this.defaultResponse;
    this._afterClosed.next(response);
  }
  onButtonClick(_Button) {
    this.defaultResponse.setClickedButtonID(_Button.ID);
    this._onButtonClick.next(_Button);
  }
  setButtonList(_ButtonList) {
    this._buttonList.next(_ButtonList);
  }
  setDefaultResponse(_Response) {
    this.defaultResponse = _Response;
  }
};
var ToastNotificationDefaultResponse = class extends ToastNotificationResponse {
  constructor() {
    super();
    this.toastNotificationBelonging = null;
  }
  setBelonging(_ToastNotificationBelonging) {
    this.toastNotificationBelonging = _ToastNotificationBelonging;
  }
};
var ToastNotificationCarrier = class {
  constructor() {
    this.toastNotificationBelonging = new ToastNotificationBelonging();
  }
  setButtons(_Buttons) {
    if (_Buttons.length) {
      this.toastNotificationBelonging.buttons = _Buttons;
    }
  }
  setTitle(_Title) {
    this.toastNotificationBelonging.dispatch.title = _Title;
  }
  setMessage(_Message) {
    this.toastNotificationBelonging.dispatch.message = _Message;
  }
  setButtonLabels(_Confirm, _Decline) {
    this.toastNotificationBelonging.toastCoreConfig.confirmLabel = _Confirm;
    this.toastNotificationBelonging.toastCoreConfig.declineLabel = _Decline;
  }
  setConfig(_ToastNotificationBelonging) {
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(_ToastNotificationBelonging, this.toastNotificationBelonging.toastCoreConfig);
  }
  openToastNotification$() {
    if (!this.toastNotificationBelonging.dispatch.title && !this.toastNotificationBelonging.dispatch.message) {
      throw Error("Toast notification can not be without both message and title.");
    }
    const service = ServiceLocator.injector.get(ToastNotificationService);
    return service.openToast$(this.toastNotificationBelonging);
  }
};
var GlobalToastSettings = class {
  constructor() {
    this.allowedNotificationsAtOnce = null;
  }
};
var ToastSettings = class {
  constructor() {
    this.buttons = [];
    this.toastCoreConfig = new toastCoreConfig();
    this.dispatch = new dispatch();
    this.globalSettings = new GlobalToastSettings();
  }
};
var ToastCustomStyles = class {
  constructor() {
    this.titleCSS = null;
    this.textCSS = null;
    this.buttonSectionCSS = null;
    this.buttonCSS = null;
  }
};
var toastCoreConfig = class {
  constructor() {
    this.toastPosition = null;
    this.progressBar = null;
    this.toastUserViewType = null;
    this.openInElementID = null;
    this.buttonPosition = null;
    this.textPosition = null;
    this.layoutType = null;
    this.dispatch = null;
    this.confirmLabel = null;
    this.declineLabel = null;
    this.autoCloseDelay = null;
    this.disableIcon = null;
    this.allowHtmlMessage = null;
    this.animationIn = null;
    this.animationOut = null;
    this.customStyles = new ToastCustomStyles();
    this.iconStyleClass = null;
  }
};
var ToastNotificationBelonging = class extends ToastSettings {
  constructor() {
    super();
    this.entityUniqueID = "T" + Math.random().toString(36).substr(2, 9);
    this.eventsController = new ToastNotificationeventsController(this.entityUniqueID);
    const toastNotificationConfigurator = ServiceLocator.injector.get(ToastNotificationConfigService);
    const baseSettings = new ToastSettings();
    const dataControl = new DataControl();
    dataControl.copyValuesFrom(toastNotificationConfigurator.productionConfig.toastCoreConfig, baseSettings.toastCoreConfig);
    this.toastCoreConfig = baseSettings.toastCoreConfig;
    this.buttons = toastNotificationConfigurator.productionConfig.buttons.slice();
  }
};
var NgxAwesomePopupModule = class _NgxAwesomePopupModule {
  constructor(injector) {
    this.injector = injector;
    ServiceLocator.injector = injector;
  }
  static forRoot(globalConfig) {
    return {
      ngModule: _NgxAwesomePopupModule,
      providers: [{
        provide: "cdGlobalConfig",
        useValue: globalConfig
      }]
    };
  }
};
NgxAwesomePopupModule.\u0275fac = function NgxAwesomePopupModule_Factory(t) {
  return new (t || NgxAwesomePopupModule)(\u0275\u0275inject(Injector));
};
NgxAwesomePopupModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxAwesomePopupModule
});
NgxAwesomePopupModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [GlobalConfigService],
  imports: [[CommonModule, BrowserModule, BrowserAnimationsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxAwesomePopupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
      providers: [GlobalConfigService]
    }]
  }], function() {
    return [{
      type: Injector
    }];
  }, null);
})();
var DialogConfigModule = class _DialogConfigModule {
  static forRoot(dialogConfig) {
    return {
      ngModule: _DialogConfigModule,
      providers: [{
        provide: "dialogConfig",
        useValue: dialogConfig
      }, {
        provide: "dialogBelonging",
        useClass: DialogBelonging
      }]
    };
  }
};
DialogConfigModule.\u0275fac = function DialogConfigModule_Factory(t) {
  return new (t || DialogConfigModule)();
};
DialogConfigModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: DialogConfigModule
});
DialogConfigModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [DialogService, DialogConfigService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogConfigModule, [{
    type: NgModule,
    args: [{
      declarations: [DialogWrapperComponent, DefaultLoaderComponent, InsertionDirective, InsertionLoaderDirective],
      imports: [CommonModule],
      providers: [DialogService, DialogConfigService],
      entryComponents: [DialogWrapperComponent, DefaultLoaderComponent]
    }]
  }], null, null);
})();
var ConfirmBoxConfigModule = class _ConfirmBoxConfigModule {
  static forRoot(confirmBoxConfig) {
    return {
      ngModule: _ConfirmBoxConfigModule,
      providers: [{
        provide: "confirmBoxConfig",
        useValue: confirmBoxConfig
      }, {
        provide: "confirmBoxBelonging",
        useClass: ConfirmBoxBelonging
      }]
    };
  }
};
ConfirmBoxConfigModule.\u0275fac = function ConfirmBoxConfigModule_Factory(t) {
  return new (t || ConfirmBoxConfigModule)();
};
ConfirmBoxConfigModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: ConfirmBoxConfigModule
});
ConfirmBoxConfigModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [ConfirmBoxService, ConfirmBoxConfigService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxConfigModule, [{
    type: NgModule,
    args: [{
      declarations: [ConfirmBoxWrapperComponent],
      imports: [CommonModule],
      providers: [ConfirmBoxService, ConfirmBoxConfigService],
      entryComponents: [ConfirmBoxWrapperComponent]
    }]
  }], null, null);
})();
var ToastNotificationConfigModule = class _ToastNotificationConfigModule {
  static forRoot(toastNotificationConfig) {
    return {
      ngModule: _ToastNotificationConfigModule,
      providers: [{
        provide: "toastNotificationConfig",
        useValue: toastNotificationConfig
      }, {
        provide: "toastNotificationBelonging",
        useClass: ToastNotificationBelonging
      }]
    };
  }
};
ToastNotificationConfigModule.\u0275fac = function ToastNotificationConfigModule_Factory(t) {
  return new (t || ToastNotificationConfigModule)();
};
ToastNotificationConfigModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: ToastNotificationConfigModule
});
ToastNotificationConfigModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [ToastNotificationService, ToastNotificationConfigService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastNotificationConfigModule, [{
    type: NgModule,
    args: [{
      declarations: [ToastNotificationWrapperComponent, ToastNotificationSimpleWrapperComponent],
      imports: [CommonModule],
      providers: [ToastNotificationService, ToastNotificationConfigService],
      entryComponents: [ToastNotificationWrapperComponent, ToastNotificationSimpleWrapperComponent]
    }]
  }], null, null);
})();
var _ConfirmBoxEvokeService_instances;
var _ConfirmBoxEvokeService_extender;
var ConfirmBoxEvokeService = class {
  constructor() {
    _ConfirmBoxEvokeService_instances.add(this);
  }
  success(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.SUCCESS
    });
    return confirmBox.openConfirmBox$();
  }
  info(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.INFO
    });
    return confirmBox.openConfirmBox$();
  }
  warning(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.WARNING
    });
    return confirmBox.openConfirmBox$();
  }
  danger(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER
    });
    return confirmBox.openConfirmBox$();
  }
  customOne(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_ONE
    });
    return confirmBox.openConfirmBox$();
  }
  customTwo(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_TWO
    });
    return confirmBox.openConfirmBox$();
  }
  customThree(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_THREE
    });
    return confirmBox.openConfirmBox$();
  }
  customFour(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_FOUR
    });
    return confirmBox.openConfirmBox$();
  }
  customFive(title, message, confirmLabel, declineLabel) {
    const confirmBox = __classPrivateFieldGet(this, _ConfirmBoxEvokeService_instances, "m", _ConfirmBoxEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    confirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_FIVE
    });
    return confirmBox.openConfirmBox$();
  }
};
_ConfirmBoxEvokeService_instances = /* @__PURE__ */ new WeakSet(), _ConfirmBoxEvokeService_extender = function _ConfirmBoxEvokeService_extender2(title, message, confirmLabel, declineLabel) {
  const confirmBox = new ConfirmBoxInitializer();
  confirmBox.setTitle(title);
  confirmBox.setMessage(message);
  confirmBox.setButtonLabels(confirmLabel, declineLabel);
  return confirmBox;
};
ConfirmBoxEvokeService.\u0275fac = function ConfirmBoxEvokeService_Factory(t) {
  return new (t || ConfirmBoxEvokeService)();
};
ConfirmBoxEvokeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: ConfirmBoxEvokeService,
  factory: ConfirmBoxEvokeService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmBoxEvokeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ToastEvokeService_instances;
var _ToastEvokeService_extender;
var ToastEvokeService = class {
  constructor() {
    _ToastEvokeService_instances.add(this);
  }
  success(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.SUCCESS
    });
    return toast.openToastNotification$();
  }
  info(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.INFO
    });
    return toast.openToastNotification$();
  }
  warning(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.WARNING
    });
    return toast.openToastNotification$();
  }
  danger(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.DANGER
    });
    return toast.openToastNotification$();
  }
  customOne(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_ONE
    });
    return toast.openToastNotification$();
  }
  customTwo(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_TWO
    });
    return toast.openToastNotification$();
  }
  customThree(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_THREE
    });
    return toast.openToastNotification$();
  }
  customFour(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_FOUR
    });
    return toast.openToastNotification$();
  }
  customFive(title, message, confirmLabel, declineLabel) {
    const toast = __classPrivateFieldGet(this, _ToastEvokeService_instances, "m", _ToastEvokeService_extender).call(this, title, message, confirmLabel, declineLabel);
    toast.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_FIVE
    });
    return toast.openToastNotification$();
  }
};
_ToastEvokeService_instances = /* @__PURE__ */ new WeakSet(), _ToastEvokeService_extender = function _ToastEvokeService_extender2(title, message, confirmLabel, declineLabel) {
  const toast = new ToastNotificationInitializer();
  toast.setTitle(title);
  toast.setMessage(message);
  toast.setButtonLabels(confirmLabel, declineLabel);
  return toast;
};
ToastEvokeService.\u0275fac = function ToastEvokeService_Factory(t) {
  return new (t || ToastEvokeService)();
};
ToastEvokeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: ToastEvokeService,
  factory: ToastEvokeService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastEvokeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/routing.service.ts
var _RoutingService = class _RoutingService {
  constructor(router) {
    this.router = router;
  }
  redirectTo(url) {
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => this.router.navigate([url]));
  }
};
_RoutingService.\u0275fac = function RoutingService_Factory(t) {
  return new (t || _RoutingService)(\u0275\u0275inject(Router));
};
_RoutingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoutingService, factory: _RoutingService.\u0275fac, providedIn: "root" });
var RoutingService = _RoutingService;

// src/app/my-pets/my-pets.component.ts
function MyPetsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function MyPetsComponent_ng_template_5_div_0_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "img", 10);
    \u0275\u0275elementStart(5, "div", 11)(6, "button", 12);
    \u0275\u0275text(7, "Zmie\u0144");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 13)(18, "button", 14);
    \u0275\u0275text(19, "Zobacz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "button", 16);
    \u0275\u0275text(22, "Edytuj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 15)(24, "button", 17);
    \u0275\u0275listener("click", function MyPetsComponent_ng_template_5_div_0_tr_20_Template_button_click_24_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r10);
      const pet_r7 = restoredCtx.$implicit;
      const ctx_r9 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r9.deletePetWindow(pet_r7.id, pet_r7.name));
    });
    \u0275\u0275text(25, "Usu\u0144");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pet_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", pet_r7.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("routerLink", "/my-pets/edit-photo/", pet_r7.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pet_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.species);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.race);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.size);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "/pets-to-adopt/", pet_r7.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "/my-pets/edit/", pet_r7.id, "");
  }
}
function MyPetsComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "table", 6)(3, "thead")(4, "tr")(5, "th", 7);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 7);
    \u0275\u0275text(8, "Zdj\u0119cie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 7);
    \u0275\u0275text(10, "Imi\u0119");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 7);
    \u0275\u0275text(12, "Gatunek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 7);
    \u0275\u0275text(14, "Rasa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 7);
    \u0275\u0275text(16, "Rozmiar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 7);
    \u0275\u0275text(18, "Akcja");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, MyPetsComponent_ng_template_5_div_0_tr_20_Template, 26, 9, "tr", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r5.pets);
  }
}
function MyPetsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyPetsComponent_ng_template_5_div_0_Template, 21, 1, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.pets.length > 0);
  }
}
function MyPetsComponent_ng_template_7_div_0_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "img", 18);
    \u0275\u0275elementStart(5, "div", 19)(6, "button", 20);
    \u0275\u0275text(7, "Zmie\u0144 zdj\u0119cie");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td")(9, "div", 13)(10, "button", 21);
    \u0275\u0275text(11, "Zobacz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 15)(13, "button", 22);
    \u0275\u0275text(14, "Edytuj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 15)(16, "button", 23);
    \u0275\u0275listener("click", function MyPetsComponent_ng_template_7_div_0_tr_20_Template_button_click_16_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r16);
      const pet_r13 = restoredCtx.$implicit;
      const ctx_r15 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r15.deletePetWindow(pet_r13.id, pet_r13.name));
    });
    \u0275\u0275text(17, "Usu\u0144");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pet_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r14 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", pet_r13.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("routerLink", "/my-pets/edit-photo/", pet_r13.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate1("routerLink", "/pets-to-adopt/", pet_r13.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "/my-pets/edit/", pet_r13.id, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(pet_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r13.species);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r13.race);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r13.size);
  }
}
function MyPetsComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "table", 6)(3, "thead")(4, "tr")(5, "th", 7);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 7);
    \u0275\u0275text(8, "Zdj\u0119cie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 7);
    \u0275\u0275text(10, "Akcja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 7);
    \u0275\u0275text(12, "Imi\u0119");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 7);
    \u0275\u0275text(14, "Gatunek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 7);
    \u0275\u0275text(16, "Rasa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 7);
    \u0275\u0275text(18, "Rozmiar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, MyPetsComponent_ng_template_7_div_0_tr_20_Template, 26, 9, "tr", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r11.pets);
  }
}
function MyPetsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyPetsComponent_ng_template_7_div_0_Template, 21, 1, "div", 4);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.pets.length > 0);
  }
}
var _MyPetsComponent = class _MyPetsComponent {
  constructor(routingService, spinnerService, breakPointService, apiPetsService) {
    this.routingService = routingService;
    this.spinnerService = spinnerService;
    this.breakPointService = breakPointService;
    this.apiPetsService = apiPetsService;
    this.isMobile = false;
    this.pets = [];
  }
  ngOnInit() {
    this.spinnerService.show();
    this.getMyPets();
    this.checkDeviceSize();
  }
  getMyPets() {
    this.apiPetsService.getMyPets().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleNewestPets(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  handleNewestPets(data) {
    this.pets = data;
  }
  deletePetWindow(petId, petName) {
    const newConfirmBox = new ConfirmBoxInitializer();
    newConfirmBox.setTitle("Usuwanie zwierz\u0119cia");
    newConfirmBox.setMessage("Czyn a pewno chcesz usun\u0105\u0107 zwierz\u0119 o imieniu " + petName + " ?");
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: "center"
    });
    newConfirmBox.setButtonLabels("Tak", "Nie");
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.deletePet(petId);
      }
    });
  }
  deletePet(petId) {
    this.spinnerService.show();
    this.apiPetsService.deletePet(petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError();
      }
    });
  }
  handleResponse() {
    alertify.success("Usun\u0105\u0142e\u015B zwierz\u0119");
    const url = "/my-pets";
    this.routingService.redirectTo(url);
  }
  handleError() {
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
};
_MyPetsComponent.\u0275fac = function MyPetsComponent_Factory(t) {
  return new (t || _MyPetsComponent)(\u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiPetsService));
};
_MyPetsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyPetsComponent, selectors: [["app-my-pets"]], decls: 9, vars: 3, consts: [[1, "app-background", "text-center", "text-light", "p-5"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], [4, "ngIf"], [1, "px-6", "app-background", "table-responsive"], [1, "table", "table-striped", "table-dark", "table-sm", "table-bordered", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "img-size-my-pet", 3, "src"], [1, "pt-2"], ["type", "button", 1, "btn", "btn-info", "p-2", 3, "routerLink"], [1, "text-center"], ["type", "button", 1, "btn", "btn-warning", 3, "routerLink"], [1, "text-center", "pt-2"], ["type", "button", 1, "btn", "btn-info", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "img-size-my-pet-mobile", 3, "src"], [1, "pt-1"], ["type", "button", 1, "btn", "btn-info", "p-1", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function MyPetsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "h2");
    \u0275\u0275text(3, " Twoje zwierz\u0119ta");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, MyPetsComponent_div_4_Template, 1, 0, "div", 1)(5, MyPetsComponent_ng_template_5_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, MyPetsComponent_ng_template_7_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(6);
    const _r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.isMobile)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=my-pets.component.css.map */"] });
var MyPetsComponent = _MyPetsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyPetsComponent, { className: "MyPetsComponent", filePath: "src\\app\\my-pets\\my-pets.component.ts", lineNumber: 20 });
})();

// src/app/pet-adopt-page/pet-adopt-page.component.ts
function PetAdoptPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function PetAdoptPageComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "h3")(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "div", 16)(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "span", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "span", 17);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 18);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r5.pet.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r5.pet.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r5.pet.species);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.pet.race);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.pet.size);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r5.pet.description, " ");
  }
}
function PetAdoptPageComponent_ng_template_5_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "button", 23);
    \u0275\u0275listener("click", function PetAdoptPageComponent_ng_template_5_div_1_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r8.savePet());
    });
    \u0275\u0275text(3);
    \u0275\u0275element(4, "fa-icon", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 25)(6, "button", 26);
    \u0275\u0275listener("click", function PetAdoptPageComponent_ng_template_5_div_1_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r10 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r10.createConversation());
    });
    \u0275\u0275text(7, " Wiadomo\u015B\u0107 ");
    \u0275\u0275element(8, "fa-icon", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r7.isPetSaved);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r7.currentButtonText, " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r7.faHeart);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r7.faEnvelope);
  }
}
function PetAdoptPageComponent_ng_template_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, PetAdoptPageComponent_ng_template_5_div_1_div_1_Template, 9, 4, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r6.isLoggedUserPet);
  }
}
function PetAdoptPageComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PetAdoptPageComponent_ng_template_5_div_0_Template, 21, 6, "div", 4)(1, PetAdoptPageComponent_ng_template_5_div_1_Template, 2, 1, "div", 5);
    \u0275\u0275elementStart(2, "div", 6)(3, "div", 7)(4, "button", 8);
    \u0275\u0275text(5, " Zwierz\u0119ta do adopcji ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.pet);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pet);
  }
}
function PetAdoptPageComponent_ng_template_7_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "button", 23);
    \u0275\u0275listener("click", function PetAdoptPageComponent_ng_template_7_div_0_div_20_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r13 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r13.savePet());
    });
    \u0275\u0275text(3);
    \u0275\u0275element(4, "fa-icon", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 39)(6, "button", 26);
    \u0275\u0275listener("click", function PetAdoptPageComponent_ng_template_7_div_0_div_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r15 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r15.createConversation());
    });
    \u0275\u0275text(7, " Wiadomo\u015B\u0107 ");
    \u0275\u0275element(8, "fa-icon", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r12.isPetSaved);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r12.currentButtonText, " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r12.faHeart);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r12.faEnvelope);
  }
}
function PetAdoptPageComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "h3")(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 33)(8, "div", 34)(9, "div", 16)(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 16)(13, "span", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 16)(16, "span", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 35);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, PetAdoptPageComponent_ng_template_7_div_0_div_20_Template, 9, 4, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r11.pet.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r11.pet.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r11.pet.species);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r11.pet.race);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r11.pet.size);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r11.pet.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r11.isLoggedUserPet);
  }
}
function PetAdoptPageComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PetAdoptPageComponent_ng_template_7_div_0_Template, 21, 7, "div", 27);
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 7)(3, "button", 8);
    \u0275\u0275text(4, " Zwierz\u0119ta do adopcji ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.pet);
  }
}
var _PetAdoptPageComponent = class _PetAdoptPageComponent {
  constructor(route, router, authService, spinnerService, breakPointService, apiPetsService, apiMessagessService) {
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.spinnerService = spinnerService;
    this.breakPointService = breakPointService;
    this.apiPetsService = apiPetsService;
    this.apiMessagessService = apiMessagessService;
    this.isMobile = false;
    this.isLoggedUserPet = false;
    this.isPetSaved = false;
    this.saveButtonText = "Zapisz";
    this.savedButtonText = "Zapisano";
    this.currentButtonText = "Zapisz";
    this.faHeart = faHeart;
    this.faEnvelope = faEnvelope;
  }
  ngOnInit() {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();
    this.getPetToAdopt();
    this.checkSavedPet();
    this.checkDeviceSize();
  }
  getPetToAdopt() {
    this.apiPetsService.getPetToAdopt(this.petId).subscribe({
      next: (data) => {
        this.handlePetToAdopt(data);
        console.log(data);
      }
    });
  }
  checkSavedPet() {
    this.apiPetsService.checkSavedPet(this.petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleSavedPet(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  handlePetToAdopt(data) {
    this.pet = data;
    this.checkLoggedUserPet();
  }
  handleSavedPet(data) {
    if (this.petId == data.pet_id) {
      this.isPetSaved = true;
      this.currentButtonText = this.savedButtonText;
    } else {
      this.isPetSaved = false;
      this.currentButtonText = this.saveButtonText;
    }
  }
  savePet() {
    this.spinnerService.show();
    this.apiPetsService.savePet(this.petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleSavePetSuccess(data);
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleSavePetError();
      }
    });
  }
  handleSavePetSuccess(data) {
    this.isPetSaved = true;
    this.currentButtonText = this.savedButtonText;
    alertify.success("Zapisano zwierz\u0119");
  }
  handleSavePetError() {
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  createConversation() {
    this.apiMessagessService.createConversation(this.pet).subscribe({
      next: (data) => {
        this.handleConversationSuccess(data);
      },
      error: (error) => {
        this.handleConversationError();
      }
    });
  }
  handleConversationSuccess(data) {
    const conversationId = data.id;
    this.router.navigate(["/messages/" + conversationId]);
  }
  handleConversationError() {
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  checkLoggedUserPet() {
    this.loggedUser = this.authService.getUser();
    if (this.loggedUser.id == this.pet.user_id) {
      this.isLoggedUserPet = true;
    } else {
      this.isLoggedUserPet = false;
    }
  }
};
_PetAdoptPageComponent.\u0275fac = function PetAdoptPageComponent_Factory(t) {
  return new (t || _PetAdoptPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiPetsService), \u0275\u0275directiveInject(ApiMessagesService));
};
_PetAdoptPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PetAdoptPageComponent, selectors: [["app-pet-adopt-page"]], decls: 9, vars: 3, consts: [[1, "app-background", "text-center", "text-light", "p-5"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], ["class", "mx-auto row px-7 app-background text-light justify-content-center pb-2 ", 4, "ngIf"], ["class", "mx-auto d-flex flex-row px-8 app-background text-light justify-content-start pb-2 ", 4, "ngIf"], [1, "app-background", "text-center", "text-light", "px-8", "pt-4"], [1, "pt-4", "border-top"], ["type", "button", "routerLink", "/pets-to-adopt", 1, "btn", "text-light", "btn-rounded", 2, "background-color", "#6a994e"], [1, "mx-auto", "row", "px-7", "app-background", "text-light", "justify-content-center", "pb-2"], [1, "col-auto", "p-2"], [1, "justify-content-center"], [1, "img-size-pet", 3, "src"], [1, "text-center", "text-warning", "p-2"], [1, "col-6", "ms-3"], [1, "mx-auto", "row", "justify-content-center", "pe-5"], [1, "col-auto", "p-1"], [1, "p-3", "badge", "bg-primary", "rounded-pill"], [1, "mx-auto", "row", "p-4", "justify-content-center"], [1, "mx-auto", "d-flex", "flex-row", "px-8", "app-background", "text-light", "justify-content-start", "pb-2"], ["class", "d-flex flex-grow-1 justify-content-center", 4, "ngIf"], [1, "d-flex", "flex-grow-1", "justify-content-center"], [1, "col-3", "ps-5", "text-center"], ["type", "button", 1, "btn", "btn-success", "btn-rounded", 3, "disabled", "click"], [3, "icon"], [1, "col-3", "ps-4", "text-center"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], ["class", "mx-auto row app-background text-light justify-content-center pb-2", 4, "ngIf"], [1, "app-background", "text-center", "text-light", "pt-4", "pb-4"], [1, "mx-auto", "row", "app-background", "text-light", "justify-content-center", "pb-2"], [1, "col-12", "p-2", "text-center"], [1, "img-size-pet-mobile", 3, "src"], [1, "justify-content-center", "text-center", "text-warning", "p-2"], [1, "col-12"], [1, "mx-auto", "row", "pt-3", "ps-5", "pe-5"], [1, "mx-auto", "col-12", "p-4", "justify-content-center"], ["class", "mx-auto d-flex flex-row justify-content-center", 4, "ngIf"], [1, "mx-auto", "d-flex", "flex-row", "justify-content-center"], [1, "d-line", "p-2", "text-center"], [1, "d-line", "pb-2", "pt-2", "pe-2", "text-center"]], template: function PetAdoptPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "h2");
    \u0275\u0275text(3, " Zwierz\u0119 do adopcji");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, PetAdoptPageComponent_div_4_Template, 1, 0, "div", 1)(5, PetAdoptPageComponent_ng_template_5_Template, 6, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, PetAdoptPageComponent_ng_template_7_Template, 5, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(6);
    const _r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.isMobile)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgIf, RouterLink, FaIconComponent, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=pet-adopt-page.component.css.map */"] });
var PetAdoptPageComponent = _PetAdoptPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PetAdoptPageComponent, { className: "PetAdoptPageComponent", filePath: "src\\app\\pet-adopt-page\\pet-adopt-page.component.ts", lineNumber: 17 });
})();

// src/app/edit-pet/edit-pet.component.ts
function EditPetComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Imi\u0119 jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function EditPetComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Gatunek jest wymagany");
    \u0275\u0275elementEnd();
  }
}
function EditPetComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Gatunek musi mie\u0107 minimalnie 3 znaki");
    \u0275\u0275elementEnd();
  }
}
function EditPetComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Rasa jest wymagana");
    \u0275\u0275elementEnd();
  }
}
function EditPetComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Rasa musi mie\u0107 minimalnie 3 znaki");
    \u0275\u0275elementEnd();
  }
}
var _EditPetComponent = class _EditPetComponent {
  constructor(formBuilder, router, route, spinnerService, apiPetsService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.spinnerService = spinnerService;
    this.apiPetsService = apiPetsService;
    this.hasSubmitted = false;
    this.userId = 1;
    this.error = [];
    this.editPetForm = this.formBuilder.group({
      id: [0, [Validators.required]],
      name: ["", [Validators.required]],
      species: ["", [Validators.required, Validators.minLength(3)]],
      race: ["", [Validators.required, Validators.minLength(3)]],
      size: ["Ma\u0142y", [Validators.required]],
      description: [""],
      userId: [this.userId, [Validators.required]]
    });
  }
  ngOnInit() {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();
    this.apiPetsService.getPetToEdit(this.petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handlePetToAdopt(data);
      }
    });
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];
    this.validateEditPetForm();
  }
  validateEditPetForm() {
    if (this.editPetForm.valid) {
      this.spinnerService.show();
      this.editPet();
    } else {
      console.log("Form is invalid");
    }
  }
  editPet() {
    this.apiPetsService.editPet(this.petId, this.getFormData()).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  handlePetToAdopt(data) {
    this.pet = data;
    this.editPetForm.patchValue({
      id: this.pet.id,
      name: this.pet.name,
      species: this.pet.species,
      race: this.pet.race,
      size: this.pet.size,
      description: this.pet.description,
      userId: this.userId
    });
  }
  handleResponse() {
    this.router.navigate(["/my-pets"]);
    alertify.success("Edytowano zwierz\u0119");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  getFormData() {
    const formData = this.editPetForm.getRawValue();
    return formData;
  }
  cancelEditing() {
    this.router.navigate(["/my-pets"]);
    alertify.warning("Anulowano edycj\u0119");
  }
};
_EditPetComponent.\u0275fac = function EditPetComponent_Factory(t) {
  return new (t || _EditPetComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(ApiPetsService));
};
_EditPetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPetComponent, selectors: [["app-edit-pet"]], decls: 42, vars: 6, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "p-4", "text-light", "text-center"], [1, "text-light"], [1, "form", 3, "formGroup", "ngSubmit"], ["for", "pet-name", 1, "form-label", "m-2"], ["type", "text", "id", "pet-name", "placeholder", "", "name", "pet-name", "formControlName", "name", 1, "form-control"], ["class", "text-danger p-1", 4, "ngIf"], ["for", "species", 1, "form-label", "m-2"], ["type", "text", "id", "species", "placeholder", "", "name", "species", "formControlName", "species", 1, "form-control"], ["for", "race", 1, "form-label", "m-2"], ["type", "text", "id", "race", "placeholder", "", "name", "race", "formControlName", "race", 1, "form-control"], [1, "mt-3", "ms-2"], ["for", "size", 1, "form-label"], ["type", "radio", "id", "small", "name", "size", "value", "Ma\u0142y", "formControlName", "size", "checked", "true", 1, "form-check-input", "m-2"], ["type", "radio", "id", "medium", "name", "size", "value", "\u015Aredni", "formControlName", "size", 1, "form-check-input", "m-2"], ["type", "radio", "id", "big", "name", "size", "value", "Du\u017Cy", "formControlName", "size", 1, "form-check-input", "m-2"], ["for", "description", 1, "form-label", "m-2"], ["id", "description", "rows", "3", "formControlName", "description", 1, "form-control"], [1, "d-flex", "flex-row", "justify-content-center", "p-4"], [1, "text-center", "me-2", "mt-4", "d-inline"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "text-center", "m-2", "mt-4", "d-inline"], ["type", "submit", 1, "btn", "btn-info"], [1, "text-danger", "p-1"]], template: function EditPetComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Edytuj zwierz\u0119");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5);
    \u0275\u0275listener("ngSubmit", function EditPetComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "label", 6);
    \u0275\u0275text(10, "Imi\u0119:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275template(12, EditPetComponent_div_12_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(13, "label", 9);
    \u0275\u0275text(14, "Gatunek:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 10);
    \u0275\u0275template(16, EditPetComponent_div_16_Template, 2, 0, "div", 8)(17, EditPetComponent_div_17_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(18, "label", 11);
    \u0275\u0275text(19, "Rasa:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 12);
    \u0275\u0275template(21, EditPetComponent_div_21_Template, 2, 0, "div", 8)(22, EditPetComponent_div_22_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(23, "div", 13)(24, "label", 14);
    \u0275\u0275text(25, "Rozmiar:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 15);
    \u0275\u0275text(27, "Ma\u0142y ");
    \u0275\u0275element(28, "input", 16);
    \u0275\u0275text(29, "\u015Aredni ");
    \u0275\u0275element(30, "input", 17);
    \u0275\u0275text(31, "Du\u017Cy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 18);
    \u0275\u0275text(33, "Opis:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 19);
    \u0275\u0275elementStart(35, "div", 20)(36, "div", 21)(37, "button", 22);
    \u0275\u0275listener("click", function EditPetComponent_Template_button_click_37_listener() {
      return ctx.cancelEditing();
    });
    \u0275\u0275text(38, "Anuluj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 23)(40, "button", 24);
    \u0275\u0275text(41, "Edytuj");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.editPetForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.editPetForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && (((tmp_1_0 = ctx.editPetForm.get("name")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.editPetForm.get("name")) == null ? null : tmp_1_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.editPetForm.get("species")) == null ? null : tmp_2_0.hasError("required")) && (((tmp_2_0 = ctx.editPetForm.get("species")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.editPetForm.get("species")) == null ? null : tmp_2_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.editPetForm.get("species")) == null ? null : tmp_3_0.hasError("minlength")) && (((tmp_3_0 = ctx.editPetForm.get("species")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.editPetForm.get("species")) == null ? null : tmp_3_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.editPetForm.get("race")) == null ? null : tmp_4_0.hasError("required")) && (((tmp_4_0 = ctx.editPetForm.get("race")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.editPetForm.get("race")) == null ? null : tmp_4_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.editPetForm.get("race")) == null ? null : tmp_5_0.hasError("minlength")) && (((tmp_5_0 = ctx.editPetForm.get("race")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.editPetForm.get("race")) == null ? null : tmp_5_0.touched) || ctx.hasSubmitted));
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=edit-pet.component.css.map */"] });
var EditPetComponent = _EditPetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPetComponent, { className: "EditPetComponent", filePath: "src\\app\\edit-pet\\edit-pet.component.ts", lineNumber: 14 });
})();

// src/app/edit-pet-photo/edit-pet-photo.component.ts
function EditPetPhotoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.pet.photo_path, \u0275\u0275sanitizeUrl)("ngClass", ctx_r0.isMobile ? "img-size-pet-mobile" : "img-size-pet");
  }
}
function EditPetPhotoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Zdj\u0119cie jest wymagane");
    \u0275\u0275elementEnd();
  }
}
var _EditPetPhotoComponent = class _EditPetPhotoComponent {
  constructor(formBuilder, router, route, spinnerService, breakPointService, apiPetsService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.spinnerService = spinnerService;
    this.breakPointService = breakPointService;
    this.apiPetsService = apiPetsService;
    this.isMobile = false;
    this.hasSubmitted = false;
    this.userId = 1;
    this.error = [];
    this.editPetPhotoForm = this.formBuilder.group({
      photo: [null, [Validators.required]]
    });
  }
  ngOnInit() {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();
    this.getPetToEdit();
    this.checkDeviceSize();
  }
  getPetToEdit() {
    this.apiPetsService.getPetToEdit(this.petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handlePetToEdit(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];
  }
  validatePetPhotoForm() {
    if (this.editPetPhotoForm.valid) {
      this.spinnerService.show();
      this.editPetPhoto();
    } else {
      console.log("Form is invalid");
    }
  }
  editPetPhoto() {
    this.apiPetsService.editPetPhoto(this.petId, this.getFormData()).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  handleResponse() {
    this.router.navigate(["/my-pets"]);
    alertify.success("Zmieniono zdj\u0119cie");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  handlePetToEdit(data) {
    this.pet = data;
  }
  onFileChange(event) {
    const photoToUpload = event.target.files[0];
    this.editPetPhotoForm.patchValue({ photo: photoToUpload });
    this.editPetPhotoForm.get("photo")?.updateValueAndValidity();
  }
  getFormData() {
    const formData = new FormData();
    formData.append("photo", this.editPetPhotoForm.get("photo")?.value);
    return formData;
  }
  cancelEditing() {
    this.router.navigate(["/my-pets"]);
    alertify.warning("Anulowano zmian\u0119 zdj\u0119cia");
  }
};
_EditPetPhotoComponent.\u0275fac = function EditPetPhotoComponent_Factory(t) {
  return new (t || _EditPetPhotoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiPetsService));
};
_EditPetPhotoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPetPhotoComponent, selectors: [["app-edit-pet-photo"]], decls: 21, vars: 3, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "p-4", "text-light", "text-center"], ["class", "p-4 text-center", 4, "ngIf"], [1, "text-light"], ["enctype", "multipart/form-data", 1, "form", 3, "formGroup", "ngSubmit"], ["for", "photo", 1, "form-label", "m-2"], ["type", "file", "id", "photo", "name", "photo", 1, "form-control", 3, "change"], ["class", "text-danger p-1", 4, "ngIf"], [1, "d-flex", "flex-row", "justify-content-center", "p-4"], [1, "text-center", "me-2", "mt-4", "d-inline"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "text-center", "m-2", "mt-4", "d-inline"], ["type", "submit", 1, "btn", "btn-info"], [1, "p-4", "text-center"], [3, "src", "ngClass"], [1, "text-danger", "p-1"]], template: function EditPetPhotoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Zmie\u0144 zdj\u0119cie");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, EditPetPhotoComponent_div_7_Template, 2, 2, "div", 4);
    \u0275\u0275elementStart(8, "div", 5)(9, "form", 6);
    \u0275\u0275listener("ngSubmit", function EditPetPhotoComponent_Template_form_ngSubmit_9_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(10, "label", 7);
    \u0275\u0275text(11, "Wybierz nowe zdj\u0119cie:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 8);
    \u0275\u0275listener("change", function EditPetPhotoComponent_Template_input_change_12_listener($event) {
      return ctx.onFileChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, EditPetPhotoComponent_div_13_Template, 2, 0, "div", 9);
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "button", 12);
    \u0275\u0275listener("click", function EditPetPhotoComponent_Template_button_click_16_listener() {
      return ctx.cancelEditing();
    });
    \u0275\u0275text(17, "Anuluj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "button", 14);
    \u0275\u0275text(20, "Zmie\u0144 zdj\u0119cie");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.pet);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.editPetPhotoForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.editPetPhotoForm.get("photoPath")) == null ? null : tmp_2_0.hasError("required")) && (((tmp_2_0 = ctx.editPetPhotoForm.get("photoPath")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.editPetPhotoForm.get("photoPath")) == null ? null : tmp_2_0.touched) || ctx.hasSubmitted));
  }
}, dependencies: [NgClass, NgIf, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=edit-pet-photo.component.css.map */"] });
var EditPetPhotoComponent = _EditPetPhotoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPetPhotoComponent, { className: "EditPetPhotoComponent", filePath: "src\\app\\edit-pet-photo\\edit-pet-photo.component.ts", lineNumber: 15 });
})();

// src/app/edit-profile/edit-profile.component.ts
function EditProfileComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Imi\u0119 jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Podane imi\u0119 jest za d\u0142ugie");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Nazwisko jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Podane nazwisko jest za d\u0142ugie");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275listener("click", function EditProfileComponent_div_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.showChangingPassword());
    });
    \u0275\u0275text(2, "Zmie\u0144 has\u0142o");
    \u0275\u0275elementEnd()();
  }
}
function EditProfileComponent_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Stare has\u0142o jest nieprawid\u0142owe! ");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Stare has\u0142o jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_28_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Nowe has\u0142o jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_28_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Nowe has\u0142o musi mie\u0107 minimalnie 6 znak\xF3w");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_28_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Pole nie mo\u017Ce by\u0107 puste");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_28_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Has\u0142a nie s\u0105 takie same");
    \u0275\u0275elementEnd();
  }
}
function EditProfileComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 3)(2, "h4");
    \u0275\u0275text(3, "Zmie\u0144 has\u0142o");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, EditProfileComponent_div_28_div_4_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(5, "label", 6);
    \u0275\u0275text(6, "Stare Has\u0142o:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 20);
    \u0275\u0275template(8, EditProfileComponent_div_28_div_8_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(9, "label", 6);
    \u0275\u0275text(10, "Nowe Has\u0142o:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 21);
    \u0275\u0275template(12, EditProfileComponent_div_28_div_12_Template, 2, 0, "div", 8)(13, EditProfileComponent_div_28_div_13_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(14, "label", 6);
    \u0275\u0275text(15, "Powt\xF3rz nowe has\u0142o:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 22);
    \u0275\u0275template(17, EditProfileComponent_div_28_div_17_Template, 2, 0, "div", 8)(18, EditProfileComponent_div_28_div_18_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(19, "div", 11)(20, "button", 23);
    \u0275\u0275text(21, "Potwierd\u017A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r5.passwordError && ctx_r5.hasSubmitted);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx_r5.changePasswordForm.get("password")) == null ? null : tmp_1_0.hasError("required")) && (((tmp_1_0 = ctx_r5.changePasswordForm.get("password")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx_r5.changePasswordForm.get("password")) == null ? null : tmp_1_0.touched) || ctx_r5.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r5.changePasswordForm.get("newPassword")) == null ? null : tmp_2_0.hasError("required")) && (((tmp_2_0 = ctx_r5.changePasswordForm.get("newPassword")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx_r5.changePasswordForm.get("newPassword")) == null ? null : tmp_2_0.touched) || ctx_r5.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r5.changePasswordForm.get("newPassword")) == null ? null : tmp_3_0.hasError("minlength")) && (((tmp_3_0 = ctx_r5.changePasswordForm.get("newPassword")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx_r5.changePasswordForm.get("newPassword")) == null ? null : tmp_3_0.touched) || ctx_r5.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r5.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_4_0.hasError("required")) && (((tmp_4_0 = ctx_r5.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx_r5.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_4_0.touched) || ctx_r5.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r5.isPasswordsSame && (((tmp_5_0 = ctx_r5.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx_r5.changePasswordForm.get("confirmNewPassword")) == null ? null : tmp_5_0.touched) || ctx_r5.hasSubmitted));
  }
}
var _EditProfileComponent = class _EditProfileComponent {
  constructor(formBuilder, router, apiService, spinnerService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.apiService = apiService;
    this.spinnerService = spinnerService;
    this.hasSubmitted = false;
    this.error = [];
    this.isChangingPassword = false;
    this.isPasswordsSame = true;
    this.passwordError = [];
    this.editProfileForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(25)]],
      surname: ["", [Validators.required, Validators.maxLength(25)]],
      email: ["", [Validators.required, Validators.email]]
    });
    this.changePasswordForm = this.formBuilder.group({
      password: ["", [Validators.required]],
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.spinnerService.show();
    this.getAuthorizedUser();
  }
  getAuthorizedUser() {
    this.apiService.authorizedUser().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleUser(data);
      }
    });
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];
    this.validateEditProfileForm();
  }
  validateEditProfileForm() {
    if (this.editProfileForm.valid) {
      this.spinnerService.show();
      const formData = this.editProfileForm.getRawValue();
      this.editProfile(formData);
    } else {
      console.log("Form is invalid");
    }
  }
  editProfile(formData) {
    this.apiService.editProfile(formData).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  showChangingPassword() {
    this.isChangingPassword = true;
  }
  onPasswordChange() {
    this.hasSubmitted = true;
    this.passwordError = [];
    this.checkPassword();
    this.validateChangingPassword();
  }
  validateChangingPassword() {
    if (this.changePasswordForm.valid && this.isPasswordsSame) {
      const formData = this.changePasswordForm.getRawValue();
      this.changePassword(formData);
    } else {
      console.log("Form is invalid");
    }
  }
  changePassword(formData) {
    this.apiService.changePassword(formData).subscribe({
      next: (data) => {
        this.handlePasswordResponse();
      },
      error: (error) => {
        this.handlePasswordError(error);
      }
    });
  }
  checkPassword() {
    const firstPassword = this.changePasswordForm.controls["newPassword"].value;
    const repeatedPassword = this.changePasswordForm.controls["confirmNewPassword"].value;
    if (firstPassword == repeatedPassword) {
      this.isPasswordsSame = true;
    } else {
      this.isPasswordsSame = false;
    }
  }
  handleUser(data) {
    this.user = data;
    this.editProfileForm.patchValue({
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email
    });
  }
  handleResponse() {
    this.router.navigate(["/"]);
    alertify.success("Edytowano profil");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("B\u0142\u0105d edycji");
  }
  handlePasswordResponse() {
    this.router.navigate(["/"]);
    alertify.success("Zmieniono has\u0142o");
  }
  handlePasswordError(error) {
    this.error = error.error.error;
    alertify.error("Wyst\u0105pi\u0142 problem");
  }
};
_EditProfileComponent.\u0275fac = function EditProfileComponent_Factory(t) {
  return new (t || _EditProfileComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(SpinnerService));
};
_EditProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProfileComponent, selectors: [["app-edit-profile"]], decls: 29, vars: 8, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "p-4", "text-light", "text-center"], [1, "text-light"], [1, "form", 3, "formGroup", "ngSubmit"], ["for", "task-title", 1, "form-label", "m-2"], ["type", "text", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "name", 1, "form-control"], ["class", "text-danger p-1", 4, "ngIf"], ["type", "text", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "surname", 1, "form-control"], ["type", "email", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "email", "readonly", "", 1, "form-control", "bg-secondary", "text-light"], [1, "text-center", "m-4"], ["type", "submit", 1, "btn", "btn-warning"], [1, "border-top"], ["class", "p-3 text-center", 4, "ngIf"], ["class", "pb-5", 4, "ngIf"], [1, "text-danger", "p-1"], [1, "p-3", "text-center"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "pb-5"], ["type", "password", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "password", 1, "form-control"], ["type", "password", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "newPassword", 1, "form-control"], ["type", "password", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "confirmNewPassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function EditProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Edycja profilu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5);
    \u0275\u0275listener("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "label", 6);
    \u0275\u0275text(10, "Imi\u0119:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275template(12, EditProfileComponent_div_12_Template, 2, 0, "div", 8)(13, EditProfileComponent_div_13_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(14, "label", 6);
    \u0275\u0275text(15, "Nazwisko:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 9);
    \u0275\u0275template(17, EditProfileComponent_div_17_Template, 2, 0, "div", 8)(18, EditProfileComponent_div_18_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(19, "label", 6);
    \u0275\u0275text(20, "E-mail:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 10);
    \u0275\u0275elementStart(22, "div", 11)(23, "button", 12);
    \u0275\u0275text(24, "Edytuj profil");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 13);
    \u0275\u0275template(26, EditProfileComponent_div_26_Template, 3, 0, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "form", 5);
    \u0275\u0275listener("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_27_listener() {
      return ctx.onPasswordChange();
    });
    \u0275\u0275template(28, EditProfileComponent_div_28_Template, 22, 6, "div", 15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.editProfileForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.editProfileForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && (((tmp_1_0 = ctx.editProfileForm.get("name")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.editProfileForm.get("name")) == null ? null : tmp_1_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.editProfileForm.get("name")) == null ? null : tmp_2_0.hasError("maxlength")) && (((tmp_2_0 = ctx.editProfileForm.get("name")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.editProfileForm.get("name")) == null ? null : tmp_2_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.editProfileForm.get("surname")) == null ? null : tmp_3_0.hasError("required")) && (((tmp_3_0 = ctx.editProfileForm.get("surname")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.editProfileForm.get("surname")) == null ? null : tmp_3_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.editProfileForm.get("surname")) == null ? null : tmp_4_0.hasError("maxlength")) && (((tmp_4_0 = ctx.editProfileForm.get("surname")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.editProfileForm.get("surname")) == null ? null : tmp_4_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx.isChangingPassword);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.changePasswordForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isChangingPassword);
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=edit-profile.component.css.map */"] });
var EditProfileComponent = _EditProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProfileComponent, { className: "EditProfileComponent", filePath: "src\\app\\edit-profile\\edit-profile.component.ts", lineNumber: 14 });
})();

// src/app/saved-pets/saved-pets.component.ts
function SavedPetsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function SavedPetsComponent_ng_template_5_div_0_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "img", 10)(5, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 12)(16, "button", 13);
    \u0275\u0275text(17, "Zobacz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12)(19, "button", 14);
    \u0275\u0275listener("click", function SavedPetsComponent_ng_template_5_div_0_tr_20_Template_button_click_19_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r10);
      const pet_r7 = restoredCtx.$implicit;
      const ctx_r9 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r9.deletePetWindow(pet_r7.id, pet_r7.name));
    });
    \u0275\u0275text(20, "Usu\u0144");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pet_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", pet_r7.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pet_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.species);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.race);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.size);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "/pets-to-adopt/", pet_r7.id, "");
  }
}
function SavedPetsComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "table", 6)(3, "thead")(4, "tr")(5, "th", 7);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 7);
    \u0275\u0275text(8, "Zdj\u0119cie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 7);
    \u0275\u0275text(10, "Imi\u0119");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 7);
    \u0275\u0275text(12, "Gatunek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 7);
    \u0275\u0275text(14, "Rasa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 7);
    \u0275\u0275text(16, "Rozmiar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 7);
    \u0275\u0275text(18, "Akcja");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, SavedPetsComponent_ng_template_5_div_0_tr_20_Template, 21, 7, "tr", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r5.pets);
  }
}
function SavedPetsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SavedPetsComponent_ng_template_5_div_0_Template, 21, 1, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.pets.length > 0);
  }
}
function SavedPetsComponent_ng_template_7_div_0_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "img", 16)(5, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 12)(8, "button", 17);
    \u0275\u0275text(9, "Zobacz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 12)(11, "button", 18);
    \u0275\u0275listener("click", function SavedPetsComponent_ng_template_7_div_0_tr_20_Template_button_click_11_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r16);
      const pet_r13 = restoredCtx.$implicit;
      const ctx_r15 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r15.deletePetWindow(pet_r13.id, pet_r13.name));
    });
    \u0275\u0275text(12, "Usu\u0144");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pet_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r14 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", pet_r13.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate1("routerLink", "/pets-to-adopt/", pet_r13.id, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(pet_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r13.species);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r13.race);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r13.size);
  }
}
function SavedPetsComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 15)(2, "table", 6)(3, "thead")(4, "tr")(5, "th", 7);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 7);
    \u0275\u0275text(8, "Zdj\u0119cie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 7);
    \u0275\u0275text(10, "Akcja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 7);
    \u0275\u0275text(12, "Imi\u0119");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 7);
    \u0275\u0275text(14, "Gatunek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 7);
    \u0275\u0275text(16, "Rasa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 7);
    \u0275\u0275text(18, "Rozmiar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, SavedPetsComponent_ng_template_7_div_0_tr_20_Template, 21, 7, "tr", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r11.pets);
  }
}
function SavedPetsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SavedPetsComponent_ng_template_7_div_0_Template, 21, 1, "div", 4);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.pets.length > 0);
  }
}
var _SavedPetsComponent = class _SavedPetsComponent {
  constructor(spinnerService, breakPointService, apiPetsService) {
    this.spinnerService = spinnerService;
    this.breakPointService = breakPointService;
    this.apiPetsService = apiPetsService;
    this.isMobile = false;
    this.pets = [];
  }
  ngOnInit() {
    this.spinnerService.show();
    this.getSavedPets();
    this.checkDeviceSize();
  }
  getSavedPets() {
    this.apiPetsService.getSavedPets().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleNewestPets(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  handleNewestPets(data) {
    this.pets = data;
  }
  deletePetWindow(petId, petName) {
    const newConfirmBox = new ConfirmBoxInitializer();
    newConfirmBox.setTitle("Usuwanie zapisanego zwierz\u0119cia");
    newConfirmBox.setMessage("Czyn a pewno chcesz usun\u0105\u0107 zapisane zwierz\u0119 o imieniu " + petName + " ?");
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: "center"
    });
    newConfirmBox.setButtonLabels("Tak", "Nie");
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.deleteSavedPet(petId);
      }
    });
  }
  deleteSavedPet(petId) {
    this.spinnerService.show();
    this.apiPetsService.deleteSavedPet(petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError();
      }
    });
  }
  handleResponse() {
    window.location.reload();
    alertify.success("Usun\u0105\u0142e\u015B zapisane zwierz\u0119");
  }
  handleError() {
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
};
_SavedPetsComponent.\u0275fac = function SavedPetsComponent_Factory(t) {
  return new (t || _SavedPetsComponent)(\u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiPetsService));
};
_SavedPetsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SavedPetsComponent, selectors: [["app-saved-pets"]], decls: 9, vars: 3, consts: [[1, "app-background", "text-center", "text-light", "p-5"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], [4, "ngIf"], [1, "px-6", "app-background"], [1, "table", "table-striped", "table-dark", "table-sm", "table-bordered", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "img-size-my-pet", 3, "src"], [1, "ps-2", "d-inline"], [1, "text-center", "pt-2"], ["type", "button", 1, "btn", "btn-warning", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "px-6", "app-background", "table-responsive"], [1, "img-size-my-pet-mobile", 3, "src"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function SavedPetsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "h2");
    \u0275\u0275text(3, " Zapisane zwierz\u0119ta");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, SavedPetsComponent_div_4_Template, 1, 0, "div", 1)(5, SavedPetsComponent_ng_template_5_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, SavedPetsComponent_ng_template_7_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(6);
    const _r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.isMobile)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=saved-pets.component.css.map */"] });
var SavedPetsComponent = _SavedPetsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SavedPetsComponent, { className: "SavedPetsComponent", filePath: "src\\app\\saved-pets\\saved-pets.component.ts", lineNumber: 19 });
})();

// src/app/services/api-tokens.service.ts
var _ApiTokensService = class _ApiTokensService {
  constructor(http, tokenService) {
    this.http = http;
    this.tokenService = tokenService;
    this.API_URL = environment.API_URL;
  }
  transferTokens(petId, data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "transfer-tokens/" + petId, data, {
      headers
    });
  }
  getbundles() {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "bundles", { headers });
  }
  getbundle(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "bundles/" + id, { headers });
  }
  createPayIntent(data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "payment-intent", data, {
      headers
    });
  }
  storePayment(data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "store-payment", data, {
      headers
    });
  }
};
_ApiTokensService.\u0275fac = function ApiTokensService_Factory(t) {
  return new (t || _ApiTokensService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(TokenService));
};
_ApiTokensService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiTokensService, factory: _ApiTokensService.\u0275fac, providedIn: "root" });
var ApiTokensService = _ApiTokensService;

// src/app/services/stripe.service.ts
var _StripeService = class _StripeService {
  constructor() {
  }
  setIntent(data) {
    this.intent = data;
  }
  getIntent() {
    return this.intent;
  }
};
_StripeService.\u0275fac = function StripeService_Factory(t) {
  return new (t || _StripeService)();
};
_StripeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StripeService, factory: _StripeService.\u0275fac, providedIn: "root" });
var StripeService = _StripeService;

// src/app/bundle/bundle.component.ts
var _BundleComponent = class _BundleComponent {
  constructor(apiService, router, stripeService, apiTokensService) {
    this.apiService = apiService;
    this.router = router;
    this.stripeService = stripeService;
    this.apiTokensService = apiTokensService;
    this.faSackDollar = faSackDollar;
    this.loggedUser = {
      id: 0,
      name: "",
      surname: "",
      email: "",
      role: "",
      tokens_count: 0
    };
    this.bundle = {
      id: 0,
      name: "Ma\u0142y pakiet",
      tokens_count: 100,
      price: 49.99,
      currency: "pln",
      intent_id: ""
    };
  }
  ngOnInit() {
    this.getUserTokens();
  }
  getUserTokens() {
    this.apiService.authorizedUser().subscribe({
      next: (data) => {
        this.handleTokens(data);
      }
    });
  }
  handleTokens(data) {
    this.loggedUser.tokens_count = data.tokens_count;
  }
  topUpTokensWindow(tokensCount) {
    const newConfirmBox = new ConfirmBoxInitializer();
    newConfirmBox.setTitle("Do\u0142adowanie \u017Ceton\xF3w");
    newConfirmBox.setMessage("Czy na pewno chcesz do\u0142adowa\u0107 " + tokensCount + " \u017Ceton\xF3w?");
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.SUCCESS,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: "center"
    });
    newConfirmBox.setButtonLabels("Tak", "Nie");
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.createPayIntent();
      }
    });
  }
  createPayIntent() {
    this.apiTokensService.createPayIntent(this.bundle).subscribe({
      next: (data) => {
        console.log(data);
        this.bundlePayment(this.bundle.id, data);
      }
    });
  }
  bundlePayment(id, intent) {
    this.stripeService.setIntent(intent);
    this.router.navigate(["tokens-bundles/payment/" + id]);
  }
};
_BundleComponent.\u0275fac = function BundleComponent_Factory(t) {
  return new (t || _BundleComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StripeService), \u0275\u0275directiveInject(ApiTokensService));
};
_BundleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BundleComponent, selectors: [["app-bundle"]], inputs: { bundle: "bundle" }, decls: 14, vars: 7, consts: [[1, "card", "bg-c-blue", "order-card"], [1, "card-block"], [1, "m-b-20"], [1, "text-right"], [1, "fa", "fa-cart-plus", "f-left"], [1, "pe-1", 3, "icon"], [1, "m-b-0"], [1, "btn", "btn-success", 3, "click"]], template: function BundleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 3);
    \u0275\u0275element(5, "i", 4);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275element(8, "fa-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 7);
    \u0275\u0275listener("click", function BundleComponent_Template_a_click_12_listener() {
      return ctx.topUpTokensWindow(ctx.bundle.tokens_count);
    });
    \u0275\u0275text(13, "Kup \u017Cetony");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.bundle.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx.bundle.tokens_count, " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx.faSackDollar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx.bundle.price, " ", \u0275\u0275pipeBind1(11, 5, ctx.bundle.currency), " ");
  }
}, dependencies: [FaIconComponent, UpperCasePipe], styles: ["\n\nbody[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #FAFAFA;\n}\n.order-card[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.bg-c-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #4099ff,\n      #73b4ff);\n}\n.bg-c-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #2ed8b6,\n      #59e0c5);\n}\n.bg-c-yellow[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #FFB64D,\n      #ffcb80);\n}\n.bg-c-pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #FF5370,\n      #ff869a);\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);\n  box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);\n  border: none;\n  margin-bottom: 30px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.order-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.f-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.f-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  color: white;\n  background:\n    linear-gradient(\n      45deg,\n      #2ed8b6,\n      #59e0c5);\n  border-color: rgba(125, 200, 53, .7) !important;\n}\n/*# sourceMappingURL=bundle.component.css.map */"] });
var BundleComponent = _BundleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BundleComponent, { className: "BundleComponent", filePath: "src\\app\\bundle\\bundle.component.ts", lineNumber: 21 });
})();

// src/app/tokens/tokens.component.ts
function TokensComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "app-bundle", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bundle_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("bundle", bundle_r1);
  }
}
var _TokensComponent = class _TokensComponent {
  constructor(apiService, spinnerService, apiTokensService) {
    this.apiService = apiService;
    this.spinnerService = spinnerService;
    this.apiTokensService = apiTokensService;
    this.faSackDollar = faSackDollar;
    this.loggedUser = {
      id: 0,
      name: "",
      surname: "",
      email: "",
      role: "",
      tokens_count: 0
    };
  }
  ngOnInit() {
    this.spinnerService.show();
    this.getUserTokens();
    this.getBundles();
  }
  getUserTokens() {
    this.apiService.authorizedUser().subscribe({
      next: (data) => {
        this.handleTokens(data);
      }
    });
  }
  getBundles() {
    this.apiTokensService.getbundles().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllBundles(data);
      }
    });
  }
  handleTokens(data) {
    this.loggedUser.tokens_count = data.tokens_count;
  }
  handleAllBundles(data) {
    this.bundles = data;
  }
};
_TokensComponent.\u0275fac = function TokensComponent_Factory(t) {
  return new (t || _TokensComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(ApiTokensService));
};
_TokensComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TokensComponent, selectors: [["app-tokens"]], decls: 6, vars: 1, consts: [[1, "app-background", "text-center", "text-light", "p-5"], [1, "mx-auto", "row", "app-background", "px-6", "justify-content-center", "text-center"], ["class", "col-md-4 col-xl-3", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-xl-3"], [3, "bundle"]], template: function TokensComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "h2");
    \u0275\u0275text(3, " Do\u0142aduj \u017Cetony");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 1);
    \u0275\u0275template(5, TokensComponent_div_5_Template, 2, 1, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.bundles);
  }
}, dependencies: [NgForOf, NavbarComponent, BundleComponent], styles: ["\n\nbody[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #FAFAFA;\n}\n.order-card[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.bg-c-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #4099ff,\n      #73b4ff);\n}\n.bg-c-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #2ed8b6,\n      #59e0c5);\n}\n.bg-c-yellow[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #FFB64D,\n      #ffcb80);\n}\n.bg-c-pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #FF5370,\n      #ff869a);\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);\n  box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);\n  border: none;\n  margin-bottom: 30px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.order-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.f-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.f-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  color: white;\n  background:\n    linear-gradient(\n      45deg,\n      #2ed8b6,\n      #59e0c5);\n  border-color: rgba(125, 200, 53, .7) !important;\n}\n/*# sourceMappingURL=tokens.component.css.map */"] });
var TokensComponent = _TokensComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TokensComponent, { className: "TokensComponent", filePath: "src\\app\\tokens\\tokens.component.ts", lineNumber: 13 });
})();

// src/app/services/api-sick-pets.service.ts
var _ApiSickPetsService = class _ApiSickPetsService {
  constructor(http, tokenService) {
    this.http = http;
    this.tokenService = tokenService;
    this.API_URL = environment.API_URL;
  }
  addSickPet(data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "add-sick-pet", data, { "headers": headers });
  }
  getSickPets() {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "sick-pets", { "headers": headers });
  }
  getSickPetToEdit(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this.API_URL + "sick-pets/edit/" + id, { "headers": headers });
  }
  editSickPet(id, data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.put(this.API_URL + "sick-pets/edit/" + id, data, { "headers": headers });
  }
  editSickPetPhoto(id, data) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(this.API_URL + "sick-pets/edit-photo/" + id, data, { "headers": headers });
  }
  deleteSickPet(id) {
    const token = this.tokenService.getTokenValue();
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.delete(this.API_URL + "sick-pets/delete/" + id, { "headers": headers });
  }
};
_ApiSickPetsService.\u0275fac = function ApiSickPetsService_Factory(t) {
  return new (t || _ApiSickPetsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(TokenService));
};
_ApiSickPetsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiSickPetsService, factory: _ApiSickPetsService.\u0275fac, providedIn: "root" });
var ApiSickPetsService = _ApiSickPetsService;

// src/app/sick-pet/sick-pet.component.ts
function SickPetComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function SickPetComponent_ng_template_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 13)(2, "label", 20)(3, "b");
    \u0275\u0275text(4, "Wspom\xF3\u017C:");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 13)(6, "input", 21);
    \u0275\u0275listener("ngModelChange", function SickPetComponent_ng_template_1_div_26_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.tokensCount.tokens_count = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "button", 23);
    \u0275\u0275listener("click", function SickPetComponent_ng_template_1_div_26_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.transferTokensWindow());
    });
    \u0275\u0275text(9, " Wy\u015Blij ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r5.tokensCount.tokens_count);
  }
}
function SickPetComponent_ng_template_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24)(1, "b");
    \u0275\u0275text(2, "Minimalna ilo\u015B\u0107 \u017Ceton\xF3w musi wynosi\u0107 1");
    \u0275\u0275elementEnd()();
  }
}
function SickPetComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 9)(10, "span", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9)(18, "span", 11);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "h4", 14);
    \u0275\u0275text(24);
    \u0275\u0275element(25, "fa-icon", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, SickPetComponent_ng_template_1_div_26_Template, 10, 1, "div", 16);
    \u0275\u0275elementStart(27, "div", 17);
    \u0275\u0275template(28, SickPetComponent_ng_template_1_span_28_Template, 3, 0, "span", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.pet.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, ctx_r1.pet.name));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, ctx_r1.pet.species));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 15, ctx_r1.pet.disease));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.pet.status == "Aktywne" ? "p-3 badge bg-danger rounded-pill" : "p-3 badge bg-success rounded-pill");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, ctx_r1.pet.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.pet.current_tokens, " / ", ctx_r1.pet.required_tokens, " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faSackDollar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pet.status == "Aktywne");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.tokensCount.tokens_count < 1);
  }
}
function SickPetComponent_ng_template_3_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 13)(2, "label", 20)(3, "b");
    \u0275\u0275text(4, "Wspom\xF3\u017C:");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 13)(6, "input", 21);
    \u0275\u0275listener("ngModelChange", function SickPetComponent_ng_template_3_div_26_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r12 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r12.tokensCount.tokens_count = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "button", 23);
    \u0275\u0275listener("click", function SickPetComponent_ng_template_3_div_26_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r14 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r14.transferTokensWindow());
    });
    \u0275\u0275text(9, " Wy\u015Blij ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r10.tokensCount.tokens_count);
  }
}
function SickPetComponent_ng_template_3_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24)(1, "b");
    \u0275\u0275text(2, "Minimalna ilo\u015B\u0107 \u017Ceton\xF3w musi wynosi\u0107 1");
    \u0275\u0275elementEnd()();
  }
}
function SickPetComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 28)(8, "div", 29)(9, "div", 9)(10, "span", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9)(18, "span", 11);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "h4", 14);
    \u0275\u0275text(24);
    \u0275\u0275element(25, "fa-icon", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, SickPetComponent_ng_template_3_div_26_Template, 10, 1, "div", 16);
    \u0275\u0275elementStart(27, "div", 17);
    \u0275\u0275template(28, SickPetComponent_ng_template_3_span_28_Template, 3, 0, "span", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.pet.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, ctx_r3.pet.name));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, ctx_r3.pet.species));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 15, ctx_r3.pet.disease));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r3.pet.status == "Aktywne" ? "p-3 badge bg-danger rounded-pill" : "p-3 badge bg-success rounded-pill");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, ctx_r3.pet.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r3.pet.current_tokens, " / ", ctx_r3.pet.required_tokens, " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r3.faSackDollar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.pet.status == "Aktywne");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.tokensCount.tokens_count < 1);
  }
}
var _SickPetComponent = class _SickPetComponent {
  constructor(apiService, breakPointService, apiTokensService) {
    this.apiService = apiService;
    this.breakPointService = breakPointService;
    this.apiTokensService = apiTokensService;
    this.isMobile = false;
    this.faSackDollar = faSackDollar;
    this.userTokensCount = 0;
    this.isValid = false;
    this.tokensCount = {
      tokens_count: 1
    };
    this.pet = {
      id: 0,
      name: "Carlos",
      species: "Pies",
      disease: "Z\u0142amana noga",
      current_tokens: 0,
      required_tokens: 100,
      status: "Aktywna",
      photo_path: "./assets/PetsBgr.jpg"
    };
  }
  ngOnInit() {
    this.getUsersToken();
    this.checkDeviceSize();
  }
  getUsersToken() {
    this.apiService.authorizedUser().subscribe({
      next: (data) => {
        this.handleUserTokens(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  transferTokensWindow() {
    this.validate();
    if (this.isValid) {
      const newConfirmBox = new ConfirmBoxInitializer();
      newConfirmBox.setTitle("Przelanie \u017Ceton\xF3w");
      newConfirmBox.setMessage("Czy na pewno chcesz przela\u0107 " + this.tokensCount.tokens_count + " \u017Ceton\xF3w?");
      newConfirmBox.setConfig({
        layoutType: DialogLayoutDisplay.SUCCESS,
        animationIn: AppearanceAnimation.BOUNCE_IN,
        animationOut: DisappearanceAnimation.BOUNCE_OUT,
        buttonPosition: "center"
      });
      newConfirmBox.setButtonLabels("Tak", "Nie");
      newConfirmBox.openConfirmBox$().subscribe((resp) => {
        if (resp.success) {
          this.transferTokens(this.tokensCount, this.pet.id);
        }
      });
    }
  }
  transferTokens(tokens, petId) {
    this.apiTokensService.transferTokens(petId, tokens).subscribe({
      next: (data) => {
        this.handleResponse();
      },
      error: (error) => {
        this.handleError();
      }
    });
  }
  handleResponse() {
    alertify.success("Przelano \u017Cetony");
    window.location.reload();
  }
  handleError() {
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  validate() {
    this.isValid = this.tokensCount.tokens_count >= 1 && this.tokensCount.tokens_count <= this.userTokensCount;
    if (this.tokensCount.tokens_count > this.userTokensCount) {
      this.tokensCountWarningWindow();
    }
  }
  tokensCountWarningWindow() {
    const newConfirmBox = new ConfirmBoxInitializer();
    newConfirmBox.setTitle("Transfer \u017Ceton\xF3w");
    newConfirmBox.setMessage("Nie masz tyle \u017Ceton\xF3w!");
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.WARNING,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: "center"
    });
    newConfirmBox.setButtonLabels("Zamknij", "");
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.clickedButtonID) {
        console.log("Button clicked: ", resp.clickedButtonID);
      }
    });
  }
  handleUserTokens(data) {
    this.userTokensCount = data.tokens_count;
  }
};
_SickPetComponent.\u0275fac = function SickPetComponent_Factory(t) {
  return new (t || _SickPetComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiTokensService));
};
_SickPetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SickPetComponent, selectors: [["app-sick-pet"]], inputs: { pet: "pet" }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], [1, "mx-auto", "row", "px-7", "app-background", "text-light", "justify-content-center", "pb-2"], [1, "col-3", "theme-bgr", "p-2", "border-start", "border-top", "border-bottom", "border-warning", "border-3"], [1, "img-size", 3, "src"], [1, "col-6", "theme-bgr", "p-2", "border", "border-warning", "border-3"], [1, "row", "justify-content-center"], [1, "col-auto", "p-2", "pe-4"], [1, "col-auto", "p-1"], [1, "p-3", "badge", "bg-primary", "rounded-pill"], [3, "ngClass"], [1, "p-4", "d-flex", "flex-row", "justify-content-center"], [1, "d-inline"], [1, "text-light"], [3, "icon"], ["class", "d-flex flex-row pb-2 justify-content-center", 4, "ngIf"], [1, "text-center"], ["class", "text-dark bg-danger", 4, "ngIf"], [1, "d-flex", "flex-row", "pb-2", "justify-content-center"], ["for", "tokens_count", 1, "form-label", "m-2"], ["type", "number", "id", "tokens_count", "name", "tokens_count", "min", "1", "max", "1000", "maxlength", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-inline", "ps-1"], ["type", "button", 1, "btn", "btn-warning", "btn-rounded", 3, "click"], [1, "text-dark", "bg-danger"], [1, "mx-auto", "row", "app-background", "text-light", "justify-content-center", "pb-2"], [1, "col-12", "theme-bgr", "p-2", "border-start", "border-top", "border-end", "border-warning", "border-3", "text-center"], [1, "col-12", "p-2", "theme-bgr", "border-start", "border-end", "border-warning", "border-3", "text-center"], [1, "theme-bgr", "p-2", "border-start", "border-bottom", "border-end", "border-warning", "border-3"], [1, "mx-auto", "row", "justify-content-center", "p-1"]], template: function SickPetComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SickPetComponent_div_0_Template, 1, 0, "div", 0)(1, SickPetComponent_ng_template_1_Template, 29, 19, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(3, SickPetComponent_ng_template_3_Template, 29, 19, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(2);
    const _r4 = \u0275\u0275reference(4);
    \u0275\u0275property("ngIf", !ctx.isMobile)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgClass, NgIf, FaIconComponent, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, MaxValidator, NgModel, TitleCasePipe], styles: ["\n\n/*# sourceMappingURL=sick-pet.component.css.map */"] });
var SickPetComponent = _SickPetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SickPetComponent, { className: "SickPetComponent", filePath: "src\\app\\sick-pet\\sick-pet.component.ts", lineNumber: 22 });
})();

// src/app/sick-pets-page/sick-pets-page.component.ts
function SickPetsPageComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-sick-pet", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pet_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("pet", pet_r2);
  }
}
var _c05 = (a0, a1) => ({ itemsPerPage: a0, currentPage: a1 });
function SickPetsPageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, SickPetsPageComponent_div_15_div_1_Template, 2, 1, "div", 10);
    \u0275\u0275pipe(2, "paginate");
    \u0275\u0275pipe(3, "search");
    \u0275\u0275elementStart(4, "div", 11)(5, "pagination-controls", 12);
    \u0275\u0275listener("pageChange", function SickPetsPageComponent_div_15_Template_pagination_controls_pageChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.page = $event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(2, 1, \u0275\u0275pipeBind2(3, 4, ctx_r0.pets, ctx_r0.searchText), \u0275\u0275pureFunction2(7, _c05, ctx_r0.petsPerPage, ctx_r0.page)));
  }
}
var _SickPetsPageComponent = class _SickPetsPageComponent {
  constructor(spinnerService, apiSickPetsService) {
    this.spinnerService = spinnerService;
    this.apiSickPetsService = apiSickPetsService;
    this.page = 1;
    this.petsPerPage = 5;
  }
  ngOnInit() {
    this.spinnerService.show();
    this.getSickPets();
  }
  getSickPets() {
    this.apiSickPetsService.getSickPets().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllPets(data);
      }
    });
  }
  handleAllPets(data) {
    this.pets = data;
  }
};
_SickPetsPageComponent.\u0275fac = function SickPetsPageComponent_Factory(t) {
  return new (t || _SickPetsPageComponent)(\u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(ApiSickPetsService));
};
_SickPetsPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SickPetsPageComponent, selectors: [["app-pets-sick-page"]], decls: 16, vars: 3, consts: [["href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet"], [1, "app-background", "text-center", "text-light", "p-5"], [1, "app-background", "px-6", "d-flex", "justify-content-center", "pb-3"], [1, "p-2"], ["type", "button", "routerLink", "/pets-to-adopt", 1, "btn", "text-light", "btn-rounded", 2, "background-color", "#6a994e"], ["type", "button", 1, "btn", "text-light", "btn-rounded", 2, "background-color", "#6a994e", 3, "disabled"], [1, "mx-auto", "row", "app-background", "justify-content-center", "px-6", "p-5"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-6", "col-xl-4"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "\uF002 Szukaj po gatunku czy chorobie", 1, "form-control", 2, "font-family", "Arial, FontAwesome", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "app-background", "d-flex", "justify-content-center", "items-center", "p-3"], ["previousLabel", "", "nextLabel", "", 1, "paginator", 3, "pageChange"], [3, "pet"]], template: function SickPetsPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "link", 0)(1, "app-navbar");
    \u0275\u0275elementStart(2, "div", 1)(3, "h2");
    \u0275\u0275text(4, " Wspom\xF3\u017C chore zwierz\u0119ta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "button", 4);
    \u0275\u0275text(8, " Zwierz\u0119ta do adopcji ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 3)(10, "button", 5);
    \u0275\u0275text(11, " Chore zwierz\u0119ta ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "input", 8);
    \u0275\u0275listener("ngModelChange", function SickPetsPageComponent_Template_input_ngModelChange_14_listener($event) {
      return ctx.searchText = $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, SickPetsPageComponent_div_15_Template, 6, 10, "div", 9);
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.pets != null);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, DefaultValueAccessor, NgControlStatus, NgModel, PaginationControlsComponent, NavbarComponent, SickPetComponent, PaginatePipe, SearchPipe], styles: ['\n\n.paginator[_ngcontent-%COMP%] {\n  font-family: "Lato", sans-serif;\n  font-size: 15px;\n  color: white !important;\n  padding: 5px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination {\n  display: flex;\n  gap: 4px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background: #6a994e;\n  border-radius: 4px;\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination a {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination .disabled {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #E4A11B;\n  border-radius: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  text-decoration: none;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:focus, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #d4d4d4;\n}\n/*# sourceMappingURL=sick-pets-page.component.css.map */'] });
var SickPetsPageComponent = _SickPetsPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SickPetsPageComponent, { className: "SickPetsPageComponent", filePath: "src\\app\\sick-pets-page\\sick-pets-page.component.ts", lineNumber: 10 });
})();

// src/app/sick-pets-manager/sick-pets-manager.component.ts
function SickPetsManagerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function SickPetsManagerComponent_ng_template_10_div_0_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "img", 16);
    \u0275\u0275elementStart(5, "div", 17)(6, "button", 18);
    \u0275\u0275text(7, "Zmie\u0144");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 19)(22, "button", 20);
    \u0275\u0275text(23, "Edytuj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 19)(25, "button", 21);
    \u0275\u0275listener("click", function SickPetsManagerComponent_ng_template_10_div_0_tr_24_Template_button_click_25_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r10);
      const pet_r7 = restoredCtx.$implicit;
      const ctx_r9 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r9.deleteSickPetWindow(pet_r7.id, pet_r7.name));
    });
    \u0275\u0275text(26, "Usu\u0144");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pet_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", pet_r7.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("routerLink", "/sick-pets-manager/edit-photo/", pet_r7.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pet_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.species);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.disease);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.current_tokens);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.required_tokens);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r7.status);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("routerLink", "/sick-pets-manager/edit/", pet_r7.id, "");
  }
}
var _c06 = (a0, a1) => ({ itemsPerPage: a0, currentPage: a1 });
function SickPetsManagerComponent_ng_template_10_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th", 11);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 11);
    \u0275\u0275text(8, "Zdj\u0119cie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 11);
    \u0275\u0275text(10, "Imi\u0119");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 11);
    \u0275\u0275text(12, "Gatunek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 11);
    \u0275\u0275text(14, "Choroba");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 11);
    \u0275\u0275text(16, "Obecna liczba \u017Ceton\xF3w");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 11);
    \u0275\u0275text(18, "Wymagana liczba \u017Ceton\xF3w");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 11);
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 11);
    \u0275\u0275text(22, "Akcja");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, SickPetsManagerComponent_ng_template_10_div_0_tr_24_Template, 27, 10, "tr", 12);
    \u0275\u0275pipe(25, "paginate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 13)(27, "pagination-controls", 14);
    \u0275\u0275listener("pageChange", function SickPetsManagerComponent_ng_template_10_div_0_Template_pagination_controls_pageChange_27_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r11 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r11.page = $event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(25, 1, ctx_r5.pets, \u0275\u0275pureFunction2(4, _c06, ctx_r5.petsPerPage, ctx_r5.page)));
  }
}
function SickPetsManagerComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SickPetsManagerComponent_ng_template_10_div_0_Template, 28, 7, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.pets.length > 0);
  }
}
function SickPetsManagerComponent_ng_template_12_div_0_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "img", 22);
    \u0275\u0275elementStart(5, "div", 17)(6, "button", 23);
    \u0275\u0275text(7, "Zmie\u0144");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td")(9, "div", 19)(10, "button", 24);
    \u0275\u0275text(11, "Edytuj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 19)(13, "button", 25);
    \u0275\u0275listener("click", function SickPetsManagerComponent_ng_template_12_div_0_tr_24_Template_button_click_13_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r18);
      const pet_r15 = restoredCtx.$implicit;
      const ctx_r17 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r17.deleteSickPetWindow(pet_r15.id, pet_r15.name));
    });
    \u0275\u0275text(14, "Usu\u0144");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pet_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r16 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", pet_r15.photo_path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("routerLink", "/sick-pets-manager/edit-photo/", pet_r15.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate1("routerLink", "/sick-pets-manager/edit/", pet_r15.id, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(pet_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r15.species);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r15.disease);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r15.current_tokens);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r15.required_tokens);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pet_r15.status);
  }
}
function SickPetsManagerComponent_ng_template_12_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th", 11);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 11);
    \u0275\u0275text(8, "Zdj\u0119cie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 11);
    \u0275\u0275text(10, "Akcja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 11);
    \u0275\u0275text(12, "Imi\u0119");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 11);
    \u0275\u0275text(14, "Gatunek");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 11);
    \u0275\u0275text(16, "Choroba");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 11);
    \u0275\u0275text(18, "Obecna liczba \u017Ceton\xF3w");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 11);
    \u0275\u0275text(20, "Wymagana liczba \u017Ceton\xF3w");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 11);
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, SickPetsManagerComponent_ng_template_12_div_0_tr_24_Template, 27, 10, "tr", 12);
    \u0275\u0275pipe(25, "paginate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 13)(27, "pagination-controls", 14);
    \u0275\u0275listener("pageChange", function SickPetsManagerComponent_ng_template_12_div_0_Template_pagination_controls_pageChange_27_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r19 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r19.page = $event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(25, 1, ctx_r13.pets, \u0275\u0275pureFunction2(4, _c06, ctx_r13.petsPerPage, ctx_r13.page)));
  }
}
function SickPetsManagerComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SickPetsManagerComponent_ng_template_12_div_0_Template, 28, 7, "div", 8);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.pets.length > 0);
  }
}
var _SickPetsManagerComponent = class _SickPetsManagerComponent {
  constructor(routingService, spinnerService, breakPointService, apiSickPetsService) {
    this.routingService = routingService;
    this.spinnerService = spinnerService;
    this.breakPointService = breakPointService;
    this.apiSickPetsService = apiSickPetsService;
    this.isMobile = false;
    this.faPlus = faPlus;
    this.page = 1;
    this.petsPerPage = 4;
  }
  ngOnInit() {
    this.spinnerService.show();
    this.getSickPets();
    this.checkDeviceSize();
  }
  getSickPets() {
    this.apiSickPetsService.getSickPets().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllPets(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  handleAllPets(data) {
    this.pets = data;
  }
  deleteSickPetWindow(petId, petName) {
    const newConfirmBox = new ConfirmBoxInitializer();
    newConfirmBox.setTitle("Usuwanie chorego zwierz\u0119cia");
    newConfirmBox.setMessage("Czy na pewno chcesz usun\u0105\u0107 chore zwierz\u0119 o imieniu " + petName + " ?");
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: "center"
      // optional
    });
    newConfirmBox.setButtonLabels("Tak", "Nie");
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.deleteSickPet(petId);
      }
    });
  }
  deleteSickPet(petId) {
    this.spinnerService.show();
    this.apiSickPetsService.deleteSickPet(petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError();
      }
    });
  }
  handleResponse() {
    alertify.success("Usun\u0105\u0142e\u015B chore zwierz\u0119");
    const url = "/sick-pets-manager";
    this.routingService.redirectTo(url);
  }
  handleError() {
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
};
_SickPetsManagerComponent.\u0275fac = function SickPetsManagerComponent_Factory(t) {
  return new (t || _SickPetsManagerComponent)(\u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiSickPetsService));
};
_SickPetsManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SickPetsManagerComponent, selectors: [["app-sick-pets-manager"]], decls: 14, vars: 4, consts: [[1, "app-background", "text-center", "text-light", "p-5"], [1, "app-background", "px-6", "d-flex", "justify-content-center", "pb-3"], [1, "p-1"], ["type", "button", "routerLink", "/sick-pets-manager/add", 1, "btn", "btn-primary", "btn-rounded"], [3, "icon"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], [4, "ngIf"], [1, "px-6", "app-background", "table-responsive"], [1, "table", "table-striped", "table-dark", "table-sm", "table-bordered", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "app-background", "d-flex", "justify-content-center", "items-center", "p-3"], ["previousLabel", "", "nextLabel", "", 1, "paginator", 3, "pageChange"], ["scope", "row"], [1, "img-size-my-pet", 3, "src"], [1, "pt-2"], ["type", "button", 1, "btn", "btn-info", "p-2", 3, "routerLink"], [1, "text-center", "pt-2"], ["type", "button", 1, "btn", "btn-info", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "img-size-my-pet-mobile", 3, "src"], ["type", "button", 1, "btn", "btn-info", "p-1", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function SickPetsManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "h2");
    \u0275\u0275text(3, " Chore zwierz\u0119ta - Menad\u017Cer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 1)(5, "div", 2)(6, "button", 3);
    \u0275\u0275text(7, " Dodaj ");
    \u0275\u0275element(8, "fa-icon", 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SickPetsManagerComponent_div_9_Template, 1, 0, "div", 5)(10, SickPetsManagerComponent_ng_template_10_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(12, SickPetsManagerComponent_ng_template_12_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(11);
    const _r4 = \u0275\u0275reference(13);
    \u0275\u0275advance(8);
    \u0275\u0275property("icon", ctx.faPlus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isMobile)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, FaIconComponent, PaginationControlsComponent, NavbarComponent, PaginatePipe], styles: ['\n\n.paginator[_ngcontent-%COMP%] {\n  font-family: "Lato", sans-serif;\n  font-size: 15px;\n  color: white !important;\n  padding: 5px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination {\n  display: flex;\n  gap: 4px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background: #6a994e;\n  border-radius: 4px;\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination a {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination .disabled {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #E4A11B;\n  border-radius: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  text-decoration: none;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:focus, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #d4d4d4;\n}\n/*# sourceMappingURL=sick-pets-manager.component.css.map */'] });
var SickPetsManagerComponent = _SickPetsManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SickPetsManagerComponent, { className: "SickPetsManagerComponent", filePath: "src\\app\\sick-pets-manager\\sick-pets-manager.component.ts", lineNumber: 21 });
})();

// src/app/add-sick-pet/add-sick-pet.component.ts
function AddSickPetComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Imi\u0119 jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function AddSickPetComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Gatunek jest wymagany");
    \u0275\u0275elementEnd();
  }
}
function AddSickPetComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Gatunek musi mie\u0107 minimalnie 3 znaki");
    \u0275\u0275elementEnd();
  }
}
function AddSickPetComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Wpisanie choroby jest obowi\u0105zkowe");
    \u0275\u0275elementEnd();
  }
}
function AddSickPetComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Nazwa choroby musi mie\u0107 minimalnie 3 znaki");
    \u0275\u0275elementEnd();
  }
}
function AddSickPetComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Liczba \u017Ceton\xF3w nie mo\u017Ce by\u0107 pusta");
    \u0275\u0275elementEnd();
  }
}
function AddSickPetComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Minimalna liczba wymaganych \u017Ceton\xF3w to 1");
    \u0275\u0275elementEnd();
  }
}
function AddSickPetComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Zdj\u0119cie jest wymagane");
    \u0275\u0275elementEnd();
  }
}
var _AddSickPetComponent = class _AddSickPetComponent {
  constructor(formBuilder, router, spinnerService, apiSickPetsService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.spinnerService = spinnerService;
    this.apiSickPetsService = apiSickPetsService;
    this.hasSubmitted = false;
    this.error = [];
    this.addSickPetForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      species: ["", [Validators.required, Validators.minLength(3)]],
      disease: ["", [Validators.required, Validators.minLength(3)]],
      required_tokens: [1, [Validators.required, Validators.min(1)]],
      status: ["Aktywne", [Validators.required]],
      photo: [null, [Validators.required]]
    });
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];
    this.validateSickPetForm();
  }
  validateSickPetForm() {
    if (this.addSickPetForm.valid) {
      this.spinnerService.show();
      this.addSickPet();
    } else {
      console.log("Form is invalid");
    }
  }
  addSickPet() {
    this.apiSickPetsService.addSickPet(this.getFormData()).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  handleResponse() {
    this.router.navigate(["/sick-pets-manager"]);
    alertify.success("Dodano chore zwierz\u0119");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  onFileChange(event) {
    const photoToUpload = event.target.files[0];
    this.addSickPetForm.patchValue({ photo: photoToUpload });
    this.addSickPetForm.get("photo")?.updateValueAndValidity();
  }
  getFormData() {
    const formData = new FormData();
    formData.append("name", this.addSickPetForm.get("name")?.value);
    formData.append("species", this.addSickPetForm.get("species")?.value);
    formData.append("disease", this.addSickPetForm.get("disease")?.value);
    formData.append("required_tokens", this.addSickPetForm.get("required_tokens")?.value);
    formData.append("status", this.addSickPetForm.get("status")?.value);
    formData.append("photo", this.addSickPetForm.get("photo")?.value);
    return formData;
  }
};
_AddSickPetComponent.\u0275fac = function AddSickPetComponent_Factory(t) {
  return new (t || _AddSickPetComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(ApiSickPetsService));
};
_AddSickPetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddSickPetComponent, selectors: [["app-add-sick-pet"]], decls: 35, vars: 9, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "p-4", "text-light", "text-center"], [1, "text-light"], ["enctype", "multipart/form-data", 1, "form", 3, "formGroup", "ngSubmit"], ["for", "pet-name", 1, "form-label", "m-2"], ["type", "text", "id", "pet-name", "placeholder", "", "name", "pet-name", "formControlName", "name", 1, "form-control"], ["class", "text-danger p-1", 4, "ngIf"], ["for", "species", 1, "form-label", "m-2"], ["type", "text", "id", "species", "placeholder", "", "name", "species", "formControlName", "species", 1, "form-control"], ["for", "disease", 1, "form-label", "m-2"], ["type", "text", "id", "disease", "placeholder", "", "name", "disease", "formControlName", "disease", 1, "form-control"], ["for", "required_tokens", 1, "form-label", "m-2"], ["type", "number", "id", "required_tokens", "placeholder", "", "name", "required_tokens", "formControlName", "required_tokens", 1, "form-control"], ["for", "photo", 1, "form-label", "m-2"], ["type", "file", "id", "photo", "name", "photo", 1, "form-control", 3, "change"], [1, "text-center", "m-4"], ["type", "submit", 1, "btn", "btn-warning"], [1, "text-danger", "p-1"]], template: function AddSickPetComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Dodaj chore zwierz\u0119");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5);
    \u0275\u0275listener("ngSubmit", function AddSickPetComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "label", 6);
    \u0275\u0275text(10, "Imi\u0119:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275template(12, AddSickPetComponent_div_12_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(13, "label", 9);
    \u0275\u0275text(14, "Gatunek:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 10);
    \u0275\u0275template(16, AddSickPetComponent_div_16_Template, 2, 0, "div", 8)(17, AddSickPetComponent_div_17_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(18, "label", 11);
    \u0275\u0275text(19, "Choroba:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 12);
    \u0275\u0275template(21, AddSickPetComponent_div_21_Template, 2, 0, "div", 8)(22, AddSickPetComponent_div_22_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(23, "label", 13);
    \u0275\u0275text(24, "Wymagana liczba \u017Ceton\xF3w:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 14);
    \u0275\u0275template(26, AddSickPetComponent_div_26_Template, 2, 0, "div", 8)(27, AddSickPetComponent_div_27_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(28, "label", 15);
    \u0275\u0275text(29, "Dodaj zdj\u0119cie:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 16);
    \u0275\u0275listener("change", function AddSickPetComponent_Template_input_change_30_listener($event) {
      return ctx.onFileChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, AddSickPetComponent_div_31_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(32, "div", 17)(33, "button", 18);
    \u0275\u0275text(34, "Dodaj");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.addSickPetForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.addSickPetForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && (((tmp_1_0 = ctx.addSickPetForm.get("name")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.addSickPetForm.get("name")) == null ? null : tmp_1_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.addSickPetForm.get("species")) == null ? null : tmp_2_0.hasError("required")) && (((tmp_2_0 = ctx.addSickPetForm.get("species")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.addSickPetForm.get("species")) == null ? null : tmp_2_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.addSickPetForm.get("species")) == null ? null : tmp_3_0.hasError("minlength")) && (((tmp_3_0 = ctx.addSickPetForm.get("species")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.addSickPetForm.get("species")) == null ? null : tmp_3_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.addSickPetForm.get("disease")) == null ? null : tmp_4_0.hasError("required")) && (((tmp_4_0 = ctx.addSickPetForm.get("disease")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.addSickPetForm.get("disease")) == null ? null : tmp_4_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.addSickPetForm.get("disease")) == null ? null : tmp_5_0.hasError("minlength")) && (((tmp_5_0 = ctx.addSickPetForm.get("disease")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.addSickPetForm.get("disease")) == null ? null : tmp_5_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.addSickPetForm.get("required_tokens")) == null ? null : tmp_6_0.hasError("required")) && (((tmp_6_0 = ctx.addSickPetForm.get("required_tokens")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.addSickPetForm.get("required_tokens")) == null ? null : tmp_6_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.addSickPetForm.get("required_tokens")) == null ? null : tmp_7_0.hasError("min")) && (((tmp_7_0 = ctx.addSickPetForm.get("required_tokens")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.addSickPetForm.get("required_tokens")) == null ? null : tmp_7_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.addSickPetForm.get("photo")) == null ? null : tmp_8_0.hasError("required")) && (((tmp_8_0 = ctx.addSickPetForm.get("photo")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.addSickPetForm.get("photo")) == null ? null : tmp_8_0.touched) || ctx.hasSubmitted));
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=add-sick-pet.component.css.map */"] });
var AddSickPetComponent = _AddSickPetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddSickPetComponent, { className: "AddSickPetComponent", filePath: "src\\app\\add-sick-pet\\add-sick-pet.component.ts", lineNumber: 14 });
})();

// src/app/edit-sick-pet/edit-sick-pet.component.ts
function EditSickPetComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Imi\u0119 jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function EditSickPetComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Gatunek jest wymagany");
    \u0275\u0275elementEnd();
  }
}
function EditSickPetComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Gatunek musi mie\u0107 minimalnie 3 znaki");
    \u0275\u0275elementEnd();
  }
}
function EditSickPetComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Wpisanie choroby jest obowi\u0105zkowe");
    \u0275\u0275elementEnd();
  }
}
function EditSickPetComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Nazwa choroby musi mie\u0107 minimalnie 3 znaki");
    \u0275\u0275elementEnd();
  }
}
function EditSickPetComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Liczba \u017Ceton\xF3w nie mo\u017Ce by\u0107 pusta");
    \u0275\u0275elementEnd();
  }
}
function EditSickPetComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Minimalna liczba wymaganych \u017Ceton\xF3w to 1");
    \u0275\u0275elementEnd();
  }
}
var _EditSickPetComponent = class _EditSickPetComponent {
  constructor(formBuilder, router, route, spinnerService, apiSickPetsService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.spinnerService = spinnerService;
    this.apiSickPetsService = apiSickPetsService;
    this.hasSubmitted = false;
    this.userId = 1;
    this.error = [];
    this.editSickPetForm = this.formBuilder.group({
      id: [0, [Validators.required]],
      name: ["", [Validators.required]],
      species: ["", [Validators.required, Validators.minLength(3)]],
      disease: ["", [Validators.required, Validators.minLength(3)]],
      required_tokens: [1, [Validators.required, Validators.min(1)]],
      status: ["Aktywne", [Validators.required]]
    });
  }
  ngOnInit() {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();
    this.getSickPetToEdit();
  }
  getSickPetToEdit() {
    this.apiSickPetsService.getSickPetToEdit(this.petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleSickPet(data);
      }
    });
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];
    this.validateSickPetForm();
  }
  validateSickPetForm() {
    if (this.editSickPetForm.valid) {
      this.spinnerService.show();
    } else {
      console.log("Form is invalid");
    }
  }
  editSickPet() {
    this.apiSickPetsService.editSickPet(this.petId, this.getFormData()).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  handleSickPet(data) {
    this.pet = data;
    this.editSickPetForm.patchValue({
      id: this.pet.id,
      name: this.pet.name,
      species: this.pet.species,
      disease: this.pet.disease,
      required_tokens: this.pet.required_tokens,
      status: this.pet.status
    });
  }
  handleResponse() {
    this.router.navigate(["/sick-pets-manager"]);
    alertify.success("Edytowano chore zwierz\u0119");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  getFormData() {
    const formData = this.editSickPetForm.getRawValue();
    return formData;
  }
  cancelEditing() {
    this.router.navigate(["/sick-pets-manager"]);
    alertify.warning("Anulowano edycj\u0119");
  }
};
_EditSickPetComponent.\u0275fac = function EditSickPetComponent_Factory(t) {
  return new (t || _EditSickPetComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(ApiSickPetsService));
};
_EditSickPetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditSickPetComponent, selectors: [["app-edit-sick-pet"]], decls: 35, vars: 8, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "p-4", "text-light", "text-center"], [1, "text-light"], [1, "form", 3, "formGroup", "ngSubmit"], ["for", "pet-name", 1, "form-label", "m-2"], ["type", "text", "id", "pet-name", "placeholder", "", "name", "pet-name", "formControlName", "name", 1, "form-control"], ["class", "text-danger p-1", 4, "ngIf"], ["for", "species", 1, "form-label", "m-2"], ["type", "text", "id", "species", "placeholder", "", "name", "species", "formControlName", "species", 1, "form-control"], ["for", "disease", 1, "form-label", "m-2"], ["type", "text", "id", "disease", "placeholder", "", "name", "disease", "formControlName", "disease", 1, "form-control"], ["for", "required_tokens", 1, "form-label", "m-2"], ["type", "number", "id", "required_tokens", "placeholder", "", "name", "required_tokens", "formControlName", "required_tokens", 1, "form-control"], [1, "d-flex", "flex-row", "justify-content-center", "p-4"], [1, "text-center", "me-2", "mt-4", "d-inline"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "text-center", "m-2", "mt-4", "d-inline"], ["type", "submit", 1, "btn", "btn-info"], [1, "text-danger", "p-1"]], template: function EditSickPetComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Edytuj zwierz\u0119");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "form", 5);
    \u0275\u0275listener("ngSubmit", function EditSickPetComponent_Template_form_ngSubmit_8_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(9, "label", 6);
    \u0275\u0275text(10, "Imi\u0119:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275template(12, EditSickPetComponent_div_12_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(13, "label", 9);
    \u0275\u0275text(14, "Gatunek:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 10);
    \u0275\u0275template(16, EditSickPetComponent_div_16_Template, 2, 0, "div", 8)(17, EditSickPetComponent_div_17_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(18, "label", 11);
    \u0275\u0275text(19, "Choroba:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 12);
    \u0275\u0275template(21, EditSickPetComponent_div_21_Template, 2, 0, "div", 8)(22, EditSickPetComponent_div_22_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(23, "label", 13);
    \u0275\u0275text(24, "Wymagana liczba \u017Ceton\xF3w:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 14);
    \u0275\u0275template(26, EditSickPetComponent_div_26_Template, 2, 0, "div", 8)(27, EditSickPetComponent_div_27_Template, 2, 0, "div", 8);
    \u0275\u0275elementStart(28, "div", 15)(29, "div", 16)(30, "button", 17);
    \u0275\u0275listener("click", function EditSickPetComponent_Template_button_click_30_listener() {
      return ctx.cancelEditing();
    });
    \u0275\u0275text(31, "Anuluj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 18)(33, "button", 19);
    \u0275\u0275text(34, "Edytuj");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.editSickPetForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.editSickPetForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && (((tmp_1_0 = ctx.editSickPetForm.get("name")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.editSickPetForm.get("name")) == null ? null : tmp_1_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.editSickPetForm.get("species")) == null ? null : tmp_2_0.hasError("required")) && (((tmp_2_0 = ctx.editSickPetForm.get("species")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.editSickPetForm.get("species")) == null ? null : tmp_2_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.editSickPetForm.get("species")) == null ? null : tmp_3_0.hasError("minlength")) && (((tmp_3_0 = ctx.editSickPetForm.get("species")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.editSickPetForm.get("species")) == null ? null : tmp_3_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.editSickPetForm.get("disease")) == null ? null : tmp_4_0.hasError("required")) && (((tmp_4_0 = ctx.editSickPetForm.get("disease")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.editSickPetForm.get("disease")) == null ? null : tmp_4_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.editSickPetForm.get("disease")) == null ? null : tmp_5_0.hasError("minlength")) && (((tmp_5_0 = ctx.editSickPetForm.get("disease")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.editSickPetForm.get("disease")) == null ? null : tmp_5_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.editSickPetForm.get("required_tokens")) == null ? null : tmp_6_0.hasError("required")) && (((tmp_6_0 = ctx.editSickPetForm.get("required_tokens")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.editSickPetForm.get("required_tokens")) == null ? null : tmp_6_0.touched) || ctx.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.editSickPetForm.get("required_tokens")) == null ? null : tmp_7_0.hasError("min")) && (((tmp_7_0 = ctx.editSickPetForm.get("required_tokens")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.editSickPetForm.get("required_tokens")) == null ? null : tmp_7_0.touched) || ctx.hasSubmitted));
  }
}, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=edit-sick-pet.component.css.map */"] });
var EditSickPetComponent = _EditSickPetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditSickPetComponent, { className: "EditSickPetComponent", filePath: "src\\app\\edit-sick-pet\\edit-sick-pet.component.ts", lineNumber: 14 });
})();

// src/app/edit-sick-pet-photo/edit-sick-pet-photo.component.ts
function EditSickPetPhotoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.pet.photo_path, \u0275\u0275sanitizeUrl)("ngClass", ctx_r0.isMobile ? "img-size-pet-mobile" : "img-size-pet");
  }
}
function EditSickPetPhotoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Zdj\u0119cie jest wymagane");
    \u0275\u0275elementEnd();
  }
}
var _EditSickPetPhotoComponent = class _EditSickPetPhotoComponent {
  constructor(formBuilder, router, route, spinnerService, breakPointService, apiSickPetsService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.spinnerService = spinnerService;
    this.breakPointService = breakPointService;
    this.apiSickPetsService = apiSickPetsService;
    this.isMobile = false;
    this.hasSubmitted = false;
    this.userId = 1;
    this.error = [];
    this.editSickPetPhotoForm = this.formBuilder.group({
      photo: [null, [Validators.required]]
    });
  }
  ngOnInit() {
    this.petId = this.route.snapshot.params.id;
    this.spinnerService.show();
    this.getSickPetToEdit();
    this.checkDeviceSize();
  }
  getSickPetToEdit() {
    this.apiSickPetsService.getSickPetToEdit(this.petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleSickPetToEdit(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = [];
    this.validateSickPetPhotoForm();
  }
  validateSickPetPhotoForm() {
    if (this.editSickPetPhotoForm.valid) {
      this.spinnerService.show();
      this.editSickPetPhoto();
    } else {
      console.log("Form is invalid");
    }
  }
  editSickPetPhoto() {
    this.apiSickPetsService.editSickPetPhoto(this.petId, this.getFormData()).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  handleResponse() {
    this.router.navigate(["/sick-pets-manager"]);
    alertify.success("Zmieniono zdj\u0119cie");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  handleSickPetToEdit(data) {
    this.pet = data;
  }
  onFileChange(event) {
    const photoToUpload = event.target.files[0];
    this.editSickPetPhotoForm.patchValue({ photo: photoToUpload });
    this.editSickPetPhotoForm.get("photo")?.updateValueAndValidity();
  }
  getFormData() {
    const formData = new FormData();
    formData.append("photo", this.editSickPetPhotoForm.get("photo")?.value);
    return formData;
  }
  cancelEditing() {
    this.router.navigate(["/sick-pets-manager"]);
    alertify.warning("Anulowano zmian\u0119 zdj\u0119cia");
  }
};
_EditSickPetPhotoComponent.\u0275fac = function EditSickPetPhotoComponent_Factory(t) {
  return new (t || _EditSickPetPhotoComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiSickPetsService));
};
_EditSickPetPhotoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditSickPetPhotoComponent, selectors: [["app-edit-sick-pet-photo"]], decls: 21, vars: 3, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "p-4", "text-light", "text-center"], ["class", "p-4 text-center", 4, "ngIf"], [1, "text-light"], ["enctype", "multipart/form-data", 1, "form", 3, "formGroup", "ngSubmit"], ["for", "photo", 1, "form-label", "m-2"], ["type", "file", "id", "photo", "name", "photo", 1, "form-control", 3, "change"], ["class", "text-danger p-1", 4, "ngIf"], [1, "d-flex", "flex-row", "justify-content-center", "p-4"], [1, "text-center", "me-2", "mt-4", "d-inline"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "text-center", "m-2", "mt-4", "d-inline"], ["type", "submit", 1, "btn", "btn-info"], [1, "p-4", "text-center"], [3, "src", "ngClass"], [1, "text-danger", "p-1"]], template: function EditSickPetPhotoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Zmie\u0144 zdj\u0119cie");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, EditSickPetPhotoComponent_div_7_Template, 2, 2, "div", 4);
    \u0275\u0275elementStart(8, "div", 5)(9, "form", 6);
    \u0275\u0275listener("ngSubmit", function EditSickPetPhotoComponent_Template_form_ngSubmit_9_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(10, "label", 7);
    \u0275\u0275text(11, "Wybierz nowe zdj\u0119cie:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 8);
    \u0275\u0275listener("change", function EditSickPetPhotoComponent_Template_input_change_12_listener($event) {
      return ctx.onFileChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, EditSickPetPhotoComponent_div_13_Template, 2, 0, "div", 9);
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "button", 12);
    \u0275\u0275listener("click", function EditSickPetPhotoComponent_Template_button_click_16_listener() {
      return ctx.cancelEditing();
    });
    \u0275\u0275text(17, "Anuluj");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "button", 14);
    \u0275\u0275text(20, "Zmie\u0144 zdj\u0119cie");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.pet);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.editSickPetPhotoForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.editSickPetPhotoForm.get("photo")) == null ? null : tmp_2_0.hasError("required")) && (((tmp_2_0 = ctx.editSickPetPhotoForm.get("photo")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.editSickPetPhotoForm.get("photo")) == null ? null : tmp_2_0.touched) || ctx.hasSubmitted));
  }
}, dependencies: [NgClass, NgIf, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=edit-sick-pet-photo.component.css.map */"] });
var EditSickPetPhotoComponent = _EditSickPetPhotoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditSickPetPhotoComponent, { className: "EditSickPetPhotoComponent", filePath: "src\\app\\edit-sick-pet-photo\\edit-sick-pet-photo.component.ts", lineNumber: 15 });
})();

// src/app/users/users.component.ts
function UsersComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function UsersComponent_ng_template_5_div_0_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 12)(13, "button", 13);
    \u0275\u0275listener("click", function UsersComponent_ng_template_5_div_0_tr_18_Template_button_click_13_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r10);
      const user_r7 = restoredCtx.$implicit;
      const ctx_r9 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r9.deleteUserWindow(user_r7.id, user_r7.name, user_r7.surname));
    });
    \u0275\u0275text(14, "Usu\u0144");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.surname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.tokens_count);
  }
}
var _c07 = (a0, a1) => ({ itemsPerPage: a0, currentPage: a1 });
function UsersComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "table", 6)(3, "thead")(4, "tr")(5, "th", 7);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 7);
    \u0275\u0275text(8, "Imi\u0119");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 7);
    \u0275\u0275text(10, "Nazwisko");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 7);
    \u0275\u0275text(12, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 7);
    \u0275\u0275text(14, "Ilo\u015B\u0107 \u017Ceton\xF3w");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 7);
    \u0275\u0275text(16, "Akcja");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, UsersComponent_ng_template_5_div_0_tr_18_Template, 15, 5, "tr", 8);
    \u0275\u0275pipe(19, "paginate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 9)(21, "pagination-controls", 10);
    \u0275\u0275listener("pageChange", function UsersComponent_ng_template_5_div_0_Template_pagination_controls_pageChange_21_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r11 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r11.page = $event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(19, 1, ctx_r5.users, \u0275\u0275pureFunction2(4, _c07, ctx_r5.usersPerPage, ctx_r5.page)));
  }
}
function UsersComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UsersComponent_ng_template_5_div_0_Template, 22, 7, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.users.length > 0);
  }
}
function UsersComponent_ng_template_7_div_0_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 12)(5, "button", 15);
    \u0275\u0275listener("click", function UsersComponent_ng_template_7_div_0_tr_18_Template_button_click_5_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r18);
      const user_r15 = restoredCtx.$implicit;
      const ctx_r17 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r17.deleteUserWindow(user_r15.id, user_r15.name, user_r15.surname));
    });
    \u0275\u0275text(6, "Usu\u0144");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r16 + 1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(user_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r15.surname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r15.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r15.tokens_count);
  }
}
function UsersComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 14)(2, "table", 6)(3, "thead")(4, "tr")(5, "th", 7);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 7);
    \u0275\u0275text(8, "Akcja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 7);
    \u0275\u0275text(10, "Imi\u0119");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 7);
    \u0275\u0275text(12, "Nazwisko");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 7);
    \u0275\u0275text(14, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 7);
    \u0275\u0275text(16, "Ilo\u015B\u0107 \u017Ceton\xF3w");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, UsersComponent_ng_template_7_div_0_tr_18_Template, 15, 5, "tr", 8);
    \u0275\u0275pipe(19, "paginate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 9)(21, "pagination-controls", 10);
    \u0275\u0275listener("pageChange", function UsersComponent_ng_template_7_div_0_Template_pagination_controls_pageChange_21_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r19 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r19.page = $event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(19, 1, ctx_r13.users, \u0275\u0275pureFunction2(4, _c07, ctx_r13.usersPerPage, ctx_r13.page)));
  }
}
function UsersComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UsersComponent_ng_template_7_div_0_Template, 22, 7, "div", 4);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.users.length > 0);
  }
}
var _UsersComponent = class _UsersComponent {
  constructor(apiService, routingService, spinnerService, breakPointService) {
    this.apiService = apiService;
    this.routingService = routingService;
    this.spinnerService = spinnerService;
    this.breakPointService = breakPointService;
    this.isMobile = false;
    this.page = 1;
    this.usersPerPage = 4;
  }
  ngOnInit() {
    this.spinnerService.show();
    this.getUsers();
    this.checkDeviceSize();
  }
  getUsers() {
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleAllUsers(data);
        console.log(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  handleAllUsers(data) {
    this.users = data;
  }
  deleteUserWindow(userId, userName, userSurname) {
    const newConfirmBox = new ConfirmBoxInitializer();
    newConfirmBox.setTitle("Usuwanie u\u017Cytkownika");
    newConfirmBox.setMessage("Czy na pewno chcesz usun\u0105\u0107 u\u017Cytkownika " + userName + " " + userSurname + " ?");
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER,
      animationIn: AppearanceAnimation.BOUNCE_IN,
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: "center"
      // optional
    });
    newConfirmBox.setButtonLabels("Tak", "Nie");
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.success) {
        this.deleteUser(userId);
      }
    });
  }
  deleteUser(petId) {
    this.spinnerService.show();
    this.apiService.deleteUser(petId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError();
      }
    });
  }
  handleResponse() {
    alertify.success("Usun\u0105\u0142e\u015B u\u017Cytkownika");
    const url = "/users";
    this.routingService.redirectTo(url);
  }
  handleError() {
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
};
_UsersComponent.\u0275fac = function UsersComponent_Factory(t) {
  return new (t || _UsersComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(BreakpointObserver));
};
_UsersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 9, vars: 3, consts: [[1, "app-background", "text-center", "text-light", "p-5"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], [4, "ngIf"], [1, "px-6", "app-background"], [1, "table", "table-striped", "table-dark", "table-sm", "table-bordered", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "app-background", "d-flex", "justify-content-center", "items-center", "p-3"], ["previousLabel", "", "nextLabel", "", 1, "paginator", 3, "pageChange"], ["scope", "row"], [1, "text-center", "d-inline"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "px-6", "app-background", "table-responsive"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function UsersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "h2");
    \u0275\u0275text(3, " Zarajestrowani u\u017Cytkownicy");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UsersComponent_div_4_Template, 1, 0, "div", 1)(5, UsersComponent_ng_template_5_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, UsersComponent_ng_template_7_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(6);
    const _r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.isMobile)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgForOf, NgIf, PaginationControlsComponent, NavbarComponent, PaginatePipe], styles: ['\n\n.paginator[_ngcontent-%COMP%] {\n  font-family: "Lato", sans-serif;\n  font-size: 15px;\n  color: white !important;\n  padding: 5px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination {\n  display: flex;\n  gap: 4px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background: #6a994e;\n  border-radius: 4px;\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination a {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination .disabled {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #E4A11B;\n  border-radius: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  text-decoration: none;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:focus, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #d4d4d4;\n}\n/*# sourceMappingURL=users.component.css.map */'] });
var UsersComponent = _UsersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src\\app\\users\\users.component.ts", lineNumber: 20 });
})();

// src/app/guards/admin.guard.ts
var adminGuard = (route, state2) => {
  const router = inject(Router);
  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  if (tokenService.loggedIn()) {
    const user = authService.getUser();
    if (user.role != "admin") {
      router.navigate(["/"]);
      return false;
    } else {
      return true;
    }
  } else {
    router.navigate(["/login"]);
    return false;
  }
};

// src/app/message-list-element/message-list-element.component.ts
var _MessageListElementComponent = class _MessageListElementComponent {
  constructor(routingService, messagesService, apiMessagessService) {
    this.routingService = routingService;
    this.messagesService = messagesService;
    this.apiMessagessService = apiMessagessService;
    this.faUser = faUser;
    this.conversation = {
      id: 0,
      user_name: "a",
      user_surname: "a",
      pet_name: "a",
      pet_photo: "a"
    };
    this.messagesCount = 0;
    this.messagesService.conversationMessagesCountObs.subscribe(([messagesCount, conversationId]) => this.updateConversationMessagesCount(messagesCount, conversationId));
  }
  ngOnInit() {
    this.getConversationMessagesCount();
    this.messagesService.conversationMessagesCountObs.subscribe(([messagesCount, conversationId]) => this.updateConversationMessagesCount(messagesCount, conversationId));
  }
  getConversationMessagesCount() {
    this.apiMessagessService.getUnreadConversationMessagesCount(this.conversation.id).subscribe({
      next: (data) => {
        this.getUnreadMessagesCount(data);
      }
    });
  }
  selectConversation() {
    const url = "/messages/" + this.conversation.id;
    this.routingService.redirectTo(url);
  }
  getUnreadMessagesCount(data) {
    this.messagesCount = data.messagesCount;
  }
  updateConversationMessagesCount(messagesCount, conversationId) {
    if (this.conversation.id == conversationId) {
      this.messagesCount = messagesCount;
    }
  }
};
_MessageListElementComponent.\u0275fac = function MessageListElementComponent_Factory(t) {
  return new (t || _MessageListElementComponent)(\u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(MessagesService), \u0275\u0275directiveInject(ApiMessagesService));
};
_MessageListElementComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageListElementComponent, selectors: [["app-message-list-element"]], inputs: { conversation: "conversation" }, decls: 10, vars: 7, consts: [["id", "message-element", 1, "p-3", "bg-success", "border", "d-flex", "justify-content-between", 3, "click"], [1, "fa-1x", "d-inline", "pe-2"], [3, "icon"], [1, "d-inline", "ps-2"], [1, "d-inline", "ps-2", "position-relative"], [1, "img-message-list-size", "rounded-circle", 3, "src"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger", 3, "ngClass"]], template: function MessageListElementComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function MessageListElementComponent_Template_div_click_0_listener() {
      return ctx.selectConversation();
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "fa-icon", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275element(7, "img", 5);
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx.faUser);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx.conversation.user_name, " ", ctx.conversation.user_surname, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.conversation.pet_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.conversation.pet_photo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx.messagesCount > 0 ? "visible" : "invisible");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.messagesCount, " ");
  }
}, dependencies: [NgClass, FaIconComponent], styles: ["\n\n.img-message-list-size[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n}\n#message-element[_ngcontent-%COMP%]:hover {\n  background-color: #E4A11B !important;\n  cursor: pointer !important;\n}\n#message-element[_ngcontent-%COMP%]:not(:hover) {\n  background-color: #14A44D !important;\n  cursor: default !important;\n}\n/*# sourceMappingURL=message-list-element.component.css.map */"] });
var MessageListElementComponent = _MessageListElementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageListElementComponent, { className: "MessageListElementComponent", filePath: "src\\app\\message-list-element\\message-list-element.component.ts", lineNumber: 13 });
})();

// src/app/messages-bar/messages-bar.component.ts
function MessagesBarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function MessagesBarComponent_ng_template_2_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "app-message-list-element", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("conversation", conversation_r11);
  }
}
function MessagesBarComponent_ng_template_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "input", 10);
    \u0275\u0275listener("ngModelChange", function MessagesBarComponent_ng_template_2_div_4_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r12 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r12.searchText = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, MessagesBarComponent_ng_template_2_div_4_div_3_Template, 2, 1, "div", 11);
    \u0275\u0275pipe(4, "search");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r9.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(4, 2, ctx_r9.convsersations, ctx_r9.searchText));
  }
}
function MessagesBarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h4");
    \u0275\u0275text(3, "Wszystkie");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, MessagesBarComponent_ng_template_2_div_4_Template, 5, 5, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.convsersations != null);
  }
}
function MessagesBarComponent_ng_template_4_h4_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "h4");
  }
}
function MessagesBarComponent_ng_template_4_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "app-message-list-element", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("conversation", conversation_r18);
  }
}
function MessagesBarComponent_ng_template_4_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "input", 10);
    \u0275\u0275listener("ngModelChange", function MessagesBarComponent_ng_template_4_div_3_div_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r19 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r19.searchText = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, MessagesBarComponent_ng_template_4_div_3_div_1_div_3_Template, 2, 1, "div", 11);
    \u0275\u0275pipe(4, "search");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r16.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(4, 2, ctx_r16.convsersations, ctx_r16.searchText));
  }
}
function MessagesBarComponent_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MessagesBarComponent_ng_template_4_div_3_div_1_Template, 5, 5, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r15.convsersations != null);
  }
}
function MessagesBarComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275listener("click", function MessagesBarComponent_ng_template_4_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.toggleSidebar());
    });
    \u0275\u0275template(2, MessagesBarComponent_ng_template_4_h4_2_Template, 1, 0, "h4", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MessagesBarComponent_ng_template_4_div_3_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const _r6 = \u0275\u0275reference(7);
    const _r8 = \u0275\u0275reference(9);
    \u0275\u0275property("ngClass", !ctx_r3.isCollapsed ? "sidebar" : "sidebar-collapsed");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.isCollapsed)("ngIfThen", _r6)("ngIfElse", _r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isCollapsed);
  }
}
function MessagesBarComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 16);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r5.faAnglesRight);
  }
}
function MessagesBarComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 16);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r7.faAnglesLeft);
  }
}
var _MessagesBarComponent = class _MessagesBarComponent {
  constructor(breakPointService, apiMessagessService) {
    this.breakPointService = breakPointService;
    this.apiMessagessService = apiMessagessService;
    this.isMobile = false;
    this.isBigMobile = false;
    this.isCollapsed = false;
    this.faAnglesRight = faAnglesRight;
    this.faAnglesLeft = faAnglesLeft;
  }
  ngOnInit() {
    this.getConversations();
    this.checkDeviceSize();
  }
  getConversations() {
    this.apiMessagessService.getConversations().subscribe({
      next: (data) => {
        this.handleConversations(data);
      },
      error: (error) => {
        this.handleError();
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).subscribe((result) => {
      this.isMobile = false;
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        this.isBigMobile = true;
      } else {
        this.isBigMobile = false;
      }
    });
  }
  handleConversations(data) {
    this.convsersations = data;
  }
  handleError() {
    alertify.error("Wyst\u0105pi\u0142 problem z wy\u015Bwietleniem konwersjacji");
  }
  toggleSidebar() {
    if (this.isCollapsed) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }
};
_MessagesBarComponent.\u0275fac = function MessagesBarComponent_Factory(t) {
  return new (t || _MessagesBarComponent)(\u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiMessagesService));
};
_MessagesBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagesBarComponent, selectors: [["app-messages-bar"]], decls: 10, vars: 3, consts: [["href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], ["rightArrows", ""], ["leftArrows", ""], [1, "rounded", "rounded", "bg-primary", "text-light", "vh-100"], [1, "border-bottom", "pt-2", "pb-2", "d-flex", "justify-content-center"], [4, "ngIf"], [1, "p-3"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "\uF002 Szukaj", 1, "form-control", 2, "font-family", "Arial, FontAwesome", 3, "ngModel", "ngModelChange"], ["class", "p-1", 4, "ngFor", "ngForOf"], [1, "p-1"], [3, "conversation"], [1, "rounded", "rounded", "sidebar-color", "text-light", "vh-100", 3, "ngClass"], [1, "border-bottom", "pt-2", "pb-2", "d-flex", "justify-content-center", "text-primary", 3, "click"], [3, "icon"]], template: function MessagesBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "link", 0);
    \u0275\u0275template(1, MessagesBarComponent_div_1_Template, 1, 0, "div", 1)(2, MessagesBarComponent_ng_template_2_Template, 5, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, MessagesBarComponent_ng_template_4_Template, 4, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(6, MessagesBarComponent_ng_template_6_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(8, MessagesBarComponent_ng_template_8_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(3);
    const _r4 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isMobile || ctx.isBigMobile)("ngIfThen", _r4)("ngIfElse", _r2);
  }
}, dependencies: [NgClass, NgForOf, NgIf, FaIconComponent, DefaultValueAccessor, NgControlStatus, NgModel, MessageListElementComponent, SearchPipe], styles: ["\n\n.vh-100[_ngcontent-%COMP%] {\n  min-height: 150vh;\n}\n.vw-30[_ngcontent-%COMP%] {\n  min-width: 30vw;\n}\n.sidebar-collapsed[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 23px;\n}\n.sidebar-color[_ngcontent-%COMP%] {\n  background-color: #bde0fe;\n}\n/*# sourceMappingURL=messages-bar.component.css.map */"] });
var MessagesBarComponent = _MessagesBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagesBarComponent, { className: "MessagesBarComponent", filePath: "src\\app\\messages-bar\\messages-bar.component.ts", lineNumber: 14 });
})();

// src/app/message/message.component.ts
var _MessageComponent = class _MessageComponent {
  constructor(authService) {
    this.authService = authService;
    this.isSenderMessage = false;
    this.conversationMessage = {
      content: "",
      user_name: "",
      user_surname: "",
      date: "",
      sender_id: 0
    };
  }
  ngOnInit() {
    this.authUser = this.authService.getUser();
    this.checkSender();
  }
  checkSender() {
    if (this.conversationMessage.sender_id == this.authUser.id) {
      this.isSenderMessage = true;
    } else {
      this.isSenderMessage = false;
    }
  }
};
_MessageComponent.\u0275fac = function MessageComponent_Factory(t) {
  return new (t || _MessageComponent)(\u0275\u0275directiveInject(AuthService));
};
_MessageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageComponent, selectors: [["app-message"]], inputs: { conversationMessage: "conversationMessage" }, decls: 8, vars: 5, consts: [[1, "text-light", "text-start", "rounded", 3, "ngClass"], [1, "ps-2", "pe-2", "pt-1", "pb-1", "text-warning"], [1, "text-dark"], [1, "p-2"]], template: function MessageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h6", 1)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h5", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngClass", ctx.isSenderMessage ? "float-end bg-secondary" : "float-start theme-bgr");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx.conversationMessage.user_name, " ", ctx.conversationMessage.user_surname, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.conversationMessage.date, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.conversationMessage.content);
  }
}, dependencies: [NgClass], styles: ["\n\n/*# sourceMappingURL=message.component.css.map */"] });
var MessageComponent = _MessageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageComponent, { className: "MessageComponent", filePath: "src\\app\\message\\message.component.ts", lineNumber: 10 });
})();

// src/app/conversation/conversation.component.ts
function ConversationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function ConversationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "fa-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "h4");
    \u0275\u0275text(5, " Zobacz wiadomo\u015Bci z dost\u0119pnych konwersacji ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "h4");
    \u0275\u0275text(8, " lub ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "h4");
    \u0275\u0275text(11, " przegl\u0105dnij zwierz\u0119ta do adopcji i rozpocznij rozmowy ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "div", 10)(14, "button", 11);
    \u0275\u0275text(15, " Zwierz\u0119ta do adopcji ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.isMobile ? "ps-3" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.faEnvelope);
  }
}
function ConversationComponent_ng_template_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r5.conversation.pet_photo, \u0275\u0275sanitizeUrl);
  }
}
function ConversationComponent_ng_template_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "app-message", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("conversationMessage", message_r7);
  }
}
var _c08 = (a0, a1) => ({ itemsPerPage: a0, currentPage: a1 });
function ConversationComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12)(2, "div", 13)(3, "h5");
    \u0275\u0275text(4, "Wiadomo\u015B\u0107 o: ");
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " z ");
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275template(11, ConversationComponent_ng_template_4_div_11_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "h4");
    \u0275\u0275text(14, "Napisz wiadomo\u015B\u0107");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 18);
    \u0275\u0275listener("ngModelChange", function ConversationComponent_ng_template_4_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.message.content = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "button", 19);
    \u0275\u0275listener("click", function ConversationComponent_ng_template_4_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.sendMessage());
    });
    \u0275\u0275text(18, "Wy\u015Blij");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 20);
    \u0275\u0275template(20, ConversationComponent_ng_template_4_div_20_Template, 2, 1, "div", 21);
    \u0275\u0275pipe(21, "paginate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.isMobile ? "ps-3" : "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.conversation.pet_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.conversation.user_name, " ", ctx_r3.conversation.user_surname, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.conversation.pet_photo != "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.message.content);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(21, 7, ctx_r3.conversationMessages, \u0275\u0275pureFunction2(10, _c08, ctx_r3.petsPerPage, ctx_r3.page)));
  }
}
var _ConversationComponent = class _ConversationComponent {
  constructor(route, spinnerService, routingService, messagesService, breakPointService, apiMessagessService) {
    this.route = route;
    this.spinnerService = spinnerService;
    this.routingService = routingService;
    this.messagesService = messagesService;
    this.breakPointService = breakPointService;
    this.apiMessagessService = apiMessagessService;
    this.isMobile = false;
    this.faEnvelope = faEnvelope;
    this.conversationId = 0;
    this.conversation = {
      id: 0,
      user_name: "",
      user_surname: "",
      pet_name: "",
      pet_photo: ""
    };
    this.message = {
      content: "",
      conversation_id: 0
    };
    this.unreadMessagesCount = 0;
    this.unreadConversationMessagesCount = 0;
    this.page = 1;
    this.petsPerPage = 10;
  }
  ngOnInit() {
    this.conversationId = this.route.snapshot.params.id;
    if (this.conversationId != void 0) {
      this.spinnerService.show();
      this.getConversations();
      this.getMessages();
    }
    this.checkDeviceSize();
  }
  getConversations() {
    this.apiMessagessService.getConversation(this.conversationId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleConversation(data);
      }
    });
  }
  getMessages() {
    this.apiMessagessService.getMessages(this.conversationId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleConversationMessages(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  handleConversation(data) {
    this.conversation = data;
  }
  handleConversationMessages(data) {
    this.conversationMessages = data;
    this.updateMessageCount();
    this.updateConversationMessagesCount();
  }
  updateMessageCount() {
    this.apiMessagessService.getUnreadMessagesCount().subscribe({
      next: (data) => {
        this.updateUnreadMessagesCount(data);
      }
    });
  }
  updateConversationMessagesCount() {
    this.apiMessagessService.getUnreadConversationMessagesCount(this.conversationId).subscribe({
      next: (data) => {
        this.updateUnreadConversationMessagesCount(data);
      }
    });
  }
  sendMessage() {
    if (this.message.content.length > 0) {
      this.spinnerService.show();
      this.message.conversation_id = this.conversationId;
      this.createMessage();
    }
  }
  createMessage() {
    this.apiMessagessService.createMessage(this.message).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleMessageResponse();
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleMessageError(error);
      }
    });
  }
  handleMessageResponse() {
    this.message.content = "";
    alertify.success("Wys\u0142ano wiadomo\u015B\u0107");
    const url = "/messages/" + this.conversation.id;
    this.routingService.redirectTo(url);
  }
  handleMessageError(error) {
    alertify.error("Wyst\u0105pi\u0142 problem podczas wys\u0142ania wiadomo\u015Bci!");
  }
  updateUnreadMessagesCount(data) {
    this.unreadMessagesCount = data.messagesCount;
    this.messagesService.updateMessagesCount(this.unreadMessagesCount);
  }
  updateUnreadConversationMessagesCount(data) {
    this.unreadConversationMessagesCount = data.messagesCount;
    this.messagesService.updateConversationMessagesCount(this.unreadConversationMessagesCount, this.conversationId);
  }
};
_ConversationComponent.\u0275fac = function ConversationComponent_Factory(t) {
  return new (t || _ConversationComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(MessagesService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiMessagesService));
};
_ConversationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConversationComponent, selectors: [["app-conversation"]], decls: 8, vars: 4, consts: [[1, "bg-primary", "rounded", "border-l", "vh-100", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["noConversations", ""], ["currentConversation", ""], [1, "app-background", "d-flex", "justify-content-center", "items-center", "p-3"], ["previousLabel", "", "nextLabel", "", 1, "paginator", 3, "pageChange"], [3, "ngClass"], [1, "fa-3x", "text-center", "text-light", "justify-center", "flex", "flex-col"], [3, "icon"], [1, "fa-3x", "text-center", "text-warning", "justify-center", "flex", "flex-col"], [1, "p-2"], ["type", "button", "routerLink", "/pets-to-adopt", 1, "btn", "text-light", "btn-rounded", 2, "background-color", "#6a994e"], [1, "text-center", "justify-center", "flex", "flex-col"], [1, "p-2", "text-light"], [1, "text-warning"], [1, "p-1", "bg-primary"], ["class", "", 4, "ngIf"], [1, "ps-4", "pt-4", "pe-4", "pb-3", "text-light"], ["id", "message", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [1, "mx-auto", "row", "ps-4", "pe-4", "pt-5", "pb-3"], ["class", "pb-2", 4, "ngFor", "ngForOf"], [1, ""], [1, "img-size-pet-message", "rounded-circle", 3, "src"], [1, "pb-2"], [3, "conversationMessage"]], template: function ConversationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, ConversationComponent_div_1_Template, 1, 0, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ConversationComponent_ng_template_2_Template, 16, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, ConversationComponent_ng_template_4_Template, 22, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "div", 4)(7, "pagination-controls", 5);
    \u0275\u0275listener("pageChange", function ConversationComponent_Template_pagination_controls_pageChange_7_listener($event) {
      return ctx.page = $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(3);
    const _r4 = \u0275\u0275reference(5);
    \u0275\u0275property("ngClass", ctx.isMobile ? "text-danger" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.conversationId == void 0)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgClass, NgForOf, NgIf, RouterLink, FaIconComponent, DefaultValueAccessor, NgControlStatus, NgModel, PaginationControlsComponent, MessageComponent, PaginatePipe], styles: ['\n\n.vh-100[_ngcontent-%COMP%] {\n  min-height: 150vh;\n}\n.vw-30[_ngcontent-%COMP%] {\n  min-width: 30vw;\n}\n.paginator[_ngcontent-%COMP%] {\n  font-family: "Lato", sans-serif;\n  font-size: 15px;\n  color: white !important;\n  padding: 5px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination {\n  display: flex;\n  gap: 4px;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background: #6a994e;\n  border-radius: 4px;\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination a {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]  .ngx-pagination .disabled {\n  color: white !important;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #E4A11B;\n  border-radius: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  text-decoration: none;\n}\n.paginator[_ngcontent-%COMP%]     .ngx-pagination a:focus, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #d4d4d4;\n}\n/*# sourceMappingURL=conversation.component.css.map */'] });
var ConversationComponent = _ConversationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConversationComponent, { className: "ConversationComponent", filePath: "src\\app\\conversation\\conversation.component.ts", lineNumber: 19 });
})();

// src/app/messages-panel/messages-panel.component.ts
function MessagesPanelComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function MessagesPanelComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275element(3, "app-messages-bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275element(5, "app-conversation");
    \u0275\u0275elementEnd()()();
  }
}
function MessagesPanelComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275element(3, "app-messages-bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275element(5, "app-conversation");
    \u0275\u0275elementEnd()()();
  }
}
var _MessagesPanelComponent = class _MessagesPanelComponent {
  constructor(messagesService, breakPointService) {
    this.messagesService = messagesService;
    this.breakPointService = breakPointService;
    this.isMobile = false;
    this.isBigMobile = false;
    this.messagesCount = 0;
  }
  ngOnInit() {
    this.messagesService.messagesCountObs.subscribe((messagesCount) => this.messagesCount = messagesCount);
    this.checkDeviceSize();
  }
  checkDeviceSize() {
    this.breakPointService.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).subscribe((result) => {
      this.isMobile = false;
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        this.isBigMobile = true;
      } else {
        this.isBigMobile = false;
      }
    });
  }
};
_MessagesPanelComponent.\u0275fac = function MessagesPanelComponent_Factory(t) {
  return new (t || _MessagesPanelComponent)(\u0275\u0275directiveInject(MessagesService), \u0275\u0275directiveInject(BreakpointObserver));
};
_MessagesPanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagesPanelComponent, selectors: [["app-messages-panel"]], decls: 12, vars: 3, consts: [[1, "app-background", "center"], [1, "mx-auto", "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "pb-4", "text-light", "text-center"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], [1, "app-background", "px-6"], [1, "mx-auto", "row", "pt-2"], [1, "col-4"], [1, "col-8"], [1, "app-background"], [1, "pt-2"], [1, "d-inline", "position-absolute"], [1, "d-inline"]], template: function MessagesPanelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
    \u0275\u0275text(6, "Wiadomo\u015Bci");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(7, MessagesPanelComponent_div_7_Template, 1, 0, "div", 4)(8, MessagesPanelComponent_ng_template_8_Template, 6, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(10, MessagesPanelComponent_ng_template_10_Template, 6, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(9);
    const _r4 = \u0275\u0275reference(11);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.isMobile || ctx.isBigMobile)("ngIfThen", _r4)("ngIfElse", _r2);
  }
}, dependencies: [NgIf, NavbarComponent, MessagesBarComponent, ConversationComponent], styles: ["\n\n.vh-100[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.vw-30[_ngcontent-%COMP%] {\n  min-width: 30vw;\n}\n/*# sourceMappingURL=messages-panel.component.css.map */"] });
var MessagesPanelComponent = _MessagesPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagesPanelComponent, { className: "MessagesPanelComponent", filePath: "src\\app\\messages-panel\\messages-panel.component.ts", lineNumber: 10 });
})();

// node_modules/@fireflysemantics/angular-stripe-service/fesm2020/fireflysemantics-angular-stripe-service.mjs
var STRIPE_API_URL = "https://js.stripe.com/v3/";
var AngularStripeService = class {
  constructor() {
    this._stripe = window["Stripe"];
    this.stripePromise = this.inject();
  }
  get stripe() {
    return this._stripe;
  }
  set stripe(s) {
    this._stripe = s;
  }
  setPublishableKey(key, options) {
    return this.stripePromise.then(() => {
      return this.stripe(key, options);
    });
  }
  inject() {
    if (this.stripe) {
      return Promise.resolve(this.stripe);
    }
    return new Promise((res, rej) => {
      const head = this.getHeadElement();
      const script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", STRIPE_API_URL);
      head.appendChild(script);
      script.addEventListener("load", () => {
        this.stripe = window["Stripe"];
        res(this.stripe);
      });
    });
  }
  /**
   * Returns the `head` element.
   * @throws Error('Application does not have a head element');
   */
  getHeadElement() {
    let elm = document.getElementsByTagName("head")[0];
    if (!elm) {
      throw new Error("Application does not have a head element");
    }
    return elm;
  }
};
AngularStripeService.\u0275fac = function AngularStripeService_Factory(t) {
  return new (t || AngularStripeService)();
};
AngularStripeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: AngularStripeService,
  factory: AngularStripeService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularStripeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

// src/app/payment/payment.component.ts
var _c09 = ["cardInfo"];
function PaymentComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function PaymentComponent_ng_template_5_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r7.error);
  }
}
function PaymentComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "h5", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 8);
    \u0275\u0275element(6, "i", 9);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275element(9, "fa-icon", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "form", 14, 15);
    \u0275\u0275listener("ngSubmit", function PaymentComponent_ng_template_5_Template_form_ngSubmit_15_listener() {
      \u0275\u0275restoreView(_r9);
      const _r5 = \u0275\u0275reference(16);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onSubmit(_r5));
    });
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17)(19, "label", 18);
    \u0275\u0275text(20, "Karta p\u0142atnicza");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "div", 19, 20);
    \u0275\u0275template(23, PaymentComponent_ng_template_5_div_23_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 22)(25, "button", 23);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "uppercase");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.bundle.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.bundle.tokens_count, " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faSackDollar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.bundle.price, " ", \u0275\u0275pipeBind1(12, 8, ctx_r1.bundle.currency), " ");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Zap\u0142a\u0107 ", ctx_r1.bundle.price, " ", \u0275\u0275pipeBind1(27, 10, ctx_r1.bundle.currency), "");
  }
}
function PaymentComponent_ng_template_7_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r12.error);
  }
}
function PaymentComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "div", 6)(5, "h5", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 8);
    \u0275\u0275element(8, "i", 9);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275element(11, "fa-icon", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 11);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "uppercase");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 29)(16, "div", 30)(17, "form", 14, 15);
    \u0275\u0275listener("ngSubmit", function PaymentComponent_ng_template_7_Template_form_ngSubmit_17_listener() {
      \u0275\u0275restoreView(_r14);
      const _r10 = \u0275\u0275reference(18);
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.onSubmit(_r10));
    });
    \u0275\u0275elementStart(19, "div", 16)(20, "div", 17)(21, "label", 18);
    \u0275\u0275text(22, "Karta p\u0142atnicza");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 19, 20);
    \u0275\u0275template(25, PaymentComponent_ng_template_7_div_25_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 22)(27, "button", 23);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "uppercase");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.bundle.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.bundle.tokens_count, " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r3.faSackDollar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.bundle.price, " ", \u0275\u0275pipeBind1(14, 8, ctx_r3.bundle.currency), " ");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r3.error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Zap\u0142a\u0107 ", ctx_r3.bundle.price, " ", \u0275\u0275pipeBind1(29, 10, ctx_r3.bundle.currency), "");
  }
}
var _PaymentComponent = class _PaymentComponent {
  constructor(route, router, spinnerService, changeDetector, angularStripeService, stripeService, breakPointService, apiTokensService) {
    this.route = route;
    this.router = router;
    this.spinnerService = spinnerService;
    this.changeDetector = changeDetector;
    this.angularStripeService = angularStripeService;
    this.stripeService = stripeService;
    this.breakPointService = breakPointService;
    this.apiTokensService = apiTokensService;
    this.isMobile = false;
    this.faSackDollar = faSackDollar;
    this.bundleId = 0;
    this.bundle = {
      id: 0,
      name: "",
      tokens_count: 0,
      price: 0,
      currency: "pln",
      intent_id: ""
    };
    this.loading = false;
    this.clSecret = "";
    this.cardHandler = this.onChange.bind(this);
    this.error = "";
  }
  ngOnInit() {
    this.bundleId = this.route.snapshot.params.id;
    this.spinnerService.show();
    this.getBundle();
    this.checkDeviceSize();
    this.intent = this.stripeService.getIntent();
  }
  getBundle() {
    this.apiTokensService.getbundle(this.bundleId).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleBundle(data);
      }
    });
  }
  checkDeviceSize() {
    this.breakPointService.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  ngAfterViewInit() {
    this.angularStripeService.setPublishableKey("pk_test_51OrcDGEWRNv9J4W30uKuSTxXolrFz4Yxfrxqp2ndhzRB7fYauRp8umR0o8DFQ6HAKu8cfyMCDl7JmLUuiK4pLqJI002Qyu35zf").then((stripe) => {
      console.log("Stripe: " + stripe);
      this.stripe = stripe;
      const elements = stripe.elements();
      this.card = elements.create("card");
      this.card.mount(this.cardInfo.nativeElement);
      this.card.addEventListener("change", this.cardHandler);
    });
  }
  handleBundle(data) {
    this.bundle = data;
  }
  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = "";
    }
    this.changeDetector.detectChanges();
  }
  onSubmit(form) {
    return __async(this, null, function* () {
      const { token, error } = yield this.stripe.createToken(this.card);
      this.clSecret = this.intent.intent.client_secret;
      this.bundle.intent_id = this.intent.intent.id;
      if (error) {
        console.log("Error:", error);
      } else {
        this.spinnerService.show();
        this.storePayment();
      }
    });
  }
  storePayment() {
    this.apiTokensService.storePayment(this.bundle).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handlePaymentResponse(data);
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handlePaymentError();
      }
    });
  }
  handlePaymentResponse(data) {
    this.stripe.confirmCardPayment(this.clSecret, {
      receipt_email: "",
      payment_method: {
        card: this.card,
        billing_details: {
          name: "",
          email: ""
        }
      }
    }).then((res) => {
      if (res.paymentIntent && res.paymentIntent.status === "succeeded") {
        alertify.success("Do\u0142adowano \u017Cetony");
        this.router.navigate(["/tokens-bundles"]);
      } else {
        const errorCode = res.error.message;
        alertify.error(errorCode);
      }
    });
  }
  handlePaymentError() {
    alertify.error("Wyst\u0105pi\u0142 problem!");
  }
  ngOnDestroy() {
    this.card.removeEventListener("change", this.cardHandler);
    this.card.destroy();
  }
};
_PaymentComponent.\u0275fac = function PaymentComponent_Factory(t) {
  return new (t || _PaymentComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SpinnerService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(AngularStripeService), \u0275\u0275directiveInject(StripeService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ApiTokensService));
};
_PaymentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentComponent, selectors: [["app-payment"]], viewQuery: function PaymentComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c09, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cardInfo = _t.first);
  }
}, decls: 9, vars: 3, consts: [[1, "app-background", "text-center", "text-light", "p-5"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["desktop", ""], ["mobile", ""], [1, "mx-auto", "row", "app-background", "px-6", "justify-content-center", "text-center"], [1, "col-3", "card", "bg-c-blue", "order-card"], [1, "card-block"], [1, "m-b-20"], [1, "text-right"], [1, "fa", "fa-cart-plus", "f-left"], [1, "pe-1", 3, "icon"], [1, "m-b-0"], [1, "col-6"], [1, "ps-5"], [1, "checkout", 3, "ngSubmit"], ["checkout", "ngForm"], [1, "form-row", "p-2"], [1, "pb-2"], ["for", "card-info"], ["id", "card-info"], ["cardInfo", ""], ["id", "card-errors", "role", "alert", 4, "ngIf"], [1, "p-1"], ["type", "submit"], ["id", "card-errors", "role", "alert"], [1, "mx-auto", "row", "app-background", "justify-content-center", "text-center"], [1, "ps-3", "pe-3", "justify-content-center"], [1, "col-12", "card", "bg-c-blue", "order-card"], [1, "mx-auto"], [1, "col-12", "pb-2", "justify-content-center"], [1, "ps-1", "pe-1"]], template: function PaymentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "h2");
    \u0275\u0275text(3, " P\u0142atno\u015B\u0107");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, PaymentComponent_div_4_Template, 1, 0, "div", 1)(5, PaymentComponent_ng_template_5_Template, 28, 12, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, PaymentComponent_ng_template_7_Template, 30, 12, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(6);
    const _r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.isMobile)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgIf, FaIconComponent, \u0275NgNoValidate, NgControlStatusGroup, NgForm, NavbarComponent, UpperCasePipe], styles: ["\n\nbody[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #FAFAFA;\n}\n.order-card[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.bg-c-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #4099ff,\n      #73b4ff);\n}\n.bg-c-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #2ed8b6,\n      #59e0c5);\n}\n.bg-c-yellow[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #FFB64D,\n      #ffcb80);\n}\n.bg-c-pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #FF5370,\n      #ff869a);\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);\n  box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);\n  border: none;\n  margin-bottom: 30px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n.order-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.f-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.f-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  color: white;\n  background:\n    linear-gradient(\n      45deg,\n      #2ed8b6,\n      #59e0c5);\n  border-color: rgba(125, 200, 53, .7) !important;\n}\nform.checkout[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 2px solid #eee;\n  border-radius: 8px;\n  padding: 1rem 2rem;\n  background: white;\n  font-family: monospace;\n  color: #525252;\n  font-size: 1.1rem;\n}\nform.checkout[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  color: white;\n  background: #6a994e;\n  border: none;\n  border-radius: 4px;\n  margin-top: 1rem;\n}\nform.checkout[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background: rgb(165, 76, 43);\n}\n/*# sourceMappingURL=payment.component.css.map */"] });
var PaymentComponent = _PaymentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentComponent, { className: "PaymentComponent", filePath: "src\\app\\payment\\payment.component.ts", lineNumber: 24 });
})();

// src/app/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function ResetPasswordComponent_ng_template_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Imi\u0119 jest wymagane");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_template_6_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "E-mail jest wymagany");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_template_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Wpisz poprawny adres e-mail");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_template_6_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " Nie istnieje konto na powy\u017Csze dane! ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "h4");
    \u0275\u0275text(2, " Podaj imi\u0119 oraz adres e-mail, na kt\xF3re zarejestrowa\u0142e\u015B swoje konto. Na podany adres e-mail zostanie wys\u0142ane nowe has\u0142o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "form", 9);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_ng_template_6_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.onSubmit());
    });
    \u0275\u0275elementStart(7, "label", 10);
    \u0275\u0275text(8, "Imi\u0119:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 11);
    \u0275\u0275template(10, ResetPasswordComponent_ng_template_6_div_10_Template, 2, 0, "div", 12);
    \u0275\u0275elementStart(11, "label", 13);
    \u0275\u0275text(12, "E-mail:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 14);
    \u0275\u0275template(14, ResetPasswordComponent_ng_template_6_div_14_Template, 2, 0, "div", 12)(15, ResetPasswordComponent_ng_template_6_div_15_Template, 2, 0, "div", 12)(16, ResetPasswordComponent_ng_template_6_div_16_Template, 2, 0, "div", 12);
    \u0275\u0275elementStart(17, "div", 15)(18, "button", 16);
    \u0275\u0275text(19, "Wy\u015Blij");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.resetPasswordForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx_r1.resetPasswordForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && (((tmp_1_0 = ctx_r1.resetPasswordForm.get("name")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx_r1.resetPasswordForm.get("name")) == null ? null : tmp_1_0.touched) || ctx_r1.hasSubmitted));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.resetPasswordForm.get("email")) == null ? null : tmp_2_0.hasError("required")) && (((tmp_2_0 = ctx_r1.resetPasswordForm.get("email")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx_r1.resetPasswordForm.get("email")) == null ? null : tmp_2_0.touched) || ctx_r1.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.resetPasswordForm.get("email")) == null ? null : tmp_3_0.hasError("email")) && (((tmp_3_0 = ctx_r1.resetPasswordForm.get("email")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx_r1.resetPasswordForm.get("email")) == null ? null : tmp_3_0.touched) || ctx_r1.hasSubmitted));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
function ResetPasswordComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h4");
    \u0275\u0275text(2, " Na podany adres e-mail zosta\u0142o wys\u0142ane nowe has\u0142o.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19)(5, "button", 20);
    \u0275\u0275text(6, " Powr\xF3t do logowania ");
    \u0275\u0275elementEnd()()();
  }
}
var _ResetPasswordComponent = class _ResetPasswordComponent {
  constructor(formBuilder, apiService, spinnerService) {
    this.formBuilder = formBuilder;
    this.apiService = apiService;
    this.spinnerService = spinnerService;
    this.hasSubmitted = false;
    this.hasResetSend = false;
    this.error = null;
    this.resetPasswordForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]]
    });
  }
  ngOnInit() {
    this.hasSubmitted = false;
    this.hasResetSend = false;
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.error = null;
    this.validateResetPasswordForm();
  }
  validateResetPasswordForm() {
    if (this.resetPasswordForm.valid) {
      this.spinnerService.show();
      const formData = this.resetPasswordForm.getRawValue();
      this.resetPassword(formData);
    } else {
      console.log("Form is invalid");
    }
  }
  resetPassword(formData) {
    this.apiService.resetPassword(formData).subscribe({
      next: (data) => {
        this.spinnerService.hide();
        this.handleResponse(data);
      },
      error: (error) => {
        this.spinnerService.hide();
        this.handleError(error);
      }
    });
  }
  handleResponse(data) {
    this.hasResetSend = true;
    alertify.success("Nowe has\u0142o zosta\u0142o wys\u0142ane");
  }
  handleError(error) {
    this.error = error.error.error;
    alertify.error("B\u0142\u0119dne dane");
  }
};
_ResetPasswordComponent.\u0275fac = function ResetPasswordComponent_Factory(t) {
  return new (t || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(SpinnerService));
};
_ResetPasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 10, vars: 3, consts: [[1, "app-background", "center", "text-light", "p-5"], [1, "text-center"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["resetPassword", ""], ["sentResetPassword", ""], [1, "text-center", "px-7", "pt-2"], [1, "row", "justify-content-center", "px-6", "pt-5"], [1, "col-lg-5", "rounded"], [1, "text-light"], [1, "form", 3, "formGroup", "ngSubmit"], ["for", "name", 1, "form-label", "m-2"], ["type", "text", "id", "name", "placeholder", "", "name", "name", "formControlName", "name", 1, "form-control"], ["class", "text-danger p-1", 4, "ngIf"], ["for", "task-title", 1, "form-label", "m-2"], ["type", "email", "id", "task-title", "placeholder", "", "name", "task-title", "formControlName", "email", 1, "form-control"], [1, "text-center", "m-4"], ["type", "submit", 1, "btn", "btn-warning"], [1, "text-danger", "p-1"], [1, "d-flex", "justify-content-center", "pt-4"], [1, "p-2", "center", "px-7"], ["type", "button", "routerLink", "/login", 1, "btn", "text-light", "btn-rounded", 2, "background-color", "#6a994e"]], template: function ResetPasswordComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h2");
    \u0275\u0275text(4, " Resetowanie has\u0142a");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ResetPasswordComponent_div_5_Template, 1, 0, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ResetPasswordComponent_ng_template_6_Template, 20, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(8, ResetPasswordComponent_ng_template_8_Template, 7, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(7);
    const _r4 = \u0275\u0275reference(9);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.hasResetSend == false)("ngIfThen", _r2)("ngIfElse", _r4);
  }
}, dependencies: [NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=reset-password.component.css.map */"] });
var ResetPasswordComponent = _ResetPasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src\\app\\reset-password\\reset-password.component.ts", lineNumber: 13 });
})();

// src/app/routing/routes.ts
var routeConfig = [
  {
    path: "",
    component: HomeComponent,
    title: "Strona domowa"
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [notLoggedGuard],
    title: "Rejestracja"
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [notLoggedGuard],
    title: "Logowanie"
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
    canActivate: [notLoggedGuard],
    title: "Reset has\u0142a"
  },
  {
    path: "pets-to-adopt",
    component: PetsAdoptPageComponent,
    title: "Zwierz\u0119ta do adopcji"
  },
  {
    path: "pets-to-adopt/:id",
    component: PetAdoptPageComponent,
    canActivate: [loggedGuard],
    title: "Zwierz\u0119 do adopcji"
  },
  {
    path: "add-pet",
    component: AddPetComponent,
    canActivate: [loggedGuard],
    title: "Dodaj zwierz\u0119"
  },
  {
    path: "my-pets",
    component: MyPetsComponent,
    canActivate: [loggedGuard],
    title: "Moje zwierz\u0119ta"
  },
  {
    path: "my-pets/edit/:id",
    component: EditPetComponent,
    canActivate: [loggedGuard],
    title: "Edytuj zwierz\u0119"
  },
  {
    path: "my-pets/edit-photo/:id",
    component: EditPetPhotoComponent,
    canActivate: [loggedGuard],
    title: "Edytuj zdj\u0119cie"
  },
  {
    path: "saved-pets",
    component: SavedPetsComponent,
    canActivate: [loggedGuard],
    title: "Zapisane zwierz\u0119ta"
  },
  {
    path: "sick-pets",
    component: SickPetsPageComponent,
    canActivate: [loggedGuard],
    title: "Chore zwierz\u0119ta"
  },
  {
    path: "sick-pets-manager",
    component: SickPetsManagerComponent,
    canActivate: [adminGuard],
    title: "Chore zwierz\u0119ta - Menad\u017Cer"
  },
  {
    path: "sick-pets-manager/add",
    component: AddSickPetComponent,
    canActivate: [adminGuard],
    title: "Dodaj chore zwierz\u0119"
  },
  {
    path: "sick-pets-manager/edit/:id",
    component: EditSickPetComponent,
    canActivate: [adminGuard],
    title: "Edytuj chore zwierz\u0119"
  },
  {
    path: "sick-pets-manager/edit-photo/:id",
    component: EditSickPetPhotoComponent,
    canActivate: [adminGuard],
    title: "Edytuj zdj\u0119cie"
  },
  {
    path: "edit-profile",
    component: EditProfileComponent,
    canActivate: [loggedGuard],
    title: "Edytuj profil"
  },
  {
    path: "tokens-bundles",
    component: TokensComponent,
    canActivate: [loggedGuard],
    title: "Do\u0142aduj tokeny"
  },
  {
    path: "tokens-bundles/payment/:id",
    component: PaymentComponent,
    canActivate: [loggedGuard],
    title: "Dokonaj p\u0142atno\u015Bci"
  },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [adminGuard],
    title: "U\u017Cytkownicy"
  },
  {
    path: "messages",
    component: MessagesPanelComponent,
    canActivate: [loggedGuard],
    title: "Wiadomo\u015Bci"
  },
  {
    path: "messages/:id",
    component: MessagesPanelComponent,
    canActivate: [loggedGuard],
    title: "Wiadomo\u015Bci"
  }
];
var routes_default = routeConfig;

// src/app/app.module.ts
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  //provideClientHydration(),
  provideRouter(routes_default),
  provideHttpClient(withFetch())
], imports: [
  BrowserModule,
  AppRoutingModule,
  FontAwesomeModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgxAwesomePopupModule.forRoot(),
  DialogConfigModule.forRoot(),
  ConfirmBoxConfigModule.forRoot(),
  ToastNotificationConfigModule.forRoot(),
  NgxPaginationModule,
  BrowserAnimationsModule,
  NgxSpinnerModule,
  LayoutModule
] });
var AppModule = _AppModule;

// src/app/app.module.server.ts
var _AppServerModule = class _AppServerModule {
};
_AppServerModule.\u0275fac = function AppServerModule_Factory(t) {
  return new (t || _AppServerModule)();
};
_AppServerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppServerModule, bootstrap: [AppComponent] });
_AppServerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  AppModule,
  ServerModule
] });
var AppServerModule = _AppServerModule;

export {
  AppServerModule
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v17.1.2
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-FV2IWCO2.mjs.map
