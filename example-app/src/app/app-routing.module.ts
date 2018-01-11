import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CreatComponent } from './creat/creat.component';
import { CreateOperatorComponent } from './create-operator/create-operator.component';
import { OperatorComponent } from './operator/operator.component';
import { HotColdComponent } from './hot-cold/hot-cold.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path: 'create', component: CreatComponent},
  {path: 'createOperator', component: CreateOperatorComponent},
  {path: 'operator', component: OperatorComponent},
  {path: 'hotcold', component: HotColdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
