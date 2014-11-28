Feature: Cash Deposit

  Scenario Outline: Successful deposit once from an account
    Given I have a starting balance of $<start_balance> in my account
    When I deposit $<amount>
    Then my balance should be $<end_balance>

    Examples: 
      | start_balance | amount | end_balance |
      | 50.00         | 50.89  | 100.89      |
      | 100.00        | 20.1   | 120.1       |
      | 100.00        | 0.1    | 100.1       |

  Scenario Outline: Deposit failure for wrong amount
    Given I have a starting balance of $<start_balance> in my account
    When I deposit $<amount>
    Then a deposit amount exception occurs

    Examples: 
      | start_balance | amount  |
      | 100.00        | -1.0    |
      | 50.00         | -560.00 |
      | 50.00         | -0.5    |
