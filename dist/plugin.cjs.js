'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const OddleRegisterPOCPrinter = core.registerPlugin('OddleRegisterPOCPrinter', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.OddleRegisterPOCPrinterWeb()),
});

class OddleRegisterPOCPrinterWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OddleRegisterPOCPrinterWeb: OddleRegisterPOCPrinterWeb
});

exports.OddleRegisterPOCPrinter = OddleRegisterPOCPrinter;
//# sourceMappingURL=plugin.cjs.js.map
