package exception;

/**
 * Exception that the withdraw amount is not a multiple of 10
 * 
 * @author Jialiang
 * 
 */
public class WithdrawAmountFormatException extends AccountException {

	private static final long serialVersionUID = 1L;

	public WithdrawAmountFormatException() {
		super("The withdraw amount is not a multiple of 10");
	}
}
