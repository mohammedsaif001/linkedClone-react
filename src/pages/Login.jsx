import { useState } from "react"
import "./Login.css"
import { auth } from "../firebase"
import { useDispatch } from "react-redux"
import { login } from "../feature/userSlice"
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [profilePic, setprofilePic] = useState("")

    const dispatch = useDispatch()

    async function register() {
        if (!name) {
            return alert("Please Enter Full Name")
        }

        try {
            const userAuth = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userAuth.user, {
                displayName: name,
                photoURL: profilePic,
            });
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                })
            );
        } catch (err) {
            alert(err.message);
        }
    }
    async function loginUser(e) {
        e.preventDefault()

        try {
            const userAuth = await signInWithEmailAndPassword(auth, email, password);
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                })
            );
        } catch (err) {
            alert(err.message);
        }

    }

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="Linked__logo" />

            <form >
                <input type="text" value={name} onChange={e => setname(e.target.value)} placeholder="Full Name (Required if Registering)" />
                <input type="text" value={profilePic} onChange={e => setprofilePic(e.target.value)} placeholder="Profile Pic URL (optional)" />
                <input type="email" value={email} onChange={e => setemail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setpassword(e.target.value)} placeholder="Password" />
                <button type="submit" onClick={loginUser}>Sign In</button>
            </form>

            <p>Not a member?
                <span className="login__register" onClick={register}>  Register Now</span>
            </p>
        </div>
    )
}
export default Login