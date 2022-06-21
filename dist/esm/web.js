import { WebPlugin } from '@capacitor/core';
export class OddleRegisterPOCPrinterWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async disconnectPrinter() {
        alert('Printing is currently not supported in Web');
    }
    async connectPrinter() {
        alert('Printing is currently not supported in Web');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async print(_options) {
        alert('Printing is currently not supported in Web');
    }
}
//# sourceMappingURL=web.js.map