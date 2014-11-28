package exception;

public class WithdrawExceedBalanceException extends AccountException {

	public WithdrawExceedBalanceException() {
		super("The withdraw amount exceeds current balance");
	}

}
