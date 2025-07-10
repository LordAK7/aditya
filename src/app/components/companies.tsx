import Image from "next/image";

export default function Companies() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-playfair-display text-white text-6xl uppercase mb-16" style={{fontWeight: 500}}>
            Companies
          </h2>
          
          {/* Logos Container */}
          <div className="flex justify-between items-center w-full px-4 gap-8">
            <div className="flex-1 flex justify-center">
              <Image
                src="/1.svg"
                alt="Company 1"
                width={800}
                height={600}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 w-full max-w-[800px] h-auto"
                suppressHydrationWarning={true}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/2.svg"
                alt="Company 2"
                width={800}
                height={600}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 w-full max-w-[800px] h-auto"
                suppressHydrationWarning={true}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/3.svg"
                alt="Company 3"
                width={800}
                height={600}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 w-full max-w-[800px] h-auto"
                suppressHydrationWarning={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 