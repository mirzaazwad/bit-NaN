import React from "react";
import { footerNavList, footerNavigation } from "../../config/theme/footer.theme";

const FooterNavigation = () => (
    <ul className={footerNavList}>
        <li className={footerNavigation()}>About Us</li>
        <li className={footerNavigation()}>FAQ</li>
        <li className={footerNavigation()}>Contact Us</li>
    </ul>
);

export default FooterNavigation;
