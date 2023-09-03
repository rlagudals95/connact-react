import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded");

function openTabsOnBrowserStart() {
  console.log("openTabsOnBrowserStart"!);
  chrome.runtime.onStartup.addListener(() => {
    console.log("getAll!");
    chrome.windows.getAll({ populate: true }, (windows) => {
      const targetUrls = [
        "https://news.naver.com/",
        "https://sports.news.naver.com/index",
      ]; // 여기에 자주 사용하는 웹사이트 URL을 추가하세요
      const openedUrls = [];

      windows.forEach((window) => {
        window.tabs.forEach((tab) => {
          openedUrls.push(tab.url);
        });
      });

      targetUrls.forEach((url) => {
        if (!openedUrls.includes(url)) {
          chrome.tabs.create({ url });
        }
      });
    });
  });
}

openTabsOnBrowserStart();
