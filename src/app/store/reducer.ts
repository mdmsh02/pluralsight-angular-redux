import { FILTER_COURSE,REQUEST_COURSES_SUCESS } from '../courses/course.action';
import { IAppState } from './IAppState';

const courses = [];
const initialState:IAppState = {
    courses,
    filteredCourse : courses
}
function filterCourse(state, action) : IAppState{
    return Object.assign({},state, {
        filteredCourse: state.courses.filter( c =>c.name.toLowerCase().indexOf(
            action.searchText.toLowerCase()) > -1),
    });
}
function storeCourses(state,action) : IAppState{
    return Object.assign({},state,{
        courses: action.courses,
        filteredCourse: action.courses
    });
}

export function reducer(state=initialState, action){
    switch(action.type) {
        case FILTER_COURSE:
            return filterCourse(state,action);
        case REQUEST_COURSES_SUCESS:
            return storeCourses(state,action);    
        default:
        return state;    
    }
}