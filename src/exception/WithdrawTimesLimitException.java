package exception;

public class WithdrawTimesLimitException extends AccountException {
	public WithdrawTimesLimitException(String message) {
		super(message);
	}
}
