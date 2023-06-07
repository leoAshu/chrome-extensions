chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
    chrome.search.query({
      disposition: "NEW_TAB",
      text: event.selectionText ?? "TV Shows",
    });
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  console.log(sendResponse);
  sendResponse("Received message from background");
  chrome.tabs.sendMessage(sender.tab.id, "Got your message from background!");
});
