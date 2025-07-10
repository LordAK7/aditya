import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Transparent Header */}
      <header className="relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4">
            <nav className="flex items-center space-x-8">
              <a href="#about" className="font-inter text-white hover:text-gray-200 transition-colors drop-shadow-lg">
                About
              </a>
              <a href="#early-life" className="font-inter text-white hover:text-gray-200 transition-colors drop-shadow-lg">
                Early life
              </a>
              <a href="#" className="font-playfair-display font-semibold text-white hover:text-gray-200 transition-colors drop-shadow-lg" style={{fontWeight: 600}}>
                Aditya KAMBLE
              </a>
              <a href="#companies" className="font-inter text-white hover:text-gray-200 transition-colors drop-shadow-lg">
                companies
              </a>
              <a href="#contact" className="font-inter text-white hover:text-gray-200 transition-colors drop-shadow-lg">
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
  );
}
