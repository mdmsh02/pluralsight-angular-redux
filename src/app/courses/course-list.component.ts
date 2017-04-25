import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { CourseActions } from './course.action';
import { FilterTextComponent} from '../blocks/filter-text';
import { IAppState } from "../store";
import {NgRedux,select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourse') filteredCourses$:Observable<Course>
  constructor(private ngRedux: NgRedux<IAppState>,private courseAction: CourseActions) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.courseAction.filterCourse(searchText);
  }
  ngOnInit() {
    componentHandler.upgradeDom();
  }
}
