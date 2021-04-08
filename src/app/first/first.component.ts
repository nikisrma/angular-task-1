import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  [x: string]: any;
 
  constructor(private sharedService:SharedService) { }
  
  ngOnInit(): void {
  }
   
  onSelectFile(event: any){
    this.sharedService.sendClickEvent();
   }

  
}
