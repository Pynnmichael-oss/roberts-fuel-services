/**
 * ============================================================
 *  ROBERTS FUEL SERVICES — SITE CONFIGURATION
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
  businessName:   "Roberts Fuel Services",
  ownerName:      "Garrison Roberts",
  tagline:        "Reliable Fuel Delivery Across Oklahoma & Beyond",
  subTagline:     "24/7 dispatch. On-time delivery. Built on trust.",

  // ----------------------------------------------------------
  //  CONTACT INFO  (appears in nav bar, footer, and contact page)
  // ----------------------------------------------------------
  phone:          "(832) 361-4766",
  phoneRaw:       "8323614766",          // digits only — used in tel: links
  email:          "dispatch@robertsfuelservices.com",

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
    "Garrison Roberts founded Roberts Fuel Services with a single mission: give fuel-dependent businesses in Oklahoma a delivery partner they can count on around the clock.",
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
      icon:        "🚛",
      title:       "Bulk Fuel Delivery",
      description: "On-site delivery of diesel, gasoline, and specialty fuels to job sites, farms, fleets, and commercial operations anywhere in our coverage area."
    },
    {
      icon:        "⚡",
      title:       "Emergency Dispatch",
      description: "24/7 emergency fuel dispatch when you can't afford downtime. We answer the phone and roll a truck — any time, any day."
    },
    {
      icon:        "📋",
      title:       "Scheduled Programs",
      description: "Set a regular delivery cadence and never track fuel levels again. Automatic top-off schedules customized to your operation."
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
