package account;

import static org.junit.Assert.assertTrue;
import account.transform.AccountTransformer;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CommonTest {
	protected Account account;

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
}
