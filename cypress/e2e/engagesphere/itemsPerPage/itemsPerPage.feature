Feature: Items Per Page

@engagesphere
  Scenario Outline: shows the correct number of items per page
    Given I access the EngageSphere app having already accepted the cookies banner
    When I select "<limit>" items per page
    Then I should see "<limit>" items in the table

    Examples:
      | limit |
      | 5     |
      | 10    |
      | 20    |
      | 50    |