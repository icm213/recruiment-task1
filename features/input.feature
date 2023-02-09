@wip

Feature: Passing ID of product to the input

  Scenario Outline: As a user, I can pass ID of the product to the input

    Given I am on the main page
    When I am passing <ID> of the product
    Then I am clicking on Search button
    Then It should be product with passed <ID>

    Examples:
      | ID |
      | 1  |
      | 3  |
      | 11 |
      | 12 |