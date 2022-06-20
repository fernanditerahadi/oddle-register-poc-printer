export interface OddleRegisterPOCPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  connectPrinter(): Promise<void>;
  disconnectPrinter(): Promise<void>;
  print(options: {imageDataUrl: string}): Promise<void>;
}
