import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-bet',
  templateUrl: './create-bet.component.html',
  styleUrls: ['./create-bet.component.css']
})
export class CreateBetComponent implements OnInit {
  @ViewChild('createForm') createForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  create() {

  }
}
