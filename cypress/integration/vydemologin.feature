Feature: vydemo

    Scenario: Login is successful with credential 
        Given user navigates to given url
        When enter the email id
        Then user clicks on next button
        Then user enter the password
        Then user click on login button
        Then user should redirected to dashboard page
        Then user click on settings icon
        Then user click on "Others" module
        Then user click on "Permissions" submodule
        Then user select the below permissions
            |   Type            |   Permission          |
            |   Hide the module |   CLIENTROLES         |
            |   Add a lead      |   ADMIN               |
            |   Hide the module |   Userpermissiontest  |
            |   Hide the module |   addnewav            |
        Then user clicks on save button
        Then user check the message "New configuration saved successfully"
        Then user go back to module page
        Then user click on "Field Configuration" submodule
        Then user click on add field button
        Then user fill the field data
            |   Type    |   Email   |
            |   Label   |   Hina123 |
            |   Name    |   Heena   |
        Then user check for added data
            |   Label   |   Hina123   |
        Then user clicks on save button
        Then user check the message "New configuration saved successfully"
        