// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let rev = ''

    for (x of str){
        rev = x + rev
        debugger
    }

    return rev
}

reverse("anjing")
module.exports = reverse;
