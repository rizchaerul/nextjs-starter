import { UserManager, WebStorageStateStore } from "oidc-client-ts";
import { getEnvirontmentVariables } from "./Environtment";

const { apiUrl, webUrl } = getEnvirontmentVariables();

export function createUserManager() {
    return new UserManager({
        authority: apiUrl,
        client_id: "frontend",
        scope: "openid offline_access email profile api",
        response_type: "code",

        post_logout_redirect_uri: `${webUrl}`,
        redirect_uri: `${webUrl}/account/login-callback`,
        silent_redirect_uri: `${webUrl}/silent-renew.html`,

        userStore: new WebStorageStateStore({ store: localStorage }),
    });
}

export async function silentLogin() {
    const userManager = createUserManager();

    try {
        console.log("signing in silently...");
        await userManager.signinSilent();

        return true;
    } catch (error) {
        console.error("error while signing in", error);

        try {
            await userManager.signoutRedirect();
        } catch {
            console.error("error while signing out", error);
        }
    }
}

export async function login() {
    try {
        const userManager = createUserManager();
        await userManager.signinRedirect();
    } catch (error) {
        console.error("error while signing in", error);
    }
}

export async function logout() {
    try {
        const userManager = createUserManager();
        await userManager.signoutRedirect();
    } catch (error) {
        console.error("error while signing out", error);
    }
}
