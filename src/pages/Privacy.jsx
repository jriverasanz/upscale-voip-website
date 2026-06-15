import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="font-body text-brand-charcoal min-h-screen flex flex-col">
      <main className="flex-grow py-12 lg:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-violet hover:text-brand-violet/80 mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1 className="font-display text-4xl lg:text-5xl text-brand-navy leading-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-brand-slate text-sm mb-10">Last updated: June 10, 2026</p>

          <div className="prose prose-lg max-w-none text-brand-charcoal/80 space-y-6">
            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">1. Introduction</h2>
              <p>
                Upscale VoIP ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our policies, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and billing information when you sign up for our services or request a quote.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referral sources.</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                <li><strong>Communication Data:</strong> Call records, voicemail transcripts, and messaging metadata necessary to provide our VoIP services.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our VoIP and communication services.</li>
                <li>To process transactions and send billing information.</li>
                <li>To respond to your inquiries, support requests, and feedback.</li>
                <li>To send administrative information, including updates, security alerts, and support messages.</li>
                <li>To comply with legal obligations and regulatory requirements.</li>
                <li>To detect, prevent, and address technical issues and fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers and vendors who assist us in operating our business and services.</li>
                <li>To comply with applicable laws, regulations, or legal processes.</li>
                <li>To protect our rights, property, or safety, and that of our users or others.</li>
                <li>In connection with a business transfer, such as a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. These include encryption, access controls, secure data centers, and regular security assessments. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Call records and voicemail data are retained in accordance with applicable regulations and our data retention policies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request deletion of your personal information.</li>
                <li>Object to or restrict processing of your data.</li>
                <li>Request portability of your data to another service provider.</li>
                <li>Withdraw consent at any time, where processing is based on consent.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:support@upscalevoip.com" className="text-brand-violet hover:underline">support@upscalevoip.com</a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">8. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">12. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
              </p>
              <div className="bg-brand-softblue rounded-2xl p-6 mt-4">
                <p className="font-semibold text-brand-navy">Upscale VoIP</p>
                <p className="mt-1">Email: <a href="mailto:support@upscalevoip.com" className="text-brand-violet hover:underline">support@upscalevoip.com</a></p>
                <p>Phone: <a href="tel:+18454442344" className="text-brand-violet hover:underline">(845) 444-2344</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Privacy;
