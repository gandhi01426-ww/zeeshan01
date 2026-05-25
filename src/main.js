import React, { useEffect, useMemo, useRef, useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import htm from "https://esm.sh/htm@3.1.1";
import {
  ArrowRight,
  Building2,
  ChefHat,
  Clock,
  Crown,
  Filter,
  Flame,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Navigation,
  Phone,
  Search,
  Sparkles,
  Star,
  Users,
  Utensils,
  X
} from "https://esm.sh/lucide-react@0.468.0?deps=react@18.2.0";

import {
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_WA,
  galleryImages,
  images,
  menuCategories,
  menuItems,
  signatureDishes
} from "./menu-data.js";

const html = htm.bind(React.createElement);

const navLinks = [
  ["Home", "#home"],
  ["Dishes", "#dishes"],
  ["Menu", "#menu"],
  ["Gallery", "#gallery"],
  ["Experience", "#experience"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"]
];

function orderUrl(itemName = "a table / order") {
  return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
    `Hi Zeeshan Restaurant, I want to order: ${itemName}`
  )}`;
}

function directionsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
}

function currency(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function useRevealAnimations() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useCursorGlow() {
  useEffect(() => {
    const handleMove = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);
}

function IconText({ icon: Icon, children }) {
  return html`
    <span className="inline-flex items-center gap-2 rounded-full border border-brass/25 bg-cream/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cream/80">
      <${Icon} size=${15} strokeWidth=${1.8} className="text-gold" />
      ${children}
    </span>
  `;
}

function ActionLink({ href, children, icon: Icon, variant = "primary", external = false, className = "" }) {
  const variants = {
    primary:
      "bg-gradient-to-r from-brass via-gold to-brass text-ink shadow-gold hover:shadow-[0_18px_70px_rgba(244,212,124,.28)]",
    secondary: "border border-brass/35 bg-cream/8 text-cream hover:border-gold/70 hover:bg-cream/12",
    ghost: "border border-cream/15 bg-black/25 text-cream hover:border-brass/55 hover:text-gold"
  };

  return html`
    <a
      href=${href}
      target=${external ? "_blank" : undefined}
      rel=${external ? "noreferrer" : undefined}
      className=${`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      ${Icon && html`<${Icon} size=${18} strokeWidth=${1.9} className="shrink-0 transition group-hover:scale-110" />`}
      <span>${children}</span>
      ${variant === "primary" && html`<${ArrowRight} size=${17} strokeWidth=${1.9} className="transition group-hover:translate-x-1" />`}
    </a>
  `;
}

function Header() {
  const [open, setOpen] = useState(false);

  return html`
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cream/12 bg-ink/70 px-4 py-3 shadow-ember backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3" aria-label="Zeeshan Restaurant home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-brass/45 bg-brass/10 font-display text-lg font-bold text-gold">
            Z
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-[0.18em] text-cream">ZEESHAN</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-gold/80">Apna Hyderabadi Food</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          ${navLinks.map(
            ([label, href]) => html`
              <a href=${href} className="rounded-full px-4 py-2 text-sm font-medium text-cream/72 transition hover:bg-cream/8 hover:text-gold">
                ${label}
              </a>
            `
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <${ActionLink} href=${`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} icon=${Phone} variant="ghost">Call</${ActionLink}>
          <${ActionLink} href=${orderUrl("Hyderabadi Biryani")} icon=${MessageCircle} external=${true}>WhatsApp</${ActionLink}>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 bg-cream/8 text-cream lg:hidden"
          aria-label=${open ? "Close menu" : "Open menu"}
          aria-expanded=${open}
          onClick=${() => setOpen((value) => !value)}
        >
          ${open ? html`<${X} size=${21} />` : html`<${MenuIcon} size=${21} />`}
        </button>
      </div>

      ${open &&
      html`
        <div className="mx-auto mt-3 max-w-7xl rounded-[1.4rem] border border-brass/20 bg-ink/95 p-3 shadow-ember backdrop-blur-xl lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            ${navLinks.map(
              ([label, href]) => html`
                <a
                  href=${href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-cream/82 hover:bg-cream/8 hover:text-gold"
                  onClick=${() => setOpen(false)}
                >
                  ${label}
                </a>
              `
            )}
          </nav>
        </div>
      `}
    </header>
  `;
}

function Hero() {
  const sceneRef = useRef(null);
  const spices = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => ({
        left: `${(index * 17) % 100}%`,
        delay: `${-(index * 0.7)}s`,
        duration: `${9 + (index % 7)}s`,
        drift: `${index % 2 === 0 ? "" : "-"}${18 + index * 2}px`
      })),
    []
  );

  function handlePointerMove(event) {
    const node = sceneRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left - rect.width / 2}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top - rect.height / 2}px`);
  }

  return html`
    <section
      id="home"
      ref=${sceneRef}
      onPointerMove=${handlePointerMove}
      className="hero-scene relative flex min-h-[94svh] items-center overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:min-h-[96svh] lg:pt-32"
    >
      <div className="absolute inset-0">
        <img src=${images.interior1} alt="Zeeshan Restaurant premium dining hall" className="hero-bg h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,3,2,.92),rgba(13,7,4,.72)_46%,rgba(5,3,2,.54)),radial-gradient(circle_at_68%_28%,rgba(244,212,124,.24),transparent_30rem)]"></div>
        <img
          src=${images.biryani}
          alt="Hyderabadi biryani at Zeeshan Restaurant"
          className="hero-plate absolute bottom-[-4.5rem] right-[-7rem] h-72 w-72 rounded-full object-cover opacity-35 shadow-gold ring-1 ring-gold/30 sm:bottom-[-5rem] sm:right-[-5rem] sm:h-96 sm:w-96 lg:bottom-8 lg:right-[-4rem] lg:h-[42vw] lg:max-h-[34rem] lg:min-h-[22rem] lg:w-[42vw] lg:min-w-[22rem] lg:opacity-95"
        />
        <img
          src=${images.front}
          alt="Zeeshan Restaurant Srikakulam building front"
          className="hero-front absolute bottom-10 left-[58%] hidden h-36 w-60 rounded-[1.2rem] border border-gold/30 object-cover shadow-ember xl:block"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        ${spices.map(
          (spice) => html`
            <span
              className="spice absolute bottom-[-3rem] h-1.5 w-1.5 rounded-full bg-gold/60 shadow-[0_0_20px_rgba(244,212,124,.75)]"
              style=${{
                left: spice.left,
                "--delay": spice.delay,
                "--duration": spice.duration,
                "--drift": spice.drift
              }}
            ></span>
          `
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl" data-reveal>
          <div className="mb-5 flex flex-wrap gap-2">
            <${IconText} icon=${Crown}>Hyderabadi Restaurant</${IconText}>
            <${IconText} icon=${Star}>3.6 from 717+ Google reviews</${IconText}>
            <${IconText} icon=${Utensils}>₹200 - ₹1,400</${IconText}>
          </div>

          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.5em] text-gold/90 sm:text-base">
            Zeeshan Restaurant Srikakulam
          </p>
          <h1 className="gold-text font-display text-[clamp(4.1rem,17vw,12rem)] font-extrabold leading-[0.84]">
            Zeeshan
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-3xl font-semibold text-cream sm:text-5xl">
            Apna Hyderabadi Food
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-cream/76 sm:text-lg">
            Dum biryani, Arabian mandi, kebabs and private family dining above Ramlakshmana Junction.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <${ActionLink} href=${orderUrl("Hyderabadi Biryani")} icon=${MessageCircle} external=${true} className="sm:min-w-48">
              Order on WhatsApp
            </${ActionLink}>
            <${ActionLink} href="#menu" icon=${Search} variant="secondary" className="sm:min-w-40">View Menu</${ActionLink}>
            <${ActionLink} href=${directionsUrl()} icon=${Navigation} variant="ghost" external=${true} className="sm:min-w-44">
              Get Directions
            </${ActionLink}>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 hidden w-[min(92vw,56rem)] -translate-x-1/2 rounded-full border border-brass/25 bg-ink/88 px-5 py-4 shadow-ember backdrop-blur-xl md:block">
        <div className="grid grid-cols-3 divide-x divide-brass/20 text-center text-xs uppercase tracking-[0.2em] text-cream/65">
          <span>Private Dining Room</span>
          <span>All You Can Eat</span>
          <span>2nd & 3rd Floor Seating</span>
        </div>
      </div>
    </section>
  `;
}

