import { Images } from './Images';

export interface Car {
  licensePlate: string,
  brand: string,
  model: string,
  nrOfDoors: number,
  nrOfSeats: number,
  hasAutomaticGearbox: boolean,
  pricePerDay: number,
  ImageList: Images[],

}
