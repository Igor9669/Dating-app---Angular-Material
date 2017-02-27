import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Add Material Design and Angular Flex Layout
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// importing our service
import { ModelsService } from './models.service';

import { AppComponent, AddMessageComponent  } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMessageComponent
  ],
  // add to entryComponents
  entryComponents: [
    AppComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