function SectionHeading({ eyebrow, title, body, align = "left" }) {
  return html`
    <div className=${`mx-auto mb-10 max-w-3xl ${align === "center" ? "text-center" : ""}`} data-reveal>
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold/80">
        <span className="h-px w-8 bg-brass/70"></span>
        ${eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-cream sm:text-5xl">${title}</h2>
      ${body && html`<p className="mt-4 text-base leading-8 text-cream/68">${body}</p>`}
    </div>
  `;
}

function FoodCard({ dish, index }) {
  function handleMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--tilt-y", `${((x / rect.width) - 0.5) * 10}deg`);
    card.style.setProperty("--tilt-x", `${((0.5 - y / rect.height) * 10)}deg`);
  }

  function handleLeave(event) {
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
  }

  return html`
    <article
      className="tilt-card group relative overflow-hidden rounded-[1.4rem] border border-brass/20 bg-cream/6"
      onPointerMove=${handleMove}
      onPointerLeave=${handleLeave}
      data-reveal
      style=${{ transitionDelay: `${Math.min(index * 35, 260)}ms` }}
    >
      <div className="relative aspect-[4/4.35] overflow-hidden">
        <img src=${dish.image} alt=${dish.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"></div>
        ${dish.name.includes("Biryani") &&
        html`
          <span className="steam steam-1"></span>
          <span className="steam steam-2"></span>
          <span className="steam steam-3"></span>
        `}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="mb-3 inline-flex rounded-full border border-gold/35 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
          ${dish.category}
        </div>
        <h3 className="font-display text-2xl font-bold text-cream">${dish.name}</h3>
        <p className="mt-2 text-sm leading-6 text-cream/68">${dish.accent}</p>
      </div>
    </article>
  `;
}

