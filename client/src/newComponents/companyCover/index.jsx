import "./styles.css"

const CompanyCover = ({ company }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    console.log(company);

    return(
        <>
        { company && (
        <div className="companyCover">
            <img 
                className="companyCover__coverImg"
                src={company.coverPicture ? PF + company.coverPicture : `${PF}person/noCover.png`} 
                alt="#" 
            />
            <div className="companyCover__profile">
                <img
                    className="companyCover__profileImg"
                    src={company.coverPicture ? PF + company.coverPicture : `${PF}person/noAvatar.png`} 
                    alt="#" 
                />
            </div>
            <div className="companyCover__info">
                <h3 className="companyCover__name">{company.name}</h3>
                <span className="companyCover__desc">
                    {company.category} - {company.location} - {company.followers.length} followers
                </span>
                <div className="companyCover__actions">
                    <button className="btnWhite">Follow</button>
                    <button className="btnBlue">Learn More</button>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href={"/company/"+company.name.toLowerCase()}>Home</a></li>
                    <li><a href={"/company/"+company.name.toLowerCase()+"/about"}>About</a></li>
                    <li><a href={"/company/"+company.name.toLowerCase()+"/about"}>Posts</a></li>
                    <li><a href={"/jobs"}>Jobs</a></li>
                </ul>
            </nav>
        </div>)}
        </>
    )
}


export default CompanyCover;