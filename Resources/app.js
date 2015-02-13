(function(){
	var platino = require('co.lanica.platino');
	
    var win = Titanium.UI.createWindow();
    var game = platino.createGameView();
    var scene = platino.createScene();
    
    game.addEventListener('onload', function(e){
    	var self = e.source,
    		SCREEN = {
    			width: 320,
    			height: 568
    		},
    		scale = self.size.height / SCREEN.height;
    
    	self.screen = {
    		width: self.screen.width / scale,
    		height: self.screen.height / scale
    	};
    	
    	self.touchScaleX = self.screen.width / self.size.width;
    	self.touchScaleY = self.screen.height / self.size.height;
    	
    	self.pushScene(scene);
    	
    	//starts the game engine
    	self.start();
    });
    
    win.add(game);
    win.open();
})();