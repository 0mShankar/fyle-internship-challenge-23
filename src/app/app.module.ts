import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataSharingService } from './data-sharing.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
