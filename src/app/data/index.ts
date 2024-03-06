interface CourseData {
  id: number;
  title: string;
  description: string;
  image: string;
  published: boolean;
  link: string;
  price: number;
}

export const courseData: CourseData[] = [
  {
    id: 1,
    title: "Guitar Fundamental",
    description:
      "Learn Guitar basic with our Fundamental Course for beginner and get started with us and have fun",
    image:
      "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: true,
    link: "courseDetails",
    price: 29.99, // Adjust the price as needed
  },
  {
    id: 2,
    title: "Advanced Vocal Training",
    description:
      "Enhance your training with Advance Vocal Training for intermediate to advanced students",
    image:
      "https://images.unsplash.com/photo-1589400356749-132756d2cc87?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: true,
    link: "courseDetails/Advanced-Vocal-Training",
    price: 39.99, // Adjust the price as needed
  },
  {
    id: 3,
    title: "Music Production Fundamentals",
    description:
      "Master the basics of music production with our comprehensive course, you'll be able to produce your own music production",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: true,
    link: "courseDetails/Music-Production-Fundamentals",
    price: 49.99, // Adjust the price as needed
  },
  {
    id: 4,
    title: "Piano Masterclass",
    description:
      "Unlock your potential with our Piano Masterclass for beginners to advanced players",
    image:
      "https://images.unsplash.com/photo-1476287803067-f714aa78eaa7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: true,
    link: "courseDetails/Piano-MasterClass",
    price: 44.99, // Adjust the price as needed
  },
  {
    id: 5,
    title: "Songwriting Workshop",
    description:
      "Discover the art of songwriting and unleash your creativity in our workshop and similarly we can enhance your skills",
    image:
      "https://images.unsplash.com/photo-1597271116561-ba0ff83c855b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: true,
    link: "courseDetails/Song-Writing-Workshop",
    price: 34.99, // Adjust the price as needed
  },
];
