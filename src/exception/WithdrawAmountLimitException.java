package exception;

public class WithdrawAmountLimitException extends AccountException {
	public WithdrawAmountLimitException(String message) {
		super(message);
	}
}
