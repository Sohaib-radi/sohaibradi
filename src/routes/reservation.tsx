import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/lib/contact-form";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import GitHubLogo from "@/assets/GitHub_Logo.svg";
import UpworkLogo from "@/assets/Upwork-Logo.svg";

export const Route = createFileRoute("/reservation")({
  component: ReservationPage,
});

const contactMethods = [
  { label: "Egypt (WhatsApp)", value: "+201146613409", flag: "🇪🇬", link: "https://wa.me/201146613409" },
  { label: "Spain (WhatsApp)", value: "+34643580018", flag: "🇪🇸", link: "https://wa.me/34643580018" },
  { label: "Turkey (WhatsApp)", value: "+905360231109", flag: "🇹🇷", link: "https://wa.me/905360231109" },
];

function ReservationPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.type,
      message: formData.message,
    });

    setIsSubmitting(false);

    if (success) {
      toast.success(t.contact.form.success);
      setFormData({ name: "", phone: "", email: "", type: "", message: "" });
    } else {
      toast.error(t.contact.form.error);
    }
  };

  return (
    <div className="min-h-screen bg-surface text-ink font-sans antialiased">
      <SiteNav />
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          
          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
            <h1 className="text-3xl font-semibold mb-2">{t.contact.h1}</h1>
            <p className="text-zinc-600 mb-8">{t.contact.lead}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t.contact.form.name}</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.form.email}</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t.contact.form.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">{t.contact.form.subject}</Label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, type: value })}
                value={formData.type}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.contact.form.subjects[0]} />
                </SelectTrigger>
                <SelectContent>
                  {t.contact.form.subjects.map((sub: string) => (
                    <SelectItem key={sub} value={sub}>
                      {sub}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t.contact.form.message}</Label>
              <Textarea
                id="message"
                required
                className="min-h-[150px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-brand hover:bg-brand/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
            </Button>
          </form>
        </div>

          {/* Contact Info Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200 space-y-6">
            <h2 className="font-semibold text-lg text-center">Contact & Social</h2>
            
            {/* Direct Contact */}
            <div className="flex flex-wrap justify-center gap-4">
                {contactMethods.map((m) => (
                  <a key={m.label} href={m.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-50 transition-colors text-sm">
                    <span className="text-lg">{m.flag}</span>
                    <span className="text-zinc-600">{m.value}</span>
                  </a>
                ))}
                <a href="mailto:sohaib.radi@gmail.com" className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-50 transition-colors text-sm">
                  <Mail className="size-4 text-brand" />
                  <span className="text-zinc-600">sohaib.radi@gmail.com</span>
                </a>
            </div>

            {/* Social */}
            <div className="flex justify-center gap-6 pt-4 border-t border-zinc-100">
                <a href="https://www.upwork.com/freelancers/~01c146d19986ff58ec?mp_source=share" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src={UpworkLogo} alt="Upwork" className="size-6" />
                  <span className="text-sm font-medium">Upwork</span>
                </a>
                <a href="https://github.com/Sohaib-radi" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src={GitHubLogo} alt="GitHub" className="size-6" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
