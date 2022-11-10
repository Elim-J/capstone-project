import Icon1 from '../../images/svg-1.svg'
export const data = [
	{
		title: 'Bubble Sort',
		description:
			'Bubble Sort works by repeatedly swapping the adjacent elements if they are in the wrong order.',
		image: Icon1,
		link: '/bubblesort',
	},
	{
		title: 'Quick Sort ',
		description: 'Quicksort is a fast sorting algorithm that works by splitting a large array of data into smaller sub-arrays.',
		image: Icon1,
		link: '/bubblesort',
	},
	{
		title: 'Insert Sort',
		description: 'Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons.',
		image: Icon1,
		link: '/bubblesort',
	},
	{
		title: 'BFS Pathfinding',
		description: 'Breadth First Search is guaranteed to find the shortest path from a start node to an end node if such path exists.',
		image: Icon1,
		link: '/bubblesort',
	},
	{
		title: 'Dijkstra Pathfinding',
		description: "Dijkstra's Algorithm finds the shortest path between a given node and all other nodes in a graph.",
		image: Icon1,
		link: '/bubblesort',
	},
	{
		title: 'aStar Pathfinding',
		description: 'A* Search Algorithm can be used to find the optimal path between two nodes in a graph.',
		image: Icon1,
		link: '/bubblesort',
	},
	{
		title: 'Meet in the Middle BFS Pathfinding',
		description: 'Mitm finds the shortest path between a start node and the closest end node.',
		image: Icon1,
		link: '/bubblesort',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};