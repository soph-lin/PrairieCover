// Currently unused because styling is not properly removed. Need storage, scripting perms.

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ active: true });
});

chrome.action.onClicked.addListener(() => {
    chrome.storage.local.get("active", (data) => {
        const isActive = !data.active;
        chrome.storage.local.set({ active: isActive });
        toggleStyles(isActive);
    });
});

function toggleStyles(isActive) {
    chrome.tabs.query({ url: "https://us.prairielearn.com/pl/course_instance/*/instance_question/*/" }, (tabs) => {
        tabs.forEach((tab) => {
            if (isActive) {
                // Inject the CSS
                chrome.scripting.insertCSS({
                    target: { tabId: tab.id },
                    files: ["/src/css/hide.css"]
                });
            } else {
                // Remove the CSS
                chrome.scripting.removeCSS({
                    target: { tabId: tab.id },
                    files: ["/src/css/hide.css"]
                });
            }
        });
    });
}