import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-thank-diaog',
  templateUrl: './thank-diaog.component.html',
  styleUrls: ['./thank-diaog.component.css']
})
export class ThankDiaogComponent implements OnInit {

  constructor(private router:Router,public dialogRef: MatDialogRef<ThankDiaogComponent>) { }

  ngOnInit() {
  }
thankyou(){
 
this.router.navigate(['/'])

this.dialogRef.close();
window.location.reload();

}
}
