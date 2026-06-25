import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const snapGoFeatures = [
  { name: "SIP Softphone", desc: "Make and receive calls over SIP directly from your mobile device with HD voice quality." },
  { name: "Contact Management", desc: "Access and manage your portal contacts and device contacts all in one place." },
  { name: "Visual Voicemail", desc: "View, play, save, and delete voicemail messages directly from a visual interface." },
  { name: "Answering Rules", desc: "Manage and reorder your answering rules on the go — sort, edit, and update." },
  { name: "Call History", desc: "View inbound, outbound, and missed calls with caller ID, duration, and timestamps." },
  { name: "Presence", desc: "See real-time availability of your colleagues and extensions across the system." },
  { name: "Extension Dialing", desc: "Dial internal extensions quickly and easily from the dial pad or contacts." },
  { name: "Call Transfer", desc: "Transfer active calls with an announcement to another extension or device." },
  { name: "Call Recording", desc: "Start and stop call recordings on demand during active calls." },
  { name: "Switch Call to New Device", desc: "Move an active call from your mobile app to another device seamlessly." },
];

const callFunctions = [
  "Mute – Disables the microphone during an active call.",
  "Hold – Places the other party on hold.",
  "Speaker – Enables speakerphone mode.",
  "Add Call – Creates a second call that can be merged into a three-way conference or swapped between calls.",
  "Dial Pad – Enter digits when dialing into an auto attendant or IVR.",
  "Transfer – Transfers the call with an announcement to the destination.",
  "Switch Phone – Moves the call to other devices owned by the same user or to the cellular number.",
  "More – Switch phone or start on-demand call recording.",
];

