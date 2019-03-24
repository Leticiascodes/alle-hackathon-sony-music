import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '../app/home/home.component';
import {CategoriaComponent} from '../app/categoria/categoria.component';
import { BuscaComponent } from '../app/busca/busca.component';
import { ContaComponent } from '../app/conta/conta.component';
import { IntroducaoComponent } from '../app/introducao/introducao.component';


const routes: Routes =[
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'categoria', component: CategoriaComponent },
    {path: 'busca', component: BuscaComponent },
    {path: 'conta', component: ContaComponent },
    {path: 'introducao', component: IntroducaoComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule],
    declarations:[]
})

export class AppRoutingModule{}