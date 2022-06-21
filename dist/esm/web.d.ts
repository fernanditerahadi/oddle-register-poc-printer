import { WebPlugin } from '@capacitor/core';
import type { OddleRegisterPOCPrinterPlugin } from './definitions';
export declare class OddleRegisterPOCPrinterWeb extends WebPlugin implements OddleRegisterPOCPrinterPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    disconnectPrinter(): Promise<void>;
    connectPrinter(): Promise<void>;
    print(_options: {
        imageDataUrl: string;
    }): Promise<void>;
}
