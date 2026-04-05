import { business } from "@/data/business";

export default function TrustBar() {
  const items = [
    "✔ Board-Certified Specialist",
    "✔ Most Major Insurances Accepted",
    "✔ Personalized Treatment Plans",
    `✔ Serving ${business.city}`,
  ];

  return (
    <section className="bg-brand-pale border-b border-blue-100 py-5 px-6">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-brand text-sm font-semibold">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
