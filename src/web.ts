import { WebPlugin } from '@capacitor/core';

import type { OddleRegisterPOCPrinterPlugin } from './definitions';

export class OddleRegisterPOCPrinterWeb
  extends WebPlugin
  implements OddleRegisterPOCPrinterPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async disconnectPrinter(): Promise<void> {
    alert('Printing is currently not supported in Web')
  }

  async connectPrinter(): Promise<void> {
    alert('Printing is currently not supported in Web')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async print(_options: { imageDataUrl: string; }): Promise<void> {
    alert('Printing is currently not supported in Web')
  }
}
