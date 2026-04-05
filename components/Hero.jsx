import { business } from "@/data/business";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand to-accent text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {business.specialty && (
          <p className="uppercase tracking-widest text-blue-200 text-sm font-medium mb-3">
            {business.specialty}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
          {business.tagline}
        </h1>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {business.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="bg-white text-brand font-bold px-8 py-3 rounded-full text-lg hover:bg-blue-50 transition"
          >
            Call to Schedule
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-white/10 transition"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
