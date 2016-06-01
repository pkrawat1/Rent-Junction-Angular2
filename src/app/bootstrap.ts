import { bootstrap } from "@angular/platform-browser-dynamic";
import { bind, provide, PLATFORM_DIRECTIVES } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router"
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from "@angular/common";
import { ROUTER_PROVIDERS } from "@angular/router";
import { HTTP_PROVIDERS, Http } from "@angular/http";

// import {AuthHttp} from "angular2-jwt";
// import {Config, SATELLIZER_PROVIDERS, Auth} from "ng2-ui-auth";
import {AppComponent} from "./components/app.component";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true}),
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log("AppComponent bootstrapped!"),
    error => console.log(error)
);
