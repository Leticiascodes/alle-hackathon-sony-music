import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '../app/home/home.component';
import {CategoriaComponent} from '../app/categoria/categoria.component';
import { BuscaComponent } from '../app/busca/busca.component';

const routes: Routes =[
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'categoria', component: CategoriaComponent },
    {path: 'busca', component: BuscaComponent },
];

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule],
    declarations:[]
})

export class AppRoutingModule{}