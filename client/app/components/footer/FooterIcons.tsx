import React from "react";
import Icon from '../Icon';
import { footerIconList, footerIcons } from "../../config/theme/footer.theme";
import { logoFacebook, logoInstagram, logoYoutube, logoLinkedin, logoGithub, logoGooglePlaystore } from "ionicons/icons";

const FooterIcons: React.FC = () => (
    <ul className={footerIconList}>
        <li className={footerIcons()}><Icon type={logoFacebook} className="text-2xl" /></li>
        <li className={footerIcons()}><Icon type={logoInstagram} className="text-2xl" /></li>
        <li className={footerIcons()}><Icon type={logoYoutube} className="text-2xl" /></li>
        <li className={footerIcons()}><Icon type={logoLinkedin} className="text-2xl" /></li>
        <li className={footerIcons()}><Icon type={logoGithub} className="text-2xl" /></li>
        <li className={footerIcons()}><Icon type={logoGooglePlaystore} className="text-2xl" /></li>
    </ul>
);

export default FooterIcons;
