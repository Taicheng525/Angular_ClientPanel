import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../models/Settings';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings:Settings;

  constructor(
    public settingsService: SettingsService,
    public flashMessagesService: FlashMessagesService,
    public router:Router
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit(){
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show('Settings saved', {
      cssClass:'alert-danger', timeout: 4000
    });
    this.router.navigate(['/settings']);
  }
}
