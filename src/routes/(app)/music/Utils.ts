export interface MusicProject {
    title: string;
    img: string;
    links: {
        spotify: string | undefined;
        soundcloud: string | undefined;
        youtube: string | undefined;
    };
    dateCreated: Date;
    tags: string[];
    visible: boolean;
    type: MusicProjectType;
}

export enum MusicProjectType {
    RELEASE = " ",
    wip = "WIP",
    ID = "ID",
    UR = "Flip"
}