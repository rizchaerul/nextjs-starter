import { atom } from "jotai";
import { User } from "oidc-client-ts";

export interface IAuthState {
    isAuthorized: boolean;
    isLoading: boolean;
    user?: User;
}

const initialValue: IAuthState = {
    isAuthorized: false,
    isLoading: true,
};

export const authAtom = atom<IAuthState>(initialValue);
