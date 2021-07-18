export function prepareUserInfo(setLoguedIn, setUser) {
    return (firebaseUser) => {
        if(firebaseUser){
            setUser(firebaseUser);
        }
        setLoguedIn(firebaseUser);
    }
}

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export function validateEmail(email) {
    return EMAIL_REGEX.test(email);
}