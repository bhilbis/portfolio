import { MessageCircle, MoveRight, Sparkles } from "lucide-react";

export function Contact() {
    const handleChatClick = () => {
        window.open("https://wa.me/62859183953992?text=Halo%20,%20saya%20ingin%20diskusi%20lebih%20lanjut%20setelah%20melihat%20portfolio%20Anda.", "_blank");
    };

    return (
        <section
        id="contact"
        className="w-full min-h-screen relative flex items-center justify-center from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 px-6"
        >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
                <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-500/30 dark:bg-blue-400/40 animate-float"
                style={{
                    left: `${10 + i * 12}%`,
                    top: `${15 + (i % 4) * 20}%`,
                    animationDelay: `${i * 1.2}s`,
                    animationDuration: `${6 + i * 2}s`,
                }}
                />
            ))}
        </div>

            
        <div className="text-center max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border shadow-sm 
            bg-white/70 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-md font-medium text-gray-700 dark:text-gray-300">
            <span className="text-lg">💗</span> Thank You
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400">
            Thanks for <br /> Visiting
            <span className="relative inline-block">
                <Sparkles className="absolute -top-4 -right-8 w-6 h-6 text-yellow-400 animate-spin-slow" />
            </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Hope you enjoyed exploring my work!
            </p>

            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s start a conversation and
            create something amazing together.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
            <button
                onClick={handleChatClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl 
                font-semibold text-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
                shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
                <MessageCircle className="w-6 h-6" />
                Connect on WhatsApp
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform"><MoveRight /></span>
            </button>
            </div>
        </div>
        </section>
    )
}