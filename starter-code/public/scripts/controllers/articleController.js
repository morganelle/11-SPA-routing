'use strict';

(function(module) {
  const articleController = {};
  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.init = function() {
    console.log('article controller running');
    // $('#articles').text('Welcome to articles page');
    // $('#about').empty();
  }

  module.articleController = articleController;
})(window);
