import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPriceInUSD = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(price);
};


export function constructMetadata({
  title = 'Shieldstrike - custom high-quality phone cases',
  description = 'Create custom high-quality phone cases in seconds',
  image = '/snake-1.png',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    icons,
    metadataBase: new URL("https://shieldstrike.vercel.app/")
  }
}
