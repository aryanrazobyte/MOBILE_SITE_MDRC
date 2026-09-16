export const SITE_URL = "https://www.mdrcindia.com";
export const PAGE_URL = `${SITE_URL}/mri-scan-gurugram`;
export const PHONE = "8920300300";
export const PHONE_DISPLAY = "8920 300 300";
export const PHONE_HREF = "tel:8920300300";
export const WHATSAPP_HREF = "https://wa.me/918586988847";
export const IOS_APP =
  "https://apps.apple.com/in/app/modern-diagnostic-health-app/id6504657715";
export const ANDROID_APP =
  "https://play.google.com/store/apps/details?id=com.mdrcindia.booking";

export const TITLE = "Advanced MRI Scan in Gurugram | MDRC";
export const DESCRIPTION =
  "Book an advanced MRI scan in Gurugram at MDRC. 3T MRI technology, expert radiologists, NABL & NABH accredited centres in Sector-40 and New Railway Road.";

export const SCAN_TYPES = [
  "MRI",
  "PET-CT / SPECT-CT",
  "CT Scan",
  "Ultrasound",
  "CBCT",
  "Mammography",
  "X-Ray",
  "Others",
];

export const mriScans = [
  {
    title: "Brain MRI",
    description: "Detailed imaging of the brain and neurological structures.",
    image: "/images/mri-scan-icons/brain-mri.png",
  },
  {
    title: "Spine MRI",
    description: "Detailed evaluation of the spine, discs, and surrounding structures.",
    image: "/images/mri-scan-icons/spine-mri.png",
  },
  {
    title: "Knee MRI",
    description: "Imaging to assess the knee joint, cartilage, and soft tissues.",
    image: "/images/mri-scan-icons/knee-mri.png",
  },
  {
    title: "Shoulder MRI",
    description: "Evaluation of the shoulder joint, muscles, tendons, and ligaments.",
    image: "/images/mri-scan-icons/shoulder-mri.png",
  },
  {
    title: "Abdomen MRI",
    description: "Detailed imaging of abdominal organs and soft tissues.",
    image: "/images/mri-scan-icons/abdomen-mri.png",
  },
  {
    title: "MR Angiography (MRA)",
    description: "Imaging of blood vessels to assess circulation and vascular conditions.",
    image: "/images/mri-scan-icons/mr-angiography-mra.png",
  },
];

export const features = [
  {
    title: "3T MRI Technology",
    description: "Advanced 3T MRI technology for superior imaging precision.",
    image: "/images/why-choose-mri/3t-mri-technology.png",
  },
  {
    title: "High-resolution Imaging",
    description: "Crystal-clear, high-resolution images for accurate diagnosis.",
    image: "/images/why-choose-mri/high-resolution-imaging.png",
  },
  {
    title: "Experienced Radiologists",
    description: "Expert radiologists delivering trusted and precise interpretations.",
    image: "/images/why-choose-mri/experienced-radiologists.png",
  },
  {
    title: "Faster & Accurate Reporting",
    description: "Quick, reliable reports to support timely medical decisions.",
    image: "/images/why-choose-mri/faster-accurate-reporting.png",
  },
  {
    title: "Patient-friendly Environment",
    description: "A comfortable, caring, and stress-free experience for every patient.",
    image: "/images/why-choose-mri/patient-friendly-environment.png",
  },
  {
    title: "Advanced Diagnostic Expertise",
    description: "Cutting-edge diagnostic expertise backed by clinical experience.",
    image: "/images/why-choose-mri/advanced-diagnostic-expertise.png",
  },
];

export const preparationSteps = [
  {
    number: "01",
    title: "Book Appointment",
    description: "Schedule your MRI at a convenient time before you visit the centre.",
    image: "/images/scanning-preparation/book-appointment.svg",
  },
  {
    number: "02",
    title: "Carry Previous Reports with Doctor Prescription",
    description: "Bring previous reports and your doctor’s prescription for the scan.",
    image: "/images/scanning-preparation/carry-previous-reports.svg",
  },
  {
    number: "03",
    title: "Inform the Radiologist",
    description: "Inform the team about implants or medical devices.",
    image: "/images/scanning-preparation/inform-the-radiologist.svg",
  },
  {
    number: "04",
    title: "Follow Instructions",
    description: "Follow fasting instructions, if applicable.",
    image: "/images/scanning-preparation/follow-instructions.svg",
  },
];

