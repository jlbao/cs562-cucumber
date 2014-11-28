$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cash_withdrawal.feature");
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
  "line": 2,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 3
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 4
});
formatter.step({
  "name": "$\u003camount\u003e should be dispensed",
  "keyword": "Then ",
  "line": 5
});
formatter.examples({
  "id": "cash-withdrawal;successful-withdrawal-from-an-account;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 7,
  "rows": [
    {
      "id": "cash-withdrawal;successful-withdrawal-from-an-account;;1",
      "cells": [
        "start_balance",
        "amount"
      ],
      "line": 8
    },
    {
      "id": "cash-withdrawal;successful-withdrawal-from-an-account;;2",
      "cells": [
        "100.00",
        "20"
      ],
      "line": 9
    },
    {
      "id": "cash-withdrawal;successful-withdrawal-from-an-account;;3",
      "cells": [
        "50.00",
        "50"
      ],
      "line": 10
    }
  ]
});
formatter.scenario({
  "id": "cash-withdrawal;successful-withdrawal-from-an-account;;2",
  "description": "",
  "name": "Successful withdrawal from an account",
  "keyword": "Scenario Outline",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 3,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 4,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "$20 should be dispensed",
  "keyword": "Then ",
  "line": 5,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 138168000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 152000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 1
    }
  ],
  "location": "WithdrawTest.$_should_be_dispensed(int)"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;successful-withdrawal-from-an-account;;3",
  "description": "",
  "name": "Successful withdrawal from an account",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 3,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $50",
  "keyword": "When ",
  "line": 4,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "$50 should be dispensed",
  "keyword": "Then ",
  "line": 5,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 33
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 236000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 274000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 1
    }
  ],
  "location": "WithdrawTest.$_should_be_dispensed(int)"
});
formatter.result({
  "duration": 140000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice",
  "description": "",
  "name": "Withdraw cash successfully twice",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario_outline"
});
formatter.step({
  "name": "that I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "I withdraw $\u003camount1\u003e",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I withdraw $\u003camount2\u003e",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I should have received $\u003ccash\u003e",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "my balance should be $\u003cend_balance\u003e",
  "keyword": "And ",
  "line": 17
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 19,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-successfully-twice;;1",
      "cells": [
        "start_balance",
        "amount1",
        "amount2",
        "end_balance"
      ],
      "line": 20
    },
    {
      "id": "cash-withdrawal;withdraw-cash-successfully-twice;;2",
      "cells": [
        "100.00",
        "20",
        "40",
        "40.00"
      ],
      "line": 21
    },
    {
      "id": "cash-withdrawal;withdraw-cash-successfully-twice;;3",
      "cells": [
        "50.00",
        "30",
        "20",
        "0.00"
      ],
      "line": 22
    },
    {
      "id": "cash-withdrawal;withdraw-cash-successfully-twice;;4",
      "cells": [
        "51.50",
        "30",
        "20",
        "1.50"
      ],
      "line": 23
    }
  ]
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice;;2",
  "description": "",
  "name": "Withdraw cash successfully twice",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "that I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $40",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should have received $\u003ccash\u003e",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "my balance should be $40.00",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 35
    },
    {
      "val": "00",
      "offset": 39
    }
  ],
  "location": "WithdrawTest.that_I_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 256000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 169000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 144000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.i_should_have_received_$_cash()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 25
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 186000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice;;3",
  "description": "",
  "name": "Withdraw cash successfully twice",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "that I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $30",
  "keyword": "When ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should have received $\u003ccash\u003e",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "my balance should be $0.00",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 35
    },
    {
      "val": "00",
      "offset": 38
    }
  ],
  "location": "WithdrawTest.that_I_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 164000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 77000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.i_should_have_received_$_cash()"
});
formatter.result({
  "duration": 15000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-successfully-twice;;4",
  "description": "",
  "name": "Withdraw cash successfully twice",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "that I have a starting balance of $51.50 in my account",
  "keyword": "Given ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $30",
  "keyword": "When ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should have received $\u003ccash\u003e",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "my balance should be $1.50",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "51",
      "offset": 35
    },
    {
      "val": "50",
      "offset": 38
    }
  ],
  "location": "WithdrawTest.that_I_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 273000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 308000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 142000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.i_should_have_received_$_cash()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    },
    {
      "val": "50",
      "offset": 24
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 185000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period",
  "description": "",
  "name": "Withdraw cash unsuccessfully three times in 24-hour period",
  "keyword": "Scenario Outline",
  "line": 28,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "#",
      "line": 25
    },
    {
      "value": "# Add scenarios to take into account these rules:",
      "line": 26
    },
    {
      "value": "# 1. You cannot make more than three withdrawals in a single 24-hour period.",
      "line": 27
    }
  ]
});
formatter.step({
  "name": "that I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 29
});
formatter.step({
  "name": "I withdraw $\u003camount1\u003e",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "I withdraw $\u003camount2\u003e",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I withdraw $\u003camount3\u003e",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "I withdraw $\u003camount4\u003e",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "There will be an withdraw exceed 24-hour exception",
  "keyword": "Then ",
  "line": 34
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 36,
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
      "line": 37
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
      "line": 38
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
      "line": 39
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
      "line": 40
    }
  ]
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;2",
  "description": "",
  "name": "Withdraw cash unsuccessfully three times in 24-hour period",
  "keyword": "Scenario Outline",
  "line": 38,
  "type": "scenario"
});
formatter.step({
  "name": "that I have a starting balance of $100.00 in my account",
  "keyword": "Given ",
  "line": 29,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 30,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $40",
  "keyword": "And ",
  "line": 31,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "And ",
  "line": 32,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 33,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "There will be an withdraw exceed 24-hour exception",
  "keyword": "Then ",
  "line": 34
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 35
    },
    {
      "val": "00",
      "offset": 39
    }
  ],
  "location": "WithdrawTest.that_I_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 263000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 135000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
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
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 124000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 77000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 33
    }
  ],
  "location": "WithdrawTest.there_will_be_an_withdraw_exceed_hour_exception(int)"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;3",
  "description": "",
  "name": "Withdraw cash unsuccessfully three times in 24-hour period",
  "keyword": "Scenario Outline",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "that I have a starting balance of $50.00 in my account",
  "keyword": "Given ",
  "line": 29,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 30,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 31,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 32,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 33,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "There will be an withdraw exceed 24-hour exception",
  "keyword": "Then ",
  "line": 34
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 35
    },
    {
      "val": "00",
      "offset": 38
    }
  ],
  "location": "WithdrawTest.that_I_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 200000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 82000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 811000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 33
    }
  ],
  "location": "WithdrawTest.there_will_be_an_withdraw_exceed_hour_exception(int)"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-unsuccessfully-three-times-in-24-hour-period;;4",
  "description": "",
  "name": "Withdraw cash unsuccessfully three times in 24-hour period",
  "keyword": "Scenario Outline",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "that I have a starting balance of $51.50 in my account",
  "keyword": "Given ",
  "line": 29,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $20",
  "keyword": "When ",
  "line": 30,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 31,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 32,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I withdraw $10",
  "keyword": "And ",
  "line": 33,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "There will be an withdraw exceed 24-hour exception",
  "keyword": "Then ",
  "line": 34
});
formatter.match({
  "arguments": [
    {
      "val": "51",
      "offset": 35
    },
    {
      "val": "50",
      "offset": 38
    }
  ],
  "location": "WithdrawTest.that_I_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 270000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 154000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 130000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 137000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 33
    }
  ],
  "location": "WithdrawTest.there_will_be_an_withdraw_exceed_hour_exception(int)"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period",
  "description": "",
  "name": "Withdraw cash failure for more than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 45,
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
  "line": 46
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 47
});
formatter.step({
  "name": "there will be an withdraw exceed amount limit exception",
  "keyword": "Then ",
  "line": 48
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 50,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;1",
      "cells": [
        "start_balance",
        "amount"
      ],
      "line": 51
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;2",
      "cells": [
        "1000.00",
        "510"
      ],
      "line": 52
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;3",
      "cells": [
        "2000.00",
        "600"
      ],
      "line": 53
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;4",
      "cells": [
        "3000.00",
        "2000"
      ],
      "line": 54
    }
  ]
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;2",
  "description": "",
  "name": "Withdraw cash failure for more than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $1000.00 in my account",
  "keyword": "Given ",
  "line": 46,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $510",
  "keyword": "When ",
  "line": 47,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "there will be an withdraw exceed amount limit exception",
  "keyword": "Then ",
  "line": 48
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 35
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 168000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "510",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 75000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.there_will_be_an_withdraw_exceed_amount_limit_exception()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;3",
  "description": "",
  "name": "Withdraw cash failure for more than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 53,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $2000.00 in my account",
  "keyword": "Given ",
  "line": 46,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $600",
  "keyword": "When ",
  "line": 47,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "there will be an withdraw exceed amount limit exception",
  "keyword": "Then ",
  "line": 48
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 35
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 152000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.there_will_be_an_withdraw_exceed_amount_limit_exception()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-$500-in-a-single-24-hour-period;;4",
  "description": "",
  "name": "Withdraw cash failure for more than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 54,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $3000.00 in my account",
  "keyword": "Given ",
  "line": 46,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $2000",
  "keyword": "When ",
  "line": 47,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "there will be an withdraw exceed amount limit exception",
  "keyword": "Then ",
  "line": 48
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 35
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 170000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.there_will_be_an_withdraw_exceed_amount_limit_exception()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period",
  "description": "",
  "name": "Withdraw cash Success for less than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 56,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 57
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 58
});
formatter.step({
  "name": "my balance should be $\u003cend_balance\u003e",
  "keyword": "Then ",
  "line": 59
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 61,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;1",
      "cells": [
        "start_balance",
        "amount",
        "end_balance"
      ],
      "line": 62
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;2",
      "cells": [
        "500.00",
        "300",
        "200.00"
      ],
      "line": 63
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;3",
      "cells": [
        "1000.00",
        "100",
        "900.00"
      ],
      "line": 64
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;4",
      "cells": [
        "3000.00",
        "500",
        "2500.00"
      ],
      "line": 65
    }
  ]
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;2",
  "description": "",
  "name": "Withdraw cash Success for less than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 63,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $500.00 in my account",
  "keyword": "Given ",
  "line": 57,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 58,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $200.00",
  "keyword": "Then ",
  "line": 59,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 225000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 26
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 94000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;3",
  "description": "",
  "name": "Withdraw cash Success for less than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $1000.00 in my account",
  "keyword": "Given ",
  "line": 57,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $100",
  "keyword": "When ",
  "line": 58,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $900.00",
  "keyword": "Then ",
  "line": 59,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 35
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 178000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 81000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "900",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 26
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-$500-in-a-single-24-hour-period;;4",
  "description": "",
  "name": "Withdraw cash Success for less than $500 in a single 24-hour period",
  "keyword": "Scenario Outline",
  "line": 65,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $3000.00 in my account",
  "keyword": "Given ",
  "line": 57,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $500",
  "keyword": "When ",
  "line": 58,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $2500.00",
  "keyword": "Then ",
  "line": 59,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 35
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 200000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance",
  "description": "",
  "name": "Withdraw cash failure for more than account balance",
  "keyword": "Scenario Outline",
  "line": 70,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "# 3. You cannot make a withdrawal for more than you have in the balance.",
      "line": 68
    }
  ]
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 71
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 72
});
formatter.step({
  "name": "there will be an withdraw exceed balance limit exception",
  "keyword": "Then ",
  "line": 73
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 75,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;1",
      "cells": [
        "start_balance",
        "amount"
      ],
      "line": 76
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;2",
      "cells": [
        "300.00",
        "310"
      ],
      "line": 77
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;3",
      "cells": [
        "300.00",
        "400"
      ],
      "line": 78
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;4",
      "cells": [
        "300.00",
        "500"
      ],
      "line": 79
    }
  ]
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;2",
  "description": "",
  "name": "Withdraw cash failure for more than account balance",
  "keyword": "Scenario Outline",
  "line": 77,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 71,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $310",
  "keyword": "When ",
  "line": 72,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "there will be an withdraw exceed balance limit exception",
  "keyword": "Then ",
  "line": 73
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 210000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "310",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.there_will_be_an_withdraw_exceed_balance_limit_exception()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;3",
  "description": "",
  "name": "Withdraw cash failure for more than account balance",
  "keyword": "Scenario Outline",
  "line": 78,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 71,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $400",
  "keyword": "When ",
  "line": 72,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "there will be an withdraw exceed balance limit exception",
  "keyword": "Then ",
  "line": 73
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 622000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.there_will_be_an_withdraw_exceed_balance_limit_exception()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-more-than-account-balance;;4",
  "description": "",
  "name": "Withdraw cash failure for more than account balance",
  "keyword": "Scenario Outline",
  "line": 79,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 71,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $500",
  "keyword": "When ",
  "line": 72,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "there will be an withdraw exceed balance limit exception",
  "keyword": "Then ",
  "line": 73
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 185000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.there_will_be_an_withdraw_exceed_balance_limit_exception()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance",
  "description": "",
  "name": "Withdraw cash success for less than account balance",
  "keyword": "Scenario Outline",
  "line": 81,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 82
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 83
});
formatter.step({
  "name": "my balance should be $\u003cend_balance\u003e",
  "keyword": "Then ",
  "line": 84
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 86,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;1",
      "cells": [
        "start_balance",
        "amount",
        "end_balance"
      ],
      "line": 87
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;2",
      "cells": [
        "300.00",
        "300",
        "0.00"
      ],
      "line": 88
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;3",
      "cells": [
        "300.00",
        "250",
        "50.00"
      ],
      "line": 89
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;4",
      "cells": [
        "400.00",
        "300",
        "100.00"
      ],
      "line": 90
    }
  ]
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;2",
  "description": "",
  "name": "Withdraw cash success for less than account balance",
  "keyword": "Scenario Outline",
  "line": 88,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 82,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 83,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $0.00",
  "keyword": "Then ",
  "line": 84,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 242000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 84000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 111000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;3",
  "description": "",
  "name": "Withdraw cash success for less than account balance",
  "keyword": "Scenario Outline",
  "line": 89,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 82,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $250",
  "keyword": "When ",
  "line": 83,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $50.00",
  "keyword": "Then ",
  "line": 84,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 152000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 25
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-less-than-account-balance;;4",
  "description": "",
  "name": "Withdraw cash success for less than account balance",
  "keyword": "Scenario Outline",
  "line": 90,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $400.00 in my account",
  "keyword": "Given ",
  "line": 82,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 83,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $100.00",
  "keyword": "Then ",
  "line": 84,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 158000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 26
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10",
  "description": "",
  "name": "Withdraw cash failure for amount not being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 95,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "# 4. If you try to withdraw an amount that is not a multiple of $10, it should be refused.",
      "line": 93
    }
  ]
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 96
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 97
});
formatter.step({
  "name": "there will be an withdraw ammount exception",
  "keyword": "Then ",
  "line": 98
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 100,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;1",
      "cells": [
        "start_balance",
        "amount"
      ],
      "line": 101
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;2",
      "cells": [
        "300.00",
        "1"
      ],
      "line": 102
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;3",
      "cells": [
        "300.00",
        "12"
      ],
      "line": 103
    },
    {
      "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;4",
      "cells": [
        "300.00",
        "231"
      ],
      "line": 104
    }
  ]
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;2",
  "description": "",
  "name": "Withdraw cash failure for amount not being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 102,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 96,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $1",
  "keyword": "When ",
  "line": 97,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "there will be an withdraw ammount exception",
  "keyword": "Then ",
  "line": 98
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 774000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.there_will_be_an_withdraw_ammount_exception()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;3",
  "description": "",
  "name": "Withdraw cash failure for amount not being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 103,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 96,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $12",
  "keyword": "When ",
  "line": 97,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "there will be an withdraw ammount exception",
  "keyword": "Then ",
  "line": 98
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 520000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.there_will_be_an_withdraw_ammount_exception()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-failure-for-amount-not-being-a-multiple-of-$10;;4",
  "description": "",
  "name": "Withdraw cash failure for amount not being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 104,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 96,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $231",
  "keyword": "When ",
  "line": 97,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "there will be an withdraw ammount exception",
  "keyword": "Then ",
  "line": 98
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 171000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "231",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawTest.there_will_be_an_withdraw_ammount_exception()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10",
  "description": "",
  "name": "Withdraw cash success for amount being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 107,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I have a starting balance of $\u003cstart_balance\u003e in my account",
  "keyword": "Given ",
  "line": 108
});
formatter.step({
  "name": "I withdraw $\u003camount\u003e",
  "keyword": "When ",
  "line": 109
});
formatter.step({
  "name": "my balance should be $\u003cend_balance\u003e",
  "keyword": "Then ",
  "line": 110
});
formatter.examples({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 112,
  "rows": [
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;1",
      "cells": [
        "start_balance",
        "amount",
        "end_balance"
      ],
      "line": 113
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;2",
      "cells": [
        "300.00",
        "300",
        "0.00"
      ],
      "line": 114
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;3",
      "cells": [
        "300.00",
        "240",
        "60.00"
      ],
      "line": 115
    },
    {
      "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;4",
      "cells": [
        "400.00",
        "300",
        "100.00"
      ],
      "line": 116
    }
  ]
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;2",
  "description": "",
  "name": "Withdraw cash success for amount being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 114,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 108,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 109,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $0.00",
  "keyword": "Then ",
  "line": 110,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 172000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;3",
  "description": "",
  "name": "Withdraw cash success for amount being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 115,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $300.00 in my account",
  "keyword": "Given ",
  "line": 108,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $240",
  "keyword": "When ",
  "line": 109,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $60.00",
  "keyword": "Then ",
  "line": 110,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 168000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "240",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 68000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 25
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.scenario({
  "id": "cash-withdrawal;withdraw-cash-success-for-amount-being-a-multiple-of-$10;;4",
  "description": "",
  "name": "Withdraw cash success for amount being a multiple of $10",
  "keyword": "Scenario Outline",
  "line": 116,
  "type": "scenario"
});
formatter.step({
  "name": "I have a starting balance of $400.00 in my account",
  "keyword": "Given ",
  "line": 108,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I withdraw $300",
  "keyword": "When ",
  "line": 109,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "my balance should be $100.00",
  "keyword": "Then ",
  "line": 110,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 30
    },
    {
      "val": "00",
      "offset": 34
    }
  ],
  "location": "WithdrawTest.i_have_a_starting_balance_of_$_in_my_account(int,int)"
});
formatter.result({
  "duration": 134000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 12
    }
  ],
  "location": "WithdrawTest.i_withdraw_$(int)"
});
formatter.result({
  "duration": 61000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 26
    }
  ],
  "location": "WithdrawTest.my_balance_should_be_$(int,int)"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
});