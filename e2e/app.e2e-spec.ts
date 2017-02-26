import { DatingSiteAngularMaterialPage } from './app.po';

describe('dating-site-angular-material App', () => {
  let page: DatingSiteAngularMaterialPage;

  beforeEach(() => {
    page = new DatingSiteAngularMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
