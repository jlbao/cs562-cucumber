package exception;

public class WithdrawAmountException extends AccountException {

	public WithdrawAmountException() {
		super("The withdraw amount is not a multiple of 10");
	}
}
