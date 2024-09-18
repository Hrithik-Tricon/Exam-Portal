export interface Question {
    id?: number; // Optional when adding new questions
    content: string; 
    options: string[]; // Array for multiple choice options
    answer: string;
    quiz: {
      qId: number; // To link the question with the quiz
    };
  }
  
  