package account;

import exception.AccountException;
import exception.WithdrawAmountException;
import exception.WithdrawAmountLimitException;
import exception.WithdrawExceedBalanceException;
import exception.WithdrawTimesLimitException;

public class Account {

	public static final int MAX_WITHDRAW_TIMES_24HOURS = 3;

	public static final double MAX_WITHDRAW_AMOUNT_LIMIT = 500;

	private double balance;

	private int amountWithdrawInLast24Hours;

	private int lastWithdrawAmount;

	private int countWithdrawInLast24Hours;

	private AccountException lastException;

	public Account(double balance) {
		this.balance = balance;
	}

	public void withdrawMoney(int amount)
			throws WithdrawExceedBalanceException, WithdrawTimesLimitException,
			WithdrawAmountLimitException, WithdrawAmountException {
		if (balance < amount) {
			lastException = new WithdrawExceedBalanceException();
			throw (WithdrawExceedBalanceException) lastException;
		}
		if (amount < 10 || amount % 10 != 0) {
			lastException = new WithdrawAmountException();
			throw (WithdrawAmountException) lastException;
		}
		if (amount + amountWithdrawInLast24Hours > Account.MAX_WITHDRAW_AMOUNT_LIMIT) {
			lastException = new WithdrawAmountLimitException();
			throw (WithdrawAmountLimitException) lastException;
		}
		if (countWithdrawInLast24Hours == Account.MAX_WITHDRAW_TIMES_24HOURS) {
			lastException = new WithdrawTimesLimitException();
			throw (WithdrawTimesLimitException) lastException;
		}
		this.amountWithdrawInLast24Hours += amount;
		this.countWithdrawInLast24Hours++;
		this.balance -= amount;
		this.lastWithdrawAmount = amount;
	}

	// getters and setters
	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public int getAmountWithdrawInLast24Hours() {
		return amountWithdrawInLast24Hours;
	}

	public void setAmountWithdrawInLast24Hours(int amountWithdrawInLast24Hours) {
		this.amountWithdrawInLast24Hours = amountWithdrawInLast24Hours;
	}

	public int getCountWithdrawInLast24Hours() {
		return countWithdrawInLast24Hours;
	}

	public void setCountWithdrawInLast24Hours(int countWithdrawInLast24Hours) {
		this.countWithdrawInLast24Hours = countWithdrawInLast24Hours;
	}

	public AccountException getLastException() {
		return lastException;
	}

	public void setLastException(AccountException lastException) {
		this.lastException = lastException;
	}

	public int getLastWithdrawAmount() {
		return lastWithdrawAmount;
	}

	public void setLastWithdrawAmount(int lastWithdrawAmount) {
		this.lastWithdrawAmount = lastWithdrawAmount;
	}

}
