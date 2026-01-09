import { ImageZoom } from "./zoomable-image"

export interface FullWidthImageGridImage {
  src: string
  alt: string
  label?: string
}

export interface FullWidthImageGridProps {
  images: FullWidthImageGridImage[]
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: string
  aspectRatio?: string
  showLabels?: boolean
}

const defaultLabels = ["X7 - Boca Raton", "K10 - Boca Raton", "M19 - Boca Raton", "L24 - Boca Raton", "C15 - Boca Raton", "V8 - Boca Raton", "S29 - Boca Raton"];

export function FullWidthImageGrid({ 
  images,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "gap-4 lg:gap-6",
  aspectRatio = "aspect-video", // 16:9 by default
  showLabels = true
}: FullWidthImageGridProps) {
  const gridCols = `grid-cols-${columns.mobile || 1} md:grid-cols-${columns.tablet || 2} lg:grid-cols-${columns.desktop || 3}`
  
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-md font-medium tracking-[0.7em] uppercase text-gray-600 mb-8 text-center">
          GALLERY
        </h2>
        <div className={`grid ${gridCols} ${gap}`}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`${aspectRatio} overflow-hidden bg-gray-100 relative group`}
            >
              <ImageZoom
                src={image.src}
                alt={image.alt}
                loading={index < 3 ? "eager" : "lazy"}
              />
              {showLabels && (
                <div className="absolute bottom-0 left-0 p-3 pointer-events-none">
                  <span className="text-white text-xs font-medium tracking-wider uppercase px-2 py-1 backdrop-blur-sm">
                    {image.label || defaultLabels[index % defaultLabels.length]}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
