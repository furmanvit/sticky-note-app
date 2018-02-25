import { Component, OnInit } from '@angular/core';
import { getFullYear } from 'ngx-bootstrap/chronos/utils/date-getters';


@Component({
    selector: 'clock',
    templateUrl: './clock.html'
})
export class ClockComponent implements OnInit {
    time = '';

    constructor() { }

    ngOnInit() {
        this.startDateAndTime();
    }

    startDateAndTime() {
        this.initDateAndTime();
    }

    initDateAndTime() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hou = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        month = this.addZeroInFrontOfNumbersIfTotalLessThenTen(month);
        day = this.addZeroInFrontOfNumbersIfTotalLessThenTen(day);
        hou = this.addZeroInFrontOfNumbersIfTotalLessThenTen(hou);
        min = this.addZeroInFrontOfNumbersIfTotalLessThenTen(min);
        sec = this.addZeroInFrontOfNumbersIfTotalLessThenTen(sec);
        let date = `${day}/${month}/${year}`;
        this.time = date + '\n' + hou + ':' + min + ':' + sec;
        setTimeout(() => this.initDateAndTime(), 1000);
    }

    addZeroInFrontOfNumbersIfTotalLessThenTen(i) {
        if (i < 10) {
            i = '0' + i;
            return i;
        } else {
            return i;
        }
    }
}
