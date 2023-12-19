export default class CommonScript {
  private dispatchEvent(
    customEvent: CustomEvent<{
      getButton(name: string): Element[];
      typeChangeEvent(): void;
      removeButton(buttonList: any): void;
    }>,
  ) {
    console.log(this);
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
    return Array.from(buttons);
  }

  removeButton(buttonList: any) {
    buttonList.forEach((button: any) => {
      button.classList.remove('active');
    });
  }
}
