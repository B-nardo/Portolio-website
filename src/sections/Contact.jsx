import { useState } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data/portfolio";
import { Smartphone, MapPin, Mail, Clock } from "lucide-react";
import { SOCIAL_ICON_MAP } from "../components/ui/SocialIcons";

const ICON_MAP = {
  mail: Mail,
  smartphone: Smartphone,
  location: MapPin,
  clock: Clock,
};

export default function Contact() {
  const [form, setForm]       = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal><SectionHeader
          badge="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        /></Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Reveal><ContactInfoCard /></Reveal>
          <div className="flex flex-col gap-4">
            <Reveal><ConnectCard /></Reveal>
            <Reveal><QuickResponseCard /></Reveal>
          </div>
        </div>

        <Reveal>
          <div className="glass rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            {sent ? <SuccessMessage /> : (
              <ContactForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
                sending={sending}
              />
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function ContactInfoCard() {
  return (
    <div className="glass rounded-2xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
      <h3 className="font-semibold text-base mb-4">Contact Information</h3>
      <div className="flex flex-col gap-1">
        {CONTACT_INFO.map((item, i) => {
          const Icon = ICON_MAP[item.icon];
          return (
            <Reveal key={item.label} delay={i * 80}>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-400 cursor-pointer group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/[0.07] flex items-center justify-center p-2 shrink-0 group-hover:bg-slate-200 dark:group-hover:bg-white/[0.12] transition-colors duration-200">
                  {Icon && <Icon />}
                </div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-sm text-muted">{item.value}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

const BRAND_COLORS = {
  GitHub:    { color: "#24292e", bg: "rgba(36,41,46,0.09)"   },
  LinkedIn:  { color: "#0A66C2", bg: "rgba(10,102,194,0.10)" },
  Twitter:   { color: "#000000", bg: "rgba(0,0,0,0.07)"      },
  Instagram: { color: "#E1306C", bg: "rgba(225,48,108,0.10)" },
};

function SocialButton({ s }) {
  const Icon = SOCIAL_ICON_MAP[s.label];
  const brand = BRAND_COLORS[s.label] ?? {};
  const isGitHub = s.label === "GitHub";
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal as="a"
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color:      (!isGitHub && hovered) ? brand.color : undefined,
        transform:  hovered ? "scale(1.05)" : undefined,
        transition: "transform 380ms cubic-bezier(0.16,1,0.3,1), color 300ms ease",
      }}
      className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
    >
      {Icon && <Icon className="size-4" />} {s.label}
    </Reveal>
  );
}

function ConnectCard() {
  return (
    <div className="glass rounded-2xl p-5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
      <h3 className="font-semibold text-base mb-4">Connect With Me</h3>
      <div className="grid grid-cols-2 gap-2">
        {SOCIAL_LINKS.map((s) => (
          <SocialButton key={s.label} s={s} />
        ))}
      </div>
    </div>
  );
}

function QuickResponseCard() {
  return (
    <div className="rounded-2xl p-6 bg-slate-100 dark:bg-slate-100 text-slate-900 flex flex-col items-center text-center gap-3 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
      <Mail className="size-8"/>
      <p className="font-semibold">Quick Response</p>
      <p className="text-sm opacity-75 leading-relaxed">
        I typically respond to all inquiries within 24 hours. For urgent matters, reach out via email directly.
      </p>
    </div>
  );
}

const inputClass = `
  w-full px-4 py-2.5 rounded-xl text-sm
  bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.12]
  text-slate-900 dark:text-slate-100
  placeholder:text-slate-400 dark:placeholder:text-slate-500
  focus:outline-none focus:border-blue-500
  transition-colors duration-200
`;

function ContactForm({ form, onChange, onSubmit, sending }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1.5">Name</label>
          <input name="name" value={form.name} onChange={onChange} placeholder="Your Name" required className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Contact Number <span className="text-slate-500">(optional)</span></label>
          <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+91 8307982056" className={inputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Email</label>
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" required className={inputClass} />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1.5">Message</label>
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Write your message..." rows={4} required className={`${inputClass} resize-none`} />
        </div>

        <div className="md:col-span-2">
          <Button type="submit" variant="blue" fullWidth disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </div>

      </div>
    </form>
  );
}

function SuccessMessage() {
  return (
    <div className="text-center py-10">
      <p className="text-5xl mb-4">✅</p>
      <h3 className="font-semibold text-xl mb-2">Message Sent!</h3>
      <p className="text-muted text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
    </div>
  );
}
