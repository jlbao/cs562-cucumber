package account;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exception.WithdrawAmountFormatException;
import exception.WithdrawAmountLimitException;
import exception.WithdrawExceedBalanceException;
import exception.WithdrawTimesLimitException;

/**
 * Cash withdraw test
 * 
 * @author Jialiang
 * 
 */
public class CashWithdrawTest {

	@When("^I withdraw \\$(\\d+)$")
	public void i_withdraw_$(int amount) {
		try {
			PublicAccount.account.withdraw(amount);
		} catch (WithdrawExceedBalanceException e) {
			System.out.println("Exception Message: " + e.getMessage());
		} catch (WithdrawTimesLimitException e) {
			System.out.println("Exception Message: " + e.getMessage());
		} catch (WithdrawAmountLimitException e) {
			System.out.println("Exception Message: " + e.getMessage());
		} catch (WithdrawAmountFormatException e) {
			System.out.println("Exception Message: " + e.getMessage());
		}
	}

	@Then("^\\$(\\d+) should be dispensed$")
	public void $_should_be_dispensed(int amount) {
		assertTrue(amount == PublicAccount.account.getLastWithdrawAmount());
	}

	@Then("^I should have received \\$(\\d+)$")
	public void i_should_have_received_$(int amount) {
		assertEquals(amount,
				PublicAccount.account.getAmountWithdrawInLast24Hours());
	}

	@Then("^a withdraw exceed 24-hour exception occurs$")
	public void a_withdraw_exceed_24hour_exception_occurs() {
		assertTrue(PublicAccount.account.getLastException() instanceof WithdrawTimesLimitException);
	}

	@Then("^a withdraw exceed amount limit exception occurs$")
	public void a_withdraw_exceed_amount_limit_exception_occurs() {
		assertTrue(PublicAccount.account.getLastException() instanceof WithdrawAmountLimitException);
	}

	@Then("^a withdraw exceed balance limit exception occurs$")
	public void a_withdraw_exceed_balance_limit_exception_occurs() {
		assertTrue(PublicAccount.account.getLastException() instanceof WithdrawExceedBalanceException);
	}

	@Then("^a withdraw amount format exception occurs$")
	public void a_withdraw_amount_format_exception_occurs() {
		assertTrue(PublicAccount.account.getLastException() instanceof WithdrawAmountFormatException);
	}
}
