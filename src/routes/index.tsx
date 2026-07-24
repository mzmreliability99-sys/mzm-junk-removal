import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// ─── SVG Icons ────────────────────────────────────────────────
function IconTruck({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="m16 8 4 0 3 4v4h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function IconHome({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function IconBuilding({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}

function IconHammer({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14" />
    </svg>
  )
}

function IconCouch({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
    </svg>
  )
}

function IconLeaf({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function IconGarage({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5 12 3l9 6.5V21H3V9.5z" />
      <rect x="8" y="13" width="8" height="8" rx="0.5" />
      <line x1="8" y1="15.5" x2="16" y2="15.5" />
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  )
}

function IconPhone({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.28 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconMail({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconMapPin({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconFacebook({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconInstagram({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

// ─── Services data ─────────────────────────────────────────────
const services = [
  {
    icon: <IconHome size={22} />,
    name: 'Residential Cleanouts',
    desc: 'Full household junk removal — garages, attics, basements, and entire homes. We haul it all away cleanly.',
  },
  {
    icon: <IconBuilding size={22} />,
    name: 'Commercial Cleanouts',
    desc: 'Office and retail space cleanouts. Reliable scheduling so your business stays on track.',
  },
  {
    icon: <IconGarage size={22} />,
    name: 'Garage Cleanout',
    desc: 'Reclaim your garage — we clear out all the clutter, old boxes, and forgotten junk so you can actually use the space again.',
  },
  {
    icon: <IconHammer size={22} />,
    name: 'Construction Debris',
    desc: 'Concrete, drywall, lumber, roofing materials — post-construction cleanup handled fast.',
  },
  {
    icon: <IconCouch size={22} />,
    name: 'Furniture & Appliances',
    desc: 'Couches, mattresses, refrigerators, washers — heavy items removed without damage to your property.',
  },
  {
    icon: <IconLeaf size={22} />,
    name: 'Yard Waste Removal',
    desc: 'Tree branches, soil, landscaping debris, and green waste cleared and hauled away.',
  },
  {
    icon: <IconTruck size={22} />,
    name: 'Full-Service Hauling',
    desc: 'Large-volume loads handled with our dump trailer. Same-day and next-day availability.',
  },
]

// ─── Why Us items ──────────────────────────────────────────────
const reasons = [
  {
    num: '01',
    title: 'Same-Day Service',
    desc: 'Call in the morning, we show up ready to work. Fast turnaround is how we roll.',
  },
  {
    num: '02',
    title: 'Locally Owned Since 2026',
    desc: 'MZM Junk Removal was built right here in Roseville. We know this community.',
  },
  {
    num: '03',
    title: 'Upfront Pricing',
    desc: 'No hidden fees. You get a clear quote before we lift a single item.',
  },
  {
    num: '04',
    title: 'Always On Time',
    desc: 'We respect your schedule. When we say we\'ll be there, we\'re there — no waiting around, no excuses.',
  },
  {
    num: '05',
    title: 'We Clean Up After Ourselves',
    desc: 'After every job we sweep up and leave the space tidy. You won\'t be left dealing with dust or leftover debris.',
  },
]

// ─── Service area cities ───────────────────────────────────────
const cities = [
  'Sacramento',
  'West Sacramento',
  'Roseville',
  'Rocklin',
  'Lincoln',
  'Folsom',
  'Citrus Heights',
  'Fair Oaks',
  'Carmichael',
  'Orangevale',
  'Antelope',
  'North Highlands',
  'Rio Linda',
  'Elverta',
  'Rancho Cordova',
  'Granite Bay',
  'Loomis',
  'Auburn',
]

// ─── Ticker items ──────────────────────────────────────────────
const tickerItems = [
  'Residential Cleanouts',
  'Commercial Hauling',
  'Same-Day Service',
  'Construction Debris',
  'Furniture Removal',
  'Yard Waste',
  'Free Estimates',
]

export default function HomePage() {
  return (
    <>
      {/* ─── NAV ─────────────────────────────────────────────── */}
      <nav className="nav">
        <a href="#hero" className="nav-logo">
          MZM<span>.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#area">Service Area</a></li>
          <li><a href="tel:+12792391800" className="nav-cta">Call Now</a></li>
        </ul>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            Roseville &amp; Sacramento, CA
          </div>
          <h1 className="hero-title">
            Junk<br />
            <span className="hero-title-accent">Removal</span><br />
            Done Right
          </h1>
          <p className="hero-tagline">Clean space starts here</p>
          <p className="hero-desc">
            MZM Junk Removal gets rid of what's weighing you down — fast, fair, and without the hassle.
            Residential, commercial, or construction — we handle it all across the greater Sacramento area.
          </p>
          <div className="hero-actions">
            <a href="tel:+12792391800" className="btn-primary">
              <IconPhone size={18} />
              (279) 239-1800
            </a>
            <a href="#services" className="btn-secondary">
              Our Services
            </a>
          </div>
          <div className="hero-badges">
            <div className="badge-item">
              <span className="badge-label">Founded</span>
              <span className="badge-value">2026</span>
            </div>
            <div className="badge-item">
              <span className="badge-label">Coverage</span>
              <span className="badge-value">18 Cities</span>
            </div>
            <div className="badge-item">
              <span className="badge-label">Response</span>
              <span className="badge-value">Same Day</span>
            </div>
          </div>
        </div>

        <div className="hero-image-side">
          <div className="hero-orange-bar" />
          <img src="/truck-front.jpg" alt="MZM Junk Removal Ford F-250 with dump trailer" />
          <div className="hero-image-overlay" />
        </div>
      </section>

      {/* ─── TICKER ─────────────────────────────────────────── */}
      <div className="ticker-bar" aria-hidden="true">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
              <span className="ticker-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">What We Do</div>
            <h2 className="section-title">Our <span>Services</span></h2>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.name} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ───────────────────────────────────────────── */}
      <section id="about" className="whyus">
        <div className="whyus-layout">
          <div className="whyus-images">
            <img className="whyus-img-main" src="/truck-trailer.jpg" alt="MZM truck and dump trailer side view" />
            <img className="whyus-img-secondary" src="/trailer-dump.jpg" alt="MZM heavy-duty dump trailer raised" />
          </div>
          <div>
            <div className="section-eyebrow">Why Choose Us</div>
            <h2 className="section-title">Built on <span>Reliability</span></h2>
            <div className="whyus-list">
              {reasons.map((r) => (
                <div key={r.num} className="whyus-item">
                  <div className="whyus-bullet">{r.num}</div>
                  <div>
                    <div className="whyus-item-title">{r.title}</div>
                    <p className="whyus-item-desc">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────────── */}
      <section id="gallery" className="section" style={{ paddingTop: '1rem' }}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Our Fleet &amp; Work</div>
            <h2 className="section-title">Real <span>Equipment</span></h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item span-col">
              <img src="/truck-loaded.jpg" alt="Truck bed loaded with removed junk" />
            </div>
            <div className="gallery-item">
              <img src="/trailer-open.jpg" alt="Open dump trailer ready for loading" />
            </div>
            <div className="gallery-item">
              <img src="/trailer-dump.jpg" alt="Heavy-duty dump trailer" />
            </div>
            <div className="gallery-item">
              <img src="/truck-trailer.jpg" alt="MZM Ford F-250 with black dump trailer" />
            </div>
            <div className="gallery-item">
              <img src="/truck-front.jpg" alt="MZM truck front view" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA ─────────────────────────────────────── */}
      <section id="area" className="area-section">
        <div className="area-layout">
          <div>
            <div className="section-eyebrow">Where We Work</div>
            <h2 className="section-title">Service <span>Area</span></h2>
            <p style={{ color: '#888', fontSize: '1rem', lineHeight: 1.7, marginTop: '1rem', marginBottom: '0.5rem' }}>
              We serve Roseville and the greater Sacramento region. If you don't see your city listed, give us a call — we'll let you know if we can reach you.
            </p>
            <div className="cities-list">
              {cities.map((city) => (
                <div key={city} className="city-tag">{city}</div>
              ))}
            </div>
          </div>
          <div className="area-map">
            <img src="/service-area.png" alt="MZM service area map covering Sacramento and surrounding cities" />
            <div className="area-map-label">Sacramento Region — Greater Area Coverage</div>
          </div>
        </div>
      </section>

      {/* ─── CTA / CONTACT ────────────────────────────────────── */}
      <section id="contact" className="cta-section">
        <div className="cta-inner">
          <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            Get In Touch
          </div>
          <h2 className="cta-title">
            Ready to Clear <span>Your Space?</span>
          </h2>
          <p className="cta-subtitle">
            Call or text us for a free estimate. We respond fast and show up ready to work.
          </p>

          <div className="contact-grid">
            <a href="tel:+12792391800" className="contact-card">
              <div className="contact-card-icon"><IconPhone size={28} /></div>
              <div className="contact-card-label">Phone / Text</div>
              <div className="contact-card-value">(279) 239-1800</div>
            </a>
            <a href="mailto:mzmreliability99@gmail.com" className="contact-card">
              <div className="contact-card-icon"><IconMail size={28} /></div>
              <div className="contact-card-label">Email</div>
              <div className="contact-card-value">mzmreliability99@gmail.com</div>
            </a>
            <div className="contact-card">
              <div className="contact-card-icon"><IconMapPin size={28} /></div>
              <div className="contact-card-label">Address</div>
              <div className="contact-card-value">906 Main St, Roseville CA 95678</div>
            </div>
            <a href="https://www.facebook.com/profile.php?id=61589972927453&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon"><IconFacebook size={28} /></div>
              <div className="contact-card-label">Facebook</div>
              <div className="contact-card-value">MZM Junk Removal</div>
            </a>
            <a href="https://www.instagram.com/mzmjunkremoval" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon"><IconInstagram size={28} /></div>
              <div className="contact-card-label">Instagram</div>
              <div className="contact-card-value">@mzmjunkremoval</div>
            </a>
          </div>

          <a href="tel:+12792391800" className="cta-phone-big">(279) 239-1800</a>
          <p className="cta-phone-note">Call or Text — We Answer Fast</p>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">MZM<span> Junk Removal</span></div>
          <div className="footer-info">
            906 Main St, Roseville, CA 95678<br />
            mzmreliability99@gmail.com
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61589972927453&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
              <IconFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/mzmjunkremoval" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
              <IconInstagram size={20} />
            </a>
          </div>
          <div className="footer-year">&copy; {new Date().getFullYear()} MZM Junk Removal</div>
        </div>
      </footer>
    </>
  )
}
