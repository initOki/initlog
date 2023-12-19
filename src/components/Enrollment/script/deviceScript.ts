import CommonScript from '~/components/Enrollment/script/commonScript.ts';

export default class DeviceManager {
  private device: string | null;
  private deviceButtons: Element[] | null;
  constructor() {
    this.device = null;
    this.deviceButtons = null;

    this.setDeviceButtons();
    this.deviceButton();
  }

  private common = new CommonScript();

  private setDeviceButtons() {
    this.deviceButtons = this.common.getButton('[data-button-device]');
  }

  deviceButton() {
    this.deviceButtons?.map((item) => {
      item.addEventListener('click', () => {
        this.device = item.attributes.getNamedItem('data-button-device')?.value as string;
        this.common.removeButton(this.deviceButtons);
        item.classList.add('active');
        this.common.typeChangeEvent();
      });
    });
  }
}
