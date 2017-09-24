import { HSRPage } from './app.po';

describe('hsr App', () => {
  let page: HSRPage;

  beforeEach(() => {
    page = new HSRPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
