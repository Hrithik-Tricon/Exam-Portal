// quiz.ts
export interface Question {
    id?: number;
    content: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    numberOfQuestions: string;
    correctAnswer: string; // Or whatever you use for correct option
  }
  
  export interface Quiz {
    id?: number; // Make id optional
    title: string;
    description?: string;  // Optional property
    questions?: Question[]; // Optional array of questions
    active?: boolean;
    category?: Category; // Use Category interface if defined
  }
  
  export interface Category {
    id: number;
    title: string;
    description?: string; // Optional
  }
  