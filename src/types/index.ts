export type Photo = {
	name: string;
	url: string;
	width: number;
	height: number;
};

export type Shop = {
	id: string;
	name?: string;
	photos?: Photo[];
};