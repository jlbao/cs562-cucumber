Feature: Cash Withdrawal

  Scenario Outline: Successful withdrawal from an account
    Given I have a starting balance of $<start_balance> in my account
    When I withdraw $<amount>
    Then $<amount> should be dispensed

    Examples: 
      | start_balance | amount |
      | 100.00        | 20     |
      | 50.00         | 50     |

  Scenario Outline: Withdraw cash successfully twice
    Given I have a starting balance of $<start_balance> in my account
    When I withdraw $<amount1>
    And I withdraw $<amount2>
    Then I should have received $<cash>
    And my balance should be $<end_balance>

    Examples: 
      | start_balance | amount1 | amount2 | cash | end_balance |
      | 100.00        | 20      | 40      | 60   | 40.00       |
      | 50.00         | 30      | 20      | 50   | 0.00        |
      | 51.50         | 30      | 20      | 50   | 1.50        |

  #
  # Add scenarios to take into account these rules:
  # 1. You cannot make more than three withdrawals in a single 24-hour period.
  Scenario Outline: Withdraw cash unsuccessfully three times in 24-hour period
    Given I have a starting balance of $<start_balance> in my account
    When I withdraw $<amount1>
    And I withdraw $<amount2>
    And I withdraw $<amount3>
    And I withdraw $<amount4>
    Then a withdraw exceed 24-hour exception occurs

    Examples: 
      | start_balance | amount1 | amount2 | amount3 | amount4 |
      | 100.00        | 20      | 40      | 20      | 10      |
      | 50.00         | 20      | 10      | 10      | 10      |
      | 51.50         | 20      | 10      | 10      | 10      |

  # 2. You cannot withdraw more than $500 in a single 24-hour period.
  Scenario Outline: Withdraw cash failure for more than $500 in a single 24-hour period
    Given I have a starting balance of $<start_balance> in my account
    When I withdraw $<amount>
    Then a withdraw exceed amount limit exception occurs

    Examples: 
      | start_balance | amount |
      | 1000.00       | 510    |
      | 2000.00       | 600    |
      | 3000.00       | 2000   |

  Scenario Outline: Withdraw cash Success for less than $500 in a single 24-hour period
    Given I have a starting balance of $<start_balance> in my account
    When I withdraw $<amount>
    Then my balance should be $<end_balance>

    Examples: 
      | start_balance | amount | end_balance |
      | 500.00        | 300    | 200.00      |
      | 1000.00       | 100    | 900.00      |
      | 3000.00       | 500    | 2500.00     |

  # 3. You cannot make a withdrawal for more than you have in the balance.
  Scenario Outline: Withdraw cash failure for more than account balance
    Given I have a starting balance of $<start_balance> in my account
    When I withdraw $<amount>
    Then a withdraw exceed balance limit exception occurs

    Examples: 
      | start_balance | amount |
      | 300.00        | 310    |
      | 300.00        | 400    |
      | 300.00        | 500    |

  Scenario Outline: Withdraw cash success for less than account balance
    Given I have a starting balance of $<start_balance> in my account
    When I withdraw $<amount>
    Then my balance should be $<end_balance>

    Examples: 
      | start_balance | amount | end_balance |
      | 300.00        | 300    | 0.00        |
      | 300.00        | 250    | 50.00       |
      | 400.00        | 300    | 100.00      |

  # 4. If you try to withdraw an amount that is not a multiple of $10, it should be refused.
  Scenario Outline: Withdraw cash failure for amount not being a multiple of $10
    Given I have a starting balance of $<start_balance> in my account
    When I withdraw $<amount>
    Then a withdraw amount format exception occurs

    Examples: 
      | start_balance | amount |
      | 300.00        | 1      |
      | 300.00        | 12     |
      | 300.00        | 231    |

  Scenario Outline: Withdraw cash success for amount being a multiple of $10
    Given I have a starting balance of $<start_balance> in my account
    When I withdraw $<amount>
    Then my balance should be $<end_balance>

    Examples: 
      | start_balance | amount | end_balance |
      | 300.00        | 300    | 0.00        |
      | 300.00        | 240    | 60.00       |
      | 400.00        | 300    | 100.00      |
