import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import { AppState } from "../store/models/app-state.model";
import { LoadCourseAction } from "../store/actions/course.actions";

@Component({
  selector: "loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent implements OnInit {
  loading$: Observable<boolean> = this.store.select(
    (store) => store.courses.loading
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadCourseAction());
  }
}
