export interface Projects {
  name: string;
  description: string;
  tStyle: Style;
  bStyle: Style;
  gitHubLink: string;
  gitHubButton: boolean;
  liveLink: string;
  liveButton: boolean;
}

interface Style {
  'background-image': string;
}
