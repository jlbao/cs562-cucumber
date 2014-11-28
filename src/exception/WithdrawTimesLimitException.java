package exception;

public class WithdrawTimesLimitException extends AccountException {
	
	public WithdrawTimesLimitException() {
		super("The withdraw exceeds the max count your can withdraw in 24 hours");
	}
}
