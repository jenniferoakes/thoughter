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
        let mainElement = document.querySelector('main.recent');
        mainElement.parentNode.removeChild( mainElement );
      });

      it('should be a function', function() {
        expect( window.thoughter.showRecent ).to.be.a('function');
      });

      it('should create articles for every thought it was given', function() {
        window.thoughter.showRecent([
          {
            content: 'Here is my thought',
            createTime: '1991',
            id: 'I am a human'
          }
        ]);
        let articles = document.querySelectorAll('main.recent article');
        expect( articles.length ).to.equal(1);
      });

      it('should handle incorrect properties or corrresponding values in every article it is given', function() {
        window.thoughter.showRecent([
          {
            name: ' ',
          }
        ]);
        let recent = document.querySelectorAll('main.recent article');
        expect( recent.length ).to.equal(0);
      });

      it('should handle an empty array by creating no articles', function() {
        window.thoughter.showRecent([]);
        let articles = document.querySelectorAll('main.recent article');
        expect( articles.length ).to.equal(0);
      });

      it('should add the appropriate classes and ids to the html elements the function creates', function() {
        window.thoughter.showRecent([
          {
            content: ' ',
            createTime: ' ',
            id: ' '
          }
        ]);

        let testElement = document.querySelector('article');
        expect(testElement.classList.contains('panel')).to.be.true;
        expect(testElement.classList.contains('panel-info')).to.be.true;
        expect(testElement.hasAttribute('id')).to.be.true;
        expect(testElement.getAttribute('id')).to.equal('thought- ');
      });


    });
  });

}());
