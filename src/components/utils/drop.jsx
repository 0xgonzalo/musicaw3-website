import Image from "next/image"
import Link from 'next/link'

export default function Drop({ id, title, location, description, link }) {
  return (
    <div className="animate-fade-in">
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="glass-card p-6 md:p-8 group cursor-pointer hover:bg-white/[0.08] transition-all duration-500">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Volume Number */}
            <div className="flex-shrink-0">
              <span className="font-stretchFont text-6xl md:text-8xl text-gradient-brand opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                {id}
              </span>
            </div>

            {/* Album Art */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 bg-brand-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={location}
                  width={280}
                  height={280}
                  alt={title}
                  className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-stretchFont text-2xl md:text-4xl lg:text-5xl text-white mb-4 group-hover:text-gradient-brand transition-all duration-300">
                {title}
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                {description}
              </p>
              {/* CTA */}
              <div className="mt-6 inline-flex items-center gap-2 text-brand-accent group-hover:text-white transition-colors duration-300">
                <span className="text-sm font-medium">Escuchar ahora</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
