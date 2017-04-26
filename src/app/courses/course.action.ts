import { CourseService } from './course.service';
import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux';
export const FILTER_COURSE = 'courses/FILTER';
export const REQUEST_COURSES_SUCESS = 'courses/REQUEST_COURSES_SUCESS';

@Injectable()
export class CourseActions {
    constructor(private ngRedux: NgRedux<IAppState>, private courseService: CourseService) {

    }
    filterCourse(searchText: string) {
        this.ngRedux.dispatch({
            type: FILTER_COURSE,
            searchText
        });
    }
    getCourses() {
        this.courseService.getCourses().subscribe(
            (courses) => {
                this.ngRedux.dispatch({
                    type: REQUEST_COURSES_SUCESS,
                    courses
                })
            });
    }
}