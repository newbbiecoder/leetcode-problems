var lengthOfLongestSubstring = function(s) {
    let formedWords = [];
    let letter = [];
    for(let j = 0; j < s.length; j++) {
        for(let i = j; i < s.length; i++) {
            if(letter.includes(s[i])) {
                formedWords.push(letter.join(''))
                letter.length = 0;
                break;
            };
            letter.push(s[i]);
        }
    }
    if(s.length === 0) return 0;
    if(s.length === 1) return 1;
    const longestSubstringLength = Math.max(...formedWords.map(el => el.length));

    return longestSubstringLength;
    
}

console.log(lengthOfLongestSubstring('abcabcbb'));