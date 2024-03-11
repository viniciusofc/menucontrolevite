import { useEffect, useState } from "react";
// import { api } from "../../services/api";
// import jwt_decode from "jwt-decode";

export default function useAuth() {
    const [user, setUser] = useState(true)

    // useEffect(() => {
    //     const loadingStoreData = () => {
    //         // const storageUser = localStorage.getItem("@Auth:user")
    //         const storageToken = localStorage.getItem("@Auth:token")

    //         // if (storageUser && storageToken) {
    //         //     setUser(storageUser)
    //         // }

    //         if (storageToken) {
    //             setUser(storageToken)
    //         }
    //     }
    //     loadingStoreData()
    // }, [])

    // const signIn = async (param) => {
    //     try {
    //         const response = await api.post('/login', param)

    //         if (response.data.error) {
    //             return response.data.error

    //         } else {
    //             setUser(response.data)
    //             localStorage.setItem('@Auth:token', response.data.token)
    //             window.location.href = '/home';
    //             return
    //             // localStorage.setItem("@Auth:user", response.data.user)
    //         }
    //     } catch (error) {
    //         return error.response
    //     }
    // }

    // const signOut = async (param) => {
    //     setUser(false)
    //     localStorage.removeItem('@Auth:token')
    //     window.location.href = '/login'
    // }

    // const IsTokenValid = () => {
    //     const token = localStorage.getItem('@Auth:token')
    //     if (token) {
    //         const decoded = jwt_decode(token)
    //         const tokenExpirationDate = new Date(decoded.exp * 1000)
    //         const currentDate = new Date()

    //         if (currentDate > tokenExpirationDate) {
    //             signOut()
    //             return false
    //         } else {
    //             return true
    //         }
    //     } else {
    //         signOut()
    //         return false
    //     }
    // }

    return {
        user,
        // signed!: !user,
        signed: user,
        // signIn,
        // signOut,
        // IsTokenValid
    }
}