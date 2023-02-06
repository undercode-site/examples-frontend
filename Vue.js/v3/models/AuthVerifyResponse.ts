import {RawDate} from "./RawDate";
import {User} from "./User";

export interface AuthVerifyResponse {
    id: number;
    status: any;
    token: string;
    updated_at: RawDate;
    user: User;
}
