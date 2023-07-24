import "./Login.css"
const Login = () => {

    function register() {

    }
    function login(e) {
        e.preventDefault()
    }

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="Linked__logo" />

            <form >
                <input type="text" placeholder="Full Name (Required if Registering)" />
                <input type="text" placeholder="Profile Pic URL (optional)" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={login}>Sign In</button>
            </form>

            <p>Not a member?
                <span className="login__register" onClick={register}>  Register Now</span>
            </p>
        </div>
    )
}
export default Login