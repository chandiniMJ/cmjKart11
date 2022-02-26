import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { addProd, regData } from '../Model/reg.model';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService
{

  regAPIUrl : string = "https://ty-shoping-cart.herokuapp.com"

  constructor(private _http:HttpClient) { }

  getData(regData: string)
  {
    // return this.http.post<any>(`${this.regAPIUrl}login`,regData)
    return this._http.post<{error:boolean,message:string,response:any}>(`${this.regAPIUrl}/auth/register`, regData);
  }

  loginUser(formData:any){
    return this._http.post<{error:boolean, token:string, message:string, response:any}>(`${this.regAPIUrl}/auth/login`,formData)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getProducts(){
    return this._http.get<{error:boolean,message:string,response:any, products:addProd[]}>(`${this.regAPIUrl}/product/product-data`)
  }

  addProduct(product:addProd){
    return this._http.post<{error:boolean,message:string,response:any}>(`${this.regAPIUrl}/product/add-product-data`, product)
}
}
