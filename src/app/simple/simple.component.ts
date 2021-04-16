import { Component, OnInit } from '@angular/core';
import { SimpleServiceService } from '../simple-service.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  response: Object;

  constructor(private service: SimpleServiceService ) { }

  ngOnInit(): void {

    this.service.getPosts().subscribe(res=>{
      console.log("Response", res);
      this.response = res;
    }, (error)=>{
      console.log("No Response")
    })
  }



}
