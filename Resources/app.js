(function(){
	var platino = require('co.lanica.platino');
	var _W = Ti.Platform.displayCaps.platformWidth;
	var _H = Ti.Platform.displayCaps.platformHeight;
	
    var win = Ti.UI.createWindow();
    var game = platino.createGameView();
    var scene = platino.createScene();
    
    var bg = platino.createSprite({
    	width: _W,
    	height: _H
    });
    //white background
    bg.color(1, 1, 1);
    
    var world = platino.createSprite({
    	image: 'images/world.png',
    	width: 100,
    	height: 100
    });
    
    var hello = platino.createTextSprite({
    	text: 'hello ',
    	fontSize: 18,
    	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    
    //move world to center screen
    world.move(
    	_W * 0.5 - (world.width * 0.5),
    	_H * 0.5 - (world.height * 0.5)
    );
    
     hello.move(
    	_W * 0.5 - (hello.width * 0.5),
    	_H * 0.5 - (hello.height * 0.5) - 80
    );
    
    scene.add(bg);
    scene.add(world);
    scene.add(hello);
    
    game.addEventListener('onload', function(e){
    	var self = e.source,
    		SCREEN = {
    			width: 320,
    			height: 568
    		},
    		scale = self.size.height / SCREEN.height;
    
    	self.screen = {
    		width: self.size.width / scale,
    		height: self.size.height / scale
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