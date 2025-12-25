import { useState, useEffect } from "react";
import { PetOnboardingModal } from "@/components/PetOnboardingModal";
import { DashboardContent } from "@/components/DashboardContent";
import { auth, db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, limit } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

interface PetData {
    name: string;
    species: string;
    breed?: string;
    gender: string;
    age: string;
    weight: string;
    bio?: string;
}

const Dashboard = () => {
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [petData, setPetData] = useState<PetData | null>(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Fetch pet data
                try {
                    const petsRef = collection(db, "users", currentUser.uid, "pets");
                    const q = query(petsRef, limit(1));
                    const querySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        // User has pets, load the first one
                        const petDoc = querySnapshot.docs[0];
                        setPetData(petDoc.data() as PetData);
                    } else {
                        // No pets found, show onboarding
                        setShowOnboarding(true);
                    }
                } catch (error) {
                    console.error("Error fetching pet data:", error);
                }
            } else {
                // Handle unauthenticated case if needed (e.g., redirect to login)
                // For now, we just stop loading
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleOnboardingSubmit = async (data: PetData) => {
        if (!user) return;

        try {
            // Save to Firestore
            const petsRef = collection(db, "users", user.uid, "pets");
            await addDoc(petsRef, data);

            setPetData(data);
            setShowOnboarding(false);
        } catch (error) {
            console.error("Error saving pet data:", error);
            // You might want to show an error toast here
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!petData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <PetOnboardingModal
                    open={showOnboarding}
                    onOpenChange={(open) => {
                        // Prevent closing if we have no data
                        if (!open && !petData) return;
                        setShowOnboarding(open);
                    }}
                    onSubmit={handleOnboardingSubmit}
                />
            </div>
        );
    }

    return (
        <DashboardContent petData={petData} />
    );
};

export default Dashboard;
