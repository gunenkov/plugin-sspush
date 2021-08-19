package com.gnksoftware.plugins.sspush;

import android.app.Activity;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Vibrator;
import android.provider.Settings;
import android.widget.RemoteViews;
import androidx.annotation.RequiresApi;
import androidx.core.app.NotificationCompat;

public class SsPush {

    private Activity activity;
    private Context context;
    private NotificationChannel notificationChannel;
    private NotificationManager notificationManager;
    private int notificationId = 1;

    @RequiresApi(api = Build.VERSION_CODES.O)
    public SsPush(Activity activity) {
        this.activity = activity;
        this.context = activity.getApplicationContext();
        this.notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        this.notificationChannel = new NotificationChannel(
                context.getResources().getString(R.string.channel_id),
                context.getResources().getString(R.string.channel_name),
                NotificationManager.IMPORTANCE_HIGH);
        notificationManager.createNotificationChannel(notificationChannel);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public String echo(String value) {
        return value;
    }

    public void showBannerNotification(boolean sound, boolean vibration,
                                       int vibrationLength, boolean statusBarIcon) {
        RemoteViews contentView = new RemoteViews(context.getPackageName(), R.layout.data_service_push_layout);

        NotificationCompat.Builder notificationBuilder = null;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            notificationBuilder = new NotificationCompat.Builder(context, notificationChannel.getId())
                    .setCustomContentView(contentView)
                    .setContentIntent(PendingIntent.getActivity(context, 0,
                            new Intent(context, activity.getClass()), 0))
                    .setPriority(NotificationCompat.PRIORITY_HIGH);

        }

        if (statusBarIcon) {
            notificationBuilder.setSmallIcon(R.drawable.ic_plant_png);
        }

        else {
            notificationBuilder.setSmallIcon(R.drawable.ic_transparent);
        }

        if (sound) {
            notificationBuilder.setSound(Settings.System.DEFAULT_NOTIFICATION_URI);
        }

        if (vibration) {
            Vibrator v = (Vibrator) this.context.getSystemService(Context.VIBRATOR_SERVICE);
            v.vibrate(vibrationLength);
        }

        notificationManager.notify(notificationId, notificationBuilder.build());
        notificationId++;
    }

    public void showTasksNotification(int countOfTasks, boolean sound, boolean vibration,
                                      int vibrationLength, boolean statusBarIcon) {
        RemoteViews contentView =  new RemoteViews(context.getPackageName(), R.layout.data_service_push_new_layout);
        contentView.setTextViewText(R.id.new_push_body, getText(countOfTasks));

        NotificationCompat.Builder notificationBuilder = null;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            notificationBuilder = new NotificationCompat.Builder(context, notificationChannel.getId())
                    .setCustomContentView(contentView)
                    .setPriority(NotificationCompat.PRIORITY_HIGH)
                    .setNumber(countOfTasks)
                    .setContentIntent(PendingIntent.getActivity(context, 0, new Intent(context, activity.getClass()), 0));
        }

        if (statusBarIcon) {
            notificationBuilder.setSmallIcon(R.drawable.ic_plant_png);
        }

        else {
            notificationBuilder.setSmallIcon(R.drawable.ic_transparent);
        }

        if (sound) {
            notificationBuilder.setSound(Settings.System.DEFAULT_NOTIFICATION_URI);
        }

        if (vibration) {
            Vibrator v = (Vibrator) this.context.getSystemService(Context.VIBRATOR_SERVICE);
            v.vibrate(vibrationLength);
        }

        notificationManager.notify(notificationId, notificationBuilder.build());
        notificationId++;
    }

    public void resetBadgeCount() {
        notificationManager.cancelAll();
    }

    private String getText(int countOfTasks) {
        int d = countOfTasks % 100;
        int d1 = countOfTasks % 10;

        if (d > 10 && d < 20) {
            return "Доступно " + countOfTasks + " заданий";
        }
        if (d1 > 1 && d1 < 5) {
            return "Доступно " + countOfTasks + " задания";
        }
        if (d1 == 1) {
            return "Доступно " + countOfTasks + " задание";
        }

        return "Доступно " + countOfTasks + " заданий";
    }
}
