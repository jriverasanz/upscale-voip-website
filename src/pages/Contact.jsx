import { useState } from "react";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    usersRequired: "",
    numbersToPort: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Quote Request from ${formData.companyName}`,
    );
    const body = encodeURIComponent(
      `New Quote Request\n\nFull Name: ${formData.fullName}\nCompany: ${formData.companyName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nUsers Required: ${formData.usersRequired}\nNumbers to Port: ${formData.numbersToPort}`,
    );
    window.location.href = `mailto:sales@upscalevoip.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="font-body text-brand-charcoal min-h-screen flex flex-col">
      <main className="flex-grow py-12 lg:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-5xl text-brand-navy leading-tight mb-6">
              Get a Quote
            </h1>
            <p className="text-lg text-brand-charcoal/70">
              Tell us about your communication needs and we'll provide a
              customized quote for your business.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-[0_35px_80px_rgba(17,38,87,0.08)] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-brand-navy mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:ring-2 focus:ring-brand-violet focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-brand-navy mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:ring-2 focus:ring-brand-violet focus:border-transparent outline-none transition"
                    placeholder="Acme Corporation"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-brand-navy mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:ring-2 focus:ring-brand-violet focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-brand-navy mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:ring-2 focus:ring-brand-violet focus:border-transparent outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="usersRequired"
                    className="block text-sm font-medium text-brand-navy mb-2"
                  >
                    Number of Users Required *
                  </label>
                  <select
                    id="usersRequired"
                    name="usersRequired"
                    value={formData.usersRequired}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:ring-2 focus:ring-brand-violet focus:border-transparent outline-none transition"
                  >
                    <option value="">Select number of users</option>
                    <option value="1-10">1-10 users</option>
                    <option value="11-25">11-25 users</option>
                    <option value="26-50">26-50 users</option>
                    <option value="51-100">51-100 users</option>
                    <option value="101-250">101-250 users</option>
                    <option value="250+">250+ users</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="numbersToPort"
                    className="block text-sm font-medium text-brand-navy mb-2"
                  >
                    Numbers to Port *
                  </label>
                  <select
                    id="numbersToPort"
                    name="numbersToPort"
                    value={formData.numbersToPort}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:ring-2 focus:ring-brand-violet focus:border-transparent outline-none transition"
                  >
                    <option value="">Select number of phone lines</option>
                    <option value="0">No numbers to port</option>
                    <option value="1-5">1-5 numbers</option>
                    <option value="6-10">6-10 numbers</option>
                    <option value="11-25">11-25 numbers</option>
                    <option value="26-50">26-50 numbers</option>
                    <option value="51-100">51-100 numbers</option>
                    <option value="100+">100+ numbers</option>
                  </select>
                </div>
              </div>

              {submitted ? (
                <div className="pt-6 text-center p-6 bg-brand-softblue rounded-2xl">
                  <p className="text-brand-navy font-semibold text-lg">
                    Thank you! Your request has been submitted.
                  </p>
                  <p className="text-brand-charcoal/70 mt-2">
                    Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-brand-violet text-white font-semibold rounded-[80px] hover:bg-[#7a387d] transition-colors shadow-lg"
                  >
                    Submit Quote Request
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-brand-charcoal/60 text-sm">
              Or email us directly at{" "}
              <a
                href="mailto:sales@upscalevoip.com"
                className="text-brand-violet font-semibold hover:underline"
              >
                sales@upscalevoip.com
              </a>
            </p>
            <p className="text-brand-charcoal/60 text-sm">
              Or call us at{" "}
              <a
                href="tel:+18454442344"
                className="text-brand-violet font-semibold hover:underline"
              >
                (845) 444-2344
              </a>{" "}
              for immediate assistance.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
