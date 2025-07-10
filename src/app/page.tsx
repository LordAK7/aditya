import Image from "next/image";
import Companies from "./components/companies";
import About from "./components/about";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/Hero.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            suppressHydrationWarning={true}
          />
        </div>
        
        {/* Bottom Vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent z-20"></div>
        
        {/* Transparent Header */}
        <header className="relative z-10 bg-transparent pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <nav className="flex items-center justify-between w-full space-x-8">
                <a href="#about" className="font-inter text-lg hover:opacity-80 transition-opacity drop-shadow-lg uppercase" style={{color: '#545045'}} suppressHydrationWarning={true}>
                  About
                </a>
                <a href="#early-life" className="font-inter text-lg hover:opacity-80 transition-opacity drop-shadow-lg uppercase" style={{color: '#545045'}} suppressHydrationWarning={true}>
                  Early life
                </a>
                <a href="#" className="font-playfair-display font-semibold text-2xl hover:opacity-80 transition-opacity drop-shadow-lg uppercase" style={{fontWeight: 600, color: '#545045'}} suppressHydrationWarning={true}>
                  Aditya KAMBLE
                </a>
                <a href="#companies" className="font-inter text-lg hover:opacity-80 transition-opacity drop-shadow-lg uppercase" style={{color: '#545045'}} suppressHydrationWarning={true}>
                  companies
                </a>
                <a href="#contact" className="font-inter text-lg hover:opacity-80 transition-opacity drop-shadow-lg uppercase" style={{color: '#545045'}} suppressHydrationWarning={true}>
                  contact
                </a>
              </nav>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            {/* Content area - no welcome text */}
          </div>
        </main>
      </div>
      
      {/* Companies Section */}
      <Companies />
      
      {/* About Section */}
      <About />
    </div>
  );
}
