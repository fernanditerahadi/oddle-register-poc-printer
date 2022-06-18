export interface OddleRegisterPOCPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
