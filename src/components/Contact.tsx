import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Copy, Check, ExternalLink, ArrowRight, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Quick preset topics
  const quickTemplates = [
    {
      label: "💼 Job Opportunity",
      subject: "Job Opportunity - Full Stack Developer",
      message: "Hi Rithick, I reviewed your portfolio and we have an exciting Full Stack Developer opportunity at our company. Let's connect!"
    },
    {
      label: "🚀 Project Collaboration",
      subject: "Project Inquiry / Web Development",
      message: "Hi Rithick, I have a web application project requiring React, FastAPI, and PostgreSQL. I'd like to discuss collaboration details."
    },
    {
      label: "👋 Say Hello",
      subject: "Connecting from your portfolio",
      message: "Hi Rithick, great portfolio! I wanted to reach out and connect regarding tech and software engineering."
    }
  ];

  const applyTemplate = (t: typeof quickTemplates[0]) => {
    setFormData(prev => ({
      ...prev,
      subject: t.subject,
      message: t.message
    }));
  };

  // 1. Send via WhatsApp (auto-populates and opens WhatsApp ready to send)
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim() || 'Visitor';
    const contact = formData.emailOrPhone.trim() || 'Not specified';
    const subject = formData.subject.trim() || 'Portfolio Inquiry';
    const message = formData.message.trim() || 'Hi Rithick, I came across your portfolio and would like to connect.';

    const formattedText = `*New Portfolio Message*\n\n*From:* ${name}\n*Contact:* ${contact}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=916382486876&text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank');
  };

  // 2. Send via Email (auto-populates default email app/Gmail ready to send)
  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim() || 'Visitor';
    const contact = formData.emailOrPhone.trim() || 'Not specified';
    const subject = formData.subject.trim() || 'Portfolio Inquiry';
    const message = formData.message.trim() || 'Hi Rithick, I came across your portfolio and would like to connect.';

    const emailBody = `Hi Rithick,\n\n${message}\n\n---\nSender Details:\nName: ${name}\nContact: ${contact}`;
    const mailtoUrl = `mailto:rithickraghu79@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  const contactMethods = [
    {
      icon: <MessageSquare size={20} />,
      title: "WhatsApp Chat",
      value: "+91 63824 86876",
      actionText: "Chat on WhatsApp",
      actionUrl: "https://api.whatsapp.com/send?phone=916382486876&text=Hi%20Rithick,%20I%20came%20across%20your%20portfolio!",
      color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60"
    },
    {
      icon: <Mail size={20} />,
      title: "Direct Email",
      value: "rithickraghu79@gmail.com",
      actionText: "Compose Email",
      actionUrl: "mailto:rithickraghu79@gmail.com?subject=Portfolio%20Inquiry",
      color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/60",
      copyValue: "rithickraghu79@gmail.com",
      copyKey: "email"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone Call",
      value: "+91 63824 86876",
      actionText: "Call Now",
      actionUrl: "tel:+916382486876",
      color: "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/60",
      copyValue: "+916382486876",
      copyKey: "phone"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Kattankulathur, Chennai, India",
      actionText: "Tamil Nadu, India",
      actionUrl: "#",
      color: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/60"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50/60 dark:bg-gray-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Let's Start a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Conversation</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Fill in your details below to instantly draft and send a message via WhatsApp or Email in one click.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Hub */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-7 shadow-lg border border-gray-100 dark:border-gray-700/70 space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                  Direct Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Prefer instant messaging? Feel free to reach out directly via WhatsApp, Phone, or Email.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3.5">
                {contactMethods.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700/60 flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.color} shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                          {item.title}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                          {item.value}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.copyKey && (
                        <button
                          onClick={() => copyToClipboard(item.copyValue || item.value, item.copyKey!)}
                          className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          title="Copy to clipboard"
                        >
                          {copiedField === item.copyKey ? (
                            <Check size={15} className="text-emerald-500" />
                          ) : (
                            <Copy size={15} />
                          )}
                        </button>
                      )}

                      {item.actionUrl !== '#' && (
                        <a
                          href={item.actionUrl}
                          target={item.actionUrl.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          title={item.actionText}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Pill */}
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <div>
                  <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    Immediate Availability
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400">
                    Open for Full-Time Roles & Consulting
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  Profiles & Repositories
                </h4>
                <div className="flex gap-2.5">
                  <a
                    href="https://github.com/Rithick2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-gray-100 dark:bg-gray-700/60 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl transition-all flex items-center justify-center gap-2 text-xs font-semibold shadow-sm"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rithick-raghupathi-b024bb308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-gray-100 dark:bg-gray-700/60 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 rounded-xl transition-all flex items-center justify-center gap-2 text-xs font-semibold shadow-sm"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Drafter */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-7 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700/70 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                    <MessageCircle size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Direct Message Drafter
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Type your message below and choose your preferred dispatch method (WhatsApp or Email). It will pre-format your text and open with 1-click ready to send!
                </p>
              </div>

              {/* Quick Template Chips */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Quick Template Fill:
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickTemplates.map((t, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => applyTemplate(t)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium border border-gray-200 dark:border-gray-600/60"
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white"
                      placeholder="e.g. Sarah Connor"
                    />
                  </div>

                  <div>
                    <label htmlFor="emailOrPhone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Email / Phone
                    </label>
                    <input
                      type="text"
                      id="emailOrPhone"
                      name="emailOrPhone"
                      value={formData.emailOrPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white"
                      placeholder="sarah@company.com / +1..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white"
                    placeholder="e.g. Full Stack Developer Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Dual 1-Click Action Dispatch Buttons */}
                <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="py-3 px-5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                  >
                    <MessageSquare size={17} />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="py-3 px-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                  >
                    <Mail size={17} />
                    <span>Draft in Email</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-gray-400 dark:text-gray-500 pt-1">
                  💡 Clicking either button will open WhatsApp or your Email App with this exact text pre-filled. Just hit send!
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;