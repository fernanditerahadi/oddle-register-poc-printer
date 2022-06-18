import { WebPlugin } from '@capacitor/core';

import type { OddleRegisterPOCPrinterPlugin } from './definitions';

export class OddleRegisterPOCPrinterWeb
  extends WebPlugin
  implements OddleRegisterPOCPrinterPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
