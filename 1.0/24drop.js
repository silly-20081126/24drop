//This JavaScript file must run on the browser which support ECMAScript6
//Copyright (c) (pig-cmd silly-20081126 cdn2021) 2021
//Content: fat-pig-2020@outlook.com
//Server: Microsoft GitHub
//Watch our project: https://github.com/pig-cmd/24drop
//Version 1.0  Apr.4,2021
//Author Yichen Xu , Hugang Li
//It is prohibited for commercial use
//JavaScript File Start
function drop24(arr)
{
	if ((!(arr instanceof Array)) || (typeof(arr) != "object"))
	{
		//The input must be an array.
		throw("The input isn't an array.");
	};
	//This array should have 4 objects.
	if (arr.length != 4)
	{
		//Throw an error.
		throw("Input must have 4 objects.");
	};
	var int = 0;
	while (int < 5)
	{
		if (0 > arr[int])
			arr[int] = "(" + arr[int] + ")";
		//Process negative numbers
		int++;
	};
	var i = [];
	while (i.length < 4)
	{
		i[i.length] = 0;
		//Init the array of the enuming.
	};
	var result = [];
	var all_obj = [];
	//Enum the objects.
	while (i[0] < 4)
	{
		i[1] = 0;
		while (i[1] < 4)
		{
			if (i[1] == 4)
				i[1] = 0;
			if (i[1] == i[0])
			{
				//Repeat,Continue;
				i[1]++;
				continue;
			};
			i[2] = 0;
			while (i[2] < 4)
			{
				if (i[2] == 4)
					i[2] = 0;
				if (i[2] == i[0] || i[2] == i[1])
				{
					//Repeat,Continue;
					i[2]++;
					continue;
				};
				i[3] = 0;
				while (i[3] < 4)
				{
					if (i[3] == 4)
						i[3] = 0;
					if (i[3] == i[0] || i[3] == i[1] || i[3] == i[2])
					{
						//Repeat,Continue;
						i[3]++;
						continue;
					};
					//Have enumed the objects.
					var j = [];
					while (j.length < 3)
					{
						j[j.length] = 0;
						//Init the array for the enuming the symbol.
					};
					var symbol_table = [];
					///Create the table of the symbol.
					while (j[0] < 4)
					{
						symbol_table[0] = getSymbol(j[0]);
						j[1] = 0;
						while (j[1] < 4)
						{
							symbol_table[1] = getSymbol(j[1]);
							j[2] = 0;
							while (j[2] < 4)
							{
								symbol_table[2] = getSymbol(j[2]);
								//Computing
								var res = check24([arr[i[0]],arr[i[1]],arr[i[2]],arr[i[3]]],symbol_table);
								all_obj.push.apply(all_obj,res.result);
								result.push.apply(result,res.success_obj);
								j[2]++;
							};
							j[1]++;
						};
						j[0]++;
					};
					i[3]++;
				};
				i[2]++;
			};
			i[1]++;
		};
		i[0]++;
	};
	return {all_object:all_obj,result:result,status:!!result.length};
};
function getSymbol(n)
{
	switch(n)
	{
		case 0: 	return "+";
		case 1: 	return "-";
		case 2:	return "*";
		case 3: 	return "/";
		default:	return "+";
	};
};
function check24(num,symbol_table)
{
	var ret = [];
	var res = [];
	//Create an array for returning.
	eval("var c = " + num[0] + symbol_table[0] + num[1] + symbol_table[1] + num[2] + symbol_table[2] + num[3]);
	var len = res.length;
	res[len] = {};
	res[len].t = new Date().getTime();
	res[len].exp = "" + num[0] + symbol_table[0] + num[1] + symbol_table[1] + num[2] + symbol_table[2] + num[3];
	res[len].value = c;
	if (c == 24)
	{
		var len2 = ret.length;
		ret[len2] = res[len];
	}
	//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	eval("var c = (" + num[0] + symbol_table[0] + num[1] + ")" + symbol_table[1] + num[2] + symbol_table[2] + num[3]);
	var len = res.length;
	res[len] = {};
	res[len].t = new Date().getTime();
	res[len].exp = "" + "(" + num[0] + symbol_table[0] + num[1] + ")" + symbol_table[1] + num[2] + symbol_table[2] + num[3];
	res[len].value = c;
	if (c == 24)
	{
		var len2 = ret.length;
		ret[len2] = res[len];
	}
	//------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
	eval("var c = " + num[0] + symbol_table[0] + "(" + num[1] + symbol_table[1] + num[2] + ")" + symbol_table[2] + num[3]);
	var len = res.length;
	res[len] = {};
	res[len].t = new Date().getTime();
	res[len].exp = "" + num[0] + symbol_table[0] + "(" + num[1] + symbol_table[1] + num[2] + ")" + symbol_table[2] + num[3];
	res[len].value = c;
	if (c == 24)
	{
		var len2 = ret.length;
		ret[len2] = res[len];
	}
	//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	eval("var c = " + num[0] + symbol_table[0] + num[1] + symbol_table[1] + "(" + num[2] + symbol_table[2] + num[3] + ")");
	var len = res.length;
	res[len] = {};
	res[len].t = new Date().getTime();
	res[len].exp = "" + num[0] + symbol_table[0] + num[1] + symbol_table[1] + "(" + num[2] + symbol_table[2] + num[3] + ")";
	res[len].value = c;
	if (c == 24)
	{
		var len2 = ret.length;
		ret[len2] = res[len];
	}
	//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	eval("var c = " + "(" + num[0] + symbol_table[0] + num[1] + symbol_table[1] + num[2] + ")" + symbol_table[2] + num[3]);
	var len = res.length;
	res[len] = {};
	res[len].t = new Date().getTime();
	res[len].exp = "" + "(" + num[0] + symbol_table[0] + num[1] + symbol_table[1] + num[2] + ")" + symbol_table[2] + num[3];
	res[len].value = c;
	if (c == 24)
	{
		var len2 = ret.length;
		ret[len2] = res[len];
	}
	//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	eval("var c = " + num[0] + symbol_table[0] + "(" + num[1] + symbol_table[1] + num[2] + symbol_table[2] + num[3] + ")");
	var len = res.length;
	res[len] = {};
	res[len].t = new Date().getTime();
	res[len].exp = "" + num[0] + symbol_table[0] + "(" + num[1] + symbol_table[1] + num[2] + symbol_table[2] + num[3] + ")";
	res[len].value = c;
	if (c == 24)
	{
		var len2 = ret.length;
		ret[len2] = res[len];
	}
	//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	//Since the parenthesis affects only 6 cases, direct enumeration, I don't design algorithm.
	return {result:res,success_obj:ret,status:!!ret.length};
	
};
//JavaScript File END
//ECMAScript 6 Edition
