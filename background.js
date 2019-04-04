chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return { cancel: true };
    },
    {
        urls: [
                "*://static.folha.uol.com.br/paywall/online/config.json*",
                "*://paywall.folha.uol.com.br/digital.json*",
                "*://paywall.folha.uol.com.br/wall.json*",
                "*://experience.tinypass.com/xbuilder/experience/execute*"
            ]
    },
    ["blocking"]
);
