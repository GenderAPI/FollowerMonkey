

chrome.runtime.sendMessage({'option':'load_script'});



    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

      if (message.option=="load_script")
  {
    eval(message.veri)

  }

});
