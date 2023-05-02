import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class MiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      const tokenOb = localStorage.getItem('token'); // obtiene el token JWT desde el almacenamiento local
      const token = JSON.parse(tokenOb!);

      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `${token.token_type} ${token.access_token}` // agrega el token al encabezado "Authorization"
          }
        });
      }
      console.log(req);
      return next.handle(req);
    }
  }