<script lang="ts">
    import { goto } from '$app/navigation';
    import Cookies from 'js-cookie';
    import {PUBLIC_APIPATH} from '$env/static/public'
    let userForm = {}
    let status : any = ''
    async function register(){
        try {
            let username = (document.getElementById('username') as HTMLInputElement).value
            let password = (document.getElementById('password') as HTMLInputElement).value
            let selection = (document.getElementById('selection') as HTMLInputElement).value
            userForm = {
                username: username,
                password: password,
                selection: selection
            }
            const check = await fetch(PUBLIC_APIPATH+'check_user.php', {
                method: 'POST',
                body:  JSON.stringify({username: username})                
            })
            let response: any = await check.text()

            if (response == 0){
                const res = await fetch(PUBLIC_APIPATH+'register.php', {
                    method: 'POST',
                    body:  JSON.stringify(userForm)                
                })
                status = await res.text()
            } else {
                status = response
            }
        }catch (error){
            console.log(error)
        }
    }

    function click(){
        let tab = document.getElementById('signin')
        tab?.click()
    }
</script>
<div class="signin">
    <h1>Register account</h1>
    <div class="input-container">
        <div class="input-flex">
            <label for="username">Your Username</label>
            <br>
            <input type="text" name="username" id="username">
            <br><br>
            <label for="password">Password</label>
            <br>
            <input type="password" name="password" id="password">
            <br><br>
            <label for="selection">Account type:</label>
            <select name="selection" id="selection">
                <option selected value="Student">Student</option>
                <option value="Teacher">Teacher</option>
            </select>
        </div>
        <br>
        <p style="color: red;">{status}</p>
        <button on:click={register}>
            Register
        </button>
        <br><br>
        <p>Already have an account? <a href="" on:click={click}>Login here</a></p>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto:wght@900&family=Ubuntu:wght@300&display=swap');
    .signin {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .input-container {
        display: grid;
        justify-items: center;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }
    .input-container > input {
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
</style>