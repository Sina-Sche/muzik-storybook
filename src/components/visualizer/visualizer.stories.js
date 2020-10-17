import { createVisualizer } from "./visualizer";
import "./visualizer.css";

export default {title: "Components/Visualize" ,
parameters: { layout: "centered" },
};

export const Visualizer = () => createVisualizer();