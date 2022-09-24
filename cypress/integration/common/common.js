import { Given, When } from "cypress-cucumber-preprocessor/steps"
import { CREDENTIALS } from "../constant/constant"
import { LOCATORS } from "../locators/locators"
export const url = "https://pod2.lms.getvymo.com/#/login"
import 'cypress-wait-until'

export function goToLogin() {
  cy.visit(url)
  cy.viewport(1920, 1080)
  
  cy.waitUntil(function() {
    return cy.xpath(LOCATORS.userNameTextBox, { timeout: 50000 }).should('be.visible')
   })
}

