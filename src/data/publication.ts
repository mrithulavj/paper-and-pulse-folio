export type MagazineEdition = {
  id: string;
  title: string;
  label: string;
  published: string;
  theme: "maroon" | "sage" | "ink";
  pdfUrl?: string;
};

export const magazineEditions: MagazineEdition[] = [
  {
    id: "volume-03",
    title: "The New Archive",
    label: "Volume 03",
    published: "2026",
    theme: "maroon",
  },
  {
    id: "volume-02",
    title: "Between the Lines",
    label: "Volume 02",
    published: "2025",
    theme: "sage",
  },
  {
    id: "volume-01",
    title: "First Impressions",
    label: "Volume 01",
    published: "2024",
    theme: "ink",
  },
];

export type Activity = {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
};

export const activities: Activity[] = [
  {
    id: "writers-room",
    title: "The Writers’ Room",
    description:
      "An open editorial workshop exploring observation, voice, and the craft of turning campus life into stories.",
    date: "August 2026",
    category: "Workshop",
  },
  {
    id: "campus-chronicles",
    title: "Campus Chronicles",
    description:
      "A collaborative reporting project documenting the people, places, and ideas shaping our college community.",
    date: "February 2026",
    category: "Editorial Project",
  },
  {
    id: "open-mic",
    title: "Pages Out Loud",
    description:
      "An evening of poetry, essays, and spoken word where contributors bring the printed page to life.",
    date: "November 2025",
    category: "Community Event",
  },
];

export type OfficeBearer = {
  id: string;
  name: string;
  designation: string;
};

export const officeBearers: OfficeBearer[] = [
  { id: "editor-in-chief", name: "Name to be announced", designation: "Editor-in-Chief" },
  { id: "managing-editor", name: "Name to be announced", designation: "Managing Editor" },
  { id: "creative-director", name: "Name to be announced", designation: "Creative Director" },
  { id: "faculty-advisor", name: "Name to be announced", designation: "Faculty Advisor" },
];