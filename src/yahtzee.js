(function(root)
{
	"use strict";
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
		isTwoPairs : function(roll)
		{
			roll.sort();
			return	((roll[0] === roll[1]) && (roll[2] === roll[3]) && (roll[0] !== roll[2])) ||
					((roll[0] === roll[1] || roll[1] === roll[2]) && (roll[3] === roll[4]) && (roll[1] !== roll[3]));
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
		}
	};

	root.Yahtzee = root.Yahtzee || Yahtzee;
}(this));