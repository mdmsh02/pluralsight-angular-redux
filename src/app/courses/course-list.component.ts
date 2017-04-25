import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent} from '../blocks/filter-text';
import { store,filterCourse } from "../store";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  filteredCourses = [];

  constructor(private _courseService: CourseService) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    store.dispatch(filterCourse(searchText));
  }

  updateFromState() {
    const allState = store.getState();
    this.filteredCourses = allState.filteredCourse;
  }

  ngOnInit() {
    this.updateFromState();
    store.subscribe(() =>{
      this.updateFromState();
    })
    componentHandler.upgradeDom();
  }
}
