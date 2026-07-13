import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const articles = {
  "why-your-business-needs-a-voip-phone-system-in-2026": {
    category: "VoIP Trends",
    title: "Why Your Business Needs a VoIP Phone System in 2026",
    date: "July 1, 2026",
    readTime: "5 min read",
    image: new URL("../../voip 2026.jpg", import.meta.url).href,
    content: (
      <>
        <p className="text-lg text-brand-charcoal/70 leading-relaxed animate-slide-up">
          In today's fast-moving business environment, communication is
          everything. Whether you're serving customers, collaborating with
          remote employees, or managing multiple office locations, your phone
          system plays a critical role in your success.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed animate-slide-up">
          If you're still relying on a traditional landline or an outdated PBX
          system, 2026 is the perfect time to make the switch to Voice over
          Internet Protocol (VoIP). Modern VoIP solutions offer powerful
          features, lower costs, and the flexibility businesses need to stay
          competitive.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          1. Reduce Communication Costs
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          One of the biggest advantages of a VoIP phone system is cost savings.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Traditional phone systems often require expensive hardware,
          maintenance contracts, and separate charges for long-distance calls.
          VoIP uses your internet connection, eliminating many of these
          expenses.
        </p>
        <p className="font-semibold text-brand-navy">
          Businesses can benefit from:
        </p>
        <ul className="space-y-2">
          {[
            "Lower monthly phone bills",
            "Affordable international calling",
            "Reduced maintenance costs",
            "No expensive on-site PBX equipment",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-brand-violet mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-brand-charcoal/70 leading-relaxed">
          For many organizations, switching to VoIP can significantly reduce
          annual communication expenses.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          2. Work From Anywhere
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          The modern workforce isn't tied to a single office anymore.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          With VoIP, employees can answer business calls from their desk phones,
          laptops, tablets, or smartphones using the same business number.
          Whether your team works remotely, travels frequently, or operates
          across multiple locations, everyone stays connected.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          This flexibility improves customer service while supporting hybrid and
          remote work environments.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          3. Boost Team Productivity
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Today's VoIP systems do much more than make phone calls.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Advanced features help teams communicate faster and work more
          efficiently, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
          {[
            "Auto Attendants",
            "Call Forwarding",
            "Ring Groups",
            "Voicemail-to-Email",
            "Call Recording",
            "Video Meetings",
            "Team Messaging",
            "CRM Integrations",
            "Presence Indicators",
          ].map((feature) => (
            <div
              key={feature}
              className="bg-brand-softblue/50 rounded-xl px-4 py-3 text-sm font-medium text-brand-navy text-center border border-brand-violet/10"
            >
              {feature}
            </div>
          ))}
        </div>
        <p className="text-brand-charcoal/70 leading-relaxed">
          These enterprise-grade tools streamline daily operations and reduce
          the need for multiple communication platforms.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          4. Scale as Your Business Grows
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Business growth shouldn't require replacing your entire phone system.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Adding new employees, departments, or office locations is quick and
          simple with VoIP. New users can often be activated in minutes without
          installing expensive hardware or running additional phone lines.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Whether you're hiring your first employee or expanding to hundreds of
          users, your communication system grows with your business.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          5. Improve Customer Experience
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Customers expect quick, professional service.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          VoIP helps businesses deliver a better experience through intelligent
          call routing, automated greetings, call queues, and detailed
          analytics.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Instead of missed calls or long hold times, customers reach the right
          person faster, improving satisfaction and increasing the likelihood of
          repeat business.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          6. Enterprise Features Without Enterprise Costs
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          In the past, advanced phone features were reserved for large
          corporations with expensive PBX systems.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Today, cloud-based VoIP makes enterprise-level functionality
          accessible to businesses of every size.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Small and medium-sized businesses can enjoy powerful communication
          tools without the complexity or high upfront investment.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          7. Better Reliability and Security
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Modern VoIP providers offer highly reliable cloud infrastructure with
          built-in redundancy, encrypted communications, and automatic updates.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          If your office loses power or internet service, calls can often be
          automatically forwarded to mobile devices or another location, helping
          your business stay available when customers need you most.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          Is It Time to Upgrade?
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          If your current phone system is expensive, difficult to manage, or
          limiting your team's productivity, upgrading to a cloud-based VoIP
          solution can transform the way your business communicates.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          From lower costs and increased flexibility to advanced collaboration
          tools and improved customer service, VoIP has become an essential
          investment for businesses looking to stay competitive in 2026.
        </p>
      </>
    ),
    ctaTitle: "Upgrade your business communications today",
    ctaText:
      "A modern VoIP phone system gives your business the flexibility, reliability, and professional features needed to thrive in today's digital workplace. Whether you're a small business, a growing company, or a multi-location organization, now is the perfect time to discover how VoIP can simplify communication while reducing costs.",
    ctaButton: "Get Started Today",
  },
  "hosted-pbx-vs-traditional-phone-systems": {
    category: "Hosted PBX",
    image: new URL("../../blog 2.jpg", import.meta.url).href,
    title:
      "Hosted PBX vs. Traditional Phone Systems: Which Is Right for Your Business?",
    date: "June 15, 2025",
    readTime: "7 min read",
    content: (
      <>
        <p className="text-lg text-brand-charcoal/70 leading-relaxed animate-slide-up">
          Choosing the right business phone system is about more than just
          making calls—it's about finding a solution that supports your team
          today and grows with your business tomorrow. If you're deciding
          between a hosted PBX and a traditional on-premise phone system,
          understanding the key differences can help you make the best
          investment.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          What Is a Traditional Phone System?
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          A traditional PBX (Private Branch Exchange) is installed and
          maintained on-site. Your business owns the hardware, which is
          typically housed in a server room or telecommunications closet.
        </p>
        <p className="font-semibold text-brand-navy mt-4">Pros:</p>
        <ul className="space-y-2">
          {[
            "Full control over your phone infrastructure",
            "No reliance on internet connectivity for internal calls",
            "Can be suitable for organizations with strict on-premise requirements",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-semibold text-brand-navy mt-4">Cons:</p>
        <ul className="space-y-2">
          {[
            "High upfront equipment and installation costs",
            "Ongoing maintenance and repair expenses",
            "Limited scalability",
            "Hardware upgrades can be costly and time-consuming",
            "Requires IT expertise to manage",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-red-500 mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          What Is a Hosted PBX?
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          A hosted PBX is a cloud-based phone system managed by your service
          provider. Instead of maintaining expensive equipment on-site, your
          business connects through the internet, giving employees access to
          enterprise-grade communication tools from virtually anywhere.
        </p>
        <p className="font-semibold text-brand-navy mt-4">Pros:</p>
        <ul className="space-y-2">
          {[
            "Minimal upfront investment",
            "Monthly predictable pricing",
            "Easy to add or remove users",
            "Automatic software updates and maintenance",
            "Built-in disaster recovery",
            "Supports remote and hybrid work",
            "Access from desk phones, computers, and mobile devices",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-semibold text-brand-navy mt-4">Cons:</p>
        <ul className="space-y-2">
          {[
            "Requires a reliable internet connection",
            "Monthly subscription costs instead of a one-time purchase",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-red-500 mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">Cost Comparison</h2>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <h3 className="font-display text-lg text-red-800 mb-3">
              Traditional PBX
            </h3>
            <ul className="space-y-2">
              {[
                "High initial hardware investment",
                "Installation and configuration fees",
                "Maintenance contracts",
                "Hardware replacement costs",
                "Upgrade expenses as your business grows",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span className="text-red-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="font-display text-lg text-green-800 mb-3">
              Hosted PBX
            </h3>
            <ul className="space-y-2">
              {[
                "Low startup costs",
                "Affordable monthly subscription",
                "Maintenance included",
                "No expensive hardware replacements",
                "Easy scalability without major investments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span className="text-green-900/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-brand-charcoal/70 leading-relaxed">
          For many small and medium-sized businesses, hosted PBX often provides
          a lower total cost of ownership over time.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">Feature Comparison</h2>
        <div className="overflow-x-auto my-6 rounded-2xl border border-brand-navy/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="text-left px-4 py-3 font-semibold">Feature</th>
                <th className="text-left px-4 py-3 font-semibold">
                  Hosted PBX
                </th>
                <th className="text-left px-4 py-3 font-semibold">
                  Traditional PBX
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Auto Attendant", "✓", "Basic or Optional"],
                ["Voicemail to Email", "✓", "Limited"],
                ["Mobile App", "✓", "Usually Not Available"],
                ["Video Meetings", "✓", "Often Included"],
                ["Call Recording", "✓", "Available"],
                ["Remote Work Support", "Excellent", "Limited"],
                ["Automatic Updates", "✓", "Manual"],
                ["CRM Integrations", "✓", "Available"],
                ["Easy User Management", "✓", "Complex"],
              ].map((row, i) => (
                <tr
                  key={row[0]}
                  className={i % 2 === 0 ? "bg-white" : "bg-brand-softblue/30"}
                >
                  <td className="px-4 py-3 font-medium text-brand-navy">
                    {row[0]}
                  </td>
                  <td className="px-4 py-3 text-green-700">{row[1]}</td>
                  <td className="px-4 py-3 text-brand-charcoal/70">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">Scalability Matters</h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Business needs change quickly.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          With a traditional phone system, adding employees often means
          purchasing additional hardware and scheduling installation.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          With a hosted PBX, adding a new employee can take just minutes.
          Whether you're hiring one person or opening a new location, your phone
          system grows with you.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          Reliability and Business Continuity
        </h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Unexpected events happen.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          If an on-premise PBX loses power or experiences hardware failure, your
          phones may stop working until repairs are completed.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          Hosted PBX providers typically offer built-in redundancy, allowing
          calls to automatically route to mobile phones or other devices if your
          office becomes unavailable.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">
          Which Solution Is Right for You?
        </h2>
        <p className="font-semibold text-brand-navy">
          A traditional PBX may be a good fit if:
        </p>
        <ul className="space-y-2">
          {[
            "You have specialized on-premise infrastructure requirements.",
            "You have dedicated IT staff to manage hardware.",
            "You prefer owning all communication equipment.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-brand-violet mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-semibold text-brand-navy mt-4">
          A hosted PBX is ideal if you:
        </p>
        <ul className="space-y-2">
          {[
            "Want lower upfront costs.",
            "Need flexibility for remote or hybrid employees.",
            "Plan to grow your business.",
            "Want enterprise-level features without enterprise-level expenses.",
            "Prefer maintenance-free communications.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-brand-violet mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">The Bottom Line</h2>
        <p className="text-brand-charcoal/70 leading-relaxed">
          For most modern businesses, a hosted PBX delivers greater flexibility,
          lower long-term costs, and powerful communication features that
          traditional phone systems simply can't match.
        </p>
        <p className="text-brand-charcoal/70 leading-relaxed">
          If you're looking for a phone system that's easy to manage, scales
          with your business, and keeps your team connected wherever they work,
          hosted PBX is the smarter long-term investment.
        </p>
      </>
    ),
    ctaTitle: "Ready to modernize your business communications?",
    ctaText:
      "Contact us today to learn how a hosted PBX solution can help your business stay connected, productive, and prepared for future growth.",
    ctaButton: "Contact Us Today",
  },
};

const BlogArticle = () => {
  const { slug } = useParams();
  const article = articles[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="font-body text-brand-charcoal min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-display text-3xl text-brand-navy">
          Article not found
        </h1>
        <Link
          to="/blog"
          className="mt-4 text-brand-violet font-semibold hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="font-body text-brand-charcoal min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-12 lg:py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-violet/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto relative">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-softblue text-brand-violet font-semibold text-sm mb-6 animate-fade-in">
              {article.category}
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-brand-navy leading-tight animate-slide-up">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 mt-6 text-brand-charcoal/60 text-sm animate-fade-in">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {article.image && (
          <section className="px-4 pb-8 animate-scale-in">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-[2rem] overflow-hidden shadow-xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[300px] md:h-[420px] object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="px-4 pb-12">
          <div className="max-w-3xl mx-auto">{article.content}</div>
        </article>

        {/* CTA Section */}
        <section className="px-4 pb-12 lg:pb-16">
          <div className="max-w-4xl mx-auto rounded-[2rem] bg-gradient-to-br from-brand-navy to-brand-violet text-white p-8 md:p-12 shadow-[0_25px_60px_rgba(40,56,93,0.35)] text-center md:text-left md:flex md:items-center md:justify-between gap-8">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-white/70">
                Ready to Modernize?
              </p>
              <h2 className="font-display text-2xl md:text-3xl mt-3">
                {article.ctaTitle}
              </h2>
              <p className="mt-3 text-white/80 leading-relaxed max-w-xl">
                {article.ctaText}
              </p>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0">
              <Link
                to="/contact"
                className="inline-flex px-8 py-4 rounded-full bg-white text-brand-violet font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                {article.ctaButton}
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <section className="px-4 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-violet font-semibold hover:underline"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