const Apps = () => {
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
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-softblue text-brand-violet font-semibold text-sm">
                  Mobile App
                </div>
                <h1 className="font-display text-4xl lg:text-5xl text-brand-navy mt-6 leading-tight">
                  Snap<span className="text-brand-violet">.</span>Go
                </h1>
                <p className="mt-2 text-lg text-brand-violet font-semibold">
                  Mobile VoIP Softphone
                </p>
                <p className="mt-4 text-brand-charcoal/70 max-w-2xl leading-relaxed">
                  Snap.Go is a powerful softphone with full portal capabilities
                  including visual voicemail, call history, contacts, greetings,
                  and answering rules — all from your mobile device. Available
                  exclusively for Upscale VoIP clients.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Download for iOS
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    Download for Android
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-[2.5rem] bg-gradient-to-br from-brand-violet/20 via-brand-softblue to-white shadow-[0_20px_60px_rgba(151,73,156,0.2)] flex items-center justify-center border border-brand-violet/10">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-violet to-brand-navy flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-white font-bold text-2xl">SG</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-brand-navy">Snap.Go</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started / Login */}
        <section className="py-12 px-4 bg-brand-softblue/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-brand-navy">
                Getting Started
              </h2>
              <p className="mt-3 text-brand-charcoal/70 max-w-2xl mx-auto">
                Download Snap.Go from the App Store or Google Play, then log in
                with your Upscale VoIP credentials.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-brand-navy/10 p-8 shadow-card">
              <h3 className="font-semibold text-lg text-brand-navy mb-4">
                First-Time Login
              </h3>
              <p className="text-sm text-brand-charcoal/70 mb-6">
                When launching Snap.Go for the first time, you will be presented
                with the login screen. Enter the following details:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-brand-softblue/50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-brand-violet/10 flex items-center justify-center text-brand-violet font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm">
                      Host / ID
                    </p>
                    <p className="text-brand-violet font-mono text-sm">mypbx</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-brand-softblue/50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-brand-violet/10 flex items-center justify-center text-brand-violet font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm">
                      Login
                    </p>
                    <p className="text-brand-violet font-mono text-sm">
                      ext@pbx-id
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-brand-softblue/50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-brand-violet/10 flex items-center justify-center text-brand-violet font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm">
                      Password
                    </p>
                    <p className="text-brand-violet font-mono text-sm">
                      portal password
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-brand-charcoal/60 italic">
                After the initial login, this data will be stored and not be
                requested again unless you log out.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="uppercase tracking-[0.3em] text-xs text-brand-slate">
                Features
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-brand-navy mt-3">
                Everything you need on the go
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {snapGoFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="bg-white rounded-2xl border border-brand-navy/10 p-5 hover:shadow-md hover:border-brand-violet/20 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-violet/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-brand-violet"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy text-sm">
                        {feature.name}
                      </h3>
                      <p className="mt-1 text-sm text-brand-charcoal/70 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call Functions */}
        <section className="py-12 px-4 bg-brand-softblue/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-brand-navy">
                  Making & Receiving Calls
                </h2>
                <p className="mt-4 text-brand-charcoal/70 leading-relaxed">
                  Tap the Dial Pad icon to launch the phone dialer. Dial
                  internal extensions or external numbers, then press the green
                  dial icon to begin the call. When there is an incoming call,
                  the caller ID along with answer and reject buttons will be
                  displayed.
                </p>

                <h3 className="font-semibold text-lg text-brand-navy mt-8 mb-4">
                  Active Call Controls
                </h3>
                <p className="text-sm text-brand-charcoal/70 mb-4">
                  When a call is active, the status, dialed number, and call
                  timer are displayed along with the following functions:
                </p>
                <ul className="space-y-2">
                  {callFunctions.map((fn) => (
                    <li
                      key={fn}
                      className="flex items-start gap-2 text-sm text-brand-charcoal/80"
                    >
                      <span className="text-brand-violet mt-0.5">•</span>
                      <span>{fn}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                {/* Contacts */}
                <div className="bg-white rounded-2xl border border-brand-navy/10 p-6 shadow-card">
                  <h3 className="font-semibold text-lg text-brand-navy flex items-center gap-2">
                    <span className="text-brand-violet">👥</span> Contacts
                  </h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">
                    The Contacts view shows contacts from your phone as well as
                    the app. App contacts are synced from the portal. Toggle
                    between App and Phone contacts, search by name, and add new
                    contacts directly. Click a contact to view details, dial, or
                    email.
                  </p>
                </div>

                {/* Voicemail */}
                <div className="bg-white rounded-2xl border border-brand-navy/10 p-6 shadow-card">
                  <h3 className="font-semibold text-lg text-brand-navy flex items-center gap-2">
                    <span className="text-brand-violet">📧</span> Visual
                    Voicemail
                  </h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">
                    View your voicemail box with play/pause controls, a message
                    progress bar, and speaker toggle. Call back the caller, save
                    messages, or delete them. Toggle between New and Saved
                    message views.
                  </p>
                </div>

                {/* Call History */}
                <div className="bg-white rounded-2xl border border-brand-navy/10 p-6 shadow-card">
                  <h3 className="font-semibold text-lg text-brand-navy flex items-center gap-2">
                    <span className="text-brand-violet">📋</span> Call History
                  </h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">
                    Displays inbound, outbound, and missed calls with caller ID,
                    call direction, time, and duration. Click the info icon for
                    additional details or tap anywhere else to return the call.
                    Filter by All Calls or Missed Calls.
                  </p>
                </div>

                {/* Side Nav */}
                <div className="bg-white rounded-2xl border border-brand-navy/10 p-6 shadow-card">
                  <h3 className="font-semibold text-lg text-brand-navy flex items-center gap-2">
                    <span className="text-brand-violet">☰</span> Side Navigation
                  </h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">
                    Open the side menu by pressing the Menu icon or swiping
                    right. From here you can manage Greetings (record, listen,
                    select, delete), adjust Settings (mobile data, background
                    mode, default dialer), view App version info, and Logout.
                  </p>
                </div>

                {/* Answering Rules */}
                <div className="bg-white rounded-2xl border border-brand-navy/10 p-6 shadow-card">
                  <h3 className="font-semibold text-lg text-brand-navy flex items-center gap-2">
                    <span className="text-brand-violet">⚙️</span> Answering
                    Rules
                  </h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed">
                    View and manage your answering rules. Click a rule to review
                    its settings. Use the Sort button to reorder rules by
                    dragging the handle, then tap Done to save changes.
                  </p>
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
                Get the app
              </p>
              <h2 className="font-display text-3xl md:text-[2.6rem] mt-3">
                Ready to take calls on the go?
              </h2>
              <p className="mt-3 text-white/80">
                Download Snap.Go and stay connected wherever you are.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-violet font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                iOS App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-violet font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apps;
