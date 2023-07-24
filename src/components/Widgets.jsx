import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Web3 is Booming", "Top News - 9890 readers")}
            {newsArticle("Job opportunities for NextJS Dev", "Top News - 8909 readers")}
            {newsArticle("Is Redux too good?", "Code - 809 readers")}
            {newsArticle("Chandrayan 3 Launches", "Popular - India ")}
        </div>

    )
}
export default Widgets