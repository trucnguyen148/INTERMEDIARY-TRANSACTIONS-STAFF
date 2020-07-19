import { getJwt } from "./jwt";
 
const jwt = getJwt;

export const header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt()}`
}