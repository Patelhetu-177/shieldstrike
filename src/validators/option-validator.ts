// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
    { label: 'Black', value: 'black', tw: 'zinc-900' },
    {
      label: 'Blue',
      value: 'blue',
      tw: 'blue-950',
    },
    { label: 'Rose', value: 'rose', tw: 'rose-950' },
  ] as const


  export const MODELS = {
    name: 'models',
    options: [
      {
        label: 'iPhone X',
        value: 'iphonex',
      },
      {
        label: 'iPhone 11',
        value: 'iphone11',
      },
      {
        label: 'iPhone 12',
        value: 'iphone12',
      },
      {
        label: 'iPhone 13',
        value: 'iphone13',
      },
      {
        label: 'iPhone 14',
        value: 'iphone14',
      },
      {
        label: 'iPhone 15',
        value: 'iphone15',
      },
      {
        label: 'iPhone 16',
        value: 'iphone16',
      },
    ],
  } as const


  export const MATERIALS = {
    name: 'material',
    options: [
      {
        label: 'Silicone',
        value: 'silicone',
        description: undefined,
        price: PRODUCT_PRICES.material.silicone,
      },
      {
        label: 'Soft Polycarbonate',
        value: 'polycarbonate',
        description: 'Scratch-resistant coating',
        price: PRODUCT_PRICES.material.polycarbonate,
      },
      {
        label: 'Leather',
        value: 'leather',
        description: 'Premium quality leather with a soft touch',
        price: PRODUCT_PRICES.material.leather,
      },
      {
        label: 'TPU (Thermoplastic Polyurethane)',
        value: 'tpu',
        description: 'Flexible and shock-absorbent material',
        price: PRODUCT_PRICES.material.tpu,
      },
      {
        label: 'Metal',
        value: 'metal',
        description: 'Durable and sleek metal finish',
        price: PRODUCT_PRICES.material.metal,
      },
    ],
  } as const;
  


  export const FINISHES = {
    name: 'finish',
    options: [
      {
        label: 'Smooth Finish',
        value: 'smooth',
        description: undefined,
        price: PRODUCT_PRICES.finish.smooth,
      },
      {
        label: 'Textured Finish',
        value: 'textured',
        description: 'Soft grippy texture',
        price: PRODUCT_PRICES.finish.textured,
      },
      {
        label: 'Matte Finish',
        value: 'matte',
        description: 'Non-glossy and glare-free surface',
        price: PRODUCT_PRICES.finish.matte, // Example price
      },
      {
        label: 'Glossy Finish',
        value: 'glossy',
        description: 'Shiny and reflective surface',
        price: PRODUCT_PRICES.finish.glossy, // Example price
      },
      {
        label: 'Metallic Finish',
        value: 'metallic',
        description: 'Shimmering and eye-catching finish',
        price: PRODUCT_PRICES.finish.metallic, // Example price
      },
    ],
  } as const;
  