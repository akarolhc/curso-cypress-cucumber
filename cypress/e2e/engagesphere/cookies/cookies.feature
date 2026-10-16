Feature: Cookies Consent Banner

 @engagesphere
  Scenario: consents to the cookies' policies
    Given I access the EngageSphere app without any cookies set
    And I see the cookies consent Banner
    When I click the Accept button
    Then the cookies banner is closed
    And the cookieConsent cookie is set with the value accepted

@engagesphere
  Scenario: declines the cookies' policies
    Given I access the EngageSphere app without any cookies set
    And I see the cookies consent Banner
    When I click the Decline button
    Then the cookies banner is closed
    And the cookieConsent cookie is set with the value declined