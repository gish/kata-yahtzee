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

test("Four of a kind", function()
{
	ok(Yahtzee.isFourOfAKind([1,1,2,1,1]), "Four ones");
	ok(Yahtzee.isFourOfAKind([3,3,3,3,2]), "Four threes");
	ok(!Yahtzee.isFourOfAKind([4,5,4,3,4]), "Only three fours");
	ok(!Yahtzee.isFourOfAKind([6,4,3,5,1]), "Only unique values");
});

test("Small straight", function()
{
	ok(Yahtzee.isSmallStraight([3,4,1,5,2]), "Small straight");
	ok(!Yahtzee.isSmallStraight([3,4,6,5,2]), "Large straight");
	ok(!Yahtzee.isSmallStraight([1,1,1,1,1]), "No unique values");
});

test("Large straight", function()
{
	ok(Yahtzee.isLargeStraight([3,4,6,5,2]), "Large straight");
	ok(!Yahtzee.isLargeStraight([3,4,1,5,2]), "Small straight");
	ok(!Yahtzee.isLargeStraight([1,1,1,1,1]), "No unique values");
});

test("Full house", function()
{
	ok(Yahtzee.isFullHouse([3,6,3,3,6]), "Full house with sixes and threes");
	ok(Yahtzee.isFullHouse([3,6,3,6,6]), "Full house with threes and sixes");
	ok(!Yahtzee.isFullHouse([1,6,3,6,6]), "Two pairs with threes and sixes");
	ok(!Yahtzee.isFullHouse([6,6,6,6,6]), "Yahtzee");
});