var chaine1 = "CCGUCGUUGCGCUACAGC";
var chaine2 = "CCUCGCCGGUACUUCUCG"

function read_codon(a)
{
	return a.slice(0, 3);
}

function remove_codon(a)
{
	return a.slice(3);
}

function read_protein(a)
{
	let x =
	{
		"UCU":"Serine","UCC":"Serine","UCA":"Serine","UCG":"Serine","AGU":"Serine","AGC":"Serine",
		"CCU":"Proline","CCC":"Proline","CCA":"Proline","CCG":"Proline",
		"CGU":"Arginine","CGC":"Arginine","CGA":"Arginine","CGG":"Arginine","AGA":"Arginine","AGG":"Arginine",
		"UUA":"Leucine","UUG":"Leucine",
		"UUU":"Phénylalanine","UUC":"Phénylalanine",
		"UAU":"Tyrosine","UAC":"Tyrosine"
	};
	let verbose_chaine = [];
	while (a !== "")
	{
		let codon = ""; 
		codon = read_codon(a);
		verbose_chaine.push(x[codon]);
		a = remove_codon(a);
	}
	return verbose_chaine;
}
console.log(read_protein(chaine1));
console.log(read_protein(chaine2));