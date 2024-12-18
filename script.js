//your JS code here. If required.
//your JS code here. If required.
//your JS code here. If required.
// const arr = [1,2,3,4];
const output = document.getElementById("output");

const promise1 =() => {
		return new Promise((res => {
		setTimeout(() => {
			const numbers = [1,2,3,4]
			res(numbers);
		}, 3000)
	}))
} 

const promise2 =(numbers) => {
	return new Promise(res => {
		setTimeout(() => {
			const evenNumbers = numbers.filter(item => item%2 === 0);
			output.innerHTML = `${[...evenNumbers]}`
			res(evenNumbers);
		}, 1000)
	} )
}

const promise3 =(evenNumbers) => {
	return new Promise(res => {
		setTimeout(() => {
			const multiEvenNumbers = evenNumbers.map(item => item*2);
			output.innerHTML = `${[...multiEvenNumbers]}`
			res(multiEvenNumbers);
		}, 2000)
	} )
}


promise1()
	.then((numbers) => promise2(numbers))
	.then((evenNumbers) => promise3(evenNumbers))
	.catch((err) => {output.innerHTML = `${error}`})
