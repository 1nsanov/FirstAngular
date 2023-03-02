import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {icons} from "./icons.data";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{
  @Input() value: string
  @Input() placeholder: string
  @Input() label: string;
  @Input() icon: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor(private sanitizer: DomSanitizer) {
  }

  svg: SafeHtml | null = null;
  el: HTMLElement | null;
  colorFocus: string = "#B6E5EE";
  colorBlur: string = "#1E1E1E"

  ngOnInit(): void {
    if (!this.value) this.value = ""
    this.initSvg();
  }

  onInput(e: Event){
    this.valueChange.emit((e.target as HTMLInputElement).value)
  }

  initSvg() : void{
    const icon = icons.find(i => i.Name === this.icon);
    if (icon)
      this.svg = this.sanitizer.bypassSecurityTrustHtml(icon.Svg);
    setTimeout(() => {
      const el = document.getElementById(this.icon);
      if (el) el.style.transition = "ease-in-out 0.2s"
      el
    })
  }

  changeColorSvg (color: string) : void {
    const el = document.getElementById(this.icon);
    if (el) el.style.fill = color;
  }
}
