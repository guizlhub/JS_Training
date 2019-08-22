num = prompt("De quel nombre veut tu calculer la factorielle ?");

let fact = 1;
for(let count = 1; count <=num; count++)
{ 
	fact*= count;
} 
console.log(`Le résultat est : ${fact}`);