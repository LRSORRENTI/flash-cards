import { Flashcard } from ".";

export const compTIA_A_Plus: Flashcard[] = [
    {
        question: "What is the primary function of the BIOS in a computer?",
        answer: "The BIOS (Basic Input/Output System) is firmware that initializes and tests hardware components on a computer during the startup process (POST - Power-On Self-Test) and provides runtime services for operating systems and programs."
    },
    {
        question: "What does RAID stand for, and what is its purpose?",
        answer: "RAID (Redundant Array of Independent Disks) is a data storage virtualization technology that combines multiple physical disk drive components into one or more logical units for the purposes of data redundancy, performance improvement, or both."
    },
    {
        question: "How does virtualization benefit businesses?",
        answer: "Virtualization allows businesses to run multiple virtual machines on a single physical machine, sharing the resources of that machine across multiple environments. It improves hardware utilization, reduces physical server footprint, decreases energy consumption, and allows for easier backup and disaster recovery."
    },
    {
        question: "Explain the difference between an SSD and an HDD.",
        answer: "An SSD (Solid State Drive) uses flash memory to store data, which provides faster read and write speeds, lower power consumption, and higher durability due to no moving parts. An HDD (Hard Disk Drive) uses mechanical platters and a moving read/write head to access data and is generally slower but offers more storage capacity for a lower cost."
    },
    {
        question: "What is the purpose of a UPS in a computer system?",
        answer: "A UPS (Uninterruptible Power Supply) provides backup power when the electrical power fails or drops to an unacceptable voltage level. It allows for safe closure of running applications and the operating system, preventing data loss and hardware damage."
    },
    {
        question: "Describe the function of a CMOS battery in a computer.",
        answer: "The CMOS battery powers the BIOS firmware in your computer, which keeps the system clock and other settings accurate even when the device is turned off or disconnected from power outlets."
    },
    {
        question: "What is the purpose of TCP/IP in networking?",
        answer: "TCP/IP (Transmission Control Protocol/Internet Protocol) is the suite of communications protocols used to connect hosts on the Internet. TCP/IP specifies how data is exchanged over the network by providing end-to-end communications that identify how it should be broken into packets, addressed, transmitted, routed, and received at the destination."
    },
    {
        question: "What are the risks of not updating software regularly?",
        answer: "Not updating software can leave a computer vulnerable to security risks such as viruses, malware, and other attacks that exploit software vulnerabilities that patches would otherwise fix. It can also lead to compatibility issues with other software and decrease overall system stability."
    },
    {
        question: "What does DHCP assign to a device when it connects to a network?",
        answer: "DHCP (Dynamic Host Configuration Protocol) automatically assigns a dynamic IP address to a device from a defined range of numbers configured for a given network when it connects, allowing the device to communicate effectively within the network and on the internet."
    },
    {
        question: "Explain the difference between a modem and a router.",
        answer: "A modem connects to your ISP and brings internet connectivity into a home or business, converting incoming and outgoing data from one form to another. A router, on the other hand, connects multiple networks and directs network traffic between them efficiently."
    },
    {
        question: "What is a VLAN and what are its advantages?",
        answer: "A VLAN (Virtual Local Area Network) is a subgroup of a network which combines multiple network devices into a single segment to improve traffic management and increase security. Advantages include reduced broadcast storms, heightened security, and better control over LAN traffic."
    },
    {
        question: "How does a firewall protect a network?",
        answer: "A firewall monitors incoming and outgoing network traffic and permits or blocks data packets based on a set of security rules. Its purpose is to establish a barrier between a trusted internal network and untrusted external network environments such as the Internet."
    },
    {
        question: "What is the purpose of anti-static wrist straps?",
        answer: "Anti-static wrist straps are used to prevent static electricity from accumulating on the user or the electronic device being handled. This helps protect sensitive computer components from static damage during installation or maintenance."
    },
    {
        question: "Describe the main function of a network switch.",
        answer: "A network switch connects devices within a network, enabling communication and data sharing between PCs, printers, servers, and other networked devices. Unlike a hub, a switch does not broadcast packets to all connected devices but rather sends them directly to the destination device using MAC addresses."
    },
    {
        question: "What are the common symptoms of a failing power supply?",
        answer: "Common symptoms of a failing power supply include random computer crashes or reboots, varying noise from the power supply unit, issues with starting up the computer, and occasional blue screen of deaths (BSOD)"
    },
    {
        question: "What is the primary purpose of thermal paste in a computer?",
        answer: "Thermal paste, also known as thermal compound, is used to fill air gaps between the CPU (central processing unit) and the heat sink to enhance heat dissipation. It improves the efficiency of the cooling system by providing a heat-conductive medium that aids in the transfer of heat away from the CPU."
    },
    {
        question: "What does POST stand for, and what does it do?",
        answer: "POST stands for Power-On Self-Test. It is a diagnostic testing sequence that a computer's basic input/output system (BIOS) runs to check the hardware components like RAM, disk drives, and other hardware components to ensure they are working correctly before the computer boots up."
    },
    {
        question: "Explain the difference between USB 2.0 and USB 3.0.",
        answer: "USB 2.0 and USB 3.0 are versions of the Universal Serial Bus standard for interfacing computers and electronic devices. USB 3.0 provides significantly higher transfer rates up to 5 Gbps, which is about 10 times faster than USB 2.0, and improved power management features."
    },
    {
        question: "What are the implications of using a 32-bit operating system versus a 64-bit operating system?",
        answer: "A 32-bit operating system can only support up to 4GB of RAM, while a 64-bit operating system can support significantly more memory (up to 16 Exabytes theoretically), allowing for better performance and the ability to run more complex applications and process larger amounts of data."
    },
    {
        question: "What is the function of a sound card in a computer?",
        answer: "A sound card is an expansion card or integrated circuit that provides input and output of audio signals to and from a computer under control of computer programs. It translates data into audible signals that can be played through speakers and records audio from external sources."
    },
    {
        question: "What does the term 'driver' refer to in computer terms?",
        answer: "In computing, a driver is a specific type of software that allows higher-level computer programs to interact with a hardware device. Drivers communicate with the hardware through the computer bus or communications subsystem to which the hardware connects."
    },
    {
        question: "Describe what a Solid State Drive (SSD) does to improve computer performance.",
        answer: "An SSD speeds up computers significantly due to its fast read and write speeds compared to a traditional hard disk drive (HDD). It allows for quicker boot times, faster file transfers, and better overall system responsiveness."
    },
    {
        question: "What is the purpose of a defragmentation tool?",
        answer: "A defragmentation tool reorganizes the data on a disk drive so that the files are stored in contiguous sections. This minimizes the movement of the read/write heads on HDDs, speeding up data access and improving the efficiency of the storage device."
    },
    {
        question: "Explain the purpose of a network gateway.",
        answer: "A network gateway serves as a 'gate' between two networks, allowing them to communicate. It routes traffic from a workstation to the outside network that is serving the web pages and can also translate communication between different network architectures."
    },
    {
        question: "What is an IP address?",
        answer: "An IP address is a unique string of numbers separated by periods or colons that identifies each computer using the Internet Protocol to communicate over a network. It allows devices to locate and identify each other on a network, ensuring that data is sent to the correct destination."
    },
    {
        question: "How do you prevent overheating in laptops?",
        answer: "Preventing overheating in laptops can be achieved by ensuring proper ventilation (not blocking air vents), using cooling pads, cleaning internal dust regularly, and replacing old thermal paste. Additionally, avoiding running high-intensity programs for extended periods can also help."
    },
    {
        question: "What is the Blue Screen of Death (BSOD) and what causes it?",
        answer: "The Blue Screen of Death (BSOD) is a stop error screen displayed on a Windows computer system after a fatal system error. Causes can include hardware failures, corrupted software, driver conflicts, or memory issues."
    },
    {
        question: "What are the main components of a motherboard?",
        answer: "The main components of a motherboard include the CPU socket, RAM slots, BIOS chip, chipset, expansion slots, and connectors for input/output devices. It also includes interfaces for hard drives, optical drives, and other peripherals."
    },
    {
        question: "What role does RAM play in a computer's performance?",
        answer: "RAM (Random Access Memory) provides space for your computer to read and write data to be accessed by the CPU (central processing unit). More RAM allows a computer to handle more applications simultaneously and can significantly affect the system's responsiveness and performance."
    },
    {
        question: "Describe the difference between read-only memory (ROM) and random-access memory (RAM).",
        answer: "ROM (Read-Only Memory) is a type of non-volatile storage that is primarily used to store firmware (software that is closely tied to specific hardware and unlikely to need frequent updates). Unlike ROM, RAM (Random-Access Memory) is volatile and is used by the computer to store data temporarily while programs are running, which allows for quick read and write access."
    },
];
