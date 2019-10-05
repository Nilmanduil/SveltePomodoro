import { writable } from 'svelte/store';

export const params = writable({
    longBreak: true,
    longBreakDuration: 10,
    breakDuration: 5,
    workDuration: 25,
    longBreakEveryNthBreak: 4
});