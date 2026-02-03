import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Plans from './pages/Plans';
import Footer from './components/Footer';

const logo = new URL("../logo upscale.png", import.meta.url).href;
const footerLogo = new URL("../upscalel.png", import.meta.url).href;

const heroImage = new URL("../header (2).jpg", import.meta.url).href;

const clientLogos = [
  { file: "belle care.png", alt: "Belle Care" },
  { file: "Fidelity.png", alt: "Fidelity" },
  { file: "fogel.png", alt: "Fogel" },
  { file: "glaubers.png", alt: "Glaubers" },
  { file: "HL.png", alt: "HL" },
  { file: "Newp.png", alt: "Newp" },
  { file: "noble infusion.png", alt: "Noble Infusion" },
  { file: "On-Time logo.png", alt: "On-Time" },
  { file: "park t.png", alt: "Park T" },
  { file: "pioneer.png", alt: "Pioneer", folder: "" },
  { file: "PLCL.png", alt: "PLCL" },
  { file: "queens nassau.png", alt: "Queens Nassau" },
  { file: "scalia.png", alt: "Scalia" },
  { file: "universal.png", alt: "Universal" },
  { file: "renewf.png", alt: "RenewF", folder: "" },
  { file: "satmar.png", alt: "Satmar", folder: "" },
  { file: "nobleot.png", alt: "Noble OT", folder: "" },
  { file: "prominent.png", alt: "Prominent", folder: "" },
  { file: "glilos.png", alt: "Glilos", folder: "" }
].map(({ file, alt, folder = "Clients logo" }) => ({
  alt,
  src: new URL(folder ? `../${folder}/${file}` : `../${file}`, import.meta.url).href
}));

const reliabilityStats = [
  { label: "client businesses", value: "34" },
  { label: "active users", value: "250+" },
  { label: "tech support", value: "24/7" },
  { label: "average latency", value: "50 ms" }
];

const orbitIntegrations = [
  { alt: "Salesforce", file: "salesforce.png", radius: "165px", duration: "22s", delay: "0s" },
  { alt: "Zendesk", file: "Zendesk-Logo.webp", radius: "150px", duration: "24s", delay: "-3s" },
  { alt: "HubSpot", file: "hubspot.png", radius: "135px", duration: "26s", delay: "-6s", reverse: true },
  { alt: "monday.com", file: "monday.png", radius: "120px", duration: "20s", delay: "-2s", reverse: true },
  { alt: "Microsoft Teams", file: "teams.webp", radius: "95px", duration: "18s", delay: "-5s" },
  { alt: "Oracle", file: "oracle logo.png", radius: "110px", duration: "23s", delay: "-8s" }
].map((logo) => ({
  ...logo,
  src: new URL(`../Integrations/${logo.file}`, import.meta.url).href
}));

const plans = [
  {
    title: "Rocket · $25/mo",
    description: "For small teams wanting a powerful, professional phone system.",
    features: ["Auto Attendants", "Mobile & Web Apps", "Voicemail-to-Email", "Basic Call Management Tools"],
    emphasis: false
  },
  {
    title: "Starship · $35/mo",
    description: "Perfect for growing teams needing collaboration + communication.",
    features: [
      "Everything in Rocket",
      "Business Text Messaging",
      "Call Recording & Enhanced Reporting",
      "Basic Conferencing"
    ],
    emphasis: true
  },
  {
    title: "Satellite · $45/mo",
    description: "Built for large teams needing full UCaaS capabilities.",
    features: [
      "Everything in Starship",
      "Advanced Support & Priority Assistance",
      "Video Conferencing & Team Messaging",
      "Custom Integrations"
    ],
    emphasis: false
  }
];

