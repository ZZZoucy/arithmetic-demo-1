let sort = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i++) {
        let index = minIndex(numbers.slice(i)) + i;
        if (index !== i) {
            swap(numbers, index, i);
        }
    }
    return numbers;
};

let swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

let minIndex = (numbers) => {
    let index = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < numbers[index]) {
            index = i;
        }
    }
    return index;
};

console.log(sort.call(null, [12, 4, 2, 6, 8, 19, 3]));
