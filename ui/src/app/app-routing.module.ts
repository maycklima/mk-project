import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CartoesComponent } from './features/cartoes/cartoes.component';
import { CategoriaComponent } from './features/categoria/containers/index/categoria.component';
import { ConfiguracoesComponent } from './features/configuracoes/configuracoes.component';
import { ContasComponent } from './features/contas/contas.component';
import { DashboardsComponent } from './features/dashboards/dashboards.component';
import { MinhaContaComponent } from './features/minha-conta/minha-conta.component';
import { RelatoriosComponent } from './features/relatorios/relatorios.component';

export const routes: Routes = [
    { path:'', component: HomeComponent}, 
    { path:'dashboard', component: DashboardsComponent},
    { path:'gastos', component: HomeComponent}, 
    { path:'relatorios', component: RelatoriosComponent},
    { path:'configuracoes', component: ConfiguracoesComponent},
    { path:'minha-conta', component: MinhaContaComponent},
    { path:'contas', component: ContasComponent},
    { path:'cartoes', component: CartoesComponent},
    { path:'categorias', component: CategoriaComponent}
];  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }