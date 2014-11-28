package exception;

/**
 * Withdraw amount exceeds 24-hour withdraw amount limit
 * 
 * @author Jialiang
 * 
 */
public class WithdrawAmountLimitException extends AccountException {

	private static final long serialVersionUID = 1L;

	public WithdrawAmountLimitException() {
		super(
				"The withdraw amount exceeds withdraw max amount in last 24 hours");
	}
}
