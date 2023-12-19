import CommonScript from '~/components/Enrollment/script/commonScript.ts';

export default class TabletManager {
  private tablet: string | null;
  private tabletButtons: Element[] | null;
  constructor() {
    this.tablet = null;
    this.tabletButtons = null;

    this.setTabletButtons();
    this.tabletButton();
  }

  private common = new CommonScript();

  private setTabletButtons() {
    this.tabletButtons = this.common.getButton('[data-button-tablet]');
  }

  tabletButton() {
    this.tabletButtons?.map((item) => {
      item.addEventListener('click', () => {
        this.tablet = item.attributes.getNamedItem('data-button-tablet')?.value as string;
        this.common.removeButton(this.tabletButtons);
        item.classList.add('active');
        this.common.typeChangeEvent();
      });
    });
  }
}
