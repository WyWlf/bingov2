/** @type {import('./$types').PageLoad} */
import { PUBLIC_APIPATH } from '$env/static/public';
export async function load({ url }) {
    const user = url.searchParams.get('user')
    let info: any = []
    async function loadMatches(){
        const sql = await fetch(
            PUBLIC_APIPATH+'retrieve_matches.php',
            {
                method: 'POST',
                body: JSON.stringify({data: user})
            }
        )
        info = await sql.json()
        return info;
     }
     return {
        post : loadMatches()
     }
}
export const ssr = false