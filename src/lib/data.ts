import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const profile = {
  name: 'Shrey Goyal',
  bio: "Data Science and AI/ML enthusiast with hands-on experience in building and deploying deep learning models, including GenAI solutions. Skilled in Python, TensorFlow, Scikit-learn, and Docker to develop scalable ML pipelines and containerized inference services. Passionate about leveraging data-driven insights and cutting-edge AI to solve complex problems and drive impactful innovations.",
  email: 'shreygoyal50@gmail.com',
  phone: '+91-8284010845',
  profilePicture: PlaceHolderImages.find(p => p.id === 'profile-picture') as ImagePlaceholder,
};

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: ImagePlaceholder;
  size: number; // For sorting
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'VAPI Voice Assistant',
    description: 'Automates outbound calling via Twilio, streamlining communication tasks and managing webhook flows to enhance call logic and interaction efficiency.',
    link: 'https://github.com/itsmeshreyg05/Voice-Assistant',
    image: PlaceHolderImages.find(p => p.id === 'project-voice-automation') as ImagePlaceholder,
    size: 1,
  },
  {
    id: '2',
    title: 'F1 Predictor',
    description: 'Develops an XGBoost classification model to predict Formula 1 race outcomes and applies feature engineering and tuning to optimize model accuracy.',
    link: 'https://f1-race-predictions.streamlit.app/',
    image: PlaceHolderImages.find(p => p.id === 'project-f1-predictor') as ImagePlaceholder,
    size: 2,
  },
  {
    id: '3',
    title: 'Web Scraper & Alerts',
    description: 'Extracts data from targeted websites on an hourly schedule for real-time monitoring and delivers push and SMS alerts for significant updates.',
    link: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-web-scraper') as ImagePlaceholder,
    size: 3,
  },
  {
    id: '4',
    title: 'Flight Deal Finder',
    description: 'Analyzes flight APIs to identify discounted fares for cost-effective travel and provides personalized recommendations for the best deals.',
    link: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-flight-finder') as ImagePlaceholder,
    size: 4,
  },
  {
    id: '5',
    title: 'Document Verification',
    description: 'A system to automatically verify documents, likely using OCR and other AI techniques.',
    link: 'https://github.com/itsmeshreyg05/document_verification',
    image: PlaceHolderImages.find(p => p.id === 'project-doc-verification') as ImagePlaceholder,
    size: 5,
  },
  {
    id: '6',
    title: 'Call Audit',
    description: 'A tool for auditing calls, likely for quality assurance or analysis purposes.',
    link: 'https://github.com/itsmeshreyg05/Call-audit',
    image: PlaceHolderImages.find(p => p.id === 'project-call-audit') as ImagePlaceholder,
    size: 6,
  },
  {
    id: '7',
    title: 'Facial Expression Recognition',
    description: 'A deep learning model to recognize facial expressions from images or video.',
    link: 'https://github.com/itsmeshreyg05/Facial_expression_Recognition',
    image: PlaceHolderImages.find(p => p.id === 'project-facial-recognition') as ImagePlaceholder,
    size: 7,
  },
  {
    id: '8',
    title: 'American Sign Language Recognition',
    description: 'A model to recognize and interpret American Sign Language gestures.',
    link: 'https://github.com/itsmeshreyg05/American-Sign-Lang',
    image: PlaceHolderImages.find(p => p.id === 'project-asl') as ImagePlaceholder,
    size: 8,
  },
  {
    id: '9',
    title: 'Deep Neural Network (DNN)',
    description: 'A foundational Deep Neural Network project, likely for learning and experimentation.',
    link: 'https://github.com/itsmeshreyg05/DNN',
    image: PlaceHolderImages.find(p => p.id === 'project-dnn') as ImagePlaceholder,
    size: 9,
  },
  {
    id: '10',
    title: 'Disease Prediction',
    description: 'A Jupyter Notebook project to predict diseases based on symptoms.',
    link: 'https://github.com/itsmeshreyg05/disease',
    image: PlaceHolderImages.find(p => p.id === 'project-disease-prediction') as ImagePlaceholder,
    size: 10,
  },
  {
    id: '11',
    title: 'AI Health-Care System',
    description: 'An HTML-based system for AI-driven healthcare solutions.',
    link: 'https://github.com/itsmeshreyg05/AI-Health-Care-System',
    image: PlaceHolderImages.find(p => p.id === 'project-ai-healthcare') as ImagePlaceholder,
    size: 11,
  },
  {
    id: '12',
    title: 'Pantry Tracker',
    description: 'A CSS-based application to track pantry items and their prices.',
    link: 'https://github.com/itsmeshreyg05/pantry_tracker',
    image: PlaceHolderImages.find(p => p.id === 'project-pantry-tracker') as ImagePlaceholder,
    size: 12,
  },
  {
    id: '13',
    title: 'Currency Converter',
    description: 'A real-time currency converter using JavaScript.',
    link: 'https://github.com/itsmeshreyg05/Currency-Converter',
    image: PlaceHolderImages.find(p => p.id === 'project-currency-converter') as ImagePlaceholder,
    size: 13,
  },
  {
    id: '14',
    title: 'Amazon Web Page Clone',
    description: 'A basic HTML and CSS clone of the Amazon web page.',
    link: 'https://github.com/itsmeshreyg05/Amaon-WebPage-BASIC-Clone',
    image: PlaceHolderImages.find(p => p.id === 'project-amazon-clone') as ImagePlaceholder,
    size: 14,
  },
].sort((a, b) => a.size - b.size);
