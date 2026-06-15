import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Plans from "./pages/Plans";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Footer from "./components/Footer";

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
  { file: "pioneer.png", alt: "Pioneer" },
  { file: "PLCL.png", alt: "PLCL" },
  { file: "queens nassau.png", alt: "Queens Nassau" },
  { file: "scalia.png", alt: "Scalia" },
  { file: "universal.png", alt: "Universal" },
  { file: "renewf.png", alt: "RenewF" },
  { file: "satmar.png", alt: "Satmar" },
  { file: "nobleot.png", alt: "Noble OT" },
  { file: "prominent.png", alt: "Prominent" },
  { file: "glilos.png", alt: "Glilos" },
].map(({ file, alt }) => ({
  alt,
  src: new URL(`./assets/client-logos/${file}`, import.meta.url).href,
}));

const reliabilityStats = [
  { label: "client businesses", value: "34" },
  { label: "active users", value: "250+" },
  { label: "tech support", value: "24/7" },
  { label: "average latency", value: "50 ms" },
];

const orbitIntegrations = [
  {
    alt: "Salesforce",
    file: "salesforce.png",
    radius: "165px",
    duration: "22s",
    delay: "0s",
  },
  {
    alt: "Zendesk",
    file: "Zendesk-Logo.webp",
    radius: "150px",
    duration: "24s",
    delay: "-3s",
  },
  {
    alt: "HubSpot",
    file: "hubspot.png",
    radius: "135px",
    duration: "26s",
    delay: "-6s",
    reverse: true,
  },
  {
    alt: "monday.com",
    file: "monday.png",
    radius: "120px",
    duration: "20s",
    delay: "-2s",
    reverse: true,
  },
  {
    alt: "Microsoft Teams",
    file: "teams.webp",
    radius: "95px",
    duration: "18s",
    delay: "-5s",
  },
  {
    alt: "Oracle",
    file: "oracle logo.png",
    radius: "110px",
    duration: "23s",
    delay: "-8s",
  },
].map((logo) => ({
  ...logo,
  src: new URL(`../Integrations/${logo.file}`, import.meta.url).href,
}));

const plans = [
  {
    title: "Rocket · $25/mo",
    description:
      "For small teams wanting a powerful, professional phone system.",
    features: [
      "Auto Attendants",
      "Mobile & Web Apps",
      "Voicemail-to-Email",
      "Basic Call Management Tools",
    ],
    emphasis: false,
  },
  {
    title: "Starship · $35/mo",
    description:
      "Perfect for growing teams needing collaboration + communication.",
    features: [
      "Everything in Rocket",
      "Business Text Messaging",
      "Call Recording & Enhanced Reporting",
      "Basic Conferencing",
    ],
    emphasis: true,
  },
  {
    title: "Satellite · $45/mo",
    description: "Built for large teams needing full UCaaS capabilities.",
    features: [
      "Everything in Starship",
      "Advanced Support & Priority Assistance",
      "Video Conferencing & Team Messaging",
      "Custom Integrations",
    ],
    emphasis: false,
  },
];

