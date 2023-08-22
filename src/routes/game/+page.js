/** @type {import('./$types').PageLoad} */
import Cookies from 'js-cookie';
export const ssr = false
export function load() {
    return {
        post: {
            cookie: Cookies.get('game_session')
        }
    };
}