function SignatureDishes() {
  return html`
    <section id="dishes" className="relative px-4 py-24 sm:px-6 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Signature Dishes"
          title="Dum, flame and slow-cooked Hyderabadi comfort"
          body="A food-first selection shaped around Zeeshan's biryani, mandi, kebabs, starters, curries and Chinese favorites."
          align="center"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${signatureDishes.map((dish, index) => html`<${FoodCard} key=${dish.name} dish=${dish} index=${index} />`)}
        </div>
      </div>
    </section>
  `;
}

function MenuItemCard({ item }) {
  return html`
    <article className="group grid gap-4 rounded-[1.1rem] border border-cream/10 bg-black/24 p-4 transition hover:border-gold/40 hover:bg-cream/7 sm:grid-cols-[1fr_auto] sm:items-center">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-cream">${item.name}</h3>
          ${item.section !== item.category &&
          html`<span className="rounded-full border border-sage/35 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sage">${item.section}</span>`}
        </div>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/48">${item.category}</p>
      </div>
      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <span className="font-display text-xl font-bold text-gold">${currency(item.price)}</span>
        <a
          href=${orderUrl(item.name)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-brass/35 bg-brass/10 px-3 py-2 text-xs font-semibold text-gold transition hover:bg-brass hover:text-ink"
          aria-label=${`Order ${item.name} on WhatsApp`}
        >
          <${MessageCircle} size=${15} />
          Order
        </a>
      </div>
    </article>
  `;
}

