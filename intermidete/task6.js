// Check for Anagram: Write a function that checks whether two strings are anagrams of each other.
const areAnagrams = (str1, str2) => {
    const sortString = (str) => str.toLowerCase().split('').sort().join('');
    return sortString(str1) === sortString(str2);
};

const string1 = "listen";
const string2 = "silent";
console.log(`Are "${string1}" and "${string2}" anagrams? ${areAnagrams(string1, string2)}`);
