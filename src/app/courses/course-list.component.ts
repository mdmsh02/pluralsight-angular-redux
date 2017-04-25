import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent} from '../blocks/filter-text';
import { store,filterCourse,IAppState } from "../store";
import {NgRedux,select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourse') filteredCourses$:Observable<Course>
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    store.dispatch(filterCourse(searchText));
  }
  ngOnInit() {
    componentHandler.upgradeDom();
  }
}
