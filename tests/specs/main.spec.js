(function() {
  'use strict';

  let expect = chai.expect;

  describe('thoughter module', function() {
    describe('showRecent function', function() {

      beforeEach(function() {
        let mainElement = document.createElement('main');
        mainElement.classList.add('recent');
        document.querySelector('body').appendChild( mainElement );
      });

      afterEach(function() {
        let mainElement = document.querySelector('main');
        mainElement.parentNode.removeChild( mainElement );
      });

      it('should be a function', function() {
        expect( window.thoughter.showRecent ).to.be.a('function');
      });

      it('should check for required properties for each array', function() {
        window.thoughter.showRecent([
          {
            content: ' ',
            createTime: ' ',
            id: ' '
          }
        ]);
        let recent = document.querySelectorAll('main.recent article');
        expect( recent.length ).to.equal(1);
      });

    });

    describe('getRecent function', function() {

    });

  });


}());
