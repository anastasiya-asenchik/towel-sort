// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) return [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 1) {
            result = result.concat(matrix[i].reverse());
        } else
            result = result.concat(matrix[i]);
    }
    return result;
}
