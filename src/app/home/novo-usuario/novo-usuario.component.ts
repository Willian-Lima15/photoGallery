import { NovoUsuarioService } from './../../core/services/novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuarioSenhaIguaisValidator } from 'src/app/shared/usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  usuarioForm!: FormGroup;
  mensagem:string = ''

  constructor(
    private novoUsuarioService: NovoUsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      userName: ['',Validators.required],
      email: ['',Validators.compose(
        [Validators.required,
        Validators.email]
    )],
      fullName: ['',Validators.compose([
        Validators.required,
        Validators.min(2)
      ])],
      password: ['',Validators.compose([
        Validators.required
      ])]
    },
    {
      validators: [usuarioSenhaIguaisValidator]
    })
  }

  cadastrar(){
    this.novoUsuarioService.cadastrar(this.usuarioForm.value).subscribe(()=>{
      this.router.navigate(['']);
    })
    console.log(this.usuarioForm.value);
  }



}
