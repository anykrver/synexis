import { Article } from '../types/research';

export const ARTICLES: Article[] = [
  {
    id: 'von-neumann-bottleneck',
    title: 'The End of Von Neumann: Why In-Memory Computing is the Future',
    subtitle: 'Breaking the physical separation between processing and memory to enable the next generation of AI.',
    author: 'Dr. Aris Thorne',
    date: 'Feb 12, 2026',
    readTime: '8 min read',
    category: 'Architecture',
    image: 'https://picsum.photos/seed/cpu/1200/600',
    content: `
# The End of Von Neumann

For over seven decades, the Von Neumann architecture has been the bedrock of computing. It's a simple, elegant design: a central processing unit (CPU) and a separate memory unit, connected by a bus. But in the era of Large Language Models (LLMs) and real-time edge intelligence, this separation has become a crippling bottleneck.

## The Data Movement Tax

In a traditional system, every single computation requires data to be fetched from memory, moved across the bus, processed in the CPU, and then written back. This "data movement" consumes up to 100 times more energy than the actual computation. As models grow to billions of parameters, we are spending more energy moving numbers than actually calculating them.

## The Neuro-Edge Approach

Neuro-Edge flips this script. By using **In-Memory Computing (IMC)**, we perform calculations directly where the data lives. In our ReRAM crossbar arrays, the weights of a neural network are stored as analog conductance values. When an input voltage is applied, the resulting current is physically the result of a matrix-vector multiplication—governed by Ohm's Law and Kirchhoff's Current Law.

This isn't just a faster way to compute; it's a fundamental shift in how we interact with silicon. We are moving from digital logic to physical emulation.
    `
  },
  {
    id: 'memristors-101',
    title: 'Memristors 101: Building Synapses with Oxygen Vacancies',
    subtitle: 'A deep dive into the device physics of non-volatile analog memory.',
    author: 'Elena Vance',
    date: 'Jan 28, 2026',
    readTime: '12 min read',
    category: 'Physics',
    image: 'https://picsum.photos/seed/atom/1200/600',
    content: `
# Memristors 101

The term "memristor" was coined by Leon Chua in 1971, but it wasn't until 2008 that a physical realization was demonstrated. Today, memristors—specifically Resistive Random Access Memory (ReRAM)—are the key to neuromorphic hardware.

## The Physics of Resistance

At the heart of a memristor is a simple metal-insulator-metal stack. By applying a high enough electric field, we can induce the migration of oxygen vacancies within the insulating layer (typically Hafnium Oxide or Tantalum Oxide). These vacancies form a "conductive filament."

## Analog Synapses

Unlike a transistor, which is either ON or OFF, a memristor can be programmed to any resistance value in between. This allows us to store an 8-bit or even 10-bit weight in a single physical device. This high density is what allows Neuro-Edge to pack millions of synapses into a few square millimeters of silicon.

The challenge, of course, is reliability. Nanoscale filaments are subject to noise and drift. Our research focuses on "Hardware-Aware Training," where we teach neural networks to be resilient to these physical non-idealities.
    `
  },
  {
    id: 'scaling-ai-edge',
    title: 'Scaling AI to the Edge: The Power of Analog Crossbars',
    subtitle: 'Why the future of AI isn\'t in the cloud, but in the palm of your hand.',
    author: 'Marcus Chen',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    category: 'Edge AI',
    image: 'https://picsum.photos/seed/edge/1200/600',
    content: `
# Scaling AI to the Edge

Cloud-based AI is powerful, but it's expensive, latency-heavy, and raises massive privacy concerns. For AI to truly integrate into our lives—in autonomous drones, wearable health monitors, and smart sensors—it needs to run locally.

## The Efficiency Gap

A modern GPU requires hundreds of watts to run a medium-sized transformer. A drone's battery can't sustain that for more than a few minutes. Neuro-Edge's analog crossbars operate at sub-milliwatt power levels, achieving energy efficiencies of over 100 TOPS/W (Tera-Operations Per Second per Watt).

## Real-Time Response

By eliminating the need to send data to a server, we reduce latency from hundreds of milliseconds to microseconds. This is the difference between a drone avoiding a collision and hitting an obstacle.
    `
  },
  {
    id: 'neuromorphic-algorithms',
    title: 'Neuromorphic Algorithms: Beyond Backpropagation',
    subtitle: 'Exploring Spiking Neural Networks (SNNs) and biologically inspired learning.',
    author: 'Dr. Sarah Jenkins',
    date: 'Dec 20, 2025',
    readTime: '10 min read',
    category: 'Algorithms',
    image: 'https://picsum.photos/seed/brain/1200/600',
    content: `
# Neuromorphic Algorithms

Most AI today uses Artificial Neural Networks (ANNs) that communicate via continuous values. But the human brain communicates via discrete "spikes." This is the foundation of Spiking Neural Networks (SNNs).

## Temporal Sparsity

In an SNN, a neuron only consumes energy when it fires a spike. If there's no change in the input, the system stays silent. This "temporal sparsity" is why the human brain can perform complex tasks on just 20 watts of power.

## Learning on the Fly

We are also researching "On-Chip Learning," where the hardware can update its own weights using local rules like Spike-Timing-Dependent Plasticity (STDP). This allows devices to adapt to their environment without needing a massive retraining cycle in the cloud.
    `
  },
  {
    id: 'physics-of-noise',
    title: 'The Physics of Noise: Embracing Non-Idealities',
    subtitle: 'How we turned hardware limitations into a feature for robust AI.',
    author: 'Julian Rossi',
    date: 'Nov 12, 2025',
    readTime: '9 min read',
    category: 'Research',
    image: 'https://picsum.photos/seed/noise/1200/600',
    content: `
# The Physics of Noise

In digital computing, noise is an enemy. In analog neuromorphic computing, noise is a reality. Thermal noise, shot noise, and device-to-device variability are inherent at the 20nm scale.

## Stochastic Computing

Instead of fighting noise with expensive error-correction, we embrace it. Many biological processes are inherently stochastic. We've found that adding a certain level of noise during the training phase actually helps the model generalize better to real-world data.

## Robustness by Design

Our Neuro-Sim SDK allows researchers to model these non-idealities directly in PyTorch. By the time a model is deployed on Neuro-Edge silicon, it has already "learned" to ignore the noise of the physical world.
    `
  }
];