const solutionFeatures = [
  {
    name: "Call Queues",
    description:
      "Organize callers into intelligent queues with live agent and wait-time visibility.",
  },
  {
    name: "Time Frames",
    description:
      "Define business-hour, after-hour, and holiday schedules that automatically change routing.",
  },
  {
    name: "Call Parking",
    description:
      "Park calls in shared orbits with support for Dynamic Park, Static Park, and single-button park/retrieve with indicator lights.",
  },
  {
    name: "Auto Attendants",
    description:
      "Multi-level IVRs greet callers and steer them with keypad or speech-driven options.",
  },
  {
    name: "Music on hold",
    description:
      "Deliver branded waiting using Music-On-Hold playlists, whether system default, personalized, randomized, or per-queue.",
  },
  {
    name: "Web and mobile app",
    description:
      "Full PBX controls live inside responsive web and mobile experiences so teams stay connected anywhere.",
  },
  {
    name: "Shared lines appearance",
    description:
      "Mirror high-value lines across devices so assistants can see activity and answer on behalf of execs.",
  },
  {
    name: "SMS",
    description:
      "Send and receive business SMS/MMS alongside voice for quick customer touchpoints.",
  },
  {
    name: "Extension User Features",
    description:
      "Every extension inherits pro capabilities—answering, holding, transferring, voicemail, and forwarding—out of the box.",
  },
  {
    name: "PBX System Features",
    description:
      "Organization-wide PBX controls cover routing, compliance, analytics, and automation from a single source.",
  },
  {
    name: "Account Code Tracking",
    description:
      "Tag calls with account codes to reconcile projects, departments, or billable activity.",
  },
  {
    name: "Attendant Console (Web Based)",
    description:
      "Receptionists manage queues, presence, and transfers from a browser-based attendant console.",
  },
  {
    name: "Answer Calls",
    description:
      "Pick up ringing calls from desk phones, web apps, or mobile notifications instantly.",
  },
  {
    name: "Hold",
    description:
      "Place callers on server-side hold with branded prompts while you consult teammates.",
  },
  {
    name: "Transfer",
    description:
      "Move active calls to coworkers, queues, or voicemail without dropping the caller.",
  },
  {
    name: "View Extension Presence",
    description:
      "See who is idle, busy, ringing, or on DND in real time from any client.",
  },
  {
    name: "View Company Contacts",
    description:
      "Browse the corporate directory with click-to-call access from any endpoint.",
  },
  {
    name: "Visually Park and Retrieve Calls",
    description:
      "Graphical widgets show parked calls so anyone can retrieve the right conversation.",
  },
  {
    name: "View Call Queues and Agent Availability",
    description: "Supervisors track queue depth, SLAs, and agent status live.",
  },
  {
    name: "BLF / Busy Lamp Field",
    description:
      "Hardware lamps and app indicators reveal extension states at a glance.",
  },
  {
    name: "On Device",
    description:
      "Configure keys, BLF, and presence states directly on supported desk phones.",
  },
  {
    name: "Mobile App Phone (Android and iOS)",
    description:
      "Native mobile apps deliver HD calling, SMS, and presence sync on Android and iOS.",
  },
  {
    name: "Web App (Chrome)",
    description:
      "Chromium-based softphone handles voice, SMS, and pop-ups without local installs.",
  },
  {
    name: "Web Portal",
    description:
      "Secure portal centralizes user settings, routing rules, and analytics.",
  },
  {
    name: "Attendant Console",
    description:
      "Dedicated operator console—paired with hotkeys or sidecars—speeds through transfers and queue actions.",
  },
  {
    name: "Built in Chat",
    description:
      "Contextual team chat is built directly into the calling apps.",
  },
  {
    name: "Customer Portal",
    description:
      "Give customers a branded login for payments, tickets, or service updates.",
  },
  {
    name: "Web Phone",
    description:
      "Browser-based phone offers calling, texting, and presence without hardware.",
  },
  {
    name: "Call Blocking (Inbound and Outbound)",
    description:
      "Block nuisance callers or restrict outbound dialing by destination.",
  },
  {
    name: "Anonymous Call Rejection",
    description: "Auto-reject callers who withhold their caller ID.",
  },
  {
    name: "Selective Call Rejection",
    description:
      "Target specific numbers or patterns to reject while letting others through.",
  },
  {
    name: "Whitelist",
    description: "Guarantee VIP contacts always bypass other filters.",
  },
  {
    name: "Blacklist",
    description: "Permanently block known spam or fraud numbers.",
  },
  {
    name: "Call Forwarding",
    description:
      "Handle calls via modes like “Always,” “Busy,” “No Answer,” “Not Reachable,” or full “Find Me Follow Me” paths.",
  },
  {
    name: "Call Logging with Disposition",
    description:
      "Capture every call outcome with standardized disposition codes.",
  },
  {
    name: "Call Monitoring",
    description:
      "Supervisors can Barge, Listen, or Whisper to coach live conversations.",
  },
  {
    name: "Call Notify",
    description:
      "Trigger email or SMS alerts when specific callers or thresholds are met.",
  },
  {
    name: "Call Pickup",
    description:
      "Answer ringing calls for Any User, a Department, the Entire PBX, or reclaim your own call on another device.",
  },
  {
    name: "Call Recording",
    description:
      "Record sessions Always, manually, via-device buttons, or via portal policies.",
  },
  {
    name: "Call Return",
    description: "Redial the most recent inbound caller with one action.",
  },
  {
    name: "Call Transfer",
    description:
      "Supports Attended Transfer, Blind Transfer, Intercom Transfer, and Transfer to Voicemail workflows.",
  },
  {
    name: "Call Waiting",
    description:
      "Alert users to a second caller and let them toggle conversations gracefully.",
  },
  {
    name: "Caller ID Management (Inbound and Outbound)",
    description:
      "Customize inbound display and outbound branding per number, user, or campaign.",
  },
  {
    name: "Caller ID with Name",
    description:
      "Leverage CNAM dips so users see company names alongside numbers.",
  },
  {
    name: "CDRs / Call Detail Records",
    description:
      "Exportable, line-by-line call history for compliance and analytics.",
  },
  {
    name: "Device Auto Provisioning",
    description:
      "Zero-touch setup with multiple vendor support, bulk import, remote device reboot, and custom over-rides.",
  },
  {
    name: "Distinctive Ring",
    description:
      "Assign ring patterns by user, department, dialed number, or other custom cues.",
  },
  {
    name: "Do Not Disturb (Server Side)",
    description:
      "Silence ringing at the network edge while keeping queue logic intact.",
  },
  {
    name: "Extension Dialing",
    description: "Reach anyone internally using short extension codes.",
  },
  {
    name: "Intercom / Paging",
    description:
      "Broadcast announcements or open two-way intercom sessions instantly.",
  },
  {
    name: "MWI / Message Waiting Indicator",
    description:
      "Visual lights and app badges display unread voicemail counts.",
  },
  {
    name: "Presence",
    description:
      "Unified presence states sync across desk phones, web, and mobile clients.",
  },
  {
    name: "Privacy Features",
    description:
      "Control caller ID, block recording, or enforce elevated encryption per user.",
  },
  {
    name: "Simultaneous Ring",
    description:
      "Ring 1 or more SIP devices plus off-net numbers (like cell phones) with answer confirmation, call screening, and ring-delay choices.",
  },
  {
    name: "SIP-Tapi Support",
    description:
      "Integrate desk phones with desktop apps and CRMs using SIP-TAPI drivers.",
  },
  {
    name: "Three-Way Calling",
    description:
      "Launch quick three-party conferences right from any endpoint.",
  },
  {
    name: "Video Support (H264)",
    description:
      "Native H264 video sessions keep teams face-to-face without extra apps.",
  },
  {
    name: "Voicemail",
    description:
      "Copy to other Extensions, send Email Notification (with or without attachment), offer Operator Breakout, play from Web Portal/Mobile App/Web App, and capture VoiceBase-powered transcription.",
  },
  {
    name: "Web User Portal",
    description: "Role-based portal exposes the right tools to each persona.",
  },
  {
    name: "Access Levels",
    description:
      "Assign Office Manager, Standard User, Call Center Agent, or Call Center Supervisor rights inside the portal.",
  },
  {
    name: "Contact Widget",
    description:
      "Embed click-to-call and contact forms with live presence on your site.",
  },
  {
    name: "User List with Presence",
    description: "Roster view pairs every user with their live availability.",
  },
  {
    name: "Click to Call",
    description:
      "Launch calls directly from CRM or portal entries with one click.",
  },
  {
    name: "Chat",
    description:
      "Persistent “Chat” spaces keep project and team discussions in one pane.",
  },
  {
    name: "Full Self-Service Feature Management",
    description:
      "Admins toggle numbers, routing, and recordings without support tickets.",
  },
  {
    name: "Inbound Call Handling Rules",
    description:
      "Build if-this-then-that style rules for any inbound scenario.",
  },
  {
    name: "Screen Pops",
    description:
      "Automatically display CRM or ticket data when a call arrives.",
  },
  {
    name: "Answer and Reject Calls",
    description:
      "Desktop alerts let agents accept or decline without touching the phone.",
  },
  {
    name: "Start and Stop Recording",
    description:
      "Authorized users can start or stop a recording mid-call for compliance.",
  },
];

