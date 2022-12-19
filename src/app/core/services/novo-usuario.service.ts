import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from 'src/app/shared/novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  private url = 'http://localhost:3000/user/sigup';

constructor(
  private http: HttpClient
) { }

cadastrar(novoUsuario: NovoUsuario):Observable<NovoUsuario>{
  return this.http.post<NovoUsuario>(this.url, novoUsuario)
}

}
