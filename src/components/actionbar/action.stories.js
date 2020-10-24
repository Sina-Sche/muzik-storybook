import { createActionElement } from "./action";

export default {
  title: "Components/Action",
  parameters: { layout: "centered" },
};

export const ActionBar = () => {
  return createActionElement();
};
