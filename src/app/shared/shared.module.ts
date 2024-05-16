import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateNumberCachingPipe } from './pipe/plate-number-caching.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    PlateNumberCachingPipe,
  ],
  exports: [
    PlateNumberCachingPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class SharedModule { }
