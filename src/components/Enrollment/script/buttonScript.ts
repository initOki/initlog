import TabletManager from '~/components/Enrollment/script/tabletScript.ts';
import DeviceManager from '~/components/Enrollment/script/deviceScript.ts';
import MonthManager from '~/components/Enrollment/script/monthScript.ts';
import GradeManager from '~/components/Enrollment/script/gradeScript.ts';
import SubjectManager from '~/components/Enrollment/script/subjectScript.ts';
import LectureItemManager from '~/components/Enrollment/script/lectureItemScript.ts';

class AstroButton extends HTMLElement {
  constructor() {
    super();

    this.setTablet();
    this.setDevice();
    this.setSubjectNo();
    this.setMonth();
    this.setGrade();
    this.setLectureItem();
  }

  private setTablet() {
    const tablet = new TabletManager();
    console.log(tablet);
  }

  private setDevice() {
    const device = new DeviceManager();
    console.log(device);
  }

  private setSubjectNo() {
    const subjectNo = new SubjectManager();
  }

  private setMonth() {
    const month = new MonthManager();
  }

  private setGrade() {
    const grade = new GradeManager();
  }

  private setLectureItem() {
    const lectureItem = new LectureItemManager();
  }
}

customElements.define('astro-button', AstroButton);
