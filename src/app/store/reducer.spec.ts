import { reducer } from "./reducer";
import { FILTER_COURSE } from "../courses/course.action";

describe("Reducer", () => {
    it("should have correct inital state", () => {
        const state = reducer(undefined, {});
        expect(state.courses.length).toBe(0);
        expect(state.filteredCourse.length).toBe(0);

    });
    describe("Filter Course", () => {
        const courses = [
            {
                "id": 1,
                "name": "Building Apps with React",
                "topic": "ReactJS"
            },
            {
                "id": 2,
                "name": "Building Apps with Angular",
                "topic": "AngularJS"
            },
            {
                "id": 3,
                "name": "Building Apps with Angular and Redux",
                "topic": "Angular and Redux"
            }
        ];
        it("should filter out course with bad search",() =>{
            const state = {
                courses,
                filteredCourse:courses
            };
            const adaptedState = reducer(state,{
                type:FILTER_COURSE,
                searchText:"bad search text"
            });
            expect(adaptedState.courses.length).toBe(3);
            expect(adaptedState.filteredCourse.length).toBe(0);
        });
        it("should filter out course with  search",() =>{
            const state = {
                courses,
                filteredCourse:courses
            };
            const adaptedState = reducer(state,{
                type:FILTER_COURSE,
                searchText:"redux"
            });
            expect(adaptedState.courses.length).toBe(3);
            expect(adaptedState.filteredCourse.length).toBe(1);
        });
    })
})