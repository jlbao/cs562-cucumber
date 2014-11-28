package exception;

/**
 * Withdraw amount exceeds balance
 * 
 * @author Jialiang
 * 
 */
public class WithdrawExceedBalanceException extends AccountException {

	private static final long serialVersionUID = 1L;

	public WithdrawExceedBalanceException() {
		super("The withdraw amount exceeds current balance");
	}

}