function FullMenu() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const categoryMatch = category === "All" || item.category === category;
      const searchMatch =
        !search ||
        item.name.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search) ||
        item.section.toLowerCase().includes(search);
      return categoryMatch && searchMatch;
    });
  }, [category, query]);

  return html`
    <section id="menu" className="relative overflow-hidden border-y border-brass/15 bg-[linear-gradient(180deg,rgba(255,242,216,.04),rgba(0,0,0,.18))] px-4 py-24 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Full Menu"
          title="Searchable menu, built from the uploaded Zeeshan menu cards"
          body="Every item includes rupee pricing and a direct WhatsApp order button."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="min-w-0" data-reveal>
            <div className="glass sticky top-24 z-20 rounded-[1.4rem] p-3">
              <label className="relative block">
                <${Search} size=${18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
                <input
                  value=${query}
                  onInput=${(event) => setQuery(event.currentTarget.value)}
                  className="h-14 w-full rounded-full border border-cream/10 bg-black/35 pl-12 pr-4 text-sm text-cream outline-none transition placeholder:text-cream/38 focus:border-gold/60"
                  placeholder="Search biryani, mandi, kebab, curry..."
                  type="search"
                />
              </label>
              <div className="category-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
                ${menuCategories.map(
                  (name) => html`
                    <button
                      key=${name}
                      type="button"
                      onClick=${() => setCategory(name)}
                      className=${`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        category === name
                          ? "border-gold bg-gold text-ink"
                          : "border-cream/12 bg-cream/5 text-cream/72 hover:border-brass/60 hover:text-gold"
                      }`}
                    >
                      ${name}
                    </button>
                  `
                )}
              </div>
              <div className="mt-3 flex items-center justify-between px-2 text-xs uppercase tracking-[0.22em] text-cream/45">
                <span>${filteredItems.length} items</span>
                <span className="inline-flex items-center gap-2"><${Filter} size=${14} /> ${category}</span>
              </div>
            </div>

            <div className="menu-scrollbar mt-5 grid gap-3 lg:max-h-[63rem] lg:overflow-y-auto lg:pr-2">
              ${filteredItems.length
                ? filteredItems.map((item) => html`<${MenuItemCard} key=${item.id} item=${item} />`)
                : html`
                    <div className="rounded-[1.1rem] border border-brass/20 bg-black/24 p-8 text-center text-cream/70">
                      No menu items found for that search.
                    </div>
                  `}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start" data-reveal>
            <div className="rounded-[1.4rem] border border-brass/20 bg-ink/80 p-4 shadow-ember">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-cream">Menu Card</h3>
                <span className="rounded-full bg-brass/15 px-3 py-1 text-xs font-semibold text-gold">Original</span>
              </div>
              <div className="grid gap-4">
                ${[
                  ["Front side", images.menuFront],
                  ["Back side", images.menuBack]
                ].map(
                  ([label, src]) => html`
                    <a href=${src} target="_blank" rel="noreferrer" className="gallery-zoom group overflow-hidden rounded-[1rem] border border-cream/10 bg-black/28">
                      <img src=${src} alt=${`Zeeshan menu card ${label}`} className="aspect-[3/4] w-full object-cover" loading="lazy" decoding="async" />
                      <span className="block border-t border-cream/10 px-4 py-3 text-sm font-semibold text-cream/76 group-hover:text-gold">${label}</span>
                    </a>
                  `
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function Gallery() {
  return html`
    <section id="gallery" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Gallery"
          title="Inside the dining room, outside the complex, and on the table"
          body="Restaurant front, interiors, biryani, mandi and the original menu images are all part of the visual experience."
          align="center"
        />
        <div className="masonry columns-1 sm:columns-2 lg:columns-3" data-reveal>
          ${galleryImages.map(
            (image) => html`
              <figure className="masonry-item gallery-zoom overflow-hidden rounded-[1.3rem] border border-brass/18 bg-cream/5 shadow-ember">
                <img
                  src=${image.src}
                  alt=${image.title}
                  className=${`w-full object-cover ${image.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="border-t border-cream/10 px-4 py-3 text-sm font-medium text-cream/72">${image.title}</figcaption>
              </figure>
            `
          )}
        </div>
      </div>
    </section>
  `;
}

function Experience() {
  const features = [
    {
      icon: Users,
      title: "Family Dining",
      body: "Comfortable seating for groups, biryani tables and weekend meals."
    },
    {
      icon: Building2,
      title: "Private Dining Room",
      body: "More intimate sections for family celebrations and quieter dinners."
    },
    {
      icon: Sparkles,
      title: "All You Can Eat",
      body: "A service option for diners who want the full Hyderabadi spread."
    },
    {
      icon: Flame,
      title: "Premium Hyderabadi Ambience",
      body: "Dark wood, warm lighting, booth seating and a cinematic dining mood."
    },
    {
      icon: Crown,
      title: "2nd & 3rd Floor Seating",
      body: "Dining above Ramlakshmana Junction in Srikakulam."
    }
  ];

  return html`
    <section id="experience" className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_26%,rgba(156,175,136,.16),transparent_24rem),radial-gradient(circle_at_76%_62%,rgba(212,175,55,.13),transparent_26rem)]"></div>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div data-reveal>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold/80">
            <span className="h-px w-8 bg-brass/70"></span>
            Dining Experience
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-cream sm:text-5xl">
            Private booths, family tables and a richer Hyderabadi mood.
          </h2>
          <p className="mt-5 text-base leading-8 text-cream/68">
            Zeeshan balances everyday comfort with a premium dining atmosphere for biryani, mandi, kebabs and curries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <${ActionLink} href=${orderUrl("Chicken Mandi")} icon=${MessageCircle} external=${true}>Book / Order</${ActionLink}>
            <${ActionLink} href=${directionsUrl()} icon=${MapPin} variant="secondary" external=${true}>Directions</${ActionLink}>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2" data-reveal>
          ${features.map(
            (feature) => html`
              <article className="rounded-[1.2rem] border border-brass/18 bg-black/24 p-5">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-brass/12 text-gold">
                  <${feature.icon} size=${22} strokeWidth=${1.8} />
                </div>
                <h3 className="font-display text-xl font-bold text-cream">${feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cream/62">${feature.body}</p>
              </article>
            `
          )}
        </div>
      </div>
    </section>
  `;
}

function Reviews() {
  const reviewCards = [
    {
      title: "Biryani table",
      body: "A hearty biryani stop with family seating and quick sharing plates.",
      rating: 4
    },
    {
      title: "Mandi portions",
      body: "Large platters, warm service and a good option for groups.",
      rating: 4
    },
    {
      title: "Dining ambience",
      body: "The private dining sections and booth seating give it a polished feel.",
      rating: 3
    }
  ];

  return html`
    <section id="reviews" className="border-y border-brass/15 bg-black/18 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Google Reviews"
          title="3.6 stars from 717+ Google reviews"
          body="A compact rating summary styled for the restaurant website, with Google-inspired review highlights."
          align="center"
        />
        <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]" data-reveal>
          <div className="glass rounded-[1.4rem] p-7 text-center">
            <p className="font-display text-7xl font-bold text-gold">3.6</p>
            <div className="mt-4 flex justify-center gap-1 text-gold">
              ${Array.from({ length: 5 }, (_, index) => html`
                <${Star} key=${index} size=${22} fill=${index < 4 ? "currentColor" : "none"} strokeWidth=${1.7} />
              `)}
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-cream/55">717+ Google reviews</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-left">
              <div className="rounded-[1rem] border border-cream/10 bg-black/28 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-cream/45">Cuisine</p>
                <p className="mt-2 font-semibold text-cream">Hyderabadi</p>
              </div>
              <div className="rounded-[1rem] border border-cream/10 bg-black/28 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-cream/45">Range</p>
                <p className="mt-2 font-semibold text-cream">₹200 - ₹1,400</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            ${reviewCards.map(
              (review) => html`
                <article className="rounded-[1.2rem] border border-cream/10 bg-cream/6 p-5">
                  <div className="mb-4 flex gap-1 text-gold">
                    ${Array.from({ length: 5 }, (_, index) => html`
                      <${Star} key=${index} size=${16} fill=${index < review.rating ? "currentColor" : "none"} strokeWidth=${1.7} />
                    `)}
                  </div>
                  <h3 className="font-display text-xl font-bold text-cream">${review.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-cream/64">${review.body}</p>
                </article>
              `
            )}
          </div>
        </div>
      </div>
    </section>
  `;
}

function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

  return html`
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Contact"
          title="Visit Zeeshan at Ramlakshmana Junction"
          body="Call, WhatsApp or open directions for dining on the 2nd and 3rd floor."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]" data-reveal>
          <div className="rounded-[1.4rem] border border-brass/20 bg-ink/82 p-6 shadow-ember">
            <div className="mb-6 overflow-hidden rounded-[1.1rem] border border-cream/10">
              <img src=${images.profile} alt="Google profile for Zeeshan Restaurant Srikakulam" className="aspect-[9/16] w-full object-cover object-top" loading="lazy" decoding="async" />
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cream/45">Phone / WhatsApp</p>
                <a href=${`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="mt-2 inline-block text-xl font-semibold text-gold">${PHONE_DISPLAY}</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cream/45">Address</p>
                <p className="mt-2 text-sm leading-7 text-cream/72">${ADDRESS}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cream/45">Opening Hours</p>
                <p className="mt-2 text-sm leading-7 text-cream/72">Open status shown on Google. Call to confirm today's dining and delivery timings.</p>
              </div>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <${ActionLink} href=${orderUrl("Hyderabadi Biryani")} icon=${MessageCircle} external=${true}>WhatsApp</${ActionLink}>
              <${ActionLink} href=${`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} icon=${Phone} variant="secondary">Call</${ActionLink}>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.4rem] border border-brass/20 bg-black/26 shadow-ember">
            <iframe
              title="Zeeshan Restaurant Srikakulam map"
              src=${mapSrc}
              className="map-frame h-[32rem] w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `;
}

function Footer() {
  return html`
    <footer className="border-t border-brass/15 px-4 py-10 text-center sm:px-6">
      <p className="font-display text-2xl font-bold text-gold">Zeeshan Restaurant Srikakulam</p>
      <p className="mt-2 text-sm text-cream/55">Apna Hyderabadi Food</p>
    </footer>
  `;
}

function StickyMobileOrder() {
  return html`
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <a
        href=${orderUrl("Hyderabadi Biryani")}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brass via-gold to-brass px-5 py-3 text-sm font-bold text-ink shadow-gold"
      >
        <${MessageCircle} size=${19} />
        Order on WhatsApp
      </a>
    </div>
  `;
}

function App() {
  useRevealAnimations();
  useCursorGlow();

  return html`
    <div className="relative min-h-screen overflow-hidden">
      <div className="cursor-glow"></div>
      <${Header} />
      <main>
        <${Hero} />
        <${SignatureDishes} />
        <${FullMenu} />
        <${Gallery} />
        <${Experience} />
        <${Reviews} />
        <${Contact} />
      </main>
      <${Footer} />
      <${StickyMobileOrder} />
    </div>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);
