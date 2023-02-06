import {RawDate} from "./RawDate";

export interface User  {
    id: number;
    login?: string;
    role?: UserRole;
    status?: any;
    lastname?: string;
    firstname?: string;
    patronymic?: string;
    birthday?: RawDate;
    sex?: SexUser;
    company_id?: number;
    birthday_date?: RawDate;
    company_name?: string;
    avatar?: Image;
    avatar_size?: number;
    name?: string;
    email?: string;
    phone?: string;
    deleted_at?: RawDate;
    created_at?: RawDate;
    updated_at?: RawDate;
    bash_user_id?: number;
    companies?: Company[];
    category: CategoryUser;
    type: TypeUser;
    about: string;
}
