import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() click = new EventEmitter<void>();

  handleClick(e: Event) {
    e.stopPropagation();
    this.click.emit();
  }
}
