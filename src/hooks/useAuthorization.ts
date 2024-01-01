import { createUserManager, login, silentLogin } from "@helpers/OpenIdConntect";
import { authAtom } from "@states/AuthState";
import { useAtom } from "jotai";
import { useEffect } from "react";

export function useAuthorization(needLogin = true) {
    const [auth, setAuth] = useAtom(authAtom);

    useEffect(() => {
        check();
    }, []);

    async function check() {
        try {
            const userManager = createUserManager();
            let user = await userManager.getUser();

            if (user?.expired === false) {
                setAuth({
                    isAuthorized: true,
                    isLoading: false,
                    user: user,
                });

                return;
            } else if (!user && needLogin) {
                await login();

                return;
            } else if (user?.expired === true && needLogin) {
                const result = await silentLogin();
                if (result === true) {
                    user = await userManager.getUser();

                    setAuth({
                        isAuthorized: true,
                        isLoading: false,
                        user: user,
                    });
                }

                return;
            }
        } catch {}

        setAuth((x) => ({
            isAuthorized: x.isAuthorized,
            user: x.user,
            isLoading: false,
        }));
    }

    return {
        authState: auth,
    };
}
