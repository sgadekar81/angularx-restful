import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from '../srv/rest.service';

@NgModule({
  imports: [CommonModule],
  providers: [RestService]
})
export class AngularxRestful {
  constructor(){}
}