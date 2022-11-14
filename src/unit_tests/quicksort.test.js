import {quicksort} from '../components/visualizers/sorting/quicksort'

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