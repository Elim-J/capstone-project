import { bfs } from "../components/visualizers/pathfinding/bfs";

test("bfs simple case 1", () => {
  expect(
    bfs([
      [{ isStart: true, isEnd: false, isBlocked: false, isExplored: false }],
      [{ isStart: false, isEnd: true, isBlocked: false, isExplored: false }],
    ])
  ).toStrictEqual([
    [
      {
        cols: 1,
        highlightCode: [],
        message: "Starting bfs algorithm...",
        path: null,
        rows: 2,
      },
      [{ isBlocked: false, isEnd: false, isExplored: false, isStart: true }],
      [{ isBlocked: false, isEnd: true, isExplored: false, isStart: false }],
    ],
    [
      {
        cols: 1,
        highlightCode: [],
        message: "Visiting node below",
        path: null,
        rows: 2,
      },
      [{ isBlocked: false, isEnd: false, isExplored: true, isStart: true }],
      [{ isBlocked: false, isEnd: true, isExplored: true, isStart: false }],
    ],
    [
      {
        cols: 1,
        highlightCode: [],
        message: "Returning path",
        path: [
          { column: 0, row: 0 },
          { column: 0, row: 1 },
        ],
        rows: 2,
      },
      [{ isBlocked: false, isEnd: false, isExplored: true, isStart: true }],
      [{ isBlocked: false, isEnd: true, isExplored: true, isStart: false }],
    ],
  ]);
});

test("bfs difficult case 1", () => {
  expect(
    bfs([
      [
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: true, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
      ],
      [
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
      ],
      [
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: true, isBlocked: false, isExplored: false },
      ],
    ])
  ).toStrictEqual([
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Starting bfs algorithm...",
        path: null,
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Visiting node to the left",
        path: null,
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Visiting node below",
        path: null,
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Visiting node to the right",
        path: null,
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Visiting node below",
        path: null,
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Visiting node below",
        path: null,
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Visiting node to the right",
        path: null,
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Visiting node below",
        path: null,
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Visiting node to the right",
        path: null,
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: true, isStart: false },
      ],
    ],
    [
      {
        cols: 3,
        highlightCode: [],
        message: "Returning path",
        path: [
          { column: 1, row: 0 },
          { column: 1, row: 1 },
          { column: 1, row: 2 },
          { column: 2, row: 2 },
        ],
        rows: 3,
      },
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: true, isStart: false },
      ],
    ],
  ]);
});

test("bfs difficult case 2", () => {
  expect(
    bfs([
      [
        { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
        { isStart: true, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
      ],
      [
        { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
      ],
      [
        { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
      ],
      [
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
        { isStart: false, isEnd: true, isBlocked: false, isExplored: false },
      ],
    ])
  ).toStrictEqual([
    [
      {
        cols: 4,
        highlightCode: [],
        message: "Starting bfs algorithm...",
        path: null,
        rows: 4,
      },
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 4,
        highlightCode: [],
        message: "Visiting node to the right",
        path: null,
        rows: 4,
      },
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 4,
        highlightCode: [],
        message: "Visiting node to the right",
        path: null,
        rows: 4,
      },
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 4,
        highlightCode: [],
        message: "Visiting node below",
        path: null,
        rows: 4,
      },
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 4,
        highlightCode: [],
        message: "Visiting node below",
        path: null,
        rows: 4,
      },
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: false, isStart: false },
      ],
    ],
    [
      {
        cols: 4,
        highlightCode: [],
        message: "Visiting node below",
        path: null,
        rows: 4,
      },
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: true, isStart: false },
      ],
    ],
    [
      {
        cols: 4,
        highlightCode: [],
        message: "Returning path",
        path: [
          { column: 1, row: 0 },
          { column: 2, row: 0 },
          { column: 3, row: 0 },
          { column: 3, row: 1 },
          { column: 3, row: 2 },
          { column: 3, row: 3 },
        ],
        rows: 4,
      },
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: true },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: true, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: true, isStart: false },
      ],
      [
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: false, isExplored: false, isStart: false },
        { isBlocked: false, isEnd: true, isExplored: true, isStart: false },
      ],
    ],
  ]);
});

// test('bfs simple case 3', () => {
//     expect(bfs()).toStrictEqual();
// });
