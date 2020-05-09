import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';





@NgModule({
  declarations: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent],
  exports: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [RouterModule,
            CommonModule
  ]
})
export class SharedModule { }
