import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class EventBus {
  private subject = new Subject();

  emit(eventName: string, data: any) {
    this.subject.next({eventName, data});
  }

  listen(eventName: string, callback: (event: any) => (void | Promise<void>)) {
    this.subject.asObservable().subscribe((nextObject : any) => {
      if (nextObject.eventName === eventName) callback(nextObject.data)
    });
  }

}
