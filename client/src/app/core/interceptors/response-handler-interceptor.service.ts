import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor {

  constructor(public toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap((success) => {
        if (success instanceof HttpResponse) {
          if (success.url.endsWith('register') || success.url.endsWith('login')
            || success.url.endsWith('create') || success.url.includes('delete')
            || success.url.includes('edit')) {
            this.toastr.success(success.body.message, 'Success');
          }
        }
      }), catchError((err) => {
        this.toastr.error(err.error.message, 'Error');
        throw err;
      }));
  }
}
