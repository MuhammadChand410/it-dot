import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ASIDE_LINKS = [
  {
    id: 1,
    heading: 'What information do we collect?'
  },
  {
    id: 2,
    heading: 'How do we use your information?'
  },
  {
    id: 3,
    heading: 'Sharing Your Information'
  },
  {
    id: 4,
    heading: 'Data Security'
  },
  {
    id: 5,
    heading: 'Data Retention'
  },
  {
    id: 6,
    heading: 'Your Data Protection Rights'
  },
  {
    id: 7,
    heading: 'International Data Transfers'
  },
  {
    id: 8,
    heading: 'Third-Party Links'
  },
  {
    id: 9,
    heading: 'Changes to This Privacy Policy'
  },
   {
    id: 10,
    heading: 'Contact Us'
  },


]
const PRIVACY_SECTIONS = [
  {
    id: 1,
    heading: "What information do we collect?",
    description: [
      "We collect several types of information to provide and improve our Service to you:",
      "• Contact Information: Name, email address, phone number, and company details.",
      "• Account Information: Username, password, and other security information for authentication."
    ]
  },
  {
    id: 2,
    heading: "How do we use your information?",
    description: [
      "We use the collected information for various purposes:",
      "• To Provide and Maintain the Service: Ensure proper operation and provide features you have requested.",
      "• To Improve the Service: Analyze usage to enhance features and functionality.",
      "• To Communicate with You: Respond to inquiries, provide updates, and send marketing communications with your consent.",
      "• To Ensure Security: Monitor and improve the security of our Service.",
      "• To Comply with Legal Obligations: Meet regulatory requirements and legal processes."
    ]
  },
  {
    id: 3,
    heading: "Sharing Your Information",
    description: [
      "We may share your information in the following situations:",
      "• With Service Providers: Third parties that assist us in providing the Service, such as hosting and analytics services.",
      "• For Legal Reasons: When required by law or to protect our rights, property, or safety, or that of others.",
      "• In Business Transfers: In connection with a merger, sale, or acquisition of our company or assets."

    ]
  },
  {
    id: 4,
    heading: "Data Security",
    description: [
      "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure."
    ]
  },
  {
    id: 5,
    heading: "Data Retention",
    description: [
      "We retain your information as long as necessary to provide the Service and fulfill the purposes outlined in this Privacy Policy. We may also retain and use your information to comply with legal obligations, resolve disputes, and enforce our agreements."
    ]
  },
  {
    id: 6,
    heading: "Your Data Protection Rights",
    description: [
      "Depending on your location, you may have the following rights regarding your personal information:",
      "• Right to Access: Access your personal information.",
      "• Right to Rectification: Correct inaccurate or incomplete information.",
      "• Right to Erasure: Request deletion of your personal information.",
      "• Right to Restrict Processing: Limit how your information is used.",
      "• Right to Data Portability: Obtain and reuse your information in another service.",
      "• Right to Object: Object to processing of your information."
    ]
  },
  {
    id: 7,
    heading: "International Data Transfers",
    description: [
      "Your information may be transferred to and processed in countries other than your own. We ensure that such transfers are conducted in accordance with applicable data protection laws and that appropriate safeguards are in place."
    ]
  },
  {
    id: 8,
    heading: "Third-Party Links",
    description: [
      "Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties."
    ]
  },
  {
    id: 9,
    heading: "Changes to This Privacy Policy",
    description: [
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the Last Updated date. We encourage you to review this Privacy Policy periodically."
    ]
  },
  {
    id: 10,
    heading: "Contact Us",
    description: [
      "If you have any questions about this Privacy Policy, please contact us at:",
      "dot.it Technologies, Inc.",
      "McKinney, Texas",
      "support@gotdot.it",
      "469-543-6341",
      "By using our Service, you acknowledge that you have read and understood this Privacy Policy. Thank you for trusting us with your information.",
    ]
  }
];

export default function PrivacyAside() {
  const [activeId, setActiveId] = useState(null);
  return (
    <section className="md:py-20 py-8 bg-white">
      <div className="container">
        <div className="flex gap-20 px-8">
          <aside className="hidden md:block w-[362px] h-[510px] bg-gray-50 border border-gray-200 px-8 py-8 rounded-xl sticky top-24 self-start">
            <div className="flex md:flex-col flex-row justify-between">
              {ASIDE_LINKS.map((card =>
                <HashLink smooth to={`#section-${card.id}`} className="grid gap-3" key={card.id} onClick={() => setActiveId(card.id)}>
                  <h2 className={`text-lg text-[#717680] pb-3 transition-colors ${activeId === card.id ? "text-blue-700 font-medium" : "text-[#717680] font-normal"}`}>{card.heading}</h2>
                </HashLink>
              ))}
              <Link to='/contact/us' className="bg-[#0160C9] w-fit cursor-pointer py-3 px-5 rounded-full text-white text-sm font-semibold hover:bg-[#014fa8] transition-all duration-200">
                Got a question? Contact us
              </Link>
            </div>
          </aside>

          <div className="max-w-[692px]">
            {PRIVACY_SECTIONS.map((section) => (
              <div key={section.id} className="pb-10" id={`section-${section.id}`} style={{ scrollMarginTop: '110px' }}>
                <h3 className="text-2xl font-semibold text-[#101828] pb-5">{section.heading}</h3>
                {section.description.map((desc, index) => (
                  <p key={index} className="text-lg font-normal text-[#777B8B] pb-2">{desc}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}