class AstroButton extends HTMLElement {
  private tabletType;
  private deviceType;
  private subject;
  private grade;
  private month;
  private lectureNo;

  constructor() {
    super();
    this.tabletType = '';
    this.deviceType = '';
    this.subject = '';
    this.grade = '';
    this.month = '';
    this.lectureNo = '';

    this.tabletButton();
    this.deviceButton();
    this.subjectCountButton();
    this.gradeButton();
    this.monthButton();
    this.lectureItemButton();
  }

  typeChangeEvent() {
    this.dispatchEvent(
      new CustomEvent('typeChange', {
        detail: {
          ...this,
        },
      }),
    );
  }

  getButton(name: string) {
    const buttons = document.querySelectorAll(name);
    console.log(buttons);
    return Array.from(buttons);
  }

  activeButton(buttonList: any) {
    buttonList.forEach((button: any) => {
      button.classList.remove('active');
    });
  }

  tabletButton() {
    const tabletButtons = this.getButton('[data-button-tablet]');
    tabletButtons.map((item) => {
      item.addEventListener('click', () => {
        this.month = item.attributes.getNamedItem('data-button-tablet')?.value as string;
        this.activeButton(tabletButtons);
        item.classList.add('active');
        this.typeChangeEvent();
      });
    });
  }

  deviceButton() {
    const deviceButtons = this.getButton('[data-button-device]');
    deviceButtons.map((item) => {
      item.addEventListener('click', () => {
        this.deviceType = item.attributes.getNamedItem('data-button-device')?.value as string;
        this.activeButton(deviceButtons);
        item.classList.add('active');
        this.typeChangeEvent();
      });
    });
  }

  subjectCountButton() {
    const subjectCountButtons = this.getButton('[data-button-subject]');
    subjectCountButtons.map((item) => {
      item.addEventListener('click', () => {
        this.subject = item.attributes.getNamedItem('data-button-subject')?.value as string;
        this.activeButton(subjectCountButtons);
        item.classList.add('active');
        this.typeChangeEvent();
      });
    });
  }

  gradeButton() {
    const gradeButtons = this.getButton('[data-button-grade]');
    gradeButtons.map((item) => {
      item.addEventListener('click', () => {
        this.grade = item.attributes.getNamedItem('data-button-grade')?.value as string;
        this.activeButton(gradeButtons);
        item.classList.add('active');
        this.typeChangeEvent();
      });
    });
  }

  monthButton() {
    const monthButtons = this.getButton('[data-button-month]');
    monthButtons.map((item) => {
      item.addEventListener('click', () => {
        this.month = item.attributes.getNamedItem('data-button-month')?.value as string;
        this.activeButton(monthButtons);
        item.classList.add('active');
        this.typeChangeEvent();
      });
    });
  }

  lectureItemButton() {
    const lectureItemButtons = this.getButton('[data-button-lecture-item]');
    this.getButton('[data-button-lecture-item]').map((item) => {
      item.addEventListener('click', () => {
        this.lectureNo = item.attributes.getNamedItem('data-button-lecture-item')?.value as string;
        this.activeButton(lectureItemButtons);
        item.classList.add('active');
        this.typeChangeEvent();
      });
    });
  }
}

customElements.define('astro-button', AstroButton);
