package com.gnksoftware.plugins.sspush;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;

public class NotificationService extends Service {

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId){
        runService(SsPush.builder);
        return super.onStartCommand(intent, flags, startId);
    }

    public void runService(NotificationCompat.Builder notificationBuilder) {
        startForeground(1, notificationBuilder.build());
    }

}
