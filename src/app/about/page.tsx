import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sprout, MapPin, Users, Recycle } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-forest text-cream">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="font-heading text-4xl md:text-5xl">Our Story</h1>
            <p className="mt-3 text-cream/70 max-w-xl">
              How three friends turned a forgotten rooftop into a thriving
              community farm.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="prose prose-lg max-w-none text-soil/80">
            <p className="text-lg leading-relaxed">
              <strong className="text-earth">We The Farm</strong> started in May
              2022 as a simple idea: what if we could grow food on the rooftop of
              Beauty World Centre? Three friends with a shared passion for
              sustainability began clearing, composting, and planting — one
              weekend at a time.
            </p>

            <p className="text-lg leading-relaxed mt-6">
              We&apos;re not a registered company or a commercial venture.
              We&apos;re a passion project that runs on weekends, fuelled by
              curiosity, community, and a lot of compost. Our day jobs keep us
              busy during the week, but Saturday mornings you&apos;ll find us on
              the roof, hands in the soil.
            </p>

            <p className="text-lg leading-relaxed mt-6">
              What started as a small patch of herbs has grown into something
              bigger — a platform where neighbours share food waste, volunteers
              learn to farm, architecture students reimagine urban spaces, and
              kids discover where food comes from.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-heading text-3xl text-earth text-center mb-12">
              What Drives Us
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-sage/15 rounded-xl flex items-center justify-center">
                  <Sprout className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-heading text-lg text-earth mb-1">
                  Urban Farming
                </h3>
                <p className="text-sm text-soil/60">
                  Proving that food can grow anywhere — even on a rooftop in the
                  city.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-sage/15 rounded-xl flex items-center justify-center">
                  <Recycle className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-heading text-lg text-earth mb-1">
                  Zero Waste
                </h3>
                <p className="text-sm text-soil/60">
                  Collecting food waste from the neighbourhood and transforming
                  it into compost.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-sage/15 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-heading text-lg text-earth mb-1">
                  Community
                </h3>
                <p className="text-sm text-soil/60">
                  Bridging generations and backgrounds through shared work and
                  shared meals.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-sage/15 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-heading text-lg text-earth mb-1">
                  Place-Making
                </h3>
                <p className="text-sm text-soil/60">
                  Rejuvenating under-utilised rooftop spaces into vibrant
                  community hubs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-earth text-cream">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="font-heading text-3xl mb-4">Want to Get Involved?</h2>
            <p className="text-cream/70 max-w-md mx-auto mb-8">
              Whether you want to volunteer, donate food waste, or just visit
              the farm — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/events"
                className="bg-terracotta text-cream px-6 py-3 rounded-full font-medium hover:bg-terracotta/90 transition-colors"
              >
                Join an Event
              </Link>
              <a
                href="https://www.instagram.com/wethefarm"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cream/30 text-cream px-6 py-3 rounded-full font-medium hover:bg-cream/10 transition-colors"
              >
                Message Us on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
