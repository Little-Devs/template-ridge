export const site = {
  logo: {
    text: "Ridge Trades",
    mark: "RT",
  },
  fonts: {
    display: "Barlow Condensed",
    body: "Source Sans 3",
  },
  colors: {
    navy: "#0b1d33",
    amber: "#f0b429",
    concrete: "#e6e2d8",
    steel: "#4a5560",
  },
  meta: {
    title: "Ridge Trades — Licensed general contractor, Front Range",
    description: "Roofing, carpentry, concrete, and exterior work from Fort Collins to Colorado Springs. Licensed, insured, one crew lead on every job.",
  },
  contact: {
    email: "sales@little.cloud",
    phone: "+1 (970) 555-0194",
    address: "410 Willow Yard, Unit B, Fort Collins, CO",
    license: "CO CGC 198442",
    insurance: "GL 2M / WC on file",
  },
  sections: {
    hero: true,
    trades: true,
    projects: true,
    process: true,
    area: true,
    contact: true,
  },
  nav: [
    { href: "#trades", label: "Trades", section: "trades" as const },
    { href: "#projects", label: "Jobs", section: "projects" as const },
    { href: "#process", label: "Process", section: "process" as const },
    { href: "#area", label: "Area", section: "area" as const },
    { href: "#contact", label: "Estimate", section: "contact" as const },
  ],
  hero: {
    kicker: "General contractor · Front Range",
    title: "Roofs, frames, and concrete that hold on a windy ridge.",
    lead: "Ridge Trades is a licensed crew for exterior and structural work. One lead on site. A written scope before we start. We do not flip houses and we do not take deposits online.",
    primaryCta: { label: "Request an estimate", href: "#contact" },
    secondaryCta: { label: "See the trades", href: "#trades" },
    facts: [
      { value: "18 yrs", label: "on the Range" },
      { value: "CGC", label: "Colorado license" },
      { value: "1 lead", label: "on every job" },
    ],
  },
  trades: {
    kicker: "What we build",
    title: "Four trades. No showroom.",
    items: [
      { num: "01", title: "Roofing", body: "Tear-off, ice-and-water, standing seam, and asphalt. Snow country details, not just a new colour." },
      { num: "02", title: "Carpentry", body: "Decks, stairs, fascia, and structural repairs. We frame what we can stand on." },
      { num: "03", title: "Concrete", body: "Walks, pads, and garage aprons. Control joints that actually control the crack." },
      { num: "04", title: "Exterior", body: "Siding, windows, and weather barrier. The envelope first, the paint last." },
    ],
  },
  projects: {
    kicker: "Recent jobs",
    title: "Work we can still drive past",
    items: [
      { title: "Masonville barn roof", tag: "Standing seam", note: "Forty squares, snow hooks, and a ridge vent that does not leak into the loft.", tone: "one" },
      { title: "Old Town deck rebuild", tag: "Carpentry", note: "Ledgers re-flashed, new stairs, composite that can take a winter.", tone: "two" },
      { title: "Windsor garage pad", tag: "Concrete", note: "Six-inch slab, fibre, and an apron that meets the alley grade.", tone: "three" },
      { title: "Foothills siding", tag: "Envelope", note: "Rainscreen, new windows, and trim that was not an afterthought.", tone: "four" },
    ],
  },
  process: {
    kicker: "How a job runs",
    title: "Four steps, no portal",
    steps: [
      { title: "Walk it", body: "We meet on site. Photos, measurements, and what is actually failing." },
      { title: "Write it", body: "A one-page scope, allowances, and a start window. Email only." },
      { title: "Build it", body: "The same lead who walked it runs the crew. Daily close-out." },
      { title: "Hand it", body: "Punch list, receipts, and warranty dates on paper." },
    ],
  },
  area: {
    kicker: "Service area",
    title: "Front Range, not the whole map",
    towns: ["Fort Collins", "Loveland", "Windsor", "Timnath", "Berthoud", "Longmont", "Lyons", "Estes Park"],
    note: "We take mountain jobs when the weather and the drive make sense. Call first.",
  },
  footer: {
    credit: "Ridge Trades — a Little-Devs template",
    note: "MIT. Light-custom: logo, colours, fonts, copy, sections.",
  },
} as const;

export type Site = typeof site;
