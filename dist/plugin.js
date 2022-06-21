var capacitorOddleRegisterPOCPrinter = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
