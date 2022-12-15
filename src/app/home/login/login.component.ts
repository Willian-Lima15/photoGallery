import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private auteService: AutenticacaoService,
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  login(){
    this.auteService.autenticar(this.usuario,this.senha).subscribe(()=>{
      this.router.navigate(['photos']);//Se for sucesso vai pra essa rota
    },
    (error)=>{
      alert("Usuário ou senha inválido")
      console.log(error);
    }
    );
  }

}
