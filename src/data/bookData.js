// Shared book data for all pages
export const bookData = {
  coverSrc: '/BookIntroductionPage/orly-generator.png',
  bookTitle: 'IT book for classmates',
  bookSubtitle: 'The first computer tutorial book for UNSW Foundation',
  bookDesc: 'Covering all the theoretical knowledge required for the first term, including vivid theoretical explanations, exercise questions, vocabulary summaries, and extracurricular extensions.',

  details: [
    { heading: 'Writing Motivation', content: 'As many of my Chinese classmates in the UNSW Foundation program struggle to understand computer concepts in English, I chose to write this book to help them.' },
    { heading: 'Structure & Chapters', content: 'Excluding the preface, this book contains four chapters, which correspond to all the theoretical units in the UNSW Foundation.' },
    { heading: 'Peer-reviewed Quality', content: 'In order to ensure the accuracy and correctness, all the content in this book has been reviewed by another student who have graduated from the UNSW Foundation.' },
    { heading: 'Target Audience', content: 'Suitable and necessary for all students studying in the UNSW Foundation, regardless of whether they are in science, commerce, or design class.' }
  ],

  reviews: [
    { author: 'Tommy - Reviewer of this book', content: 'I am honored to collaborate with Peler again. The book involves many complex technical concepts that require appropriate simplification to balance general understanding and professionalism. While reviewing the first draft, I was often impressed by the vivid and clever explanations of terms.', rating: 5 },
    { author: 'Ethan - Suggested adding a vocabulary table ', content: 'Peler listened to many students\' opinions while writing this book. The vocabulary list at the end of each chapter is very helpful, especially for someone like me who finds it difficult to remember English words.', rating: 5 },
    { author: 'Mike - When saw the first draft of this book', content: 'Writing a book like this would be so cool. Will we (commerce class) have it?', rating: 5 },
    { author: 'Emma - Posted this comment after the theoretical exam', content: 'This book helps me really a lot! Will there be a new edition of this book? It is so useful!', rating: 5 }
  ],

  roadmap: [
    { title: 'Correct spelling mistakes', description: 'Correct the spelling mistakes that have already been found in this book.', quarter: 'Task 1' },
    { title: 'Ensure the content is updated', description: 'Update the content to better align with the new version of the UNSW Foundation textbook.', quarter: 'Task 2' },
    { title: 'Layout Optimization', description: 'Revise the layout based on the feedback to enhance readability and mobile experience', quarter: 'Task 3' }
  ],

  features: [
    {
      title: 'Key Knowledge Highlights',
      description: 'Use different styles to clearly highlight key points, concepts, and vocabulary.',
      icon: '⚡',
      image: '/BookIntroductionPage/images/features/keyknowledge.png',
      details: [
        'Text with yellow highlighter: key points',
        'Text in bold: important concepts',
      ]
    },
    {
      title: 'Rich diagrams and images',
      description: 'Interesting and illustrative images help with understanding.',
      icon: '📚',
      image: '/BookIntroductionPage/images/features/diagrams.png',
      details: [
        'Diagrams help clarify the relationships between different knowledge points',
        'Images provide readers with a direct and vivid understanding of concepts'
      ]
    },
    {
      title: 'Knowledge expansion paragraphs',
      description: 'Providing a more detailed and in-depth explanation of classroom knowledge.',
      icon: '🎯',
      image: '/BookIntroductionPage/images/features/expansion.png',
      details: [
        'To stimulate students\' desire for knowledge',
        'To be a good supplement to the classroom knowledge'
      ]
    }
  ],

  galleryImages: [
    { src: '/BookIntroductionPage/images/gallery/just.jpg', title: 'When just finished the first draft', caption: 'So excited! Print two copies and share with my friends!' },
    { src: '/BookIntroductionPage/images/gallery/print.jpg', title: 'Published, and printed 100 copies', caption: 'With the great help from my friends, who printed the book for me for free!' },
    { src: '/BookIntroductionPage/images/gallery/final.jpg', title: 'Before the theoretical exam', caption: 'A lot of students are using this book to prepare for the exam!' }
  ]
};

// Navigation structure
export const navigation = [
  { id: 'home', title: 'Book Introduction', path: '/BookIntroductionPage/' },
  { id: 'details', title: 'Details', path: '/BookIntroductionPage/details' },
  { id: 'features', title: 'Features', path: '/BookIntroductionPage/features' },
  { id: 'reviews', title: 'Reviews', path: '/BookIntroductionPage/reviews' },
  { id: 'gallery', title: 'Gallery', path: '/BookIntroductionPage/gallery' },
  { id: 'roadmap', title: 'Roadmap', path: '/BookIntroductionPage/roadmap' }
];