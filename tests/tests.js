test("One pair", function()
{
	ok(Yahtzee.isPair([1,1,2,3,4]), "A pair with ones");
	ok(Yahtzee.isPair([2,3,2,4,1]), "A pair with twos");
	ok(Yahtzee.isPair([6,5,3,2,3]), "A pair with threes");
	ok(Yahtzee.isPair([1,4,4,2,3]), "A pair with fours");
	ok(!Yahtzee.isPair([1,2,3,4,5]), "No pair");
});

test("Two pairs", function()
{
	ok(Yahtzee.isTwoPairs([1,4,2,4,1]), "Two pairs with ones and fours");
	ok(Yahtzee.isTwoPairs([5,6,6,3,5]), "Two pairs with fives and sixes");
	ok(!Yahtzee.isTwoPairs([3,4,3,2,1]), "Only one pair");
	ok(!Yahtzee.isTwoPairs([3,4,5,2,1]), "No pairs");
	ok(!Yahtzee.isTwoPairs([2,2,5,2,2]), "Not only pairs with twos");
	ok(!Yahtzee.isTwoPairs([5,4,4,4,4]), "Not only pairs with fours");
});
test("Three of a kind", function()
{
	ok(Yahtzee.isThreeOfAKind([1,2,1,3,1]), "Three ones");
	ok(Yahtzee.isThreeOfAKind([5,6,5,6,5]), "Three fours");
	ok(Yahtzee.isThreeOfAKind([5,5,1,5,6]), "Three fives");
});