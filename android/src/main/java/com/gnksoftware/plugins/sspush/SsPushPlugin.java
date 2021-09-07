package com.gnksoftware.plugins.sspush;

import android.Manifest;
import android.os.Build;
import androidx.annotation.RequiresApi;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;

@CapacitorPlugin(
        name = "SsPush",
        permissions = {
                @Permission(
                        alias = "vibration",
                        strings = {
                                Manifest.permission.VIBRATE
                        }
                )
        }
)
public class SsPushPlugin extends Plugin {

    private SsPush implementation;

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    public void load() {
        execute(
                () -> {
                    implementation = new SsPush(getActivity());
                }
        );
    }

    @PluginMethod
    public void showDriverBannerNotification(PluginCall call) {
        boolean vibration = call.getBoolean("vibration");

        if (!vibration) {
            implementation.showDriverBannerNotification(
                    call.getBoolean("sound"),
                    call.getBoolean("vibration"),
                    call.getInt("vibrationLength"),
                    call.getBoolean("statusBarIcon"));
            call.resolve();
        }

        else {
            if (getPermissionState("vibration") == PermissionState.GRANTED) {
                implementation.showDriverBannerNotification(
                        call.getBoolean("sound"),
                        call.getBoolean("vibration"),
                        call.getInt("vibrationLength"),
                        call.getBoolean("statusBarIcon"));
                call.resolve();
            } else {
                call.reject("Permission is required!");
            }
        }
    }

    @PluginMethod
    public void showChemistryBannerNotification(PluginCall call) {
        boolean vibration = call.getBoolean("vibration");

        if (!vibration) {
            implementation.showChemistryBannerNotification(
                    call.getBoolean("sound"),
                    call.getBoolean("vibration"),
                    call.getInt("vibrationLength"),
                    call.getBoolean("statusBarIcon"));
            call.resolve();
        }

        else {
            if (getPermissionState("vibration") == PermissionState.GRANTED) {
                implementation.showChemistryBannerNotification(
                        call.getBoolean("sound"),
                        call.getBoolean("vibration"),
                        call.getInt("vibrationLength"),
                        call.getBoolean("statusBarIcon"));
                call.resolve();
            } else {
                call.reject("Permission is required!");
            }
        }
    }

    @PluginMethod
    public void showDriverTasksNotification(PluginCall call) {
        boolean vibration = call.getBoolean("vibration");

        if (!vibration) {
            implementation.showDriverTasksNotification(
                    call.getInt("countOfTasks"),
                    call.getBoolean("sound"),
                    call.getBoolean("vibration"),
                    call.getInt("vibrationLength"),
                    call.getBoolean("statusBarIcon"));
            call.resolve();
        }

        else {
            if (getPermissionState("vibration") == PermissionState.GRANTED) {
                implementation.showDriverTasksNotification(
                        call.getInt("countOfTasks"),
                        call.getBoolean("sound"),
                        call.getBoolean("vibration"),
                        call.getInt("vibrationLength"),
                        call.getBoolean("statusBarIcon"));
                call.resolve();
            } else {
                call.reject("Permission is required!");
            }
        }
    }

    @PluginMethod
    public void showChemistryTasksNotification(PluginCall call) {
        boolean vibration = call.getBoolean("vibration");

        if (!vibration) {
            implementation.showChemistryTasksNotification(
                    call.getInt("countOfTasks"),
                    call.getBoolean("sound"),
                    call.getBoolean("vibration"),
                    call.getInt("vibrationLength"),
                    call.getBoolean("statusBarIcon"));
            call.resolve();
        }

        else {
            if (getPermissionState("vibration") == PermissionState.GRANTED) {
                implementation.showChemistryTasksNotification(
                        call.getInt("countOfTasks"),
                        call.getBoolean("sound"),
                        call.getBoolean("vibration"),
                        call.getInt("vibrationLength"),
                        call.getBoolean("statusBarIcon"));
                call.resolve();
            } else {
                call.reject("Permission is required!");
            }
        }
    }

    @PluginMethod
    public void resetBadgeCount(PluginCall call) {
        implementation.resetBadgeCount();
        call.resolve();
    }
}
