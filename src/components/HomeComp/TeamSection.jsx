import { assets } from "../../assets";

const stats = [
  { id: 1, path: assets.himasta, alt: "himasta" },
  { id: 1, path: assets.unhaz, alt: "hamzanwadi" },
  { id: 1, path: assets.ihmsi, alt: "ihmasi" },
];

export default function TeamSection() {
  return (
    <section id="team">
      <div className="bg-red-800 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-white text-4xl font-bold">
            <h2 className="m-4 text-center pb-5">Our Team</h2>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4 p-15"
              >
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <img src={stat.path} className="w-52" alt={stat.alt} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
