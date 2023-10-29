import { persisted } from 'svelte-local-storage-store';

export const theme = persisted('theme', {
	current: 'light'
});

export const lang = persisted('lang', {
	current: 'en'
});
