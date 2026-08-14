import { useEffect, useState } from "react";
import { properties as localProperties, getProperty } from "@/data/properties";
import {
  fetchInvestment,
  fetchInvestments,
  fetchSiteSettings,
  isSanityEnabled,
  type Investment,
  type SiteSettings,
} from "@/lib/sanity";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP } from "@/lib/contact";

const localInvestments = localProperties as Investment[];

export const useInvestments = () => {
  const [data, setData] = useState<Investment[]>(isSanityEnabled ? [] : localInvestments);
  const [loading, setLoading] = useState(isSanityEnabled);

  useEffect(() => {
    if (!isSanityEnabled) return;
    let alive = true;
    fetchInvestments()
      .then((docs) => alive && setData(docs))
      .catch(() => alive && setData(localInvestments))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  return { investments: data, loading };
};

export const useInvestment = (slug?: string) => {
  const fallback = slug ? (getProperty(slug) as Investment | undefined) : undefined;
  const [data, setData] = useState<Investment | null>(isSanityEnabled ? null : fallback ?? null);
  const [loading, setLoading] = useState(isSanityEnabled);

  useEffect(() => {
    if (!isSanityEnabled || !slug) return;
    let alive = true;
    setLoading(true);
    fetchInvestment(slug)
      .then((doc) => alive && setData(doc))
      .catch(() => alive && setData(null))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [slug]);

  return { investment: data, loading };
};

export const DEFAULT_SETTINGS: SiteSettings = {
  brandName: "inmoinversión",
  phone: CONTACT_PHONE,
  whatsapp: CONTACT_WHATSAPP,
  email: CONTACT_EMAIL,
  openingHours: "Lun a Vie · 9h–19h",
  office: { street: "Calle Mayor 12, 3º", postalCode: "28013", city: "Madrid", note: "Visitas con cita previa" },
  social: {
    instagram: { enabled: true, url: "#" },
    facebook: { enabled: true, url: "#" },
    youtube: { enabled: false, url: "#" },
    linkedin: { enabled: true, url: "#" },
  },
};

export const useSiteSettings = (): SiteSettings => {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    if (!isSanityEnabled) return;
    let alive = true;
    fetchSiteSettings()
      .then((s) => {
        if (alive && s) setSettings({ ...DEFAULT_SETTINGS, ...s, social: s.social ?? DEFAULT_SETTINGS.social });
      })
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, []);

  return settings;
};
