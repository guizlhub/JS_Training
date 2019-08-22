while(true)
{
	let word = prompt('Parle a ton ado');
	if(word === null)
		break;
	if (word === "")
		console.log("t'es en PLS ?");
	else if(word.slice(-1) === '?')
		console.log("Ouais Ouais...");
	else if(word === word.toUpperCase())
		console.log("Pwa, calme-toi...");
	else
		console.log("balek.");
	word = null;
}