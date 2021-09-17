import { CourseAction, CourseActionTypes } from "../actions/course.actions";
import { Course } from "../models/course.model";

export interface CourseState {
  listBegginer: Course[];
  listAdvanced: Course[];
  loading: boolean;
  showMessages: boolean;
  // error: Error;
  error: string[]
}

const initialState: CourseState = {
  listBegginer: [],
  listAdvanced:[],
  loading: true,
  showMessages: false,
  error: [],
};

export function CourseReducer(
  state: CourseState = initialState,
  action: CourseAction
) {
  switch (action.type) {
    case CourseActionTypes.LOAD_COURSE:
      return {
        ...state,
        loading: true,
      };
    case CourseActionTypes.LOAD_COURSE_SUCCESS:
      return {
        ...state,
        listBegginer: action.listBegginer,
        listAdvanced: action.listAdvanced,
        loading: false,
      };

    case CourseActionTypes.LOAD_COURSE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case CourseActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    // case CourseActionTypes.ADD_ITEM_SUCCESS:
    //   return {
    //     ...state,
    //     list: [...state.list, action.payload],
    //     loading: false,
    //   };
    case CourseActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CourseActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true,
      };
    // case CourseActionTypes.DELETE_ITEM_SUCCESS:
    //   return {
    //     ...state,
    //     list: state.list.filter((item) => item.id !== action.payload),
    //     loading: false,
    //   };
    case CourseActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
