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

test("Small straight", function()
{
	ok(Yahtzee.getSmallStraightScore([4,3,1,2,5]) === 15, "Small straight");
	ok(Yahtzee.getSmallStraightScore([4,3,2,2,5]) === 0, "One pair");
	ok(Yahtzee.getSmallStraightScore([2,2,2,2,2]) === 0, "Yahtzee");
});

test("Large straight", function()
{
	ok(Yahtzee.getLargeStraightScore([2,3,4,6,5]) === 20, "Large straight");
	ok(Yahtzee.getLargeStraightScore([1,2,3,5,4]) === 0, "Small straight");
	ok(Yahtzee.getLargeStraightScore([2,2,2,2,2]) === 0, "Yahtzee");
});

test("Full house", function()
{
	ok(Yahtzee.getFullHouseScore([2,3,3,3,2]) === 13, "Twos and threes");
	ok(Yahtzee.getFullHouseScore([6,6,4,4,4]) === 24, "Sixes and fours");
	ok(Yahtzee.getFullHouseScore([6,6,3,4,4]) === 0, "Two pairs of fours and sixes");
});

test("Yahtzee", function()
{
	ok(Yahtzee.getYahtzeeScore([5,5,5,5,5]) === 50, "Yahtzee of fives");
	ok(Yahtzee.getYahtzeeScore([4,4,4,4,4]) === 50, "Yahtzee of fours");
	ok(Yahtzee.getYahtzeeScore([5,5,5,5,2]) === 0, "Four of a kind");
});

test("Chance", function()
{
	ok(Yahtzee.getChanceScore([1,2,3,4,5]) === 15, "Sum 15");
	ok(Yahtzee.getChanceScore([5,3,3,4,5]) === 20, "Sum 20");
});

test("Ones", function()
{
	ok(Yahtzee.getOnesScore([1,1,5,3,2]) === 2, "Two");
	ok(Yahtzee.getOnesScore([3,2,5,3,2]) === 0, "Zero");
	ok(Yahtzee.getOnesScore([1,1,1,1,1]) === 5, "Five");
});

test("Twos", function()
{
	ok(Yahtzee.getTwosScore([2,2,5,3,2]) === 6, "Three");
	ok(Yahtzee.getTwosScore([3,1,5,3,1]) === 0, "Zero");
	ok(Yahtzee.getTwosScore([2,2,2,2,2]) === 10, "Five");
});

test("Threes", function()
{
	ok(Yahtzee.getThreesScore([3,2,5,3,2]) === 6, "Two");
	ok(Yahtzee.getThreesScore([4,1,5,2,1]) === 0, "Zero");
	ok(Yahtzee.getThreesScore([3,3,3,3,3]) === 15, "Five");
});

test("Fours", function()
{
	ok(Yahtzee.getFoursScore([4,2,4,3,4]) === 12, "Three");
	ok(Yahtzee.getFoursScore([6,1,5,2,1]) === 0, "Zero");
	ok(Yahtzee.getFoursScore([4,4,4,4,4]) === 20, "Five");
});

test("Fives", function()
{
	ok(Yahtzee.getFivesScore([5,5,4,5,4]) === 15, "Three");
	ok(Yahtzee.getFivesScore([6,1,3,2,1]) === 0, "Zero");
	ok(Yahtzee.getFivesScore([5,5,5,5,5]) === 25, "Five");
});

test("Sixes", function()
{
	ok(Yahtzee.getSixesScore([6,6,4,5,6]) === 18, "Three");
	ok(Yahtzee.getSixesScore([4,1,3,2,1]) === 0, "Zero");
	ok(Yahtzee.getSixesScore([6,6,6,6,6]) === 30, "Five");
});

module("Scoring");
test("Get one matching category", function()
{
	ok(Yahtzee.getMatchingCategories([3,2,4,5,1]).indexOf('ones') !== -1, 'Ones');
	ok(Yahtzee.getMatchingCategories([3,2,4,5,1]).indexOf('twos') !== -1, 'Twos');
	ok(Yahtzee.getMatchingCategories([3,2,4,5,1]).indexOf('threes') !== -1, 'Threes');
	ok(Yahtzee.getMatchingCategories([3,2,4,5,1]).indexOf('fours') !== -1, 'Fours');
	ok(Yahtzee.getMatchingCategories([3,2,4,5,1]).indexOf('fives') !== -1, 'Fives');
	ok(Yahtzee.getMatchingCategories([3,2,6,5,1]).indexOf('sixes') !== -1, 'Sixes');
	ok(Yahtzee.getMatchingCategories([1,2,2,3,4]).indexOf('pair') !== -1, 'One pair');
	ok(Yahtzee.getMatchingCategories([2,2,3,4,3]).indexOf('twoPairs') !== -1, 'Two pairs');
	ok(Yahtzee.getMatchingCategories([2,2,3,2,3]).indexOf('threeOfAKind') !== -1, 'Three of a kind');
	ok(Yahtzee.getMatchingCategories([2,2,2,4,2]).indexOf('fourOfAKind') !== -1, 'Four of a kind');
	ok(Yahtzee.getMatchingCategories([3,2,4,5,1]).indexOf('smallStraight') !== -1, 'Small straight');
	ok(Yahtzee.getMatchingCategories([3,2,6,5,4]).indexOf('largeStraight') !== -1, 'Large straight');
	ok(Yahtzee.getMatchingCategories([3,5,5,3,5]).indexOf('fullHouse') !== -1, 'Full house');
	ok(Yahtzee.getMatchingCategories([5,2,1,2,3]).indexOf('chance') !== -1, 'Chance');
	ok(Yahtzee.getMatchingCategories([5,5,5,5,5]).indexOf('yahtzee') !== -1, 'Yahtzee');

});

test("Get multiple matching categories", function()
{
	propEqual(Yahtzee.getMatchingCategories([3,4,3,3,4]), ['threes', 'fours', 'pair', 'twoPairs', 'threeOfAKind', 'fullHouse', 'chance'], "Two fours, three threes");
	propEqual(Yahtzee.getMatchingCategories([3,3,3,3,3]), ['threes', 'pair', 'threeOfAKind', 'fourOfAKind', 'chance', 'yahtzee'], "Five threes");
	propEqual(Yahtzee.getMatchingCategories([4,3,1,5,6]), ['ones', 'threes', 'fours', 'fives', 'sixes', 'chance'], "Unique values (1, 3-6)");
});