import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  nom?: string;
  email?: string;
  type_carte?: string;
  num_carte?: string;
  date_expiration?: string;
  code?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
