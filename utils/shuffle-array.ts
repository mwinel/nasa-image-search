/**
 * shuffles an array randomly
 * @param {Array} array
 */
 export const shuffleArray = (arr: any) => {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
};
