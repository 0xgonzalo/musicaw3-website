import Image from "next/image"
import Link from 'next/link'

const founders = [
  {
    name: "0xGonzalo",
    image: "/founders/gonza.png",
    twitter: "https://twitter.com/0xgonzalo_",
    role: "Co-Founder"
  },
  {
    name: "NENX",
    image: "/founders/nenx.png",
    twitter: "https://twitter.com/n_e_n_x",
    role: "Co-Founder"
  },
  {
    name: "Sol Siete",
    image: "/founders/sol.png",
    twitter: "https://twitter.com/solsiete_web3",
    role: "Co-Founder"
  }
];

export default function FoundersBanner() {
  return(
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-brand-darker to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            El Equipo
          </span>
          <h2 className="font-stretchFont text-5xl md:text-7xl lg:text-8xl section-heading">
            FOUNDERS
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {founders.map((founder) => (
            <Link
              key={founder.name}
              href={founder.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative flex flex-col items-center">
                {/* Image container with glow */}
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/30 to-brand-accent/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    {/* Glass ring */}
                    <div className="absolute -inset-2 rounded-full border border-white/10 group-hover:border-brand-primary/50 transition-colors duration-300" />
                    <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden">
                      <Image
                        src={founder.image}
                        width={320}
                        height={320}
                        alt={founder.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <div className="flex items-center gap-2 text-white">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                          <span className="font-medium">Follow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gradient-brand transition-all duration-300 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-white/50 text-sm">{founder.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
