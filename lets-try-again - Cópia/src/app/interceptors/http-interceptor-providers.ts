import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ForceSecureConnectionInterceptor } from "./force-secure-connection.interceptor";


export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ForceSecureConnectionInterceptor, multi: true},
];