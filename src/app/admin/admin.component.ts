import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUsers:any=25
  currentAdmins:any=25
  currentProductsStock:any=25
  productData: any
  productForm!: FormGroup
  constructor(private router:Router,private apiService:ApiServiceService, private form: FormBuilder){}
  
  ngOnInit(): void {
    //Product adding
  this.productForm= this.form.group({
    // id: this.form.control (""),
    name: this.form.control('',Validators.required),
    price:this.form.control('',[Validators.required]),
    quantity:this.form.control('',Validators.required),
    imgUrl:this.form.control('',Validators.required)
  })
  this.getAllProductData()
  }

  panelOpenState = false;
  userrole='admin'
//Admin reg form
  adminForm:FormGroup=new FormGroup({
    fullname: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    role:new FormControl('',Validators.required)
  })
  
  validateadmin(){
    this.apiService.getData(this.adminForm.value).subscribe((res)=>{
      console.log(res,'res');

      alert(res.message)

      document.getElementById('closebtn1')?.click()

    },err=>{alert('Invalid User / User already exists')})
  }



validateproduct(){
  console.log(this.productForm.value);
  this.apiService.addProduct(this.productForm.value).subscribe(res=>{
    console.log('posted sucessfully'+res)
    console.log(res);
    this.productForm.reset();
    window.alert('posted sucessfully')
    this.getAllProductData()
   
  })
    document.getElementById('closebtn2')?.click() //for auto close once done
}

getAllProductData(){
  this.apiService.getProducts().subscribe((res)=>{
    this.productData = res.response
    window.alert("data fetched succesfully")
  })
}

// getData(){
//   this.apiService.getProduct.subscribe(res=>{
    
//   })
}



