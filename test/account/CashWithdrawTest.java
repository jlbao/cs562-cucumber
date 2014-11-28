package account;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import account.transform.AccountTransformer;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exception.WithdrawAmountException;
import exception.WithdrawAmountLimitException;
import exception.WithdrawExceedBalanceException;
import exception.WithdrawTimesLimitException;

public class CashWithdrawTest extends CommonTest{

	protected Account account;

	public CashWithdrawTest() {
	}

	@Given("^I have a starting balance of \\$(\\d+\\.\\d+) in my account$")
	public void i_have_a_starting_balance_of_$_in_my_account(
			@Transform(AccountTransformer.class) Account account)
			throws Throwable {
		this.account = account;
	}

	@Then("^my balance should be \\$(\\d+\\.\\d+)$")
	public void my_balance_should_be_$(String balance) {
		assertTrue(this.account.getBalance() == Double.parseDouble(balance));
	}

	@When("^I withdraw \\$(\\d+)$")
	public void i_withdraw_$(int amount) {
		try {
			account.withdrawMoney(amount);
		} catch (WithdrawExceedBalanceException e) {
			System.out.println("Exception Message: " + e.getMessage());
		} catch (WithdrawTimesLimitException e) {
			System.out.println("Exception Message: " + e.getMessage());
		} catch (WithdrawAmountLimitException e) {
			System.out.println("Exception Message: " + e.getMessage());
		} catch (WithdrawAmountException e) {
			System.out.println("Exception Message: " + e.getMessage());
		}
	}

	@Then("^\\$(\\d+) should be dispensed$")
	public void $_should_be_dispensed(int amount) {
		assertTrue(amount == this.account.getLastWithdrawAmount());
	}

	@Then("^I should have received \\$(\\d+)$")
	public void i_should_have_received_$(int amount) {
		assertEquals(amount, this.account.getAmountWithdrawInLast24Hours());
	}

	@Then("^a withdraw exceed 24-hour exception occurs$")
	public void a_withdraw_exceed_24hour_exception_occurs() {
		assertTrue(this.account.getLastException() instanceof WithdrawTimesLimitException);
	}

	@Then("^a withdraw exceed amount limit exception occurs$")
	public void a_withdraw_exceed_amount_limit_exception_occurs() {
		assertTrue(this.account.getLastException() instanceof WithdrawAmountLimitException);
	}

	@Then("^a withdraw exceed balance limit exception occurs$")
	public void a_withdraw_exceed_balance_limit_exception_occurs() {
		assertTrue(this.account.getLastException() instanceof WithdrawExceedBalanceException);
	}

	@Then("^a withdraw amount exception occurs$")
	public void a_withdraw_amount_exception_occurs() {
		assertTrue(this.account.getLastException() instanceof WithdrawAmountException);
	}
}
