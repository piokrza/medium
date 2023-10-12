import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AccessToken } from '@core/constants';
import { PersistanceService } from '@core/services';

export const authInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const token = inject(PersistanceService).get(AccessToken) as string | undefined;

  request = request.clone({
    setHeaders: { Authorization: token ? `Token ${token}` : '' },
  });

  return next(request);
};
