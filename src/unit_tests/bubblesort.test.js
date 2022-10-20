import {bubbleSort} from '../components/visualizers/sorting/bubblesort'

test('bubble sort []', () => {
  expect(bubbleSort([])).toStrictEqual([
    [
      {
        hasSwapped: false,
        thisPass: 1,
        message: 'Iterating over array',
        code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
      }
    ],
    [
      {
        hasSwapped: false,
        thisPass: 1,
        message: 'Finished',
        code: 'return arr;'
      }
    ]
  ]);
});

test('bubble sort [1]', () => {
    expect(bubbleSort([1])).toStrictEqual([
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 1, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Finished',
            code: 'return arr;'
          },
          { val: 1, color: 'red' }
        ]
      ]);
});

test('bubble sort [1,1]', () => {
    expect(bubbleSort([1,1])).toStrictEqual([
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 1, color: 'red' },
          { val: 1, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Checking 1 < 1 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 1, color: 'blue' },
          { val: 1, color: 'blue' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Finished',
            code: 'return arr;'
          },
          { val: 1, color: 'red' },
          { val: 1, color: 'red' }
        ]
      ]);
});

test('bubble sort [1,2]', () => {
    expect(bubbleSort([1,2])).toStrictEqual([
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 1, color: 'red' },
          { val: 2, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Checking 2 < 1 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 1, color: 'blue' },
          { val: 2, color: 'blue' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Finished',
            code: 'return arr;'
          },
          { val: 1, color: 'red' },
          { val: 2, color: 'red' }
        ]
      ]);
});

test('bubble sort [2,1]', () => {
    expect(bubbleSort([2,1])).toStrictEqual([
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 1, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Checking 1 < 2 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'blue' },
          { val: 1, color: 'blue' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Swapped 2 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 1, color: 'blue' },
          { val: 2, color: 'blue' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 2,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 1, color: 'red' },
          { val: 2, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 2,
            message: 'Finished',
            code: 'return arr;'
          },
          { val: 1, color: 'red' },
          { val: 2, color: 'red' }
        ]
      ]);
});

test('bubble sort [3,2,1]', () => {
    expect(bubbleSort([3,2,1])).toStrictEqual([
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 3, color: 'red' },
          { val: 2, color: 'red' },
          { val: 1, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Checking 2 < 3 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 3, color: 'blue' },
          { val: 2, color: 'blue' },
          { val: 1, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Swapped 3 and 2',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 2, color: 'blue' },
          { val: 3, color: 'blue' },
          { val: 1, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Checking 1 < 3 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 3, color: 'blue' },
          { val: 1, color: 'blue' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Swapped 3 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 2, color: 'red' },
          { val: 1, color: 'blue' },
          { val: 3, color: 'blue' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 2,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 1, color: 'red' },
          { val: 3, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 2,
            message: 'Checking 1 < 2 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'blue' },
          { val: 1, color: 'blue' },
          { val: 3, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Swapped 2 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 1, color: 'blue' },
          { val: 2, color: 'blue' },
          { val: 3, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 3,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 1, color: 'red' },
          { val: 2, color: 'red' },
          { val: 3, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 3,
            message: 'Finished',
            code: 'return arr;'
          },
          { val: 1, color: 'red' },
          { val: 2, color: 'red' },
          { val: 3, color: 'red' }
        ]
      ]);
});