const solutionFeatures = [
  {
    name: "Call Queues",
    description: "Organize callers into intelligent queues with live agent and wait-time visibility."
  },
  {
    name: "Time Frames",
    description: "Define business-hour, after-hour, and holiday schedules that automatically change routing."
  },
  {
    name: "Call Parking",
    description: "Park calls in shared orbits with support for Dynamic Park, Static Park, and single-button park/retrieve with indicator lights."
  },
  {
    name: "Auto Attendants",
    description: "Multi-level IVRs greet callers and steer them with keypad or speech-driven options."
  },
  {
    name: "Music on hold",
    description: "Deliver branded waiting using Music-On-Hold playlists, whether system default, personalized, randomized, or per-queue."
  },
  {
    name: "Web and mobile app",
    description: "Full PBX controls live inside responsive web and mobile experiences so teams stay connected anywhere."
  },
  {
    name: "Shared lines appearance",
    description: "Mirror high-value lines across devices so assistants can see activity and answer on behalf of execs."
  },
  {
    name: "SMS",
    description: "Send and receive business SMS/MMS alongside voice for quick customer touchpoints."
  },
  {
    name: "Extension User Features",
    description: "Every extension inherits pro capabilities—answering, holding, transferring, voicemail, and forwarding—out of the box."
  },
  {
    name: "PBX System Features",
    description: "Organization-wide PBX controls cover routing, compliance, analytics, and automation from a single source."
  },
  {
    name: "Account Code Tracking",
    description: "Tag calls with account codes to reconcile projects, departments, or billable activity."
  },
  {
    name: "Attendant Console (Web Based)",
    description: "Receptionists manage queues, presence, and transfers from a browser-based attendant console."
  },
  {
    name: "Answer Calls",
    description: "Pick up ringing calls from desk phones, web apps, or mobile notifications instantly."
  },
  {
    name: "Hold",
    description: "Place callers on server-side hold with branded prompts while you consult teammates."
  },
  {
    name: "Transfer",
    description: "Move active calls to coworkers, queues, or voicemail without dropping the caller."
  },
  {
    name: "View Extension Presence",
    description: "See who is idle, busy, ringing, or on DND in real time from any client."
  },
  {
    name: "View Company Contacts",
    description: "Browse the corporate directory with click-to-call access from any endpoint."
  },
  {
    name: "Visually Park and Retrieve Calls",
    description: "Graphical widgets show parked calls so anyone can retrieve the right conversation."
  },
  {
    name: "View Call Queues and Agent Availability",
    description: "Supervisors track queue depth, SLAs, and agent status live."
  },
  {
    name: "BLF / Busy Lamp Field",
    description: "Hardware lamps and app indicators reveal extension states at a glance."
  },
  {
    name: "On Device",
    description: "Configure keys, BLF, and presence states directly on supported desk phones."
  },
  {
    name: "Mobile App Phone (Android and iOS)",
    description: "Native mobile apps deliver HD calling, SMS, and presence sync on Android and iOS."
  },
  {
    name: "Web App (Chrome)",
    description: "Chromium-based softphone handles voice, SMS, and pop-ups without local installs."
  },
  {
    name: "Web Portal",
    description: "Secure portal centralizes user settings, routing rules, and analytics."
  },
  {
    name: "Attendant Console",
    description: "Dedicated operator console—paired with hotkeys or sidecars—speeds through transfers and queue actions."
  },
  {
    name: "Built in Chat",
    description: "Contextual team chat is built directly into the calling apps."
  },
  {
    name: "Customer Portal",
    description: "Give customers a branded login for payments, tickets, or service updates."
  },
  {
    name: "Web Phone",
    description: "Browser-based phone offers calling, texting, and presence without hardware."
  },
  {
    name: "Call Blocking (Inbound and Outbound)",
    description: "Block nuisance callers or restrict outbound dialing by destination."
  },
  {
    name: "Anonymous Call Rejection",
    description: "Auto-reject callers who withhold their caller ID."
  },
  {
    name: "Selective Call Rejection",
    description: "Target specific numbers or patterns to reject while letting others through."
  },
  {
    name: "Whitelist",
    description: "Guarantee VIP contacts always bypass other filters."
  },
  {
    name: "Blacklist",
    description: "Permanently block known spam or fraud numbers."
  },
  {
    name: "Call Forwarding",
    description: "Handle calls via modes like “Always,” “Busy,” “No Answer,” “Not Reachable,” or full “Find Me Follow Me” paths."
  },
  {
    name: "Call Logging with Disposition",
    description: "Capture every call outcome with standardized disposition codes."
  },
  {
    name: "Call Monitoring",
    description: "Supervisors can Barge, Listen, or Whisper to coach live conversations."
  },
  {
    name: "Call Notify",
    description: "Trigger email or SMS alerts when specific callers or thresholds are met."
  },
  {
    name: "Call Pickup",
    description: "Answer ringing calls for Any User, a Department, the Entire PBX, or reclaim your own call on another device."
  },
  {
    name: "Call Recording",
    description: "Record sessions Always, manually, via-device buttons, or via portal policies."
  },
  {
    name: "Call Return",
    description: "Redial the most recent inbound caller with one action."
  },
  {
    name: "Call Transfer",
    description: "Supports Attended Transfer, Blind Transfer, Intercom Transfer, and Transfer to Voicemail workflows."
  },
  {
    name: "Call Waiting",
    description: "Alert users to a second caller and let them toggle conversations gracefully."
  },
  {
    name: "Caller ID Management (Inbound and Outbound)",
    description: "Customize inbound display and outbound branding per number, user, or campaign."
  },
  {
    name: "Caller ID with Name",
    description: "Leverage CNAM dips so users see company names alongside numbers."
  },
  {
    name: "CDRs / Call Detail Records",
    description: "Exportable, line-by-line call history for compliance and analytics."
  },
  {
    name: "Device Auto Provisioning",
    description: "Zero-touch setup with multiple vendor support, bulk import, remote device reboot, and custom over-rides."
  },
  {
    name: "Distinctive Ring",
    description: "Assign ring patterns by user, department, dialed number, or other custom cues."
  },
  {
    name: "Do Not Disturb (Server Side)",
    description: "Silence ringing at the network edge while keeping queue logic intact."
  },
  {
    name: "Extension Dialing",
    description: "Reach anyone internally using short extension codes."
  },
  {
    name: "Intercom / Paging",
    description: "Broadcast announcements or open two-way intercom sessions instantly."
  },
  {
    name: "MWI / Message Waiting Indicator",
    description: "Visual lights and app badges display unread voicemail counts."
  },
  {
    name: "Presence",
    description: "Unified presence states sync across desk phones, web, and mobile clients."
  },
  {
    name: "Privacy Features",
    description: "Control caller ID, block recording, or enforce elevated encryption per user."
  },
  {
    name: "Simultaneous Ring",
    description: "Ring 1 or more SIP devices plus off-net numbers (like cell phones) with answer confirmation, call screening, and ring-delay choices."
  },
  {
    name: "SIP-Tapi Support",
    description: "Integrate desk phones with desktop apps and CRMs using SIP-TAPI drivers."
  },
  {
    name: "Three-Way Calling",
    description: "Launch quick three-party conferences right from any endpoint."
  },
  {
    name: "Video Support (H264)",
    description: "Native H264 video sessions keep teams face-to-face without extra apps."
  },
  {
    name: "Voicemail",
    description: "Copy to other Extensions, send Email Notification (with or without attachment), offer Operator Breakout, play from Web Portal/Mobile App/Web App, and capture VoiceBase-powered transcription."
  },
  {
    name: "Web User Portal",
    description: "Role-based portal exposes the right tools to each persona."
  },
  {
    name: "Access Levels",
    description: "Assign Office Manager, Standard User, Call Center Agent, or Call Center Supervisor rights inside the portal."
  },
  {
    name: "Contact Widget",
    description: "Embed click-to-call and contact forms with live presence on your site."
  },
  {
    name: "User List with Presence",
    description: "Roster view pairs every user with their live availability."
  },
  {
    name: "Click to Call",
    description: "Launch calls directly from CRM or portal entries with one click."
  },
  {
    name: "Chat",
    description: "Persistent “Chat” spaces keep project and team discussions in one pane."
  },
  {
    name: "Full Self-Service Feature Management",
    description: "Admins toggle numbers, routing, and recordings without support tickets."
  },
  {
    name: "Inbound Call Handling Rules",
    description: "Build if-this-then-that style rules for any inbound scenario."
  },
  {
    name: "Screen Pops",
    description: "Automatically display CRM or ticket data when a call arrives."
  },
  {
    name: "Answer and Reject Calls",
    description: "Desktop alerts let agents accept or decline without touching the phone."
  },
  {
    name: "Start and Stop Recording",
    description: "Authorized users can start or stop a recording mid-call for compliance."
  }
];

