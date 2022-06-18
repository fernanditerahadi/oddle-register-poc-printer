import { registerPlugin } from '@capacitor/core';

import type { OddleRegisterPOCPrinterPlugin } from './definitions';

const OddleRegisterPOCPrinter = registerPlugin<OddleRegisterPOCPrinterPlugin>(
  'OddleRegisterPOCPrinter',
  {
    web: () => import('./web').then(m => new m.OddleRegisterPOCPrinterWeb()),
  },
);

export * from './definitions';
export { OddleRegisterPOCPrinter };
