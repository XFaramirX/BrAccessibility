describe('QA Environment Pages', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'VisualBR',
      batchName: 'QA Pages',
      batchId: '2608358a-9e2d-4b19-b0b1-9a67995bf1cb',
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });
  it(`QA Article`, function () {
    cy.visit(
      'https://brooks-pattern-library-refresh-qa.azurewebsites.net/patterns/03-templates-article/03-templates-article.rendered.html'
    );
    cy.scrollTo('bottom', { duration: 3000, easing: 'linear' });
    cy.eyesCheckWindow({
      tag: 'QA Article',
      target: 'window',
      fully: true,
      ignore: [{ selector: '.o-social-media-share__links' }],
    });
  });

  it(`QA Landing Product`, function () {
    cy.visit(
      'https://brooks-pattern-library-refresh-qa.azurewebsites.net/patterns/03-templates-landing/03-templates-landing.rendered.html'
    );

    cy.scrollTo('bottom', { duration: 5000, easing: 'linear' });
    cy.eyesCheckWindow({
      tag: 'QA Landing Product',
      target: 'window',
      fully: true,
    });
  });

  it(`QA Landing Media`, function () {
    cy.visit(
      'https://brooks-pattern-library-refresh-pdp-qa.azurewebsites.net/patterns/04-pages-landing-media/04-pages-landing-media.rendered.html'
    );

    cy.scrollTo('bottom', { duration: 5000, easing: 'linear' });
    cy.eyesCheckWindow({
      tag: 'QA Landing Media',
      target: 'window',
      fully: true,
    });
  });

  it(`QA Landing Particle`, function () {
    cy.visit(
      'https://brooks-pattern-library-refresh-qa.azurewebsites.net/patterns/04-pages-landing-particle/04-pages-landing-particle.rendered.html'
    );

    cy.scrollTo('bottom', { duration: 5000, easing: 'linear' });
    cy.eyesCheckWindow({
      tag: 'QA Landing Particle',
      target: 'window',
      fully: true,
    });
  });

  it(`QA Landing Simple`, function () {
    cy.visit(
      'https://brooks-pattern-library-refresh-qa.azurewebsites.net/patterns/04-pages-landing-simple/04-pages-landing-simple.rendered.html'
    );

    cy.scrollTo('bottom', { duration: 5000, easing: 'linear' });
    cy.eyesCheckWindow({
      tag: 'QA Landing Simple',
      target: 'window',
      fully: true,
    });
  });

  it(`QA PDP`, function () {
    cy.visit(
      'https://brooks-pattern-library-refresh-pdp-qa.azurewebsites.net/patterns/04-pages-pdp-refresh/04-pages-pdp-refresh.rendered.html'
    );

    cy.scrollTo('bottom', { duration: 5000, easing: 'linear' });
    cy.eyesCheckWindow({
      tag: 'QA PDP Refresh',
      target: 'window',
      fully: true,
    });
  });
});
