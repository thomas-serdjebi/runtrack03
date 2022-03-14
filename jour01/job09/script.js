var numbers = [
    11,
    22,
    33,
    44,
    55,
    66,
    77,
    88,
    99,
    111,
    222,
    333,
    444,
    555,
    666,
    777,
    888,
    999,
];





function tri(numbers, order) {
    if (order == "ASC") {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    let temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }

    } else if (order == "DESC") {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] < numbers[j + 1]) {
                    let temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }
    }
    return numbers;
}



console.log(tri(numbers, "DESC"));