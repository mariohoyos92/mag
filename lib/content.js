'use strict';

const ContentLoader = require(appPath('lib/ContentLoader'));

module.exports = {
  publications: {
    poetry: ContentLoader.loadYML('publications/poetry'),
    essays: ContentLoader.loadYML('publications/essays'),
    reviews: ContentLoader.loadYML('publications/reviews'),
    interviews: ContentLoader.loadYML('publications/interviews')
  },
  events: {
    readings: ContentLoader.loadYML('events/readings')
  },
  awards: ContentLoader.loadYML('about/awards'),
  experience: ContentLoader.loadYML('about/experience')
};
