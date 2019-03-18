import { BrandService } from './../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  brands;
  private BrandService: BrandService;
  constructor(BrandService: BrandService) { 
    this.BrandService = BrandService;
  }

  ngOnInit() {
    this.BrandService.getBrands().
                    subscribe(brands => {
                      this.brands = brands;
                      console.log(brands);
                     })
  }

}
