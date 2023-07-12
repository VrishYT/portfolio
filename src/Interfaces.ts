export interface musicProject {
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
}