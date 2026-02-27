import { Article } from '../types/research';

export const ARTICLES: Article[] = [
  {
    id: 'von-neumann-bottleneck',
    title: 'The End of Von Neumann: Why In-Memory Computing is the Future',
    subtitle: 'Breaking the physical separation between processing and memory to enable the next generation of AI.',
    author: 'Rahul Verma',
    date: 'Feb 12, 2026',
    readTime: '8 min read',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
    content: `
# The End of Von Neumann

For over seven decades, the Von Neumann architecture has been the bedrock of computing. It's a simple, elegant design: a central processing unit (CPU) and a separate memory unit, connected by a bus. But in the era of Large Language Models (LLMs) and real-time edge intelligence, this separation has become a crippling bottleneck.

## The Data Movement Tax

In a traditional system, every single computation requires data to be fetched from memory, moved across the bus, processed in the CPU, and then written back. This "data movement" consumes up to 100 times more energy than the actual computation. As models grow to billions of parameters, we are spending more energy moving numbers than actually calculating them.

## The In-Memory Compute Approach

NeuraEdge addresses this by performing calculations directly where the data lives. In our ReRAM crossbar arrays, the weights of a neural network are stored as analog conductance values. When an input voltage is applied, the resulting current is physically the result of a matrix-vector multiplication — governed by Ohm's Law and Kirchhoff's Current Law.

This isn't just a faster way to compute; it's a fundamental shift in how we interact with silicon. We are moving from digital logic to physical emulation.
    `
  },
  {
    id: 'memristors-101',
    title: 'Memristors 101: Building Synapses with Oxygen Vacancies',
    subtitle: 'A deep dive into the device physics of non-volatile analog memory.',
    author: 'Rahul Verma',
    date: 'Jan 28, 2026',
    readTime: '12 min read',
    category: 'Device Physics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
    content: `
# Memristors 101

The term "memristor" was coined by Leon Chua in 1971, but it wasn't until 2008 that a physical realization was demonstrated. Today, memristors — specifically Resistive Random Access Memory (ReRAM) — are the key to in-memory compute hardware.

## The Physics of Resistance

At the heart of a memristor is a simple metal-insulator-metal stack. By applying a high enough electric field, we can induce the migration of oxygen vacancies within the insulating layer (typically Hafnium Oxide or Tantalum Oxide). These vacancies form a "conductive filament."

## Analog Synapses

Unlike a transistor, which is either ON or OFF, a memristor can be programmed to any resistance value in between. This allows us to store an 8-bit or even 10-bit weight in a single physical device. This high density is what allows NeuraEdge to pack millions of synaptic weights into a few square millimeters of silicon.

The challenge, of course, is reliability. Nanoscale filaments are subject to noise and drift. Our research focuses on hardware-aware training, where we teach neural networks to be resilient to these physical non-idealities.
    `
  },
  {
    id: 'scaling-ai-edge',
    title: 'Scaling AI to the Edge: The Power of Analog Crossbars',
    subtitle: 'Why the future of AI isn\'t in the cloud, but at the sensor edge.',
    author: 'Rahul Verma',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    category: 'Edge AI',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
    content: `
# Scaling AI to the Edge

Cloud-based AI is powerful, but it's expensive, latency-heavy, and raises privacy concerns. For AI to truly integrate into autonomous systems, wearable health monitors, and smart sensors, it needs to run locally.

## The Efficiency Gap

A modern GPU requires hundreds of watts to run a medium-sized transformer model. A drone's battery can't sustain that for more than a few minutes. Analog crossbar arrays operate at sub-milliwatt power levels, achieving energy efficiencies of over 900 TOPS/W (Tera-Operations Per Second per Watt) in simulation.

## Real-Time Response

By eliminating the need to send data to a server, we reduce latency from hundreds of milliseconds to microseconds. For autonomous navigation and real-time signal processing, this is the difference between feasibility and failure.
    `
  },
  {
    id: 'neuromorphic-algorithms',
    title: 'Neuromorphic Algorithms: Beyond Backpropagation',
    subtitle: 'Exploring Spiking Neural Networks (SNNs) and biologically inspired learning.',
    author: 'Rahul Verma',
    date: 'Dec 20, 2025',
    readTime: '10 min read',
    category: 'Algorithms',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=600&fit=crop',
    content: `
# Neuromorphic Algorithms

Most AI today uses Artificial Neural Networks (ANNs) that communicate via continuous values. But the human brain communicates via discrete "spikes." This is the foundation of Spiking Neural Networks (SNNs).

## Temporal Sparsity

In an SNN, a neuron only consumes energy when it fires a spike. If there's no change in the input, the system stays silent. This "temporal sparsity" is why the human brain can perform complex tasks on just 20 watts of power.

## Learning on the Fly

On-chip learning allows the hardware to update its own weights using local rules like Spike-Timing-Dependent Plasticity (STDP). This enables devices to adapt to their environment without requiring retraining cycles in the cloud.
    `
  },
  {
    id: 'physics-of-noise',
    title: 'The Physics of Noise: Embracing Non-Idealities',
    subtitle: 'How we model hardware limitations for robust AI inference.',
    author: 'Rahul Verma',
    date: 'Nov 12, 2025',
    readTime: '9 min read',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    content: `
# The Physics of Noise

In digital computing, noise is an enemy. In analog neuromorphic computing, noise is a reality. Thermal noise, shot noise, and device-to-device variability are inherent at the 20nm scale.

## Stochastic Computing

Instead of fighting noise with expensive error-correction, we model it during training. Many biological processes are inherently stochastic. Adding a controlled level of noise during the training phase can actually help model generalization.

## Robustness by Design

Our simulation framework allows researchers to model these non-idealities directly in PyTorch. By the time a model is deployed on NeuraEdge silicon, it has already learned to operate within the noise envelope of real analog hardware.
    `
  },
  {
    id: 'crossbar-array-design',
    title: 'Crossbar Array Design: Scaling from 64×64 to 1024×1024',
    subtitle: 'Architectural challenges and solutions for scaling analog compute arrays.',
    author: 'Rahul Verma',
    date: 'Feb 20, 2026',
    readTime: '11 min read',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
    content: `
# Crossbar Array Design

The ReRAM crossbar array is the fundamental compute unit in NeuraEdge's architecture. Scaling from small proof-of-concept arrays to production-grade tiles introduces significant engineering challenges.

## Sneak Path Currents

In a passive crossbar (without select transistors), applying voltage to one cell can cause parasitic currents to flow through unselected cells. This "sneak path" problem degrades read accuracy exponentially as array size grows.

## The 1T1R Solution

Our 1T1R (one-transistor, one-resistor) cell structure addresses this by providing individual cell selection. The access transistor isolates each memristor during read and write operations, enabling:

- Precise multi-level programming
- Reduced crosstalk between cells
- Improved endurance and retention

## Scaling Challenges

As arrays scale beyond 128×128, IR drop along the wordlines and bitlines becomes significant. We address this through hierarchical array organization, where large matrices are tiled into smaller sub-arrays with peripheral circuits handling inter-tile communication.

## Simulation Results

Our SPICE-level simulations at 20nm show that 128×128 arrays maintain 8-bit equivalent precision while keeping peripheral overhead under 30% of total tile area.
    `
  },
  {
    id: 'dac-adc-design',
    title: 'Peripheral Circuit Design: DACs, ADCs, and the Analog-Digital Interface',
    subtitle: 'The mixed-signal circuits that bridge the digital and analog worlds.',
    author: 'Rahul Verma',
    date: 'Feb 18, 2026',
    readTime: '10 min read',
    category: 'Circuit Design',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=600&fit=crop',
    content: `
# Peripheral Circuit Design

The crossbar array performs the core analog computation, but the surrounding peripheral circuits determine the overall system performance. DACs, ADCs, and transimpedance amplifiers form the critical interface between the digital controller and the analog compute fabric.

## Input Encoding: DAC Design

Digital activations must be converted to precise analog voltages before being applied to the crossbar wordlines. Our architecture uses current-steering DACs with 8-bit resolution, optimized for:

- Low power consumption (< 100 µW per converter)
- Fast settling time (< 10 ns)
- Monotonic transfer characteristics

## Output Sensing: TIA + ADC

Column currents from the crossbar are sensed by transimpedance amplifiers (TIAs) that convert current to voltage, followed by SAR ADCs for digitization. The TIA bandwidth must exceed the maximum column current variation.

## Energy Budget

In our simulations, peripheral circuits consume approximately 40% of total tile energy. Ongoing optimization focuses on:

- Time-multiplexed ADC sharing across columns
- Sub-threshold biasing for sense amplifiers
- Digital-to-time conversion as an alternative to voltage DACs
    `
  },
  {
    id: 'hardware-aware-training',
    title: 'Hardware-Aware Training: Teaching Neural Networks to Think in Analog',
    subtitle: 'Bridging the gap between ideal software models and noisy analog hardware.',
    author: 'Rahul Verma',
    date: 'Feb 14, 2026',
    readTime: '9 min read',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop',
    content: `
# Hardware-Aware Training

Deploying a trained neural network onto analog hardware is not as simple as loading weights. Device variability, quantization effects, and noise fundamentally alter inference accuracy if not accounted for during training.

## The Simulation-to-Hardware Gap

A model trained on an ideal GPU assumes perfect floating-point arithmetic. When the same weights are programmed into ReRAM cells with ±5% conductance variation, accuracy can drop by 10-20%. This gap must be closed before deployment.

## Noise Injection Training

Our approach injects device-realistic noise models during the forward pass of training:

- **Conductance variation**: Gaussian noise proportional to target conductance
- **Stuck-at faults**: Random cells fixed at high or low resistance
- **Read noise**: Thermal and shot noise at the sensing stage
- **Quantization**: Limiting weight precision to 8-bit or lower

## Results

On MNIST classification, hardware-aware training recovers accuracy from 82% (naive deployment) to 96.5% (with noise injection), approaching the 98.2% achieved on ideal hardware. For CIFAR-10, the recovery is from 68% to 87%.

## Ongoing Work

We are extending this framework to support multi-layer networks and investigating the interaction between noise resilience and model compression techniques like pruning and knowledge distillation.
    `
  },
  {
    id: 'reram-endurance',
    title: 'ReRAM Endurance and Retention: Towards Production-Grade Reliability',
    subtitle: 'Characterizing device lifetime for commercial in-memory compute applications.',
    author: 'Rahul Verma',
    date: 'Feb 8, 2026',
    readTime: '8 min read',
    category: 'Device Physics',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1200&h=600&fit=crop',
    content: `
# ReRAM Endurance and Retention

For in-memory compute to move beyond the lab, ReRAM devices must demonstrate reliability metrics comparable to established memory technologies. Two critical parameters are endurance (write cycles) and retention (data persistence).

## Endurance Characterization

ReRAM endurance varies significantly with programming conditions. Aggressive SET/RESET voltages increase switching speed but accelerate oxide degradation. Our characterization framework models:

- Cycle-to-cycle variability across 10^6 write cycles
- Oxide breakdown statistics using Weibull distributions
- Optimal programming pulse amplitude and duration trade-offs

## Retention Stability

For inference-only applications (where weights are written once), retention is the primary concern. Our target is >10 years at 85°C, which we validate through accelerated testing at elevated temperatures and Arrhenius extrapolation.

## Implications for Architecture

Limited endurance (typically 10^6 to 10^8 cycles) means frequent weight updates are impractical on-chip. This favors an architecture where:

- Weights are programmed at the factory or during infrequent calibration
- On-chip learning is limited to small adaptation layers
- The majority of the array serves as non-volatile inference storage
    `
  },
  {
    id: 'tile-architecture',
    title: 'Multi-Tile Architecture: Building Scalable In-Memory Compute Systems',
    subtitle: 'Composing crossbar tiles into system-level architectures for real workloads.',
    author: 'Rahul Verma',
    date: 'Feb 1, 2026',
    readTime: '10 min read',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=600&fit=crop',
    content: `
# Multi-Tile Architecture

A single 128×128 crossbar tile can execute a 128-dimensional matrix-vector multiplication in one analog step. But real neural network layers often exceed these dimensions, requiring a tiled architecture.

## Tile Composition

Large weight matrices are partitioned across multiple tiles:

- **Row partitioning**: Input activations are broadcast to all tiles in a row
- **Column partitioning**: Partial sums from each tile are accumulated digitally
- **Layer pipelining**: Different layers of the network are mapped to different tile groups

## Inter-Tile Communication

A digital NoC (Network-on-Chip) routes intermediate activations between tile groups. The NoC bandwidth must match the aggregate throughput of all tiles to avoid bottlenecks. Our architecture uses a 2D mesh topology with configurable routing.

## Mapping Neural Networks

We have developed a compiler that automatically maps PyTorch models onto the tile array:

1. Layer-wise weight partitioning across tiles
2. Activation routing schedule generation
3. ADC/DAC resource allocation
4. Latency and energy estimation

## Projected Performance

For a ResNet-18 workload, our multi-tile simulator projects:

- 4×4 tile array (16 tiles total)
- 0.8 ms end-to-end inference latency
- 12 mW total power consumption
- 450 TOPS/W system-level efficiency
    `
  },
  {
    id: 'energy-comparison',
    title: 'Energy Analysis: In-Memory Compute vs. Digital Accelerators',
    subtitle: 'A detailed breakdown of where energy goes in analog vs. digital inference.',
    author: 'Rahul Verma',
    date: 'Jan 22, 2026',
    readTime: '7 min read',
    category: 'Benchmarks',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop',
    content: `
# Energy Analysis: IMC vs. Digital

The primary advantage claimed by in-memory compute is energy efficiency. But where exactly do the savings come from? This analysis breaks down the energy budget for a 128-element MAC operation across three architectures.

## Digital ASIC (45nm)

In a conventional digital accelerator:

- **SRAM read**: 5 pJ per 8-bit weight
- **Multiply**: 0.2 pJ (8×8 bit multiplier)
- **Accumulate**: 0.03 pJ (32-bit adder)
- **Total per MAC**: ~5.2 pJ (dominated by memory access)

## GPU (7nm, Ampere-class)

- **Register file + Cache**: 2-3 pJ per operand
- **FMA unit**: 0.1 pJ
- **Total per MAC**: ~3-5 pJ (plus significant idle power)

## NeuraEdge IMC (20nm, simulated)

- **DAC input encoding**: 0.02 pJ
- **Crossbar VMM**: 0.01 pJ (Ohmic computation)
- **ADC sensing**: 0.05 pJ
- **Total per MAC**: ~0.1 pJ

## Key Insight

The 50× energy advantage comes primarily from eliminating data movement. In the crossbar, the weight never moves — it is physically encoded as a device conductance. The computation is an inherent consequence of applying voltage to a resistive network.

All figures are derived from SPICE simulation and published architectural models.
    `
  },
  {
    id: 'fpga-prototype',
    title: 'FPGA-Assisted Prototyping: Validating Digital Control Logic',
    subtitle: 'Using FPGA platforms to test the digital periphery before silicon tape-out.',
    author: 'Rahul Verma',
    date: 'Jan 10, 2026',
    readTime: '7 min read',
    category: 'Prototyping',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=1200&h=600&fit=crop',
    content: `
# FPGA-Assisted Prototyping

While the analog crossbar array must ultimately be fabricated in silicon, the digital control logic surrounding it can be prototyped and validated on FPGA platforms. This hybrid approach reduces the risk and cost of the eventual tape-out.

## What We Prototype on FPGA

The digital subsystem includes:

- **Tile controller**: Sequencing DAC inputs and ADC reads
- **NoC router**: Inter-tile activation routing
- **Scheduler**: Layer-by-layer execution orchestration
- **Activation functions**: ReLU, sigmoid, and softmax in fixed-point

## Hybrid Validation Setup

Our prototype connects an FPGA (Xilinx Zynq) to a discrete DAC-ADC chain that emulates the crossbar interface. This allows us to:

- Validate timing and control logic at real clock speeds
- Test the compiler output on real hardware
- Measure digital power consumption separately from analog

## Results

The FPGA prototype demonstrates correct end-to-end inference for MNIST at 10 MHz clock speed, with the digital overhead consuming 8 mW. This validates our architectural simulation models and provides confidence for the planned 2027 hybrid prototype milestone.

## Path Forward

The 2027 milestone involves replacing the discrete DAC-ADC chain with actual ReRAM dies in a chiplet configuration, enabling the first hybrid analog-digital inference demonstration.
    `
  },
  {
    id: 'variability-modeling',
    title: 'Device Variability Modeling: From Monte Carlo to Machine Learning',
    subtitle: 'Statistical approaches to modeling and mitigating process variation in ReRAM arrays.',
    author: 'Rahul Verma',
    date: 'Dec 28, 2025',
    readTime: '9 min read',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=600&fit=crop',
    content: `
# Device Variability Modeling

Process variation is one of the most significant challenges for analog in-memory compute. No two ReRAM devices are identical, and this variability directly impacts computational accuracy.

## Sources of Variation

At the 20nm node, the primary sources include:

- **Forming voltage variation**: ±15% across a 128×128 array
- **Cycle-to-cycle (C2C) variation**: σ/µ of 5-10% for conductance
- **Device-to-device (D2D) variation**: σ/µ of 10-20% across the array
- **Temperature dependence**: 0.1%/°C conductance drift

## Monte Carlo Simulation

We perform 10,000-iteration Monte Carlo simulations at the array level, sampling device parameters from measured distributions. This gives us statistical confidence bounds on:

- Bit-error rates for weight storage
- MAC output accuracy distributions
- Worst-case inference accuracy degradation

## ML-Assisted Compact Models

Traditional SPICE compact models are too slow for system-level Monte Carlo. We have trained a neural network surrogate model on 500K SPICE simulation data points. This surrogate model achieves:

- 1000× speedup over SPICE simulation
- <2% error in I-V curve prediction
- Full array simulation in under 1 second

## Implications

Our variability analysis shows that 128×128 arrays maintain >95% inference accuracy (MNIST) across 3-sigma process corners when combined with hardware-aware training — making production-grade reliability achievable.
    `
  },
  {
    id: 'biomedical-applications',
    title: 'In-Memory Compute for Biomedical Interfaces',
    subtitle: 'Enabling on-chip neural signal processing with ultra-low thermal footprint.',
    author: 'Rahul Verma',
    date: 'Dec 10, 2025',
    readTime: '8 min read',
    category: 'Applications',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    content: `
# In-Memory Compute for Biomedical Interfaces

Brain-computer interfaces (BCIs) and implantable neural devices require on-chip signal processing under extreme power and thermal constraints. The tissue damage threshold limits implant power dissipation to approximately 40 mW/cm².

## The Processing Challenge

A typical multi-electrode array records from 256 channels at 30 kHz sampling rate. Real-time spike sorting requires:

- Bandpass filtering (300 Hz–3 kHz) per channel
- Spike detection and alignment
- Feature extraction (typically PCA or wavelet)
- Classification into neuronal units

Performing all this in software requires streaming data off-chip, consuming milliwatts of communication power.

## Analog In-Memory Solution

NeuraEdge's crossbar arrays can implement the feature extraction and classification stages directly in analog:

- **Filter weights** stored as conductance values
- **Multi-channel processing** via parallel VMM
- **Sub-microwatt per channel** power consumption

## Thermal Analysis

Our thermal simulations show that a 64×64 crossbar tile operating at 10 µW generates <0.01°C temperature rise in surrounding tissue — well within safety margins.

## Future Directions

We are exploring integration with CMOS neural amplifier front-ends (such as Intan RHD chips) to create a fully integrated neural recording and processing SoC.
    `
  },
  {
    id: 'analog-compute-precision',
    title: 'Precision in Analog Compute: How Many Bits Do You Really Need?',
    subtitle: 'Analyzing the relationship between analog precision and inference accuracy.',
    author: 'Rahul Verma',
    date: 'Nov 25, 2025',
    readTime: '8 min read',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200&h=600&fit=crop',
    content: `
# Precision in Analog Compute

One of the most frequently asked questions about in-memory compute is: how many bits of precision can an analog system actually achieve? And how many does it need?

## The Precision Hierarchy

Analog precision in a crossbar system is determined by multiple factors:

- **Weight precision**: Number of distinguishable conductance levels (typically 4-8 bits)
- **Input precision**: DAC resolution (typically 4-8 bits)
- **Output precision**: ADC resolution (typically 8-12 bits)
- **Effective MAC precision**: Limited by the weakest link, typically weight precision

## How Many Bits Do We Need?

Research has shown that inference accuracy degrades gracefully with reduced precision:

| Precision | MNIST | CIFAR-10 | ResNet-18 (ImageNet) |
|-----------|-------|----------|----------------------|
| FP32      | 98.5% | 93.2%    | 69.8%                |
| 8-bit     | 98.2% | 92.8%    | 69.1%                |
| 4-bit     | 97.5% | 90.1%    | 65.3%                |
| 2-bit     | 95.0% | 82.5%    | 52.1%                |

## The Sweet Spot

For edge inference workloads, 8-bit precision offers the best trade-off between accuracy and hardware cost. This is why NeuraEdge targets 8-bit equivalent precision — achievable with current ReRAM technology and reasonable peripheral circuit complexity.

## Beyond Uniform Quantization

We are investigating mixed-precision approaches where sensitive layers use higher precision while less critical layers operate at 4-bit, reducing overall energy and area overhead.
    `
  }
];
