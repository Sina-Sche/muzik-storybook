import "./track.css";
import playActionSrc from "../../assets/playaction.svg";
import michaelJacksonSrc from "../../assets/michael.png";
export function createTrackElement(title, artist) {
        const trackElement = document.createElement("div"); 
    trackElement.className = "track";

    const divElement = document.createElement ("div");
    divElement.className = "titleDescription";
   
    

    
    const titleElement = document.createElement("h3"); // <h3></h3>
    titleElement.innerText = title; // <h3>Billie Jean</h3>
    titleElement.className = "titleName";

    const artistElement = document.createElement("p");
    artistElement.innerText = artist; 
    artistElement.className = "artistName"; 


    const imgElement = document.createElement ("img");
    imgElement.src = michaelJacksonSrc;
    imgElement.alt = `Image of ${artist}`;
    imgElement.className ="track__image";

    const buttonElement = document.createElement ("button");
    buttonElement.className = "action__button";

    const playActionElement = document.createElement ("img");
    playActionElement.className = "play__element"
    playActionElement.src = playActionSrc;

    trackElement.append(imgElement,divElement,buttonElement)
    buttonElement.append(playActionElement)
    divElement.append(titleElement, artistElement)
    buttonElement.onclick = function() {
      alert('Click!');
    };
    return trackElement;


  }
{/* <div class="track">
  <img/>
  <div>
<h3>Billie Jean</h3>
<p>Michael Jackson</p></div>
<button></button>

</div> */}