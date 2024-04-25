import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the bearer token from local storage
    let authToken:any = localStorage.getItem('token');


    // Clone the request and add the authorization header if the token is available
    let modifiedRequest = request;
    if (authToken) {
      modifiedRequest = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest).pipe(
      catchError((error: any) => {
        // Handle errors here
        if (error instanceof HttpErrorResponse) {
          // Handle HTTP errors
          console.error('An HTTP error occurred:', error.message);
        } else {
          // Handle other errors
          console.error('An error occurred:', error.message);
        }
        // Forward the error to the caller of the HTTP request
        return throwError(error);
      })
    );
  }
}
