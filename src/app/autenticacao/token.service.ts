import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken(){//usuário cadastrado
    return localStorage.getItem(KEY) ?? '';
  }

  salvarToken(token:string){//novo usuário
    return localStorage.setItem(KEY,token)
  }

  excluirToken(){//logOff sair
    return localStorage.removeItem(KEY)
  }

  possuiToken(){//verifica se já existe token cadastrado
    return !!this.retornaToken();
  }
}
