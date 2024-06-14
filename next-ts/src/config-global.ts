import { paths } from 'src/routes/paths';


export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;


export const MAPBOX_API = process.env.NEXT_PUBLIC_MAPBOX_API;

export const PATH_AFTER_LOGIN = paths.auth.login;
export const PATH_AFTER_REGISTER = paths.auth.register;
export const PATH_AFTER_SHOP = paths.shop.hs;
