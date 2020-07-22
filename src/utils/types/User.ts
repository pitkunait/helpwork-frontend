export interface User {
    username: string
    firstName: string
    lastName: string
    email: string
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
