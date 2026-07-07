import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const featureCategories = [
  {
    id: "call-handling",
    name: "Call Handling & Routing",
    icon: "📞",
    features: [
      {
        name: "Call Queues",
        usage:
          "Organize incoming calls into intelligent queues. Agents see live wait times and caller positions. Supervisors can monitor queue depth and SLAs in real time. To use: navigate to Call Queues in the admin portal, create a new queue, assign agents, and set routing parameters (ring strategy, timeout, max wait time).",
      },
      {
        name: "Auto Attendants",
        usage:
          "Multi-level IVR menus greet callers and route them via keypad or speech input. To use: go to Auto Attendants in the portal, record or upload greetings, configure menu options, and link each option to an extension, queue, or another menu level.",
      },
      {
        name: "Call Forwarding",
        usage:
          "Redirect calls based on conditions: Always, Busy, No Answer, Not Reachable, or Find Me Follow Me. To use: in your extension settings, enable forwarding, choose the mode, and enter the destination number. Find Me Follow Me rings multiple numbers simultaneously or in sequence.",
      },
      {
        name: "Call Transfer",
        usage:
          "Move active calls to another user, queue, or voicemail without dropping. Supported types: Attended (consult then transfer), Blind (transfer immediately), Intercom (announce via intercom), and Transfer to Voicemail.",
      },
      {
        name: "Call Parking",
        usage:
          "Park a call in a shared orbit so anyone can retrieve it. To use: during a call, press the Park button on your phone or app. The system assigns an orbit number. Anyone can dial that orbit or press the Retrieve button to pick up the call.",
      },
      {
        name: "Call Pickup",
        usage:
          "Answer a ringing call on a different device. Options: Pickup Any, Pickup Department, Pickup Entire PBX, or Directed Call Pickup (reclaim your own call on another device). To use: dial the pickup code followed by the ringing extension.",
      },
      {
        name: "Simultaneous Ring",
        usage:
          "Ring multiple devices at once — SIP phones, mobile app, web app, and off-net numbers. To use: in extension settings, enable Simultaneous Ring and add the devices/numbers. You can set ring delay, enable call screening, and require answer confirmation.",
      },
      {
        name: "Time Frames",
        usage:
          "Define business hours, after-hours, and holiday schedules that automatically change call routing. To use: create a Time Frame in the admin portal, set recurring weekly hours and holidays, then attach it to Auto Attendants, Call Queues, or Forwarding rules.",
      },
      {
        name: "Inbound Call Handling Rules",
        usage:
          "Build if-this-then-that style rules for any inbound scenario — time-based, caller-based, or load-based. To use: in the admin portal, create a new rule, set conditions (time, caller ID, queue state), and define actions (route, block, forward).",
      },
    ],
  },
  {
    id: "call-management",
    name: "Call Management & Monitoring",
    icon: "📊",
    features: [
      {
        name: "Call Recording",
        usage:
          "Record calls for compliance and training. Modes: Always, On Demand, via device button, or policy-based. To use: enable recording in extension settings or create a recording policy in the admin portal. Authorized users can start/stop recording mid-call.",
      },
      {
        name: "Call Monitoring",
        usage:
          "Supervisors can Barge (join the call), Listen (silently monitor), or Whisper (coach the agent without the customer hearing). To use: in the supervisor portal, select the active call and choose the monitoring mode.",
      },
      {
        name: "Call Waiting",
        usage:
          "Alert users to a second incoming call while on an active call. To use: enable Call Waiting in extension settings. When a second call arrives, you'll hear a tone and can toggle between calls, merge them into a conference, or send to voicemail.",
      },
      {
        name: "Call Return",
        usage:
          "Redial the most recent inbound caller with a single action. To use: dial the Call Return code (*69 or customized code) from your phone, or press the Return Last Call button in the web/mobile app.",
      },
      {
        name: "Call Blocking (Inbound & Outbound)",
        usage:
          "Block nuisance callers or restrict outbound dialing by number, prefix, or country. To use: create a block list in the admin portal with numbers or patterns. Inbound blocks reject matching callers; outbound blocks prevent specified dialing.",
      },
      {
        name: "Anonymous Call Rejection",
        usage:
          "Auto-reject callers who withhold their caller ID. To use: enable Anonymous Call Rejection in extension or system settings. Callers with blocked IDs hear a rejection message.",
      },
      {
        name: "Selective Call Rejection",
        usage:
          "Target specific numbers or patterns to reject while letting others through. To use: create a selective rejection list in the portal with the numbers/patterns you want to block.",
      },
      {
        name: "Whitelist",
        usage:
          "Guarantee VIP contacts always reach you, bypassing DND, forwarding, and other filters. To use: add trusted numbers to the Whitelist in your extension settings. Calls from these numbers will ring through regardless of your status.",
      },
      {
        name: "Blacklist",
        usage:
          "Permanently block known spam or fraud numbers. To use: add numbers to the Blacklist in the admin portal. Blocked callers hear a rejection message or busy signal.",
      },
      {
        name: "Do Not Disturb (Server Side)",
        usage:
          "Silence ringing at the network edge while keeping queue routing intact. To use: toggle DND on from your phone, web app, or mobile app. Calls can be sent to voicemail, forwarded, or queued depending on your settings.",
      },
      {
        name: "Distinctive Ring",
        usage:
          "Assign different ring patterns by user, department, dialed number, or caller. To use: in extension settings, select a ring tone or pattern. Create rules to apply specific rings for specific callers or DID numbers.",
      },
      {
        name: "Three-Way Calling",
        usage:
          "Launch a quick three-party conference from any endpoint. To use: while on an active call, press the Conference button, dial the third party, then press Conference again to join all parties.",
      },
    ],
  },
  {
    id: "user-features",
    name: "User Features & Presence",
    icon: "👤",
    features: [
      {
        name: "Extension User Features",
        usage:
          "Every extension includes: answering, holding, transferring, voicemail, call forwarding, and DND — all available out of the box. To use: log into the web portal, navigate to your extension settings, and configure any feature toggles.",
      },
      {
        name: "View Extension Presence",
        usage:
          "See who is Available, Busy, Ringing, On Call, or on DND in real time. To use: open the web app, mobile app, or an enabled desk phone. Presence indicators show next to each contact or extension.",
      },
      {
        name: "View Company Contacts",
        usage:
          "Browse the corporate directory with click-to-call access from any endpoint. To use: open the directory in your web app, mobile app, or desk phone. Search by name, extension, or department.",
      },
      {
        name: "BLF / Busy Lamp Field",
        usage:
          "Hardware lamps and app indicators reveal extension states at a glance — idle (off), ringing (flashing), busy (solid). To use: configure BLF keys on your desk phone or app, assign them to extensions, and monitor their status visually.",
      },
      {
        name: "On Device",
        usage:
          "Configure feature keys, BLF, and presence states directly on supported desk phones. To use: on compatible phones, press the Menu or Settings button, navigate to feature key settings, and assign functions (BLF, speed dial, parking).",
      },
      {
        name: "Extension Dialing",
        usage:
          "Reach anyone internally using short extension codes instead of full phone numbers. To use: dial the 3-5 digit extension number from any internal phone or app. Works across all devices.",
      },
      {
        name: "Intercom / Paging",
        usage:
          "Broadcast announcements to phones or speakers, or open a two-way intercom session. To use: dial the intercom code followed by the target extension for one-way announcements, or use the Paging feature to broadcast to a group.",
      },
      {
        name: "MWI / Message Waiting Indicator",
        usage:
          "Visual lights and app badges show unread voicemail counts. To use: voicemail messages automatically trigger the MWI on your desk phone (strobe) and app (badge). Press the MWI button to dial voicemail.",
      },
      {
        name: "Presence",
        usage:
          "Unified presence syncs across desk phones, web app, mobile app, and third-party integrations. To use: your status updates automatically based on phone activity. You can manually set your presence to Available, Busy, or DND.",
      },
      {
        name: "Privacy Features",
        usage:
          "Control caller ID display, block recording on sensitive calls, or enforce elevated encryption per user. To use: in extension settings, toggle privacy options: hide caller ID, prevent recording, or force encrypted signaling.",
      },
    ],
  },
  {
    id: "apps-devices",
    name: "Apps & Devices",
    icon: "📱",
    features: [
      {
        name: "Web & Mobile App",
        usage:
          "Full PBX controls in responsive web and native mobile experiences. To use: download the mobile app from the App Store or Google Play, or open the web app in Chrome. Log in with your extension credentials to access calling, messaging, and settings.",
      },
      {
        name: "Mobile App Phone (Android & iOS)",
        usage:
          "Native mobile apps deliver HD calling, SMS, and presence sync. To use: install the Upscale VoIP mobile app, log in with your extension, and enable push notifications. Make and receive calls over WiFi or cellular.",
      },
      {
        name: "Web App (Chrome)",
        usage:
          "Chromium-based softphone handles voice, SMS, and screen pops without local installs. To use: navigate to the web app URL in Chrome, log in, and grant microphone permissions. The app works as a full softphone in the browser.",
      },
      {
        name: "Web Phone",
        usage:
          "Browser-based phone for calling, texting, and presence without any hardware. To use: access the Web Phone from the customer portal. It provides dialpad, contacts, call history, and voicemail access — all from the browser.",
      },
      {
        name: "Attendant Console",
        usage:
          "Dedicated operator console for receptionists to manage queues, presence, and transfers with hotkeys or sidecars. To use: open the Attendant Console from the portal. Drag and drop calls to transfer, monitor queue status, and manage multiple lines.",
      },
      {
        name: "Attendant Console (Web Based)",
        usage:
          "Browser-based console for receptionists to manage calls without additional hardware. To use: log into the web-based Attendant Console from any browser. View all active calls, extensions, and queues in one interface.",
      },
      {
        name: "Built-in Chat",
        usage:
          "Contextual team chat built directly into the calling apps. To use: open the chat panel in the web or mobile app while on a call. Share files, links, and messages without leaving the call interface.",
      },
      {
        name: "Chat",
        usage:
          "Persistent team chat spaces keep projects and team discussions in one place. To use: create chat rooms by topic or project in the app. Invite team members, share files, and search message history.",
      },
      {
        name: "Click to Call",
        usage:
          "Launch calls directly from CRM entries, contact lists, or the web portal with one click. To use: enable Click to Call in settings. Numbers in the portal, directory, or integrations become clickable — one click initiates the call via your extension.",
      },
      {
        name: "Screen Pops",
        usage:
          "Automatically display CRM or ticket data when a call arrives. To use: integrate your CRM with Upscale VoIP. When a call comes in, the system matches the caller ID and displays the contact's CRM record, recent interactions, and notes.",
      },
      {
        name: "Contact Widget",
        usage:
          "Embed click-to-call and contact forms with live presence on your website. To use: add the Contact Widget code snippet to your website. Visitors see your team's presence status and can click to call or submit a contact form.",
      },
    ],
  },
  {
    id: "system-admin",
    name: "System & Admin",
    icon: "⚙️",
    features: [
      {
        name: "PBX System Features",
        usage:
          "Organization-wide PBX controls covering routing, compliance, analytics, and automation. To use: access the admin portal to configure system-level settings: dial plans, trunking, emergency routing, and global feature toggles.",
      },
      {
        name: "Account Code Tracking",
        usage:
          "Tag calls with account codes for project, department, or client billing reconciliation. To use: enable Account Codes in extension settings. Users enter a code before or during calls. Generate reports filtered by account code.",
      },
      {
        name: "CDRs / Call Detail Records",
        usage:
          "Exportable line-by-line call history with duration, source, destination, and disposition. To use: navigate to Reports > CDRs in the admin portal. Filter by date, extension, or caller ID. Export to CSV for external analysis.",
      },
      {
        name: "Device Auto Provisioning",
        usage:
          "Zero-touch phone setup with multi-vendor support, bulk import, and remote device management. To use: in the admin portal, add a new device by MAC address or scan a QR code. The phone auto-configures with the correct extension and settings.",
      },
      {
        name: "SIP-Tapi Support",
        usage:
          "Integrate desk phones with desktop apps and CRMs using SIP-TAPI drivers. To use: install the SIP-TAPI driver on your PC. Configure it with your extension credentials. CRM and desktop apps gain click-to-dial and call pop capabilities.",
      },
      {
        name: "Video Support (H264)",
        usage:
          "Native H264 video calling keeps teams face-to-face without extra apps. To use: from the web or mobile app, start a video call with any other Upscale VoIP user. No additional license or third-party service needed.",
      },
      {
        name: "Voicemail",
        usage:
          "Full voicemail with email notification (with or without audio attachment), transcription via VoiceBase, and playback from any app. To use: set up voicemail in extension settings. Access messages from the web portal, mobile app, or by dialing the voicemail access code.",
      },
      {
        name: "Web User Portal",
        usage:
          "Role-based portal for users to manage their own settings, recordings, and preferences. To use: log into the web portal at the provided URL. Users see controls appropriate to their role — extension settings, call logs, and voicemail.",
      },
      {
        name: "Access Levels",
        usage:
          "Permissions: Office Manager, Standard User, Call Center Agent, or Call Center Supervisor. To use: in the admin portal, assign an access level to each user. The portal and feature set adapts to the assigned role.",
      },
      {
        name: "Full Self-Service Feature Management",
        usage:
          "Admins toggle numbers, routing, and recordings without support tickets. To use: log into the admin portal. All system settings are available — add new numbers, modify routing, enable recording policies, and manage users.",
      },
      {
        name: "Answer and Reject Calls",
        usage:
          "Desktop alerts let agents accept or decline calls without touching the phone. To use: when a call arrives, a pop-up notification appears on the desktop with Accept and Reject buttons. Click to answer or send to voicemail.",
      },
      {
        name: "Start and Stop Recording",
        usage:
          "Authorized users can start or stop a recording mid-call for selective compliance. To use: during an active call, press the Record button in the web or mobile app. Recording begins/stops immediately. A tone may play to notify participants.",
      },
    ],
  },
  {
    id: "caller-id",
    name: "Caller ID & Numbers",
    icon: "🆔",
    features: [
      {
        name: "Caller ID Management (Inbound & Outbound)",
        usage:
          "Customize inbound caller ID display and outbound branding per number, user, or campaign. To use: in extension or trunk settings, select which outbound CID displays. For inbound, configure per-DID display preferences.",
      },
      {
        name: "Caller ID with Name",
        usage:
          "Leverage CNAM dips so users see company names alongside phone numbers. To use: enable CNAM lookup in trunk settings. Inbound calls automatically display the caller's name when available from the CNAM database.",
      },
      {
        name: "Music on Hold",
        usage:
          "Play branded waiting music with system default, custom playlists, randomized tracks, or per-queue settings. To use: upload audio files in the Music on Hold section of the portal. Assign different music sources to queues, auto attendants, or park orbits.",
      },
      {
        name: "Shared Lines Appearance",
        usage:
          "Mirror high-value lines across devices so assistants can see activity and answer on behalf of executives. To use: enable SLA on a primary extension and add secondary devices. All devices show the same line status — ringing, active, or idle.",
      },
      {
        name: "SMS",
        usage:
          "Send and receive business SMS/MMS alongside voice for quick customer communication. To use: from the web app or mobile app, open the SMS tab, select a contact, and type your message. MMS supports images and attachments.",
      },
    ],
  },
  {
    id: "integrations-portal",
    name: "Integrations & Portal",
    icon: "🔗",
    features: [
      {
        name: "Customer Portal",
        usage:
          "Give customers a branded login for account management, payments, support tickets, and service updates. To use: in the admin portal, configure the Customer Portal with your branding. Customers receive login credentials to access their portal.",
      },
      {
        name: "Web Portal",
        usage:
          "Secure central portal for user settings, routing rules, and analytics — all in one place. To use: navigate to the web portal URL. Log in with admin or user credentials. The dashboard shows call activity, system status, and quick actions.",
      },
      {
        name: "User List with Presence",
        usage:
          "Roster view showing every user paired with their live availability status. To use: open the directory or user list in any app. Each entry displays presence: green (available), yellow (busy), red (DND), or gray (offline).",
      },
    ],
  },
];

