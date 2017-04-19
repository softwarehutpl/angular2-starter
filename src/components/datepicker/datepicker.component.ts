import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import 'jquery-ui';
import 'jquery-ui/themes/base/jquery-ui.css';

@Component({
    selector: 'datepicker',
    templateUrl: 'components/datepicker/templates/datepicker.template.html'
})

/**
 * Date Picker Component
 * Input component with jquery ui datepicker
 */
export class DatePickerComponent implements OnInit {
  @ViewChild('pickerinput') public element;

  private inputdateValue = '01/01/1992';
  @Output() private inputdateChange = new EventEmitter();

  @Input()
  get inputdate() {
    return this.inputdateValue;
  }

  set inputdate(val) {
    this.inputdateValue = val;
    this.inputdateChange.emit(this.inputdateValue);
  }

  public ngOnInit() {
    $(this.element.nativeElement).datepicker(
      {
        onSelect: (pickerDate) => {
            this.inputdate = pickerDate;
        }
      }
    );
  }
}
