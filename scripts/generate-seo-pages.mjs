import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");

const properties = [
  {
    id: "greenview",
    name: "GreenView Apartments",
    county: "Nakuru",
    area: "Nakuru Town",
    house: "1 Bedroom",
    price: 12000,
    beds: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Modern apartments with convenient access to shops, transport and everyday services."
  },
  {
    id: "jumaa-heights",
    name: "JUMAA Heights",
    county: "Nairobi",
    area: "Kasarani",
    house: "2 Bedroom",
    price: 15000,
    beds: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Comfortable urban homes in Kasarani with practical layouts and easy access to the city."
  },
  {
    id: "palm-residence",
    name: "Palm Residence",
    county: "Bomet",
    area: "Bomet Town",
    house: "1 Bedroom",
    price: 10000,
    beds: 1,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    description:
      "Quiet, affordable homes close to Bomet town amenities."
  },
  {
    id: "milimani",
    name: "Milimani Heights",
    county: "Nakuru",
    area: "Milimani",
    house: "2 Bedroom",
    price: 18000,
    beds: 2,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=77",
    description:
      "Spacious homes in a popular Nakuru neighbourhood."
  },
  {
    id: "kasarani-gardens",
    name: "Kasarani Gardens",
    county: "Nairobi",
    area: "Kasarani",
    house: "1 Bedroom",
    price: 16000,
    beds: 1,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    description:
      "Well-positioned apartments for people who want city access without the central-city rush."
  },
  {
    id: "lakeview",
    name: "Lakeview Apartments",
    county: "Kisumu",
    area: "Milimani",
    house: "2 Bedroom",
    price: 14000,
    beds: 2,
    image: "https://images.unsplash.com/photo-1600607687920-4ae2a09cf159?auto=format&fit=crop&w=1200&q=85",
    description:
      "A comfortable Kisumu option for tenants looking for space and convenience."
  },
  {
    id: "riverside",
    name: "Riverside Residences",
    county: "Nairobi",
    area: "Westlands",
    house: "3 Bedroom",
    price: 22000,
    beds: 3,
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    description:
      "Premium residences in Westlands for families and professionals."
  },
  {
    id: "green-park",
    name: "Green Park Homes",
    county: "Kericho",
    area: "Town",
    house: "1 Bedroom",
    price: 13000,
    beds: 1,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82",
    description:
      "Affordable homes near Kericho town."
  }
];

const staticRoutes = [
  "properties",
  "owners",
  "about",
  "how-it-works",
  "faq",
  "contact",
  "report-scam",
  "billing"
];

const escapeHtml = value =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const formatMoney = value =>
  `KSh ${Number(value).toLocaleString("en-KE")}`;

const baseHtml = fs.readFileSync(
  path.join(distDir, "index.html"),
  "utf8"
);

function replaceMeta(html, selector, replacement) {
  return html.replace(selector, replacement);
}

function buildPropertyHtml(property) {
  const canonical =
    `https://jumaaweb.vercel.app/property/${property.id}`;

  const title =
    `${property.name} | ${property.house} in ${property.area}, ${property.county} | JUMAA`;

  const description =
    `Find ${property.name} in ${property.area}, ${property.county}, Kenya. ${property.house} from ${formatMoney(property.price)} per month. Discover rental homes and connect with property owners through JUMAA.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: property.name,
    description: property.description,
    image: [property.image],
    url: canonical,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.area,
      addressRegion: property.county,
      addressCountry: "KE"
    },
    numberOfBedrooms: property.beds,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "KES",
      availability: "https://schema.org/InStock",
      url: canonical
    }
  };

  let html = baseHtml;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  );

  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="index, follow" />`
  );

  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );

  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );

  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  );

  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${property.image}" />`
  );

  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  );

  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`
  );

  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${property.image}" />`
  );

  html = html.replace(
    "</head>",
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>\n</head>`
  );

  return html;
}

function writePage(route, html) {
  const directory = path.join(distDir, route);

  fs.mkdirSync(directory, { recursive: true });

  fs.writeFileSync(
    path.join(directory, "index.html"),
    html,
    "utf8"
  );

  console.log(`✓ Generated /${route}/`);
}

console.log("\nGenerating SEO pages...\n");

for (const property of properties) {
  writePage(
    `property/${property.id}`,
    buildPropertyHtml(property)
  );
}

for (const route of staticRoutes) {
  writePage(route, baseHtml);
}

console.log("\nSEO page generation complete.\n");
