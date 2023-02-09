import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{
  @Input() value: string
  @Output() valueChange = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.value) this.value = ""
  }

  onInput(e: Event){
    this.valueChange.emit((e.target as HTMLInputElement).value)
  }
}
