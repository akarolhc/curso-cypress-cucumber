Feature: Login

  Scenario: successful login
    Given I access the Login form
    When I submit it with valid credentials
    Then I see the logged-in features available