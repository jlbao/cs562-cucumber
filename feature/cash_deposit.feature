Feature: Cash Deposit

  Scenario Outline: Successful deposit once from an account
    Given I have a starting balance of $<start_balance> in my account
    When I deposit $<amount>
    Then my balance should be $<end_balance>

    Examples: 
      | start_balance | amount | end_balance |
      | 100.00        | 20.1   | 120.1       |
      | 50.00         | 50.89  | 100.89      |


  Scenario Outline: Failed deposit from an account
    Given I have a starting balance of $100 in my account
    When I deposit $<amount>
    Then my balance should be $<end_balance>

    Examples: 
      | start_balance | amount | end_balance |
      | 100.00        | 20.1   | 120.1       |
      | 50.00         | 50.89  | 100.89      |
