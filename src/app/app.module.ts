import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ShowComponent} from './show/show.component';
import {RouterModule, Routes} from "@angular/router";
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path: "", component: ShowComponent},
  {path:"detail", component:DetailComponent},
  {path:"create", component: CreateComponent},
  {path:"edit", component: EditComponent},
  {path:"delete", component: DeleteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    DetailComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
