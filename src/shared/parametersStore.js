import { writable } from 'svelte/store';

export const defaultValues = {
    longBreak: true,
    longBreakDuration: 10,
    breakDuration: 5,
    workDuration: 25,
    longBreakEveryNthBreak: 4
};
export const params = writable(defaultValues);