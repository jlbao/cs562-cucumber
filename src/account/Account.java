package account;

import exception.AccountException;
import exception.WithdrawAmountException;
import exception.WithdrawAmountLimitException;
import exception.WithdrawExceedBalanceException;
import exception.WithdrawTimesLimitException;

public class Account {

	public static final int MAX_WITHDRAW_TIMES_24HOURS = 3;

	public static final float MAX_WITHDRAW_AMOUNT_LIMIT = 500;

	private float balance;

	private float amountWithdrawInLast24Hours;

	private int countWithdrawInLast24Hours;

	private AccountException lastException;

	public void withdrawMoney(int amount)
			throws WithdrawExceedBalanceException, WithdrawTimesLimitException,
			WithdrawAmountLimitException, WithdrawAmountException {
		if (balance < amount) {
			lastException = new WithdrawExceedBalanceException(
					"The withdraw amount exceeds current balance");
			throw (WithdrawExceedBalanceException) lastException;
		}
		if (amount < 10 || amount % 10 != 0) {
			lastException = new WithdrawAmountException(
					"The withdraw amount is not a multiple of 10");
			throw (WithdrawAmountException) lastException;
		}
		if (amount + amountWithdrawInLast24Hours > Account.MAX_WITHDRAW_AMOUNT_LIMIT) {
			lastException = new WithdrawAmountLimitException(
					"The withdraw amount exceeds the max amount you can withdraw in last 24 hours");
			throw (WithdrawAmountLimitException) lastException;
		}
		if (countWithdrawInLast24Hours == Account.MAX_WITHDRAW_TIMES_24HOURS) {
			lastException = new WithdrawTimesLimitException(
					"The withdraw exceeds the max count your can withdraw in 24 hours");
			throw (WithdrawTimesLimitException) lastException;
		}
		amountWithdrawInLast24Hours += amount;
		countWithdrawInLast24Hours++;
		balance -= amount;
	}
}
