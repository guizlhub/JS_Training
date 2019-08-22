size = prompt("Une taille de pyramide please?");

let i = 0;
let j = 1;
let pyramide = "";
while(i < size) 
{
	while (j <= size)
	{
		if (j < size -i)
		{
			pyramide += " ";
		}	
		else
		{
			pyramide += "#";
		}
		j += 1;
	}
	j = 1;
	i += 1;
	pyramide += "\n"
}
console.log(pyramide);