export const doctors = [
  { name: "Dr. Devendra Singh Yadav", role: "Managing Director", image: "/images/doctors/dr-devendra-singh-yadav-managing-director.jpg" },
  { name: "Dr. Deepali Yadav", role: "Director & Sr. Consultant - Radiology", image: "/images/doctors/dr-deepali-yadav-director-sr-consultant-radiology.jpg" },
  { name: "Dr. Nitin Kumar", role: "Director & Sr. Consultant - Radiology & Imaging", image: "/images/doctors/dr-nitin-kumar-director-sr-consultant-radiology-imaging.jpg" },
  { name: "Dr. Rashmi Kumari", role: "Sr. Consultant Radiologist", image: "/images/doctors/dr-rashmi-kumari-sr-consultant-radiologist.jpg" },
  { name: "Dr. Ankit Kataria", role: "Sr. Consultant Radiologist", image: "/images/doctors/dr-ankit-kataria-sr-consultant-radiologist.jpg" },
  { name: "Dr. Garima Yadav", role: "Consultant Radiologist", image: "/images/doctors/dr-garima-yadav-consultant-radiologist.jpg" },
  { name: "Dr. Rajat Garg", role: "Consultant Radiologist", image: "/images/doctors/dr-rajat-garg-consultant-radiologist.jpg" },
  { name: "Dr. Padma Chauhan", role: "Consultant Radiologist", image: "/images/doctors/dr-padma-chauhan-consultant-radiologist.jpg" },
];

export const locations = [
  {
    label: "GURUGRAM - Sec 40",
    badge: "3T MRI Centre",
    title: "Modern Diagnostic & Research Centre, Sector-40",
    address: "1057P, Sector-40, Gurugram, Haryana – 122002",
    timing: "7:00 AM – 8:00 PM",
    tags: ["3T MRI", "NABL & NABH", "7 AM – 8 PM"],
    image: "/images/centres/mdrc-sector-40-3t-mri-centre.jpg",
    imagePosition: "center center",
  },
  {
    label: "GURUGRAM - New Railway Road",
    badge: "Diagnostic Hub",
    title: "Modern Diagnostic & Research Centre, NRR",
    address: "363-364/4, Sector-12, New Railway Road, Gurugram – 122001",
    timing: "Open 24×7",
    tags: ["Advanced Imaging", "NABL Accredited", "Open 24×7"],
    image: "/images/centres/mdrc-new-railway-road-centre.jpg",
    imagePosition: "center center",
  },
];

export const services = [
  { name: "PET-CT / SPECT-CT", image: "/images/services/pet-ct-spect-ct.svg", scan: "PET-CT / SPECT-CT" },
  { name: "MRI", image: "/images/services/mri.svg", scan: "MRI" },
  { name: "CT Scan", image: "/images/services/ct-scan.svg", scan: "CT Scan" },
  { name: "Ultrasound", image: "/images/services/ultrasound.svg", scan: "Ultrasound" },
  { name: "X-Ray", image: "/images/services/x-ray.svg", scan: "X-Ray" },
  { name: "CBCT", image: "/images/services/cbct.svg", scan: "CBCT" },
  { name: "Mammography", image: "/images/services/mammography.svg", scan: "Mammography" },
  { name: "Pathology", image: "/images/services/pathology.svg", scan: "Others" },
  { name: "Health Checkups", image: "/images/services/health-checkups.svg", scan: "Others" },
  { name: "Other Services", image: "/images/services/other-services.svg", scan: "Others" },
];

export const faqs = [
  {
    question: "What is an MRI scan?",
    answer:
      "An MRI (Magnetic Resonance Imaging) scan is an advanced, non-invasive imaging test that uses magnetic fields and radio waves to create detailed images of organs, tissues, joints, the brain, spine, and other parts of the body. It helps doctors detect and evaluate a wide range of medical conditions.",
  },
  {
    question: "How much does an MRI cost in Gurugram?",
    answer:
      "The cost of an MRI scan in Gurugram depends on the body part being examined, the type of MRI, and whether contrast is required. At MDRC India, MRI scan prices vary by examination. Contact us for the latest MRI scan price and available packages.",
  },
  {
    question: "How long does an MRI take?",
    answer:
      "Most MRI scans take approximately 20 to 60 minutes, depending on the body part being examined and the type of scan. More complex or contrast-enhanced MRI examinations may take longer.",
  },
  {
    question: "Is MRI painful?",
    answer:
      "No. An MRI scan is generally painless and non-invasive. You will need to remain still while the scan is performed. Some patients may find the enclosed space uncomfortable, but our team helps make the procedure as comfortable as possible.",
  },
  {
    question: "Can I eat before an MRI?",
    answer:
      "It depends on the type of MRI you are having. Some MRI scans require no special preparation, while certain examinations or contrast-enhanced scans may require fasting. Our team will provide you with specific preparation instructions before your appointment.",
  },
  {
    question: "Is MRI safe?",
    answer:
      "MRI is considered a safe imaging technique because it does not use ionizing radiation, unlike X-rays and CT scans. However, because MRI uses a strong magnetic field, you should inform the radiology team about any implants, metal devices, or other relevant medical information before the scan.",
  },
  {
    question: "When will I receive my MRI report?",
    answer:
      "The reporting time depends on the type and complexity of the MRI examination. MDRC India aims to provide reports promptly, and the expected reporting time will be communicated to you at the time of your appointment.",
  },
  {
    question: "Do I need a doctor's prescription?",
    answer:
      "A doctor's prescription or referral may be recommended depending on the MRI examination and your medical requirements. It is best to consult your doctor to determine whether an MRI is appropriate and which type of scan is required.",
  },
];
