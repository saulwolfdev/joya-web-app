export function prepareUserInfo(setLoguedIn, setUser) {
    return (firebaseUser) => {
        if(firebaseUser){
            setUser(firebaseUser);
        }
        setLoguedIn(firebaseUser);
    }
}