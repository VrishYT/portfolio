export interface CodingProject {
	timestamp: Date;
	title: string;
	subtitle: string;
	img: string;
	desc: string;
	tags: string[];
	stack: TechType[];
	links: { label: string; url: string }[];
	collaborators: string[];
}

export interface IncomingCodingProject extends CodingProject {
	id: string;
}

export enum TechType {
	JAVA,
	SCALA,
	TYPESCRIPT,
	PYTHON,
	CPP
}
