import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { tap } from "rxjs/operators";
import { AppState } from "../store/models/app-state.model";
import { LoadCourseAction } from "../store/actions/course.actions";

@Component({
  selector: "messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {

  showMessages$ : Observable<boolean> = this.store.select((store) => store.courses.showMessages);
  errors$: Observable<string[]> = this.store.select((store) => store.courses.error);

  constructor(private store: Store<AppState> ) {}

  ngOnInit() {
    this.store.dispatch(new LoadCourseAction());
  }

  onClose() {
    this.showMessages$.subscribe()
  }
}
