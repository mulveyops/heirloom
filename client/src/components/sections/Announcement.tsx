import { useState } from "react";
import announcementContent from "@/content/announcement.json";

// Content comes from Pages CMS — every field may be missing or blank.
interface AnnouncementContent {
  enabled?: boolean;
  headline?: string;
  message?: string;
  buttonText?: string;
  buttonUrl?: string;
  image?: string;
  endDate?: string; // YYYY-MM-DD; announcement hides itself after this day
}

const content = announcementContent as AnnouncementContent;

// Dismissing hides the announcement in this browser until its content changes,
// so each new promo pops exactly once per visitor.
const dismissKey = (() => {
  const s = JSON.stringify(content);
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return `heirloom-announcement-${h}`;
})();

const wasDismissed = () => {
  try {
    return localStorage.getItem(dismissKey) === "1";
  } catch {
    return false;
  }
};

const Announcement = () => {
  // ?announce=preview force-shows the popup (even while disabled) for checking
  // a draft promo; it ignores prior dismissal.
  const preview = new URLSearchParams(window.location.search).has("announce");
  const [dismissed, setDismissed] = useState(() => (preview ? false : wasDismissed()));

  if (dismissed) return null;
  if (!content.enabled && !preview) return null;
  if (!content.headline && !content.message) return null;

  if (content.endDate) {
    const expires = new Date(`${content.endDate}T23:59:59`);
    if (!isNaN(expires.getTime()) && new Date() > expires) return null;
  }

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(dismissKey, "1");
    } catch {
      // private browsing etc. — the X still hides it for this page view
    }
    if (preview) {
      const url = new URL(window.location.href);
      url.searchParams.delete("announce");
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-60" onClick={dismiss}></div>
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden">
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-dark-text/70 hover:text-dark-text shadow transition-all"
        >
          <i className="fas fa-times"></i>
        </button>
        {content.image && (
          <img src={content.image} alt="" className="w-full h-44 object-cover" />
        )}
        <div className="p-6 text-center">
          {content.headline && (
            <h3 className="text-2xl font-migra font-bold mb-3 text-dark-text">{content.headline}</h3>
          )}
          {content.message && (
            <p className="font-body text-dark-text leading-relaxed mb-5">{content.message}</p>
          )}
          {content.buttonUrl && (
            <a
              href={content.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="inline-block px-6 py-2 bg-brand-green text-white font-body font-medium rounded-full shadow-md hover:bg-opacity-90 transition-all booking-btn"
            >
              {content.buttonText || "Learn More"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
