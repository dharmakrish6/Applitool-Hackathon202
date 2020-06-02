const HomePage = require('../../fixtures/pageobejcts/HomePage.json')
const ProductDetails = require('../../fixtures/pageobejcts/ProductDetailsPage.json')

describe('Traditional Testing V1', () => {

  it(`Task 1 – Cross-Device Elements Test`, () => {
    cy.visit('/gridHackathonV1.html')
    cy.eyesOpen({
      appName: 'Cross Browser Testing',
      testName:'Task1',
      browser: [
        {width: 1200, height: 700, name: 'chrome'},
        {width: 1200, height: 700, name: 'firefox'},
        {width: 1200, height: 700, name: 'edgechromium'},
        {width: 768, height: 700, name: 'chrome'},
        {width: 768, height: 700, name: 'firefox'},
        {width: 768, height: 700, name: 'edgechromium'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'}
      ]
  });
    cy.eyesCheckWindow({
      tag: "HomeScreen",
      target: 'window',
      fully: true
  });
  cy.eyesClose()
  })


  it('Task 2 – Shopping Experience Test', () => {

    cy.get(HomePage.blackColorText).click()
    cy.get(HomePage.filterbutton).click()
    cy.eyesOpen({
      appName: 'Shopping experience',
      testName:'Task2',
      browser: [
        {width: 1200, height: 700, name: 'chrome'},
        {width: 1200, height: 700, name: 'firefox'},
        {width: 1200, height: 700, name: 'edgechromium'},
        {width: 768, height: 700, name: 'chrome'},
        {width: 768, height: 700, name: 'firefox'},
        {width: 768, height: 700, name: 'edgechromium'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'}
      ]
  });
    cy.eyesCheckWindow({
      tag: "SearchProduct",
      target: 'window',
      fully: true
  });
  cy.eyesClose()
  })


  it('Task 3 – Product Details Test', () => {
    cy.get(ProductDetails.firstProduct).click()
    cy.eyesOpen({
      appName: 'Product Details ',
      testName:'Product Details test',
      browser: [
        {width: 1200, height: 700, name: 'chrome'},
        {width: 1200, height: 700, name: 'firefox'},
        {width: 1200, height: 700, name: 'edgechromium'},
        {width: 768, height: 700, name: 'chrome'},
        {width: 768, height: 700, name: 'firefox'},
        {width: 768, height: 700, name: 'edgechromium'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'}
      ]
  });
    cy.eyesCheckWindow({
      tag: "ProductDetails",
      target: 'window',
      fully: true
  });
  cy.eyesClose()
  })

  })

