Feature: Check balance

  Scenario Outline: Check account balance
    Given I have a starting balance of $<start_balance> in my account
    Then my balance should be $<start_balance>

    Examples: 
      | start_balance |
      | 50.00         |
      | 100.00        |
      | 100.00        |
