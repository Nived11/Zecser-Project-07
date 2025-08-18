import type { NewsType } from "./hooks/useNews";

export const newData: Record<number, { data: NewsType[]; totalPages: number }> = {
    1: {
        data: [
            {
                id: "1",
                title: "School Achievements",
                description:
                    "Every milestone counts, and we are proud to showcase the remarkable accomplishments of our students and faculty. Be it winning academic competitions, excelling in sports tournaments, or gaining recognition in cultural fests — our achievers set an inspiring example for their peers. We celebrate these moments to motivate our students to aim high and dream big, while appreciating the hard work and dedication behind each success story.",
                image_url: "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "2",
                title: "School Achievements",
                description:
                    "Every milestone counts, and we are proud to showcase the remarkable accomplishments of our students and faculty. Be it winning academic competitions, excelling in sports tournaments, or gaining recognition in cultural fests — our achievers set an inspiring example for their peers. We celebrate these moments to motivate our students to aim high and dream big, while appreciating the hard work and dedication behind each success story.",
                image_url: "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        totalPages: 2,
    },
    2: {
        data: [
            {
                id: "3",
                title: "School Achievements",
                description:
                    "Every milestone counts, and we are proud to showcase the remarkable accomplishments of our students and faculty. Be it winning academic competitions, excelling in sports tournaments, or gaining recognition in cultural fests — our achievers set an inspiring example for their peers. We celebrate these moments to motivate our students to aim high and dream big, while appreciating the hard work and dedication behind each success story.",
                image_url: "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        totalPages: 2,
    },
};
