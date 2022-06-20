import type { Plugin } from "@capacitor/core/types/definitions"

export interface OddleRegisterPOCPrinterPlugin extends Plugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  connectPrinter(): Promise<void>;
  disconnectPrinter(): Promise<void>;
  print(options: {imageDataUrl: string}): Promise<void>;
}
