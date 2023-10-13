class MediaLibrary {
  constructor() {
    this.linkMediaLibrary = '[data-document-id="11350"]';
    this.searchSection = '.o-library__search-area';
    this.searchInput = '.o-library__query';
    this.collectionSection = '.mod-collection-area';
    this.assetSection = '.o-library__asset-list';
    this.searchButton = '#o-library__search-btn';
    this.clearSearchButton = '.o-library__clear-search';
    this.collectionValueResult = '.o-collection-area__area-heading';
    this.asseteValueResult = '.js-o-library__assets-header > .a-h2';
    this.collectionResultsList = '.m-collection-preview__content';
    this.collectionResultNames = '.m-collection-preview__name';
    this.collectionResultImages = '.cm-collection-preview-images';
    this.assetResultNames = '.m-collection-preview__name';
    this.assetResultList = '.o-library__image';
    this.assetSortButton = '.o-library__assets-action > .mod > .js-c-dropdown-button__button > .c-dropdown-button__button-label';
    this.assetSortOptions = '.o-library__assets-action > .mod > .js-c-dropdown-button__options .c-dropdown-button__option-label';
    this.collectionSortButton = '.js-o-collection-area__sorting-container > .mod > .js-c-dropdown-button__button > .c-dropdown-button__button-label';
    this.collectionSortOption = '.js-o-collection-area__sorting-container > .mod > .js-c-dropdown-button__options .c-dropdown-button__option-label';
    this.errorMessage = '.tw-font-heading > div';
    this.errorSection = '.o-library__empty-state';
    this.errorSubMessage = '.tw-p-0 > .tw-font-body';

  }

  /**
   * Navigates to the Media Library page.
   */
  goToMediaLibraryPage() {
    cy.visit("https://demo.frontify.com/d/FkBpT1nT1tqo/code-challenge-task");
    cy.get(this.linkMediaLibrary).click();
    cy.get(this.searchSection).should('be.visible');
    cy.get(this.collectionSection).should('be.visible');
    cy.get(this.assetSection).should('be.visible');
  }

  /**
   * Searches for a specific value in the search input field.
   * @param {string} searchValue - The value to search for.
   */
  searchBy(searchValue) {
    cy.get(this.searchInput).type(searchValue);
  }

  /**
   * Clicks the search button to initiate a search.
   */
  clickOnSearchButton() {
    cy.get(this.searchButton).click();
  }

  /**
   * Checks and verifies the collection value result.
   * @param {string} value - The expected value to be contained in the collection result.
   */
  checkResultCollectionValue(value) {
    cy.get(this.collectionValueResult).should('contain', value);
  }


  /**
   * Verifies the collection result list against an array of expected collections.
   * @param {string[]} collections - An array of expected collection names.
   */
  verifyCollectionResultList(collections) {
    cy.get(this.collectionResultsList).should('have.length', collections.length);
    for (let i = 0; i < collections.length; i++) {
      cy.get(this.collectionResultNames).eq(i).should('have.text', collections[i]);
      cy.get(this.collectionResultImages).eq(i).should('be.visible');
    }
  }

  /**
 * Checks and verifies the asset value result.
 * @param {string} value - The expected value to be contained in the asset result.
 */
  checkResultAssetValue(value) {
    cy.get(this.asseteValueResult).should('contain', value);
  }

  /**
  * Verifies the asset result list against an array of expected assets.
  * @param {string[]} assets - An array of expected asset names.
  */
  verifyAssetsResultList(assets) {
    this.sortResults('Title A-Z');
    if (assets.length === 30) {
      cy.scrollTo('bottom');
    }
    cy.get(this.assetResultList).should('have.length', assets.length);
    for (let i = 0; i < assets.length; i++) {
      cy.get(this.assetResultList).eq(i).should('have.attr', 'alt', assets[i]);
    }
  }

  /**
   * Sorts the results by the specified option, either for assets or collections.
   * @param {string} option - The sorting option (e.g., "Title A-Z").
   * @param {string} section - Optional. Specify the section to sort (either 'assets' or 'collections').
   */
  sortResults(option, section = null) {
    let selector = [this.assetSortButton, this.assetSortOptions];
    if (section === 'collections') {
      selector = [this.collectionSortButton, this.collectionSortOption];
    }
    cy.get(selector[0]).click();
    cy.get(selector[1]).contains(option).click();
  }

  /**
  * Verifies the sort option after search for assets, collections, or both.
  * @param {string} section - The section to verify (either 'asset', 'collection', or 'both').
  * @param {string} option - The expected sort option text.
  */
  verifySortOptionAfterSearch(section, option) {
    switch (section) {
      case 'both':
        cy.get(this.assetSortButton).should('contain', option);
        cy.get(this.collectionSortButton).should('contain', option);
        break;
      case 'asset':
        cy.get(this.assetSortButton).should('contain', option);
        break;
      case 'collection':
        cy.get(this.collectionSortButton).should('contain', option);
        break;
      default:
        break;
    }
  }

  /**
   * Verifies that the asset section does not exist.
   */
  verifyAssetSectionNotExist() {
    cy.get(this.assetResultList).should('not.exist');
  }

  /**
   * Verifies that the collection section does not exist.
   */
  verifyCollectionSectionNotExist() {
    cy.get(this.collectionResultsList).should('not.exist');
  }

  /**
   * Verifies the error message when a search result is not found.
   * @param {string} message - The error message to check.
   * @param {string} searchValue - The search value used in the search.
   */
  verifyNotFoundError(message, searchValue) {
    cy.get(this.errorSection).should('be.visible');
    cy.get(this.errorMessage).should('contain', message);
    cy.get(this.errorMessage).should('contain', searchValue);
  }

  /**
   * Verifies the sub-error message when a search result is not found.
   * @param {string} subMessage - The sub-error message to check.
   */
  verifyNotFoundSubError(subMessage) {
    cy.get(this.errorSubMessage).should('contain', subMessage);
  }
}

module.exports = new MediaLibrary();