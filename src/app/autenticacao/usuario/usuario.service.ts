import { Usuario } from './../../shared/usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) { }

  private decodificaJwt(){
    const token = this.tokenService.retornaToken();
    const usuario = jwtDecode(token) as Usuario;
  }
}
