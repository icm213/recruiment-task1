@wip

Feature: Modal shows up after product is clicked

  Scenario Outline: As a user, I can see data about product in modal

    Given I am on the main page
    When I am clicking on the <chosen> product
    Then It should be modal with data on the screen

    Examples:
      | chosen |
      | 1      |
      | 3      |
