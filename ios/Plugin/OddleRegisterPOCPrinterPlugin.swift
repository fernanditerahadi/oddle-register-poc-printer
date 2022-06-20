import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(OddleRegisterPOCPrinterPlugin)
public class OddleRegisterPOCPrinterPlugin: CAPPlugin {
    private let implementation = OddleRegisterPOCPrinter()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func print(_ call: CAPPluginCall) {
        call.reject("Not implemented in iOS")
    }
    
    @objc func connectPrinter(_ call: CAPPluginCall) {
        call.reject("Not implemented in iOS")
    }
    
    @objc func disconnectPrinter(_ call: CAPPluginCall) {
        call.reject("Not implemented in iOS")
    }
}
