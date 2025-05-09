
import type { Project } from '@/types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Knowledge Transfer and Domain Adaptation for Fine-Grained Remote Sensing Image Segmentation',
    authors: ["Shun Zhang", "Xuechao Zou", "Kai Li", "Congyan Lang", "Shiying Wang", "Pin Tao", "Tengfei Cao"],
    year: 'Dec, 2024',
    shortDescription: 'A novel end-to-end learning paradigm combining knowledge guidance with domain refinement for remote sensing image segmentation.',
    longDescription: `Fine-grained remote sensing image segmentation is essential for accurately identifying detailed objects in remote sensing images. Recently, vision transformer models (VTMs) pre-trained on large-scale datasets have demonstrated strong zero-shot generalization. However, directly applying them to specific tasks may lead to domain shift. We introduce a novel end-to-end learning paradigm combining knowledge guidance with domain refinement to enhance performance. We present two key components: the Feature Alignment Module (FAM) and the Feature Modulation Module (FMM). FAM aligns features from a CNN-based backbone with those from the pretrained VTM's encoder using channel transformation and spatial interpolation, and transfers knowledge via KL divergence and L2 normalization constraint. FMM further adapts the knowledge to the specific domain to address domain shift. We also introduce a fine-grained grass segmentation dataset and demonstrate, through experiments on two datasets, that our method achieves a significant improvement of 2.57 mIoU on the grass dataset and 3.73 mIoU on the cloud dataset. The results highlight the potential of combining knowledge transfer and domain adaptation to overcome domain-related challenges and data limitations. `,
    imageUrl: 'https://picsum.photos/seed/remote-sensing-segmentation/1200/600',
    imageAiHint: 'satellite segmentation',
    tags: ['Remote Sensing', 'Image Segmentation', 'Deep Learning', 'Vision Transformer', 'Domain Adaptation'],
    status: 'Active',
    demoType: 'segmentation', // Changed to 'segmentation'
    publicationLink: 'https://xavierjiezou.github.io/KTDA/',
    researchArea: 'remote sensing image segmentation',
    repositoryLink: 'https://github.com/XavierJiezou/KTDA',
    relatedPublications: [
      { title: 'Vision Transformers for Remote Sensing: A Survey', source: 'IEEE Transactions on Geoscience and Remote Sensing, 2023', link: '#' },
      { title: 'Domain Adaptation in Semantic Segmentation', source: 'CVPR Workshop, 2022', link: '#' }
    ],
    examples: [
      new URL('@/assets/examples/ktda/4.png', import.meta.url).href,
      new URL('@/assets/examples/ktda/5.png', import.meta.url).href,
      new URL('@/assets/examples/ktda/26.png', import.meta.url).href
    ],
    route_name: "/ktda_predict"
  },
  {
    id: '2',
    title: 'Adapting Vision Foundation Models for Robust Cloud Segmentation in Remote Sensing Images',
    authors: ['Xuechao Zou', 'Shun Zhang', 'Kai Li', 'Shiying Wang', 'Junliang Xing', 'Lei Jin', 'Congyan Lang', 'Pin Tao'],
    year: 'Nov, 2024',
    shortDescription: 'Cloud-Adapter is a lightweight and efficient cloud segmentation method that enhances pre-trained vision models to achieve top performance across diverse satellite images and scenarios.',
    longDescription: `Cloud segmentation is a critical challenge in remote sensing image interpretation, as its accuracy directly impacts the effectiveness of subsequent data processing and analysis. Recently, vision foundation models (VFM) have demonstrated powerful generalization capabilities across various visual tasks. In this paper, we present a parameter-efficient adaptive approach, termed Cloud-Adapter, designed to enhance the accuracy and robustness of cloud segmentation. Our method leverages a VFM pretrained on general domain data, which remains frozen, eliminating the need for additional training. Cloud-Adapter incorporates a lightweight spatial perception module that initially utilizes a convolutional neural network (ConvNet) to extract dense spatial representations. These multi-scale features are then aggregated and serve as contextual inputs to an adapting module, which modulates the frozen transformer layers within the VFM. Experimental results demonstrate that the Cloud-Adapter approach, utilizing only 0.6% of the trainable parameters of the frozen backbone, achieves substantial performance gains. Cloud-Adapter consistently achieves state-of-the-art performance across various cloud segmentation datasets from multiple satellite sources, sensor series, data processing levels, land cover scenarios, and annotation granularities.`,
    imageUrl: 'https://picsum.photos/seed/cloud-segmentation/1200/600',
    imageAiHint: 'text analysis',
    tags: ['Cloud segmentation', 'Vision Foundation Models', 'Domain Adaptation', 'Fine-Tuning', 'Remote Sensing Image Processing'],
    status: 'Completed',
    demoType: 'segmentation', // No specific interactive demo or could be text-based
    publicationLink: 'https://example.com/publication/nlp-sentiment',
    researchArea: 'Cloud segmentation',
    repositoryLink: 'https://github.com/research-group/nlp-sentiment',
    relatedPublications: [
      { title: 'Transformer Models in Sentiment Analysis: A Review', source: 'Journal of NLP, 2024', link: '#' }
    ],
    examples: [
      new URL('@/assets/examples/cloud_adapter/3.png', import.meta.url).href,
      new URL('@/assets/examples/cloud_adapter/15.png', import.meta.url).href,
      new URL('@/assets/examples/cloud_adapter/56.png', import.meta.url).href
    ],
    route_name: "/cloud_adapter_predict"
  },
  {
    id: '3',
    title: 'Reinforcement Learning for Robotic Control',
    authors: ['Dr. David Brown', 'Eva Black'],
    year: 'November 20, 2023',
    shortDescription: 'Applying reinforcement learning algorithms to enable autonomous robotic manipulation and navigation.',
    longDescription: `This project aims to develop intelligent robots that can learn complex tasks through trial and error in dynamic environments. We explore a range of reinforcement learning algorithms, including Q-learning, Deep Q-Networks (DQN), Policy Gradients (e.g., REINFORCE, A2C, A3C), and Actor-Critic methods (e.g., DDPG, SAC). Simulated environments (e.g., MuJoCo, PyBullet, Isaac Gym) are used for initial training and algorithm development, followed by transfer to real-world robotic platforms. Key applications include industrial automation (e.g., assembly, pick-and-place), assistive robotics, and autonomous navigation in cluttered spaces. We also investigate sample efficiency, safety, and exploration-exploitation trade-offs in RL.`,
    imageUrl: 'https://picsum.photos/seed/robotics-rl/1200/600',
    imageAiHint: 'robotic arm',
    tags: ['Reinforcement Learning', 'Robotics', 'AI', 'Control Systems', 'DQN'],
    status: 'Published',
    demoType: 'other', // Could be a video or simulation link
    publicationLink: 'https://example.com/publication/robotics-rl',
    researchArea: 'Robotics & AI',
    relatedPublications: [
      { title: 'Safe Exploration in Reinforcement Learning for Robotics', source: 'Robotics Today, 2023', link: '#' }
    ]
  },
  {
    id: '4',
    title: 'Ethical AI and Bias Detection in Machine Learning',
    authors: ['Dr. Alice Smith', 'Dr. Frank Blue', 'Dr. Irene Silver'],
    year: 'June 5, 2024',
    shortDescription: 'Investigating fairness, accountability, and transparency in AI systems, with a focus on bias detection and mitigation.',
    longDescription: `As AI systems become more pervasive, ensuring they are ethical, fair, and unbiased is crucial. This research focuses on developing novel techniques to identify, quantify, and mitigate biases in datasets and machine learning models across various modalities (e.g., text, images, structured data). We explore fairness metrics (e.g., demographic parity, equalized odds), interpretability methods (e.g., SHAP, LIME), and algorithmic recourse to build more trustworthy and accountable AI. Our work also covers data governance, privacy-preserving machine learning, and the societal impact of AI technologies. Case studies in healthcare, finance, and criminal justice are examined.`,
    imageUrl: 'https://picsum.photos/seed/ethical-ai/1200/600',
    imageAiHint: 'data privacy',
    tags: ['Ethical AI', 'Bias Detection', 'Fairness', 'XAI', 'Machine Learning'],
    status: 'Ongoing',
    researchArea: 'AI Ethics',
    repositoryLink: 'https://github.com/research-group/ethical-ai-framework',
  },
  {
    id: '5',
    title: 'Quantum Machine Learning Algorithms',
    authors: ['Dr. Grace Yellow', 'Henry Purple'],
    year: 'September 10, 2023',
    shortDescription: 'Exploring the intersection of quantum computing and machine learning to develop novel algorithms.',
    longDescription: `This project investigates how quantum phenomena, such as superposition and entanglement, can be harnessed to speed up machine learning tasks or solve problems intractable for classical computers. We are designing and simulating quantum algorithms for optimization (e.g., QAOA, VQE), classification (e.g., quantum SVMs), and generative modeling (e.g., quantum GANs). The research involves theoretical development, quantum circuit design, and simulation on quantum computing platforms (e.g., Qiskit, Cirq). We are preparing for the era of fault-tolerant quantum computers while also exploring applications for noisy intermediate-scale quantum (NISQ) devices. Potential impacts on drug discovery, materials science, and financial modeling are considered.`,
    imageUrl: 'https://picsum.photos/seed/quantum-ml/1200/600',
    imageAiHint: 'quantum circuit',
    tags: ['Quantum Computing', 'Machine Learning', 'AI', 'Algorithms', 'QML'],
    status: 'Ongoing',
    demoType: 'mnist', // Changed this project to use mnist for variety
    researchArea: 'Quantum Computing',
  }
];
