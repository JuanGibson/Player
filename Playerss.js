function play(){
	if(view.played.length != 0){
		if(view.played.start(0)==0 && !view.paused){
			
			view.pause();
			
		btnPlay.style.backgroundImage = "url(skinPlayer/play.png)";
		
		}else{
		
		view.play();
		
		}
		
		}else{
		btnPlay.style.backgroundImage = "url(skinPlayer/pause.png)";
		view.play();
		}
		
		}