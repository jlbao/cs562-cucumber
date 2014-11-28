$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cash_deposit.feature");
formatter.feature({
  "id": "cash-deposit",
  "description": "",
  "name": "Cash Deposit",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "cash-deposit;successful-deposit-once-from-an-account",
  "description": "",
  "name": "Successful deposit once from an account",
  "keyword": "Scenario Outline",
  "line": 3,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I deposit $\u003camount\u003e",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "my balance should be $\u003cend_balance\u003e",
  "keyword": "Then ",
  "line": 6
});
formatter.examples({
  "id": "cash-deposit;successful-deposit-once-from-an-account;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 8,
  "rows": [
    {
      "id": "cash-deposit;successful-deposit-once-from-an-account;;1",
      "cells": [
        "start_balance",
        "amount",
        "end_balance"
      ],
      "line": 9
    },
    {
      "id": "cash-deposit;successful-deposit-once-from-an-account;;2",
      "cells": [
        "50.00",
        "50.89",
        "100.89"
      ],
      "line": 10
    },
    {
      "id": "cash-deposit;successful-deposit-once-from-an-account;;3",
      "cells": [
        "100.00",
        "20.1",
        "120.1"
      ],
      "line": 11
    },
    {
      "id": "cash-deposit;successful-deposit-once-from-an-account;;4",
      "cells": [
        "100.00",
        "0.1",
        "100.1"
      ],
      "line": 12
    }
  ]
});
formatter.before({
  "duration": 537000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-deposit;successful-deposit-once-from-an-account;;2",
  "description": "",
  "name": "Successful deposit once from an account",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I deposit $50.89",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $100.89",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "50.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 141960000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50.89",
      "offset": 11
    }
  ],
  "location": "CashDepositTest.i_deposit_$(String)"
});
formatter.result({
  "duration": 171000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100.89",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 1898000,
  "status": "passed"
});
formatter.after({
  "duration": 25000,
  "status": "passed"
});
formatter.before({
  "duration": 113000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-deposit;successful-deposit-once-from-an-account;;3",
  "description": "",
  "name": "Successful deposit once from an account",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I deposit $20.1",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $120.1",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20.1",
      "offset": 11
    }
  ],
  "location": "CashDepositTest.i_deposit_$(String)"
});
formatter.result({
  "duration": 177000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120.1",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 70000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-deposit;successful-deposit-once-from-an-account;;4",
  "description": "",
  "name": "Successful deposit once from an account",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I deposit $0.1",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $100.1",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.1",
      "offset": 11
    }
  ],
  "location": "CashDepositTest.i_deposit_$(String)"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100.1",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-deposit;deposit-failure-for-wrong-amount",
  "description": "",
  "name": "Deposit failure for wrong amount",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 15
});
formatter.step({
  "name": "I deposit $\u003camount\u003e",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "a deposit amount exception occurs",
  "keyword": "Then ",
  "line": 17
});
formatter.examples({
  "id": "cash-deposit;deposit-failure-for-wrong-amount;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 19,
  "rows": [
    {
      "id": "cash-deposit;deposit-failure-for-wrong-amount;;1",
      "cells": [
        "start_balance",
        "amount"
      ],
      "line": 20
    },
    {
      "id": "cash-deposit;deposit-failure-for-wrong-amount;;2",
      "cells": [
        "100.00",
        "-1.0"
      ],
      "line": 21
    },
    {
      "id": "cash-deposit;deposit-failure-for-wrong-amount;;3",
      "cells": [
        "50.00",
        "-560.00"
      ],
      "line": 22
    },
    {
      "id": "cash-deposit;deposit-failure-for-wrong-amount;;4",
      "cells": [
        "50.00",
        "-0.5"
      ],
      "line": 23
    }
  ]
});
formatter.before({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-deposit;deposit-failure-for-wrong-amount;;2",
  "description": "",
  "name": "Deposit failure for wrong amount",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 15,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I deposit $-1.0",
  "keyword": "When ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a deposit amount exception occurs",
  "keyword": "Then ",
  "line": 17
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 76000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1.0",
      "offset": 11
    }
  ],
  "location": "CashDepositTest.i_deposit_$(String)"
});
formatter.result({
  "duration": 416000,
  "status": "passed"
});
formatter.match({
  "location": "CashDepositTest.a_deposit_amount_exception_occurs()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.after({
  "duration": 27000,
  "status": "passed"
});
formatter.before({
  "duration": 111000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-deposit;deposit-failure-for-wrong-amount;;3",
  "description": "",
  "name": "Deposit failure for wrong amount",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 15,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I deposit $-560.00",
  "keyword": "When ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a deposit amount exception occurs",
  "keyword": "Then ",
  "line": 17
});
formatter.match({
  "arguments": [
    {
      "val": "50.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-560.00",
      "offset": 11
    }
  ],
  "location": "CashDepositTest.i_deposit_$(String)"
});
formatter.result({
  "duration": 214000,
  "status": "passed"
});
formatter.match({
  "location": "CashDepositTest.a_deposit_amount_exception_occurs()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 131000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-deposit;deposit-failure-for-wrong-amount;;4",
  "description": "",
  "name": "Deposit failure for wrong amount",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 15,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I deposit $-0.5",
  "keyword": "When ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a deposit amount exception occurs",
  "keyword": "Then ",
  "line": 17
});
formatter.match({
  "arguments": [
    {
      "val": "50.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-0.5",
      "offset": 11
    }
  ],
  "location": "CashDepositTest.i_deposit_$(String)"
});
formatter.result({
  "duration": 200000,
  "status": "passed"
});
formatter.match({
  "location": "CashDepositTest.a_deposit_amount_exception_occurs()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.uri("cash_withdrawal.feature");
formatter.feature({
  "id": "cash-withdrawal",
  "description": "",
  "name": "Cash Withdrawal",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;successful-withdrawal-from-an-account",
  "description": "",
  "name": "Successful withdrawal from an account",
  "keyword": "Scenario Outline",
  "line": 3,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "$\u003camount\u003e should be dispensed",
  "keyword": "Then ",
  "line": 6
});
formatter.examples({
  "id": "cash-withdrawal;successful-withdrawal-from-an-account;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 8,
  "rows": [
    {
      "id": "cash-withdrawal;successful-withdrawal-from-an-account;;1",
      "cells": [
        "start_balance",
        "amount"
      ],
      "line": 9
    },
    {
      "id": "cash-withdrawal;successful-withdrawal-from-an-account;;2",
      "cells": [
        "100.00",
        "20"
      ],
      "line": 10
    },
    {
      "id": "cash-withdrawal;successful-withdrawal-from-an-account;;3",
      "cells": [
        "50.00",
        "50"
      ],
      "line": 11
    }
  ]
});
formatter.before({
  "duration": 82000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;successful-withdrawal-from-an-account;;2",
  "description": "",
  "name": "Successful withdrawal from an account",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "$20 should be dispensed",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 734000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 1
    }
  ],
  "location": "CashWithdrawTest.$_should_be_dispensed(int)"
});
formatter.result({
  "duration": 130000,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 103000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;successful-withdrawal-from-an-account;;3",
  "description": "",
  "name": "Successful withdrawal from an account",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $50",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "$50 should be dispensed",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "50.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 194000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 1
    }
  ],
  "location": "CashWithdrawTest.$_should_be_dispensed(int)"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.after({
  "duration": 2578000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice",
  "description": "",
  "name": "Withdraw cash successfully twice",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 14
});
formatter.step({
  "name": "I withdraw $\u003camount1\u003e",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I withdraw $\u003camount2\u003e",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I should have received $\u003ccash\u003e",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "my balance should be $\u003cend_balance\u003e",
  "keyword": "And ",
  "line": 18
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 20,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-successfully-twice;;1",
      "cells": [
        "start_balance",
        "amount1",
        "amount2",
        "cash",
        "end_balance"
      ],
      "line": 21
    },
    {
      "id": "cash-withdrawal;withdraw-cash-successfully-twice;;2",
      "cells": [
        "100.00",
        "20",
        "40",
        "60",
        "40.00"
      ],
      "line": 22
    },
    {
      "id": "cash-withdrawal;withdraw-cash-successfully-twice;;3",
      "cells": [
        "50.00",
        "30",
        "20",
        "50",
        "0.00"
      ],
      "line": 23
    },
    {
      "id": "cash-withdrawal;withdraw-cash-successfully-twice;;4",
      "cells": [
        "51.50",
        "30",
        "20",
        "50",
        "1.50"
      ],
      "line": 24
    }
  ]
});
formatter.before({
  "duration": 107000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice;;2",
  "description": "",
  "name": "Withdraw cash successfully twice",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 15,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $40",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should have received $60",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "my balance should be $40.00",
  "keyword": "And ",
  "line": 18,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 135000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 212000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 24
    }
  ],
  "location": "CashWithdrawTest.i_should_have_received_$(int)"
});
formatter.result({
  "duration": 182000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 142000,
  "status": "passed"
});
formatter.after({
  "duration": 38000,
  "status": "passed"
});
formatter.before({
  "duration": 103000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice;;3",
  "description": "",
  "name": "Withdraw cash successfully twice",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $30",
  "keyword": "When ",
  "line": 15,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should have received $50",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "my balance should be $0.00",
  "keyword": "And ",
  "line": 18,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "50.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 153000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 125000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 24
    }
  ],
  "location": "CashWithdrawTest.i_should_have_received_$(int)"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.after({
  "duration": 31000,
  "status": "passed"
});
formatter.before({
  "duration": 73000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice;;4",
  "description": "",
  "name": "Withdraw cash successfully twice",
  "keyword": "Scenario Outline",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $51.50 in my account",
  "keyword": "Given ",
  "line": 14,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $30",
  "keyword": "When ",
  "line": 15,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should have received $50",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "my balance should be $1.50",
  "keyword": "And ",
  "line": 18,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "51.50",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 208000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 94000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 24
    }
  ],
  "location": "CashWithdrawTest.i_should_have_received_$(int)"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.50",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 81000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period",
  "description": "",
  "name": "Withdraw cash unsuccessfully three times in 24-hour period",
  "keyword": "Scenario Outline",
  "line": 29,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "#",
      "line": 26
    },
    {
      "value": "# Add scenarios to take into account these rules:",
      "line": 27
    },
    {
      "value": "# 1. You cannot make more than three withdrawals in a single 24-hour period.",
      "line": 28
    }
  ]
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 30
});
formatter.step({
  "name": "I withdraw $\u003camount1\u003e",
  "keyword": "When ",
  "line": 31
});
formatter.step({
  "name": "I withdraw $\u003camount2\u003e",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "I withdraw $\u003camount3\u003e",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "I withdraw $\u003camount4\u003e",
  "keyword": "And ",
  "line": 34
});
formatter.step({
  "name": "a withdraw exceed 24-hour exception occurs",
  "keyword": "Then ",
  "line": 35
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 37,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;1",
      "cells": [
        "start_balance",
        "amount1",
        "amount2",
        "amount3",
        "amount4"
      ],
      "line": 38
    },
    {
      "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;2",
      "cells": [
        "100.00",
        "20",
        "40",
        "20",
        "10"
      ],
      "line": 39
    },
    {
      "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;3",
      "cells": [
        "50.00",
        "20",
        "10",
        "10",
        "10"
      ],
      "line": 40
    },
    {
      "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;4",
      "cells": [
        "51.50",
        "20",
        "10",
        "10",
        "10"
      ],
      "line": 41
    }
  ]
});
formatter.before({
  "duration": 74000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;2",
  "description": "",
  "name": "Withdraw cash unsuccessfully three times in 24-hour period",
  "keyword": "Scenario Outline",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 30,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 31,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $40",
  "keyword": "And ",
  "line": 32,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "And ",
  "line": 33,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 34,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "a withdraw exceed 24-hour exception occurs",
  "keyword": "Then ",
  "line": 35
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 83000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 222000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_exceed_24hour_exception_occurs()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.after({
  "duration": 24000,
  "status": "passed"
});
formatter.before({
  "duration": 68000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;3",
  "description": "",
  "name": "Withdraw cash unsuccessfully three times in 24-hour period",
  "keyword": "Scenario Outline",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 30,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 31,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 32,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 33,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 34,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "a withdraw exceed 24-hour exception occurs",
  "keyword": "Then ",
  "line": 35
});
formatter.match({
  "arguments": [
    {
      "val": "50.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 216000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 141000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 690000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_exceed_24hour_exception_occurs()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 111000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;4",
  "description": "",
  "name": "Withdraw cash unsuccessfully three times in 24-hour period",
  "keyword": "Scenario Outline",
  "line": 41,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $51.50 in my account",
  "keyword": "Given ",
  "line": 30,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 31,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 32,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 33,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 34,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "a withdraw exceed 24-hour exception occurs",
  "keyword": "Then ",
  "line": 35
});
formatter.match({
  "arguments": [
    {
      "val": "51.50",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 434000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 216000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_exceed_24hour_exception_occurs()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period",
  "description": "",
  "name": "Withdraw cash failure for more than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 44,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "# 2. You cannot withdraw more than $500 in a single 24-hour period.",
      "line": 43
    }
  ]
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 45
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 46
});
formatter.step({
  "name": "a withdraw exceed amount limit exception occurs",
  "keyword": "Then ",
  "line": 47
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 49,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;1",
      "cells": [
        "start_balance",
        "amount"
      ],
      "line": 50
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;2",
      "cells": [
        "1000.00",
        "510"
      ],
      "line": 51
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;3",
      "cells": [
        "2000.00",
        "600"
      ],
      "line": 52
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;4",
      "cells": [
        "3000.00",
        "2000"
      ],
      "line": 53
    }
  ]
});
formatter.before({
  "duration": 105000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;2",
  "description": "",
  "name": "Withdraw cash failure for more than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 51,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $1000.00 in my account",
  "keyword": "Given ",
  "line": 45,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $510",
  "keyword": "When ",
  "line": 46,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a withdraw exceed amount limit exception occurs",
  "keyword": "Then ",
  "line": 47
});
formatter.match({
  "arguments": [
    {
      "val": "1000.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 127000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "510",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 691000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_exceed_amount_limit_exception_occurs()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.after({
  "duration": 23000,
  "status": "passed"
});
formatter.before({
  "duration": 1264000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;3",
  "description": "",
  "name": "Withdraw cash failure for more than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $2000.00 in my account",
  "keyword": "Given ",
  "line": 45,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $600",
  "keyword": "When ",
  "line": 46,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a withdraw exceed amount limit exception occurs",
  "keyword": "Then ",
  "line": 47
});
formatter.match({
  "arguments": [
    {
      "val": "2000.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 513000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 209000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_exceed_amount_limit_exception_occurs()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.after({
  "duration": 316000,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;4",
  "description": "",
  "name": "Withdraw cash failure for more than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 53,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $3000.00 in my account",
  "keyword": "Given ",
  "line": 45,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $2000",
  "keyword": "When ",
  "line": 46,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a withdraw exceed amount limit exception occurs",
  "keyword": "Then ",
  "line": 47
});
formatter.match({
  "arguments": [
    {
      "val": "3000.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 183000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_exceed_amount_limit_exception_occurs()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period",
  "description": "",
  "name": "Withdraw cash Success for less than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 55,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 56
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 57
});
formatter.step({
  "name": "my balance should be $\u003cend_balance\u003e",
  "keyword": "Then ",
  "line": 58
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 60,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;1",
      "cells": [
        "start_balance",
        "amount",
        "end_balance"
      ],
      "line": 61
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;2",
      "cells": [
        "500.00",
        "300",
        "200.00"
      ],
      "line": 62
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;3",
      "cells": [
        "1000.00",
        "100",
        "900.00"
      ],
      "line": 63
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;4",
      "cells": [
        "3000.00",
        "500",
        "2500.00"
      ],
      "line": 64
    }
  ]
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;2",
  "description": "",
  "name": "Withdraw cash Success for less than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 62,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $500.00 in my account",
  "keyword": "Given ",
  "line": 56,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 57,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $200.00",
  "keyword": "Then ",
  "line": 58,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "500.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 140000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;3",
  "description": "",
  "name": "Withdraw cash Success for less than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 63,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $1000.00 in my account",
  "keyword": "Given ",
  "line": 56,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $100",
  "keyword": "When ",
  "line": 57,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $900.00",
  "keyword": "Then ",
  "line": 58,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "1000.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 324000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "900.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 60000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;4",
  "description": "",
  "name": "Withdraw cash Success for less than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $3000.00 in my account",
  "keyword": "Given ",
  "line": 56,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $500",
  "keyword": "When ",
  "line": 57,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $2500.00",
  "keyword": "Then ",
  "line": 58,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "3000.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 283000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2500.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance",
  "description": "",
  "name": "Withdraw cash failure for more than account balance",
  "keyword": "Scenario Outline",
  "line": 67,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "# 3. You cannot make a withdrawal for more than you have in the balance.",
      "line": 66
    }
  ]
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 68
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 69
});
formatter.step({
  "name": "a withdraw exceed balance limit exception occurs",
  "keyword": "Then ",
  "line": 70
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 72,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;1",
      "cells": [
        "start_balance",
        "amount"
      ],
      "line": 73
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;2",
      "cells": [
        "300.00",
        "310"
      ],
      "line": 74
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;3",
      "cells": [
        "300.00",
        "400"
      ],
      "line": 75
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;4",
      "cells": [
        "300.00",
        "500"
      ],
      "line": 76
    }
  ]
});
formatter.before({
  "duration": 63000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;2",
  "description": "",
  "name": "Withdraw cash failure for more than account balance",
  "keyword": "Scenario Outline",
  "line": 74,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 68,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $310",
  "keyword": "When ",
  "line": 69,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a withdraw exceed balance limit exception occurs",
  "keyword": "Then ",
  "line": 70
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "310",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 320000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_exceed_balance_limit_exception_occurs()"
});
formatter.result({
  "duration": 49000,
  "status": "passed"
});
formatter.after({
  "duration": 28000,
  "status": "passed"
});
formatter.before({
  "duration": 97000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;3",
  "description": "",
  "name": "Withdraw cash failure for more than account balance",
  "keyword": "Scenario Outline",
  "line": 75,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 68,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $400",
  "keyword": "When ",
  "line": 69,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a withdraw exceed balance limit exception occurs",
  "keyword": "Then ",
  "line": 70
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 598000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_exceed_balance_limit_exception_occurs()"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 92000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;4",
  "description": "",
  "name": "Withdraw cash failure for more than account balance",
  "keyword": "Scenario Outline",
  "line": 76,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 68,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $500",
  "keyword": "When ",
  "line": 69,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a withdraw exceed balance limit exception occurs",
  "keyword": "Then ",
  "line": 70
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 382000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_exceed_balance_limit_exception_occurs()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance",
  "description": "",
  "name": "Withdraw cash success for less than account balance",
  "keyword": "Scenario Outline",
  "line": 78,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 79
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 80
});
formatter.step({
  "name": "my balance should be $\u003cend_balance\u003e",
  "keyword": "Then ",
  "line": 81
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 83,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;1",
      "cells": [
        "start_balance",
        "amount",
        "end_balance"
      ],
      "line": 84
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;2",
      "cells": [
        "300.00",
        "300",
        "0.00"
      ],
      "line": 85
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;3",
      "cells": [
        "300.00",
        "250",
        "50.00"
      ],
      "line": 86
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;4",
      "cells": [
        "400.00",
        "300",
        "100.00"
      ],
      "line": 87
    }
  ]
});
formatter.before({
  "duration": 51000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;2",
  "description": "",
  "name": "Withdraw cash success for less than account balance",
  "keyword": "Scenario Outline",
  "line": 85,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 79,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 80,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $0.00",
  "keyword": "Then ",
  "line": 81,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 76000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 142000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 133000,
  "status": "passed"
});
formatter.after({
  "duration": 29000,
  "status": "passed"
});
formatter.before({
  "duration": 76000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;3",
  "description": "",
  "name": "Withdraw cash success for less than account balance",
  "keyword": "Scenario Outline",
  "line": 86,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 79,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $250",
  "keyword": "When ",
  "line": 80,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $50.00",
  "keyword": "Then ",
  "line": 81,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 94000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 171000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 82000,
  "status": "passed"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;4",
  "description": "",
  "name": "Withdraw cash success for less than account balance",
  "keyword": "Scenario Outline",
  "line": 87,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $400.00 in my account",
  "keyword": "Given ",
  "line": 79,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 80,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $100.00",
  "keyword": "Then ",
  "line": 81,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "400.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 148000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 105000,
  "status": "passed"
});
formatter.after({
  "duration": 31000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10",
  "description": "",
  "name": "Withdraw cash failure for amount not being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 90,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "# 4. If you try to withdraw an amount that is not a multiple of $10, it should be refused.",
      "line": 89
    }
  ]
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 91
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 92
});
formatter.step({
  "name": "a withdraw amount format exception occurs",
  "keyword": "Then ",
  "line": 93
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 95,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;1",
      "cells": [
        "start_balance",
        "amount"
      ],
      "line": 96
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;2",
      "cells": [
        "300.00",
        "1"
      ],
      "line": 97
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;3",
      "cells": [
        "300.00",
        "12"
      ],
      "line": 98
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;4",
      "cells": [
        "300.00",
        "231"
      ],
      "line": 99
    }
  ]
});
formatter.before({
  "duration": 63000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;2",
  "description": "",
  "name": "Withdraw cash failure for amount not being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 97,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 91,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $1",
  "keyword": "When ",
  "line": 92,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a withdraw amount format exception occurs",
  "keyword": "Then ",
  "line": 93
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 305000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_amount_format_exception_occurs()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;3",
  "description": "",
  "name": "Withdraw cash failure for amount not being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 98,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 91,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $12",
  "keyword": "When ",
  "line": 92,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a withdraw amount format exception occurs",
  "keyword": "Then ",
  "line": 93
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 84000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 212000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_amount_format_exception_occurs()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 91000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;4",
  "description": "",
  "name": "Withdraw cash failure for amount not being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 99,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 91,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $231",
  "keyword": "When ",
  "line": 92,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "a withdraw amount format exception occurs",
  "keyword": "Then ",
  "line": 93
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "231",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 219000,
  "status": "passed"
});
formatter.match({
  "location": "CashWithdrawTest.a_withdraw_amount_format_exception_occurs()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.after({
  "duration": 12000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10",
  "description": "",
  "name": "Withdraw cash success for amount being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 101,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 102
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 103
});
formatter.step({
  "name": "my balance should be $\u003cend_balance\u003e",
  "keyword": "Then ",
  "line": 104
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 106,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;1",
      "cells": [
        "start_balance",
        "amount",
        "end_balance"
      ],
      "line": 107
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;2",
      "cells": [
        "300.00",
        "300",
        "0.00"
      ],
      "line": 108
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;3",
      "cells": [
        "300.00",
        "240",
        "60.00"
      ],
      "line": 109
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;4",
      "cells": [
        "400.00",
        "300",
        "100.00"
      ],
      "line": 110
    }
  ]
});
formatter.before({
  "duration": 101000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;2",
  "description": "",
  "name": "Withdraw cash success for amount being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 108,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 102,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 103,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $0.00",
  "keyword": "Then ",
  "line": 104,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 131000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.after({
  "duration": 11000,
  "status": "passed"
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;3",
  "description": "",
  "name": "Withdraw cash success for amount being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 109,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 102,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $240",
  "keyword": "When ",
  "line": 103,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $60.00",
  "keyword": "Then ",
  "line": 104,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "300.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 71000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "240",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 137000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.after({
  "duration": 23000,
  "status": "passed"
});
formatter.before({
  "duration": 58000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;4",
  "description": "",
  "name": "Withdraw cash success for amount being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 110,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $400.00 in my account",
  "keyword": "Given ",
  "line": 102,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 103,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $100.00",
  "keyword": "Then ",
  "line": 104,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "400.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "CashWithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 136000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 132000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.uri("check_balance.feature");
formatter.feature({
  "id": "check-balance",
  "description": "",
  "name": "Check balance",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "check-balance;check-account-balance",
  "description": "",
  "name": "Check account balance",
  "keyword": "Scenario Outline",
  "line": 3,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "my balance should be $\u003cstart_balance\u003e",
  "keyword": "Then ",
  "line": 5
});
formatter.examples({
  "id": "check-balance;check-account-balance;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 7,
  "rows": [
    {
      "id": "check-balance;check-account-balance;;1",
      "cells": [
        "start_balance"
      ],
      "line": 8
    },
    {
      "id": "check-balance;check-account-balance;;2",
      "cells": [
        "50.00"
      ],
      "line": 9
    },
    {
      "id": "check-balance;check-account-balance;;3",
      "cells": [
        "100.00"
      ],
      "line": 10
    },
    {
      "id": "check-balance;check-account-balance;;4",
      "cells": [
        "100.00"
      ],
      "line": 11
    }
  ]
});
formatter.before({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "id": "check-balance;check-account-balance;;2",
  "description": "",
  "name": "Check account balance",
  "keyword": "Scenario Outline",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "my balance should be $50.00",
  "keyword": "Then ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "50.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 369000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
  "status": "passed"
});
formatter.scenario({
  "id": "check-balance;check-account-balance;;3",
  "description": "",
  "name": "Check account balance",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "my balance should be $100.00",
  "keyword": "Then ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 61000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
  "status": "passed"
});
formatter.scenario({
  "id": "check-balance;check-account-balance;;4",
  "description": "",
  "name": "Check account balance",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 4,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "my balance should be $100.00",
  "keyword": "Then ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 30
    }
  ],
  "location": "CommonTest.i_have_a_starting_balance_of_$_in_my_account(String)"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 22
    }
  ],
  "location": "CommonTest.my_balance_should_be_$(String)"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.after({
  "duration": 11000,
  "status": "passed"
});
});