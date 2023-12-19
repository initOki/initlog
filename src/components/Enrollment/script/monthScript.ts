import CommonScript from '~/components/Enrollment/script/commonScript.ts';

export default class MonthManager {
  private month: string | null;
  private monthButtons: Element[] | null;
  constructor() {
    this.month = null;
    this.monthButtons = null;

    this.setMonthButtons();
    this.monthButton();
  }

  private common = new CommonScript();

  private setMonthButtons() {
    this.monthButtons = this.common.getButton('[data-button-month]');
  }

  monthButton() {
    this.monthButtons?.map((item) => {
      item.addEventListener('click', () => {
        this.month = item.attributes.getNamedItem('data-button-month')?.value as string;
        this.common.removeButton(this.monthButtons);
        item.classList.add('active');
        this.common.typeChangeEvent();
      });
    });
  }
}
