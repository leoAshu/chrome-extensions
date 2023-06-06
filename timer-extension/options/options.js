const nameInput = document.getElementById("name-input");
const timeInput = document.getElementById("time-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notifTime = timeInput.value;
  if (name !== "") {
    chrome.storage.sync.set({
      name,
      notifTime,
    });
  }
});

chrome.storage.sync.get(["name"], (res) => {
  nameInput.value = res.name ?? "";
  timeInput.value = res.notifTime ?? 1000;
});
