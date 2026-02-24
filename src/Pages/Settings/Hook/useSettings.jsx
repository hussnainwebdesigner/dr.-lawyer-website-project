import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSettings = () => {

   
 
    const [isSettings, setIsSettings] = useState([
        { text: "Notification", type: "toggle", },
        { text: "My Profile", type: "arrow", path: "/settings/my-profile" },
        { text: "Franchising Request", type: "arrow", path: "/settings/franchising-request" },
        { text: "About Us", type: "arrow", path: "/settings/about-us" },
        { text: "Contact Us", type: "arrow", modal: "contact" },
        { text: "Language", type: "arrow", modal: "language" },
        { text: "Change Password", type: "arrow", modal: "password" },
        { text: "Logout", type: "arrow", modal: "logout" },
    ])
    const [notificationsOn, setNotificationsOn] = useState(true);
    const [languageModal, setLanguageModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const [changePasswordModal, setChangePasswordModal] = useState(false);
    const [contactUsModal, setContactUsModal] = useState(false);
  
    const navigate = useNavigate()




    const handleClick = (item) => {
        if (item.modal === "language") {
            setLanguageModal(true);
        }
        if (item.modal === "logout") {
            setLogoutModal(true);
        }
        if (item.modal === "password") {
            setChangePasswordModal(true);
        }
        if (item.modal === "contact") {
           setContactUsModal(true);
        }
        if (item.path) {
            navigate(item.path)
        }
    };

    return {
        isSettings,
        notificationsOn,
        setNotificationsOn,
        
        languageModal,
        setLanguageModal,

        logoutModal,
        setLogoutModal,

        changePasswordModal,
        setChangePasswordModal,

        contactUsModal,
        setContactUsModal,

        handleClick
    };
};

export default useSettings;
