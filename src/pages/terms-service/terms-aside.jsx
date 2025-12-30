import { style } from "framer-motion/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ASIDE_LINKS = [
  {
    id: 1,
    heading: 'Acceptance of Terms'
  },
  {
    id: 2,
    heading: 'Changes to Terms'
  },
  {
    id: 3,
    heading: 'Registration and Account'
  },
  {
    id: 4,
    heading: 'Use of the Services'
  },
  {
    id: 5,
    heading: 'Fees & Payment '
  },
  {
    id: 6,
    heading: 'Data & Privacy'
  },
  {
    id: 7,
    heading: 'Intellectual Property'
  },
  {
    id: 8,
    heading: 'Termination'
  },
  {
    id: 9,
    heading: 'Disclaimer of Warranties'
  },
  {
    id: 10,
    heading: 'Limitation of Liability'
  },
  {
    id: 11,
    heading: 'Governing Law'
  },
  {
    id: 12,
    heading: 'Dispute Resolution'
  },
  {
    id: 13,
    heading: 'Contact Us'
  },


]
const PRIVACY_SECTIONS = [
  {
    id: 1,
    heading: "Acceptance of Terms",
    description: [
      "By accessing or using the Services, you represent that you have the legal authority to accept these Terms on behalf of yourself or the entity you represent. If you do not have such authority, you may not use the Services.",
    ]
  },
  {
    id: 2,
    heading: "Changes to Terms",
    description: [
      "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the updated Terms on our website. Your continued use of the Services after the posting of changes constitutes your acceptance of such changes.",
    ]
  },
  {
    id: 3,
    heading: "Registration and Account",
    description: [
      "• You may need to create an account to access some features of the Services. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
      "• You are responsible for safeguarding your account password and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account."

    ]
  },
  {
    id: 4,
    heading: "Use of the Services",
    description: [
      "a. You agree to use the Services only for lawful purposes and in accordance with these Terms.",
      "b. You shall not:",
      "• Use the Services in any manner that could disable, overburden, damage, or impair the Services or interfere with any other party’s use of the Services.",
      "• Attempt to gain unauthorized access to any part of the Services.",
      "• Use any automated means to access the Services.",
      "• Use the Services to store or transmit malicious code.",
      "• Resell, lease, or provide the Services in any commercial context to a third party.",
    ]
  },
  {
    id: 5,
    heading: "Fees and Payment",
    description: [
      "• Some parts of the Services may be offered on a subscription basis or for a fee. The specific terms related to pricing and payment will be provided at the time of purchase.",
      "• You agree to pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable.",
      "• We reserve the right to change our prices at any time. Any price change will be effective at the end of the then-current billing cycle.",
    ]
  },
  {
    id: 6,
    heading: "Data Privacy",
    description: [
      "Our [Privacy Policy](link to Privacy Policy) describes how we collect, use, and disclose information about our users. By using the Services, you agree to our Privacy Policy.",
    ]
  },
  {
    id: 7,
    heading: "Intellectual Property",
    description: [
      "• The Services and all content, including but not limited to software, images, text, graphics, illustrations, logos, and patents, are owned by us or our licensors and are protected by intellectual property laws.",
      "• You are granted a limited, non-exclusive, non-transferable, revocable license to use the Services solely for your internal business purposes.",
      "• You shall not modify, reproduce, distribute, create derivative works of, publicly display, or perform any part of the Services without our prior written consent.",
    ]
  },
  {
    id: 8,
    heading: "Termination",
    description: [
      "• We may terminate or suspend your account and access to the Services at any time, without prior notice or liability, if you breach these Terms.",
      "• Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services.",
    ]
  },
  {
    id: 9,
    heading: "Disclaimer of Warranties",
    description: [
      "The Services are provided as is and as available without warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components."
    ]
  },
  {
    id: 10,
    heading: "Limitation of Liability",
    description: [
      "In no event shall we, our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of or inability to use the Services.",
       ]
  },
   {
    id: 11,
    heading: "Governing Law",
    description: [
      "These Terms shall be governed and construed in accordance with the laws of Texas/United States, without regard to its conflict of law provisions.",
       ]
  },
   {
    id: 12,
    heading: "Dispute Resolution",
    description: [
      "Any disputes arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of [Arbitration Association]. The arbitration shall be conducted in Texas / United States.",
       ]
  },
  {
    id: 13,
    heading: "Contact Us",
    description: [
      "If you have any questions about these Terms, please contact us at support@gotdot.it.",
      "By using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service..",
       ]
  },
];

export default function TermsAside() {
  const [activeId, setActiveId] = useState(null);
  return (
    <section className="md:py-20 py-8 bg-white">
      <div className="container">
        <div className="flex gap-20 px-8">
          <aside className="hidden md:block w-[362px] h-[620px] bg-gray-50 border border-gray-200 px-8 py-8 rounded-xl sticky top-24 self-start">
            <div className="flex md:flex-col flex-row justify-between">
              {ASIDE_LINKS.map((card =>
                <HashLink smooth to={`#section-${card.id}`} className="grid gap-3" key={card.id} onClick={() => setActiveId(card.id)}>
                  <h2 className={`text-lg text-[#717680] pb-3 ${activeId === card.id ? "text-blue-700 font-medium" : "text-[#717680] font-normal" }`}>{card.heading}</h2>
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