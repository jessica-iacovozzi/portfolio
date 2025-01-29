import CharityFinder from './assets/charity_finder.png';
import Rmr from './assets/rmr.png';
import DogBreedHub from './assets/db_hub.png';
import ShortURL from './assets/shorturl.png';
import IssueTracker from './assets/issuetracker.png';
import RosettasAngels from './assets/rosettas_angels.png';
import i18n from './i18n';

const projects = [
  {
    name: "Rosetta's Angels v2",
    appLink: "https://rosettas-angels.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/rosettas-angels",
    image: RosettasAngels
  },
  {
    name: "Rosetta's Angels v1",
    appLink: "https://rosettasangels.org/",
    codeLink: "https://github.com/jessica-iacovozzi/rmr-rails",
    image: Rmr
  },
  {
    name: "Dog Breed Hub",
    appLink: "https://dog-breed-hub.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/dog-breed-hub",
    image: DogBreedHub
  },
  {
    name: "Charity Finder",
    appLink: "https://charityfinder.netlify.app/",
    codeLink: "https://github.com/jessica-iacovozzi/Canadian-Charities",
    image: CharityFinder
  },
  {
    name: "Project Issue Tracker",
    appLink: "https://issue-tracker-alpha-eight.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/issue-tracker",
    image: IssueTracker
  },
  {
    name: "URL Shortener",
    appLink: "https://shorturl.ltd/",
    codeLink: "https://github.com/jessica-iacovozzi/url_shortener",
    image: ShortURL
  },
];

function fill() {
  projects[0].description = i18n.t('ra_description'),
  projects[1].description = i18n.t('rmr_description'),
  projects[2].description = i18n.t('dbh_description'),
  projects[5].description = i18n.t('cf_description'),
  projects[3].description = i18n.t('it_description'),
  projects[4].description = i18n.t('surl_description')
}

fill();

i18n.on('languageChanged init',() => {
  fill();
});

export default projects;
