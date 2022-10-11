var audio=new Audio();audio.preload='none';var hasErrors;var lastUrl;var canPause;function play(urlId,loaderId,slug){var url=document.getElementById(urlId).textContent;if(canPause){audio.pause();audio.currentTime=0;}
if(lastUrl!=url||hasErrors){audio.src=url;lastUrl=url;hasErrors=false;canPause=false;audio.onerror=function(){hasErrors=true};if(loaderId){document.getElementById(loaderId).style.display='block';audio.addEventListener('canplay',_=>{document.getElementById(loaderId).style.display='none';});}}
var playPromise=audio.play();if(playPromise!==undefined){playPromise.then(_=>{canPause=true;}).catch(error=>{hasErrors=true;});}
if(navigator.vibrate){navigator.vibrate(5);}}

function load(){
  var url = document.getElementById('source').textContent;
  url = decodeURI(url)
  filename = url.split("/").pop()
  if (filename == '' || !url.includes("http")){
    filename = 'Unknown File'
  }
  document.title = filename;
}