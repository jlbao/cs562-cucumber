package exception;

/**
 * Withdraw exceeds maximum withdraw count limit
 * 
 * @author Jialiang
 * 
 */
public class WithdrawTimesLimitException extends AccountException {

	private static final long serialVersionUID = 1L;

	public WithdrawTimesLimitException() {
		super(
				"The withdraw exceeds the max count your can withdraw in 24 hours");
	}
}
