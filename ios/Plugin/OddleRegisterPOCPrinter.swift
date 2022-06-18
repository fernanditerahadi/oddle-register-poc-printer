import Foundation

@objc public class OddleRegisterPOCPrinter: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
