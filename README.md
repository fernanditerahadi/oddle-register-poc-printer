# oddle-register-poc-printer

Capacitor SUNMI SDK wrapper

## Install

```bash
npm install oddle-register-poc-printer
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`connectPrinter()`](#connectprinter)
* [`disconnectPrinter()`](#disconnectprinter)
* [`print(...)`](#print)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### connectPrinter()

```typescript
connectPrinter() => Promise<void>
```

--------------------


### disconnectPrinter()

```typescript
disconnectPrinter() => Promise<void>
```

--------------------


### print(...)

```typescript
print(options: { imageDataUrl: string; }) => Promise<void>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ imageDataUrl: string; }</code> |

--------------------

</docgen-api>
