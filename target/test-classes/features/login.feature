@master
Feature: Login

#@master
  Scenario: Login to the page
    Given I go to the website
    Then web data page is displayed


  @master
  Scenario: open add new spartan page
    When I click on add spartan
    Then Add spartan page is displayed and spartan is created

    @master
Scenario Outline: several spartans at same time
  When I type "<name>", "<gender>" and "<phone>"

  Examples:
  |name     |gender   |phone      |
  |Agabala      |male    |88112222221|
  |Ag        |female  |11222234321|
  |Sari      |male    |14344312312|