const testimonials = [
  {
    quote:
      "Your call quality, reliability, and features exceeded our expectations. Highly recommend Upscale to anyone needing top-notch communication.",
    author: "Mendel Polatseck",
    title: "CEO",
  },
  {
    quote:
      "After switching to Upscale, our entire workflow improved. They fixed our old provider’s problems and kept our system running flawlessly.",
    author: "Stephen Flores",
    title: "CEO",
  },
  {
    quote:
      "In a few simple words: it is a pleasure working with Upscale VoIP. Always happy to assist with a smile.",
    author: "David Hirsch",
    title: "CEO, Noble OTC",
  },
  {
    quote:
      "Upscale VoIP provides a great phone system which is convenient to use. It makes teamwork enjoyable and successful.",
    author: "Yoel Schwartz",
    title: "CEO, Glilos Associates",
  },
];

const testimonialLoop = [...testimonials, ...testimonials, ...testimonials];

const faq = [
  {
    q: "Do I need special equipment?",
    a: "No — Upscale runs on computers, mobile devices, desk phones, and softphones.",
  },
  {
    q: "Can I keep my current phone numbers?",
    a: "Absolutely. We port numbers for you with zero downtime.",
  },
  {
    q: "Is call quality reliable?",
    a: "With redundant data centers and traffic shaping, we deliver HD voice every time.",
  },
  {
    q: "What kind of support do you provide?",
    a: "Setup, onboarding, training, and white-glove support — with advanced SLAs on higher tiers.",
  },
];

