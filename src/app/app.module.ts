import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { AnaliseDoComportamentoComponent } from './components/informacoes/analise-do-comportamento/analise-do-comportamento.component';
import { ArtigosETextosComponent } from './components/informacoes/artigos-e-textos/artigos-e-textos.component';
import { EticaComponent } from './components/informacoes/etica/etica.component';
import { MonitoriaComponent } from './components/informacoes/monitoria/monitoria.component';
import { FormsModule } from '@angular/forms';
import { AgendaComponent } from './components/aulas-praticas/agenda/agenda.component';
import { ProcedimentosComponent } from './components/aulas-praticas/procedimentos/procedimentos.component';
import { BuenoMetutinoComponent } from './components/aulas-praticas/agenda/bueno-metutino/bueno-metutino.component';
import { BuenoNoturnoComponent } from './components/aulas-praticas/agenda/bueno-noturno/bueno-noturno.component';
import { PerimetralNoturnoComponent } from './components/aulas-praticas/agenda/perimetral-noturno/perimetral-noturno.component';
import { ContatoProfessorComponent } from './components/equipe/contato-professor/contato-professor.component';
import { ContatoTecnicoComponent } from './components/equipe/contato-tecnico/contato-tecnico.component';
import { ContatoAmandaComponent } from './components/equipe/contato-amanda/contato-amanda.component';
import { ContatoJuliaComponent } from './components/equipe/contato-julia/contato-julia.component';
import { ContatoMatheusComponent } from './components/equipe/contato-matheus/contato-matheus.component';
import { ContatoHadasaComponent } from './components/equipe/contato-hadasa/contato-hadasa.component';
import { ContatoKatarineComponent } from './components/equipe/contato-katarine/contato-katarine.component';
import { LinhaDeBaseComponent } from './components/aulas-praticas/procedimentos/linha-de-base/linha-de-base.component';
import { TreinoAoBebedouroComponent } from './components/aulas-praticas/procedimentos/treino-ao-bebedouro/treino-ao-bebedouro.component';
import { ModelagemComponent } from './components/aulas-praticas/procedimentos/modelagem/modelagem.component';
import { CrfComponent } from './components/aulas-praticas/procedimentos/crf/crf.component';
import { ContatoMilenaComponent } from './components/equipe/contato-milena/contato-milena.component';
import { ExtincaoComponent } from './components/aulas-praticas/procedimentos/extincao/extincao.component';
import { RecondicionamentoComponent } from './components/aulas-praticas/procedimentos/recondicionamento/recondicionamento.component';
import { EsquemaRazaoFixaComponent } from './components/aulas-praticas/procedimentos/esquema-razao-fixa/esquema-razao-fixa.component';
import { EsquemaRazaoVariavelComponent } from './components/aulas-praticas/procedimentos/esquema-razao-variavel/esquema-razao-variavel.component';
import { TreinoDiscriminativoComponent } from './components/aulas-praticas/procedimentos/treino-discriminativo/treino-discriminativo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CadastrosComponent } from './components/aulas-praticas/cadastros/cadastros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacoesComponent,
    EquipeComponent,
    GerenciamentoComponent,
    AnaliseDoComportamentoComponent,
    ArtigosETextosComponent,
    EticaComponent,
    MonitoriaComponent,
    AgendaComponent,
    ProcedimentosComponent,
    BuenoMetutinoComponent,
    BuenoNoturnoComponent,
    PerimetralNoturnoComponent,
    ContatoProfessorComponent,
    ContatoTecnicoComponent,
    ContatoAmandaComponent,
    ContatoJuliaComponent,
    ContatoMatheusComponent,
    ContatoHadasaComponent,
    ContatoKatarineComponent,
    LinhaDeBaseComponent,
    TreinoAoBebedouroComponent,
    ModelagemComponent,
    CrfComponent,
    ContatoMilenaComponent,
    ExtincaoComponent,
    RecondicionamentoComponent,
    EsquemaRazaoFixaComponent,
    EsquemaRazaoVariavelComponent,
    TreinoDiscriminativoComponent,
    CadastrosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
