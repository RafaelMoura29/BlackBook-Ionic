import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard]  },
  { path: 'indicador', loadChildren: './pages/indicador/indicador.module#IndicadorPageModule', canActivate: [AuthGuard] },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule', canActivate: [AuthGuard] },
  { path: 'graficos', loadChildren: './pages/graficos/graficos.module#GraficosPageModule', canActivate: [AuthGuard] },
  { path: 'homeNoAuth', loadChildren: './home/home.module#HomePageModule' },
  { path: 'indicadorNoAuth', loadChildren: './pages/indicador/indicador.module#IndicadorPageModule' },
  { path: 'menuNoAuth', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'graficosNoAuth', loadChildren: './pages/graficos/graficos.module#GraficosPageModule' },
  { path: 'indicadores-entrada-saida', loadChildren: './pages/indicadores-entrada-saida/indicadores-entrada-saida.module#IndicadoresEntradaSaidaPageModule' },
  { path: 'cadastro-unidade', loadChildren: './pages/cadastro-unidade/cadastro-unidade.module#CadastroUnidadePageModule' },
  { path: 'cadastro-paciente', loadChildren: './pages/cadastro-paciente/cadastro-paciente.module#CadastroPacientePageModule' },
  { path: 'mortalidade-bruta', loadChildren: './pages/mortalidade-bruta/mortalidade-bruta.module#MortalidadeBrutaPageModule' },
  { path: 'leitos', loadChildren: './pages/leitos/leitos.module#LeitosPageModule' },
  { path: 'pagina-leitos', loadChildren: './pages/pagina-leitos/pagina-leitos.module#PaginaLeitosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
