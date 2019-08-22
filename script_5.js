const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
rent_for_everybody = true;
for (let index = 0; index < books.length; index++)
{
	rent_for_everybody = rent_for_everybody && (books[index].rented > 0);
}
console.log(rent_for_everybody);

const sorted_list = books;

function rentCompare(a,b)
{
	if (a.rented < b.rented)
	{
    return -1;
  }
	else if (a.rented > b.rented)
	{
    return 1;
	}
	else
	{
    return 0;
  }
}

sorted_list.sort(rentCompare);

console.log(sorted_list[0]);

function book_id(a)
{
	let v = 873495;
	if(a.id == v)
	{
		return(true);
	}
	else
		return(false);
}
console.log(books.find(book_id));

console.log(books);
let i = 0
while(i < books.length)
{
	if (books[i].id === 133712)
		books.splice(i,1);
	i++;
}
console.log(books);

function titleCompare(a,b)
{
	if (a.title < b.title)
	{
    return -1;
  }
	else if (a.title > b.title)
	{
    return 1;
	}
	else
	{
    return 0;
  }
}
books.sort(titleCompare);
console.log(books);