<script lang="ts">
    import { goto } from '$app/navigation';
    import Cookies from 'js-cookie';
    import {PUBLIC_APIPATH} from '$env/static/public'

    let userForm = {}
    let status : any
    let alert: any = ''
    let guestResponse : string = ''
    let user : any = Cookies.get('username')

    async function loginFunc(){
        try {
            let username = (document.getElementById('username') as HTMLInputElement).value
            let password = (document.getElementById('password') as HTMLInputElement).value
            userForm = {
                username: username,
                password: password
            }
            const res = await fetch(PUBLIC_APIPATH+'login_function.php', {
                method: 'POST',
                body:  JSON.stringify(userForm)                
            })
            status = await res.json()
            if (status['success'] == 1){
                Cookies.set('username', username, {expires: 7})
                Cookies.set('type', status['type'], {expires: 7})
                goto('/main')
            } else if (status['success'] == 0) {
                console.log(status)
                alert = status['message']
            }
        }catch (error){
            console.log(error)
        }
    }

    async function checkUser(){
        try {
            let guestUser = (document.getElementById('guest') as HTMLInputElement).value
            userForm = {
                username: guestUser
            }
            const res = await fetch(PUBLIC_APIPATH+'check_user.php', {
                method: 'POST',
                body:  JSON.stringify(userForm)                
            })
            let checkResp: any = await res.text()
            if (checkResp == 0){
                Cookies.set('username', guestUser, {expires: 7})
                goto('/main')
            } else {
                guestResponse = checkResp
            }
        }catch (error){
            console.log(error)
        }
    }

    function click(){
        let tab = document.getElementById('register')
        tab?.click()
    }

    function guestMode(){
        let guestUser = (document.getElementById('guest') as HTMLInputElement).value
        if (guestUser != null && guestUser != ''){
            checkUser()
        } else {
            guestResponse = 'Please fill the required field.'
        }
    }
</script>
<div class="signin">
    <h1>Login with your account</h1>
    <div class="input-container">
        <br><br>
        <div class="input-flex">
            <label for="username">Username</label>
            <br>
            <input type="text" name="username" id="username" placeholder="Enter username">
            <br><br>
            <label for="password">Password</label>
            <br>
            <input type="password" name="password" id="password" placeholder="Enter password">
        </div>
        <p style="color: red;">{alert}</p>
        <button on:click={loginFunc}>
            Log in
        </button>
        <p>or login without an account</p>
        <label for="guest"></label>
        <input type="text" name="guest" id="guest" placeholder="Enter username">
        <br>
        <p style="color: red;">{guestResponse}</p>
        <button on:click={guestMode}>
            Guest Mode
        </button>
        <p>No account yet? <a href="" on:click={click}>Register here</a></p>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto:wght@900&family=Ubuntu:wght@300&display=swap');
    .signin {
        display: flex;
        flex-direction: column;
    }
    .input-container {
        display: grid;
        justify-items: center;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }
    .input-flex > input {
        height: 1rem;
        width: 10rem;
    }
    h1 {
        font-size: 1.5rem;
        margin: auto;
        margin-top: 0.5rem;
        font-family: 'Ubuntu', sans-serif;
    }
    .input-container > button {
        all: unset;
        width: 10rem;
        text-align: center;
        border: 1px solid skyblue;
        border-radius: 1rem;
        height: 2rem;
        background-color: skyblue;
    }
    .input-container > button:hover {
        box-shadow: 0px 0px 10px skyblue;
    }
    @media (max-width: 468px){
        h1 {
        font-size: 1rem;
    }
    }
</style>