import type { ChapterType } from "./hooks/useChapters";

export const classSubjects = {
    1: ['Malayalam', 'English', 'Mathematics', 'EVS'],
    2: ['Malayalam', 'English', 'Mathematics', 'EVS'],
    3: ['Malayalam', 'English', 'Mathematics', 'EVS'],
    4: ['Malayalam', 'English', 'Hindi', 'Mathematics', 'EVS'],
    5: ['Malayalam', 'English', 'Hindi', 'Mathematics', 'EVS'],
    6: ['Malayalam', 'English', 'Hindi', 'Mathematics', 'Science', 'Social Science'],
    7: ['Malayalam', 'English', 'Hindi', 'Mathematics', 'Science', 'Social Science'],
    8: ['Malayalam', 'English', 'Hindi', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science'],
    9: ['Malayalam', 'English', 'Hindi', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'ICT'],
    10: ['Malayalam', 'English', 'Hindi', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'ICT']
};


export const classUnits = [
    { id: "1", number: "1", title: "Reading Comprehension", image: "https://images.pexels.com/photos/7296429/pexels-photo-7296429.jpeg" },
    { id: "2", number: "2", title: "Grammar Essentials", image: "https://images.pexels.com/photos/9871140/pexels-photo-9871140.jpeg" },
    { id: "3", number: "3", title: "Essay Writing", image: "https://images.pexels.com/photos/17872346/pexels-photo-17872346.jpeg" }
]

export const classChapters: ChapterType[] = [
    {
        id: "1",
        number: "1",
        title: "Alphabet Song",
        description: "Learn to sing the alphabet with fun visuals and music!",
        image: "https://images.pexels.com/photos/1225127/pexels-photo-1225127.jpeg"

    },
    {
        id: "2",
        number: "2",
        title: "My First Words",
        description: "This chapter helps children learn their first simple English words through fun visuals and songs. Topics include action words, everyday objects, animals, colors, and more—making vocabulary building exciting and interactive!",
        image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg"

    },
    {
        id: "3",
        number: "3",
        title: "Simple Sentences",
        description: "This chapter introduces children to basic sentence formation using the words they've learned. Kids will see how to combine words into meaningful short sentences with colorful visuals and examples.",
        image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg"

    },
]