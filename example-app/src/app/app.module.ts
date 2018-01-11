import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CreatComponent } from './creat/creat.component';
import { CreateOperatorComponent } from './create-operator/create-operator.component';
import { OperatorComponent } from './operator/operator.component';
import { HotColdComponent } from './hot-cold/hot-cold.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CreatComponent,
    CreateOperatorComponent,
    OperatorComponent,
    HotColdComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
