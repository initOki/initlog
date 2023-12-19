import CommonScript from '~/components/Enrollment/script/commonScript.ts';

export default class LectureItemManager {
  private lectureItemNo: string | null;
  lectureItemNoButtons: Element[] | null;
  constructor() {
    this.lectureItemNo = null;
    this.lectureItemNoButtons = null;

    this.setLectureItemNoButtons();
    this.lectureItemNoButton();
  }

  private common = new CommonScript();

  private setLectureItemNoButtons() {
    this.lectureItemNoButtons = this.common.getButton('[data-button-lecture-item]');
  }

  lectureItemNoButton() {
    this.lectureItemNoButtons?.map((item) => {
      item.addEventListener('click', () => {
        this.lectureItemNo = item.attributes.getNamedItem('data-button-lecture-item')?.value as string;
        this.common.removeButton(this.lectureItemNoButtons);
        item.classList.add('active');
        this.common.typeChangeEvent();
      });
    });
  }
}
