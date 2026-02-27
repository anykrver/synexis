export const PERFORMANCE_METRICS = [
  {
    label: "Energy Efficiency",
    neuroEdge: "< 0.1 pJ",
    gpu: "~10 pJ",
    cpu: "~100 pJ",
    unit: "per MAC"
  },
  {
    label: "Latency",
    neuroEdge: "Ultra-Low",
    gpu: "Medium",
    cpu: "High",
    unit: "In-situ"
  },
  {
    label: "Scaling",
    neuroEdge: "O(1)",
    gpu: "O(N)",
    cpu: "O(N²)",
    unit: "Time Complexity"
  }
];

export const HERO_STATS = [
  { value: 100, suffix: 'x', label: 'Efficiency' },
  { value: 1, prefix: '<', suffix: 'µs', label: 'Latency' },
  { value: 1000, suffix: '+', label: 'TOPS/W' },
];

export const TECHNOLOGY_CARDS = [
  {
    title: 'ReRAM Crossbar',
    description: 'Memristive crossbar arrays storing neural network weights as analog conductance values. Computation happens where data lives — eliminating the memory wall.',
    icon: 'grid',
    tag: 'In-Memory Compute',
  },
  {
    title: 'Analog MAC',
    description: 'Single-cycle multiply-accumulate operations using Ohm\'s law and Kirchhoff\'s current law. Matrix-vector multiplication at the speed of physics.',
    icon: 'zap',
    tag: 'O(1) Operations',
  },
  {
    title: 'AI Acceleration',
    description: 'Native neural network inference without the von Neumann bottleneck. Purpose-built for convolutional, recurrent, and transformer architectures.',
    icon: 'brain',
    tag: 'Neural Engine',
  },
  {
    title: 'Energy Efficiency',
    description: 'Sub-picojoule operations — 100x more efficient than state-of-the-art GPUs. Enabling AI at the edge without the data center power bill.',
    icon: 'leaf',
    tag: '< 0.1 pJ / MAC',
  },
];

export const ROADMAP_PHASES = [
  { year: '2024', title: 'Simulation & Emulation', desc: 'PyTorch integration of hardware-aware noise models and device-level simulation validation.', status: 'completed' },
  { year: '2025', title: 'FPGA Prototype', desc: 'Digital logic verification of spike routing architecture with real-time inference demos.', status: 'current' },
  { year: '2026', title: 'Test Chip Tapeout', desc: 'First 65nm analog/mixed-signal test vehicle with integrated ADC/DAC.', status: 'upcoming' },
  { year: '2027', title: 'Commercial Silicon', desc: 'PCIe accelerator card for edge inference — production-ready for enterprise deployment.', status: 'upcoming' }
];

export const NAV_LINKS = [
  { label: "Technology", href: "#technology" },
  { label: "Architecture", href: "#architecture" },
  { label: "Performance", href: "#performance" },
  { label: "Roadmap", href: "#roadmap" },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/anykrver/reram-simulation', icon: 'github' },
  { label: 'Twitter', href: '#', icon: 'twitter' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
];
