import { UsuarioService } from './usuario/usuario.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private url = 'http://localhost:3000/user/login';

  constructor(
    private http: HttpClient,
    private usuarioService:UsuarioService
    ) { }

    autenticar(usuario:string, senha:string): Observable<HttpResponse<any>>{
      return this.http.post(this.url,
         {userName: usuario, password: senha},
        {observe:'response'}
        ).pipe(
          tap((res)=> {
            const authToken =  res.headers.get('x-access-token') ?? '';
            this.usuarioService.salvaToken(authToken);
          })
        )
    }
}
