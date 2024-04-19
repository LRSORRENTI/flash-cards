import { Flashcard } from ".";

export const cyberSecurityCards: Flashcard[] = [
    {
        question: "What is the purpose of DHCP in a network?",
        answer: "DHCP (Dynamic Host Configuration Protocol) is used to automatically assign IP addresses and other network configuration parameters to devices on a network, allowing them to communicate effectively without manual setup."
    },
    {
        question: "Describe what a subnet mask is and how it is used.",
        answer: "A subnet mask is a 32-bit number that masks an IP address and divides the IP address into network and host parts. It is used to determine what subnet an IP address belongs to."
    },
    {
        question: "What is a VPN and why is it important?",
        answer: "A VPN (Virtual Private Network) extends a private network across a public network, allowing users to send and receive data as if their computing devices were directly connected to the private network. It enhances security and privacy when transmitting data over the Internet."
    },
    {
        question: "Explain what a firewall does in cybersecurity.",
        answer: "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted internal network and untrusted external network, such as the Internet."
    },
    {
        question: "What is malware? Give examples.",
        answer: "Malware, short for malicious software, refers to any software intentionally designed to cause damage to a computer, server, client, or computer network. Examples include viruses, worms, Trojan horses, and ransomware."
    },
    {
        question: "What is phishing?",
        answer: "Phishing is a cyber attack that uses disguised email as a weapon. The goal is to trick the email recipient into believing that the message is something they want or need — a request from their bank, for instance, or a note from someone in their company — and to click a link or download an attachment."
    },
    {
        question: "How does encryption protect data?",
        answer: "Encryption is the process of encoding data to make it unreadable and inaccessible to unauthorized users. It uses algorithms to transform readable data into a secured form, which can only be reverted to readable form with the correct decryption key."
    },
    {
        question: "What are digital signatures and how are they used?",
        answer: "Digital signatures are a type of electronic signature that uses cryptographic techniques to provide a secure and tamper-evident way to sign digital documents. They ensure the authenticity and integrity of a message, software, or digital document."
    },
    {
        question: "What is two-factor authentication (2FA), and why is it used?",
        answer: "Two-factor authentication (2FA) is a security process in which the user provides two different authentication factors to verify themselves. This method is used to protect the user's credentials and the resources the user can access."
    },
    {
        question: "What is social engineering in the context of cybersecurity?",
        answer: "Social engineering is a manipulation technique that exploits human error to gain private information, access, or valuables. In cybersecurity, it is often used to trick people into breaking normal security procedures."
    },
    {
        question: "What is a DoS attack?",
        answer: "A DoS (Denial of Service) attack is a malicious attempt to disrupt normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic."
    },
    {
        question: "What role does antivirus software play in protecting a computer?",
        answer: "Antivirus software scans the computer and files for malware and threats. It removes or quarantines any malicious software it detects, helping to protect the computer from cyber threats."
    },
    {
        question: "What is ransomware?",
        answer: "Ransomware is a type of malicious software designed to block access to a computer system until a sum of money is paid. It typically encrypts files on the victim’s device and demands ransom for decryption keys."
    },
    {
        question: "What is the significance of patch management in security?",
        answer: "Patch management is the process of distributing and applying updates to software. These patches often contain fixes to security vulnerabilities, thus playing a critical role in keeping software secure from exploitation."
    },
    {
        question: "Describe what SSL/TLS does for security.",
        answer: "SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols designed to provide secure communication over a computer network. They are most commonly used in web browsers to secure the connection between the server and the browser."
    },
    {
        question: "What is a brute force attack?",
        answer: "A brute force attack is a trial-and-error method used by application programs to decode encrypted data such as passwords or Data Encryption Standard (DES) keys, through exhaustive effort rather than employing intellectual strategies."
    },
    {
        question: "Explain the concept of a security policy in an organization.",
        answer: "A security policy is a set of documented rules and guidelines that define how an organization and its employees should protect organizational assets and manage its security risks."
    },
    {
        question: "What is a man-in-the-middle attack?",
        answer: "A man-in-the-middle (MITM) attack is a type of cyber threat where the attacker secretly intercepts and relays messages between two parties who believe they are directly communicating with each other. This allows the attacker to spy on, manipulate, or disrupt communications."
    },
    {
        question: "What are honeypots in cybersecurity?",
        answer: "Honeypots are decoy systems or networks designed to attract potential attackers. The purpose is to study the attack techniques and gather information about the attackers to improve security measures."
    },
    {
        question: "Describe what role an intrusion detection system (IDS) plays in network security.",
        answer: "An Intrusion Detection System (IDS) monitors network traffic for suspicious activities and known threats, sending alerts when it detects potential malicious incidents. These systems help in detecting unauthorized access or breaches."
    },
    {
        question: "What is a zero-day vulnerability?",
        answer: "A zero-day vulnerability refers to a security flaw in software that is unknown to those who should be interested in its mitigation, including the vendor of the target software. Because the vulnerability is not known, it can be exploited by attackers before developers have an opportunity to issue a patch."
    },
    {
        question: "What is a botnet?",
        answer: "A botnet is a network of private computers infected with malicious software and controlled as a group without the owners' knowledge, e.g., to send spam messages or to launch denial of service attacks."
    },
    {
        question: "Explain what a security audit is.",
        answer: "A security audit is a systematic evaluation of the security of a company's information system by measuring how well it conforms to a set of established criteria. This comprehensive assessment reviews physical configuration and environment, software, information handling processes, and user practices."
    },
    {
        question: "What is the role of risk management in cybersecurity?",
        answer: "Risk management in cybersecurity involves identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize, monitor, and control the probability or impact of unfortunate events. It aims to protect organizational assets and ensure business continuity."
    },
    {
        question: "What is endpoint security?",
        answer: "Endpoint security is the process of securing the various endpoints on a network, often defined as end-user devices such as mobile devices, laptops, and desktop PCs, against exploitation by malicious actors and campaigns."
    },
    {
        question: "What does the term 'threat intelligence' refer to in cybersecurity?",
        answer: "Threat intelligence involves the collection, evaluation, and analysis of information about potential or current attacks that threaten the safety of an organization or its assets. It helps organizations understand the risks of common and severe external threats."
    },
    {
        question: "What is a security breach?",
        answer: "A security breach occurs when an intruder gains unauthorized access to an organization’s protected systems and data. It can lead to significant data losses and other destructive outcomes."
    },
    {
        question: "What are security controls and why are they important?",
        answer: "Security controls are safeguards or countermeasures to avoid, detect, counteract, or minimize security risks to physical property, information, computer systems, or other assets. They help protect the integrity, confidentiality, and availability of information."
    },
    {
        question: "What is identity and access management (IAM)?",
        answer: "Identity and Access Management (IAM) is a framework of business processes, policies, and technologies that facilitates the management of electronic identities. By managing identities, IAM systems allow the right individuals to access the right resources at the right times for the right reasons."
    },
    {
        question: "Describe what a Security Information and Event Management (SIEM) system does.",
        answer: "A Security Information and Event Management (SIEM) system provides real-time analysis of security alerts generated by applications and network hardware. It aggregates and analyzes log data, helping organizations detect, understand, and respond to security incidents."
    },
];
