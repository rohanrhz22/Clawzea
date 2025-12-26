import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
    Bell,
    Settings,
    Calendar,
    Syringe,
    TrendingUp,
    Clock,
    MapPin,
    Edit3,
    Plus,
    ChevronRight,
    Stethoscope,
    Scissors,
    PawPrint,
    Weight,
    Cake,
    Heart,
    Activity,
    Shield,
    Star,
    Menu,
    X,
    User,
    LogOut,
    Trophy,
    Sparkles,
    Crown,
    Camera,
    ArrowRight,
    Gift
} from "lucide-react";
import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface PetData {
    name: string;
    species: string;
    breed?: string;
    gender: string;
    age: string;
    weight: string;
    bio?: string;
}

interface DashboardContentProps {
    petData: PetData;
}

export function DashboardContent({ petData }: DashboardContentProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 12, mins: 34 });
    const navigate = useNavigate();

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, mins } = prev;
                mins--;
                if (mins < 0) { mins = 59; hours--; }
                if (hours < 0) { hours = 23; days--; }
                if (days < 0) { days = 0; hours = 0; mins = 0; }
                return { days, hours, mins };
            });
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    // Mock Data
    const vaccinations = [
        { name: "Rabies Booster", date: "Jun 15, 2024", status: "Completed", dueIn: null },
        { name: "DHPP", date: "Oct 24, 2024", status: "Upcoming", dueIn: "2 months" },
        { name: "Bordetella", date: "Jan 14, 2024", status: "Overdue", dueIn: "Overdue by 11 months" },
        { name: "Leptospirosis", date: "Mar 20, 2025", status: "Scheduled", dueIn: "4 months" },
    ];

    const appointments = [
        { title: "Wellness Checkup", provider: "Dr. Sarah Wilson", time: "Nov 19, 2024 • 10:30 AM", location: "City Vet Clinic", type: "checkup" },
        { title: "Grooming Session", provider: "Happy Paws Grooming", time: "Dec 01, 2024 • 02:30 PM", location: "Home Visit", type: "grooming" },
    ];

    const quickServices = [
        { icon: Stethoscope, label: "Vet Consultation", color: "bg-blue-500", desc: "Book a checkup" },
        { icon: Scissors, label: "Grooming", color: "bg-pink-500", desc: "Style & care" },
        { icon: PawPrint, label: "Pet Walking", color: "bg-green-500", desc: "Daily walks" },
        { icon: Heart, label: "Pet Sitting", color: "bg-purple-500", desc: "Trusted care" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed": return "bg-green-100 text-green-700 border-green-200";
            case "Upcoming": return "bg-blue-100 text-blue-700 border-blue-200";
            case "Overdue": return "bg-red-100 text-red-700 border-red-200";
            case "Scheduled": return "bg-amber-100 text-amber-700 border-amber-200";
            default: return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    const getSpeciesIcon = (species: string) => {
        return species.toLowerCase() === "dog" ? "🐕" : species.toLowerCase() === "cat" ? "🐈" : "🐾";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
            {/* Inline Styles for Animations */}
            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-6px) rotate(3deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 15px rgba(251, 191, 36, 0.4); }
                    50% { box-shadow: 0 0 30px rgba(251, 191, 36, 0.7); }
                }
                @keyframes sparkle {
                    0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1) rotate(180deg); }
                }
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes trophy-shine {
                    0%, 100% { filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.6)); }
                    50% { filter: drop-shadow(0 0 16px rgba(251, 191, 36, 1)); }
                }
                .shimmer-text {
                    background: linear-gradient(90deg, #fbbf24 0%, #fef3c7 25%, #fbbf24 50%, #fef3c7 75%, #fbbf24 100%);
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 3s linear infinite;
                }
                .float-animation { animation: float 3s ease-in-out infinite; }
                .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
                .sparkle-1 { animation: sparkle 2s ease-in-out infinite; }
                .sparkle-2 { animation: sparkle 2s ease-in-out infinite 0.4s; }
                .sparkle-3 { animation: sparkle 2s ease-in-out infinite 0.8s; }
                .sparkle-4 { animation: sparkle 2s ease-in-out infinite 1.2s; }
                .bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
                .gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 4s ease infinite;
                }
                .trophy-shine { animation: trophy-shine 2s ease-in-out infinite; }
            `}</style>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img
                                src="/img/logobasenobg.png"
                                alt="Clawzea"
                                className="w-9 h-9 object-contain"
                            />
                            <span className="font-bold text-xl text-slate-800 hidden sm:block">Clawzea</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                                Dashboard
                            </Button>
                            <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                                My Pets
                            </Button>
                            <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                                Services
                            </Button>
                            <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                                Appointments
                            </Button>
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </Button>
                            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 hidden sm:flex">
                                <Settings className="w-5 h-5" />
                            </Button>
                            <Separator orientation="vertical" className="h-6 hidden sm:block" />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-slate-500 hover:text-slate-900"
                                onClick={handleLogout}
                            >
                                <LogOut className="w-5 h-5" />
                            </Button>

                            {/* Mobile Menu Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-slate-100">
                            <nav className="flex flex-col gap-1">
                                <Button variant="ghost" className="justify-start text-slate-600">Dashboard</Button>
                                <Button variant="ghost" className="justify-start text-slate-600">My Pets</Button>
                                <Button variant="ghost" className="justify-start text-slate-600">Services</Button>
                                <Button variant="ghost" className="justify-start text-slate-600">Appointments</Button>
                                <Button variant="ghost" className="justify-start text-slate-600">Settings</Button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Welcome Section */}
                <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        Welcome back! 👋
                    </h1>
                    <p className="text-slate-500 mt-1 text-sm sm:text-base">
                        Here's what's happening with {petData.name} today
                    </p>
                </div>

                {/* 🎉 HORIZONTAL CONTEST BANNER */}
                <div className="relative overflow-hidden rounded-2xl gradient-shift bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 p-[2px] mb-6 sm:mb-8">
                    {/* Inner Container */}
                    <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <Sparkles className="absolute top-3 left-[5%] w-4 h-4 text-amber-400/50 sparkle-1" />
                            <Star className="absolute top-4 left-[25%] w-3 h-3 text-yellow-400/50 sparkle-2" />
                            <Sparkles className="absolute bottom-3 left-[15%] w-3 h-3 text-orange-400/50 sparkle-3" />
                            <Star className="absolute top-5 right-[30%] w-4 h-4 text-amber-400/50 sparkle-4" />
                            <Sparkles className="absolute bottom-4 right-[10%] w-4 h-4 text-yellow-400/50 sparkle-1" />
                            <Star className="absolute top-3 right-[15%] w-3 h-3 text-orange-400/50 sparkle-3" />
                            
                            {/* Gradient orbs */}
                            <div className="absolute -top-20 left-[10%] w-40 h-40 bg-amber-500/15 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 right-[20%] w-48 h-48 bg-orange-500/15 rounded-full blur-3xl"></div>
                            <div className="absolute top-0 right-[40%] w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
                        </div>

                        {/* Content - Horizontal Layout */}
                        <div className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                            {/* Mobile Layout (stacked) */}
                            <div className="flex flex-col lg:hidden gap-4">
                                {/* Top Row - Badge & Title */}
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-2 py-0.5 text-[10px] font-bold tracking-wide mb-2">
                                            <Gift className="w-3 h-3 mr-1" />
                                            LIMITED TIME
                                        </Badge>
                                        <h3 className="text-lg font-black text-white flex items-center gap-2">
                                            🏆 Pet Awards 2026
                                            <Crown className="w-4 h-4 text-amber-400 float-animation" />
                                        </h3>
                                        <p className="shimmer-text text-xl font-black tracking-tight">
                                            PETFLUENCER SEARCH
                                        </p>
                                    </div>
                                    <Trophy className="w-12 h-12 text-amber-400 trophy-shine flex-shrink-0" />
                                </div>

                                {/* Middle Row - Info */}
                                <div className="flex items-center gap-4 flex-wrap">
                                    <p className="text-slate-300 text-sm">
                                        Turn <span className="text-amber-400 font-semibold">{petData.name}</span> into a star!
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-3 h-3 text-amber-400" />
                                        <div className="flex items-center gap-1">
                                            <span className="bg-slate-700/80 text-amber-400 px-1.5 py-0.5 rounded text-xs font-bold">{timeLeft.days}d</span>
                                            <span className="text-slate-500">:</span>
                                            <span className="bg-slate-700/80 text-amber-400 px-1.5 py-0.5 rounded text-xs font-bold">{timeLeft.hours}h</span>
                                            <span className="text-slate-500">:</span>
                                            <span className="bg-slate-700/80 text-amber-400 px-1.5 py-0.5 rounded text-xs font-bold">{timeLeft.mins}m</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Row - CTA */}
                                <div className="flex items-center gap-3">
                                    <Button 
                                        className="flex-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-600 hover:via-orange-600 hover:to-amber-600 text-white font-bold py-2.5 text-sm pulse-glow transition-all duration-300 group"
                                    >
                                        <Camera className="w-4 h-4 mr-2" />
                                        Enter Now
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-slate-800"></div>
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-slate-800"></div>
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-slate-800"></div>
                                        </div>
                                        <span className="text-[10px] text-slate-400"><span className="text-amber-400 font-semibold">247</span> entered</span>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout (horizontal) */}
                            <div className="hidden lg:flex items-center gap-6">
                                {/* Trophy Icon */}
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <Trophy className="w-16 h-16 text-amber-400 trophy-shine" />
                                        <Crown className="absolute -top-2 -right-1 w-5 h-5 text-yellow-400 float-animation" />
                                    </div>
                                </div>

                                {/* Title Section */}
                                <div className="flex-shrink-0">
                                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-2.5 py-0.5 text-[10px] font-bold tracking-wide mb-1">
                                        <Gift className="w-3 h-3 mr-1" />
                                        LIMITED TIME
                                    </Badge>
                                    <h3 className="text-lg font-black text-white leading-tight">
                                        🏆 Pet Awards 2025
                                    </h3>
                                    <p className="shimmer-text text-2xl font-black tracking-tight leading-tight">
                                        PETFLUENCER SEARCH
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-600 to-transparent flex-shrink-0"></div>

                                {/* Description & Prize */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-slate-300 text-sm mb-2">
                                        Turn <span className="text-amber-400 font-semibold">{petData.name}</span> into a star! Submit your pet's best photo and win exclusive rewards.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-3 py-1.5 border border-slate-700/50">
                                            <Trophy className="w-4 h-4 text-amber-400 bounce-subtle" />
                                            <div>
                                                <p className="text-[10px] text-slate-400 leading-none">Grand Prize</p>
                                                <p className="text-xs font-bold text-white leading-tight">$100 + Premium Services</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-3 py-1.5 border border-slate-700/50">
                                            <Heart className="w-4 h-4 text-amber-400" />
                                            <div>
                                                <p className="text-[10px] text-slate-400 leading-none">Winner Announced at</p>
                                                <p className="text-xs font-bold text-amber-400 leading-tight">2K Followers 🎉</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Section */}
                                <div className="flex-shrink-0 flex flex-col items-end gap-2">
                                    <Button 
                                        className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-600 hover:via-orange-600 hover:to-amber-600 text-white font-bold px-6 py-5 text-sm pulse-glow transition-all duration-300 group"
                                    >
                                        <Camera className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                        Enter {petData.name} Now
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-2">
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-slate-800"></div>
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-slate-800"></div>
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-slate-800"></div>
                                        </div>
                                        <p className="text-[10px] text-slate-400">
                                            <span className="text-amber-400 font-semibold">247</span> pets entered!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END CONTEST BANNER */}

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Pet Profile */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Pet Profile Card */}
                        <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-amber-50/50">
                            {/* Pet Header with Image */}
                            <div className="relative h-32 sm:h-40 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="absolute top-3 right-3">
                                    <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                                        <Edit3 className="w-4 h-4 text-slate-600" />
                                    </Button>
                                </div>
                                <div className="absolute -bottom-12 sm:-bottom-14 left-1/2 -translate-x-1/2">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-xl bg-white overflow-hidden">
                                        <img
                                            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${petData.name}&backgroundColor=fef3c7`}
                                            alt={petData.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <CardContent className="pt-14 sm:pt-16 pb-6 text-center">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{petData.name}</h2>
                                    <span className="text-xl">{getSpeciesIcon(petData.species)}</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-4">
                                    {petData.breed || "Mixed Breed"} • {petData.species}
                                </p>

                                {/* Pet Stats Grid */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <div className="bg-slate-50 rounded-xl p-3">
                                        <div className="flex items-center justify-center mb-1">
                                            <Cake className="w-4 h-4 text-amber-500" />
                                        </div>
                                        <p className="text-xs text-slate-500">Age</p>
                                        <p className="font-semibold text-slate-900 text-sm">{petData.age}</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-xl p-3">
                                        <div className="flex items-center justify-center mb-1">
                                            <Weight className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <p className="text-xs text-slate-500">Weight</p>
                                        <p className="font-semibold text-slate-900 text-sm">{petData.weight} kg</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-xl p-3">
                                        <div className="flex items-center justify-center mb-1">
                                            <User className="w-4 h-4 text-pink-500" />
                                        </div>
                                        <p className="text-xs text-slate-500">Gender</p>
                                        <p className="font-semibold text-slate-900 text-sm capitalize">{petData.gender}</p>
                                    </div>
                                </div>

                                {/* Bio Section */}
                                {petData.bio && (
                                    <div className="bg-amber-50 rounded-xl p-4 mb-6 text-left">
                                        <p className="text-xs font-medium text-amber-700 mb-1">About {petData.name}</p>
                                        <p className="text-sm text-slate-600 leading-relaxed">{petData.bio}</p>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="space-y-2">
                                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium">
                                        <Plus className="w-4 h-4 mr-2" />
                                        Book Service
                                    </Button>
                                    <Button variant="outline" className="w-full border-slate-200">
                                        <Edit3 className="w-4 h-4 mr-2" />
                                        Edit Profile
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Wellness Score Card */}
                        <Card className="border-0 shadow-md">
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-base font-semibold text-slate-900">Wellness Score</CardTitle>
                                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-0">
                                        <Activity className="w-3 h-3 mr-1" />
                                        Healthy
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-end gap-3 mb-3">
                                    <span className="text-4xl font-bold text-green-500">92%</span>
                                    <span className="text-green-500 text-sm mb-1">↑ 3% from last month</span>
                                </div>
                                <Progress value={92} className="h-2 mb-3" />
                                <p className="text-xs text-slate-500">
                                    Based on vaccination status, weight trends, and activity levels
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Services & Activity */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Quick Services */}
                        <Card className="border-0 shadow-md">
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg font-semibold text-slate-900">Quick Services</CardTitle>
                                    <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                                        View All <ChevronRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                                <p className="text-sm text-slate-500">Affordable pet care at your fingertips</p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {quickServices.map((service, i) => (
                                        <button
                                            key={i}
                                            className="group p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-200 text-left border border-transparent hover:border-slate-200"
                                        >
                                            <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                                <service.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-medium text-slate-900 text-sm">{service.label}</h4>
                                            <p className="text-xs text-slate-500">{service.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Stats Overview */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                            <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-white">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Syringe className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-slate-900">2/4</p>
                                            <p className="text-xs text-slate-500">Vaccinations</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-white">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-slate-900">2</p>
                                            <p className="text-xs text-slate-500">Appointments</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm bg-gradient-to-br from-amber-50 to-white">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-slate-900">1</p>
                                            <p className="text-xs text-slate-500">Reminders</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-white">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                                            <TrendingUp className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-slate-900">6</p>
                                            <p className="text-xs text-slate-500">Health Logs</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Alerts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-slate-900 text-sm">Vaccination Due</h4>
                                    <p className="text-xs text-slate-600 truncate">Bordetella is overdue. Schedule now.</p>
                                </div>
                                <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white flex-shrink-0 text-xs">
                                    Book
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-green-500" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-slate-900 text-sm">Healthy Growth</h4>
                                    <p className="text-xs text-slate-600 truncate">{petData.name} is maintaining ideal weight</p>
                                </div>
                                <Button size="sm" variant="outline" className="border-green-200 text-green-700 flex-shrink-0 text-xs">
                                    View
                                </Button>
                            </div>
                        </div>

                        {/* Two Column Grid for Vaccinations & Appointments */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Vaccination Timeline */}
                            <Card className="border-0 shadow-md">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-base font-semibold text-slate-900">Vaccinations</CardTitle>
                                        <Button variant="ghost" size="sm" className="h-8 text-xs text-amber-600">
                                            <Plus className="w-3 h-3 mr-1" /> Add
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {vaccinations.map((vac, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                                                    <Syringe className="w-4 h-4 text-slate-400" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="font-medium text-sm text-slate-900 truncate">{vac.name}</h4>
                                                    <p className="text-xs text-slate-500">{vac.date}</p>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className={`text-xs flex-shrink-0 ${getStatusColor(vac.status)}`}>
                                                {vac.status}
                                            </Badge>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Appointments */}
                            <Card className="border-0 shadow-md">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-base font-semibold text-slate-900">Upcoming Appointments</CardTitle>
                                        <Button variant="ghost" size="sm" className="h-8 text-xs text-amber-600">
                                            <Plus className="w-3 h-3 mr-1" /> Book
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {appointments.map((apt, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-100">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 text-sm">{apt.title}</h4>
                                                    <p className="text-xs text-slate-500">{apt.provider}</p>
                                                </div>
                                                <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-0 text-xs">
                                                    {apt.type === "checkup" ? "Vet" : "Grooming"}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {apt.time}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" />
                                                    {apt.location}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    {appointments.length === 0 && (
                                        <div className="text-center py-8 text-slate-400">
                                            <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                            <p className="text-sm">No upcoming appointments</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-16 border-t border-slate-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <img src="/img/logobasenobg.png" alt="Clawzea" className="w-8 h-8" />
                            <span className="font-bold text-slate-800">Clawzea</span>
                            <span className="text-slate-400 text-sm ml-2">Affordable pet care for everyone</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <a href="#" className="hover:text-slate-900 transition-colors">Help</a>
                            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
                        © 2024 Clawzea. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}