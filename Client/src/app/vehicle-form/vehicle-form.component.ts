import { FeatureService } from './../services/feature.service';
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
  models;
  features;
  vehicle: any = {
    features: []
  };
  private BrandService: BrandService;
  private FeatureService: FeatureService;
  constructor(BrandService: BrandService, FeatureService: FeatureService) { 
    this.BrandService = BrandService;
    this.FeatureService = FeatureService;
  }

  ngOnInit() {

    //Get all brands with include on models @ EF 
    this.BrandService.getBrands().
                    subscribe(brands => {
                      this.brands = brands;
                      console.log(brands);
                     })

    //Get all features
    this.FeatureService.getFeatures().
                     subscribe(features => {
                       this.features = features;
                       console.log(this.features);
                     })
  }

  //When a new brand gets picked from the first menu
  onBrandChange(){
    var selectedBrand = this.brands.find(b => b.id == this.vehicle.brandId);
    this.models = selectedBrand.models;
  }

  //When a new model gets picked from the model menu
  onModelChange(){
    
    var selectedModel = this.models.find(m => m.id == this.vehicle.modelId);
    console.log(selectedModel);
  }

  //Gets called everytime there's a change in the checkboxes in features
  onFeatureChange(featureId, $event)
  { 
    if ($event.target.checked) //If it gets toggled
    { //We're pushing the Id only cause features and vehicles has a many-2-many relationship and there's a table inbetween holding both keys
      this.vehicle.features.push(featureId);
    }
    else { //If it gets untoggled
     
      var index = this.vehicle.features.indexOf(featureId); //gets the index of the clicked button
      this.vehicle.features.splice(index,1); //removes one from where its index is. 
     ;
    }
  }

} 
