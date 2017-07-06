import { McloudTestPage } from './app.po';

describe('mcloud-test App', () => {
  let page: McloudTestPage;

  beforeEach(() => {
    page = new McloudTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
