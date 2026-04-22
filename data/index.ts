export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Building production-ready front-end systems",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 justify-end",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b8.jpg",
    spareImg: "",
  },

  {
    id: 2,
    title: "Strong communication in remote and cross-functional teams",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 3,
    title: "front-end stack",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "Focused on scalable UI architecture and maintainable codebases",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Experience building CMS and dashboard applications",
    description: "CRUD systems, API integration, and real-time data handling with Supabase",
    className:
      "lg:col-span-2 md:col-span-1 md:row-span-2 lg:row-span-2 justify-center",
    imgClassName: "absolute right-0 bottom-15 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center ",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },

  {
    id: 6,
    title: "Available for Front-End Developer roles",
    description: "",
    className:
      "lg:col-span-1 md:col-span-3 md:row-span-1 relative z-100 text-center",
    imgClassName: "",
    titleClassName:
      "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Full Stack Portfolio CMS",
    des: "Built a CMS-driven portfolio using Next.js and Supabase to manage blogs and projects with real-time data sync and reusable components.",
    img: "/P1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/supabase-icon.svg"],
    link: "https://cms-portfolio-r5k3.onrender.com/",
  },
  {
    id: 2,
    title: "Product Dashboard (CRUD)",
    des: "Developed a TypeScript-based dashboard with full CRUD operations, search functionality, and stable UI state handling using API integration.",
    img: "/p2.png",
    iconLists: ["/ts.svg", "/supabase-icon.svg"],
    link: "https://hakam-7-dev.github.io/product-dashboard-CRD/",
  },
  {
    id: 3,
    title: "Interactive Multi-Section Website",
    des: "Created a dynamic web interface with theme persistence, interactive UI elements, and responsive layouts tested across multiple devices.",
    img: "/C5.png",
    iconLists: ["/htmlicon.png", "/cssicon.png", "/jsicon.png"],
    link: "https://hakam-7-dev.github.io/Vanilla-JavaScript-Project/",
  },
  {
    id: 4,
    title: "Cloud Tech Platform Front-End",
    des: "Built responsive front-end pages using Bootstrap with optimized performance, improving load speed and mobile user experience.",
    img: "/C2.png",
    iconLists: ["/htmlicon.png", "/cssicon.png", "/Bicon.png"],
    link: "https://hakam-7-dev.github.io/Asset-cloudtech-Project-/",
  },
];

export const testimonials = [
  {
    quote:"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson1",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson2",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson3",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson4",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson5",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Front-End Development Focus",
    desc: "Focused on building responsive UI systems using React, Next.js, and TypeScript with emphasis on clean component architecture.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "API Integration & Data Handling",
    desc: "Worked with REST APIs and Supabase to manage data flow, handle CRUD operations, and maintain consistent UI state.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI Engineering & Responsive Design",
    desc: "Built mobile-first interfaces with Tailwind CSS ensuring responsiveness across breakpoints and consistent UX behavior.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Performance & Optimization Practice",
    desc: "Improved frontend performance using Lighthouse insights, optimizing load speed, and reducing unnecessary rendering.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Hakam-7-dev"
  },
  {
    id: 2,
    img: "/link.svg",
      link: "https://www.linkedin.com/in/hakam-hammoud-/"
  },
];