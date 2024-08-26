import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor() { }
  @Output() searchValue: EventEmitter<string> = new EventEmitter();
  searchForm = new FormGroup({
    search: new FormControl("", [Validators.pattern("[a-zA-Z]*")])
  });

  get f(){ return this.searchForm.controls } 

  getSearch(){
    this.searchValue.emit((this.searchForm.value).search);
  }

  onEnter(evt:any){
    evt.preventDefault();
    this.searchValue.emit(evt.target.value);
  }

  ngOnInit(): void {
  }

}
