import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home',loadChildren:()=> import('./home/home.module').then(m => m.HomeModule) },
  {path:'photos',loadChildren:()=> import('./photos/photos.module').then(m => m.PhotosModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
