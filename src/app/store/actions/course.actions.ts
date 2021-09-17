import { Action } from "@ngrx/store";
import { Course } from "../models/course.model";

export enum CourseActionTypes {
  LOAD_COURSE = "[COURSE] Load Course",
  LOAD_COURSE_SUCCESS = "[COURSE] Load Course Success",
  LOAD_COURSE_FAILURE = "[COURSE] Load Course Failure",
  ADD_ITEM = "[COURSE] Add Item",
  ADD_ITEM_SUCCESS = "[COURSE] Add Item Success",
  ADD_ITEM_FAILURE = "[COURSE] Add Item Failure",
  DELETE_ITEM = "[COURSE] Delete Item",
  DELETE_ITEM_SUCCESS = "[COURSE] Delete Item Success",
  DELETE_ITEM_FAILURE = "[COURSE] Delete Item Failure",
}
export class LoadCourseAction implements Action {
  readonly type = CourseActionTypes.LOAD_COURSE;
}
export class LoadCourseSuccessAction implements Action {
  readonly type = CourseActionTypes.LOAD_COURSE_SUCCESS;

  constructor(public listBegginer: Array<Course>, public listAdvanced: Array<Course>) {}
}
export class LoadCourseFailureAction implements Action {
  readonly type = CourseActionTypes.LOAD_COURSE_FAILURE;

  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = CourseActionTypes.ADD_ITEM;

  constructor(public payload: Course) {}
}
export class AddItemSuccessAction implements Action {
  readonly type = CourseActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: Course) {}
}
export class AddItemFailureAction implements Action {
  readonly type = CourseActionTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export class DeleteItemAction implements Action {
  readonly type = CourseActionTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}

export class DeleteItemSuccessAction implements Action {
  readonly type = CourseActionTypes.DELETE_ITEM_SUCCESS;

  constructor(public payload: string) {}
}
export class DeleteItemFailureAction implements Action {
  readonly type = CourseActionTypes.DELETE_ITEM_FAILURE;

  constructor(public payload: string) {}
}

export type CourseAction =
  | AddItemAction
  | AddItemSuccessAction
  | AddItemFailureAction
  | DeleteItemAction
  | DeleteItemSuccessAction
  | DeleteItemFailureAction
  | LoadCourseAction
  | LoadCourseFailureAction
  | LoadCourseSuccessAction;