const partnerBanner = new URL("../partner logos.png", import.meta.url).href;

// Icon components for plans
const RocketIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L12 8M12 8L8 6L12 8L16 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8C12 8 8 10 8 14C8 16 9 18 12 18C15 18 16 16 16 14C16 10 12 8 12 8Z"
      fill="currentColor"
    />
    <path
      d="M8 14L6 22L12 18L18 22L16 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarshipIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L14 8L20 9L15 13L16 19L12 16L8 19L9 13L4 9L10 8L12 2Z"
      fill="currentColor"
    />
    <circle cx="12" cy="10" r="2" fill="white" />
  </svg>
);

const SatelliteIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="11" y="2" width="2" height="6" fill="currentColor" />
    <rect x="11" y="16" width="2" height="6" fill="currentColor" />
    <rect x="2" y="11" width="6" height="2" fill="currentColor" />
    <rect x="16" y="11" width="6" height="2" fill="currentColor" />
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <circle cx="12" cy="12" r="2" fill="white" />
  </svg>
);

const currentYear = new Date().getFullYear();

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-brand-violet text-white shadow-lg flex items-center justify-center hover:bg-brand-violet/90 transition-all duration-300 animate-float-1"
      aria-label="Back to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  ) : null;
}

function scrollToSection(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

function NavLink({ to, label, onClick }) {
  const location = useLocation();
  const isActive = to === location.pathname;
  const handleClick = (e) => {
    if (to.startsWith("/#")) {
      e.preventDefault();
      const id = to.slice(2);
      if (location.pathname === "/") {
        scrollToSection(id);
      } else {
        window.location.href =
          window.location.origin +
          window.location.pathname.split("/").slice(0, -1).join("/") +
          "/" +
          id;
      }
    }
    if (onClick) onClick();
  };
  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`hover:text-brand-violet transition-colors ${isActive ? "text-brand-violet font-semibold" : ""}`}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ to, label, onClick }) {
  const location = useLocation();
  const isActive = to === location.pathname;
  const handleClick = (e) => {
    if (to.startsWith("/#")) {
      e.preventDefault();
      const id = to.slice(2);
      if (location.pathname === "/") {
        scrollToSection(id);
      } else {
        window.location.href =
          window.location.origin +
          window.location.pathname.split("/").slice(0, -1).join("/") +
          "/" +
          id;
      }
    }
    if (onClick) onClick();
  };
  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`px-4 py-3 rounded-xl text-lg font-medium transition-colors ${isActive ? "bg-brand-violet/10 text-brand-violet" : "text-brand-navy hover:bg-brand-violet/5"}`}
    >
      {label}
    </Link>
  );
}