test('bubble sort [7,6,7,10,2,9,7,6,1,10]', () => {
    expect(bubbleSort([7,6,7,10,2,9,7,6,1,10])).toStrictEqual([
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 10, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 1,
            message: 'Checking 6 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 7, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 10, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Swapped 7 and 6',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 10, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Checking 7 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 10, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Checking 10 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 10, color: 'blue' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Checking 2 < 10 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 10, color: 'blue' },
          { val: 2, color: 'blue' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Swapped 10 and 2',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'blue' },
          { val: 10, color: 'blue' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Checking 9 < 10 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 10, color: 'blue' },
          { val: 9, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Swapped 10 and 9',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'blue' },
          { val: 10, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Checking 7 < 10 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Swapped 10 and 7',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 10, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Checking 6 < 10 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 10, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Swapped 10 and 6',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 10, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Checking 1 < 10 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 10, color: 'blue' },
          { val: 1, color: 'blue' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Swapped 10 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'blue' },
          { val: 10, color: 'blue' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 1,
            message: 'Checking 10 < 10 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'blue' },
          { val: 10, color: 'blue' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 2,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 2,
            message: 'Checking 7 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 2,
            message: 'Checking 7 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 2, color: 'red' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 2,
            message: 'Checking 2 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 2, color: 'blue' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Swapped 7 and 2',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 9, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Checking 9 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 9, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Checking 7 < 9 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Swapped 9 and 7',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 9, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Checking 6 < 9 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Swapped 9 and 6',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 9, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Checking 1 < 9 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 9, color: 'blue' },
          { val: 1, color: 'blue' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Swapped 9 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'blue' },
          { val: 9, color: 'blue' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 2,
            message: 'Checking 10 < 9 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 9, color: 'blue' },
          { val: 10, color: 'blue' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 3,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 3,
            message: 'Checking 7 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 3,
            message: 'Checking 2 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 2, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 3,
            message: 'Swapped 7 and 2',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 2, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 3,
            message: 'Checking 7 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 3,
            message: 'Checking 7 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 3,
            message: 'Checking 6 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 3,
            message: 'Swapped 7 and 6',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 3,
            message: 'Checking 1 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 1, color: 'blue' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 3,
            message: 'Swapped 7 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 6, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 3,
            message: 'Checking 9 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 9, color: 'blue' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 4,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 6, color: 'red' },
          { val: 2, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 4,
            message: 'Checking 2 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 6, color: 'blue' },
          { val: 2, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 4,
            message: 'Swapped 6 and 2',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 2, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 4,
            message: 'Checking 7 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 4,
            message: 'Checking 7 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 4,
            message: 'Checking 6 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 4,
            message: 'Swapped 7 and 6',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 4,
            message: 'Checking 1 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 1, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 4,
            message: 'Swapped 7 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 4,
            message: 'Checking 7 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 5,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 5,
            message: 'Checking 6 < 2 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 5,
            message: 'Checking 7 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 5,
            message: 'Checking 6 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 5,
            message: 'Swapped 7 and 6',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 5,
            message: 'Checking 1 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 1, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 5,
            message: 'Swapped 7 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 5,
            message: 'Checking 7 < 7 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 6,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 6,
            message: 'Checking 6 < 2 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 6,
            message: 'Checking 6 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 6,
            message: 'Checking 1 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 1, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 6,
            message: 'Swapped 6 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 6,
            message: 'Checking 7 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 7,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 1, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 7,
            message: 'Checking 6 < 2 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 1, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 7,
            message: 'Checking 1 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 1, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 7,
            message: 'Swapped 6 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 2, color: 'red' },
          { val: 1, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 7,
            message: 'Checking 6 < 6 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 1, color: 'red' },
          { val: 6, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 8,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 2, color: 'red' },
          { val: 1, color: 'red' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 8,
            message: 'Checking 1 < 2 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 2, color: 'blue' },
          { val: 1, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 8,
            message: 'Swapped 2 and 1',
            code: 'int swap = arr[i];\narr[i] = arr[i + 1];\narr[i + 1] = swap;'
          },
          { val: 1, color: 'blue' },
          { val: 2, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: true,
            thisPass: 8,
            message: 'Checking 6 < 2 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 1, color: 'red' },
          { val: 2, color: 'blue' },
          { val: 6, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 9,
            message: 'Iterating over array',
            code: 'for (int i = 0; i < arr.length - i; i++){\n   ... \n}'
          },
          { val: 1, color: 'red' },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 9,
            message: 'Checking 2 < 1 ?',
            code: 'if (arr[i + 1] < arr[i]) {\n   ... \n}'
          },
          { val: 1, color: 'blue' },
          { val: 2, color: 'blue' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ],
        [
          {
            hasSwapped: false,
            thisPass: 9,
            message: 'Finished',
            code: 'return arr;'
          },
          { val: 1, color: 'red' },
          { val: 2, color: 'red' },
          { val: 6, color: 'red' },
          { val: 6, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 7, color: 'red' },
          { val: 9, color: 'red' },
          { val: 10, color: 'red' },
          { val: 10, color: 'red' }
        ]
      ]);
});

// test('bubble sort []', () => {
//     expect(bubbleSort([])).toBe();
// });