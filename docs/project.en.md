<div align="center">

# 🌱 LEAF

### Low-Cost Ecological AgroCare Framework

**Making precision agriculture more accessible, sustainable, and intelligent.**

A student-led research project combining **computer vision, embedded systems, agricultural automation, and ecological crop protection** to explore affordable alternatives for modern farming.

[![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-Computer_Vision-5C3EE8?logo=opencv&logoColor=white)](https://opencv.org/)
[![ESP32](https://img.shields.io/badge/ESP32-Embedded_Systems-E7352C?logo=espressif&logoColor=white)](https://www.espressif.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../LICENSE)
[![Status](https://img.shields.io/badge/Status-In_Development-orange)](#project-status)

**[🌐 Project Website](https://henriquebrtocosta.github.io/leaf-cmjf/)** · **[📁 Project Materials](pesquisa/)** · **[💬 Contribute](https://github.com/henriquebrtocosta/leaf-cmjf/issues)**

**🌍 Languages:** English | [Português (Brasil)](projeto.md)

</div>

---

## 📖 Overview

**LEAF (Low-Cost Ecological AgroCare Framework)** is an interdisciplinary research project focused on exploring affordable technologies for sustainable and precision agriculture.

The project investigates how computer vision, automated spraying systems, and naturally derived agricultural formulations could contribute to more targeted crop protection, particularly in contexts where access to advanced agricultural technologies may be limited.

By integrating software, electronics, and agricultural research, LEAF aims to develop an experimental framework that can support future studies on reducing unnecessary chemical inputs, improving application precision, and making agricultural automation more accessible.

> [!IMPORTANT]
> LEAF is an **experimental academic project**, not a commercially validated agricultural product. Detection accuracy, hardware reliability, formulation effectiveness, and environmental benefits require further testing before practical deployment.

## 🎯 Project Objectives

LEAF is guided by five main objectives:

- **Accessibility:** Explore low-cost hardware and open-source software as alternatives to expensive precision agriculture systems.
- **Automation:** Investigate computer-controlled mechanisms for targeted agricultural applications.
- **Computer Vision:** Develop image-processing techniques capable of identifying crops and detecting visual indicators associated with potential pests.
- **Sustainability:** Research naturally derived agricultural formulations and evaluate their potential role in crop protection.
- **Education and Research:** Encourage interdisciplinary experimentation involving programming, electronics, environmental sciences, and agriculture.

## ✨ Key Features

The prototype and its technical documentation describe the following components.

| Component               | Description                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------- |
| 📷 Computer Vision      | Camera-based image acquisition and processing using Python and OpenCV.                |
| 🌿 Crop Identification  | Experimental visual classification rules for selected crops.                          |
| 🔍 Pest Indication      | Detection of visual patterns that may be associated with pest presence.               |
| ⚙️ Embedded Control     | ESP32-based control architecture for motors and spraying pumps.                       |
| 🔌 Serial Communication | Communication between the Python application and the microcontroller over USB serial. |
| 💧 Targeted Spraying    | Experimental mechanism intended to enable more selective application.                 |
| 🌱 Ecological Research  | Investigation of naturally derived ingredients for agricultural formulations.         |
| 🌐 Project Website      | Public website presenting the project and its research objectives.                    |

### Computer Vision Approach

The documented image-processing approach relies primarily on **OpenCV, NumPy, color-based segmentation, and heuristic classification rules**.

It includes techniques such as HSV color-space analysis and detection of image regions with specific visual characteristics.

The project's research direction includes artificial intelligence, but the documented implementation should not be mistaken for a validated, trained machine-learning model.

Crop classification and potential pest detection remain experimental and should not be interpreted as reliable agronomic diagnoses.

## 🏗️ System Architecture

LEAF explores a modular architecture connecting computer vision to embedded hardware.

```mermaid
flowchart TD
    A["Camera"] --> B["Python Application"]
    B --> C["OpenCV Image Processing"]
    C --> D["Experimental Crop / Pest Classification"]
    D --> E["Control Logic"]
    E --> F["USB Serial Communication"]
    F --> G["ESP32 Microcontroller"]
    G --> H["Motor Control"]
    G --> I["Pump Control"]
    H --> J["Positioning Mechanism"]
    I --> K["Experimental Targeted Application"]
```

### How It Works

1. **Image Acquisition:** A connected camera captures images of the observed plants.
2. **Image Processing:** The Python application processes selected regions of the captured frames.
3. **Visual Classification:** Experimental algorithms analyze colors, shapes, and other image characteristics.
4. **Control Decision:** The software determines the corresponding control action based on its programmed logic.
5. **Serial Communication:** Commands are transmitted to the ESP32 microcontroller.
6. **Hardware Operation:** The ESP32 coordinates motor movement and pump activation according to its firmware.

This workflow describes the project's intended integration. Its reliability and performance must be assessed through controlled testing.

## 🛠️ Technology Stack

### Software

| Technology            | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| Python 3              | Main application and control logic              |
| OpenCV                | Image acquisition and processing                |
| NumPy                 | Numerical operations and image-array processing |
| Matplotlib            | Data and image visualization                    |
| PySerial              | Serial communication with ESP32                 |
| pyttsx3               | Text-to-speech functionality                    |
| keyboard              | Keyboard input handling                         |
| HTML, CSS, JavaScript | Public project website                          |

### Hardware

The experimental hardware architecture includes:

- ESP32 microcontroller
- USB serial connection
- Camera or compatible webcam
- Stepper motor and corresponding driver
- Limit switches
- Electrically controlled pumps
- Mechanical positioning and spraying components

Specific wiring, power requirements, and hardware configurations must be verified before operating the prototype.

## Website and repository

See the [repository guide](../README.md) for the current structure and the [website guide](site.md) for local use and tests. Research documents and prototype materials are in [pesquisa/](pesquisa/).

## 🌱 Ecological Crop Protection Research

Alongside its automation components, LEAF investigates naturally derived ingredients and their potential applications in agriculture.

The project's research materials discuss ingredients such as:

- Neem
- Propolis
- Garlic
- Onion
- Chili pepper
- Clove oil
- Potassium soap

These substances are considered research subjects rather than validated formulations or application recommendations.

Their possible effectiveness depends on factors including composition, concentration, target organisms, crop species, application methods, and environmental conditions.

**Natural origin does not guarantee safety, effectiveness, or environmental compatibility.**

Before any agricultural application, formulations must be evaluated for crop phytotoxicity, human exposure, effects on non-target organisms, and compliance with applicable regulations.

## 📊 Project Status

**Current status: Research and experimental development.**

LEAF is an ongoing academic initiative. Its documented components provide a basis for experimentation, but the complete system has not been established as a field-ready agricultural solution.

### Research and Development Priorities

- [ ] Develop a reproducible image dataset for classification experiments.
- [ ] Evaluate classification accuracy under different lighting and crop conditions.
- [ ] Investigate trained machine-learning models and compare them with heuristic methods.
- [ ] Document ESP32 wiring, pin assignments, and mechanical assembly.
- [ ] Validate serial communication and hardware control reliability.
- [ ] Implement and document operational safety procedures.
- [ ] Measure application accuracy and liquid consumption.
- [ ] Evaluate agricultural formulations through appropriate experimental protocols.
- [ ] Publish reproducible test results and technical documentation.

The checklist represents development priorities, not confirmed commitments or deadlines.

## 🔬 Research and Validation

A central goal of LEAF is to provide a foundation for measurable experimentation.

Future evaluations should consider:

| Research Area             | Suggested Evaluation                                                 |
| ------------------------- | -------------------------------------------------------------------- |
| Computer Vision           | Accuracy, precision, recall, and robustness to environmental changes |
| Crop Identification       | Performance across different plant species and growth stages         |
| Automation                | Control reliability, positioning repeatability, and response time    |
| Spraying                  | Application consistency, liquid consumption, and targeting accuracy  |
| Agricultural Formulations | Efficacy, phytotoxicity, and effects on non-target organisms         |
| Accessibility             | Component costs, maintenance requirements, and reproducibility       |

No quantitative performance claims should be interpreted as established without supporting experimental data.

## 🤝 Contributing

LEAF welcomes constructive suggestions, bug reports, documentation improvements, and research-oriented discussions.

If you would like to contribute:

1. Explore the repository and the existing documentation.
2. Open an [issue](https://github.com/henriquebrtocosta/leaf-cmjf/issues) to describe a problem or improvement.
3. Fork the repository and create a dedicated branch.
4. Implement and document your changes.
5. Submit a pull request explaining your contribution and any tests performed.

Contributions involving hardware control or agricultural applications should clearly describe associated risks and validation requirements.

## 👥 Project Team

LEAF is developed as a student-led interdisciplinary research initiative.

**Student Researchers and Developers**

- **Henrique Barreto Costa**
- **Luiz Guilherme Caovilla**

**Faculty Advisor**

- **Guilherme Marins Maciel**

## ⚖️ Responsible Use

LEAF is provided for educational, experimental, and research purposes.

Automated agricultural equipment may involve electrical, mechanical, chemical, and environmental hazards. Users are responsible for ensuring appropriate safety procedures, supervision, and legal compliance.

The project does not guarantee pest identification accuracy, crop protection effectiveness, reduced pesticide consumption, or suitability for commercial deployment.

## 📄 License

This repository is distributed under the **MIT License**.

See the [LICENSE](../LICENSE) file for the complete license terms.

The software license does not grant regulatory approval for agricultural formulations, pesticide applications, or physical equipment operation.

## 🔗 Useful Links

- 🌐 [Official Project Website](https://henriquebrtocosta.github.io/leaf-cmjf/)
- 💻 [GitHub Repository](https://github.com/henriquebrtocosta/leaf-cmjf)
- 📁 [Project Materials](pesquisa/)
- 🐛 [Issues and Suggestions](https://github.com/henriquebrtocosta/leaf-cmjf/issues)
- 🇧🇷 [Documentação em Português](projeto.md)

---

<div align="center">

### 🌿 Technology and research for a more sustainable agricultural future.

**LEAF — Low-Cost Ecological AgroCare Framework**

_Exploring accessible innovation through science, engineering, and environmental responsibility._

**[Back to Top ↑](#-leaf)**

</div>