const testimonials = [
  {
    quote:
      "Your call quality, reliability, and features exceeded our expectations. Highly recommend Upscale to anyone needing top-notch communication.",
    author: "Mendel Polatseck",
    title: "CEO"
  },
  {
    quote:
      "After switching to Upscale, our entire workflow improved. They fixed our old provider’s problems and kept our system running flawlessly.",
    author: "Stephen Flores",
    title: "CEO"
  },
  {
    quote: "In a few simple words: it is a pleasure working with Upscale VoIP. Always happy to assist with a smile.",
    author: "David Hirsch",
    title: "CEO, Noble OTC"
  },
  {
    quote: "Upscale VoIP provides a great phone system which is convenient to use. It makes teamwork enjoyable and successful.",
    author: "Yoel Schwartz",
    title: "CEO, Glilos Associates"
  }
];

const testimonialLoop = [...testimonials, ...testimonials, ...testimonials];

const faq = [
  {
    q: "Do I need special equipment?",
    a: "No — Upscale runs on computers, mobile devices, desk phones, and softphones."
  },
  {
    q: "Can I keep my current phone numbers?",
    a: "Absolutely. We port numbers for you with zero downtime."
  },
  {
    q: "Is call quality reliable?",
    a: "With redundant data centers and traffic shaping, we deliver HD voice every time."
  },
  {
    q: "What kind of support do you provide?",
    a: "Setup, onboarding, training, and white-glove support — with advanced SLAs on higher tiers."
  }
];

