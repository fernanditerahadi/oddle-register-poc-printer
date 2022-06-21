import { registerPlugin } from '@capacitor/core';
const OddleRegisterPOCPrinter = registerPlugin('OddleRegisterPOCPrinter', {
    web: () => import('./web').then(m => new m.OddleRegisterPOCPrinterWeb()),
});
export * from './definitions';
export { OddleRegisterPOCPrinter };
//# sourceMappingURL=index.js.map