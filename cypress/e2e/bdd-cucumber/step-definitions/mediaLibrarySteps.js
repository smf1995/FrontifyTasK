import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import MediaLibrary from '../../page-objects/mediaLibraryPage'

Given("the user access to the Media Library page", () => {
  MediaLibrary.goToMediaLibraryPage();
});

When('the user searches for {string} through the search bar', (searchValue) => {
  MediaLibrary.searchBy(searchValue);
});

When('the user clicks on the search button', () => {
  MediaLibrary.clickOnSearchButton();
});

Then('verify that the number of collections found is {string}' , (value) => {
  MediaLibrary.checkResultCollectionValue(value);
});

Then('verify that the list of collections found is the following:', (dataTable) => {
  const collections = dataTable.rawTable.map((row) => row[0]);
  MediaLibrary.verifyCollectionResultList(collections);
});

Then('verify that the number of assets found is {string}', (assetsValue) => {
  MediaLibrary.checkResultAssetValue(assetsValue);

});

Then('verify that the list of assets found is the following:', (dataTable) => {
  const assets = dataTable.rawTable.map((row) => row[0]);
  MediaLibrary.verifyAssetsResultList(assets);

});

Then('verify that the Sort option has changed to {string} in {string} sections', (option,section) => {
  MediaLibrary.verifySortOptionAfterSearch(section, option);
});

Then('verify that the collection section is not presented',  () =>{
  MediaLibrary.verifyCollectionSectionNotExist();
});

Then('verify that the asset section is not presented',  ()  =>{
  MediaLibrary.verifyAssetSectionNotExist();
});
Then('verify that a message is displayed {string} and contains the search key {string}',  (message , searchValue)  => {
  MediaLibrary.verifyNotFoundError(message,searchValue);
});

Then('verify that a sub-section is displayed and contains {string}',  (subSectionText)  =>{
  MediaLibrary.verifyNotFoundSubError(subSectionText);
});