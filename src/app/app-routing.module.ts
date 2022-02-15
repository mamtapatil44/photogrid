import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { PhotoComparisionComponent } from './photo-comparision/photo-comparision.component';

const routes: Routes = [
  {
    path:'',component:PhotoComparisionComponent
  },
  {
    path:'photolist',component:PhotoComparisionComponent
  },
  {
    path:'comparephoto',component:AddPhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
