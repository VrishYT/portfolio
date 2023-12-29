export interface CodingProject {
	timestamp: Date;
	title: string;
	subtitle: string;
	img: string;
	desc: string;
	tags: string[];
	stack: TechType[];
}

export enum TechType {
	JAVA,
	SCALA,
	TYPESCRIPT,
	PYTHON,
	CPP
}