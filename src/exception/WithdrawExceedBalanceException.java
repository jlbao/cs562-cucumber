package exception;

public class WithdrawExceedBalanceException extends AccountException {
	public WithdrawExceedBalanceException(String message) {
		super(message);
	}

}
