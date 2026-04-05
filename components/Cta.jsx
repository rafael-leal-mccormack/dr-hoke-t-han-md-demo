import { business } from "@/data/business";

export default function Cta() {
  return (
    <section className="bg-brand text-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Schedule a Consultation?</h2>
        <p className="text-blue-200 mb-10 text-lg">
          Our team is here to answer your questions and walk you through your options.
        </p>
        <a
          href={`tel:${business.phone.replace(/\D/g, "")}`}
          className="bg-white text-brand font-bold text-xl px-12 py-4 rounded-full hover:bg-blue-50 transition inline-block"
        >
          Call {business.phone}
        </a>
        <p className="text-blue-300 text-sm mt-5">{business.city}</p>
      </div>
    </section>
  );
}
