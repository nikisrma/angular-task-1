import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  
clickEventSubscription:Subscription;
  constructor(private sharedService:SharedService) { 
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(()=>{
    this.onSelectFile(event);
    });
  }

  ngOnInit(): void {
  }

  url = '';
   onSelectFile(event:  any) {
     if (event.target.files && event.target.files[0]) {
       var reader = new FileReader();
 
       reader.readAsDataURL(event.target.files[0]); // read file as data url
 
       reader.onload = (event: any) => { // called once readAsDataURL is completed
         console.log(event);
         this.url = event.target.result;
       }
     }
   }

}