function NavBar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions", hasDropdown: true },
    { label: "Plans", href: "/plans" },
    { label: "Integrations", href: "/#integrations" },
    { label: "Apps", href: "/#apps" },
    { label: "Contact", href: "/contact" },
  ];

  const solutionsDropdown = [
    { label: "Overview", href: "/solutions" },
    {
      label: "Call Handling & Routing",
      href: "/solutions?category=call-handling",
    },
    {
      label: "Call Management & Monitoring",
      href: "/solutions?category=call-management",
    },
    {
      label: "User Features & Presence",
      href: "/solutions?category=user-features",
    },
    { label: "Apps & Devices", href: "/solutions?category=apps-devices" },
    { label: "System & Admin", href: "/solutions?category=system-admin" },
    { label: "Caller ID & Numbers", href: "/solutions?category=caller-id" },
    {
      label: "Integrations & Portal",
      href: "/solutions?category=integrations-portal",
    },
    {
      label: "FlowBot AI Agent",
      href: "/solutions?category=flowbot",
      isNew: true,
    },
  ];

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname, location.search]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-lg border-b border-brand-violet/20">
      <div className="text-center text-xs uppercase tracking-[0.3em] text-brand-navy bg-gradient-to-r from-brand-violet/15 via-brand-slate/10 to-brand-navy/10 py-2">
        Advanced call flows, real-time analytics, and total control — all in the
        cloud. • 300+ users
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={logo}
            alt="Upscale VoIP logo"
            className="h-10 w-auto object-contain"
          />
          <span className="sr-only">Upscale VoIP</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1 text-sm text-brand-navy">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <NavLink to={link.href} label={link.label} />
                {solutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-brand-navy/10 py-2 z-50">
                    {solutionsDropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-brand-softblue transition-colors ${
                          location.pathname + location.search === item.href ||
                          (location.pathname === "/solutions" &&
                            item.href === "/solutions")
                            ? "text-brand-violet font-semibold"
                            : "text-brand-charcoal"
                        }`}
                        onClick={() => setSolutionsOpen(false)}
                      >
                        <span>{item.label}</span>
                        {item.isNew && (
                          <span className="ml-auto text-[10px] uppercase tracking-wider bg-brand-violet/10 text-brand-violet px-2 py-0.5 rounded-full font-semibold">
                            New
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={link.href} to={link.href} label={link.label} />
            ),
          )}
        </nav>

        <div className="flex gap-2 items-center">
          <a
            href="#"
            className="hidden md:inline-flex px-4 py-2 rounded-full border border-brand-navy/20 text-brand-navy text-sm hover:border-brand-navy/40 transition-colors"
          >
            Client Login
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex px-4 py-2 rounded-full bg-brand-violet text-white text-sm shadow-lg hover:bg-brand-violet/90 transition-colors"
          >
            Get Started
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-violet/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-[4.5rem] z-50 bg-white/98 backdrop-blur-xl transition-all duration-300 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-2 p-6">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="flex flex-col">
                <MobileNavLink
                  to={link.href}
                  label={link.label}
                  onClick={() => setMobileOpen(false)}
                />
                <div className="ml-4 mt-1 mb-2 flex flex-col border-l-2 border-brand-violet/20 pl-3">
                  {solutionsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center gap-2 py-2 text-sm ${
                        location.pathname + location.search === item.href
                          ? "text-brand-violet font-semibold"
                          : "text-brand-charcoal/70"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{item.label}</span>
                      {item.isNew && (
                        <span className="text-[10px] uppercase tracking-wider bg-brand-violet/10 text-brand-violet px-2 py-0.5 rounded-full font-semibold">
                          New
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <MobileNavLink
                key={link.href}
                to={link.href}
                label={link.label}
                onClick={() => setMobileOpen(false)}
              />
            ),
          )}
          <hr className="my-2 border-brand-navy/10" />
          <Link
            to="/contact"
            className="mt-2 px-4 py-3 rounded-full bg-brand-violet text-white font-semibold text-center shadow-lg"
          >
            Get Started
          </Link>
          <a
            href="#"
            className="px-4 py-3 rounded-full border border-brand-navy/20 text-brand-navy font-semibold text-center"
          >
            Client Login
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, heading, subheading }) {
  return (
    <div>
      <p className="uppercase tracking-[0.3em] text-xs text-brand-slate font-semibold">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-[2.6rem] text-brand-navy leading-tight mt-2">
        {heading}
      </h2>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="bg-white rounded-2xl border border-brand-navy/10 shadow-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left font-semibold text-brand-navy hover:bg-brand-violet/5 transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg
          className={`w-5 h-5 text-brand-violet flex-shrink-0 ml-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-6 pb-6 text-brand-charcoal/70 leading-relaxed">{a}</p>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <div className="font-body text-brand-charcoal min-h-screen flex flex-col">
      <BackToTop />
      <main className="pb-12 lg:pb-16">
        <section id="hero" className="relative py-10 lg:py-12 px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] px-6 md:px-12 py-12 shadow-[0_35px_80px_rgba(17,38,87,0.08)] relative overflow-hidden">
            <div
              className="absolute -top-32 -left-32 w-72 h-72 bg-brand-violet/15 rounded-full blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-slate/10 rounded-full blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-10 md:grid-cols-2 items-center">
              <div>
                <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-softblue text-brand-violet font-semibold text-sm">
                  Cloud VoIP • Hosted PBX • UCaaS
                </div>
                <h1 className="font-display text-4xl lg:text-5xl text-brand-navy mt-6 leading-tight">
                  We Handle The Call Better.
                </h1>
                <p className="mt-4 text-base text-brand-charcoal/70">
                  Powerful VoIP and hosted PBX built for modern teams, remote
                  offices, and fast-growing companies. Crystal-clear calls,
                  seamless collaboration, and zero on-site hardware.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex px-6 py-3 rounded-full bg-brand-violet text-white font-semibold shadow-lg"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex px-6 py-3 rounded-full bg-white text-brand-violet font-semibold shadow-lg border-2 border-brand-violet"
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="/plans"
                    className="inline-flex px-6 py-3 rounded-full border border-brand-violet text-brand-violet font-semibold"
                  >
                    See Plans & Pricing
                  </Link>
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
                  <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold">
                    Live Queue
                  </span>
                </div>
                <img
                  src={heroImage}
                  alt="Team collaborating on VoIP dashboard"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="flex flex-wrap gap-6 px-6 py-5 text-brand-navy/80 text-sm">
                  <div>
                    <strong className="text-2xl text-brand-violet block">
                      350+
                    </strong>
                    Concurrent calls
                  </div>
                  <div>
                    <strong className="text-2xl text-brand-violet block">
                      4.9/5
                    </strong>
                    Client satisfaction
                  </div>
                  <div>
                    <strong className="text-2xl text-brand-violet block">
                      0
                    </strong>
                    Hardware installs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl lg:text-5xl text-brand-navy text-center">
              Our Clients
            </h2>
            <div className="mt-4 overflow-hidden rounded-full border border-brand-navy/10 bg-white shadow-card">
              <div className="flex gap-10 px-8 py-4 items-center whitespace-nowrap animate-marquee">
                {clientLogos.concat(clientLogos).map((logo, index) => {
                  const heightClass =
                    logo.alt === "Glaubers"
                      ? "h-14"
                      : logo.alt === "Fogel"
                        ? "h-10"
                        : "h-12";
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
                <a
                  className="btn inline-flex px-6 py-3 rounded-full bg-brand-violet text-white"
                  href="#plans"
                >
                  Plans & Pricing
                </a>
                <Link
                  to="/contact"
                  className="inline-flex px-6 py-3 rounded-full border border-brand-navy/20 text-brand-navy"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-[1.75rem] bg-gradient-to-br from-brand-navy to-brand-violet text-white p-8 shadow-[0_25px_60px_rgba(38,33,69,0.3)]">
              {reliabilityStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-display">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="integrations"
          className="py-12 lg:py-14 px-4 bg-brand-softblue"
        >
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
            <div>
              <SectionTitle
                eyebrow="Integrations You Love"
                heading="Unify data across your business stack."
                subheading="Plug Upscale VoIP into the tools your teams already use — CRMs, help desks, scheduling apps, analytics, and more."
              />
              <ul className="mt-6 space-y-3 text-brand-charcoal/80">
                <li>
                  • Auto attendants, mobile & web apps, voicemail-to-email
                </li>
                <li>
                  • Business text messaging, call recording, enhanced reporting
                </li>
                <li>
                  • Video conferencing, team messaging, and priority assistance
                </li>
              </ul>
            </div>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_25px_70px_rgba(40,56,93,0.12)] flex items-center justify-center">
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-brand-softblue to-white flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-5 p-6">
                    {orbitIntegrations.map((logo, index) => (
                      <div
                        key={`core-${logo.alt}`}
                        className={`flex items-center justify-center animate-float-${index + 1}`}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="h-32 w-48 object-contain"
                        />
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
            <p className="uppercase tracking-[0.3em] text-xs text-brand-slate">
              Partner with the best
            </p>
            <div className="mt-4">
              <img
                src={partnerBanner}
                alt="Partner logos"
                className="w-full max-w-4xl mx-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section
          id="plans"
          className="pt-10 lg:pt-14 pb-8 lg:pb-12 px-4 bg-white"
        >
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
                    <div
                      className={`p-2 rounded-full ${
                        plan.emphasis
                          ? "bg-brand-violet text-white"
                          : "bg-brand-softblue text-brand-violet"
                      }`}
                    >
                      {plan.title.includes("Rocket") && <RocketIcon />}
                      {plan.title.includes("Starship") && <StarshipIcon />}
                      {plan.title.includes("Satellite") && <SatelliteIcon />}
                    </div>
                    <div className="inline-flex px-4 py-1 rounded-full bg-white text-brand-navy font-semibold w-fit">
                      {plan.title}
                    </div>
                  </div>
                  <p className="font-semibold text-brand-navy">
                    {plan.description}
                  </p>
                  <ul className="space-y-2 text-brand-charcoal/80 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`inline-flex px-5 py-2 rounded-full font-semibold justify-center ${
                      plan.emphasis
                        ? "bg-brand-violet text-white"
                        : "border border-brand-violet text-brand-violet"
                    }`}
                  >
                    {plan.emphasis
                      ? "Select Starship"
                      : `Select ${plan.title.split(" · ")[0]}`}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="apps" className="pt-8 lg:pt-12 pb-12 lg:pb-16 px-4">
          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="bg-white rounded-[1.75rem] border border-brand-navy/10 p-6 shadow-card space-y-6">
              <img
                src={new URL("../mobile.jpg", import.meta.url).href}
                alt="Mobile collaboration"
                className="rounded-[1.5rem] object-cover"
              />
              <p className="uppercase tracking-[0.3em] text-xs text-brand-slate">
                Mobile & Desktop Apps
              </p>
              <h3 className="font-display text-3xl text-brand-navy">
                Call, text, and meet from any device.
              </h3>
              <p className="text-brand-charcoal/70">
                Start calling immediately with secure softphones, intuitive
                mobile apps, and web dashboards tuned for operators and
                executives alike.
              </p>
              <Link
                to="/contact"
                className="inline-flex px-6 py-3 rounded-full bg-brand-violet text-white font-semibold"
              >
                Launch your stack
              </Link>
            </div>
            <div className="bg-white rounded-[1.75rem] border border-brand-navy/10 p-6 shadow-card flex flex-col gap-4">
              <p className="uppercase tracking-[0.3em] text-xs text-brand-slate">
                Testimonials
              </p>
              <h3 className="font-display text-3xl text-brand-navy">
                What our clients say
              </h3>
              <div className="overflow-hidden relative h-[20rem] md:h-[22rem]">
                <div className="testimonial-track pr-2">
                  {testimonialLoop.map((item, index) => (
                    <div
                      key={`${item.author}-${index}`}
                      className="bg-brand-softblue/30 rounded-2xl p-6 border border-brand-navy/5 shadow-card min-h-[10rem]"
                    >
                      <blockquote className="text-brand-navy/90 italic">
                        “{item.quote}”
                      </blockquote>
                      <p className="mt-3 font-semibold text-brand-violet">
                        {item.author}
                      </p>
                      {item.title && (
                        <p className="text-sm text-brand-charcoal/70">
                          {item.title}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="pt-8 lg:pt-12 pb-12 lg:pb-16 px-4 bg-brand-softblue"
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle eyebrow="FAQ" heading="Answers before you switch." />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faq.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pt-10 lg:pt-14 pb-12 lg:pb-16 px-4">
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-brand-navy to-brand-violet text-white p-10 shadow-[0_25px_60px_rgba(40,56,93,0.35)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-white/70">
                Ready to upgrade?
              </p>
              <h2 className="font-display text-3xl md:text-[2.6rem] mt-3">
                Get a modern VoIP system that grows with you.
              </h2>
              <p className="mt-3 text-white/80">
                Business communications built for clarity, reliability, and
                scale. Email us at{" "}
                <a
                  href="mailto:sales@upscalevoip.com"
                  className="underline hover:text-white/60"
                >
                  sales@upscalevoip.com
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/plans"
                className="inline-flex px-6 py-3 rounded-full bg-white text-brand-violet font-semibold"
              >
                Get Started
              </Link>
              <a
                href="mailto:sales@upscalevoip.com"
                className="inline-flex px-6 py-3 rounded-full border border-white/60 text-white font-semibold hover:text-white/80 transition-colors"
              >
                Email sales@upscalevoip.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/upscale-voip-website">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}
