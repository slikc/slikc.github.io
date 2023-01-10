$( document ).ready(async function() {
	await typeSentence("hi!, im slikc, a dev from the uk", "#typetext");
});

async function typeSentence(sentence, eleRef, delay = 50) {
	const letters = sentence.split("");
	let i = 0;
  
	while(i < letters.length) {
		await waitForMs(delay);
		$(eleRef).append(letters[i]);
		i++
	}
  
	return;
}


function waitForMs(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
