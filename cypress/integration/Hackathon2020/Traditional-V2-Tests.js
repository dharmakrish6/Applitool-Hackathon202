const HomePage = require('../../fixtures/pageobejcts/HomePage.json')
const ProductDetails = require('../../fixtures/pageobejcts/ProductDetailsPage.json')

const desktop = ['macbook-13', [1024, 768]]
const mobile = ['iphone-6', 'iphone-xr']

var elements = HomePage.crossBrowserElement
describe('Traditional Testing V2', () => {
  describe('Task 1 – Cross-Device Elements Test', () => {
    desktop.forEach((size) => {
      Object.entries(elements).forEach(([key, value]) => {
        // make assertions on the logo using
        // an array of different viewports
        it(`Should display ${key} on ${size} screen`, () => {
          if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
          } else {
            cy.viewport(size)
          }

          cy.visit('/gridHackathonV2.html')
          cy.get(value).should('be.visible')
        })
      })
    })
    mobile.forEach((screen) => {
      Object.entries(elements).forEach(([key, value]) => {
        // make assertions on the logo using
        // an array of different viewports
        it(`Should not display ${key} on ${screen} screen`, () => {
          if (Cypress._.isArray(screen)) {
            cy.viewport(screen[0], screen[1])
          } else {
            cy.viewport(screen)
          }

          cy.visit('/gridHackathonV2.html')
          cy.get(value).should('not.visible')
        })
      })
    })
  })
  describe('Task 2 – Shopping Experience Test', () => {
    it('Task 2 – Shopping Experience Test', () => {
      // cy.visit('/gridHackathonV1.html')
      cy.get(HomePage.blackColorText).click()
      cy.get(HomePage.filterbutton).click()
      cy.get(HomePage.productList).then((result) => {
        expect(result).to.have.lengthOf(2)
      })

    })
  })
  describe('Task 2 – Shopping Experience Test', () => {
    it('Task 3 – Product Details Test', () => {
      cy.get(ProductDetails.firstProduct).click()
      cy.get(ProductDetails.newPriceText).should('contain', '$33.00')
      cy.get(ProductDetails.sizeSelector).should('contain', 'Small (S)')

    })
  })

})

