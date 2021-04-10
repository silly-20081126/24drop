#include <stdio.h>
//#include "24drop.h"
//This code must be compiled on the compiler which support C90
//Copyright (c) (pig-cmd silly-20081126 cdn2021) 2021
//Content: fat-pig-2020@outlook.com
//Server: Microsoft GitHub
//Watch our project: https://github.com/pig-cmd/24drop
//Version 1.0  Apr.4,2021
//Author Yichen Xu , Hugang Li
//It is prohibited for commercial use
int calc(int,int,int,int);
int make_symbol(int,int,int,int);
int calc24(int *,int *);
/*
#ifdef EXP1
	#undef EXP1
#endif
#ifdef EXP2
	#undef EXP2
#endif
#ifdef EXP3
	#undef EXP3
#endif
#ifdef EXP4
	#undef EXP4
#endif
#ifdef EXP5
	#undef EXP5
#endif
#ifdef EXP6
	#undef EXP6
#endif


#define EXP1(a,s1,b,s2,c,s3,d) ((a) ## s1 ## (b) ## s2 ## (c) ## s3 ## (d))
#define EXP2(a,s1,b,s2,c,s3,d) (((a) ## s1 ## (b)) ## s2 ## (c) ## s3 ## (d))
#define EXP3(a,s1,b,s2,c,s3,d) ((a) ## s1 ## ((b) ## s2 ## (c)) ## s3 ## (d))
#define EXP4(a,s1,b,s2,c,s3,d) ((a) ## s1 ## (b) ## s2 ## ((c) ## s3 ## (d)))
#define EXP5(a,s1,b,s2,c,s3,d) (((a) ## s1 ## (b) ## s2 ## (c)) ## s3 ## (d))
#define EXP6(a,s1,b,s2,c,s3,d) ((a) ## s1 ## ((b) ## s2 ## (c) ## s3 ## (d)))
*/
int main(void)
{
	printf("Copyright pig-cmd silly-20081126 cdn2021\nContect: fat-pig-2020@outlook.com\nOut project:https://github.com/pig-cmd/24drop\nVersion 1.0  Apr.4,2021\nAuthor Yichen Xu , Hugang Li\n\n\n\n");
	while(1)
	{
		//Repeating.
		printf("Please enter four numbers to calculate 24 points\nEnter a non-number to exit\nInput:");
		int a,b,c,d;
		if (scanf("%d %d %d %d",&a,&b,&c,&d) == 4)
		{
			if (calc(a,b,c,d))
			{
				printf("Success.\n\n");
			} else {
				printf("Failure.\n\n");
			};
			
		} else {
			char ch;
			char c;
			printf("\n\n\nExit? (Y/N) Default:Y\nInput:");
			while ((c = getchar()) != 10)
			{
				continue;
			};
			scanf("%c",&ch);
			if (ch != 78)
			{
				break;
			};
			printf("\n\n\n");
			
		};
	};
	return 0;
};
int calc(int a,int b,int c,int d) 
{
	short i[4] = {0,0,0,0};
	int arr[4] = {a,b,c,d};
	short bo = 0;
	while (i[0] < 4)
	{
		i[1] = 0;
		while (i[1] < 4)
		{
			if (i[1] >= 4)
			{
				i[1] = 0;
			};
			if (i[1] == i[0])
			{
				i[1]++;
				continue;
			};
			i[2] = 0;
			while (i[2] < 4)
			{
				if (i[2] >= 4)
				{
					i[2] = 0;
				};
				if ((i[2] == i[1]) || (i[2] == i[0]))
				{
					i[2]++;
					continue;
				};
				i[3] = 0;
				if (i[3] == i[0])
				{
					i[3]++;
				};
				if (i[3] == i[1])
				{
					i[3]++;
				};
				if (i[3] == i[2])
				{
					i[3]++;
				};	
				if(make_symbol(arr[i[0]],arr[i[1]],arr[i[2]],arr[i[3]]))
				{
					bo = 1;
				};	
				i[2]++; 					
			};
			i[1]++;
		};
		i[0]++;
	};
	return bo;
};
int make_symbol(int a,int b,int c,int d)
{
	int arr[4] = {a,b,c,d};
	int sym[4] = {0,0,0,0};
	int ret;
	while (sym[0] < 4)
	{
		sym[1] = 0;
		while (sym[1] < 4)
		{
			sym[2] = 0;
			while (sym[2] < 4)
			{
				sym[3] = 0;
				while (sym[3] < 4)
				{
					ret = calc24(arr,sym);
					sym[3]++;
				};
				sym[2]++;
			};
			sym[1]++;
		};
		sym[0]++;
	};
	return ret;
};
int calc24(int * num,int * symbol_table)
{
   int * num_ptr = num;
   int * symbol_table_ptr = symbol_table;
   int ret,i = 0;
   ret = 0;
   
	return ret;
};
