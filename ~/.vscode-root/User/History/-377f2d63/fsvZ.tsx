import { useEffect, useState, useContext, createContext } from 'react';
import {
    onAuthStateChanged,
    getAuth,
    User
} from 'firebase/auth';
import { firebaseApp } from '@/firebase/config';

const auth = getAuth(firebaseApp);

interface AuthContextType {
    user?: User
}

export const AuthContext = createContext<AuthContextType>({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
    children,
} : {
    children: ChildNode
}) => {
    const [user, setUser] = useState<User?>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};