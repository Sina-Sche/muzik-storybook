import "./track.css";
import playActionSrc from "../../assets/playaction.svg";
import michaelJacksonSrc from "../../assets/michael.png";
export function createTrackElement(track) {
    const trackElement = document.createElement("div"); 
    trackElement.className = "track";

    const trackDescription = document.createElement ("div");
    trackDescription.className = "track__description";
      
    const titleElement = document.createElement("h3"); 
    titleElement.innerText = track.title; 
    titleElement.className = "titleName";

    const artistElement = document.createElement("p");
    artistElement.innerText = track.artist; 
    artistElement.className = "artistName"; 


    const imgElement = document.createElement ("img");
    imgElement.src = michaelJacksonSrc;
    imgElement.alt = `Image of ${track.artist}`;
    imgElement.className ="track__image";

    const buttonElement = document.createElement ("button");
    buttonElement.className = "action__button";

    const playActionElement = document.createElement ("img");
    playActionElement.className = "play__element"
    playActionElement.src = playActionSrc;

    const audioElement =new Audio(track.audioSrc);

    trackElement.append(imgElement,trackDescription,buttonElement)
    buttonElement.append(playActionElement)
    trackDescription.append(titleElement, artistElement)
    
   
    let count = 0;
    buttonElement.onclick = playPause; 
    function playPause () {
      if(count == 0) {
        count = 1;
        audioElement.play ();
            }else {
              count = 0;
              audioElement.pause ();
            }
          };  
    
    return trackElement;
  }
