import CharityFinder from './assets/charity_finder.png';
import Rmr from './assets/rmr.png';
import DogBreedHub from './assets/db_hub.png';
import IssueTracker from './assets/issuetracker.png';
import RosettasAngels from './assets/rosettas_angels.png';
import CatCostEstimator from './assets/cat_cost_estimator.png';
import i18n from './i18n';

const projects = [
  {
    name: "Cat Cost Estimator",
    appLink: "https://cat-cost-estimator.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/next-cat-cost-estimator",
    image: CatCostEstimator
  },
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
  }
];

function fill() {
  projects[0].description = i18n.t('cce_description'),
  projects[1].description = i18n.t('ra_description'),
  projects[2].description = i18n.t('rmr_description'),
  projects[3].description = i18n.t('dbh_description'),
  projects[4].description = i18n.t('cf_description'),
  projects[5].description = i18n.t('it_description')
}

fill();

i18n.on('languageChanged init',() => {
  fill();
});

export default projects;
