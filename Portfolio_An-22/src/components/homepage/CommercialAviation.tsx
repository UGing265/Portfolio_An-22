import { Plane, Users, Globe, Shield, TrendingUp, Zap } from "lucide-react";

export default function CommercialAviation() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074" 
                        alt="Commercial Aircraft" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 text-center text-white px-6 max-w-5xl">
                    <h1 className="text-6xl font-bold mb-6 animate-fade-in">
                        Commercial Aviation Excellence
                    </h1>
                    <p className="text-2xl mb-8 text-blue-200">
                        Connecting the world through innovative aerospace solutions
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Explore Our Fleet
                    </button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <StatCard 
                            icon={<Plane className="w-12 h-12" />}
                            number="500+"
                            label="Aircraft Delivered"
                        />
                        <StatCard 
                            icon={<Users className="w-12 h-12" />}
                            number="1M+"
                            label="Passengers Daily"
                        />
                        <StatCard 
                            icon={<Globe className="w-12 h-12" />}
                            number="150+"
                            label="Countries Served"
                        />
                        <StatCard 
                            icon={<Shield className="w-12 h-12" />}
                            number="99.9%"
                            label="Safety Record"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Why Choose Our Aviation Solutions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <FeatureCard 
                            icon={<TrendingUp className="w-16 h-16" />}
                            title="Fuel Efficiency"
                            description="Advanced aerodynamics reducing fuel consumption by up to 25%, lowering operational costs and environmental impact."
                        />
                        <FeatureCard 
                            icon={<Shield className="w-16 h-16" />}
                            title="Safety First"
                            description="Industry-leading safety systems with real-time monitoring and predictive maintenance technology."
                        />
                        <FeatureCard 
                            icon={<Zap className="w-16 h-16" />}
                            title="Next-Gen Technology"
                            description="Cutting-edge avionics, AI-powered flight systems, and sustainable electric propulsion options."
                        />
                    </div>
                </div>
            </section>

            {/* Aircraft Showcase */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                        Our Commercial Fleet
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AircraftCard 
                            name="SkyLiner 787"
                            category="Long-Haul"
                            capacity="330 passengers"
                            range="14,800 km"
                            image="https://images.unsplash.com/photo-1583933443319-1b9b9c8f37d9?q=80&w=2070"
                        />
                        <AircraftCard 
                            name="EcoJet A320"
                            category="Medium-Range"
                            capacity="180 passengers"
                            range="6,100 km"
                            image="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070"
                        />
                        <AircraftCard 
                            name="RegionalPro 75"
                            category="Regional"
                            capacity="75 passengers"
                            range="2,800 km"
                            image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2084"
                        />
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="py-20 bg-green-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">
                                Committed to Sustainable Aviation
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                We're leading the industry towards carbon-neutral flight with innovative technologies:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-gray-700">Sustainable Aviation Fuel (SAF) compatible engines</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-gray-700">Hybrid-electric propulsion systems</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-gray-700">Advanced materials for lighter, more efficient aircraft</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-gray-700">Zero-emission ground operations</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <img 
                                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070" 
                                alt="Sustainable Aviation" 
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Take Flight?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Partner with us to revolutionize your aviation operations. Contact our team for customized solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Request a Quote
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Component phụ
function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
    return (
        <div className="p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center text-blue-600 mb-4">{icon}</div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">{number}</h3>
            <p className="text-gray-600 font-medium">{label}</p>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-blue-300 mb-4">{icon}</div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-blue-100">{description}</p>
        </div>
    );
}

interface AircraftCardProps {
    name: string;
    category: string;
    capacity: string;
    range: string;
    image: string;
}

function AircraftCard({ name, category, capacity, range, image }: AircraftCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="h-48 overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {category}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{name}</h3>
                <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{capacity}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>Range: {range}</span>
                    </p>
                </div>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
}
