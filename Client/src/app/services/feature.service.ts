import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  HttpClient: HttpClient;
  constructor(HttpClient: HttpClient) { 
    this.HttpClient = HttpClient;
  }
  getFeatures()
  {
    return this.HttpClient.get("https://localhost:44381/api/features");

  }
}
