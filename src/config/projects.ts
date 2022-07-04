import { ProjectCardProps } from "../../@types/custom";

export const projects: ProjectCardProps[] = [
  {
    name: "Vidify",
    preview: {
      static: "./assets/projects/vidify-static2.png",
      gif: "./assets/projects/vidify5.gif",
    },
    description:
      "Play the Youtube video for your currently playing song on Spotify in a web page",
    bulletPoints: [
      "No setup required since it doesn't use the Youtube or Spotify APIs.",
      "Supports using the APIs for better matches and slighty quicker results.",
      "Play and pause on Spotify are reflected in the Youtube video.",
    ],
    technologies: ["Python", "Flask", "JavaScript"],
    links: {
      github: "https://github.com/pawKer/Vidify",
    },
  },
  {
    name: "Sayvitt",
    preview: {
      static: "./assets/projects/sayvitt-static2.png",
      gif: "./assets/projects/sayvitt.gif",
    },
    description: "Easily manage your saved posts on Reddit",
    bulletPoints: [
      "Uses the Reddit API to provide a better way of managing saved posts.",
      "Unsave multiple posts, filter posts by keywords or by subreddit.",
      "No user data is stored by the website.",
    ],
    technologies: ["React", "Bootstrap", "Node", "Express"],
    links: {
      github: "https://github.com/pawKer/Sayvitt",
    },
  },
  {
    name: "Travelling Game",
    preview: {
      static: "./assets/projects/hack-static2.png",
      gif: "./assets/projects/hack.gif",
    },
    description:
      "Explore the world by avoiding travel restrictions and get vaccines to stay alive",
    bulletPoints: [
      "Simple in-browser game with all original, hand drawn pixel art graphics.",
      "Highscore saving functionality and a leaderboard is displayed.",
      "Hackathon project done collaboratively in less than two working days.",
    ],
    technologies: ["HTML", "JavaScript", "Firebase"],
    links: {
      github: "https://github.com/pawKer/hackathon-travelling-game",
    },
  },
  {
    name: "NFT Rarity Ranking",
    preview: {
      static: "./assets/projects/sniper-static2.png",
      gif: "./assets/projects/sniper.gif",
    },
    description: "Quickly rank the NFTs in a collection by rarity",
    bulletPoints: [
      "Basic UI for calculating and searching the rarity rankings of NFTs.",
      "Supports different type of metadata like base64, IPFS and API.",
      "Uses OpenSea API to check if the NFTs are listed for sale.",
    ],
    technologies: ["Python", "Flask", "React", "Jupyter"],
    links: {
      github: "https://github.com/pawKer/nft-rarity-sniping-fe",
    },
  },
  {
    name: "Spotify Popularity Predictor",
    preview: {
      static: "./assets/projects/popular-static.png",
      gif: "./assets/projects/popular.gif",
    },
    description: "Predict song popularity using Machine Learning",
    bulletPoints: [
      "Created ML models to predict song popularity based on features from the Spotify API.",
      "Choose between different models with different prediction accuracies.",
      "Developed as part of my final year disertation research.",
    ],
    technologies: ["Python", "Flask", "Jupyter", "Bootstrap"],
    links: {
      github: "https://github.com/pawKer/predicting-popularity-webserver",
    },
  },
  {
    name: "Monkey Meter",
    preview: {
      static: "./assets/projects/monkey-static.png",
      gif: "./assets/projects/monkey.gif",
    },
    description: "Check and review Romanian taxi drivers",
    bulletPoints: [
      "Aggregated, cleaned and stored taxi driver data from PDF files into Firebase.",
      "Created Express API and UI to query the data.",
      "Added review taxi functionality with scores.",
    ],
    technologies: ["Node", "React", "Firebase", "Jupyter"],
    links: {
      website: "https://monkeymeter.ro",
    },
  },
];
