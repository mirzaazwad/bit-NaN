
import React from "react";
import { footerContainer, footerContent } from "../../config/theme/footer.theme";
import FooterNavigation from "./FooterNavigation";
import FooterIcons from "./FooterIcons";

const Footer = () => {
    return (
        <div className={footerContainer}>
            <div className={footerContent}>
                <div className="flex">
                    <FooterNavigation />
                </div>
                <div className="flex">
                    <FooterIcons />
                </div>
            </div>
        </div>
    );
}

export default Footer;
