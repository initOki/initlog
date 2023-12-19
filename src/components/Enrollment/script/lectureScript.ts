export default class LectureItemTag {
  lectureItemForMiddleSchool: Element | null;
  lectureItemForHighSchool: Element | null;

  constructor() {
    this.lectureItemForMiddleSchool = null;
    this.lectureItemForHighSchool = null;

    this.getLectureItem();
  }

  getLectureItem() {
    this.lectureItemForMiddleSchool = document.querySelector('[data-button-lecture-middle-school]');
    this.lectureItemForHighSchool = document.querySelector('[data-button-lecture-high-school]');
  }
}
