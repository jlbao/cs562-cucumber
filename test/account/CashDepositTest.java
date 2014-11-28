package account;

import static org.junit.Assert.assertTrue;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exception.DepositAmountException;

/**
 * Cash deposit test
 * 
 * @author Jialiang
 * 
 */
public class CashDepositTest {

	@When("^I deposit \\$([-]{0,1}\\d+\\.\\d+)$")
	public void i_deposit_$(String amount) {
		try {
			PublicAccount.account.deposit(Double.parseDouble(amount));
		} catch (NumberFormatException e) {
			System.out.println(e.getMessage());
		} catch (DepositAmountException e) {
			System.out.println("Exception message: " + e.getMessage());
		}
	}

	@Then("^a deposit amount exception occurs$")
	public void a_deposit_amount_exception_occurs() {
		assertTrue(PublicAccount.account.getLastException() instanceof DepositAmountException);
	}

}
