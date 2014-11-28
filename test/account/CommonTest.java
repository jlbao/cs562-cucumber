package account;

import static org.junit.Assert.assertTrue;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/**
 * Common Test includes tests used in all test cases
 * 
 * @author Jialiang
 * 
 */
public class CommonTest {

	/**
	 * set up the global public account
	 */
	@Before
	public void beforeScenario() {
		PublicAccount.account = new Account();
	}

	/**
	 * clear the global public account
	 */
	@After
	public void afterScenario() {
		PublicAccount.account = null;
	}

	@Given("^I have a starting balance of \\$(\\d+\\.\\d+) in my account$")
	public void i_have_a_starting_balance_of_$_in_my_account(String account) {
		PublicAccount.account.setBalance(Double.parseDouble(account));
	}

	@Then("^my balance should be \\$(\\d+\\.\\d+)$")
	public void my_balance_should_be_$(String balance) {
		assertTrue(PublicAccount.account.getBalance() == Double
				.parseDouble(balance));
	}

}
