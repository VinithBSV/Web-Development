function isPalindrome() {
    const val = document.getElementById("text-input").value;
    const ans = document.getElementById("result");
    if (val === "") {
        ans.textContent = `Enter a word to check...`;
    } else {
        const copy = val.toLowerCase();
        const revstr = copy.split('').reverse().join('');

        if (revstr === copy) {
            ans.textContent = `${val} is a Palindrome word.`;
            ans.style.color = "green";

        }
        else {
            ans.textContent = `${val} is not a Panlindrome word.`;
            ans.style.color = "red";
        }
    }

}