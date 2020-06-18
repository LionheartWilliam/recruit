import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../services/auth.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public auth: AuthService

  ) { }

    currentDate: Date = new Date();
    
    startDate = new Date(2020,5,24);
    endDate = new Date(2020,6,1);

  ngOnInit() {
    //console.log(this.currentDate)
    //console.log(this.startDate)
    //console.log(this.endDate)
  }

  

  
  
    

}
