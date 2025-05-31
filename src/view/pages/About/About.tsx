export function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f0fff4] to-[#d2f8e5] text-gray-800 font-serif px-6 py-20">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h1 className="text-5xl font-bold text-center text-[#1a7f5b] mb-6">
                    About <span className="text-[#45d69b]">ToolNest</span>
                </h1>
                <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    <strong className="text-[#1a7f5b]">ToolNest</strong> is your all-in-one solution for hardware shop management.
                    We’re passionate about helping businesses simplify operations with modern, efficient, and secure digital tools.
                </p>

                {/* Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-3xl p-10">
                    {/* Vision */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-[#1a7f5b]">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To revolutionize the hardware retail industry with intelligent systems that make daily operations effortless.
                            ToolNest aims to empower shop owners with tools that are reliable, scalable, and easy to use.
                        </p>
                    </div>

                    {/* What We Do */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-[#1a7f5b]">What We Do</h2>
                        <p className="text-gray-700 leading-relaxed">
                            ToolNest delivers a powerful web-based platform for inventory tracking, customer management,
                            order processing, and payment integration using modern technologies like Spring Boot, JWT, and PayHere.
                        </p>
                    </div>
                </div>

                {/* Core Features */}
                <div className="mt-16">
                    <h2 className="text-2xl font-semibold text-center text-[#1a7f5b] mb-8">Our Core Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        {[
                            { title: "Inventory Control", desc: "Track stock levels and receive alerts with ease." },
                            { title: "Secure Payments", desc: "Integrated PayHere Sandbox for smooth transactions." },
                            { title: "User Management", desc: "Manage staff and user access securely with JWT." },
                            { title: "Responsive Design", desc: "Accessible on desktop and mobile, anytime, anywhere." },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-bold text-[#1a7f5b] mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
