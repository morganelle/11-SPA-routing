'use strict';

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    console.log('about controller running');
    $('#about').show();
    $('#articles').hide();
  }

  module.aboutController = aboutController;
})(window);
