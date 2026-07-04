import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { createDefaultSiteContent, type SiteContent } from "../data/siteContent";

const SITE_CONTENT_STORAGE_KEY = "mcan-ondo-site-content";

type SiteContentContextValue = {
  content: SiteContent;
  updateSection: <K extends keyof SiteContent>(section: K, value: SiteContent[K]) => void;
  resetContent: () => void;
};

const SiteContentContext = createContext<SiteContentContextValue | undefined>(undefined);

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    if (typeof window === "undefined") {
      return createDefaultSiteContent();
    }

    const saved = window.localStorage.getItem(SITE_CONTENT_STORAGE_KEY);
    if (!saved) {
      return createDefaultSiteContent();
    }

    try {
      const parsed = JSON.parse(saved) as SiteContent;
      return { ...createDefaultSiteContent(), ...parsed };
    } catch {
      return createDefaultSiteContent();
    }
  });

  useEffect(() => {
    window.localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  const updateSection = <K extends keyof SiteContent>(section: K, value: SiteContent[K]) => {
    setContent((current) => ({ ...current, [section]: value }));
  };

  const resetContent = () => {
    const defaults = createDefaultSiteContent();
    setContent(defaults);
    window.localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(defaults));
  };

  const value = useMemo(() => ({ content, updateSection, resetContent }), [content]);

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);
  if (!context) {
    throw new Error("useSiteContent must be used within a SiteContentProvider");
  }
  return context;
}
