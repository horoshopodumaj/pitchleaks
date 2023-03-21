import { IPhilanthropistType } from '../../type/philanthropist-type';

export function chunkArray(arr: IPhilanthropistType[], size: number): IPhilanthropistType[][] {
	const result = [];

	for (let i = 0; i < Math.ceil(arr.length / size); i++) {
		result.push(arr.slice(i * size, i * size + size));
	}

	return result;
}
