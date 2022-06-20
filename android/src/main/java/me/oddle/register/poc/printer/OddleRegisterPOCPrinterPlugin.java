package me.oddle.register.poc.printer;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.RemoteException;
import android.text.TextUtils;
import android.util.Base64;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.sunmi.peripheral.printer.InnerPrinterCallback;
import com.sunmi.peripheral.printer.InnerPrinterException;
import com.sunmi.peripheral.printer.InnerPrinterManager;
import com.sunmi.peripheral.printer.InnerResultCallback;
import com.sunmi.peripheral.printer.SunmiPrinterService;

@CapacitorPlugin(name = "OddleRegisterPOCPrinter")
public class OddleRegisterPOCPrinterPlugin extends Plugin {

    private OddleRegisterPOCPrinter implementation = new OddleRegisterPOCPrinter();
    private SunmiPrinterService mPrinterService = null;
    private InnerPrinterCallback mInnerPrinterCallback =  new InnerPrinterCallback() {
        @Override
        protected void onConnected(SunmiPrinterService service) {
            mPrinterService = service;
            notifyListeners("connected", new JSObject());
        }

        @Override
        protected void onDisconnected() {
            mPrinterService = null;
            notifyListeners("disconnected", new JSObject());
        }
    };

    private boolean mIsPrinting = false;

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void connectPrinter(PluginCall call)  {
        try {
            InnerPrinterManager.getInstance().bindService(getContext(), mInnerPrinterCallback);
            call.resolve();
        } catch (InnerPrinterException e) {
           call.errorCallback(e.getMessage());
        }
    }

    @PluginMethod
    public void disconnectPRinter(PluginCall call) {
        try {
            InnerPrinterManager.getInstance().unBindService(getContext(), mInnerPrinterCallback);
            call.resolve();
        } catch (InnerPrinterException e) {
            call.errorCallback(e.getMessage());
        }
    }

    @PluginMethod
    public void print(PluginCall call) {
        if (mIsPrinting) {
            call.errorCallback("Printing is currently ongoing");
            return;
        }

        String base64Image = call.getString("imageDataUrl");
        if (TextUtils.isEmpty(base64Image)) {
            call.errorCallback("imageDataUrl can't be empty");
            return;
        }

        mIsPrinting = true;

        String cleanImageString = base64Image
                .replace("data:image/png;base64,", "")
                .replace("data:image/jpeg;base64,","");

        Bitmap bitmap = getBitmapFromBase64(cleanImageString);

        try {
            mPrinterService.enterPrinterBuffer(false);
            mPrinterService.printBitmapCustom(bitmap, 1, null);
            mPrinterService.lineWrap(1, null);
            mPrinterService.exitPrinterBufferWithCallback(true, new InnerResultCallback() {
                        @Override
                        public void onRunResult(boolean isSuccess) throws RemoteException {

                        }

                        @Override
                        public void onReturnString(String result) throws RemoteException {

                        }

                        @Override
                        public void onRaiseException(int code, String msg) throws RemoteException {
                            mIsPrinting = false;
                            call.errorCallback(msg);
                        }

                        @Override
                        public void onPrintResult(int code, String msg) throws RemoteException {
                            mIsPrinting = false;
                            call.resolve();
                        }
                    });
        } catch (Exception e) {
            call.errorCallback(e.getMessage());
            mIsPrinting = false;
        }
    }

    private Bitmap getBitmapFromBase64(String cleanImageString) {
        byte[] imageAsBytes = Base64.decode(cleanImageString.getBytes(),Base64.DEFAULT);
        return BitmapFactory.decodeByteArray(imageAsBytes, 0, imageAsBytes.length);
    }
}
