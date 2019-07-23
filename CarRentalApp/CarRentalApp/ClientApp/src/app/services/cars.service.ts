import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Config } from 'protractor';
import { SearchedCar } from '../models/searchedCar';


@Injectable({ providedIn: 'root' })
export class CarService {

  private readonly profileUrl: string = "api/Cars";
  private readonly profileUrlRandom: string = "api/Cars/GetRandomCars";

  constructor(protected http: HttpClient) { }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.profileUrl);
  }


  addNewCar(newCar: Car): Observable<Car>{
    return this.http.post<Car>(this.profileUrl, newCar);
  }

 
  //deleteCar(someCar: Car) {
  //  return this.http.delete<Car>(this.profileUrl,someCar);
  //}

  configUrl = 'ClientApp/tsconfig.json';

  //randomUrl = 'http://localhost:63280/api/Cars/';

  getConfig() {
    return this.http.get(this.configUrl);
  }
  

  //deleteCar(someCar: Car): Observable<{}> {
  //  const urll = `${this.configUrl}/${someCar.licensePlate}`; // DELETE api/Cars/B-81-XJF
  //  return this.http.delete(this.randomUrl);
     
  //}

  deleteCar(someCar: Car): Observable<{}> {

    const urll = `${this.configUrl}/${someCar.licensePlate}`; // DELETE api/Cars/
    return this.http.delete(urll);

  }
  
  getRandomCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.profileUrlRandom);
  }

  /*getSearchedInfo(): Observable<SearchedCar>{
    return this.http.get<SearchedCar>(this.profileUrl);
  }*/

}
