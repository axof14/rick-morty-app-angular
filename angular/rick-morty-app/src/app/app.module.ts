import { MatInputModule } from '@angular/material/input';
import { LocationComponent } from './pages/location-page/location.component';
import { LocationModule } from './pages/location-page/location.module';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ListModule } from './pages/list-page/list.module';
import { HomeModule } from './pages/home-page/home.module';
import { ListComponent } from './pages/list-page/list.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './pages/home-page/home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from './pages/details/details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material';
import { AvatarComponent } from './pages/details/components/avatar/avatar.component';
import { InfoComponent } from './pages/details/components/info/info.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DetailsComponent,
    NotFoundComponent,
    LocationComponent,
    AvatarComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    CoreModule,
    HomeModule,
    MatSelectModule,
    MatListModule,
    LocationModule,
    FormsModule,
    MatFormFieldModule,
    LocationModule,
    MatInputModule,
    MatIconModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
