chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('qnotes.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});