import {Envelope, GithubLogo, LinkedinLogo} from "phosphor-react";

const Footer = function () {
    return (
        <footer className="flex justify-center pt-6">
            <div className="flex flex-wrap">
                <a className="m-3 transition duration-500 hover:scale-125" href="mailto:nikolai.limbrunner@gmail.com">
                    <Envelope color={"white"} size={40}/>
                </a>
                <a className="m-3 transition duration-500 hover:scale-125"
                   href="https://linkedin.com/in/nikolai-limbrunner-5a6956192/">
                    <LinkedinLogo color={"white"} size={40}/>
                </a>
                <a className="m-3 transition duration-500 hover:scale-125" href="https://github.com/nikolim">
                    <GithubLogo color={"white"} size={40}/>
                </a>
            </div>
        </footer>);
}

export default Footer;
