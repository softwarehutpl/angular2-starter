import { Component, OnInit, ViewChild } from '@angular/core';
import 'jquery-ui';
// TO DO: import jquery ui css
// import 'jquery-ui/themes/base/jquery-ui.css';

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
