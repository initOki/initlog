import CommonScript from '~/components/Enrollment/script/commonScript.ts';

export default class SubjectManager {
  private subjectNo: string | null;
  private subjectNoButtons: Element[] | null;
  constructor() {
    this.subjectNo = null;
    this.subjectNoButtons = null;

    this.setSubjectNoButtons();
    this.subjectNoButton();
  }

  private common = new CommonScript();

  private setSubjectNoButtons() {
    this.subjectNoButtons = this.common.getButton('[data-button-subject]');
  }

  subjectNoButton() {
    this.subjectNoButtons?.map((item) => {
      item.addEventListener('click', () => {
        this.subjectNo = item.attributes.getNamedItem('data-button-subject')?.value as string;
        this.common.removeButton(this.subjectNoButtons);
        item.classList.add('active');
        this.common.typeChangeEvent();
      });
    });
  }
}
