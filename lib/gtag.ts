export const trackEvent = (
  action: string,
  label: string,
  params?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: "engagement",
      event_label: label,
      ...params,
    });
  }
};

// Conversão Google Ads
export const reportConversion = (url?: string) => {
  if (typeof window === "undefined" || !window.gtag) return;

  const callback = () => {
    if (url) window.location.href = url;
  };

  window.gtag("event", "conversion", {
    send_to: "AW-16638047430/LWgqCLfU1c8aEMbp0f09",
    event_callback: callback,
  });

  return false;
};

// Facebook Pixel
export const trackFacebookLead = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Lead");
  }
};
