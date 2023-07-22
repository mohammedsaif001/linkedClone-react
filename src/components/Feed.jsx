import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { CalendarViewDay, EventNote } from "@mui/icons-material";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input type="text" />
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
        </div>
    )
}
export default Feed