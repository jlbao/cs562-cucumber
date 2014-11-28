package account;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WithdrawTest {

	@Given("^I have a starting balance of \\$(\\d+)\\.(\\d+) in my account$")
	public void i_have_a_starting_balance_of_$_in_my_account(int arg1, int arg2)
			throws Throwable {

	}

	@When("^I withdraw \\$(\\d+)$")
	public void i_withdraw_$(int arg1) throws Throwable {

	}

	@Then("^\\$(\\d+) should be dispensed$")
	public void $_should_be_dispensed(int arg1) throws Throwable {

	}

	@Given("^that I have a starting balance of \\$(\\d+)\\.(\\d+) in my account$")
	public void that_I_have_a_starting_balance_of_$_in_my_account(int arg1,
			int arg2) throws Throwable {

	}

	@Then("^I should have received \\$<cash>$")
	public void i_should_have_received_$_cash() throws Throwable {

	}

	@Then("^my balance should be \\$(\\d+)\\.(\\d+)$")
	public void my_balance_should_be_$(int arg1, int arg2) throws Throwable {

	}

	@Then("^There will be an withdraw exceed (\\d+)-hour exception$")
	public void there_will_be_an_withdraw_exceed_hour_exception(int arg1)
			throws Throwable {

	}

	@Then("^there will be an withdraw exceed amount limit exception$")
	public void there_will_be_an_withdraw_exceed_amount_limit_exception()
			throws Throwable {
	}

	@Then("^there will be an withdraw exceed balance limit exception$")
	public void there_will_be_an_withdraw_exceed_balance_limit_exception()
			throws Throwable {

	}

	@Then("^there will be an withdraw ammount exception$")
	public void there_will_be_an_withdraw_ammount_exception() throws Throwable {
	}
}
