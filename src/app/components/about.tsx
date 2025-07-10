export default function About() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="flex justify-center">
          {/* Large Textured Rectangle Card */}
          <div 
            className="w-full max-w-6xl h-96 relative overflow-hidden rounded-lg shadow-2xl"
            style={{
              background: `
                radial-gradient(circle at 25% 25%, rgba(60, 60, 60, 0.8) 0%, transparent 2px),
                radial-gradient(circle at 75% 25%, rgba(50, 50, 50, 0.6) 0%, transparent 1px),
                radial-gradient(circle at 25% 75%, rgba(70, 70, 70, 0.7) 0%, transparent 1.5px),
                radial-gradient(circle at 75% 75%, rgba(40, 40, 40, 0.9) 0%, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(55, 55, 55, 0.5) 0%, transparent 1px),
                radial-gradient(circle at 10% 90%, rgba(45, 45, 45, 0.8) 0%, transparent 1.5px),
                radial-gradient(circle at 90% 10%, rgba(65, 65, 65, 0.6) 0%, transparent 1px),
                radial-gradient(circle at 30% 60%, rgba(35, 35, 35, 0.7) 0%, transparent 1px),
                radial-gradient(circle at 80% 40%, rgba(58, 58, 58, 0.8) 0%, transparent 1.5px),
                radial-gradient(circle at 60% 80%, rgba(48, 48, 48, 0.6) 0%, transparent 1px),
                linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 20%, #1f1f1f 40%, #2a2a2a 60%, #1d1d1d 80%, #252525 100%)
              `,
              backgroundSize: '8px 8px, 12px 12px, 6px 6px, 10px 10px, 15px 15px, 7px 7px, 9px 9px, 11px 11px, 5px 5px, 13px 13px, 100% 100%',
              boxShadow: `
                inset 0 0 50px rgba(0, 0, 0, 0.5),
                inset 0 0 100px rgba(0, 0, 0, 0.3),
                0 20px 50px rgba(0, 0, 0, 0.8),
                0 10px 30px rgba(0, 0, 0, 0.6)
              `
            }}
          >
            {/* Additional powdered texture overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `
                  radial-gradient(circle at 15% 15%, rgba(80, 80, 80, 0.3) 0%, transparent 1px),
                  radial-gradient(circle at 85% 85%, rgba(90, 90, 90, 0.2) 0%, transparent 1px),
                  radial-gradient(circle at 45% 25%, rgba(70, 70, 70, 0.4) 0%, transparent 1px),
                  radial-gradient(circle at 65% 75%, rgba(60, 60, 60, 0.3) 0%, transparent 1px),
                  radial-gradient(circle at 35% 85%, rgba(85, 85, 85, 0.2) 0%, transparent 1px),
                  radial-gradient(circle at 95% 45%, rgba(75, 75, 75, 0.3) 0%, transparent 1px)
                `,
                backgroundSize: '3px 3px, 4px 4px, 2px 2px, 5px 5px, 3px 3px, 4px 4px'
              }}
            />
            
            {/* Content area for future content */}
            <div className="relative z-10 p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-playfair-display text-white text-6xl uppercase mb-8" style={{fontWeight: 500}}>
                  About
                </h2>
                {/* Placeholder for future content */}
                <div className="text-gray-300 text-lg">
                  Content will go here...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 