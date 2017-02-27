import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { MdSidenav, MdDialog, MdDialogConfig, MdDialogRef  } from '@angular/material';

import { ModelsService } from './models.service';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  models: Model[] = [];
  selectedModel: Model;
  @ViewChild('sidenav') sidenav: MdSidenav;
  isDarkTheme = false;

  constructor(private modelsService: ModelsService, private vcr: ViewContainerRef,
    private mdDialog: MdDialog) {

  }

  ngOnInit() {
    this.models = this.modelsService.getAll();
  }

  showDetails(model: Model) {
    this.selectedModel = model;
  }
  addMessage() {
    const dialogConfig = new MdDialogConfig();
    dialogConfig.viewContainerRef = this.vcr;
    const dialog = this.mdDialog.open(AddMessageComponent, dialogConfig);
    (<any>dialog.componentInstance).selectedModel = this.selectedModel;
  }

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }
}

@Component({
  selector: 'add-message',
  template: `
    <form (submit)="addMessage()">
    <md-input-container>
      <input mdInput name="message" [(ngModel)]="message" placeholder="Message">
    </md-input-container>
    <button md-raised-button color="accent">Add Message</button>
  </form>
  `
})
export class AddMessageComponent {
  constructor(private mdDialogRef: MdDialogRef<AddMessageComponent>){

  }
  message = '';

  addMessage() {
    // 1. create message
    const newMessage = { who: 'John Doe', content: this.message };
    // 2. add message to selected model
    const selectedModel : Model = (<any>this.mdDialogRef.componentInstance).selectedModel;
    selectedModel.messages.push(newMessage);
    // 3. close dialog
    this.mdDialogRef.close();
  } 
}
