import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { LOGO_URL } from "../utils/constants";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-slate-800 p-4 pt-10">
            <section className="flex flex-col md:flex-row justify-between p-4 border-b border-gray-700 align-middle mx-auto text-center md:text-left md:h-full">
                <div className="text-white mb-4 md:mb-0 md:ml-10 md:text-2xl">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center md:justify-start space-x-4 ">
                    <SocialIcon className="text-reset" network="github" url="https://github.com/abhijeetchaubey" bgColor="gray" />
                    <SocialIcon className="text-reset" network="instagram" url="https://www.instagram.com/abhijeetchaube_/?hl=en" bgColor="gray" />
                    <SocialIcon className="text-reset" network="twitter" url="https://x.com/abhijeetcha10?t=7fFKgnJo7m6vwjCgabogfQ&s=09" bgColor="gray" />
                    <SocialIcon className="text-reset" network="linkedin" url="https://www.linkedin.com/in/abhijeet-chaube-708683285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" bgColor="gray" />
                </div>
            </section>
            <section className="flex flex-col md:flex-row justify-between mt-10 space-y-8 md:space-y-0 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start m-4">
                    <img className="w-16 rounded-lg m-2 md:w-20 md:ml-28 md:mt-0" src={LOGO_URL} alt="Logo" />
                    <div className="text-gray-300 md:ml-20 "><p>Delivering Deliciousness</p> When the World Sleeps.</div>
                </div>
                
                <div>
                    <div className="text-white font-bold text-xl">Quick Links</div>
                    <div className="text-gray-300"><Link  to={"/"}>Home</Link></div>
                    <div className="text-gray-300"><Link to={"/careers"}>Careers</Link></div>
                    <div className="text-gray-300"><Link to={"/about"}>Team</Link></div>
                    <div className="text-gray-300"><Link to={"/grocery"}>Grocery</Link></div>
                    <div className="text-gray-300"><Link to={"/contact"}>Contacts</Link></div>
                </div>
                <div>
                    <div className="text-white font-bold text-xl">Legal</div>
                    <div className="text-gray-300"><Link to={"/contact"}>Privacy Policy</Link></div>
                    <div className="text-gray-300"><Link to={"/help-support"}>Terms of use</Link></div>
                    <div className="text-gray-300"><Link to={"/partner-with-us"}>Refund & Cancellation Policy</Link></div>
                </div>
                <div>
                    <div className="text-white font-bold text-xl">GET IN TOUCH</div>
                    <div className="flex justify-center md:justify-start space-x-2">
                        <div>
                            <MdEmail size={24} color="gray" /> 
                        </div>
                        <div className="text-gray-300">
                            <Link to={"mailto:abhijeetcha10@gmail.com"}>Abhijeetcha10@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
