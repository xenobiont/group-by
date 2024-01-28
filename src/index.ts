type Id = string | number;

type ById<T> = Map<Id, T>;

function groupById<T extends { id: Id }>(items: T[]): ById<T> {
	const map = new Map<Id, T>();

	items.forEach((item) => {
		map.set(item.id, item);
	});

	return map;
}

const items = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Mary' },
];

// @ts-expect-error
const itemsById = groupById([{ name: 'Joe' }]);

const itemsById2 = groupById([{ id: 1, name: 'Joe' }]);
const itemsById3 = groupById([{ id: '1', name: 'Joe' }]);
const itemsById4 = groupById([{ id: '1', name: 'Joe', surname: 'Doe' }]);

type MapByKey<T, K extends keyof T> = Map<T[K], T[]>;

function groupByKey<T, K extends keyof T>(items: T[], key: K): MapByKey<T, K> {
	const map = new Map<T[K], T[]>();

	items.forEach((item) => {
		const collection = map.get(item[key]);

		if (collection) {
			collection.push(item);
		} else {
			map.set(item[key], [item]);
		}
	});

	return map;
}

const items2 = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Mary' },
];

const itemsByKey = groupByKey(items2, 'name');
// @ts-expect-error
const itemsByKey2 = groupByKey([{ name: 'Joe' }], 'id');

const itemsByKey3 = groupByKey(
	[{ id: '1', name: 'Joe', surname: 'Doe' }],
	'name',
);
