import React from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  ...props
}: OptimizedImageProps) {
  // Extract the base path and extension
  const parts = src.split(".");
  const ext = parts.pop() || "";
  const basePath = parts.join(".");
  
  // Only use optimized formats for PNG images from lovable-uploads
  const isPNG = ext.toLowerCase() === "png";
  const isFromUploads = src.includes("lovable-uploads");
  
  if (isPNG && isFromUploads) {
    return (
      <picture>
        <source srcSet={`${basePath}.avif`} type="image/avif" />
        <source srcSet={`${basePath}.webp`} type="image/webp" />
        <img
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          {...props}
        />
      </picture>
    );
  }

  // For non-PNG or images not in lovable-uploads folder, use standard img tag
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
}
