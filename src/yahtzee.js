var Yahtzee = {
	isPair : function(roll)
	{	
		var isPair = false;
		var i;

		roll.sort();

		for (i = 0; i < 4; i++)
		{
			isPair |= roll[i] + roll[i+1];
		}
		return isPair;
	},
	isTwoPairs : function(roll)
	{
		roll.sort();
		return	(roll[0] === roll[1]) && (roll[2] === roll[3]) ||
				(roll[0] === roll[1] || roll[1] === roll[2]) && (roll[3] === roll[4]);
	},
	isThreeOfAKind : function(roll)
	{
		var isThreeOfAKind = false;
		var i;

		roll.sort();

		for (i = 0; i < 3; i++)
		{
			isThreeOfAKind |= (roll[i]*1E2 + roll[i + 1]*1E1 + roll[i + 2])%111 === 0;
		}
		return isThreeOfAKind;
	}
};