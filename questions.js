const questionsDatabase = {
  "Unit I: Electronic Theory": [
    {
      "question": "What does the gradient of a scalar field represent?",
      "options": {
        "a": "Rate of change of the field in a specific direction",
        "b": "Total magnitude of the field",
        "c": "Divergence of the field",
        "d": "Curl of the field"
      },
      "correct": "a",
      "explanation": "Only the gradient describes the rate and direction of change in a scalar field; others relate to different vector operations."
    },
    {
      "question": "Which of the following is a statement of Gauss\u2019s theorem?",
      "options": {
        "a": "The line integral of a vector field equals the surface integral of its curl",
        "b": "The surface integral of a vector field equals the volume integral of its divergence",
        "c": "The divergence of a vector field is zero",
        "d": "The curl of a vector field is zero"
      },
      "correct": "b",
      "explanation": "Only Gauss\u2019s theorem links the surface integral to the volume integral of divergence; others refer to different laws."
    },
    {
      "question": "What is the physical significance of the divergence of a vector field?",
      "options": {
        "a": "It measures the rotation of the field",
        "b": "It measures the source or sink strength at a point",
        "c": "It measures the field\u2019s magnitude",
        "d": "It measures the field\u2019s direction"
      },
      "correct": "b",
      "explanation": "Divergence measures source or sink strength; it doesn\u2019t describe rotation or direction."
    },
    {
      "question": "Which equation relates the electric field to the charge density?",
      "options": {
        "a": "Laplace equation",
        "b": "Poisson equation",
        "c": "Continuity equation",
        "d": "Maxwell\u2019s third equation"
      },
      "correct": "b",
      "explanation": "The correct equation links electric field and charge; other options deal with magnetic or temporal relationships."
    },
    {
      "question": "What is the integral form of Maxwell\u2019s first equation?",
      "options": {
        "a": "\u222eE\u00b7dA = Q/\u03b5\u2080",
        "b": "\u222eB\u00b7dA = 0",
        "c": "\u222eE\u00b7dl = -d\u03a6_B/dt",
        "d": "\u222eB\u00b7dl = \u03bc\u2080I + \u03bc\u2080\u03b5\u2080d\u03a6_E/dt"
      },
      "correct": "a",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "What correction did Maxwell introduce to Ampere\u2019s Circuital Law?",
      "options": {
        "a": "Magnetic field term",
        "b": "Displacement current",
        "c": "Electric field term",
        "d": "Charge density term"
      },
      "correct": "b",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "The continuity equation represents the conservation of:",
      "options": {
        "a": "Energy",
        "b": "Momentum",
        "c": "Charge",
        "d": "Mass"
      },
      "correct": "c",
      "explanation": "The continuity equation ensures charge conservation; other options relate to different physical quantities."
    },
    {
      "question": "Which of Maxwell\u2019s equations indicates that magnetic monopoles do not exist?",
      "options": {
        "a": "\u2207\u00b7E = \u03c1/\u03b5\u2080",
        "b": "\u2207\u00b7B = 0",
        "c": "\u2207\u00d7E = -\u2202B/\u2202t",
        "d": "\u2207\u00d7B = \u03bc\u2080J + \u03bc\u2080\u03b5\u2080\u2202E/\u2202t"
      },
      "correct": "b",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "What is the physical significance of Stokes\u2019 theorem?",
      "options": {
        "a": "Relates surface integral of divergence to volume integral",
        "b": "Relates line integral of a vector field to surface integral of its curl",
        "c": "Relates electric field to magnetic field",
        "d": "Relates charge to potential"
      },
      "correct": "b",
      "explanation": "Stokes\u2019 theorem relates a line integral to a surface integral of curl; alternatives describe different theorems."
    },
    {
      "question": "Laplace\u2019s equation is a special case of Poisson\u2019s equation when:",
      "options": {
        "a": "Charge density is zero",
        "b": "Electric field is zero",
        "c": "Magnetic field is zero",
        "d": "Current density is zero"
      },
      "correct": "a",
      "explanation": "Poisson\u2019s equation includes charge density; Laplace\u2019s doesn\u2019t and applies only when charge is zero."
    },
    {
      "question": "What is the curl of a vector field a measure of?",
      "options": {
        "a": "The field\u2019s magnitude",
        "b": "The field\u2019s rotation at a point",
        "c": "The field\u2019s divergence",
        "d": "The field\u2019s potential"
      },
      "correct": "b",
      "explanation": "Curl represents the rotation of a field; the other options describe unrelated characteristics like magnitude or divergence."
    },
    {
      "question": "Which Maxwell equation relates electric field to changing magnetic flux?",
      "options": {
        "a": "\u2207\u00b7E = \u03c1/\u03b5\u2080",
        "b": "\u2207\u00b7B = 0",
        "c": "\u2207\u00d7E = -\u2202B/\u2202t",
        "d": "\u2207\u00d7B = \u03bc\u2080J + \u03bc\u2080\u03b5\u2080\u2202E/\u2202t"
      },
      "correct": "c",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "The differential form of Ampere\u2019s law (with Maxwell\u2019s correction) includes:",
      "options": {
        "a": "Displacement current",
        "b": "Magnetic flux",
        "c": "Electric potential",
        "d": "Charge density"
      },
      "correct": "a",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "In Maxwell\u2019s equations, what does \u03b5\u2080 represent?",
      "options": {
        "a": "Magnetic permeability",
        "b": "Electric permittivity",
        "c": "Conductivity",
        "d": "Resistivity"
      },
      "correct": "b",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "The vector operator \u2207 is used to calculate:",
      "options": {
        "a": "Gradient, divergence, and curl",
        "b": "Magnitude and direction only",
        "c": "Electric field only",
        "d": "Magnetic field only"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Poisson\u2019s equation is used to find:",
      "options": {
        "a": "Electric potential in a region with charge",
        "b": "Magnetic field strength",
        "c": "Current density",
        "d": "Electromagnetic wave speed"
      },
      "correct": "a",
      "explanation": "Poisson\u2019s equation includes charge density; Laplace\u2019s doesn\u2019t and applies only when charge is zero."
    },
    {
      "question": "Which theorem relates the flux of a vector field to its divergence?",
      "options": {
        "a": "Stokes\u2019 theorem",
        "b": "Gauss\u2019s theorem",
        "c": "Green\u2019s theorem",
        "d": "Ampere\u2019s theorem"
      },
      "correct": "b",
      "explanation": "Divergence measures source or sink strength; it doesn\u2019t describe rotation or direction."
    },
    {
      "question": "Maxwell\u2019s equations describe the relationship between:",
      "options": {
        "a": "Electric and magnetic fields",
        "b": "Charge and mass",
        "c": "Energy and momentum",
        "d": "Force and velocity"
      },
      "correct": "a",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "The physical significance of \u2207\u00d7B = \u03bc\u2080J + \u03bc\u2080\u03b5\u2080\u2202E/\u2202t is:",
      "options": {
        "a": "Electric field due to charges",
        "b": "Magnetic field due to currents and changing electric fields",
        "c": "Conservation of energy",
        "d": "Conservation of momentum"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What does the term \u03bc\u2080 represent in Maxwell\u2019s equations?",
      "options": {
        "a": "Electric permittivity",
        "b": "Magnetic permeability",
        "c": "Conductivity",
        "d": "Resistivity"
      },
      "correct": "a",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "The continuity equation is derived from:",
      "options": {
        "a": "Conservation of charge",
        "b": "Conservation of energy",
        "c": "Conservation of momentum",
        "d": "Conservation of mass"
      },
      "correct": "a",
      "explanation": "The continuity equation ensures charge conservation; other options relate to different physical quantities."
    },
    {
      "question": "Which of the following is NOT a vector field operation?",
      "options": {
        "a": "Gradient",
        "b": "Divergence",
        "c": "Curl",
        "d": "Laplacian"
      },
      "correct": "d",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Maxwell\u2019s displacement current accounts for:",
      "options": {
        "a": "Changing electric fields in regions with no conduction current",
        "b": "Static electric fields",
        "c": "Constant magnetic fields",
        "d": "Charge accumulation"
      },
      "correct": "a",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "The integral form of \u2207\u00b7B = 0 implies:",
      "options": {
        "a": "Magnetic field lines are closed loops",
        "b": "Magnetic field lines are open",
        "c": "Magnetic field is zero",
        "d": "Electric field is zero"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which equation is used to describe electromagnetic waves?",
      "options": {
        "a": "Laplace equation",
        "b": "Maxwell\u2019s equations",
        "c": "Continuity equation",
        "d": "Poisson equation"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The physical significance of \u2207\u00b7E = \u03c1/\u03b5\u2080 is:",
      "options": {
        "a": "Electric field due to charges",
        "b": "Magnetic field due to currents",
        "c": "Electric field due to changing magnetic flux",
        "d": "Magnetic field due to changing electric flux"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Ampere\u2019s Circuital Law in its original form relates:",
      "options": {
        "a": "Magnetic field to electric current",
        "b": "Electric field to magnetic current",
        "c": "Electric field to charge",
        "d": "Magnetic field to charge"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The differential form of Maxwell\u2019s equations uses:",
      "options": {
        "a": "Divergence and curl operators",
        "b": "Gradient and Laplacian operators",
        "c": "Integral and surface operators",
        "d": "Line and volume operators"
      },
      "correct": "a",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "What is the significance of the term \u2202E/\u2202t in Maxwell\u2019s equations?",
      "options": {
        "a": "Rate of change of magnetic field",
        "b": "Rate of change of electric field",
        "c": "Rate of change of charge density",
        "d": "Rate of change of current density"
      },
      "correct": "b",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "Which operation is used to find the potential of a scalar field?",
      "options": {
        "a": "Curl",
        "b": "Divergence",
        "c": "Gradient",
        "d": "Laplacian"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The integral form of \u2207\u00d7E = -\u2202B/\u2202t is:",
      "options": {
        "a": "\u222eE\u00b7dA = Q/\u03b5\u2080",
        "b": "\u222eE\u00b7dl = -d\u03a6_B/dt",
        "c": "\u222eB\u00b7dA = 0",
        "d": "\u222eB\u00b7dl = \u03bc\u2080I"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What does the Laplacian operator act on?",
      "options": {
        "a": "Vector fields only",
        "b": "Scalar fields only",
        "c": "Both scalar and vector fields",
        "d": "Neither scalar nor vector fields"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Maxwell\u2019s equations are valid for:",
      "options": {
        "a": "Static fields only",
        "b": "Dynamic fields only",
        "c": "Both static and dynamic fields",
        "d": "Neither static nor dynamic fields"
      },
      "correct": "c",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "The term \u03c1 in Maxwell\u2019s equations represents:",
      "options": {
        "a": "Current density",
        "b": "Charge density",
        "c": "Magnetic flux",
        "d": "Electric flux"
      },
      "correct": "b",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "Which of the following is a qualitative application of Stokes\u2019 theorem?",
      "options": {
        "a": "Calculating charge density",
        "b": "Relating magnetic field to current",
        "c": "Relating line integral to surface integral of curl",
        "d": "Calculating electric potential"
      },
      "correct": "c",
      "explanation": "Stokes\u2019 theorem relates a line integral to a surface integral of curl; alternatives describe different theorems."
    },
    {
      "question": "The physical significance of \u2207\u00d7B is:",
      "options": {
        "a": "Rotation of the magnetic field",
        "b": "Divergence of the magnetic field",
        "c": "Gradient of the magnetic field",
        "d": "Potential of the magnetic field"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What does the term J represent in Maxwell\u2019s equations?",
      "options": {
        "a": "Charge density",
        "b": "Current density",
        "c": "Magnetic flux density",
        "d": "Electric flux density"
      },
      "correct": "b",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "Which Maxwell equation is associated with Faraday\u2019s law?",
      "options": {
        "a": "\u2207\u00b7E = \u03c1/\u03b5\u2080",
        "b": "\u2207\u00b7B = 0",
        "c": "\u2207\u00d7E = -\u2202B/\u2202t",
        "d": "\u2207\u00d7B = \u03bc\u2080J + \u03bc\u2080\u03b5\u2080\u2202E/\u2202t"
      },
      "correct": "c",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    },
    {
      "question": "The continuity equation is expressed as:",
      "options": {
        "a": "\u2207\u00b7J + \u2202\u03c1/\u2202t = 0",
        "b": "\u2207\u00b7E = \u03c1/\u03b5\u2080",
        "c": "\u2207\u00d7B = \u03bc\u2080J",
        "d": "\u2207\u00b7B = 0"
      },
      "correct": "a",
      "explanation": "The continuity equation ensures charge conservation; other options relate to different physical quantities."
    },
    {
      "question": "The physical significance of Maxwell\u2019s correction to Ampere\u2019s law is:",
      "options": {
        "a": "Accounts for static magnetic fields",
        "b": "Explains electromagnetic wave propagation",
        "c": "Describes charge conservation",
        "d": "Relates electric potential to charge"
      },
      "correct": "b",
      "explanation": "Only the correct Maxwell equation reflects the specific physical principle being asked; others apply to different electromagnetic laws."
    }
  ],
  "Unit II: Lasers and Applications": [
    {
      "question": "What is the process by which an atom emits light spontaneously?",
      "options": {
        "a": "Stimulated emission",
        "b": "Spontaneous emission",
        "c": "Absorption",
        "d": "Population inversion"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which condition is necessary for laser action to occur?",
      "options": {
        "a": "Population inversion",
        "b": "Spontaneous emission dominance",
        "c": "Absorption dominance",
        "d": "Equal population in energy levels"
      },
      "correct": "a",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "What is the role of the resonant cavity in a laser?",
      "options": {
        "a": "Absorbs light",
        "b": "Amplifies light through multiple reflections",
        "c": "Generates spontaneous emission",
        "d": "Reduces population inversion"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Which laser uses a gas mixture as its active medium?",
      "options": {
        "a": "Nd-YAG laser",
        "b": "Semiconductor laser",
        "c": "He-Ne laser",
        "d": "Ruby laser"
      },
      "correct": "c",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Einstein\u2019s A coefficient is associated with:",
      "options": {
        "a": "Stimulated emission",
        "b": "Spontaneous emission",
        "c": "Absorption",
        "d": "Population inversion"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What is the primary application of holography?",
      "options": {
        "a": "Data storage and 3D imaging",
        "b": "Light amplification",
        "c": "Fiber optic communication",
        "d": "Quantum computing"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which laser is commonly used in medical applications like eye surgery?",
      "options": {
        "a": "He-Ne laser",
        "b": "Nd-YAG laser",
        "c": "Semiconductor laser",
        "d": "CO\u2082 laser"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "What is a metastable state in a laser system?",
      "options": {
        "a": "A state with a very short lifetime",
        "b": "A state where electrons remain for a relatively long time",
        "c": "The ground state of an atom",
        "d": "A state with no energy"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "The energy levels in a semiconductor laser are associated with:",
      "options": {
        "a": "Atomic transitions",
        "b": "Bandgap transitions",
        "c": "Molecular vibrations",
        "d": "Nuclear transitions"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "What mechanism is NOT typically used to achieve population inversion?",
      "options": {
        "a": "Optical pumping",
        "b": "Electrical discharge",
        "c": "Chemical reaction",
        "d": "Spontaneous emission"
      },
      "correct": "d",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What is stimulated emission?",
      "options": {
        "a": "Emission of light without external influence",
        "b": "Emission of light triggered by an incoming photon",
        "c": "Absorption of light by an atom",
        "d": "Scattering of light by an atom"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "The Nd-YAG laser uses which material as its active medium?",
      "options": {
        "a": "Helium-Neon gas",
        "b": "Yttrium Aluminum Garnet",
        "c": "Silicon semiconductor",
        "d": "Ruby crystal"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Einstein\u2019s B coefficient relates to:",
      "options": {
        "a": "Spontaneous emission",
        "b": "Stimulated emission and absorption",
        "c": "Population inversion",
        "d": "Metastable state"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What is the purpose of optical pumping in lasers?",
      "options": {
        "a": "To cool the laser medium",
        "b": "To excite atoms to higher energy levels",
        "c": "To reduce light intensity",
        "d": "To absorb emitted light"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Holography involves the use of:",
      "options": {
        "a": "Incoherent light",
        "b": "Coherent light",
        "c": "Ultraviolet light",
        "d": "Infrared light"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which laser is commonly used in barcode scanners?",
      "options": {
        "a": "He-Ne laser",
        "b": "Nd-YAG laser",
        "c": "Semiconductor laser",
        "d": "CO\u2082 laser"
      },
      "correct": "c",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Population inversion occurs when:",
      "options": {
        "a": "More atoms are in the ground state",
        "b": "More atoms are in an excited state",
        "c": "Equal atoms are in ground and excited states",
        "d": "No atoms are in the excited state"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The He-Ne laser emits light primarily in which spectrum?",
      "options": {
        "a": "Ultraviolet",
        "b": "Visible (red)",
        "c": "Infrared",
        "d": "X-ray"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "What is the primary advantage of a semiconductor laser?",
      "options": {
        "a": "High power output",
        "b": "Compact size and efficiency",
        "c": "Long wavelength emission",
        "d": "Low coherence"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Which process leads to the coherence of laser light?",
      "options": {
        "a": "Spontaneous emission",
        "b": "Stimulated emission",
        "c": "Absorption",
        "d": "Scattering"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "The resonant cavity in a laser consists of:",
      "options": {
        "a": "Two mirrors, one fully reflective and one partially reflective",
        "b": "A single reflective mirror",
        "c": "A lens and a mirror",
        "d": "Two lenses"
      },
      "correct": "a",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Which laser is used for cutting and welding metals?",
      "options": {
        "a": "He-Ne laser",
        "b": "CO\u2082 laser",
        "c": "Semiconductor laser",
        "d": "Ruby laser"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "The term LASER stands for:",
      "options": {
        "a": "Light Amplification by Stimulated Emission of Radiation",
        "b": "Light Absorption by Spontaneous Emission of Radiation",
        "c": "Light Amplification by Spontaneous Emission of Radiation",
        "d": "Light Absorption by Stimulated Emission of Radiation"
      },
      "correct": "a",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "What is the role of the metastable state in lasers?",
      "options": {
        "a": "Absorbs incoming photons",
        "b": "Allows atoms to stay in an excited state longer",
        "c": "Reduces light intensity",
        "d": "Prevents population inversion"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Which of the following NOT a characteristic of laser light?",
      "options": {
        "a": "Coherence",
        "b": "Monochromaticity",
        "c": "Divergence",
        "d": "High intensity"
      },
      "correct": "c",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "The energy difference between two levels in a laser determines:",
      "options": {
        "a": "The wavelength of emitted light",
        "b": "The intensity of emitted light",
        "c": "The coherence of emitted light",
        "d": "The direction of emitted light"
      },
      "correct": "a",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Which excitation mechanism is used in a He-Ne laser?",
      "options": {
        "a": "Optical pumping",
        "b": "Electrical discharge",
        "c": "Chemical reaction",
        "d": "Thermal excitation"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Holography records both:",
      "options": {
        "a": "Amplitude and phase of light",
        "b": "Amplitude and frequency of light",
        "c": "Phase and wavelength of light",
        "d": "Frequency and intensity of light"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which laser has a solid-state medium?",
      "options": {
        "a": "He-Ne laser",
        "b": "CO\u2082 laser",
        "c": "Nd-YAG laser",
        "d": "Argon laser"
      },
      "correct": "c",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "The primary function of the partially reflective mirror in a laser is to:",
      "options": {
        "a": "Absorb light",
        "b": "Allow some light to exit as the laser beam",
        "c": "Reflect all light back",
        "d": "Scatter light"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "What is the primary source of energy in a ruby laser?",
      "options": {
        "a": "Electrical discharge",
        "b": "Optical pumping",
        "c": "Chemical reaction",
        "d": "Thermal excitation"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Which property of laser light makes it suitable for communication?",
      "options": {
        "a": "High divergence",
        "b": "Monochromaticity",
        "c": "Low intensity",
        "d": "Incoherence"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "The active medium in a CO\u2082 laser is:",
      "options": {
        "a": "A gas mixture",
        "b": "A solid crystal",
        "c": "A semiconductor",
        "d": "A liquid dye"
      },
      "correct": "a",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "What does the Einstein B coefficient describe?",
      "options": {
        "a": "Probability of spontaneous emission",
        "b": "Probability of stimulated emission or absorption",
        "c": "Probability of population inversion",
        "d": "Probability of light scattering"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which laser is used in optical data storage devices?",
      "options": {
        "a": "He-Ne laser",
        "b": "Nd-YAG laser",
        "c": "Semiconductor laser",
        "d": "CO\u2082 laser"
      },
      "correct": "c",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "The process of population inversion requires:",
      "options": {
        "a": "More atoms in the ground state",
        "b": "External energy input",
        "c": "Spontaneous emission",
        "d": "Light absorption only"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which of the following lasers operates in the infrared spectrum?",
      "options": {
        "a": "He-Ne laser",
        "b": "Nd-YAG laser",
        "c": "Ruby laser",
        "d": "Argon laser"
      },
      "correct": "b",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Holography is used in:",
      "options": {
        "a": "Barcode scanning",
        "b": "3D image reconstruction",
        "c": "Metal cutting",
        "d": "Fiber optic transmission"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The coherence of laser light refers to:",
      "options": {
        "a": "Uniform wavelength and phase",
        "b": "High intensity",
        "c": "Broad spectrum",
        "d": "Random phase"
      },
      "correct": "a",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    },
    {
      "question": "Which laser is NOT typically used for high-power applications?",
      "options": {
        "a": "CO\u2082 laser",
        "b": "Nd-YAG laser",
        "c": "He-Ne laser",
        "d": "Fiber laser"
      },
      "correct": "c",
      "explanation": "Only one process describes the correct emission mechanism; others represent opposite or unrelated processes."
    }
  ],
  "Unit III: Fiber Optics": [
    {
      "question": "What principle allows light to travel through an optical fiber?",
      "options": {
        "a": "Refraction",
        "b": "Total internal reflection",
        "c": "Diffraction",
        "d": "Dispersion"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The acceptance angle of an optical fiber is defined as:",
      "options": {
        "a": "The angle at which light is completely absorbed",
        "b": "The maximum angle at which light can enter and still be guided",
        "c": "The angle of refraction at the core-cladding interface",
        "d": "The angle of light dispersion"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "What is the numerical aperture of an optical fiber?",
      "options": {
        "a": "The ratio of core to cladding diameters",
        "b": "A measure of the light-gathering ability",
        "c": "The angle of total internal reflection",
        "d": "The loss of light intensity"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "In a graded-index fiber, the refractive index:",
      "options": {
        "a": "Changes gradually from core to cladding",
        "b": "Is constant throughout the core",
        "c": "Is higher in the cladding than the core",
        "d": "Is zero at the core center"
      },
      "correct": "a",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "What does the V-number of an optical fiber indicate?",
      "options": {
        "a": "The number of modes supported by the fiber",
        "b": "The loss of light in the fiber",
        "c": "The diameter of the fiber",
        "d": "The wavelength of light used"
      },
      "correct": "a",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Which type of optical fiber has a sudden change in refractive index at the core-cladding interface?",
      "options": {
        "a": "Graded-index fiber",
        "b": "Step-index fiber",
        "c": "Single-mode fiber",
        "d": "Multimode fiber"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "What is a common cause of loss in optical fibers?",
      "options": {
        "a": "Total internal reflection",
        "b": "Absorption and scattering",
        "c": "Population inversion",
        "d": "Resonant cavity"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Which parameter affects the bandwidth of an optical fiber?",
      "options": {
        "a": "Core diameter",
        "b": "Numerical aperture",
        "c": "Dispersion",
        "d": "V-number"
      },
      "correct": "c",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "A dielectric waveguide is another term for:",
      "options": {
        "a": "A coaxial cable",
        "b": "An optical fiber",
        "c": "A microwave transmitter",
        "d": "A laser"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Relative refractive index difference is defined as:",
      "options": {
        "a": "The ratio of core to cladding refractive indices",
        "b": "The difference in refractive indices divided by core refractive index",
        "c": "The sum of core and cladding refractive indices",
        "d": "The angle of incidence at the core-cladding interface"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Single-mode fibers are preferred for:",
      "options": {
        "a": "Short-distance communication",
        "b": "High-bandwidth, long-distance communication",
        "c": "Low-cost applications",
        "d": "Multimode transmission"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The core of an optical fiber is made of:",
      "options": {
        "a": "Metal",
        "b": "Glass or plastic",
        "c": "Air",
        "d": "Semiconductor"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "What is the critical angle in an optical fiber?",
      "options": {
        "a": "The angle at which light is fully reflected at the core-cladding interface",
        "b": "The angle at which light is absorbed",
        "c": "The angle of incidence for maximum loss",
        "d": "The angle of light scattering"
      },
      "correct": "a",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Graded-index fibers reduce:",
      "options": {
        "a": "Absorption losses",
        "b": "Modal dispersion",
        "c": "Scattering losses",
        "d": "Numerical aperture"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The numerical aperture is related to:",
      "options": {
        "a": "Core diameter only",
        "b": "Refractive indices of core and cladding",
        "c": "Wavelength of light only",
        "d": "Fiber length"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which type of fiber supports only one mode of light propagation?",
      "options": {
        "a": "Multimode fiber",
        "b": "Step-index fiber",
        "c": "Single-mode fiber",
        "d": "Graded-index fiber"
      },
      "correct": "c",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Attenuation in optical fibers is measured in:",
      "options": {
        "a": "Watts",
        "b": "Decibels per kilometer (dB/km)",
        "c": "Hertz",
        "d": "Ohms"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "What causes modal dispersion in optical fibers?",
      "options": {
        "a": "Different wavelengths traveling at different speeds",
        "b": "Different light paths taking different times to travel",
        "c": "Absorption of light by the core",
        "d": "Scattering of light by the cladding"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The cladding in an optical fiber has:",
      "options": {
        "a": "Higher refractive index than the core",
        "b": "Lower refractive index than the core",
        "c": "Same refractive index as the core",
        "d": "No refractive index"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Which application commonly uses optical fibers?",
      "options": {
        "a": "Electrical power transmission",
        "b": "Telecommunication",
        "c": "Mechanical support",
        "d": "Thermal insulation"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The V-number depends on:",
      "options": {
        "a": "Fiber length",
        "b": "Wavelength, core diameter, and numerical aperture",
        "c": "Cladding thickness",
        "d": "Light intensity"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What is chromatic dispersion?",
      "options": {
        "a": "Dispersion due to different light paths",
        "b": "Dispersion due to different wavelengths",
        "c": "Dispersion due to absorption",
        "d": "Dispersion due to scattering"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which fiber type is best for short-distance, low-cost applications?",
      "options": {
        "a": "Single-mode fiber",
        "b": "Multimode fiber",
        "c": "Graded-index fiber",
        "d": "Plastic optical fiber"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The acceptance angle is related to:",
      "options": {
        "a": "Numerical aperture",
        "b": "Core diameter",
        "c": "Cladding thickness",
        "d": "Light intensity"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What is the primary advantage of optical fibers over copper cables?",
      "options": {
        "a": "Lower cost",
        "b": "Higher bandwidth and lower loss",
        "c": "Higher weight",
        "d": "Easier installation"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Scattering losses in optical fibers are caused by:",
      "options": {
        "a": "Imperfections in the fiber material",
        "b": "Total internal reflection",
        "c": "High numerical aperture",
        "d": "Low core diameter"
      },
      "correct": "a",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The refractive index of the core is always:",
      "options": {
        "a": "Equal to the cladding",
        "b": "Greater than the cladding",
        "c": "Less than the cladding",
        "d": "Zero"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which type of fiber has a larger core diameter?",
      "options": {
        "a": "Single-mode fiber",
        "b": "Multimode fiber",
        "c": "Step-index fiber",
        "d": "Graded-index fiber"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The term \u2018total internal reflection\u2019 refers to:",
      "options": {
        "a": "Light reflecting completely at the core-cladding boundary",
        "b": "Light absorbing at the core",
        "c": "Light scattering in the cladding",
        "d": "Light exiting the fiber"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What is the typical core diameter of a single-mode fiber?",
      "options": {
        "a": "50\u2013100 \u00b5m",
        "b": "8\u201310 \u00b5m",
        "c": "200\u2013400 \u00b5m",
        "d": "1\u20132 \u00b5m"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Which loss is NOT typically associated with optical fibers?",
      "options": {
        "a": "Absorption loss",
        "b": "Scattering loss",
        "c": "Bending loss",
        "d": "Thermal loss"
      },
      "correct": "d",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The numerical aperture is proportional to:",
      "options": {
        "a": "Sin of the acceptance angle",
        "b": "Cos of the critical angle",
        "c": "Tan of the acceptance angle",
        "d": "Sin of the critical angle"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which fiber is used in high-speed internet connections?",
      "options": {
        "a": "Multimode fiber",
        "b": "Single-mode fiber",
        "c": "Plastic optical fiber",
        "d": "Step-index fiber"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "What is the primary cause of bending losses in optical fibers?",
      "options": {
        "a": "Excessive light intensity",
        "b": "Sharp bends disrupting total internal reflection",
        "c": "Low numerical aperture",
        "d": "High core diameter"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The refractive index profile of a graded-index fiber is:",
      "options": {
        "a": "Constant",
        "b": "Parabolic",
        "c": "Linear",
        "d": "Exponential"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Optical fibers are primarily made of:",
      "options": {
        "a": "Copper",
        "b": "Silica glass",
        "c": "Aluminum",
        "d": "Steel"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Which parameter determines the number of modes in a fiber?",
      "options": {
        "a": "Core diameter",
        "b": "V-number",
        "c": "Cladding thickness",
        "d": "Light wavelength only"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "What is the typical wavelength range for optical fiber communication?",
      "options": {
        "a": "400\u2013700 nm",
        "b": "850\u20131550 nm",
        "c": "200\u2013400 nm",
        "d": "2000\u20133000 nm"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "Which type of dispersion is minimized in single-mode fibers?",
      "options": {
        "a": "Chromatic dispersion",
        "b": "Modal dispersion",
        "c": "Material dispersion",
        "d": "Waveguide dispersion"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The cladding in an optical fiber serves to:",
      "options": {
        "a": "Amplify light",
        "b": "Reflect light back into the core",
        "c": "Absorb light",
        "d": "Scatter light"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    }
  ],
  "Unit IV: Quantum Mechanics": [
    {
      "question": "The photoelectric effect demonstrates that light behaves as:",
      "options": {
        "a": "A wave",
        "b": "A particle",
        "c": "Both a wave and a particle",
        "d": "Neither a wave nor a particle"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What is the significance of de Broglie\u2019s matter waves?",
      "options": {
        "a": "They explain the wave nature of light",
        "b": "They relate the momentum of a particle to a wavelength",
        "c": "They describe the charge of particles",
        "d": "They explain nuclear reactions"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Heisenberg\u2019s uncertainty principle states that it is impossible to know simultaneously:",
      "options": {
        "a": "Position and momentum with exact precision",
        "b": "Energy and time with exact precision",
        "c": "Both a and b",
        "d": "Velocity and mass"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The wavelength of a matter wave is given by:",
      "options": {
        "a": "\u03bb = h/p",
        "b": "\u03bb = h/m",
        "c": "\u03bb = p/h",
        "d": "\u03bb = mv/h"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Schr\u00f6dinger\u2019s equation is used to find:",
      "options": {
        "a": "The electric field of a region",
        "b": "The wave function of a quantum system",
        "c": "The charge density",
        "d": "The magnetic field"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The photoelectric effect occurs when:",
      "options": {
        "a": "Electrons are emitted from a metal surface upon light exposure",
        "b": "Light is absorbed without emission",
        "c": "Electrons are absorbed by light",
        "d": "Protons are emitted"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which of the following is a standard system solved using the Schr\u00f6dinger equation?",
      "options": {
        "a": "Particle in a box",
        "b": "Charged capacitor",
        "c": "Magnetic dipole",
        "d": "Resonant cavity"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Heisenberg uncertainty principle is a consequence of:",
      "options": {
        "a": "Wave-particle duality",
        "b": "Conservation of energy",
        "c": "Conservation of charge",
        "d": "Maxwell\u2019s equations"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The de Broglie wavelength of a particle depends on:",
      "options": {
        "a": "Mass only",
        "b": "Velocity only",
        "c": "Both mass and velocity",
        "d": "Neither mass nor velocity"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The probability density of a quantum particle is given by:",
      "options": {
        "a": "The square of the wave function\u2019s magnitude",
        "b": "The wave function itself",
        "c": "The derivative of the wave function",
        "d": "The integral of the wave function"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The photoelectric effect depends on:",
      "options": {
        "a": "Frequency of incident light",
        "b": "Intensity of incident light",
        "c": "Wavelength of emitted electrons",
        "d": "Mass of the metal"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The work function in the photoelectric effect is:",
      "options": {
        "a": "The minimum energy required to eject an electron",
        "b": "The maximum energy of emitted electrons",
        "c": "The energy of incident photons",
        "d": "The energy of the metal surface"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Schr\u00f6dinger equation for a particle in a box yields:",
      "options": {
        "a": "Continuous energy levels",
        "b": "Quantized energy levels",
        "c": "Zero energy levels",
        "d": "Negative energy levels"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The de Broglie wavelength of an electron increases when:",
      "options": {
        "a": "Its velocity increases",
        "b": "Its velocity decreases",
        "c": "Its mass increases",
        "d": "Its charge increases"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which phenomenon supports the particle nature of electrons?",
      "options": {
        "a": "Diffraction",
        "b": "Interference",
        "c": "Photoelectric effect",
        "d": "Electron scattering"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Heisenberg uncertainty principle implies that:",
      "options": {
        "a": "Energy is always conserved",
        "b": "Exact measurements are impossible for conjugate variables",
        "c": "Momentum is constant",
        "d": "Position is always fixed"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The wave function in quantum mechanics describes:",
      "options": {
        "a": "The position of a particle",
        "b": "The probability amplitude of a particle",
        "c": "The energy of a particle",
        "d": "The mass of a particle"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The time-independent Schr\u00f6dinger equation is used for:",
      "options": {
        "a": "Stationary states",
        "b": "Time-varying states",
        "c": "Relativistic systems",
        "d": "Classical systems"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The de Broglie hypothesis applies to:",
      "options": {
        "a": "Only light particles",
        "b": "Only massive particles",
        "c": "Both massive and massless particles",
        "d": "Only charged particles"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "In the photoelectric effect, increasing light intensity increases:",
      "options": {
        "a": "The energy of emitted electrons",
        "b": "The number of emitted electrons",
        "c": "The frequency of emitted electrons",
        "d": "The wavelength of emitted electrons"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Schr\u00f6dinger equation includes which constant?",
      "options": {
        "a": "Planck\u2019s constant",
        "b": "Boltzmann\u2019s constant",
        "c": "Avogadro\u2019s constant",
        "d": "Gas constant"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The uncertainty in position multiplied by the uncertainty in momentum is at least:",
      "options": {
        "a": "h/2\u03c0",
        "b": "h",
        "c": "h/4\u03c0",
        "d": "2\u03c0h"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The particle in a box model assumes:",
      "options": {
        "a": "Infinite potential outside the box",
        "b": "Zero potential outside the box",
        "c": "Linear potential inside the box",
        "d": "Constant potential everywhere"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The photoelectric effect was explained by:",
      "options": {
        "a": "Newton",
        "b": "Einstein",
        "c": "Maxwell",
        "d": "Schr\u00f6dinger"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The de Broglie wavelength is inversely proportional to:",
      "options": {
        "a": "Mass",
        "b": "Velocity",
        "c": "Momentum",
        "d": "Energy"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The expectation value in quantum mechanics represents:",
      "options": {
        "a": "The exact value of a measurement",
        "b": "The average value of a measurement",
        "c": "The minimum value of a measurement",
        "d": "The maximum value of a measurement"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which system is NOT typically solved using the Schr\u00f6dinger equation?",
      "options": {
        "a": "Harmonic oscillator",
        "b": "Hydrogen atom",
        "c": "Particle in a box",
        "d": "Classical pendulum"
      },
      "correct": "d",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The photoelectric effect threshold frequency depends on:",
      "options": {
        "a": "The intensity of light",
        "b": "The work function of the metal",
        "c": "The wavelength of light",
        "d": "The angle of incidence"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The wave-particle duality is a concept in:",
      "options": {
        "a": "Classical mechanics",
        "b": "Quantum mechanics",
        "c": "Electromagnetism",
        "d": "Thermodynamics"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The energy of a photon in the photoelectric effect is given by:",
      "options": {
        "a": "E = mc\u00b2",
        "b": "E = h\u03bd",
        "c": "E = hv/c",
        "d": "E = h/p"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The time-dependent Schr\u00f6dinger equation describes:",
      "options": {
        "a": "Stationary states",
        "b": "Evolving quantum systems",
        "c": "Classical trajectories",
        "d": "Electromagnetic waves"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The de Broglie wavelength for a particle with mass m and velocity v is:",
      "options": {
        "a": "h/mv",
        "b": "mv/h",
        "c": "h/m",
        "d": "h/v"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The probability density is always:",
      "options": {
        "a": "Negative",
        "b": "Positive or zero",
        "c": "Complex",
        "d": "Zero"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which phenomenon supports the wave nature of electrons?",
      "options": {
        "a": "Photoelectric effect",
        "b": "Electron diffraction",
        "c": "Compton scattering",
        "d": "Blackbody radiation"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Schr\u00f6dinger equation for a free particle has:",
      "options": {
        "a": "Quantized energy levels",
        "b": "Continuous energy levels",
        "c": "No energy levels",
        "d": "Negative energy levels"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The work function is measured in:",
      "options": {
        "a": "Joules",
        "b": "Watts",
        "c": "Hertz",
        "d": "Amperes"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Heisenberg uncertainty principle applies to:",
      "options": {
        "a": "Only macroscopic objects",
        "b": "Only microscopic particles",
        "c": "Both macroscopic and microscopic objects",
        "d": "Only light waves"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The boundary conditions in the particle in a box model lead to:",
      "options": {
        "a": "Continuous wave functions",
        "b": "Quantized wave functions",
        "c": "Zero wave functions",
        "d": "Complex wave functions"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The photoelectric effect shows that photon energy is proportional to:",
      "options": {
        "a": "Intensity",
        "b": "Frequency",
        "c": "Wavelength",
        "d": "Amplitude"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The normalization condition for a wave function ensures that:",
      "options": {
        "a": "The total probability is 1",
        "b": "The total energy is zero",
        "c": "The wave function is zero",
        "d": "The momentum is constant"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    }
  ],
  "Unit V: Physics of Solids": [
    {
      "question": "The crystal lattice of a solid is defined as:",
      "options": {
        "a": "A random arrangement of atoms",
        "b": "A periodic arrangement of atoms",
        "c": "A liquid-like structure",
        "d": "A gaseous arrangement"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which type of solid has a highly ordered structure?",
      "options": {
        "a": "Amorphous solid",
        "b": "Crystalline solid",
        "c": "Polycrystalline solid",
        "d": "Glass"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The band theory of solids explains:",
      "options": {
        "a": "The magnetic properties of solids",
        "b": "The electrical properties of solids",
        "c": "The mechanical properties of solids",
        "d": "The thermal properties of solids"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "In a conductor, the valence and conduction bands:",
      "options": {
        "a": "Are separated by a large gap",
        "b": "Overlap",
        "c": "Are completely filled",
        "d": "Are completely empty"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Semiconductors have a band gap that is:",
      "options": {
        "a": "Zero",
        "b": "Large (>5 eV)",
        "c": "Small (0.1\u20132 eV)",
        "d": "Infinite"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Fermi level in a metal lies:",
      "options": {
        "a": "In the band gap",
        "b": "Within the conduction band",
        "c": "Within the valence band",
        "d": "Below the valence band"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which solid has no long-range order?",
      "options": {
        "a": "Crystalline solid",
        "b": "Amorphous solid",
        "c": "Polycrystalline solid",
        "d": "Single crystal"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Bravais lattice is a concept in:",
      "options": {
        "a": "Amorphous solids",
        "b": "Crystalline solids",
        "c": "Liquids",
        "d": "Gases"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What is the coordination number in a body-centered cubic (BCC) lattice?",
      "options": {
        "a": "6",
        "b": "8",
        "c": "12",
        "d": "4"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The energy gap in an insulator is typically:",
      "options": {
        "a": "Less than 1 eV",
        "b": "Greater than 5 eV",
        "c": "Between 1\u20132 eV",
        "d": "Zero"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Miller indices are used to describe:",
      "options": {
        "a": "Crystal planes",
        "b": "Atomic positions",
        "c": "Bond lengths",
        "d": "Electron energies"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is an example of a semiconductor?",
      "options": {
        "a": "Copper",
        "b": "Silicon",
        "c": "Diamond",
        "d": "Glass"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The electrical conductivity of a semiconductor increases with:",
      "options": {
        "a": "Decreasing temperature",
        "b": "Increasing temperature",
        "c": "Constant temperature",
        "d": "Zero temperature"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The unit cell of a crystal is:",
      "options": {
        "a": "The smallest repeating unit of the lattice",
        "b": "The largest repeating unit",
        "c": "A single atom",
        "d": "A molecule"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which type of bonding is common in metals?",
      "options": {
        "a": "Ionic bonding",
        "b": "Covalent bonding",
        "c": "Metallic bonding",
        "d": "Hydrogen bonding"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The band gap in a conductor is:",
      "options": {
        "a": "Large",
        "b": "Small",
        "c": "Zero",
        "d": "Infinite"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which lattice has atoms at the corners and center of a cube?",
      "options": {
        "a": "Face-centered cubic",
        "b": "Body-centered cubic",
        "c": "Simple cubic",
        "d": "Hexagonal close-packed"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The electrical properties of solids depend on:",
      "options": {
        "a": "The band gap",
        "b": "The lattice constant",
        "c": "The coordination number",
        "d": "The atomic mass"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which solid is an example of an insulator?",
      "options": {
        "a": "Silicon",
        "b": "Germanium",
        "c": "Diamond",
        "d": "Aluminum"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Fermi energy is the energy of:",
      "options": {
        "a": "The lowest electron state",
        "b": "The highest occupied electron state at absolute zero",
        "c": "The band gap center",
        "d": "The conduction band minimum"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "What is the packing fraction of a face-centered cubic (FCC) lattice?",
      "options": {
        "a": "0.52",
        "b": "0.68",
        "c": "0.74",
        "d": "0.90"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Doping a semiconductor with impurities:",
      "options": {
        "a": "Increases the band gap",
        "b": "Decreases the band gap",
        "c": "Introduces new energy levels",
        "d": "Eliminates the band gap"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The reciprocal lattice is used to describe:",
      "options": {
        "a": "Electron diffraction",
        "b": "Atomic positions",
        "c": "Bond angles",
        "d": "Thermal conductivity"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which type of solid has a random atomic structure?",
      "options": {
        "a": "Crystalline",
        "b": "Amorphous",
        "c": "Polycrystalline",
        "d": "Single crystal"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The conductivity of a metal is due to:",
      "options": {
        "a": "Free electrons",
        "b": "Bound electrons",
        "c": "Protons",
        "d": "Ions"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which lattice type is common in alkali metals?",
      "options": {
        "a": "Face-centered cubic",
        "b": "Body-centered cubic",
        "c": "Hexagonal close-packed",
        "d": "Simple cubic"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The band theory explains why insulators:",
      "options": {
        "a": "Have a small band gap",
        "b": "Have a large band gap",
        "c": "Have no band gap",
        "d": "Have overlapping bands"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The coordination number in a face-centered cubic lattice is:",
      "options": {
        "a": "6",
        "b": "8",
        "c": "12",
        "d": "4"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which property is NOT explained by band theory?",
      "options": {
        "a": "Electrical conductivity",
        "b": "Thermal conductivity",
        "c": "Optical properties",
        "d": "Mechanical strength"
      },
      "correct": "d",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The lattice constant is a measure of:",
      "options": {
        "a": "The distance between unit cells",
        "b": "The number of atoms in a unit cell",
        "c": "The band gap energy",
        "d": "The electron density"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is an example of a conductor?",
      "options": {
        "a": "Silicon",
        "b": "Copper",
        "c": "Glass",
        "d": "Diamond"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Brillouin zone is related to:",
      "options": {
        "a": "The crystal lattice in real space",
        "b": "The reciprocal lattice",
        "c": "The band gap energy",
        "d": "The atomic mass"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which bonding type is common in diamond?",
      "options": {
        "a": "Ionic",
        "b": "Covalent",
        "c": "Metallic",
        "d": "Van der Waals"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The electrical conductivity of an insulator is:",
      "options": {
        "a": "High",
        "b": "Low",
        "c": "Zero",
        "d": "Variable"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The number of atoms in a body-centered cubic unit cell is:",
      "options": {
        "a": "1",
        "b": "2",
        "c": "4",
        "d": "8"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The band gap in a semiconductor can be altered by:",
      "options": {
        "a": "Doping",
        "b": "Changing the lattice constant",
        "c": "Increasing the atomic mass",
        "d": "Reducing the coordination number"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which solid has a mixture of crystalline and amorphous regions?",
      "options": {
        "a": "Single crystal",
        "b": "Polycrystalline",
        "c": "Amorphous",
        "d": "Metallic"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The valence band in a solid is:",
      "options": {
        "a": "Completely empty",
        "b": "Partially filled with electrons",
        "c": "Completely filled with electrons",
        "d": "Overlapping with the conduction band"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The X-ray diffraction in solids is used to determine:",
      "options": {
        "a": "Crystal structure",
        "b": "Electrical conductivity",
        "c": "Thermal conductivity",
        "d": "Mechanical strength"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The energy band gap is smallest in:",
      "options": {
        "a": "Insulators",
        "b": "Semiconductors",
        "c": "Conductors",
        "d": "Superconductors"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    }
  ],
  "Unit VI: Properties of Engineering Materials": [
    {
      "question": "Which property measures a material\u2019s resistance to deformation?",
      "options": {
        "a": "Hardness",
        "b": "Ductility",
        "c": "Malleability",
        "d": "Brittleness"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The ability of a material to be drawn into wires is called:",
      "options": {
        "a": "Ductility",
        "b": "Malleability",
        "c": "Hardness",
        "d": "Toughness"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material property is critical for structural applications?",
      "options": {
        "a": "Thermal conductivity",
        "b": "Tensile strength",
        "c": "Electrical conductivity",
        "d": "Optical transparency"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Ceramics are typically:",
      "options": {
        "a": "Ductile and conductive",
        "b": "Brittle and insulating",
        "c": "Malleable and conductive",
        "d": "Flexible and transparent"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Young\u2019s modulus of a material measures:",
      "options": {
        "a": "Resistance to shear",
        "b": "Stiffness",
        "c": "Thermal expansion",
        "d": "Electrical resistance"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is commonly used for high thermal conductivity?",
      "options": {
        "a": "Copper",
        "b": "Glass",
        "c": "Plastic",
        "d": "Wood"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The ability of a material to absorb energy before fracture is called:",
      "options": {
        "a": "Hardness",
        "b": "Toughness",
        "c": "Brittleness",
        "d": "Elasticity"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which test measures a material\u2019s resistance to indentation?",
      "options": {
        "a": "Tensile test",
        "b": "Hardness test",
        "c": "Fatigue test",
        "d": "Impact test"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Polymers are typically:",
      "options": {
        "a": "High-density and brittle",
        "b": "Low-density and flexible",
        "c": "High thermal conductivity",
        "d": "High electrical conductivity"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The stress-strain curve is used to determine:",
      "options": {
        "a": "Thermal conductivity",
        "b": "Mechanical properties",
        "c": "Electrical conductivity",
        "d": "Optical properties"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which property is important for electrical insulators?",
      "options": {
        "a": "High electrical conductivity",
        "b": "Low electrical conductivity",
        "c": "High thermal conductivity",
        "d": "High ductility"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Poisson\u2019s ratio of a material measures:",
      "options": {
        "a": "Lateral strain to longitudinal strain",
        "b": "Stress to strain",
        "c": "Hardness to toughness",
        "d": "Thermal to electrical conductivity"
      },
      "correct": "a",
      "explanation": "Poisson\u2019s equation includes charge density; Laplace\u2019s doesn\u2019t and applies only when charge is zero."
    },
    {
      "question": "Which material is used for high-strength, lightweight structures?",
      "options": {
        "a": "Steel",
        "b": "Aluminum",
        "c": "Glass",
        "d": "Wood"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The creep behavior of a material is observed under:",
      "options": {
        "a": "High temperature and constant stress",
        "b": "Low temperature and high stress",
        "c": "High temperature and low stress",
        "d": "Room temperature and no stress"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which property is critical for cutting tools?",
      "options": {
        "a": "Ductility",
        "b": "Hardness",
        "c": "Malleability",
        "d": "Flexibility"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The thermal expansion coefficient measures:",
      "options": {
        "a": "Change in volume with temperature",
        "b": "Change in length with temperature",
        "c": "Change in density with temperature",
        "d": "Change in mass with temperature"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is an example of a composite?",
      "options": {
        "a": "Steel",
        "b": "Carbon fiber reinforced polymer",
        "c": "Copper",
        "d": "Glass"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Fatigue failure occurs due to:",
      "options": {
        "a": "Constant stress",
        "b": "Cyclic stress",
        "c": "High temperature",
        "d": "Low temperature"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which property allows a material to return to its original shape after deformation?",
      "options": {
        "a": "Plasticity",
        "b": "Elasticity",
        "c": "Brittleness",
        "d": "Toughness"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The Brinell hardness test uses:",
      "options": {
        "a": "A diamond indenter",
        "b": "A steel ball indenter",
        "c": "A cylindrical indenter",
        "d": "A conical indenter"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is used for high-temperature applications?",
      "options": {
        "a": "Plastic",
        "b": "Ceramic",
        "c": "Wood",
        "d": "Rubber"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The yield strength of a material is:",
      "options": {
        "a": "The maximum stress it can withstand",
        "b": "The stress at which plastic deformation begins",
        "c": "The stress at which it fractures",
        "d": "The stress at which it melts"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which test measures a material\u2019s resistance to sudden impact?",
      "options": {
        "a": "Tensile test",
        "b": "Hardness test",
        "c": "Impact test",
        "d": "Creep test"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The electrical resistivity of a material is:",
      "options": {
        "a": "Its ability to conduct electricity",
        "b": "Its resistance to electrical flow",
        "c": "Its thermal conductivity",
        "d": "Its mechanical strength"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is known for its corrosion resistance?",
      "options": {
        "a": "Iron",
        "b": "Stainless steel",
        "c": "Aluminum",
        "d": "Copper"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The modulus of elasticity is also known as:",
      "options": {
        "a": "Young\u2019s modulus",
        "b": "Shear modulus",
        "c": "Bulk modulus",
        "d": "Poisson\u2019s modulus"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which property is important for optical fibers?",
      "options": {
        "a": "High electrical conductivity",
        "b": "Low optical loss",
        "c": "High thermal expansion",
        "d": "High hardness"
      },
      "correct": "b",
      "explanation": "The correct answer explains how light travels through optical fibers; other terms describe different phenomena."
    },
    {
      "question": "The toughness of a material is measured by:",
      "options": {
        "a": "The area under the stress-strain curve",
        "b": "The maximum stress",
        "c": "The maximum strain",
        "d": "The elastic modulus"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is brittle?",
      "options": {
        "a": "Steel",
        "b": "Glass",
        "c": "Aluminum",
        "d": "Copper"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The shear modulus measures a material\u2019s resistance to:",
      "options": {
        "a": "Tensile stress",
        "b": "Shear stress",
        "c": "Compressive stress",
        "d": "Thermal stress"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is used in aircraft for its high strength-to-weight ratio?",
      "options": {
        "a": "Titanium",
        "b": "Iron",
        "c": "Glass",
        "d": "Plastic"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The thermal conductivity of a material measures:",
      "options": {
        "a": "Its ability to conduct heat",
        "b": "Its resistance to heat flow",
        "c": "Its electrical conductivity",
        "d": "Its mechanical strength"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which test is used to determine a material\u2019s fatigue life?",
      "options": {
        "a": "Tensile test",
        "b": "Hardness test",
        "c": "Fatigue test",
        "d": "Impact test"
      },
      "correct": "c",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The ductility of a material is measured by:",
      "options": {
        "a": "Percentage elongation",
        "b": "Hardness value",
        "c": "Thermal conductivity",
        "d": "Electrical resistivity"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is used for electrical wiring?",
      "options": {
        "a": "Copper",
        "b": "Glass",
        "c": "Ceramic",
        "d": "Plastic"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The fracture toughness of a material measures:",
      "options": {
        "a": "Its resistance to crack propagation",
        "b": "Its ability to conduct electricity",
        "c": "Its thermal expansion",
        "d": "Its hardness"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which property is critical for bearings?",
      "options": {
        "a": "Low hardness",
        "b": "High wear resistance",
        "c": "High ductility",
        "d": "High thermal expansion"
      },
      "correct": "b",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The specific heat of a material is:",
      "options": {
        "a": "The heat required to raise its temperature by 1\u00b0C",
        "b": "The heat required to melt it",
        "c": "The heat required to vaporize it",
        "d": "The heat required to deform it"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "Which material is used for high-strength composites?",
      "options": {
        "a": "Carbon fiber",
        "b": "Copper",
        "c": "Wood",
        "d": "Glass"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    },
    {
      "question": "The elastic limit of a material is:",
      "options": {
        "a": "The maximum stress it can withstand without permanent deformation",
        "b": "The maximum strain it can withstand",
        "c": "The maximum temperature it can withstand",
        "d": "The maximum electrical conductivity"
      },
      "correct": "a",
      "explanation": "The correct answer fits the question\u2019s concept; other options represent different or unrelated ideas."
    }
  ]
};
