/**
 * ============================================================
 *  G&D DYNAMIC SERVICES — SITE CONFIGURATION
 * ============================================================
 *  All editable text, contact info, and coverage map data
 *  lives here. You should never need to edit HTML to update
 *  the business name, phone, email, tagline, or coverage.
 *
 *  After editing, save this file and reload the page.
 * ============================================================
 */

const SITE_CONFIG = {

  // ----------------------------------------------------------
  //  BUSINESS IDENTITY
  // ----------------------------------------------------------
  businessName:   "G&D Dynamic Services",
  ownerName:      "Garrison Roberts",
  tagline:        "Reliable Fuel Delivery Across Oklahoma & Beyond",
  subTagline:     "24/7 dispatch. On-time delivery. Built on trust.",

  // ----------------------------------------------------------
  //  CONTACT INFO  (appears in nav bar, footer, and contact page)
  // ----------------------------------------------------------
  phone:          "(832) 361-4766",
  phoneRaw:       "8323614766",          // digits only — used in tel: links
  email:          "Garrisonlroberts@gmail.com",
  // TODO: append ZIP code once confirmed (intentionally omitted for now)
  address:        "5111 S Sheridan, Tulsa, OK",

  // ----------------------------------------------------------
  //  FORMSPREE  (replace YOUR_FORMSPREE_ID with your form ID)
  //  Get yours free at https://formspree.io
  // ----------------------------------------------------------
  formspreeId:    "mwvjgvow",

  // ----------------------------------------------------------
  //  ABOUT PAGE — OWNER BIO
  // ----------------------------------------------------------
  ownerTitle:     "Owner & Operator",
  ownerBio: [
    "Garrison Roberts founded G&D Dynamic Services with a single mission: give fuel-dependent businesses in Oklahoma a delivery partner they can count on around the clock.",
    "With years of hands-on experience in fuel transport and logistics across the southern plains, Garrison built this company on the belief that reliability isn't a feature — it's the baseline.",
    "Every load we haul represents a commitment to the operators, contractors, and fleet managers who can't afford a fuel shortage."
  ],
  credentials: [
    "Licensed fuel transport operator — State of Oklahoma",
    "DOT-compliant fleet & safety record",
    "Hazmat-certified driver & handling procedures",
    "Fully insured — commercial general liability & cargo",
    "24/7 dispatch capability, 365 days a year"
  ],

  // ----------------------------------------------------------
  //  COVERAGE MAP — STATES
  //  Each entry: { id, label, tier, note }
  //    tier "primary"   → forest green #4A6741 (home base)
  //    tier "secondary" → light green  #C5D8B0 (coverage area)
  //  To add a state later, just add one object to this array.
  // ----------------------------------------------------------
  coverageStates: [
    {
      id:    "OK",
      label: "Oklahoma",
      tier:  "primary",
      note:  "Home base — full coverage statewide, 24/7 availability"
    },
    {
      id:    "TX",
      label: "Texas",
      tier:  "secondary",
      note:  "Northern & central Texas coverage available — contact us for scheduling"
    },
    {
      id:    "KS",
      label: "Kansas",
      tier:  "secondary",
      note:  "Southern Kansas coverage available — contact us for lead times"
    },
    {
      id:    "MO",
      label: "Missouri",
      tier:  "secondary",
      note:  "Southwest Missouri coverage available — contact us to confirm availability"
    },
    {
      id:    "AR",
      label: "Arkansas",
      tier:  "secondary",
      note:  "Western Arkansas coverage available — contact us for scheduling"
    }
  ],

  // ----------------------------------------------------------
  //  SERVICES  (used on home page cards + services page)
  // ----------------------------------------------------------
  services: [
    {
      title:       "Bulk Fuel Delivery",
      description: "On-site delivery of diesel, gasoline, and specialty fuels to job sites, farms, fleets, and commercial operations anywhere in our coverage area."
    }
  ],

  // ----------------------------------------------------------
  //  REVIEWS — "WHAT OUR PARTNERS SAY" (home page carousel)
  //
  //  *** STATIC PLACEHOLDER CONTENT ***
  //  These entries are hand-written placeholders, not real
  //  customer reviews. Swap the text for real testimonials as
  //  they come in.
  //
  //  FUTURE: this array is intended to be replaced by a live
  //  Google Reviews feed (Google Places API) in a later update.
  //  Keep the shape { name, company, quote, rating } so the
  //  carousel needs no changes when that swap happens.
  //  rating: integer 1–5 (rendered as stars)
  // ----------------------------------------------------------
  reviews: [
    {
      name:    "Mike Hutchins",
      company: "Red Dirt Logistics — Oklahoma City, OK",
      quote:   "Our yard tank ran dry on a Sunday night and they had a truck out before sunrise. That's the difference between losing a day of routes and business as usual.",
      rating:  5
    },
    {
      name:    "Dana Whitfield",
      company: "Plains Ag Cooperative — Enid, OK",
      quote:   "Through the entire harvest run they never missed a delivery window. When you've got combines waiting on diesel, that kind of reliability is everything.",
      rating:  5
    },
    {
      name:    "Carlos Mendez",
      company: "Route 66 Freight Lines — Tulsa, OK",
      quote:   "As a dispatch manager I need a fuel partner who answers the phone at 2 a.m. — and they actually do. Every driver fueled, every load on time.",
      rating:  5
    },
    {
      name:    "Jerry Lawson",
      company: "Keystone Construction Group — Wichita, KS",
      quote:   "They keep the tanks on three of our job sites topped off on a set schedule. Fair pricing, clean paperwork, zero babysitting required.",
      rating:  4
    },
    {
      name:    "Tammy Brooks",
      company: "Brooks & Sons Trucking — Joplin, MO",
      quote:   "We switched after our old supplier left us stranded twice. A year in, not a single missed drop. Wish we'd moved our account sooner.",
      rating:  5
    }
  ],

  // ----------------------------------------------------------
  //  WHY CHOOSE US — HOME PAGE SECTION
  // ----------------------------------------------------------
  whyChooseUs: [
    {
      stat:   "24/7",
      label:  "Dispatch Available",
      detail: "We answer every call, every hour. No voicemail during an emergency."
    },
    {
      stat:   "5+",
      label:  "States Covered",
      detail: "Oklahoma and surrounding states — one reliable partner for your whole region."
    },
    {
      stat:   "100%",
      label:  "On-Time Commitment",
      detail: "If we commit to a delivery window, we meet it. Your operation depends on it."
    }
  ],

  // ----------------------------------------------------------
  //  SOCIAL / MISC  (leave blank if not applicable)
  // ----------------------------------------------------------
  social: {
    facebook:  "",
    linkedin:  "",
    instagram: ""
  }

};

// Make config available globally
window.SITE_CONFIG = SITE_CONFIG;
