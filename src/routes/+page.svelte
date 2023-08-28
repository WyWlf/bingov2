<script lang="ts">
	import { goto } from '$app/navigation';
    import Cookies from 'js-cookie';
    import  './style.css'
    

    let userForm = {}
    let status : any = ''
    let user : any = Cookies.get('username')
    console.log(user)
    async function loginFunc(){
        try {
            let username = (document.getElementById('username') as HTMLInputElement).value
            let password = (document.getElementById('password') as HTMLInputElement).value
            userForm = {
                username: username,
                password: password
            }
            const res = await fetch('http://192.168.254.104/sv/bingo/src/routes/php/login_function.php', {
                method: 'POST',
                body:  JSON.stringify(userForm)                
            })
            status = await res.text()
            if (status.substring(1, 0) == 1){
                Cookies.set('username', status.substring(1), {expires: 7})
                goto('/main')
            }
        }catch (error){
            console.log(error)
        }
    }
</script>
<div class="vertical-box">
        <div class="vertical-header">
            <p>SIGN IN</p>
        </div>
        <div class="vertical-footer">
            <div>
                <p>USER LOGIN</p>
                <br>
                <div>
                    <label for="username">Username</label>
                    <br>
                    <input type="text" name="" id="username">
                </div>
                <br>
                <div>
                    <label for="">Password</label>
                    <br>
                    <input type="password" id="password">
                </div>
                <div>
                    <p id="status">{status}</p>
                    <button on:click={loginFunc}>Log-in</button>
                </div>
            </div>
        </div>
</div>

<style>
    .vertical-box {
        border-radius: 13px;
        display: flex;
        flex-direction: column;
        background-color: skyblue;
        width: 50%;
        height: 88vh;
        box-sizing: border-box;
        background-image: url('assets/images/mountains-background-game-vector.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin: auto;
        margin-top: 7vh;
    }
    .vertical-header p{
        font-size: 2em;
        font-family: 'Lilita One', cursive;
        text-align: center;
    }
    .vertical-footer {
        box-sizing: border-box;
        background-color: transparent;
        align-self: center;
        height: 100%;
        width: 100%;
        border-bottom-left-radius: 13px;
        border-bottom-right-radius: 13px;
    }
    .vertical-footer div {
        margin: 1rem;
    }
    .vertical-footer p, label {
        text-align: center;
    }
    .vertical-footer p:nth-child(1), .vertical-footer label {
        font-size: 1.5rem;
        font-family: sans-serif;
    }
    input {
        font-size: 2rem;
        height: 100%;
        border-radius: 10px;
        border: 1px;
        width: 40%;
        justify-self: center;
        height: 2.5vh;
    }
    .vertical-footer div div {
        display: grid;
    }
    button {
        color: rgb(39, 39, 39);
        margin-top: 5vh;
        border-radius: 10px;
        border: 1px;
        height: 5vh;
        width: 30%;
        justify-self: center;
    }
    #status{
        color:rgb(190, 202, 209);
        background-color: rgb(59, 54, 54);
        width: fit-content;
        justify-self: center;
        border-radius: 13px;
        padding: 5px;
    }
    @media (max-width: 1368px) {
        .vertical-box {
            width: 80%;
        }
        input {
            width: 50%;
        }
    }
</style>
