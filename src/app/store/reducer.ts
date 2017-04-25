import { FILTER_COURSE } from '../courses/course.action';
import { IAppState } from './IAppState';

const courses = [
        {
            id:1,
            name:"Building app with redux(local)",
            topic:"redux"
        },
        {
            id:2,
            name:"Building app with angular(local)",
            topic:"angular"
        },
        {
            id:3,
            name:"Building app with angular and redux",
            topic:"angular and redux"
        }
];
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

export function reducer(state=initialState, action){
    switch(action.type) {
        case FILTER_COURSE:
            return filterCourse(state,action);
        default:
        return state;    
    }
}