export interface AuthContextType {
    signed: boolean
    signIn: Function
    signOut: Function
    loading: boolean
    loginData: loginDataType
    setLoginData: Function
}

export interface loginDataType {
    id: string
    password: string
}