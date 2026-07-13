import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const blogPosts = [
  {
    title: "Why Your Business Needs a VoIP Phone System in 2026",
    excerpt:
      "Discover how modern VoIP technology can slash your communication costs, boost productivity, and give your team enterprise-grade features without the hardware headaches.",
    date: "July 1, 2026",
    readTime: "5 min read",
    image: new URL("../../voip 2026.jpg", import.meta.url).href,
    slug: "why-your-business-needs-a-voip-phone-system-in-2026",
    category: "VoIP Trends",
  },
  {
    title: "Hosted PBX vs. Traditional Phone Systems: Which Is Right for You?",
    excerpt:
      "We break down the costs, features, and scalability of hosted PBX versus on-premise systems so you can make an informed decision for your business.",
    date: "June 15, 2025",
    readTime: "7 min read",
    slug: "hosted-pbx-vs-traditional-phone-systems",
    image: new URL("../../blog 2.jpg", import.meta.url).href,
    category: "Hosted PBX",
  },
  {
    title: "Top 10 Features to Look for in a UCaaS Provider",
    excerpt:
      "From call routing and presence to AI-powered analytics — here are the must-have features your unified communications platform should include.",
    date: "May 28, 2025",
    readTime: "6 min read",
    slug: "top-10-features-to-look-for-in-a-ucaas-provider",
    image: new URL("../../blog 3.jpg", import.meta.url).href,
    category: "UCaaS",
  },
  {
    title: "How to Reduce Call Abandonment Rates in Your Contact Center",
    excerpt:
      "Learn proven strategies to improve customer experience, optimize queue management, and reduce the number of callers who hang up before reaching an agent.",
    date: "May 10, 2025",
    readTime: "4 min read",
    slug: "how-to-reduce-call-abandonment-rates-in-your-contact-center",
    image: new URL("../../blog 4 (2).jpg", import.meta.url).href,
    category: "Contact Center",
  },
  {
    title: "The Complete Guide to VoIP Call Recording for Compliance",
    excerpt:
      "Understand the regulatory requirements for call recording across different industries and how to implement a compliant recording policy with your VoIP system.",
    date: "April 22, 2025",
    readTime: "8 min read",
    category: "Compliance",
  },
  {
    title: "What Is SIP Trunking and How Does It Benefit Your Business?",
    excerpt:
      "SIP trunking replaces traditional phone lines with internet-based connectivity. Find out how it can save your business money and improve call quality.",
    date: "April 5, 2025",
    readTime: "5 min read",
    category: "SIP Trunking",
  },
];

const Blog = () => {
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
                Blog
              </div>
              <h1 className="font-display text-4xl lg:text-5xl text-brand-navy mt-6 leading-tight">
                Insights & Updates
              </h1>
              <p className="mt-4 text-base text-brand-charcoal/70 max-w-3xl">
                Stay up to date with the latest in VoIP technology, hosted PBX,
                UCaaS, and business communications — straight from the Upscale
                VoIP team.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-12 lg:pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="bg-white rounded-2xl border border-brand-navy/10 overflow-hidden hover:shadow-md hover:border-brand-violet/20 transition-all duration-200 flex flex-col"
                >
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-brand-charcoal/50 mb-3">
                      <span className="px-3 py-1 rounded-full bg-brand-softblue text-brand-violet font-semibold">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-display text-lg text-brand-navy leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-brand-charcoal/70 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      to={post.slug ? `/blog/${post.slug}` : "/contact"}
                      className="mt-4 text-brand-violet font-semibold text-sm hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-12 lg:pb-16 px-4">
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-brand-navy to-brand-violet text-white p-10 shadow-[0_25px_60px_rgba(40,56,93,0.35)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-white/70">
                Stay in the loop
              </p>
              <h2 className="font-display text-3xl md:text-[2.6rem] mt-3">
                Get the latest VoIP insights
              </h2>
              <p className="mt-3 text-white/80">
                Subscribe to our newsletter for tips, trends, and updates
                delivered to your inbox.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="mailto:sales@upscalevoip.com?subject=Subscribe to newsletter"
                className="inline-flex px-6 py-3 rounded-full bg-white text-brand-violet font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
