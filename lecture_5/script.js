const initialString = 'i dont understand some notes';
//const pos = InitialString.indexOf('n');
searchSubstring(initialString, 'n');
console.log(searchSubstring);

/**
 * Task 2. Searching substrings
 */

 function searchSubstringIndex(initialString, searchingSubstring) {
  const index = initialString.indexOf(searchingSubstring);

  if (index === -1) {
    console.log(`There is not "${searchingSubstring}" in the initial string.`);
  } else {
    console.log(index);
  }
}

searchSubstringIndex (initialString, 'world'); // 6;
searchSubstringIndex (initialString, 'cat'); // There is not 'cat' in the initial string.;


/**
 * Task 3. Substrings amount
 */

function searchSubstringAmount(initialString, searchingSubstring) {
  const arraySplittedBySearch = initialString.split(searchingSubstring);

  const arrayLength = arraySplittedBySearch.length;

  const count = arrayLength - 1;

  if (count === 0) {
    console.log(`There is not "${searchingSubstring}" in the initial string.`);
  } else {
    console.log(count);
  }
}

searchSubstringAmount (initialString, 'world'); // 1;
searchSubstringAmount (initialString, 'o'); // 2;
searchSubstringAmount (initialString, 'l'); // 3;
searchSubstringAmount (initialString, 'cat'); // There is not 'cat' in the initial string.;