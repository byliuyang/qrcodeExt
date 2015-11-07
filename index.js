// JavaScript Document
window.onload=function()
{
   chrome.tabs.getSelected(null, function(tab) {
	   $("#title").html(tab.title);
   $("#ShareBoxTitleQRCode").qrcode({ 
    render: "div",
    width: 200, 
    height:200,
    text: tab.url, 
	});
	$("#Icon").attr("src",tab.favIconUrl);
});
}
function OpenForum()
{
	chrome.tabs.create({url: "http://forum.illumer.org"});
}