 (function (){
     function SongPlayer() {
         var SongPlayer = {};
         
         var currentSong = null;
     /**   
     * @desc object audio File
     * @type {object}
     */
        var currentBuzzObject = null;
        
	 /**
     * @function setSong
     * @desc  Stops currently playing song and loads new audio file as currentBuzzObject
     * @param {object} song
     */
       
      var setSong = function(song) {
		  if (currentBuzzObject) {
			  currentBuzzObject.stop();
			  currentSong.playing = null;
     }
  
		  currentBuzzObject = new buzz.sound(song.audioUrl, {
			  formats: ['mp3'],
			  preload: true
     });
  
     	  currentSong = song;
      };
 
      /**
      * @function playSong
      * @desc  plays song using the buzz library play method
      * @param {object} song
      */
          
         var playSong = function(song) {
             currentBuzzObject.play();
             song.playing = true;
         }
 
         
      /**
      * @function SongPlayer.play
      * @desc public method of SongPlayer that checks if there is a current song playing * * and then calls the setSong and playSong functions if not. also calls playSong if * * the current song is paused
      * @param {object} song
      */
            
         
         SongPlayer.play = function(song) {
             if(currentSong !== song){
                 
             setSong(song);
		     playSong(song);
            
             } else if (currentSong===song) {
                 if(currentBuzzObject.isPaused()) {
                     playSong(song);
                     
                 }
             }
                 
         };
		 
	   /**
       * @function SongPlayer.pause
       * @desc public method of SongPlayer that pauses a song 
       * @param {object} song
       */
         
         
         SongPlayer.pause = function(song) {
             currentBuzzObject.pause();
             song.playing = false;
         };
         
         return SongPlayer;
  
     }
 
 	angular
     .module('blocJams')
     .factory('SongPlayer', SongPlayer);
 
 })()