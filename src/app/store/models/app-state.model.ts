import { Course } from "../models/course.model";
import { CourseState } from "../reducers/course.reducer";

export interface AppState {
  readonly courses: CourseState;
}
