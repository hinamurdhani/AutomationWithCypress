const LOCATORS = {
    userNameTextBox : '//input[@placeholder="Email Format"]',
    nextButton: '//button//span[contains(text(),"Next")]',
    passwordTextBox: '//input[@placeholder="Enter Password"]',
    loginIcon: '//button//span[contains(text(),"LOG IN")]',
    settingIcon: '//a[@title="Self Serve Setup"]',
    saveButton: '//button[@name="Save"]',
    addFieldForTest: '(//span[@role="presentation" and contains(text(),"+ Add Field")])[1]',
    typeDropDown: '(//input[@class="ant-select-selection-search-input"])[1]',
    fieldLabel: '//div[@createtext="Create"]//input[@role="combobox"]',
    createXpath: '//span[contains(text(),"Create")]',
    fieldDataSaveButton: '(//span[contains(text(),"Save")])[2]',
    nameTextBox: '//input[@placeholder="Enter Field Name"]'

}

export { LOCATORS }