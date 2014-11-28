package exception;

public class WithdrawAmountLimitException extends AccountException {

	public WithdrawAmountLimitException() {
		super("The withdraw amount exceeds withdraw max amount in last 24 hours");
	}
}