function Solutions() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(
    new URLSearchParams(location.search).get("category") || "all",
  );
  const [expandedFeatures, setExpandedFeatures] = useState(new Set());

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat && featureCategories.some((c) => c.id === cat)) {
      setActiveCategory(cat);
    } else if (!cat) {
      setActiveCategory("all");
    }
  }, [location.search]);

  const toggleFeature = (featureName) => {
    setExpandedFeatures((prev) => {
      const next = new Set(prev);
      if (next.has(featureName)) {
        next.delete(featureName);
      } else {
        next.add(featureName);
      }
      return next;
    });
  };

  // FlowBot AI Agent as a separate highlighted feature
  const flowBotFeature = {
    name: "FlowBot AI Agent",
    tagline: "Intelligent AI-powered voice agent for your business",
    description:
      "FlowBot AI Agent is an intelligent conversational AI that handles inbound calls, answers customer questions, schedules appointments, and routes complex issues to human agents — all in natural language.",
    usage:
      "To use FlowBot AI Agent: 1) Enable the FlowBot feature in your admin portal under AI Agents. 2) Configure the knowledge base by uploading FAQs, product info, and business hours. 3) Set up escalation rules — FlowBot transfers to a human agent when it can't resolve the query. 4) Customize the voice, greeting, and conversation flow in the FlowBot builder. 5) Monitor conversations and AI performance in the analytics dashboard. FlowBot learns from each interaction and improves over time.",
    benefits: [
      "24/7 automated call handling",
      "Natural language understanding",
      "Seamless escalation to human agents",
      "Custom knowledge base training",
      "Conversation analytics & insights",
    ],
  };

  return (
    <div className="font-body text-brand-charcoal min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-16 px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] px-6 md:px-12 py-12 shadow-[0_35px_80px_rgba(17,38,87,0.08)] relative overflow-hidden">
            <div
              className="absolute -top-32 -left-32 w-72 h-72 bg-brand-violet/15 rounded-full blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-slate/10 rounded-full blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-softblue text-brand-violet font-semibold text-sm">
                Solutions Suite
              </div>
              <h1 className="font-display text-4xl lg:text-5xl text-brand-navy mt-6 leading-tight">
                Every call control. One intuitive platform.
              </h1>
              <p className="mt-4 text-base text-brand-charcoal/70 max-w-3xl">
                Upscale VoIP combines routing, analytics, collaboration, and
                customer touchpoints so your teams can answer, assist, and
                resolve faster. Explore the complete feature stack, organized by
                category. Click any feature to learn how to use it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex px-6 py-3 rounded-full bg-brand-violet text-white font-semibold shadow-lg"
                >
                  Talk to an expert
                </Link>
                <Link
                  to="/plans"
                  className="inline-flex px-6 py-3 rounded-full border border-brand-violet text-brand-violet font-semibold"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FlowBot AI Agent Spotlight */}
        <section className="py-12 px-4 bg-gradient-to-br from-brand-violet/10 to-brand-softblue">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(151,73,156,0.15)] overflow-hidden border border-brand-violet/20">
              <div className="grid md:grid-cols-[1.3fr_0.7fr]">
                <div className="p-8 md:p-12">
                  <div className="inline-flex px-3 py-1 rounded-full bg-brand-violet text-white text-xs font-semibold mb-4">
                    NEW
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-brand-navy">
                    {flowBotFeature.name}
                  </h2>
                  <p className="mt-2 text-lg text-brand-violet font-semibold">
                    {flowBotFeature.tagline}
                  </p>
                  <p className="mt-4 text-brand-charcoal/70">
                    {flowBotFeature.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {flowBotFeature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <span className="text-brand-violet mt-0.5">✦</span>
                        <span className="text-brand-navy">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <details className="mt-6 group">
                    <summary className="cursor-pointer text-brand-violet font-semibold hover:text-brand-violet/80 transition-colors list-none flex items-center gap-2">
                      <span className="text-sm">
                        How to use FlowBot AI Agent
                      </span>
                      <svg
                        className="w-4 h-4 transition-transform group-open:rotate-180"
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
                    </summary>
                    <p className="mt-3 text-sm text-brand-charcoal/70 leading-relaxed bg-brand-softblue/50 p-4 rounded-xl">
                      {flowBotFeature.usage}
                    </p>
                  </details>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex px-6 py-3 rounded-full bg-brand-violet text-white font-semibold shadow-lg hover:bg-brand-violet/90 transition-colors"
                    >
                      Enable FlowBot AI
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-brand-violet/20 to-brand-softblue p-8">
                  <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <span className="text-6xl">🤖</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 bg-white sticky top-[4.5rem] z-10 border-b border-brand-navy/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === "all"
                    ? "bg-brand-violet text-white"
                    : "bg-gray-100 text-brand-charcoal hover:bg-gray-200"
                }`}
              >
                All Features
              </button>
              {featureCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat.id
                      ? "bg-brand-violet text-white"
                      : "bg-gray-100 text-brand-charcoal hover:bg-gray-200"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Features by Category */}
        <section className="py-10 px-4 bg-brand-softblue/30">
          <div className="max-w-6xl mx-auto space-y-12">
            {featureCategories
              .filter(
                (cat) => activeCategory === "all" || activeCategory === cat.id,
              )
              .map((category) => (
                <div key={category.id} id={`cat-${category.id}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="font-display text-2xl text-brand-navy">
                      {category.name}
                    </h2>
                    <span className="text-sm text-brand-charcoal/50">
                      ({category.features.length} features)
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {category.features.map((feature) => (
                      <div
                        key={feature.name}
                        className={`rounded-2xl border transition-all duration-200 ${
                          expandedFeatures.has(feature.name)
                            ? "border-brand-violet/40 bg-white shadow-md"
                            : "border-brand-navy/10 bg-white/80 hover:border-brand-navy/20 hover:shadow-sm"
                        }`}
                      >
                        <button
                          onClick={() => toggleFeature(feature.name)}
                          className="w-full text-left p-5 focus:outline-none"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-brand-navy text-sm">
                              {feature.name}
                            </h3>
                            <svg
                              className={`w-4 h-4 mt-0.5 text-brand-violet flex-shrink-0 transition-transform ${
                                expandedFeatures.has(feature.name)
                                  ? "rotate-180"
                                  : ""
                              }`}
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
                          </div>
                        </button>
                        {expandedFeatures.has(feature.name) && (
                          <div className="px-5 pb-5 border-t border-brand-navy/5 pt-3">
                            <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                              {feature.usage}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-brand-navy to-brand-violet text-white p-10 shadow-[0_25px_60px_rgba(40,56,93,0.35)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-white/70">
                Need tailored workflows?
              </p>
              <h2 className="font-display text-3xl md:text-[2.6rem] mt-3">
                Bundle these capabilities with our plans.
              </h2>
              <p className="mt-3 text-white/80">
                We'll map required features to the right licenses and onboarding
                plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/plans"
                className="inline-flex px-6 py-3 rounded-full bg-white text-brand-violet font-semibold"
              >
                Compare plans
              </Link>
              <Link
                to="/contact"
                className="inline-flex px-6 py-3 rounded-full border border-white/60 text-white font-semibold"
              >
                Book a consult
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Solutions;
