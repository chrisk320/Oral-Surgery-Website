const SITE_URL = "https://ocimplantoralsurgery.com";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "OC Implant Oral Surgery",
      url: SITE_URL,
    },
    {
      "@type": ["Dentist", "MedicalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: "OC Implant Oral Surgery",
      url: SITE_URL,
      telephone: "+17145290043",
      address: {
        "@type": "PostalAddress",
        streetAddress: "— update with exact street address —",
        addressLocality: "Brea",
        addressRegion: "CA",
        postalCode: "92821",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        addressLocality: "Brea",
        addressRegion: "CA",
      },
      medicalSpecialty: "Oral and Maxillofacial Surgery",
      description:
        "Board-certified oral and maxillofacial surgeon Dr. Jone Kim provides dental implants, wisdom teeth removal, anesthesia, TMJ treatment, oral cancer screening, and facial injury treatment in Brea, CA.",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
      sameAs: [],
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: "Jone Kim",
      honorificSuffix: "DDS, MS",
      jobTitle: "Oral & Maxillofacial Surgeon",
      medicalSpecialty: "Oral and Maxillofacial Surgery",
      description:
        "Dr. Jone Kim is a board-certified oral and maxillofacial surgeon. He earned his DDS from UCLA School of Dentistry (1994), his MS in Oral Biology from UCLA Graduate School (1996), completed his OMS residency at University Medical Center Fresno (1998), and did a fellowship in Orthognathic & Facial Reconstructive Surgery in Santa Barbara.",
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "UCLA",
          sameAs: "https://www.ucla.edu",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "UCLA School of Dentistry",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "UCLA Graduate School",
        },
      ],
      worksFor: {
        "@id": `${SITE_URL}/#business`,
      },
    },
  ],
};

export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
