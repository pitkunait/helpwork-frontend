import { IPost } from './Posts';


export interface UserData {
    username: string
    firstName: string
    lastName: string
    email: string
    posts: IPost[]
}


export interface SignInData {
    username: string
    password: string
}


export interface SignUpData {
    username: string
    password: string
    passwordRepeat: string
    firstName: string
    lastName: string
    email: string
}
