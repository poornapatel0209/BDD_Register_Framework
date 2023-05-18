Feature: NopCommerce Register

  Background: User able to open Browser
    And Enter an URL
@E2E

  Scenario Outline: Nopcommerce Valid Register Test
    When User click on register Link
    And User on register page and verify register page title
    Then User enter "<Firstname>" and "<Lastname>" and "<Email>" and "<Password>" and "<ConformPassword>"
    Then User click on Register button
    Then User is on home page and verify Home page title
    And Close the browser
    Examples:
    |Firstname|Lastname|Email|Password|ConformPassword|
    |Poorna|Patel|Abc123@gmail.com|Abc123@|Abc123@|
    |Abc|Def|Abc1234@gmail.com|Abc123|Abc123|







