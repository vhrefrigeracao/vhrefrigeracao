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
