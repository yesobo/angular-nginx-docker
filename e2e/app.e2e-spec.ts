import { AngularNginxPage } from './app.po';

describe('angular-nginx App', () => {
  let page: AngularNginxPage;

  beforeEach(() => {
    page = new AngularNginxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
