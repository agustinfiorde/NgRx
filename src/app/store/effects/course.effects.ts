import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { MessagesService } from "../../messages/message.service";
import { CoursesService } from "../../services/courses.service";
import {
  LoadCourseAction,
  CourseActionTypes,
  LoadCourseSuccessAction,
  LoadCourseFailureAction,
} from "../actions/course.actions";
import { sortCoursesBySeqNo } from "../models/course.model";

@Injectable()
export class CourseEffects {
  @Effect() loadAllBeginnerCourses$ = this.actions$.pipe(
    ofType<LoadCourseAction>(CourseActionTypes.LOAD_COURSE),
    mergeMap(() =>
      this.courseService.loadAllCourses().pipe(
        map((data) => {
          const listBegginer = data
            .filter((course) => course.category == "BEGINNER")
            .sort(sortCoursesBySeqNo);

          const listAdvanced = data
            .filter((course) => course.category == "ADVANCED")
            .sort(sortCoursesBySeqNo);

          return new LoadCourseSuccessAction(listBegginer, listAdvanced);
        }),
        catchError((error) => of(new LoadCourseFailureAction(error)))
      )
    )
  );

  // @Effect() loadAllBeginnerCourses$ = this.actions$.pipe(
  //   ofType<LoadCourseSuccessAction>(CourseActionTypes.LOAD_COURSE_SUCCESS),
  //   mergeMap(() =>
  //     this.courseService.loadAllCourses().pipe(
  //       map((response) => response["payload"]),
  //       catchError((error) => of(new LoadCourseFailureAction(error)))
  //     )
  //   )
  // );

  // map((response) => response["payload"]),
  //     catchError((err) => {
  //       const message = "No se cargo un choto";
  //       this.messages.showErrors(message);
  //       console.log(message, err);
  //       return throwError(err);
  //     }),
  //     tap((courses) => this.subject.next(courses))

  // @Effect() addCourseItem$ = this.actions$
  //   .pipe(
  //     ofType<AddItemAction>(CourseActionTypes.ADD_ITEM),
  //     mergeMap(
  //       (data) => this.courseService.addCourseItem(data.payload)
  //         .pipe(
  //           map(() => new AddItemSuccessAction(data.payload)),
  //           catchError(error => of(new AddItemFailureAction(error)))
  //         )
  //     )
  // )

  // @Effect() deleteCourseItem$ = this.actions$
  //   .pipe(
  //     ofType<DeleteItemAction>(CourseActionTypes.DELETE_ITEM),
  //     mergeMap(
  //       (data) => this.courseService.deleteCourseItem(data.payload)
  //         .pipe(
  //           map(() => new DeleteItemSuccessAction(data.payload)),
  //           catchError(error => of(new DeleteItemFailureAction(error)))
  //         )
  //     )
  //   )

  constructor(
    private actions$: Actions,
    private courseService: CoursesService,
    private messages: MessagesService
  ) {}
}
