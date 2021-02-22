import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent.component';
import { ParseComponent} from './parse/parse.component';



const routes: Routes = [
  {path:'child', component:ChildComponent},
  {path:'parse' , component : ParseComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
