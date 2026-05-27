import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-earth text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div>
            <Link href="/" className="font-heading text-2xl tracking-tight">
              wethefarm
            </Link>
            <p className="mt-3 text-cream/50 text-sm leading-relaxed max-w-xs">
              Platform for Exchange, Compost &amp; Produce.
              <br />
              Beauty World Centre Rooftop, Singapore.
            </p>
          </div>

          <div className="flex gap-16 text-sm">
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase text-honey/50 mb-5">
                Explore
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/events"
                  className="text-cream/60 hover:text-honey transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/shop"
                  className="text-cream/60 hover:text-honey transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="text-cream/60 hover:text-honey transition-colors"
                >
                  About
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase text-honey/50 mb-5">
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/wethefarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 hover:text-honey transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream/10 flex items-center justify-between text-xs text-cream/25">
          <p>&copy; {new Date().getFullYear()} We The Farm</p>
          <Link
            href="/admin/login"
            className="hover:text-cream/40 transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
