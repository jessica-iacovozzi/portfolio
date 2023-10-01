import CharityFinder from './assets/charity_finder.png';
import Rmr from './assets/rmr.png';
import DogBreedHub from './assets/db_hub.png';
import i18n from './i18n';

const projects = [
  {
    name: "RMR Association",
    appLink: "https://rocky-headland-52098-e854db2d9828.herokuapp.com/",
    codeLink: "https://github.com/jessica-iacovozzi/rmr-rails",
    image: Rmr
  },
  {
    name: "Charity Finder",
    appLink: "https://charity-finder.ca/",
    codeLink: "https://github.com/jessica-iacovozzi/Canadian-Charities",
    image: CharityFinder
  },
  {
    name: "Dog Breed Hub",
    appLink: "https://dog-breed-hub.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/dog-breed-hub",
    image: DogBreedHub
  }
];

function fill() {
  projects[0].description = i18n.t('rmr_description'),
  projects[1].description = i18n.t('cf_description'),
  projects[2].description = i18n.t('dbh_description')
}

fill();

i18n.on('languageChanged init',() => {
  fill();
});

export default projects;
