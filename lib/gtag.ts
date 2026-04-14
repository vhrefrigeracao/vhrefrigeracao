export const GA_TRACKING_ID = "AW-16638047430";

// Evento genérico
export const trackEvent = (
  action: string,
  label: string,
  params?: Record<string, any>
) => {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;
  if (!gtag) return;

  gtag("event", action, {
    event_category: "engagement",
    event_label: label,
    ...params,
  });
};

// Conversão Google Ads (WhatsApp)
export const reportConversion = (url?: string) => {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;
  if (!gtag) return;

  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  gtag("event", "conversion", {
    send_to: "AW-16638047430/LWgqCLfU1c8aEMbp0f09",
    event_callback: callback,
  });
};
