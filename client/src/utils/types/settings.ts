export interface IconSettings {
  xmlns: string;
  width: string;
  height: string;
  viewBox: string;
  fill: string;
  stroke: string;
  strokeWidth: string;
  [key: string]: string;
}

export const projectIconSettings: IconSettings = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
};
