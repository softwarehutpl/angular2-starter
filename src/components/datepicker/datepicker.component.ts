import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from "jquery";
import 'jquery-ui';

@Component({
    selector: 'datepicker',
    templateUrl: 'components/datepicker/templates/datepicker.template.html'
})

/**
 * Date Picker Component
 * Input component with jquery ui datepicker
 */
export class DatePickerComponent implements OnInit {
    @ViewChild('pickerinput') element;

    public ngOnInit() {
        $(this.element.nativeElement).datepicker();
    }
}
