import { writable } from "svelte/store";

export const count = writable(0)
export const current_question = writable()
export const hp = writable(5)
export const comboCounter = writable(0)
export const time = writable(60)