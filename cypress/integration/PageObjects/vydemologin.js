import { Given, When } from "cypress-cucumber-preprocessor/steps"
import { CREDENTIALS } from "../constant/constant"
import { LOCATORS } from "../locators/locators"
require('cypress-xpath')

export function enterEmailId() {
    cy.xpath(LOCATORS.userNameTextBox).type(CREDENTIALS.UserName)
}

export function clickNextButton() {
    cy.xpath(LOCATORS.nextButton).click()
}

export function clickSaveButton() {
  cy.xpath(LOCATORS.saveButton).click()
}

export function enterPassword(){
  cy.xpath(LOCATORS.passwordTextBox).type(CREDENTIALS.Password)
}

export function checkTheMessage(message){
  cy.xpath("//div[contains(text(),'"+message+"')]").should('be.visible')
}

export function clickLoginButton() {
  cy.xpath(LOCATORS.loginIcon).click()
}

export function clickSettingsIcon() {
  cy.xpath(LOCATORS.settingIcon).invoke('removeAttr', 'target').click()
}
export function clickAddField() {
  cy.waitUntil(function() {
    return  cy.xpath(LOCATORS.addFieldForTest, { timeout: 30000 }).should('be.visible')
   })
   cy.xpath(LOCATORS.addFieldForTest).click()
}

export function clickModule(modulename) {
  cy.xpath("//div[@class='container_info']//p[contains(text(),'"+modulename+"')]").click()
}

export function clickSubModule(modulename) {
  cy.xpath("//div[@class='container_info']//p[contains(text(),'"+modulename+"')]").click()
  cy.wait(5000)
}

export function selectPermission(dataTable) {
  dataTable.hashes().forEach(element => {
      cy.xpath("//label[contains(text(),'"+element.Type+"')]//parent::div//parent::div//input[@value='"+element.Permission+"']").uncheck()
      cy.wait(2000)   
      cy.xpath("//label[contains(text(),'"+element.Type+"')]//parent::div//parent::div//input[@value='"+element.Permission+"']").click({ multiple: true })
      cy.wait(2000)
})
}

export function fillFieldData(dataTable) {
  const fieldDetails = dataTable.rowsHash()
  cy.xpath(LOCATORS.typeDropDown).click()
  cy.wait(1000)
  let type = fieldDetails['Type']
  cy.xpath("//div[@class='ant-select-item-option-content' and contains(text(),'"+type+"')]").click()
  cy.wait(2000)
  cy.xpath(LOCATORS.fieldLabel).click()
  cy.xpath(LOCATORS.fieldLabel).type(fieldDetails['Label'])
  cy.wait(1000)
  cy.xpath(LOCATORS.createXpath).click()
  cy.wait(1000)
  cy.xpath(LOCATORS.nameTextBox).type(fieldDetails['Name'])
  cy.wait(1000)
  cy.xpath(LOCATORS.fieldDataSaveButton).click()
  console.log("first")
  cy.xpath(LOCATORS.fieldDataSaveButton).click()
  cy.wait(40000)
}

export function checkForAddedData(dataTable) {
  const fieldDetails = dataTable.rowsHash()
  let label = fieldDetails['Label']
  cy.xpath("//span[contains(text(),'"+label+"')]").should('be.visible')
}

export function goBack() {
  cy.go('back')
  cy.wait(5000)
}



