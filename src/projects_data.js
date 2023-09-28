import CharityFinder from './assets/charity_finder.png';
import Rmr from './assets/rmr.png';
import DogBreedHub from './assets/db_hub.png';

export const projects = [
  {
    name: "RMR Association",
    description: "This is a website for the local Montreal non-profit RMR Association. It is a <span class='text-pink'>Ruby on Rails</span> application using the <span class='text-pink'>Stimulus</span> framework. This non-profit helps underpriviledged families during the holidays.",
    appLink: "https://rocky-headland-52098-e854db2d9828.herokuapp.com/",
    codeLink: "https://github.com/jessica-iacovozzi/rmr-rails",
    image: Rmr
  },
  {
    name: "Charity Finder",
    description: "This is a website facilitating the process of finding trustworthy Canadian charities. It is a <span class='text-pink'>React</span> application communicating with a <a href='https://canadian-charities.fly.dev/api/v1/charities' target='_blank' rel='noreferrer' class='text-pink'>REST API</a> I developed. Unfortunately, not all charities use their donations wisely and I believe people deserve to know where their money is going.",
    appLink: "https://charity-finder.ca/",
    codeLink: "https://github.com/jessica-iacovozzi/Canadian-Charities",
    image: CharityFinder
  },
  {
    name: "Dog Breed Hub",
    description: "This website allows you to browse through various dog breeds and learn about their distinctive traits. Hopefully, it'll make it easier for people to find the ideal furry companion. It is a <span class='text-pink'>React</span> application written in <span class='text-pink'>Typescript</span> that communicates with API Ninjas' dog API.",
    appLink: "https://dog-breed-hub.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/dog-breed-hub",
    image: DogBreedHub
  }
];
