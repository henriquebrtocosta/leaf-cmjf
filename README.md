# LEAF — Low-Cost Ecological AgroCare Framework

**Sustainable Precision Agriculture Through Computer Vision and Automated Crop Protection**

## Overview

LEAF is a student-led project exploring sustainable crop protection, computer vision, and automated spraying for small and medium-scale farming.

## Repository structure

```text
LEAF/
├── leaf.py                         # Main Python application
├── funcao_identific.py             # Image analysis and crop/pest identification
├── executar.bat                    # Windows launcher
├── codigos/
│   └── firmware_usb/               # ESP32 firmware for USB serial communication
│       ├── firmware_usb.ino         # Main Arduino sketch
│       ├── controle_motor.ino       # Stepper motor control
│       ├── comunicacao_serial.ino   # Serial command handling
│       └── controle_bombas.ino      # Pump control
├── README.md
├── LICENSE
└── .gitignore
```

## Software requirements

- Python 3
- OpenCV
- NumPy
- keyboard
- pyserial
- pyttsx3
- matplotlib

Install the dependencies from the project root:

```bash
python -m pip install opencv-python numpy keyboard pyserial pyttsx3 matplotlib
```

### Recommended Windows setup

Create a virtual environment and install the dependencies:

```bat
python -m venv .venv
.venv\Scripts\python.exe -m pip install opencv-python numpy keyboard pyserial pyttsx3 matplotlib
```

Then run `executar.bat`. The launcher uses `.venv\Scripts\python.exe` and starts `leaf.py`.

## Hardware configuration

Before running the application, confirm that the serial port configured in `leaf.py` matches the ESP32 port on your computer. The current code uses `COM8` at 9600 baud and camera index `1`; these values may need to be changed for another setup.

The firmware in `codigos/firmware_usb/` communicates through USB serial. Open `firmware_usb.ino` in the Arduino IDE, keeping the related `.ino` tabs together in the same folder.

## System overview

The Python application captures camera frames and calls `funcao_identific.py` to identify crops and possible pest presence. It communicates with the ESP32 over serial to coordinate movement and pump control.

The project is under development. Hardware behavior, identification performance, and agricultural formulations must be tested and validated before practical deployment.

## Responsible use

Agricultural formulations and automated spraying systems must be evaluated for crop safety, operator safety, environmental effects, and applicable regulatory requirements before use. Natural or biodegradable ingredients should not automatically be assumed harmless or effective.

## Contributors

- Henrique Barreto Costa
- Luiz Guilherme Caovilla
- Guilherme Marins Maciel
