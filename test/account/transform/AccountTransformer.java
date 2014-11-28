package account.transform;

import account.Account;
import cucumber.api.Transformer;

public class AccountTransformer extends Transformer<Account> {

	@Override
	public Account transform(String amount) {
		return new Account(Double.parseDouble(amount));
	}

}
