import { Link } from 'react-router-dom';

function Terms() {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-brand-slate text-sm mb-10">Last updated: June 10, 2026</p>

          <div className="prose prose-lg max-w-none text-brand-charcoal/80 space-y-6">
            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Upscale VoIP website and services ("Services"), you agree to be bound by these Terms &amp; Conditions ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
              <p>
                These Terms apply to all visitors, users, and customers of Upscale VoIP. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Services after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">2. Services Description</h2>
              <p>
                Upscale VoIP provides cloud-based Voice over Internet Protocol (VoIP) communication services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hosted PBX and business phone systems.</li>
                <li>Voice calling, video conferencing, and team messaging.</li>
                <li>Auto attendants, call routing, and IVR solutions.</li>
                <li>Call recording, analytics, and reporting tools.</li>
                <li>CRM integrations and API access.</li>
                <li>Mobile and desktop softphone applications.</li>
              </ul>
              <p className="mt-4">
                Service availability, features, and pricing are subject to change. We will make reasonable efforts to notify customers of material changes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">3. Account Registration and Responsibilities</h2>
              <p>To use our Services, you may be required to create an account. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete registration information.</li>
                <li>Maintain and update your account information as needed.</li>
                <li>Keep your login credentials confidential and secure.</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
                <li>Be responsible for all activities that occur under your account.</li>
              </ul>
              <p className="mt-4">
                You must be at least 18 years old to create an account and use our Services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">4. Acceptable Use</h2>
              <p>You agree not to use our Services for any unlawful, prohibited, or harmful activities, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transmitting spam, unsolicited messages, or fraudulent communications.</li>
                <li>Engaging in telemarketing or robocalling without proper consent.</li>
                <li>Harassing, threatening, or abusing others.</li>
                <li>Interfering with or disrupting the integrity of our network or services.</li>
                <li>Attempting to gain unauthorized access to our systems.</li>
                <li>Using the Services in violation of any applicable laws or regulations.</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate access to our Services for any violation of these acceptable use terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">5. Billing and Payment</h2>
              <p>
                Fees for Services are outlined in your selected plan and are billed on a monthly or annual basis as agreed upon during signup. By providing payment information, you authorize us to charge the applicable fees.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All fees are due at the start of each billing period.</li>
                <li>Late payments may result in service suspension or termination.</li>
                <li>Setup fees, if applicable, are non-refundable.</li>
                <li>Usage overages, if any, will be billed at the rates specified in your plan.</li>
                <li>We reserve the right to change pricing with 30 days' notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">6. Cancellation and Refunds</h2>
              <p>
                You may cancel your account at any time by contacting our support team. Upon cancellation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Services will continue until the end of the current billing period.</li>
                <li>Prepaid fees for the remaining period are non-refundable unless otherwise stated.</li>
                <li>You are responsible for backing up any data before cancellation.</li>
                <li>We reserve the right to delete your data after 30 days following cancellation.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">7. Number Porting</h2>
              <p>
                We assist with number porting requests to and from other carriers. Porting timelines are subject to the cooperating carrier's processes. We are not liable for delays or denials by third-party carriers. You represent that you have the authority to port any telephone numbers you request to be transferred.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">8. Service Level Agreement (SLA)</h2>
              <p>
                Upscale VoIP is committed to providing reliable service with a target uptime of 99.999% for our core platform. Specific SLA terms, including credits for verified downtime, are outlined in your service agreement. The SLA does not cover outages caused by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your internet service provider or local network issues.</li>
                <li>Scheduled maintenance with prior notice.</li>
                <li>Force majeure events or circumstances beyond our reasonable control.</li>
                <li>Customer equipment or third-party software failures.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">9. Intellectual Property</h2>
              <p>
                All content, branding, software, and technology provided by Upscale VoIP are our intellectual property or that of our licensors. You may not reproduce, distribute, modify, or create derivative works without our express written consent. Our Services are licensed, not sold, to you.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Upscale VoIP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services. Our total liability for any claim arising out of these Terms shall not exceed the amount paid by you for the Services during the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Upscale VoIP, its affiliates, officers, employees, and agents from any claims, losses, damages, liabilities, and expenses arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts located in New York.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-brand-navy mt-10 mb-4">13. Contact Information</h2>
              <p>
                For questions or concerns regarding these Terms, please contact us:
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

export default Terms;