const partnerBanner = new URL("../partner logos.png", import.meta.url).href;

// Icon components for plans
const RocketIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L12 8M12 8L8 6L12 8L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8C12 8 8 10 8 14C8 16 9 18 12 18C15 18 16 16 16 14C16 10 12 8 12 8Z" fill="currentColor"/>
    <path d="M8 14L6 22L12 18L18 22L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarshipIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14 8L20 9L15 13L16 19L12 16L8 19L9 13L4 9L10 8L12 2Z" fill="currentColor"/>
    <circle cx="12" cy="10" r="2" fill="white"/>
  </svg>
);

const SatelliteIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11" y="2" width="2" height="6" fill="currentColor"/>
    <rect x="11" y="16" width="2" height="6" fill="currentColor"/>
    <rect x="2" y="11" width="6" height="2" fill="currentColor"/>
    <rect x="16" y="11" width="6" height="2" fill="currentColor"/>
    <circle cx="12" cy="12" r="4" fill="currentColor"/>
    <circle cx="12" cy="12" r="2" fill="white"/>
  </svg>
);

const currentYear = new Date().getFullYear();

function NavBar() {
  const location = useLocation();
  const isSolutionsPage = location.pathname === '/solutions';
  const isPlansPage = location.pathname === '/plans';
  
  const navLinks = [
    { label: "Solutions", href: "/solutions" },
    { label: "Plans", href: "/plans" },
    { label: "Reliability", href: "/#reliability" },
    { label: "Integrations", href: "/#integrations" },
    { label: "Apps", href: "/#apps" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-lg border-b border-brand-violet/20">
      <div className="text-center text-xs uppercase tracking-[0.3em] text-brand-navy bg-gradient-to-r from-brand-violet/15 via-brand-slate/10 to-brand-navy/10 py-2">
        Advanced call flows, real-time analytics, and total control — all in the cloud. • 300+ users
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Upscale VoIP logo" className="h-10 w-auto object-contain" />
          <span className="sr-only">Upscale VoIP</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-brand-navy">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              to={link.href} 
              className={`${(isSolutionsPage && link.href === '/solutions') || (isPlansPage && link.href === '/plans') ? 'text-brand-violet font-semibold' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <a
            href="#"
            className="hidden md:inline-flex px-4 py-2 rounded-full border border-brand-navy/20 text-brand-navy text-sm"
          >
            Client Login
          </a>
          <a
            href="#contact"
            className="inline-flex px-4 py-2 rounded-full bg-brand-violet text-white text-sm shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, heading, subheading }) {
  return (
    <div>
      <p className="uppercase tracking-[0.3em] text-xs text-brand-slate font-semibold">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-[2.6rem] text-brand-navy leading-tight mt-2">{heading}</h2>
    </div>
  );
}

function HomePage({ isSolutionsPage }) {
  return (
    <div className="font-body text-brand-charcoal min-h-screen flex flex-col">
      <main className="pb-12 lg:pb-16">
      {isSolutionsPage ? (
        <>
          <section id="hero" className="relative py-12 lg:py-16 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] px-6 md:px-12 py-12 shadow-[0_35px_80px_rgba(17,38,87,0.08)] relative overflow-hidden">
              <div className="absolute -top-32 -left-32 w-72 h-72 bg-brand-violet/15 rounded-full blur-3xl" aria-hidden />
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-slate/10 rounded-full blur-3xl" aria-hidden />
              <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-softblue text-brand-violet font-semibold text-sm">
                    Solutions Suite
                  </div>
                  <h1 className="font-display text-4xl lg:text-5xl text-brand-navy mt-6 leading-tight">
                    Every call control. One intuitive platform.
                  </h1>
                  <p className="mt-4 text-base text-brand-charcoal/70">
                    Upscale VoIP combines routing, analytics, collaboration, and customer touchpoints so your teams can answer, assist, and
                    resolve faster. Explore the complete feature stack that comes standard.
                  </p>
                  <ul className="mt-6 grid gap-3 text-brand-navy font-medium sm:grid-cols-2">
                    {["Live call queues", "Multi-device apps", "Advanced routing rules", "Compliant recording"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-brand-violet">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="/#contact"
                      className="inline-flex px-6 py-3 rounded-full bg-brand-violet text-white font-semibold shadow-lg"
                    >
                      Talk to an expert
                    </a>
                    <a
                      href="/#plans"
                      className="inline-flex px-6 py-3 rounded-full border border-brand-violet text-brand-violet font-semibold"
                    >
                      View pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

            <section className="py-12 px-4 bg-brand-softblue">
              <div className="max-w-6xl mx-auto">
                <SectionTitle
                  eyebrow="Capability library"
                  heading="Comprehensive feature set"
                  subheading="Every Upscale deployment includes hundreds of business phone and contact-center capabilities at no additional cost."
                />
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {solutionFeatures.map((feature) => (
                    <article key={feature.name} className="rounded-2xl border border-brand-navy/10 bg-white/90 p-5 shadow-card">
                      <h3 className="font-semibold text-brand-navy">{feature.name}</h3>
                      <p className="mt-2 text-sm text-brand-charcoal/70">{feature.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-12 px-4">
              <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-brand-navy to-brand-violet text-white p-10 shadow-[0_25px_60px_rgba(40,56,93,0.35)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-white/70">Need tailored workflows?</p>
                  <h2 className="font-display text-3xl md:text-[2.6rem] mt-3">Bundle these capabilities with our Rocket, Starship, or Satellite plans.</h2>
                  <p className="mt-3 text-white/80">We’ll map required features to the right licenses and onboarding plan.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="/#plans" className="inline-flex px-6 py-3 rounded-full bg-white text-brand-violet font-semibold">
                    Compare plans
                  </a>
                  <a href="/#contact" className="inline-flex px-6 py-3 rounded-full border border-white/60 text-white font-semibold">
                    Book a consult
                  </a>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section id="hero" className="relative py-10 lg:py-12 px-4">
              <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] px-6 md:px-12 py-12 shadow-[0_35px_80px_rgba(17,38,87,0.08)] relative overflow-hidden">
                <div className="absolute -top-32 -left-32 w-72 h-72 bg-brand-violet/15 rounded-full blur-3xl" aria-hidden />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-slate/10 rounded-full blur-3xl" aria-hidden />
                <div className="relative grid gap-10 md:grid-cols-2 items-center">
                  <div>
                    <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-softblue text-brand-violet font-semibold text-sm">
                      Cloud VoIP • Hosted PBX • UCaaS
                    </div>
                    <h1 className="font-display text-4xl lg:text-5xl text-brand-navy mt-6 leading-tight">
                      We Handle The Call Better.
                    </h1>
                    <p className="mt-4 text-base text-brand-charcoal/70">
                      Powerful VoIP and hosted PBX built for modern teams, remote offices, and fast-growing companies.
                      Crystal-clear calls, seamless collaboration, and zero on-site hardware.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href="#contact"
                        className="inline-flex px-6 py-3 rounded-full bg-brand-violet text-white font-semibold shadow-lg"
                      >
                        Get Started
                      </a>
                      <a
                        href="#plans"
                        className="inline-flex px-6 py-3 rounded-full border border-brand-violet text-brand-violet font-semibold"
                      >
                        See Plans & Pricing
                      </a>
                    </div>
                    <ul className="mt-6 space-y-2 text-brand-navy font-medium">
                      <li>✔ 99.999% uptime & HD voice</li>
                      <li>✔ Desktop, mobile, desk phone ready</li>
                      <li>✔ Dedicated onboarding + migration</li>
                    </ul>
                  </div>

                  <div className="border border-brand-navy/10 rounded-[2rem] bg-gradient-to-br from-brand-violet/15 via-white to-white shadow-card overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 text-sm text-brand-navy">
                      <p>Upscale VoIP dashboard</p>
                      <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold">Live Queue</span>
                    </div>
                    <img src={heroImage} alt="Team collaborating on VoIP dashboard" className="w-full object-cover aspect-[4/3]" />
                    <div className="flex flex-wrap gap-6 px-6 py-5 text-brand-navy/80 text-sm">
                      <div>
                        <strong className="text-2xl text-brand-violet block">350+</strong>
                        Concurrent calls
                      </div>
                      <div>
                        <strong className="text-2xl text-brand-violet block">4.9/5</strong>
                        Client satisfaction
                      </div>
                      <div>
                        <strong className="text-2xl text-brand-violet block">0</strong>
                        Hardware installs
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            <section className="py-10 lg:py-12 px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="font-display text-4xl lg:text-5xl text-brand-navy text-center">Our Clients</h2>
                <div className="mt-4 overflow-hidden rounded-full border border-brand-navy/10 bg-white shadow-card">
                  <div className="flex gap-10 px-8 py-4 items-center whitespace-nowrap animate-marquee">
                    {clientLogos.concat(clientLogos).map((logo, index) => {
                      const heightClass =
                        logo.alt === "Glaubers" ? "h-14" : logo.alt === "Fogel" ? "h-10" : "h-12";
                      return (
                        <img
                          key={`${logo.alt}-${index}`}
                          src={logo.src}
                          alt={logo.alt}
                          className={`${heightClass} w-auto object-contain`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            <section id="reliability" className="py-12 lg:py-14 px-4">
              <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
                <div>
                  <SectionTitle
                    eyebrow="Trusted by businesses who need reliability"
                    heading="Enterprise-grade stability with flexible, modern workflows."
                    subheading="Give your team the freedom to connect from anywhere — desktop, mobile, or desk phone — with enterprise-grade uptime and proactive monitoring."
                  />
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a className="btn inline-flex px-6 py-3 rounded-full bg-brand-violet text-white" href="#plans">
                      Plans & Pricing
                    </a>
                    <a className="inline-flex px-6 py-3 rounded-full border border-brand-navy/20 text-brand-navy" href="#contact">
                      Request a Quote
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 rounded-[1.75rem] bg-gradient-to-br from-brand-navy to-brand-violet text-white p-8 shadow-[0_25px_60px_rgba(38,33,69,0.3)]">
                  {reliabilityStats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-3xl font-display">{stat.value}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="integrations" className="py-12 lg:py-14 px-4 bg-brand-softblue">
              <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
                <div>
                  <SectionTitle
                    eyebrow="Integrations You Love"
                    heading="Unify data across your business stack."
                    subheading="Plug Upscale VoIP into the tools your teams already use — CRMs, help desks, scheduling apps, analytics, and more."
                  />
                  <ul className="mt-6 space-y-3 text-brand-charcoal/80">
                    <li>• Auto attendants, mobile & web apps, voicemail-to-email</li>
                    <li>• Business text messaging, call recording, enhanced reporting</li>
                    <li>• Video conferencing, team messaging, and priority assistance</li>
                  </ul>
                </div>
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-full bg-white shadow-[0_25px_70px_rgba(40,56,93,0.12)] flex items-center justify-center">
                    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-brand-softblue to-white flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-5 p-6">
                        {orbitIntegrations.map((logo, index) => (
                          <div key={`core-${logo.alt}`} className={`flex items-center justify-center animate-float-${index + 1}`}>
                            <img src={logo.src} alt={logo.alt} className="h-32 w-48 object-contain" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-md mx-auto mt-6 w-full">
                  <button className="text-sm font-semibold text-brand-violet border border-brand-violet/50 rounded-full px-5 py-2 bg-white shadow-card hover:bg-brand-violet hover:text-white transition">
                    + More
                  </button>
                </div>
              </div>
            </section>

            <section className="py-8 lg:py-10 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <p className="uppercase tracking-[0.3em] text-xs text-brand-slate">Partner with the best</p>
                <div className="mt-4">
                  <img src={partnerBanner} alt="Partner logos" className="w-full max-w-4xl mx-auto object-contain" />
                </div>
              </div>
            </section>

            <section id="plans" className="pt-10 lg:pt-14 pb-8 lg:pb-12 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <SectionTitle
                  eyebrow="Plans & Pricing"
                  heading="Straightforward pricing. Scales effortlessly."
                />
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {plans.map((plan) => (
                    <article
                      key={plan.title}
                      className={`rounded-[1.75rem] border border-brand-navy/10 p-6 flex flex-col gap-4 min-h-[340px] ${
                        plan.emphasis
                          ? "bg-gradient-to-br from-brand-violet/15 via-white to-white shadow-[0_20px_60px_rgba(151,73,156,0.25)]"
                          : "bg-brand-softblue/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          plan.emphasis 
                            ? "bg-brand-violet text-white" 
                            : "bg-brand-softblue text-brand-violet"
                        }`}>
                          {plan.title.includes("Rocket") && <RocketIcon />}
                          {plan.title.includes("Starship") && <StarshipIcon />}
                          {plan.title.includes("Satellite") && <SatelliteIcon />}
                        </div>
                        <div className="inline-flex px-4 py-1 rounded-full bg-white text-brand-navy font-semibold w-fit">
                          {plan.title}
                        </div>
                      </div>
                      <p className="font-semibold text-brand-navy">{plan.description}</p>
                      <ul className="space-y-2 text-brand-charcoal/80 flex-1">
                        {plan.features.map((feature) => (
                          <li key={feature}>• {feature}</li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className={`inline-flex px-5 py-2 rounded-full font-semibold justify-center ${
                          plan.emphasis
                            ? "bg-brand-violet text-white"
                            : "border border-brand-violet text-brand-violet"
                        }`}
                      >
                        {plan.emphasis ? "Select Starship" : `Select ${plan.title.split(" · ")[0]}`}
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="apps" className="pt-8 lg:pt-12 pb-12 lg:pb-16 px-4">
              <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-start">
                <div className="bg-white rounded-[1.75rem] border border-brand-navy/10 p-6 shadow-card space-y-6">
                  <img src={new URL("../mobile.jpg", import.meta.url).href} alt="Mobile collaboration" className="rounded-[1.5rem] object-cover" />
                  <p className="uppercase tracking-[0.3em] text-xs text-brand-slate">Mobile & Desktop Apps</p>
                  <h3 className="font-display text-3xl text-brand-navy">Call, text, and meet from any device.</h3>
                  <p className="text-brand-charcoal/70">
                    Start calling immediately with secure softphones, intuitive mobile apps, and web dashboards tuned for operators and executives alike.
                  </p>
                  <a className="inline-flex px-6 py-3 rounded-full bg-brand-violet text-white font-semibold" href="#contact">
                    Launch your stack
                  </a>
                </div>
                <div className="bg-white rounded-[1.75rem] border border-brand-navy/10 p-6 shadow-card flex flex-col gap-4">
                  <p className="uppercase tracking-[0.3em] text-xs text-brand-slate">Testimonials</p>
                  <h3 className="font-display text-3xl text-brand-navy">What our clients say</h3>
                  <div className="overflow-hidden relative h-[20rem] md:h-[22rem]">
                    <div className="testimonial-track pr-2">
                      {testimonialLoop.map((item, index) => (
                        <div
                          key={`${item.author}-${index}`}
                          className="bg-brand-softblue/30 rounded-2xl p-6 border border-brand-navy/5 shadow-card min-h-[10rem]"
                        >
                          <blockquote className="text-brand-navy/90 italic">“{item.quote}”</blockquote>
                          <p className="mt-3 font-semibold text-brand-violet">{item.author}</p>
                          {item.title && <p className="text-sm text-brand-charcoal/70">{item.title}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="pt-8 lg:pt-12 pb-12 lg:pb-16 px-4 bg-brand-softblue">
              <div className="max-w-6xl mx-auto">
                <SectionTitle eyebrow="FAQ" heading="Answers before you switch." />
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {faq.map((item) => (
                    <article key={item.q} className="bg-white rounded-2xl p-6 border border-brand-navy/10 shadow-card">
                      <h3 className="font-semibold text-brand-navy">{item.q}</h3>
                      <p className="mt-2 text-brand-charcoal/70">{item.a}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" className="pt-10 lg:pt-14 pb-12 lg:pb-16 px-4">
              <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-brand-navy to-brand-violet text-white p-10 shadow-[0_25px_60px_rgba(40,56,93,0.35)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-white/70">Ready to upgrade?</p>
                  <h2 className="font-display text-3xl md:text-[2.6rem] mt-3">Get a modern VoIP system that grows with you.</h2>
                  <p className="mt-3 text-white/80">Business communications built for clarity, reliability, and scale.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#plans" className="inline-flex px-6 py-3 rounded-full bg-white text-brand-violet font-semibold">
                    Get Started
                  </a>
                  <a href="#contact" className="inline-flex px-6 py-3 rounded-full border border-white/60 text-white font-semibold">
                    Book a Demo
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage isSolutionsPage={false} />} />
        <Route path="/solutions" element={<HomePage isSolutionsPage={true} />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
}
