package account;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import exception.AccountException;
import exception.DepositAmountException;
import exception.WithdrawAmountFormatException;
import exception.WithdrawAmountLimitException;
import exception.WithdrawExceedBalanceException;
import exception.WithdrawTimesLimitException;

public class Account {

	public static final int MAX_WITHDRAW_TIMES_24HOURS = 3;

	public static final double MAX_WITHDRAW_AMOUNT_LIMIT = 500;

	private double balance;

	private int amountWithdrawInLast24Hours;

	private int lastWithdrawAmount;

	private double lastDepositAmount;

	private List<Date> last24HourWithdrawDateList;

	private AccountException lastException;

	public Account() {
		this.last24HourWithdrawDateList = new LinkedList<Date>();
	}

	public Account(double balance) {
		this();
		this.balance = balance;
	}

	/**
	 * Withdraw money from account
	 * 
	 * @param amount
	 * @throws WithdrawExceedBalanceException
	 * @throws WithdrawTimesLimitException
	 * @throws WithdrawAmountLimitException
	 * @throws WithdrawAmountFormatException
	 */
	public void withdraw(int amount) throws WithdrawExceedBalanceException,
			WithdrawTimesLimitException, WithdrawAmountLimitException,
			WithdrawAmountFormatException {
		if (balance < amount) {
			lastException = new WithdrawExceedBalanceException();
			throw (WithdrawExceedBalanceException) lastException;
		}
		if (amount < 10 || amount % 10 != 0) {
			lastException = new WithdrawAmountFormatException();
			throw (WithdrawAmountFormatException) lastException;
		}
		if (amount + amountWithdrawInLast24Hours > Account.MAX_WITHDRAW_AMOUNT_LIMIT) {
			lastException = new WithdrawAmountLimitException();
			throw (WithdrawAmountLimitException) lastException;
		}

		int last24hourWithdrawTimes = getLast24HourWithDrawTimes();
		while (last24HourWithdrawDateList.size() > last24hourWithdrawTimes) {
			// only keep last 24-hour withdraw date time
			last24HourWithdrawDateList.remove(0);
		}
		if (last24hourWithdrawTimes >= MAX_WITHDRAW_TIMES_24HOURS) {
			lastException = new WithdrawTimesLimitException();
			throw (WithdrawTimesLimitException) lastException;
		}

		this.amountWithdrawInLast24Hours += amount;
		this.balance -= amount;
		this.lastWithdrawAmount = amount;
		this.last24HourWithdrawDateList.add(new Date());
	}

	/**
	 * Deposit money to account
	 * 
	 * @param amount
	 * @throws DepositAmountException
	 */
	public void deposit(double amount) throws DepositAmountException {
		if (amount < 0) {
			lastException = new DepositAmountException();
			throw (DepositAmountException) lastException;
		}
		this.balance += amount;
		this.lastDepositAmount = amount;
	}

	// getters and setters

	public int getLast24HourWithDrawTimes() {
		int last24hourWithdrawTimes = 0;
		for (Date date : last24HourWithdrawDateList) {
			long interval = System.currentTimeMillis() - date.getTime();
			if (interval < 24 * 3600 * 1000) {
				last24hourWithdrawTimes++;
			}
		}
		return last24hourWithdrawTimes;
	}

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

	public double getLastDepositAmount() {
		return lastDepositAmount;
	}

	public void setLastDepositAmount(double lastDepositAmount) {
		this.lastDepositAmount = lastDepositAmount;
	}

}
