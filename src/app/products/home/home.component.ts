import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  products:any;
getProducts(){
  this.api.getProducts().subscribe((res)=>{
    this.products = res.response
  })
}
}
