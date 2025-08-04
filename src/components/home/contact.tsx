import { Heart, MessageCircle, Sparkles } from "lucide-react";

export function Contact() {
    const handleChatClick = () => {
        window.open("https://wa.me/62859183953992?text=Halo%20,%20saya%20ingin%20diskusi%20lebih%20lanjut%20setelah%20melihat%20portfolio%20Anda.", "_blank");
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden transition-all">

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full animate-bounce bg-blue-500/30 dark:bg-blue-400/40"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 3) * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + i * 0.3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-lg rounded-full border shadow-lg mb-8 transition-all duration-300 
                        bg-white/80 border-white/20 text-gray-700 dark:bg-gray-800/80 dark:border-gray-700/20 dark:text-gray-">
                        <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                        <span className="font-medium">Thank You</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-300 
                        bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent
                        dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 ">
                        Thanks for
                        <br />
                        <span className="relative inline-block">
                            Visiting
                            <Sparkles className="absolute -top-2 -right-8 w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-4 font-light transition-colors duration-300 dark:text-gray-300 text-gray-600">
                        Hope you enjoyed exploring my work!
                    </p>
                    
                    <p className="text-lg mb-12 max-w-2xl mx-auto transition-colors duration-300 text-gray-500 dark:text-gray-400">
                        Ready to bring your ideas to life? Let&apos;s start a conversation and create something amazing together.
                    </p>
                </div>

                {/* Chat Button */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    
                    <button
                        onClick={handleChatClick}
                        className="relative hover:cursor-pointer flex items-center bg-white dark:bg-gray-900 gap-4 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl mx-auto"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <MessageCircle className="w-6 h-6 text-green-500" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="transition-colors duration-300 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                                Let&apos;s Chat on WhatsApp
                            </span>
                        </div>
                        
                        <div className="w-0 group-hover:w-6 overflow-hidden transition-all duration-300">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">→</span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}