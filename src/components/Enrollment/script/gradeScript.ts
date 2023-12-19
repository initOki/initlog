import CommonScript from '~/components/Enrollment/script/commonScript.ts';
import LectureItemTag from '~/components/Enrollment/script/lectureScript.ts';
import LectureItemManager from '~/components/Enrollment/script/lectureItemScript.ts';

export default class GradeManager {
  private grade: string | null;
  private gradeButtons: Element[] | null;
  private lectureItemForMiddleSchool: Element | null;
  private lectureItemForHighSchool: Element | null;
  private lectureItemList: Element[] | null;

  constructor() {
    this.grade = null;
    this.gradeButtons = null;
    this.lectureItemForMiddleSchool = null;
    this.lectureItemForHighSchool = null;
    this.lectureItemList = null;

    this.getLectureItemBox();
    this.getLectureItemList();
    this.setGradeButtons();
    this.gradeButton();
  }

  private common = new CommonScript();

  getLectureItemBox() {
    const lecture = new LectureItemTag();
    this.lectureItemForMiddleSchool = lecture.lectureItemForMiddleSchool;
    this.lectureItemForHighSchool = lecture.lectureItemForHighSchool;
  }

  getLectureItemList() {
    const lectureItemListButton = new LectureItemManager();
    this.lectureItemList = lectureItemListButton.lectureItemNoButtons;
  }

  private setGradeButtons() {
    this.gradeButtons = this.common.getButton('[data-button-grade]');
  }

  gradeButton() {
    this.gradeButtons?.map((item) => {
      item.addEventListener('click', () => {
        const value = item.attributes.getNamedItem('data-button-grade')?.value as string;
        this.grade = value;
        this.common.removeButton(this.gradeButtons);
        this.common.removeButton(this.lectureItemList);
        item.classList.add('active');
        this.common.typeChangeEvent();

        if (value === 'MIDDLE') {
          this.lectureItemForHighSchool?.classList.add('disabled');
          this.lectureItemForMiddleSchool?.classList.remove('disabled');
        } else {
          this.lectureItemForHighSchool?.classList.remove('disabled');
          this.lectureItemForMiddleSchool?.classList.add('disabled');
        }
      });
    });
  }
}
