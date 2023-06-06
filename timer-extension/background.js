chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer", "isRunning"], (res) => {
    const time = res.timer ?? 0;
    const isRunning = res.isRunning ?? false;

    if (!isRunning) {
      return;
    }

    chrome.storage.local.set({
      timer: time + 1,
    });

    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });

    chrome.storage.sync.get(["notifTime"], (res) => {
      const notifTime = res.notifTime ?? 1000;
      if (time % notifTime == 0) {
        this.registration.showNotification("Chrome Timer Extension", {
          body: `${notifTime} seconds have passed!`,
          icon: "./assets/icon.png",
        });
        console.log(`Notification: ${notifTime} seconds have passed!`);
      }
    });
  });
});
