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


const areas = [
  {
    slug: "nairobi/kasarani",
    name: "Kasarani",
    county: "Nairobi",
    intro:
      "Find apartments for rent in Kasarani, Nairobi with JUMAA. Explore available homes, compare bedrooms and monthly rent, and connect directly with property owners."
  },
  {
    slug: "nairobi/westlands",
    name: "Westlands",
    county: "Nairobi",
    intro:
      "Explore apartments for rent in Westlands, Nairobi with JUMAA. Compare available homes, monthly rent and bedroom options, then connect directly with property owners."
  },
  {
    slug: "nakuru/nakuru-town",
    name: "Nakuru Town",
    county: "Nakuru",
    intro:
      "Find apartments for rent in Nakuru Town with JUMAA. Explore available rental homes, compare monthly rent and bedrooms, and connect directly with property owners."
  },
  {
    slug: "nakuru/milimani",
    name: "Milimani",
    county: "Nakuru",
    intro:
      "Explore apartments for rent in Milimani, Nakuru with JUMAA. Discover available homes, compare rental prices and bedrooms, and connect directly with property owners."
  },
  {
    slug: "bomet/bomet-town",
    name: "Bomet Town",
    county: "Bomet",
    intro:
      "Find apartments for rent in Bomet Town with JUMAA. Explore available homes, compare monthly rent and bedroom options, and connect directly with property owners."
  },
  {
    slug: "kisumu/milimani",
    name: "Milimani",
    county: "Kisumu",
    intro:
      "Find apartments for rent in Milimani, Kisumu with JUMAA. Explore available homes, compare monthly rent and bedrooms, and connect directly with property owners."
  },
  {
    slug: "kericho/town",
    name: "Kericho Town",
    propertyArea: "Town",
    county: "Kericho",
    intro:
      "Explore apartments for rent in Kericho Town with JUMAA. Find available rental homes, compare monthly rent and bedrooms, and connect directly with property owners."
  }
];

