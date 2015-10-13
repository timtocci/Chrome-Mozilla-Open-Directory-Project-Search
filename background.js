chrome.omnibox.onInputEntered.addListener(function (text) {
	var createProperties = {
		url : "http://www.dmoz.org/search?q="
		 + encodeURIComponent(text)
	};
	chrome.tabs.create(createProperties);
});
chrome.omnibox.onInputStarted
.addListener(function () {
	var suggestion = {
		description : "Search Mozilla Open Directory Project (dmoz) for the query: %s "
	}
	chrome.omnibox.setDefaultSuggestion(suggestion);
});
