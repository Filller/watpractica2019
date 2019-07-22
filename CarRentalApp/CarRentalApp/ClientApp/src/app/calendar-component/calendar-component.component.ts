import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css']
})

export class CalendarComponentComponent implements OnInit {

  public rentals = [];
  public monthLabels = ['January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
  public currentMonth;
  constructor(private calendarService: CalendarService) {


    this.currentMonth = this.monthLabels[new Date().getMonth()]


    console.log(this.currentMonth)
    
    function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }
    
  }
  

  daysInMonth = (month,year) => {
    return new Date(year, month, 0).getDate();
  }

   

  ngOnInit() {

    this.calendarService.getAllRentals().subscribe(data => this.rentals = data);
    /*
    // these are labels for the days of the week
    var cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // these are human-readable month name labels, in order
    

    // these are the days of the week for each month, in order
    var cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var cal_current_date = new Date();

    function Calendar(month, year) {
      this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
      this.year = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
    
      this.html = '';
    }

    Calendar.prototype.generateHTML = function () {

      var firstDay = new Date(this.year, this.month, 1);
      var startingDay = firstDay.getDay();
      //number of days in this month
      var monthLength = cal_days_in_month[this.month];

      //daca anul e bisect
      if (this.month == 1) { // February only!
        if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) {
          monthLength = 29;
        }
      }
      // do the header
      var monthName = cal_months_labels[this.month]
      var html = '<table class="calendar-table">';
      html += '<tr><th colspan="7">';
      html += monthName + "&nbsp;" + this.year;
      html += '</th></tr>';
      html += '<tr class="calendar-header">';
      for (var i = 0; i <= 6; i++) {
        html += '<td class="calendar-header-day">';
        html += cal_days_labels[i];
        html += '</td>';
      }
      html += '</tr><tr>';

      // fill in the days
      var day = 1;
      // this loop is for is weeks (rows)
      for (var i = 0; i < 9; i++) {
        // this loop is for weekdays (cells)
        for (var j = 0; j <= 6; j++) {
          html += '<td class="calendar-day">';
          if (day <= monthLength && (i > 0 || j >= startingDay)) {
            html += day;
            day++;
          }
          html += '</td>';
        }
        // stop making rows if we've run out of days
        if (day > monthLength) {
          break;
        } else {
          html += '</tr><tr>';
        }
      }
      html += '</tr></table>';

      this.html = html;

    }

    Calendar.prototype.getHTML = function () {
      return this.html;
    }

      

*/
  }

}
