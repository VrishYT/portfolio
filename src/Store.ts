import { writable } from "svelte/store";
import type { musicProject } from "./Interfaces";

export const musicProjectsStore = writable(new Map<string, musicProject>()); 