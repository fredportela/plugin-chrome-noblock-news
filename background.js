chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return { cancel: true };
    },
    {
        urls: [
                "*://static.folha.uol.com.br/paywall/online/config.json*",
                "*://paywall.folha.uol.com.br/digital.json*",
                "*://paywall.folha.uol.com.br/wall.json*",
                "*://experience.tinypass.com/xbuilder/experience*",
				"*://buy.tinypass.com/checkout/offer/trackShow*",
                "*://acesso.estadao.com.br/paywall/pw.php*",
                "*://static.infoglobo.com.br/paywall/register-piano/*",
                "*://static.infoglobo.com.br/paywall/js/tiny.js",
				"*://www.netdeal.com.br/api/paywall/request"
            ]
    },
    ["blocking"]
);
