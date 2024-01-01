import { createUserManager } from "@helpers/OpenIdConntect";
import { NextPage } from "next";
import { Fragment, useEffect } from "react";

const LoginCallbackPage: NextPage = () => {
    useEffect(() => {
        handleLogin();
    }, []);

    const handleLogin = async () => {
        const userManager = createUserManager();
        const user = await userManager.getUser();

        if (!user) {
            await userManager.signinCallback();
        }

        window.location.href = "/";
    };

    return <Fragment />;
};

export default LoginCallbackPage;
