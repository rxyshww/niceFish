import { MyNiceFishPage } from './app.po';

describe('my-nice-fish App', () => {
  let page: MyNiceFishPage;

  beforeEach(() => {
    page = new MyNiceFishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
