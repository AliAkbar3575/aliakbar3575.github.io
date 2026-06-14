const data = {
  hero: {
    fullName: 'Ali Akbar',
    designation: 'AI / ML Researcher & Engineer',
    tagline:
      'Hands-on experience building RAG pipelines, LLM-powered agents, and multimodal systems. Research across Machine Learning and Computer Vision.',
    ctas: [
      { label: 'Contact', href: '#contact' },
      { label: 'View Publications', href: '#publications' }
    ],
    resume: '/Ali_Akbar_CV.pdf'
  },
  about: {
    summary:
      'Hands-on experience building RAG pipelines, LLM-powered agents with observability, and multimodal systems using LangChain, LangGraph, LangSmith, PyTorch, and vector databases. Research background spanning Machine Learning and Computer Vision across 4 published and ongoing research works. Runner-up (top 2) at the ACM UbiComp 2021 International Nurse Care Activity Recognition Challenge. Acknowledged contributor on an ACL Findings 2025 paper.',
    education: {
      institution: 'University of Dhaka',
      degree: 'Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering',
      period: 'Jan. 2019 - April 2024',
      cgpa: '3.52 (out of 4.00)'
    },
    researchFocus:
      'Retrieval-Augmented Generation, Agentic LLM systems, Multimodal learning, Computer Vision, and bioinformatics applications of ML.',
    careerObjective:
      'Pursue research and engineering roles in AI/ML focusing on applied research, model-driven products, and translational applications in healthcare and multimodal domains.'
  },
  researchInterests: [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Multimodal Learning / MLLMs',
    'Large Language Models (LLMs)',
    'Generative AI',
    'Retrieval-Augmented Generation (RAG)',
    'LLM Agents and Prompt Engineering',
    'AI for Healthcare / Bioinformatics'
  ],
  skills: {
    languages: ['C', 'Java', 'Python', 'MATLAB', 'MySQL', 'LATEX'],
    frameworks: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'OpenCV',
      'MLflow',
      'DVC',
      'FastAPI (learning)'
    ],
    libraries: [
      'HuggingFace',
      'FAISS',
      'Pandas',
      'NumPy',
      'Matplotlib'
    ],
    aiTools: [
      'LangChain',
      'LangGraph',
      'LangSmith',
      'Pydantic',
      'LLM APIs',
      'RAG',
      'Advanced RAG',
      'Prompt Engineering'
    ],
    databases: ['FAISS', 'Pinecone'],
    researchTools: ['Optuna', 'CZID bioinformatics pipeline (used in project)'],
    devTools: ['Git', 'Docker', 'Streamlit']
  },
  projects: [
    {
      title:
        'OCR-Based Handwritten Scanned Document Extraction, Summarization, and Retrieval System',
      description:
        'End-to-end pipeline for processing handwritten scanned documents: OCR extraction from images and PDFs, semantic chunking, FAISS indexing for retrieval, and a RAG-based QA system returning contextual answers with source references. Includes a Human-in-the-Loop feedback mechanism for iterative correction and summarization.',
      technologies: [
        'OCR',
        'FAISS',
        'RAG',
        'Python',
        'HuggingFace embeddings',
        'Custom HITL workflow'
      ],
      github: null,
      image: null
    },
    {
      title: 'Conversational AI Chatbot with Memory Using LangGraph and Streamlit',
      description:
        'Multi-turn conversational AI chatbot using LangGraph StateGraph and MemorySaver for graph-based state management and tool calling, with real-time token streaming via Groq inference backend and a persistent graph workflow for conversation state.',
      technologies: ['LangGraph', 'Streamlit', 'Groq backend', 'Python'],
      github: null,
      image: null
    },
    {
      title:
        'Retrieval-Augmented Generation (RAG) System for Multi-Source Website Question Answering',
      description:
        'RAG pipeline ingesting and fusing content from up to three simultaneous user-provided URLs, embedding web content with HuggingFace models into FAISS, performing semantic similarity search, and generating source-referenced answers. Pipeline latency tracked with LangSmith.',
      technologies: ['HuggingFace embeddings', 'FAISS', 'LangSmith', 'RAG'],
      github: null,
      image: null
    }
  ],
  appliedProjects: [
    {
      title:
        'Nurse Care Activity Recognition from Accelerometer Sensor Data Using Fourier- and Wavelet-based Features',
      date: 'May, 2021',
      description:
        'Engineered time-frequency features from raw accelerometer signals using FFT and DWT with a full preprocessing pipeline. Applied feature selection and compared multiple ML classifiers across 25 nurse activity classes. Achieved 87% classification accuracy using LightGBM; contributed to runner-up finish at ACM UbiComp 2021 Nurse Care Activity Recognition Challenge.',
      technologies: ['FFT', 'DWT', 'LightGBM', 'Python', 'Feature selection'],
      github: null,
      image: null
    },
    {
      title:
        'End-to-End micro-bacterial segmentation and detection using ViT-based hybrid model',
      description:
        'Proposed Max-ViT backbone-based Mask R-CNN for end-to-end microbacterial instance segmentation on the M-ROSE dataset, outperforming ResNet50 Mask R-CNN, Mask2Former, and YOLOv11 with mAP 79.31% and F1-score 70.01% under 5-fold cross-validation. Applied ROI Activation CAM for interpretability.',
      technologies: ['Vision Transformers', 'Mask R-CNN', 'Max-ViT', 'ROI Activation CAM'],
      github: null,
      image: null
    },
    {
      title:
        'Integrating Gut Microbiome Taxonomic Profiles with Supervised Machine Learning for IBS Diagnosis',
      description:
        'Curated a hybrid dataset of 1,109 gut microbiome samples (1,093 from NCBI + 16 newly sequenced Bangladeshi samples). Processed raw DNA sequences through CZID for human DNA removal and quality control, extracted taxonomic features, optimized hyperparameters with Optuna under 5-fold CV. Logistic Regression achieved 79.73% accuracy and MCC 0.5876; manuscript in preparation.',
      technologies: ['CZID', 'Optuna', 'Logistic Regression', 'Python'],
      github: null,
      image: null
    },
    {
      title:
        'Thinking Like a Botanist: Challenging Multimodal Language Models with Intent Driven Chain-of-Inquiry',
      description:
        'Contributed large-scale data collection for PlantInquiryVQA, a multi-step expert-style VQA framework with annotated reasoning chains and visual grounding. Dataset: 24,964 plant images and 138,078 QA pairs. Evaluated SOTA MLLMs; work published in ACL Findings 2025 (acknowledged contributor).',
      technologies: ['Multimodal VQA', 'MLLM evaluation', 'Dataset curation'],
      github: null,
      image: null
    }
  ],
  researchExperience: [
    {
      role: 'Research Assistant',
      organization: 'Data & Design Lab, dept. of CSE, University of Dhaka',
      description:
        'Collected real-time field data from substations, developed data analytics solutions, preprocessed and transformed electricity-sector datasets into structured formats for system integration and data-driven decision-making, and contributed to the development of Biddyut Bandhu, a domain-specific chatbot.'
    },
    {
      role: 'Volunteer ML Researcher',
      organization: 'icddr,b',
      periods: ['Feb 2025 – Dec 2025', 'May 2026 – Present'],
      description:
        'Developing a Linux-based shotgun metagenomics pipeline using SRA Toolkit, KneadData, and MetaPhlAn to acquire, preprocess, and generate taxonomic abundance profiles from publicly available healthy-control gut microbiome sequencing data. Integrating these data with organization’s existing cohort of 67 IBD patient samples to support comparative microbiome analysis and downstream machine learning studies for identifying disease-associated microbial signatures.'
    }
  ],
  publications: [
    {
      type: 'Conference Paper',
      citation:
        "Kowshik, M. Ashikuzzaman, Yeasin Arafat Pritom, Md Sohanur Rahman, Ali Akbar, and Md Atiqur Rahman Ahad. 'Nurse Care Activity Recognition from Accelerometer Sensor Data Using Fourier-and Wavelet-based Features' In Adjunct Proceedings of the 2021 ACM International Joint Conference on Pervasive and Ubiquitous Computing and Proceedings of the 2021 ACM International Symposium on Wearable Computers, pp. 434-439. 2021."
    },
    {
      type: 'Conference (Acknowledged)',
      citation:
        "'Thinking Like a Botanist: Challenging Multimodal Language Models with Intent Driven Chain-of-Inquiry' — Published in ACL Findings 2025 (Acknowledged contributor for large-scale data collection)."
    }
  ],
  awards: [
    'Runner up at Third Nurse Care Activity Recognition Challenge, 2021 (HASCA workshop, ACM UbiComp).',
    'Participated Kharagpur Data Science Hackathon, 2021.'
  ],
  certifications: [],
  contact: {
    email: 'aliakbar357589@gmail.com',
    phone: '+8801522 122 057',
    address:
      'Dr. Muhammad Shahidullah Hall, University of Dhaka, Ramna, Dhaka-1000, Bangladesh',
    website: 'https://aliakbar3575.github.io'
  }
}

export default data
