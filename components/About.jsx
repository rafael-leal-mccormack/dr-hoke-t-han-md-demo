import { business } from "@/data/business";

export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-2">About the Practice</p>
          <h2 className="text-3xl font-bold text-brand mb-5">Expert Care You Can Trust</h2>
          <p className="text-gray-600 leading-relaxed">{business.description}</p>
          {business.phone && (
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="inline-block mt-8 bg-brand text-white font-bold px-7 py-3 rounded-full hover:bg-brand-dark transition"
            >
              Schedule a Consultation
            </a>
          )}
        </div>
        <div className="bg-brand-pale rounded-2xl p-10 text-center">
          <div className="text-6xl mb-4">🩺</div>
          {business.doctorName && (
            <h3 className="text-xl font-bold text-brand mb-1">{business.doctorName}</h3>
          )}
          {business.specialty && (
            <p className="text-gray-500 text-sm mb-1">{business.specialty}</p>
          )}
          <p className="text-gray-500 text-sm mb-4">{business.city}</p>
          <a href={`tel:${business.phone.replace(/\D/g, "")}`} className="text-accent font-semibold hover:underline">
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
