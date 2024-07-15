/*
	1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.
 
	2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
	
	3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false
*/ 

function fishBash (number) {
	for (let i = 1; i <= number; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			console.log("fish bash");
		} else if(i % 3 === 0) {
			console.log("fish");
		} else if(i % 5 === 0) {
			console.log("bash");
		}
	}
}

fishBash(15)

function sortingArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if(arr[i] < arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

console.log(sortingArray([2, 1, 3, 5, 4]))
console.log(sortingArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sortingArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(sortingArray([45, 32, 21, 11, 6, 3, 1, -1, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]))


function palindrome(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  
  if(string === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("katak"))
console.log(palindrome("jambu"))