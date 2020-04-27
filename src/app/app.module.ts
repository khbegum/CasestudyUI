import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicGadgetsComponent } from './components/music-gadgets/music-gadgets.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http'
import {AuthService} from '../app/services/auth.service';
import {RegisterService} from '../app/services/register.service'
import { from } from 'rxjs';
import { AuthGuard } from './guards/auth.guard';
import { GadgetService } from './services/gadget.service';
import { GadgetEditComponent } from './components/gadget-edit/gadget-edit.component';
import { CartComponent } from './components/cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentDialogComponent } from './components/payment-dialog/payment-dialog.component';
import { MaterialModule } from './shared/material.module';
import { ThankDiaogComponent } from './components/thank-diaog/thank-diaog.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'gadgets',component:MusicGadgetsComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'edit/:_id',component:GadgetEditComponent},
  {path:'cart',component:CartComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicGadgetsComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    GadgetEditComponent,
    CartComponent,
    PaymentDialogComponent,
    ThankDiaogComponent
  ],
  entryComponents:[PaymentDialogComponent,ThankDiaogComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule,ReactiveFormsModule,MatCardModule,MatDialogModule, BrowserAnimationsModule
  ],
  providers: [RegisterService,AuthService,GadgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
