import Profilepic from "../assets/Profilepic.jpg"; 

function ProfilePicture() {
    return (
        <div className="cmp-profilepic">
            <img src={Profilepic} alt="Profile picture" />
        </div>
    );
}

export default ProfilePicture;
