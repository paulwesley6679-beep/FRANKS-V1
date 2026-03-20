// shuffle.js

/**
 * Safely shuffle an array (FIsher-Yates alogrithms)
 * @param {Array} array
 * @returns {Array} new shuffled array
 */
function shuffleArray(array) {
    const newArray = [...array]; // clone to avoid mutating original

    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        //swap elements
        [newArray [i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}