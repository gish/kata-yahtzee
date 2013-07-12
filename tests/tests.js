module("Match categories");

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

test("Yahtzee", function()
{
	ok(Yahtzee.isYahtzee([4,4,4,4,4]), "Yahtzee with fours");
	ok(Yahtzee.isYahtzee([1,1,1,1,1]), "Yahtzee with ones");
	ok(!Yahtzee.isYahtzee([1,1,1,1,4]), "Four of a kind");
	ok(!Yahtzee.isYahtzee([1,1,1,2,4]), "Three of a kind");
	ok(!Yahtzee.isYahtzee([1,5,3,2,4]), "Small straight");
});

test("Chance", function()
{
	ok(Yahtzee.isChance([1,2,3,4,5]), "Chance with unique values");
	ok(Yahtzee.isChance([2,3,3,2,3]), "Chance with full house");
});

test("Ones", function()
{
	ok(Yahtzee.isOnes([1,1,1,1,1]), "All ones");
	ok(Yahtzee.isOnes([1,2,3,4,1]), "Two ones");
	ok(Yahtzee.isOnes([1,2,3,4,2]), "One one");
	ok(!Yahtzee.isOnes([6,2,3,4,6]), "No ones");
});

test("Twos", function()
{
	ok(Yahtzee.isTwos([2,2,2,2,2]), "All twos");
	ok(Yahtzee.isTwos([2,1,3,4,2]), "Two twos");
	ok(Yahtzee.isTwos([2,1,3,4,1]), "One two");
	ok(!Yahtzee.isTwos([6,1,3,4,6]), "No twos");
});

test("Threes", function()
{
	ok(Yahtzee.isThrees([3,3,3,3,3]), "All threes");
	ok(Yahtzee.isThrees([3,1,1,4,3]), "Two threes");
	ok(Yahtzee.isThrees([3,1,1,4,1]), "One three");
	ok(!Yahtzee.isThrees([6,1,1,4,6]), "No threes");
});

test("Fours", function()
{
	ok(Yahtzee.isFours([4,4,4,4,4]), "All fours");
	ok(Yahtzee.isFours([4,1,1,4,2]), "Two fours");
	ok(Yahtzee.isFours([4,1,1,6,1]), "One four");
	ok(!Yahtzee.isFours([6,1,1,3,6]), "No fours");
});

test("Fives", function()
{
	ok(Yahtzee.isFives([5,5,5,5,5]), "All fives");
	ok(Yahtzee.isFives([5,1,1,5,2]), "Two fives");
	ok(Yahtzee.isFives([5,1,1,6,1]), "One five");
	ok(!Yahtzee.isFives([6,1,1,3,6]), "No fives");
});

test("Sixes", function()
{
	ok(Yahtzee.isSixes([6,6,6,6,6]), "All sixes");
	ok(Yahtzee.isSixes([6,1,1,6,2]), "Two sixes");
	ok(Yahtzee.isSixes([6,1,1,4,1]), "One six");
	ok(!Yahtzee.isSixes([4,1,1,3,4]), "No sixes");
});

module("Score");

test("One pair", function()
{
	ok(Yahtzee.getPairScore([1,4,3,2,4]) === 8, "Pair of fours");
	ok(Yahtzee.getPairScore([1,2,1,2,3]) === 4, "Pair of twos, overriding pair of ones");
	ok(Yahtzee.getPairScore([1,5,3,4,2]) === 0, "No pair");
	ok(Yahtzee.getPairScore([4,4,4,4,4]) === 8, "Pair of sixes where all sixes");
});

test("Two pairs", function()
{
	ok(Yahtzee.getTwoPairsScore([4,3,2,4,3]) === 14, "Pair of fours and threes");
	ok(Yahtzee.getTwoPairsScore([1,3,2,4,3]) === 0, "Only one pair");
	ok(Yahtzee.getTwoPairsScore([3,3,2,3,3]) === 0, "Two pairs of same value");
});

test("Three of a kind", function()
{
	ok(Yahtzee.getThreeOfAKindScore([3,3,4,5,3]) === 9, "Threes");
	ok(Yahtzee.getThreeOfAKindScore([4,2,3,2,1]) === 0, "Only one pair");
	ok(Yahtzee.getThreeOfAKindScore([1,2,4,3,6]) === 0, "Unique values");
});

test("Four of a kind", function()
{
	ok(Yahtzee.getFourOfAKindScore([4,4,5,4,4]) === 16, "Fours");
	ok(Yahtzee.getFourOfAKindScore([4,1,1,1,1]) === 4, "Ones");
	ok(Yahtzee.getFourOfAKindScore([4,6,6,6,1]) === 0, "Only three of a kind");
	ok(Yahtzee.getFourOfAKindScore([5,3,4,2,1]) === 0, "Unique values");
});