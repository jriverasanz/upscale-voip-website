import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const integrations = [
  {
    name: "Salesforce",
    file: "salesforce.png",
    description:
      "Sync call logs, screen-pop customer records, and log activities directly in Salesforce — click-to-call from any record.",
  },
  {
    name: "HubSpot",
    file: "hubspot.png",
    description:
      "Log calls, voicemails, and SMS transcripts to HubSpot contacts. Click-to-call from the CRM and automatic contact creation.",
  },
  {
    name: "Zendesk",
    file: "Zendesk-Logo.webp",
    description:
      "Turn inbound calls into Zendesk tickets automatically. Access customer context and call controls from the Zendesk interface.",
  },
  {
    name: "monday.com",
    file: "monday.png",
    description:
      "Log calls and activities to monday.com boards. Click-to-call from any item and sync communication history.",
  },
  {
    name: "Microsoft Teams",
    file: "teams.webp",
    description:
      "Make and receive calls from within Microsoft Teams. Presence sync, click-to-call, and call history in Teams channels.",
  },
  {
    name: "Oracle NetSuite",
    file: "oracle logo.png",
    description:
      "Screen-pop NetSuite records on inbound calls, log call activities, and enable click-to-call from any phone number field.",
  },
].map((integration) => ({
  ...integration,
  src: new URL(
    `../Integrations/${integration.file}`,
    import.meta.url
  ).href,
}));

const otherCRMs = [
  "Dynamics 365 Sales",
  "Freshsales",
  "Pipedrive",
  "SugarCRM",
  "Zoho CRM",
  "Copper",
  "Keap",
  "Nimble",
  "Insightly",
  "ActiveCampaign",
];

const flowBotFeature = {
  name: "FlowBot AI Agent",
  tagline: "Intelligent AI-powered voice agent for your business",
  description:
    "FlowBot AI Agent is an intelligent conversational AI that handles inbound calls, answers customer questions, schedules appointments, and routes complex issues to human agents — all in natural language.",
  benefits: [
    "24/7 automated call handling",
    "Natural language understanding",
    "Seamless escalation to human agents",
    "Custom knowledge base training",
    "Conversation analytics & insights",
  ],
};

const Integrations = () => {
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
                Integrations
              </div>
              <h1 className="font-display text-4xl lg:text-5xl text-brand-navy mt-6 leading-tight">
                Your tools, connected.
              </h1>
              <p className="mt-4 text-base text-brand-charcoal/70 max-w-3xl">
                Upscale VoIP integrates with the CRMs, help desks, and
                productivity tools your team already uses — plus Nava, Teammate,
                and FlowBot AI for an extended communications ecosystem.
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

        {/* CRM Integrations Grid */}
        <section className="py-12 px-4 bg-brand-softblue/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="uppercase tracking-[0.3em] text-xs text-brand-slate">
                CRM & Platform Integrations
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-brand-navy mt-3">
                Connect your tech stack
              </h2>
              <p className="mt-3 text-brand-charcoal/70 max-w-2xl mx-auto">
                One-click integrations with the platforms your team relies on
                every day — click-to-call, screen pops, activity logging, and
                more.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="bg-white rounded-2xl border border-brand-navy/10 p-6 hover:shadow-md hover:border-brand-violet/20 transition-all duration-200"
                >
                  <div className="h-14 flex items-center mb-4">
                    <img
                      src={integration.src}
                      alt={integration.name}
                      className="h-12 w-auto max-w-[140px] object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-brand-navy">
                    {integration.name}
                  </h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/contact"
                className="text-brand-violet font-semibold hover:underline"
              >
                Don't see your platform? Contact us →
              </Link>
            </div>
          </div>
        </section>

        {/* More CRMs */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl text-brand-navy">
                Compatible with more CRMs
              </h2>
              <p className="mt-3 text-brand-charcoal/70 max-w-2xl mx-auto">
                Our platform connects with most major CRM systems for
                click-to-call, screen pops, and activity logging.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {otherCRMs.map((crm) => (
                <span
                  key={crm}
                  className="px-5 py-2.5 rounded-full bg-white border border-brand-navy/10 text-brand-navy text-sm font-medium shadow-sm"
                >
                  {crm}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Nava Integration */}
        <section className="py-12 px-4 bg-gradient-to-br from-brand-violet/5 to-brand-softblue">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(151,73,156,0.12)] overflow-hidden border border-brand-violet/10">
              <div className="grid md:grid-cols-[1.3fr_0.7fr]">
                <div className="p-8 md:p-12">
                  <h2 className="font-display text-3xl md:text-4xl text-brand-navy">
                    Nava Integration
                  </h2>
                  <p className="mt-2 text-lg text-brand-violet font-semibold">
                    AI-powered call handling & analytics
                  </p>
                  <p className="mt-4 text-brand-charcoal/70 leading-relaxed">
                    Connect Upscale VoIP with Nava to unlock AI-driven call
                    analytics, sentiment tracking, and automated quality
                    assurance. Nava listens to calls in real time, provides live
                    agent coaching, and surfaces actionable insights from every
                    conversation.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Real-time call transcription & sentiment analysis",
                      "Automated QA scoring on 100% of calls",
                      "Live agent coaching with whisper prompts",
                      "Custom dashboards & trend reporting",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="text-brand-violet mt-0.5">✦</span>
                        <span className="text-brand-navy">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex px-6 py-3 rounded-full bg-brand-violet text-white font-semibold shadow-lg hover:bg-brand-violet/90 transition-colors"
                    >
                      Enable Nava Integration
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-brand-violet/10 to-brand-softblue p-8">
                  <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <span className="text-6xl">🤖</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teammate Integration */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(151,73,156,0.12)] overflow-hidden border border-brand-violet/10">
              <div className="grid md:grid-cols-[1.3fr_0.7fr]">
                <div className="p-8 md:p-12 order-2 md:order-1">
                  <h2 className="font-display text-3xl md:text-4xl text-brand-navy">
                    Teammate Integration
                  </h2>
                  <p className="mt-2 text-lg text-brand-violet font-semibold">
                    Unified team collaboration & presence
                  </p>
                  <p className="mt-4 text-brand-charcoal/70 leading-relaxed">
                    Teammate brings team messaging, presence, and call controls
                    into one interface. See who's available, start a call with
                    one click, and keep conversations flowing without switching
                    between apps. Teammate syncs presence across devices so you
                    always know when your colleagues are free.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Unified presence across all devices",
                      "Click-to-call from any conversation",
                      "Persistent team chat with call history",
                      "Screen sharing & ad-hoc conferencing",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="text-brand-violet mt-0.5">✦</span>
                        <span className="text-brand-navy">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex px-6 py-3 rounded-full bg-brand-violet text-white font-semibold shadow-lg hover:bg-brand-violet/90 transition-colors"
                    >
                      Enable Teammate Integration
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-brand-violet/5 to-brand-softblue p-8 order-1 md:order-2">
                  <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <span className="text-6xl">💬</span>
                  </div>
                </div>
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

        {/* CTA */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-brand-navy to-brand-violet text-white p-10 shadow-[0_25px_60px_rgba(40,56,93,0.35)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-white/70">
                Get connected
              </p>
              <h2 className="font-display text-3xl md:text-[2.6rem] mt-3">
                Ready to unify your tools?
              </h2>
              <p className="mt-3 text-white/80">
                Let our team help you set up the perfect integration stack for
                your business.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex px-6 py-3 rounded-full bg-white text-brand-violet font-semibold"
              >
                Talk to an expert
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;
