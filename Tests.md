Describe: mainCount()

test: "it should count from 0 to the user's input number"
code: mainCount(5)
expected output: 0, 1, 2, 3, 4, 5

test: "it should split counter numbers into an array"
code: mainCount(5)
expected output: [0, 1, 2, 3, 4, 5]

test: "it should replace the number "1" with the string "beep", "2" with "boop", and "3" with "won't you be my neighbor".
code: array: [0, 1, 2, 3, 4, 5]
expected output: array [0, beep, boop, won't you be my neighbor, 4, 5]

test: "it should identify if a multi-digit number contains a 1"
code: "3415"
expected output: true


