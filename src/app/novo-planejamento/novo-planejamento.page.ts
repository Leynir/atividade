import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
    this.mensagem = ""
  }
  mensagem;

  salvar(form){
    const planejamentoString = JSON.stringify(form.value);
    const nomePlajenamento = form.value.nome
    
    localStorage.setItem(nomePlajenamento, planejamentoString)
    
   
   
    
    form.reset()
    this.mensagem = 'Cadastro com sucesso'

    
    this.nav.back()
    

  }
}
