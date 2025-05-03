import CharityFinder from './assets/charity_finder.png';
import Rmr from './assets/rmr.png';
import DogBreedHub from './assets/db_hub.png';
import IssueTracker from './assets/issuetracker.png';
import RosettasAngels from './assets/rosettas_angels.png';
import CatCostEstimator from './assets/cat_cost_estimator.png';
import i18n from './i18n';

// Initialize project objects without descriptions first
const projects = [
  {
    name: "Cat Cost Estimator",
    appLink: "https://cat-cost-estimator.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/next-cat-cost-estimator",
    image: CatCostEstimator,
    description: '' // Will be filled when i18n is ready
  },
  {
    name: "Rosetta's Angels v2",
    appLink: "https://rosettas-angels.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/rosettas-angels",
    image: RosettasAngels,
    description: ''
  },
  {
    name: "Rosetta's Angels v1",
    appLink: "https://rosettasangels.org/",
    codeLink: "https://github.com/jessica-iacovozzi/rmr-rails",
    image: Rmr,
    description: ''
  },
  {
    name: "Dog Breed Hub",
    appLink: "https://dog-breed-hub.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/dog-breed-hub",
    image: DogBreedHub,
    description: ''
  },
  {
    name: "Charity Finder",
    appLink: "https://charityfinder.netlify.app/",
    codeLink: "https://github.com/jessica-iacovozzi/Canadian-Charities",
    image: CharityFinder,
    description: ''
  },
  {
    name: "Project Issue Tracker",
    appLink: "https://issue-tracker-alpha-eight.vercel.app/",
    codeLink: "https://github.com/jessica-iacovozzi/issue-tracker",
    image: IssueTracker,
    description: ''
  }
];

// This function fills the descriptions only when translations are definitely available
function fillProjectDescriptions() {
  // Only fill if i18n is initialized and the translation namespace is loaded
  if (i18n.isInitialized && i18n.hasResourceBundle(i18n.language, 'translation')) {
    projects[0].description = i18n.t('cce_description');
    projects[1].description = i18n.t('ra_description');
    projects[2].description = i18n.t('rmr_description');
    projects[3].description = i18n.t('dbh_description');
    projects[4].description = i18n.t('cf_description');
    projects[5].description = i18n.t('it_description');
    return true;
  }
  return false;
}

// Try to fill initially - will only succeed if translations are already loaded
fillProjectDescriptions();

// Set up event listeners for when the app is ready
i18n.on('initialized', () => {
  fillProjectDescriptions();
});

// Also handle language changes
i18n.on('languageChanged', () => {
  fillProjectDescriptions();
});

// Additional safety - listen for when translations are loaded
i18n.store.on('added', () => {
  fillProjectDescriptions();
});

export default projects;
