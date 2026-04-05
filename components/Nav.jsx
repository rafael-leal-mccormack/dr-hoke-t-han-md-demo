import { business } from "@/data/business";

export default function Nav() {
  return (
    <header className="bg-brand sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <p className="text-white font-bold text-lg leading-tight">{business.name}</p>
          {business.specialty && (
            <p className="text-blue-200 text-sm">{business.specialty}</p>
          )}
        </div>
        <a
          href={`tel:${business.phone.replace(/\D/g, "")}`}
          className="bg-white text-brand font-semibold text-sm px-5 py-2 rounded-full hover:bg-blue-50 transition"
        >
          {business.phone}
        </a>
      </div>
    </header>
  );
}
