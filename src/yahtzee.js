(function(root)
{
	"use strict";

	var isNumber = function(roll, number)
	{
		var valid = false;
		valid = roll.indexOf(number) !== -1;
		return valid;
	};

	var Yahtzee = {
		isPair : function(roll)
		{
			var valid = false;
			var i;

			roll.sort();

			for (i = 0; i < 4; i++)
			{
				valid |= (roll[i] === roll[i+1]);
			}
			return valid;
		},
		getPairScore : function(roll)
		{
			var score = 0;
			var i;
			roll.sort();

			if (!this.isPair(roll))
			{
				return 0;
			}

			for (i = 0; i < 4; i++)
			{
				if (roll[i] === roll[i+1])
				{
					score = roll[i]*2;
				}
			}

			return score;
		},
		isTwoPairs : function(roll)
		{
			roll.sort();
			return	((roll[0] === roll[1]) && (roll[2] === roll[3]) && (roll[0] !== roll[2])) ||
					((roll[0] === roll[1] || roll[1] === roll[2]) && (roll[3] === roll[4]) && (roll[1] !== roll[3]));
		},
		getTwoPairsScore : function(roll)
		{
			var score = 0;

			roll.sort();

			if (!this.isTwoPairs(roll))
			{
				return 0;
			}

			for (var i = 0; i < 4; i++)
			{
				if (roll[i] === roll[i+1])
				{
					score += roll[i]*2;
				}
			}

			return score;
		},
		isThreeOfAKind : function(roll)
		{
			var valid = false;
			var i;

			roll.sort();

			for (i = 0; i < 3; i++)
			{
				valid |= (roll[i]*1E2 + roll[i + 1]*1E1 + roll[i + 2])%111 === 0;
			}
			return valid;
		},
		isFourOfAKind : function(roll)
		{
			var valid = false;
			roll.sort();

			valid |= parseInt(roll.slice(0, 4).join(""), 10)%1111 === 0;
			valid |= parseInt(roll.slice(1, 5).join(""), 10)%1111 === 0;

			return valid;
		},
		isSmallStraight : function(roll)
		{
			var valid = true;
			var i;

			roll.sort();

			for (i = 0; i < 5; i++)
			{
				valid &= (roll[i] === i+1);
			}

			return valid;
		},
		isLargeStraight : function(roll)
		{
			var valid = true;
			var i;

			roll.sort();

			for (i = 0; i < 5; i++)
			{
				valid &= (roll[i] === i+2);
			}

			return valid;
		},
		isFullHouse : function(roll)
		{
			var valid = true;
			var halfA;
			var halfB;

			roll.sort();

			valid &= parseInt(roll.slice(0, 2).join(""), 10)%11 === 0;
			valid &= parseInt(roll.slice(3, 5).join(""), 10)%11 === 0;
			valid &= roll[2] === roll[0] || roll[2] == roll[4];
			valid &= roll[0] !== roll[4];

			return valid;
		},
		isYahtzee : function(roll)
		{
			var valid = false;

			valid = parseInt(roll.join(""), 10)%11111 === 0;

			return valid;
		},
		isChance : function(roll)
		{
			var valid = true;
			return valid;
		},
		isOnes : function(roll)
		{
			return isNumber(roll, 1);
		},
		isTwos : function(roll)
		{
			return isNumber(roll, 2);
		},
		isThrees : function(roll)
		{
			return isNumber(roll, 3);
		},
		isFours : function(roll)
		{
			return isNumber(roll, 4);
		},
		isFives : function(roll)
		{
			return isNumber(roll, 5);
		},
		isSixes : function(roll)
		{
			return isNumber(roll, 6);
		}
	};

	root.Yahtzee = root.Yahtzee || Yahtzee;
}(this));