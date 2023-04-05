import {BehaviorSubject} from 'rxjs'
import {icons} from "../components/ui/input/icons.data";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

export class InputService {
  state$ = new BehaviorSubject<boolean>(false)
  isFocus$ = new BehaviorSubject<boolean>(false)
  id: string;
  icon: string;
  svg: SafeHtml | null = null;
  colorFocus: string = "#3F68CF";
  colorBlur: string = "#1E1E1E"
  disableState: boolean;

  constructor(sanitizer: DomSanitizer, icon : string) {
    this.id = this.generateGuid();
    this.icon = icon;
    this.initSvg(sanitizer);
  }

  swicthState = (state: boolean) => this.state$.next(state || this.disableState)
  onFocus = () => this.isFocus$.next(true);
  onBlur = () => this.isFocus$.next(false);

  onFocusEvent (){
    this.changeColorSvg(this.colorFocus)
    this.swicthState(true);
    this.onFocus();
  }

  onBlurEvent(state: boolean){
    this.changeColorSvg(this.colorBlur)
    this.swicthState(state);
    this.onBlur();
  }

  changeColorSvg (color: string) : void {
    const el = this.getElementIcon();
    if (el) el.style.fill = color;
  }

  blockState(){
    this.disableState = true;
    this.swicthState(true);
  }

  private initSvg(sanitizer: DomSanitizer) : void{
    const icon = icons.find(i => i.Name === this.icon);
    if (icon)
      this.svg = sanitizer.bypassSecurityTrustHtml(icon.Svg);
    setTimeout(() => {
      const el = this.getElementIcon();
      if (el) el.style.transition = "ease-in-out 0.15s";
    })
  }

  private getElementIcon() : HTMLElement | null | undefined {
    const root = document.getElementById(this.id);
    return root?.querySelector(`#${this.icon}`);
  }

  private generateGuid() : string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
