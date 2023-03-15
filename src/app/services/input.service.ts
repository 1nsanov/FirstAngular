import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InputService {

  state$ = new BehaviorSubject<boolean>(false)

  swicth(state : boolean) {
    this.state$.next(state)
  }
}
