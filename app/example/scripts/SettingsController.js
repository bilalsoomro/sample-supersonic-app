angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic) {
    
    /*window.addEventListener('WebComponentsReady', function(e) {
	  // imports are loaded and elements have been registered
	  console.log('Components are ready');
	  supersonic.ui.navigationBar.hide();
	});*/

  	var stopListening = supersonic.ui.views.current.whenVisible( function() {
	  console.log("This view is now visible");
	  supersonic.ui.navigationBar.hide();
	  stopListening;
	});


  });
