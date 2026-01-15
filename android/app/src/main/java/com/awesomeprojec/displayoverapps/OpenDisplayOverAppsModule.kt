package com.awesomeprojec.displayoverapps;

import android.annotation.SuppressLint
import android.annotation.TargetApi
import android.app.AppOpsManager
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.provider.Settings
import com.facebook.react.bridge.*

class OpenDisplayOverAppsModule(val reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  companion object {
    private const val PERMISSION_GRANTED = "granted"
    private const val PERMISSION_DENIED = "denied"
  }

  override fun getName(): String {
    return "OpenDisplayOverApps"
  }

  @ReactMethod
  fun openDisplayOverApps(cb: Callback) {
    val activity = reactContext.currentActivity

    if (activity == null) {
      cb.invoke(false)
      return
    }

    try {
      activity.startActivity(
        Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION)
          .setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)
          .setFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      )
      cb.invoke(true)
    } catch (e: Exception) {
      cb.invoke(e.message)
    }

  }

  private fun isDisplayOverAppsGranted(context: Context): Boolean {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      return Settings.canDrawOverlays(context)
    }
    return true

  }

  @ReactMethod
  fun isDisplayOverAppsGranted(promise: Promise) {
    if (isDisplayOverAppsGranted(reactContext))
      promise.resolve(PERMISSION_GRANTED)
    else
      promise.resolve(PERMISSION_DENIED)
  }

}
