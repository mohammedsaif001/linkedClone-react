/* eslint-disable no-undef */
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { CalendarViewDay, EventNote } from "@mui/icons-material";
import Posts from "./Posts";
import { useEffect, useState } from "react";

// Firebaase
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";


const Feed = () => {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("")

    const user = useSelector(selectUser)

    useEffect(() => {

        const unsubscribe = onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                );
            }
        );
        return () => unsubscribe();

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await addDoc(collection(db, "posts"), {
                name: user?.displayName,
                description: user?.email,
                message: input,
                photoUrl: user.profileURL || "",
                timestamp: serverTimestamp(),
            });

            setInput("");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title={"Photo"} color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title={"Video"} color="#E7A33E" />
                    <InputOption Icon={EventNote} title={"Event"} color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDay} title={"Write article"} color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => <Posts
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />)}
            <Posts name="Mohammed Saif" description={"This is a Test"} message="Working Message" />
        </div>
    )
}
export default Feed