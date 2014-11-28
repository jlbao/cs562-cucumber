package exception;

/**
 * Deposit amount Exception (Invalid deposit amount)
 * 
 * @author Jialiang
 * 
 */
public class DepositAmountException extends AccountException {

	private static final long serialVersionUID = 1L;

	public DepositAmountException() {
		super("Invalid deposit amount");
	}
}
