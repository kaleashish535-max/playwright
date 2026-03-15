@smoke
Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid username and password
    And I click the login button
    Then I should be redirected to the secure area
    And I should see a success message

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter invalid username or password
    And I click the login button
    Then I should see an error message

//hello this new change