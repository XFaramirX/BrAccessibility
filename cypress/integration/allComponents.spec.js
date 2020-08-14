const VIEWPORTS = require('../fixtures/viewports.json');
const ALL_COMPONENTS = require('../fixtures/components.json');
const A11Y_OPTIONS = require('../fixtures/w3practices.json');

context('Brooks Accessibility Check', () => {
  ALL_COMPONENTS.forEach((component) => {
    component.variations.forEach((variation) => {
      VIEWPORTS.forEach((size) => {
        // make assertions on the component fron an array of ifferent viewports
        describe(`${variation.name} ${size}`, () => {
          beforeEach(() => {
            if (Cypress._.isArray(size)) {
              cy.viewport(size[0], size[1]);
            } else {
              cy.viewport(size);
            }
            cy.visit(`${variation.url}`);
            cy.injectAxe();
          });
          it(`Accesibility Check`, () => {
            if (variation.exclude) {
              cy.checkA11y(null, {
                includedImpacts: [null],
              });
            } else if (variation.rules) {
              if (variation.selector) {
                cy.checkA11y(variation.selector, variation.rules);
              } else {
                cy.checkA11y('body', variation.rules);
              }
            } else if (variation.selector) {
              cy.checkA11y(variation.selector, A11Y_OPTIONS);
            } else {
              cy.checkA11y('body', A11Y_OPTIONS);
            }
          });
        });
      });
    });
  });
});
