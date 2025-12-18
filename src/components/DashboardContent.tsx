import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Bell, Settings, Share2, Heart, Plus, Calendar as CalendarIcon, MoreHorizontal } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
    const { toast } = useToast();

    // Mock Data based on the image
    const vaccinations = [
        { name: "Rabies Booster", date: "Jun 15", status: "Done", type: "success" },
        { name: "DHPP", date: "Oct 24", status: "Upcoming", type: "success" },
        { name: "Bordetella", date: "Jan 14", status: "Overdue", type: "destructive" },
        { name: "Leptospirosis", date: "Jan 14", status: "Scheduled", type: "warning" },
    ];

    const appointments = [
        { title: "Wellness Exam", doctor: "Dr. Wilson", time: "Nov 19 • 10:30 AM", location: "City Vet Clinic" },
        { title: "Mobile Grooming", doctor: "Sally's Grooming", time: "Dec 01 • 02:30 PM", location: "Home Visit" },
    ];

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Top Navigation */}
            <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-1 cursor-pointer">
                    <img
                        src="/img/logobasenobg.png"
                        alt="Clawzea Logo"
                        className="w-10 h-10 object-contain rounded-xl"
                    />
                    <span className="font-baahr text-3xl font-extrabold text-gray-800">Clawzea</span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
                    <a href="#" className="text-gray-900">Your Pets</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Health Dashboard</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Pet Activity Areas</a>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-900">
                        <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-900">
                        <Bell className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-900">
                        <Settings className="w-5 h-5" />
                    </Button>

                    <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 hidden sm:block">Hello, Owner</span>
                    </div>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-6">
                        Upgrade to Premium
                    </Button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">

                {/* Hero Section */}
                <section className="mb-12 relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-50 to-amber-50 p-12">
                    <div className="relative z-10 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Free beta now live for pet parents
                        </div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Track your pet's health—<br />free forever.
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Clawzea connects pet parents to world-class vet partners while giving you a friendly tools suite for managing appointments, and growth tracking.
                        </p>
                        <div className="flex items-center gap-4">
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-8 h-12 text-base">
                                Add a Pet
                            </Button>
                            <Button variant="outline" className="bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full px-8 h-12 text-base border-gray-200">
                                Book Appointment
                            </Button>
                        </div>
                        <div className="flex items-center gap-8 mt-12">
                            <div>
                                <div className="text-2xl font-bold text-gray-900">1200+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Veterinarians Onboard</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Average Experience Rating</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 w-1/2 h-full">
                        <img
                            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
                            alt="Happy dogs running"
                            className="w-full h-full object-cover mask-image-gradient"
                            style={{ maskImage: 'linear-gradient(to right, transparent, black 20%)' }}
                        />
                    </div>
                </section>

                {/* Tools Grid */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Phase 1 tools your vet will love.</h2>
                        <p className="text-gray-500 text-sm">Build trust with visual trackers, diary and tools - friendly reminders and preventive ecology will leave zero altercations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Health Dashboard", icon: "📊", desc: "Get total care summaries and help vet ease compliance.", color: "bg-yellow-100 text-yellow-600" },
                            { label: "Vaccination Tracker", icon: "💉", desc: "Never miss a shot, log prices and retrieve history.", color: "bg-orange-100 text-orange-600" },
                            { label: "Appointments", icon: "📅", desc: "Schedule visits, grooming and in the case of a family.", color: "bg-blue-100 text-blue-600" },
                            { label: "Growth Charts", icon: "📈", desc: "Monitor weight and length trends to identify issues.", color: "bg-green-100 text-green-600" },
                        ].map((item, i) => (
                            <Card key={i} className="p-6 border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.label}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Dashboard Main Area */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            Health Dashboard
                        </h2>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 text-xs">
                                <Share2 className="w-3 h-3 mr-2" /> Export
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 text-xs">
                                <MoreHorizontal className="w-3 h-3 mr-2" /> Report All
                            </Button>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 -mt-6">Designed for busy mornings—everything organized, synced, and ready to share with your vet or groomer.</p>


                    {/* Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard label="Vaccinations" value="2/4" sub="This year only" icon="💉" />
                        <StatCard label="Appointments" value="3" sub="Upcoming" icon="🗓️" color="text-green-500 bg-green-50" />
                        <StatCard label="Reminders" value="1" sub="Active" icon="⏰" color="text-red-500 bg-red-50" />
                        <StatCard label="Growth Data" value="6" sub="Last 30 days" icon="📏" color="text-purple-500 bg-purple-50" />
                    </div>

                    {/* Health Insights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-xl p-4 flex items-center gap-4 border border-red-100">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                <CalendarIcon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">1 Vaccination Due</h4>
                                <p className="text-xs text-gray-500">Schedule Rabies vaccination now to keep your pet protected.</p>
                            </div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 flex items-center gap-4 border border-green-100">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                <span className="text-lg">📈</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Healthy growth trend</h4>
                                <p className="text-xs text-gray-500">Your pet is maintaining a healthy growth trajectory.</p>
                            </div>
                        </div>
                    </div>

                    {/* Main 2-Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column (Pet Profile & Details) */}
                        <div className="space-y-6">
                            {/* Pet Card */}
                            <Card className="p-6 border-none shadow-sm bg-white overflow-hidden relative">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-gray-100 overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${petData.name}`} alt={petData.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900">{petData.name}</h3>
                                            <p className="text-xs text-gray-500">{petData.species} • {petData.breed || 'Unknown Mix'}</p>
                                            <p className="text-xs text-gray-400 mt-1">Born Nov 2, 2022 • North TX</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-6 w-6">
                                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                                    </Button>
                                </div>

                                <div className="bg-amber-50 rounded-lg p-3 mb-6">
                                    <div className="text-xs text-amber-800 font-semibold mb-1">Age</div>
                                    <div className="text-sm font-bold text-gray-900">{petData.age}</div>
                                </div>

                                <div className="space-y-2">
                                    <Button className="w-full justify-start gap-2 bg-green-500 hover:bg-green-600 text-white shadow-none h-10 rounded-lg text-sm font-medium">
                                        <Plus className="w-4 h-4" /> Add visit
                                    </Button>
                                    <Button variant="secondary" className="w-full justify-start gap-2 bg-green-100 hover:bg-green-200 text-green-700 h-10 rounded-lg text-sm font-medium">
                                        <Plus className="w-4 h-4" /> Book Appointment
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start gap-2 h-10 rounded-lg text-sm font-medium text-gray-600">
                                        <Plus className="w-4 h-4" /> Edit Profile
                                    </Button>
                                </div>
                            </Card>

                            {/* Wellness Score */}
                            <Card className="p-6 border-none shadow-sm bg-white">
                                <h3 className="text-xs font-semibold text-gray-500 mb-1">Wellness score</h3>
                                <p className="text-[10px] text-gray-400 mb-4">Looks really fresh for your community</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-green-500">92%</span>
                                    <span className="text-xs text-gray-500 mb-1 max-w-[120px] leading-tight">
                                        <span className="text-green-500 font-bold">↑</span> Adjusted for breed, keep care ideal reminders for a pet of 5 years.
                                    </span>
                                </div>
                            </Card>
                        </div>

                        {/* Middle Column (Vaccinations) */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Vaccination Timeline */}
                            <Card className="p-6 border-none shadow-sm bg-white">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Vaccination Timeline</h3>
                                        <p className="text-xs text-gray-500">Everything up to date for upcoming year.</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="h-8 text-xs">
                                        + Insert
                                    </Button>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <Search className="w-4 h-4 text-gray-400" />
                                    <input type="text" placeholder="Search vaccinations..." className="text-sm border-none outline-none bg-transparent w-full" />
                                    <div className="flex gap-2">
                                        {['All', 'Core', 'Due', 'Upcoming'].map(filter => (
                                            <button key={filter} className={`text-xs px-3 py-1 rounded-full ${filter === 'All' ? 'bg-yellow-400 text-black font-semibold' : 'bg-gray-100 text-gray-500'}`}>
                                                {filter}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {vaccinations.map((vac, i) => (
                                        <div key={i} className={`flex items-center justify-between p-3 rounded-xl border-l-4 ${vac.type === 'upcoming' ? 'bg-green-50 border-green-500' : vac.type === 'destructive' ? 'bg-red-50 border-red-500' : 'bg-gray-50 border-gray-300'}`}>
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900">{vac.name}</h4>
                                                <p className="text-xs text-gray-500">{vac.date} • {vac.status}</p>
                                            </div>
                                            {/* Status Indicator */}
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${vac.type === 'success' ? 'bg-green-100 text-green-600' : vac.type === 'destructive' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                                {vac.type === 'success' ? '✓' : vac.type === 'destructive' ? '!' : '⟳'}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Appointments */}
                                <Card className="p-6 border-none shadow-sm bg-white">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-gray-900">Appointments</h3>
                                        <span className="bg-yellow-400 text-[10px] font-bold px-2 py-1 rounded-full">New</span>
                                    </div>
                                    <div className="space-y-4">
                                        {appointments.map((apt, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="w-1 bg-gray-200 rounded-full h-full"></div>
                                                <div>
                                                    <h4 className="font-semibold text-sm text-gray-900">{apt.title}</h4>
                                                    <p className="text-xs text-gray-500">{apt.doctor}</p>
                                                    <p className="text-xs text-gray-400">{apt.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>

                                {/* Growth Chart Placeholder */}
                                <Card className="p-6 border-none shadow-sm bg-white">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-gray-900">Growth Charts</h3>
                                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
                                        <span className="text-xs text-gray-400">Chart Visualization Area</span>
                                    </div>
                                </Card>
                            </div>

                            {/* Reminders */}
                            <Card className="p-6 border-none shadow-sm bg-white">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold text-gray-900">Reminders</h3>
                                        <p className="text-xs text-gray-500">Scheduled pills and tasks.</p>
                                    </div>
                                    <span className="bg-yellow-400 text-[10px] font-bold px-2 py-1 rounded-full">+ Free</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-sm text-gray-900">Heartworm prevention</h4>
                                    <p className="text-xs text-gray-500">Every Dec 01</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="max-w-md">
                            <h2 className="text-2xl font-bold mb-4">Grow with Clawzea.</h2>
                            <p className="text-gray-400 text-sm mb-6">We're capturing the next 10K pet parents for future e-commerce, elder bookings and tele vet families. Reserve your spot for guided onboarding.</p>
                            <div className="flex gap-4">
                                <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">Check Availability</Button>
                                <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">Check Roadmap</Button>
                            </div>
                        </div>

                        <div className="bg-white text-gray-900 p-6 rounded-2xl max-w-sm w-full">
                            <h3 className="font-bold mb-1">Join the waitlist</h3>
                            <p className="text-xs text-gray-500 mb-4">We're accepting limited spots. Get notified.</p>
                            <input type="text" placeholder="First Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm mb-3" />
                            <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm mb-4" />
                            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold">Get early access</Button>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center text-xs text-gray-500">
                        <div className="font-bold text-lg text-white">Clawzea</div>
                        <div>© 2024 Clawzea. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function StatCard({ label, value, sub, icon, color = 'text-yellow-500 bg-yellow-50' }: any) {
    return (
        <Card className="p-4 border-none shadow-sm bg-white flex items-center justify-between">
            <div>
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                <p className="text-[10px] text-gray-400">{sub}</p>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color} bg-opacity-10`}>
                <span className="text-xl">{icon}</span>
            </div>
        </Card>
    )
}
