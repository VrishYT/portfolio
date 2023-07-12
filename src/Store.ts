import { writable } from "svelte/store";
import type { MusicProject } from "./routes/(app)/music/Utils";

export const musicProjectsStore = writable(new Map<string, MusicProject>()); 

