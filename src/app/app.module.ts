import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './shared/test/test.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { OffresEmploiComponent } from './first-workshop/offres-emploi/offres-emploi.component';
import { ArticleComponent } from './first-workshop/article/article.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddProductComponent } from './Core/add-product/add-product.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { UpdateProduitComponent } from './Core/update-produit/update-produit.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    FooterComponent,
    OffresEmploiComponent,
    ArticleComponent,
    LoginComponent,
    HeaderComponent,
    AddProductComponent,
    NotfoundComponent,
    UpdateProduitComponent,
    TemplateDrivenFormComponent,
    ToDoListComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
