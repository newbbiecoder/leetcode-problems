function isPalindrome(str) {
    let l = 0, r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
}

var longestPalindrome = function(s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const word = s.slice(i, j);
            console.log(word)
            if (isPalindrome(word) && word.length > longest.length) {
                longest = word;
            }
        }
        
    }
    return longest;
};


console.log(longestPalindrome("babd"));