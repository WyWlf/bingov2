import { readonly, writable } from "svelte/store";

export const count = writable(0)
export const current_question = writable()
export const hp = writable(5)
export const comboCounter = writable(0)
export const time = writable(60)
export const win = writable([
    ['a0','a1','a2','a3','a4'],
    ['b5','b6','b7','b8','b9'],
    ['c10','c11','c12','c13','c14'],
    ['d15','d16','d17','d18','d19'],
    ['e20','e21','e22','e23','e24'],

    ['a0', 'b5', 'c10', 'd15', 'e20'],
    ['a1', 'b6', 'c11', 'd16', 'e21'],
    ['a2', 'b7', 'c12', 'd17', 'e22'],
    ['a3', 'b8', 'c13', 'd18', 'e23'],
    ['a4', 'b9', 'c14', 'd19', 'e24'],

    ['a0', 'b6', 'c12', 'd18', 'e24'],
    ['a4', 'b8', 'c12', 'd16', 'e20'],
])

export const answer_matrix = writable([])
export const win_status = writable(0)
export const correct_count = writable(0)
export const wrong_count = writable(0)
export const bonus_hp = writable(0)
export const max = writable(24)
export const trigger = writable(false)
export const multiplayer = writable(false)
export const game_start = writable(false)
export const gameInfo = writable([])
export const scores = writable([])