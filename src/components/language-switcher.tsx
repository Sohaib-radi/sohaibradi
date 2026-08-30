import { useI18n, LANGS } from "@/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const flags: Record<string, string> = {
  ar: "🇲🇦",
  fr: "🇫🇷",
  en: "🇺🇸",
};

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <Select value={lang} onValueChange={(value: any) => setLang(value)}>
      <SelectTrigger className="w-[100px] h-9">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {LANGS.map((l) => (
          <SelectItem key={l.code} value={l.code}>
            <span className="mr-2">{flags[l.code]}</span>
            {l.short}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
