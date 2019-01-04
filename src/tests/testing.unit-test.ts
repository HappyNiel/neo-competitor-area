import { suite, test } from "mocha-typescript";
import * as Moq from "typemoq";
import { assert } from "chai";

@suite
class TestingTest {

	@test
	testA() {
		assert.isTrue(true);
	}
}
