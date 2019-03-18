import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private HttpClient: HttpClient;
  constructor(HttpClient: HttpClient) { 
    this.HttpClient = HttpClient;
  }
  getBrands(){
    return this.HttpClient.get("https://localhost:44381/api/brands");
   
  }
}
