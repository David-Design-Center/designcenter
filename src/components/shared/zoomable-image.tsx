import { type ImgHTMLAttributes } from "react"
import Zoom, { type UncontrolledProps } from "react-medium-image-zoom"
import { cn } from "../../lib/utils"

export interface ImageZoomProps extends ImgHTMLAttributes<HTMLImageElement> {
  zoomInProps?: ImgHTMLAttributes<HTMLImageElement>
  zoomProps?: UncontrolledProps
  className?: string
  alt: string
}

export function ImageZoom({
  zoomInProps,
  zoomProps,
  className,
  children,
  alt,
  ...props
}: ImageZoomProps) {
  return (
    <Zoom
      zoomMargin={20}
      wrapElement="span"
      {...zoomProps}
      zoomImg={{
        src: props.src as string,
        className: cn(
          "image-rendering-high-quality cursor-zoom-out", 
          zoomInProps?.className
        ),
        ...zoomInProps,
      }}
    >
      {children ?? (
        <img
          className={cn(
            "cursor-zoom-in transition-all w-full h-full object-cover",
            className
          )}
          alt={alt}
          {...props}
        />
      )}
    </Zoom>
  )
}
