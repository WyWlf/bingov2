<script lang="ts">
    import Signin from './signin.svelte'
    import Register from './register.svelte';
    import  './style.css'
    let signTab = 'active'
    let registerTab = ''
    let activeBool = true
    function activeTab(element: string){
        if (element === 'signin'){
            signTab = 'active'
            registerTab = ''
            activeBool = true
        } else {
            signTab = ''
            registerTab = 'active'
            activeBool = false
        }
    }

</script>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="vertical-box">
        <div class="vertical-header">
            <p>BINGO MATH</p>
        </div>
        <div class="welcome-page">
            <div class="selector">
                <div class="selector-content {signTab}" id="signin" role="button" aria-pressed="true" tabindex="0" on:click={() => {activeTab('signin')}}>
                        Sign-in
                </div>
                <div class="selector-content {registerTab}" id="register" role="button" aria-pressed="false" tabindex="0" on:click={() => {activeTab('register')}}> 
                        Register Account
                </div>
            </div>
            <div class="content">
                {#if activeBool == true}
                    <Signin />
                {:else if activeBool == false}
                    <Register />
                {/if}
            </div>
        </div>
</div>

<style>
    .vertical-box {
        border-radius: 13px;
        display: flex;
        flex-direction: column;
        background-color: skyblue;
        height: 88%;
        box-sizing: border-box;
        background-image: url('assets/images/mountains-background-game-vector.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin: auto;
        margin-top: 7vh;
    }
    .vertical-header p{
        font-size: 4rem;
        font-family: 'Lilita One', cursive;
        text-align: center;
    }

    .welcome-page {
        border: 5px solid skyblue;
        background-color: transparent;
        width: 50%;
        height: 100%;
        margin: auto;
        margin-bottom: 2rem;
        box-sizing: border-box;
    }
    .selector {
        display: grid;
        grid-template-columns: 50% 50%;
        height: 10%;
        background-color: rgb(255, 255, 255);
        justify-items: center;
        align-items: center;
    }
    .selector-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
        width: 100%;
        border: 1px solid skyblue;
        box-sizing: border-box;
    }
    .selector-content:nth-child(1) {
        border-right: 0;
    }
    .selector-content:hover {
        background-color: rgb(226, 226, 226);
    }
    .content {
        height: 90%;
        background-color: white;
        box-sizing: border-box;
    }
    .active {
        background-color: aliceblue;
    }
    @media (max-width: 1368px) {
        .vertical-box {
            width: 80%;
        }
    }
    @media (max-width: 768px) {
        .welcome-page {
            width: 90%;
        }
    }
    @media (max-width: 468px) {
        .vertical-box {
            width: 100%;
        }
        .vertical-header p {
            font-size: 2rem;
        }
        .selector-content {
            font-size: 1rem;
            height: 10vh;
        }
    }
</style>
