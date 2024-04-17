// Define a type for the flashcard
type Flashcard = {
    question: string;
    answer: string;
};

// Array to store the flashcards

const flashcards: Flashcard[] = [
    {
        question: "What is the purpose of DHCP in a network?",
        answer: "DHCP (Dynamic Host Configuration Protocol) is used to automatically assign IP addresses and other network configuration parameters to devices on a network, allowing them to communicate effectively without manual setup."
    },
    {
        question: "Describe what a subnet mask is and how it is used.",
        answer: "A subnet mask is a 32-bit number that masks an IP address and divides the IP address into network and host parts. It is used to determine what subnet an IP address belongs to."
    },
    {
        question: "What is the difference between UDP and TCP?",
        answer: "TCP (Transmission Control Protocol) is a connection-oriented protocol that ensures reliable and ordered delivery of data packets. UDP (User Datagram Protocol) is a connectionless protocol that does not guarantee delivery, order, or error checking, making it faster and more efficient for applications that do not need guaranteed delivery."
    },
    {
        question: "Explain what DNS is and its role in networking.",
        answer: "DNS (Domain Name System) is a system used to translate human-friendly domain names (like www.example.com) into IP addresses that computers use to identify each other on the network, facilitating easier access to websites and services."
    },
    {
        question: "What is the purpose of a VLAN?",
        answer: "A VLAN (Virtual Local Area Network) is used to segment network traffic into different broadcast domains to enhance performance, improve security, and better manage network traffic."
    },
    {
        question: "Describe the function of NAT in a network.",
        answer: "NAT (Network Address Translation) allows a network device (usually a firewall or router) to modify the IP addresses of incoming and outgoing traffic so that multiple devices on a private network can share a single public IP address."
    },
    {
        question: "What is the OSI model and its importance in networking?",
        answer: "The OSI (Open Systems Interconnection) model is a conceptual framework used to understand network interactions in seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. It helps in troubleshooting and standardizing network operations."
    },
    {
        question: "How does a switch differ from a hub?",
        answer: "A switch operates at the data link layer and directs data frames to devices on the same network based on MAC addresses. A hub, on the other hand, is a simpler device that broadcasts all incoming data to every port, without regard to which device the data is intended for."
    },
    {
        question: "Explain the purpose of a firewall in a network.",
        answer: "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules, protecting networks from unauthorized access and threats."
    },
    {
        question: "What are the basic functions of a router in a network?",
        answer: "A router connects multiple networks and forwards data packets between them. It determines the best path for traffic and handles data transmission across different network segments."
    },
    {
        question: "What is the purpose of an access control list (ACL) on a network device?",
        answer: "An ACL is used to define rules that allow or deny traffic based on various criteria such as IP addresses, protocols, or port numbers, thus controlling the flow of traffic and enhancing security."
    },
    {
        question: "Explain the concept of QoS and why it is important in networks.",
        answer: "QoS (Quality of Service) is a mechanism used to prioritize network traffic to ensure the performance of critical applications in conditions of limited bandwidth. It's important for maintaining the efficiency and quality of service for voice, video, and other real-time communications."
    },
    {
        question: "What is the difference between a managed and an unmanaged switch?",
        answer: "A managed switch allows for greater control over network traffic and more advanced features like VLANs, QoS, and network monitoring. An unmanaged switch is simpler and typically used in scenarios where network management is not necessary."
    },
    {
        question: "Describe what a DMZ (Demilitarized Zone) is used for in network security.",
        answer: "A DMZ is a physical or logical subnetwork that contains and exposes an organization's external-facing services to a larger, untrusted network, typically the Internet. It adds an additional layer of security to an organization’s LAN."
    },
    {
        question: "What is IPv6 and how does it differ from IPv4?",
        answer: "IPv6 is the most recent version of the Internet Protocol, designed to replace IPv4. It provides a much larger address space, improved routing and address autoconfiguration, built-in security features, and better QoS capabilities."
    },
    {
        question: "How do link-state routing protocols determine the best path?",
        answer: "Link-state protocols, like OSPF, build a complete map of the topology and compute the shortest path to each node based on the state of each link (which includes factors like bandwidth and delay)."
    },
    {
        question: "What role does SNMP play in network management?",
        answer: "SNMP (Simple Network Management Protocol) is used for collecting and organizing information about managed devices on IP networks and for modifying that information to change device behavior."
    },
    {
        question: "Explain the difference between baseband and broadband signaling.",
        answer: "Baseband signaling uses the entire bandwidth of the channel to transmit a single data signal. Broadband signaling divides the channel into multiple frequency ranges to transmit multiple data signals simultaneously."
    },
    {
        question: "What is a VPN and how does it work?",
        answer: "A VPN (Virtual Private Network) extends a private network across a public network, allowing users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network. It works by establishing a virtual point-to-point connection through the use of dedicated connections, encryption, or a combination of both."
    },
    {
        question: "What are the three primary types of network media?",
        answer: "The three primary types of network media are twisted pair cable (both shielded and unshielded), coaxial cable, and fiber optic cable. Each type has different characteristics and is suited for different network environments and requirements."
    },
    {
        question: "What is a collision domain and how can it be reduced?",
        answer: "A collision domain is a network segment where data packets can collide if two devices try to transmit at the same time. It can be reduced by using switches instead of hubs, as each switch port provides a separate collision domain."
    },
    {
        question: "Explain the function of the Spanning Tree Protocol (STP).",
        answer: "STP prevents network loops that can occur in a redundant network topology by creating a tree structure of switch connections. It blocks some paths to ensure there is only one active path between any two network nodes."
    },
    {
        question: "What is a packet and what does it contain?",
        answer: "A packet is a small unit of data carried over a network. Packets contain control information such as source and destination addresses, sequencing information, and data payload."
    },
    {
        question: "Describe what an APIPA address is and when it might be used.",
        answer: "APIPA (Automatic Private IP Addressing) addresses are self-configured, typically ranging from 169.254.0.1 to 169.254.255.254. They are used when a device cannot obtain an IP address from a DHCP server, allowing local networking in limited scenarios."
    },
    {
        question: "What is the primary purpose of a protocol analyzer in network management?",
        answer: "A protocol analyzer, or network sniffer, captures network traffic and helps in analyzing and debugging data packets to diagnose network problems, monitor network activity, and ensure data is correctly transmitted."
    },
    {
        question: "Explain the difference between symmetric and asymmetric encryption.",
        answer: "Symmetric encryption uses the same key for both encryption and decryption. Asymmetric encryption uses a pair of keys, one for encryption (public key) and one for decryption (private key), enhancing security by facilitating secure data exchange over unsecured networks."
    },
    {
        question: "What are the implications of using an open Wi-Fi network?",
        answer: "Open Wi-Fi networks do not encrypt traffic, which can expose users to security risks such as eavesdropping by third parties, man-in-the-middle attacks, and unauthorized access to sensitive data."
    },
    {
        question: "Describe how a load balancer improves network efficiency.",
        answer: "A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed. This improves response times and availability, enhancing the overall performance of network services."
    },
    {
        question: "What are the benefits of using cloud-based network management?",
        answer: "Cloud-based network management offers scalability, flexibility, and cost-efficiency by allowing network resources to be managed and monitored from centralized locations without the need for on-site infrastructure and maintenance."
    },
    {
        question: "Explain what multicast transmission is and its use case.",
        answer: "Multicast transmission is the delivery of information to a group of destinations simultaneously using the most efficient strategy to deliver the messages over each link of the network only once. It's commonly used for streaming media, like video and audio broadcasts over the internet."
    },
];


// Function to load flashcards from a text file
async function loadFlashcards(filePath: string): Promise<void> {
    // Simulate reading a file (in real scenario, you would fetch this data or read from a local file)
    const fileContent = `Question: What is the purpose of DHCP in a network?\nAnswer: DHCP (Dynamic Host Configuration Protocol) is used to automatically assign IP addresses and other network configuration parameters to devices on a network, allowing them to communicate effectively without manual setup.`;
    
    // Split the content into flashcards assuming a specific format
    const lines = fileContent.split('\n');
    for (let i = 0; i < lines.length; i += 2) {
        const question = lines[i].replace('Question: ', '');
        const answer = lines[i + 1].replace('Answer: ', '');
        flashcards.push({ question, answer });
    }
}

// Function to get a random flashcard
function getRandomFlashcard(): Flashcard {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    return flashcards[randomIndex];
}

// Function to flip the flashcard
function flipFlashcard(flashcard: Flashcard): void {
    console.log(`Question: ${flashcard.question}`);
    console.log(`Answer: ${flashcard.answer}`);
}

// Example of using the functions
async function main() {
    await loadFlashcards('documents\\01_Questions.txt');
    const flashcard = getRandomFlashcard();
    flipFlashcard(flashcard);
}

main();
