import { business } from "@/data/business";

export default function Insurances() {
  if (!business.insurances?.length) return null;

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-2">Billing</p>
        <h2 className="text-3xl font-bold text-brand mb-4">Most Major Insurances Accepted</h2>
        <p className="text-gray-500 mb-10">
          Contact our office and we'll verify your coverage before your first visit.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {business.insurances.map((ins) => (
            <span key={ins} className="bg-brand-pale text-brand text-sm font-medium px-5 py-2 rounded-full">
              {ins}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
