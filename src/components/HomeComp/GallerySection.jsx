import { assets } from "../../assets";

const products = [
  {
    id: 1,
    imageSrc: assets.g1,
    imageAlt: "bisok beras",
    animasi: "fade-right",
  },
  {
    id: 2,
    imageSrc: assets.g2,
    imageAlt: "begasingan",
    animasi: "fade-left",
  },
  {
    id: 3,
    imageSrc: assets.g3,
    imageAlt: "perisean",
    animasi: "fade-right",
  },
  {
    id: 4,
    imageSrc: assets.g4,
    imageAlt: "rumah adat",
    animasi: "fade-left",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2
            className="text-5xl font-semibold tracking-tight md:text-4xl text-center my-10"
            data-aos="fade-down"
          >
            Gallery
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  data-aos={product.animasi}
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
