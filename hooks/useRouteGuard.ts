import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useRouteGuard(shouldBeLoggedIn: boolean, redirectTo: string) {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!!user !== shouldBeLoggedIn) router.push(redirectTo);
    }, [user]);
    }