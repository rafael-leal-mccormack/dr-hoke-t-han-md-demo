import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-8 px-6 text-center">
      <p className="mb-1">
        © {new Date().getFullYear()} {business.name}
        {business.specialty ? ` · ${business.specialty}` : ""} · {business.city}
      </p>
      <p>{business.phone}</p>
    </footer>
  );
}