const locations = [
  {
    slug: "nairobi",
    name: "Nairobi",
    intro:
      "Explore apartments and rental homes in Nairobi, Kenya. Compare available homes by location, bedrooms and monthly rent, then connect directly with property owners through JUMAA.",
    properties: properties.filter(property => property.county === "Nairobi")
  },
  {
    slug: "mombasa",
    name: "Mombasa",
    intro:
      "Explore apartments and rental homes in Mombasa, Kenya with JUMAA. Check available properties and discover homes in Mombasa as listings become available.",
    properties: properties.filter(property => property.county === "Mombasa")
  },
  {
    slug: "kwale",
    name: "Kwale",
    intro:
      "Explore apartments and rental homes in Kwale, Kenya with JUMAA. Check available properties and discover homes in Kwale as listings become available.",
    properties: properties.filter(property => property.county === "Kwale")
  },
  {
    slug: "kilifi",
    name: "Kilifi",
    intro:
      "Explore apartments and rental homes in Kilifi, Kenya with JUMAA. Check available properties and discover homes in Kilifi as listings become available.",
    properties: properties.filter(property => property.county === "Kilifi")
  },
  {
    slug: "tana-river",
    name: "Tana River",
    intro:
      "Explore apartments and rental homes in Tana River, Kenya with JUMAA. Check available properties and discover homes in Tana River as listings become available.",
    properties: properties.filter(property => property.county === "Tana River")
  },
  {
    slug: "lamu",
    name: "Lamu",
    intro:
      "Explore apartments and rental homes in Lamu, Kenya with JUMAA. Check available properties and discover homes in Lamu as listings become available.",
    properties: properties.filter(property => property.county === "Lamu")
  },
  {
    slug: "taita-taveta",
    name: "Taita-Taveta",
    intro:
      "Explore apartments and rental homes in Taita-Taveta, Kenya with JUMAA. Check available properties and discover homes in Taita-Taveta as listings become available.",
    properties: properties.filter(property => property.county === "Taita-Taveta")
  },
  {
    slug: "garissa",
    name: "Garissa",
    intro:
      "Explore apartments and rental homes in Garissa, Kenya with JUMAA. Check available properties and discover homes in Garissa as listings become available.",
    properties: properties.filter(property => property.county === "Garissa")
  },
  {
    slug: "wajir",
    name: "Wajir",
    intro:
      "Explore apartments and rental homes in Wajir, Kenya with JUMAA. Check available properties and discover homes in Wajir as listings become available.",
    properties: properties.filter(property => property.county === "Wajir")
  },
  {
    slug: "mandera",
    name: "Mandera",
    intro:
      "Explore apartments and rental homes in Mandera, Kenya with JUMAA. Check available properties and discover homes in Mandera as listings become available.",
    properties: properties.filter(property => property.county === "Mandera")
  },
  {
    slug: "marsabit",
    name: "Marsabit",
    intro:
      "Explore apartments and rental homes in Marsabit, Kenya with JUMAA. Check available properties and discover homes in Marsabit as listings become available.",
    properties: properties.filter(property => property.county === "Marsabit")
  },
  {
    slug: "isiolo",
    name: "Isiolo",
    intro:
      "Explore apartments and rental homes in Isiolo, Kenya with JUMAA. Check available properties and discover homes in Isiolo as listings become available.",
    properties: properties.filter(property => property.county === "Isiolo")
  },
  {
    slug: "meru",
    name: "Meru",
    intro:
      "Explore apartments and rental homes in Meru, Kenya with JUMAA. Check available properties and discover homes in Meru as listings become available.",
    properties: properties.filter(property => property.county === "Meru")
  },
  {
    slug: "tharaka-nithi",
    name: "Tharaka-Nithi",
    intro:
      "Explore apartments and rental homes in Tharaka-Nithi, Kenya with JUMAA. Check available properties and discover homes in Tharaka-Nithi as listings become available.",
    properties: properties.filter(property => property.county === "Tharaka-Nithi")
  },
  {
    slug: "embu",
    name: "Embu",
    intro:
      "Explore apartments and rental homes in Embu, Kenya with JUMAA. Check available properties and discover homes in Embu as listings become available.",
    properties: properties.filter(property => property.county === "Embu")
  },
  {
    slug: "kitui",
    name: "Kitui",
    intro:
      "Explore apartments and rental homes in Kitui, Kenya with JUMAA. Check available properties and discover homes in Kitui as listings become available.",
    properties: properties.filter(property => property.county === "Kitui")
  },
  {
    slug: "machakos",
    name: "Machakos",
    intro:
      "Explore apartments and rental homes in Machakos, Kenya with JUMAA. Check available properties and discover homes in Machakos as listings become available.",
    properties: properties.filter(property => property.county === "Machakos")
  },
  {
    slug: "makueni",
    name: "Makueni",
    intro:
      "Explore apartments and rental homes in Makueni, Kenya with JUMAA. Check available properties and discover homes in Makueni as listings become available.",
    properties: properties.filter(property => property.county === "Makueni")
  },
  {
    slug: "nyandarua",
    name: "Nyandarua",
    intro:
      "Explore apartments and rental homes in Nyandarua, Kenya with JUMAA. Check available properties and discover homes in Nyandarua as listings become available.",
    properties: properties.filter(property => property.county === "Nyandarua")
  },
  {
    slug: "nyeri",
    name: "Nyeri",
    intro:
      "Explore apartments and rental homes in Nyeri, Kenya with JUMAA. Check available properties and discover homes in Nyeri as listings become available.",
    properties: properties.filter(property => property.county === "Nyeri")
  },
  {
    slug: "kirinyaga",
    name: "Kirinyaga",
    intro:
      "Explore apartments and rental homes in Kirinyaga, Kenya with JUMAA. Check available properties and discover homes in Kirinyaga as listings become available.",
    properties: properties.filter(property => property.county === "Kirinyaga")
  },
  {
    slug: "murang'a",
    name: "Murang'a",
    intro:
      "Explore apartments and rental homes in Murang'a, Kenya with JUMAA. Check available properties and discover homes in Murang'a as listings become available.",
    properties: properties.filter(property => property.county === "Murang'a")
  },
  {
    slug: "kiambu",
    name: "Kiambu",
    intro:
      "Explore apartments and rental homes in Kiambu, Kenya with JUMAA. Check available properties and discover homes in Kiambu as listings become available.",
    properties: properties.filter(property => property.county === "Kiambu")
  },
  {
    slug: "turkana",
    name: "Turkana",
    intro:
      "Explore apartments and rental homes in Turkana, Kenya with JUMAA. Check available properties and discover homes in Turkana as listings become available.",
    properties: properties.filter(property => property.county === "Turkana")
  },
  {
    slug: "west-pokot",
    name: "West Pokot",
    intro:
      "Explore apartments and rental homes in West Pokot, Kenya with JUMAA. Check available properties and discover homes in West Pokot as listings become available.",
    properties: properties.filter(property => property.county === "West Pokot")
  },
  {
    slug: "samburu",
    name: "Samburu",
    intro:
      "Explore apartments and rental homes in Samburu, Kenya with JUMAA. Check available properties and discover homes in Samburu as listings become available.",
    properties: properties.filter(property => property.county === "Samburu")
  },
  {
    slug: "trans-nzoia",
    name: "Trans Nzoia",
    intro:
      "Explore apartments and rental homes in Trans Nzoia, Kenya with JUMAA. Check available properties and discover homes in Trans Nzoia as listings become available.",
    properties: properties.filter(property => property.county === "Trans Nzoia")
  },
  {
    slug: "uasin-gishu",
    name: "Uasin Gishu",
    intro:
      "Explore apartments and rental homes in Uasin Gishu, Kenya with JUMAA. Check available properties and discover homes in Uasin Gishu as listings become available.",
    properties: properties.filter(property => property.county === "Uasin Gishu")
  },
  {
    slug: "elgeyo-marakwet",
    name: "Elgeyo-Marakwet",
    intro:
      "Explore apartments and rental homes in Elgeyo-Marakwet, Kenya with JUMAA. Check available properties and discover homes in Elgeyo-Marakwet as listings become available.",
    properties: properties.filter(property => property.county === "Elgeyo-Marakwet")
  },
  {
    slug: "nandi",
    name: "Nandi",
    intro:
      "Explore apartments and rental homes in Nandi, Kenya with JUMAA. Check available properties and discover homes in Nandi as listings become available.",
    properties: properties.filter(property => property.county === "Nandi")
  },
  {
    slug: "baringo",
    name: "Baringo",
    intro:
      "Explore apartments and rental homes in Baringo, Kenya with JUMAA. Check available properties and discover homes in Baringo as listings become available.",
    properties: properties.filter(property => property.county === "Baringo")
  },
  {
    slug: "laikipia",
    name: "Laikipia",
    intro:
      "Explore apartments and rental homes in Laikipia, Kenya with JUMAA. Check available properties and discover homes in Laikipia as listings become available.",
    properties: properties.filter(property => property.county === "Laikipia")
  },
  {
    slug: "nakuru",
    name: "Nakuru",
    intro:
      "Find apartments and rental homes in Nakuru, Kenya. Explore available properties in areas such as Nakuru Town and Milimani and connect directly with property owners through JUMAA.",
    properties: properties.filter(property => property.county === "Nakuru")
  },
  {
    slug: "narok",
    name: "Narok",
    intro:
      "Explore apartments and rental homes in Narok, Kenya with JUMAA. Check available properties and discover homes in Narok as listings become available.",
    properties: properties.filter(property => property.county === "Narok")
  },
  {
    slug: "kajiado",
    name: "Kajiado",
    intro:
      "Explore apartments and rental homes in Kajiado, Kenya with JUMAA. Check available properties and discover homes in Kajiado as listings become available.",
    properties: properties.filter(property => property.county === "Kajiado")
  },
  {
    slug: "kericho",
    name: "Kericho",
    intro:
      "Explore apartments and rental homes in Kericho, Kenya. Find available homes near Kericho town and connect with property owners through JUMAA.",
    properties: properties.filter(property => property.county === "Kericho")
  },
  {
    slug: "bomet",
    name: "Bomet",
    intro:
      "Find apartments and rental homes in Bomet, Kenya. Explore available homes in Bomet Town and connect directly with property owners through JUMAA.",
    properties: properties.filter(property => property.county === "Bomet")
  },
  {
    slug: "kakamega",
    name: "Kakamega",
    intro:
      "Explore apartments and rental homes in Kakamega, Kenya with JUMAA. Check available properties and discover homes in Kakamega as listings become available.",
    properties: properties.filter(property => property.county === "Kakamega")
  },
  {
    slug: "vihiga",
    name: "Vihiga",
    intro:
      "Explore apartments and rental homes in Vihiga, Kenya with JUMAA. Check available properties and discover homes in Vihiga as listings become available.",
    properties: properties.filter(property => property.county === "Vihiga")
  },
  {
    slug: "bungoma",
    name: "Bungoma",
    intro:
      "Explore apartments and rental homes in Bungoma, Kenya with JUMAA. Check available properties and discover homes in Bungoma as listings become available.",
    properties: properties.filter(property => property.county === "Bungoma")
  },
  {
    slug: "busia",
    name: "Busia",
    intro:
      "Explore apartments and rental homes in Busia, Kenya with JUMAA. Check available properties and discover homes in Busia as listings become available.",
    properties: properties.filter(property => property.county === "Busia")
  },
  {
    slug: "siaya",
    name: "Siaya",
    intro:
      "Explore apartments and rental homes in Siaya, Kenya with JUMAA. Check available properties and discover homes in Siaya as listings become available.",
    properties: properties.filter(property => property.county === "Siaya")
  },
  {
    slug: "kisumu",
    name: "Kisumu",
    intro:
      "Discover apartments and rental homes in Kisumu, Kenya. Explore available homes, compare monthly rents and connect with property owners through JUMAA.",
    properties: properties.filter(property => property.county === "Kisumu")
  },
  {
    slug: "homa-bay",
    name: "Homa Bay",
    intro:
      "Explore apartments and rental homes in Homa Bay, Kenya with JUMAA. Check available properties and discover homes in Homa Bay as listings become available.",
    properties: properties.filter(property => property.county === "Homa Bay")
  },
  {
    slug: "migori",
    name: "Migori",
    intro:
      "Explore apartments and rental homes in Migori, Kenya with JUMAA. Check available properties and discover homes in Migori as listings become available.",
    properties: properties.filter(property => property.county === "Migori")
  },
  {
    slug: "kisii",
    name: "Kisii",
    intro:
      "Explore apartments and rental homes in Kisii, Kenya with JUMAA. Check available properties and discover homes in Kisii as listings become available.",
    properties: properties.filter(property => property.county === "Kisii")
  },
  {
    slug: "nyamira",
    name: "Nyamira",
    intro:
      "Explore apartments and rental homes in Nyamira, Kenya with JUMAA. Check available properties and discover homes in Nyamira as listings become available.",
    properties: properties.filter(property => property.county === "Nyamira")
  }
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

function buildAreaHtml(area) {
  const areaProperties = properties.filter(
    property =>
      property.county === area.county &&
      property.area === (area.propertyArea || area.name)
  );

  const canonical =
    `https://jumaaweb.vercel.app/apartments/${area.slug}`;

  const title =
    `Apartments for Rent in ${area.name}, ${area.county} | JUMAA`;

  const description = area.intro;

  const propertyItems = areaProperties.map((property, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://jumaaweb.vercel.app/property/${property.id}`,
    name: property.name
  }));

  const cards = areaProperties.length
    ? areaProperties.map(property => `
        <article>
          <a href="/property/${property.id}">
            <img
              src="${property.image}"
              alt="${property.name} in ${property.area}, ${property.county}"
              loading="lazy"
            />
            <h2>${property.name}</h2>
          </a>
          <p>${property.house} · KSh ${property.price.toLocaleString()} / month</p>
          <p>${property.description}</p>
        </article>
      `).join("")
    : `<p>No properties are currently listed in ${area.name}.</p>`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: canonical,
    about: {
      "@type": "Place",
      name: `${area.name}, ${area.county}, Kenya`
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: propertyItems
    }
  };

  const staticMain = `
    <main>
      <p>JUMAA — Kenya home search</p>
      <h1>Apartments for Rent in ${area.name}, ${area.county}</h1>
      <p>${description}</p>

      <section>
        <h2>Available homes in ${area.name}</h2>
        ${cards}
      </section>

      <p>
        Browse more
        <a href="/apartments/${area.county.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">
          apartments in ${area.county}
        </a>.
      </p>
    </main>
  `;

  let html = baseHtml
    .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content=".*?">/i,
      `<meta name="description" content="${description}">`
    )
    .replace(
      /<meta name="robots" content=".*?">/i,
      `<meta name="robots" content="index, follow">`
    )
    .replace(
      /<link\s+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${canonical}">`
    )
    .replace(
      /<meta\s+property="og:title"[^>]*>/i,
      `<meta property="og:title" content="${title}">`
    )
    .replace(
      /<meta\s+property="og:description"[^>]*>/i,
      `<meta property="og:description" content="${description}">`
    )
    .replace(
      /<meta\s+property="og:url"[^>]*>/i,
      `<meta property="og:url" content="${canonical}">`
    )
    .replace(
      /<meta\s+name="twitter:title"[^>]*>/i,
      `<meta name="twitter:title" content="${title}">`
    )
    .replace(
      /<meta\s+name="twitter:description"[^>]*>/i,
      `<meta name="twitter:description" content="${description}">`
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    )
    .replace(
      /<div id="root">[\s\S]*?<\/div>/i,
      `<div id="root">${staticMain}</div>`
    );

  return html;
}

