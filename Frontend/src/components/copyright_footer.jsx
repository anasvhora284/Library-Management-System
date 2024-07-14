import "./copyright_footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const CopyRightFooter = () => {
  

    return (
        <>
            <div id="copyright-footer-container">
                <div className="copyright-text">
                    <p>Copyright &#169; by D.J.M.A.R.S Group. All Right Reserved!</p>
                </div>
                <div className="socialmedia-container">
                    <div className="socialmedia-text">
                        <p>Follow us on:</p>
                    </div>
                    <div className="socialmedia-item-container">
                        <ul>
                            <li className="socialmedia-item">
                                <a href="" target="_blank">
                                    <FacebookIcon></FacebookIcon>
                                </a>
                            </li>
                            <li className="socialmedia-item">
                                <a href="" target="_blank">
                                    <LinkedInIcon></LinkedInIcon>
                                </a>
                            </li>
                            <li className="socialmedia-item">
                                <a href="" target="_blank">
                                    <InstagramIcon></InstagramIcon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CopyRightFooter;
