import { Injectable } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux';
export const FILTER_COURSE = 'courses/FILTER';

@Injectable()
export class CourseActions {
    constructor(private ngRedux: NgRedux<IAppState>) {

    }
    filterCourse(searchText: string) {
        this.ngRedux.dispatch({
            type: FILTER_COURSE,
            searchText
        });
    }
}