import '../App.css'
import Feed from '../components/Feed'
import Sidebar from "../components/Sidebar"
import Widgets from '../components/Widgets'

const HomePage = () => {
    return (
        <>
            <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
            </div>
        </>
    )
}
export default HomePage