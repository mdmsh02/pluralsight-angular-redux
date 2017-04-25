export const FILTER_COURSE = 'courses/FILTER';

export function filterCourse(searchText:string){
    return {
        type: FILTER_COURSE,
        searchText
    };
} 