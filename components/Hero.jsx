import { business } from "@/data/business";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background accent blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center relative">

        {/* Left — copy */}
        <div className="animate-fade-up">
          {business.specialty && (
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {business.specialty}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand leading-[1.1] mb-6">
            {business.tagline}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
            {business.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="bg-brand hover:bg-brand-mid text-white font-bold px-8 py-3.5 rounded-full transition text-base"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-full transition text-base"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right — stat card */}
        <div className="animate-fade-up delay-200 flex justify-center md:justify-end">
          <div className="relative">
            {/* Main card */}
            <div className="bg-brand rounded-3xl p-10 text-white w-72">
              <div className="text-5xl mb-4">🩺</div>
              {business.doctorName && (
                <p className="font-bold text-xl mb-1">{business.doctorName}</p>
              )}
              {business.specialty && (
                <p className="text-accent text-sm font-medium mb-4">{business.specialty}</p>
              )}
              <p className="text-white/60 text-sm">{business.city}</p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="text-accent font-semibold text-sm hover:underline"
                >
                  {business.phone}
                </a>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              ✔ Board Certified
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg rounded-2xl px-4 py-3 text-center">
              <p className="text-brand font-extrabold text-xl">Most</p>
              <p className="text-gray-500 text-xs">insurances accepted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
