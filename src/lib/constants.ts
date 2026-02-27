export const PERFORMANCE_METRICS = [
  {
    label: "Energy Efficiency",
    neuroEdge: "~0.1 pJ",
    gpu: "~10 pJ",
    cpu: "~100 pJ",
    unit: "per MAC"
  },
  {
    label: "System Efficiency",
    neuroEdge: "900–1000",
    gpu: "~10",
    cpu: "~0.1",
    unit: "TOPS/W"
  },
  {
    label: "Inference Latency",
    neuroEdge: "<1µs",
    gpu: "~100µs",
    cpu: "~1ms",
    unit: "end-to-end"
  }
];

export const HERO_STATS = [
  { value: 1, prefix: '<', suffix: 'µs', label: 'Inference Latency' },
  { value: 900, suffix: '+', label: 'TOPS/W' },
  { value: 0.1, prefix: '<', suffix: ' pJ', label: 'Energy / MAC' },
];

export const TECHNOLOGY_CARDS = [
  {
    title: 'Analog Conductance Storage',
    description: 'Weights are stored as analog conductance values inside 1T1R ReRAM cells. Non-volatile retention eliminates constant refresh and reduces standby energy.',
    icon: 'grid',
    tag: 'Weight Storage',
  },
  {
    title: 'Parallel Current Summation',
    description: 'Input activations applied as voltage pulses. Ohm\'s and Kirchhoff\'s laws perform parallel current summation — executing matrix-vector multiplication in a single analog step.',
    icon: 'zap',
    tag: 'Analog Compute',
  },
  {
    title: 'Zero Data Movement',
    description: 'No weight fetch. No off-array data movement. No memory wall. Compute happens directly within the resistive memory arrays.',
    icon: 'brain',
    tag: 'In-Memory',
  },
  {
    title: 'Ultra-Low Energy',
    description: 'Sub-picojoule energy per MAC operation. 900+ TOPS/W system-level efficiency at 20nm node with 128×128 crossbar arrays.',
    icon: 'leaf',
    tag: '< 0.1 pJ / MAC',
  },
];

export const ROADMAP_PHASES = [
  { year: '2026', title: 'Simulation Validation', desc: 'Crossbar simulation validation and architecture refinement. Device variability modeling and endurance characterization.', status: 'current' },
  { year: '2027', title: 'FPGA Hybrid Prototype', desc: 'FPGA-assisted hybrid prototype for digital logic verification and peripheral energy optimization.', status: 'upcoming' },
  { year: '2028', title: 'Multi-Tile Validation', desc: 'Multi-tile architecture validation with tile-level scaling and system integration testing.', status: 'upcoming' },
  { year: 'Future', title: 'Full Silicon Tape-out', desc: 'Full silicon tape-out targeting production-grade in-memory compute for edge AI deployment.', status: 'upcoming' }
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
