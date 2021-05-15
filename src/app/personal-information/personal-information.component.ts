import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent {
  message = "";
  
  constructor() {
  }
  
}
