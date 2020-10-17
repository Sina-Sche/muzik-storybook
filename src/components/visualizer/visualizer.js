import "./visualizer.css";
import { createElement } from "../../utils/elements";
/*erstelle eine große Div*/

export const createVisualizer = () => { 
    const visualizerContainer = createElement("div", {
        className: "visualizerContainer",
        });

const heightButton = createElement("button", {
    className: "visualizer__btn",
    onclick: () => {
        const lines = document.getElementsByClassName("line");
        lines.forEach((Line) => {
                Line.style.height = `${createRandomHeight(100)}px`;
            });
},
});


    /*erstelle 20 Balken (Anfang; Ende; Zähler)*/
for (let i=0; i<50; i++) {
    const einDiv = createElement("div", {
        className: "line",
    });

einDiv.style.height = `${createRandomHeight(100)}px`;
visualizerContainer.append(einDiv);
/*gebe den großen Container mit Inhalt = 20 Divs wieder */
}

visualizerContainer.append(heightButton);

return visualizerContainer;
};

const createRandomHeight = (maximumHeight) => {
 const randomHeight = Math.random()* maximumHeight;
 return randomHeight;
};