function buildLocationHtml(location) {
  const canonical =
    `https://jumaaweb.vercel.app/apartments/${location.slug}`;

  const title =
    `Apartments for Rent in ${location.name}, Kenya | JUMAA`;

  const description =
    location.intro;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: canonical,
    about: {
      "@type": "Place",
      name: location.name,
      address: {
        "@type": "PostalAddress",
        addressRegion: location.name,
        addressCountry: "KE"
      }
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: location.properties.length,
      itemListElement: location.properties.map((property, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: property.name,
        url:
          `https://jumaaweb.vercel.app/property/${property.id}`
      }))
    }
  };

  const cards = location.properties.map(property => `
    <article>
      <a href="/property/${property.id}">
        <img
          src="${property.image}"
          alt="${escapeHtml(property.name)}"
          loading="lazy"
        />
        <h2>${escapeHtml(property.name)}</h2>
      </a>
      <p>${escapeHtml(property.area)}, ${escapeHtml(property.county)}</p>
      <p>${escapeHtml(property.house)} from ${formatMoney(property.price)} / month</p>
      <a href="/property/${property.id}">View property</a>
    </article>
  `).join("");

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
    `<meta property="og:image" content="${location.properties[0]?.image || ""}" />`
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
    `<meta name="twitter:image" content="${location.properties[0]?.image || ""}" />`
  );

  html = html.replace(
    "</head>",
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>\n</head>`
  );

  html = html.replace(
    /<body([^>]*)>/,
    `<body$1>
      <main style="max-width:1100px;margin:0 auto;padding:40px 20px;">
        <header>
          <p>JUMAA — Kenya home search</p>
          <h1>Apartments for Rent in ${escapeHtml(location.name)}, Kenya</h1>
          <p>${escapeHtml(location.intro)}</p>
        </header>

        <section>
          <h2>Available homes in ${escapeHtml(location.name)}</h2>
          ${cards || `<p>No properties are currently listed in ${escapeHtml(location.name)}.</p>`}
        </section>
      </main>`
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

for (const location of locations) {
  writePage(
    `apartments/${location.slug}`,
    buildLocationHtml(location)
  );
}

for (const area of areas) {
  writePage(
    `apartments/${area.slug}`,
    buildAreaHtml(area)
  );
}

console.log("\nSEO page generation complete.\n");
