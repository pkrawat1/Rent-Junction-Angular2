import { bootstrap } from "angular2/platform/browser";
import { bind, provide } from "angular2/core";
import { FORM_PROVIDERS } from "angular2/common";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from "angular2/router";
import { HTTP_PROVIDERS, Http } from "angular2/http";
import { AuthConfig, AuthHttp } from "angular2-jwt";

// import {AuthHttp} from "angular2-jwt";
// import {Config, SATELLIZER_PROVIDERS, Auth} from "ng2-ui-auth";
import {AppComponent} from "./components/app.component";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
          tokenName: "jwt"
        }), http);
      },
      deps: [Http]
    }),
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log("AppComponent bootstrapped!"),
    error => console.log(error)
);
