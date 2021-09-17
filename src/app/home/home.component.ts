import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { CoursesStore } from "../services/courses.store";
import { AppState } from "../store/models/app-state.model";
import { LoadCourseAction } from "../store/actions/course.actions";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]> = this.store.select((store) => store.courses.listBegginer);
  advancedCourses$: Observable<Course[]> = this.store.select((store) => store.courses.listAdvanced);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadCourseAction());
  }

}
