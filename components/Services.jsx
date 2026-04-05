import { business } from "@/data/business";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-2">What We Offer</p>
          <h2 className="text-3xl font-bold text-brand">Our Services</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {business.services.map((svc) => (
            <div
              key={svc.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="text-3xl mb-3">{svc.icon}</div>
              <h3 className="font-bold text-brand text-lg mb-1">{svc.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
