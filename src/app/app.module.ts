import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

// Módulos do Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// Componentes
import { LoginComponent } from './auth/pages/login/login.component';

// Interceptor de autenticação
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // outras rotas...
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  //exports: [RouterModule], // <-- importante!
  providers: [
    provideHttpClient(withInterceptors([AuthInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
