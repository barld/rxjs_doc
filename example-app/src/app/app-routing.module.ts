import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CreatComponent } from './creat/creat.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path: 'create', component: CreatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
