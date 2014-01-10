var app = function(){}

app.appWin = null;

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
  	'id': 'FTAOutlook',
  	'frame' : 'chrome',
  	'resizable' : true,
    'bounds': {
      'width': 400,
      'height': 686
    },
    minWidth: 400,
    minHeight: 145,
    maxWidth: 400, 
    maxHeight: 686
  }, app.onWindowCreated);
});



app.onWindowCreated = function(win) {
  app.appWin = win;
  // Resize the webview when the window resizes.
  app.appWin.onBoundsChanged.addListener(app.onBoundsChanged);
  // Initialize the webview size once on launch.
  app.onBoundsChanged();
}

app.onBoundsChanged = function() {

	console.log("Resized");
	console.log(app.appWin);
	var webview = document.getElementById("BBCRadioPlayer");
	// var webview = document.querySelector('webview');
	var bounds = app.appWin.getBounds();
	webview.style.height = bounds.height + 'px';
	webview.style.width = bounds.width + 'px';


}