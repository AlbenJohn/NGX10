import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { LeftpanelRoutingModule } from './leftpanel-routing.module';
import { LeftpanelComponent } from './leftpanel.component';

const routes: Routes = [{ path: '', component: LeftpanelComponent }];

@NgModule({
  declarations: [LeftpanelComponent],
  imports: [
    CommonModule,
    //LeftpanelRoutingModule
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LeftpanelModule { }
