package exception;

/**
 * Base class of Account Exception
 * 
 * @author Jialiang
 * 
 */
public class AccountException extends Exception {

	private static final long serialVersionUID = 1L;

	public AccountException(String message) {
		super(message);
	}
}
