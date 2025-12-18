import { useState, useEffect } from "react";
import { PetOnboardingModal } from "@/components/PetOnboardingModal";
import { DashboardContent } from "@/components/DashboardContent";

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

    useEffect(() => {
        // Check if we have pet data in localStorage
        const savedData = localStorage.getItem("clawzea_pet_data");
        if (savedData) {
            setPetData(JSON.parse(savedData));
        } else {
            setShowOnboarding(true);
        }
    }, []);

    const handleOnboardingSubmit = (data: PetData) => {
        setPetData(data);
        localStorage.setItem("clawzea_pet_data", JSON.stringify(data));
        setShowOnboarding(false);
    };

    if (!petData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-4 w-48 bg-gray-200 rounded"></div>
                </div>
                <PetOnboardingModal
                    open={showOnboarding}
                    onOpenChange={setShowOnboarding}
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
