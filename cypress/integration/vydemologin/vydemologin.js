import { When, Then, Given } from "cypress-cucumber-preprocessor/steps"
import { enterEmailId , clickNextButton, checkForAddedData, fillFieldData, clickAddField, goBack, checkTheMessage, clickSaveButton, enterPassword, selectPermission, clickLoginButton, clickSettingsIcon, clickModule, clickSubModule } from "../PageObjects/vydemologin"
import { goToLogin } from "../common/common"

Given("user navigates to given url", () => {
  goToLogin()
})

When("enter the email id", () => {
    enterEmailId()
})

Then("user clicks on next button", () => {
    clickNextButton()
})

Then("user go back to module page", () => {
    goBack()
})

Then("user check the message {string}", (message) => {
    checkTheMessage(message)
})

Then("user click on add field button", () => {
    clickAddField()
})

Then("user enter the password", () => {
    enterPassword()
})

Then("user clicks on save button", () => {
    clickSaveButton()
})

Then("user click on login button", () => {
    clickLoginButton()
    cy.wait(5000)
})

Then("user should redirected to dashboard page", () => {
    cy.url().should('eq', 'https://pod2.lms.getvymo.com/#/home/dashboard')
})

Then("user click on settings icon", () => {
    clickSettingsIcon()
})

Then("user click on {string} module", (modulename) => {
    clickModule(modulename)
})

Then("user click on {string} submodule", (modulename) => {
    clickSubModule(modulename)
})

Then("user select the below permissions", (dataTable) => {
    selectPermission(dataTable)
})

Then("user fill the field data", (dataTable) => {
    fillFieldData(dataTable)
})

Then("user check for added data", (dataTable) => {
    checkForAddedData(dataTable)
})


  