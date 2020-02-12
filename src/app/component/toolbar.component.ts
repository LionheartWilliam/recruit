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

  ngOnInit() {
  }

  //openCreateDialog(): void {
    //this.router.navigate(['create-register']);
    //const dialogRef = this.dialog.open(RegisterCreateDialogComponent, { width: '940px'});
    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The Delete dialog was closed');
    //});
  //}
}
