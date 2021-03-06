﻿using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CarRentalApp.Models
{
    public class Car 
    {
            [Key]
            public  string LicensePlate { get; set; }
            public  string Brand { get; set; }
            public  string Model { get; set; }
            public  short NrOfDoors { get; set; }
            public  short NrOfSeats { get; set; }
            public  bool HasAutomaticGearbox { get; set; }
            public  float PricePerDay { get; set; }
            public Images[] ImageList { get; set; }
            public string ImgCars { get; set; }  
            public string CurrentCity { get; set; }
    }
}
