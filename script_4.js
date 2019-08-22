const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let i = 0;
let woodstock = [];
while (i < entrepreneurs.length)
{
	if (entrepreneurs[i].year < 1980 && entrepreneurs[i].year >= 1970)
	{
		woodstock.push(entrepreneurs[i]);
	}	
	i++;
}
console.log(woodstock);

i = 0;
let name_listing = [];
while (i < entrepreneurs.length)
{
	name_listing.push(entrepreneurs[i].first);
	name_listing.push(entrepreneurs[i].last);
	i++;
}
console.log(name_listing);

i = 0;
let actual_ages = [];
while (i < entrepreneurs.length)
{
	actual_ages.push(2019 - entrepreneurs[i].year)
	i++;
}

console.log(actual_ages);

const sorted_list = entrepreneurs;

function lastNameCompare(a,b)
{
	if (a.last < b.last)
	{
    return -1;
  }
	else if (a.last > b.last)
	{
    return 1;
	}
	else
	{
    return 0;
  }
}
sorted_list.sort(lastNameCompare);
console.log(sorted_list);