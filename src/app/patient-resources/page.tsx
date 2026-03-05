import type { Metadata } from "next";
import {
  FileText,
  ClipboardList,
  Download,
  Phone,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTABanner from "@/components/home/CTABanner";
import Link from "next/link";
import type { FAQ } from "@/lib/services";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Patient forms, pre & post-operative instructions, FAQs, and insurance & financing information for OC Implant Oral Surgery patients in Brea, CA.",
};

// ─── New Patient Forms ────────────────────────────────────────────────────────

const FORMS = [
  {
    icon: FileText,
    title: "New Patient Registration",
    description:
      "Personal information, emergency contacts, and consent for treatment.",
  },
  {
    icon: ClipboardList,
    title: "Medical History Form",
    description:
      "Current medications, allergies, and past medical and dental history.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Authorization",
    description:
      "Patient privacy consent and authorization for release of health information.",
  },
  {
    icon: CreditCard,
    title: "Insurance Information",
    description:
      "Primary and secondary insurance details for benefits verification.",
  },
];

// ─── Pre & Post-Op Instructions ──────────────────────────────────────────────

const INSTRUCTIONS = [
  {
    id: "preo-sedation",
    title: "Pre-Operative: IV Sedation & General Anesthesia",
    items: [
      "Have nothing to eat or drink for 8 hours before surgery. Clear liquids (water, apple juice, black coffee) are permitted up to 4 hours prior.",
      "Arrange a responsible adult driver who will stay with you for the first few hours after surgery — this is required for your release.",
      "Wear comfortable, loose-fitting clothing with short sleeves to allow easy IV access.",
      "Remove nail polish from at least one finger and remove contact lenses before arriving.",
      "Take only the medications specifically approved by Dr. Kim on the morning of surgery, with a small sip of water.",
      "Arrive 15 minutes before your scheduled appointment time to complete check-in.",
      "Leave jewelry and valuables at home.",
    ],
  },
  {
    id: "posto-wisdom",
    title: "Post-Operative: Wisdom Teeth Extraction",
    items: [
      "Bite firmly on the gauze placed over the extraction sites for 45 minutes. Replace with fresh gauze if bleeding continues.",
      "Apply ice packs to your cheeks — 20 minutes on, 20 minutes off — for the first 24 hours to reduce swelling.",
      "Avoid straws, spitting, rinsing vigorously, and smoking for at least 72 hours. Suction can dislodge the blood clot and cause dry socket.",
      "Eat only soft foods (yogurt, soup, mashed potatoes, applesauce) for the first 3–5 days. Gradually return to normal foods as healing progresses.",
      "Begin gently rinsing with warm salt water (¼ tsp salt in 8 oz water) starting 24 hours after surgery, after every meal.",
      "Swelling typically peaks at 48–72 hours and then gradually subsides over the following days.",
      "Take all prescribed medications exactly as directed. Do not wait for pain to become severe before taking pain medication.",
      "Sleep with your head elevated on extra pillows for the first 2–3 nights.",
      "Call our office if you experience worsening pain after day 3, foul taste, or dry socket symptoms.",
    ],
  },
  {
    id: "posto-implant",
    title: "Post-Operative: Dental Implant Surgery",
    items: [
      "Apply ice packs to the cheek over the implant site — 20 minutes on, 20 minutes off — for the first 24 hours.",
      "Stick to soft foods (eggs, pasta, fish, yogurt, mashed vegetables) for the first week. Avoid hard, crunchy, or chewy foods that could stress the implant site.",
      "Do not prod the surgical site with your tongue, fingers, or any objects.",
      "Avoid smoking for the entire healing period — tobacco significantly impairs osseointegration and greatly increases implant failure risk.",
      "Begin gentle warm salt-water rinses 24 hours after surgery. Continue twice daily for the first two weeks.",
      "Mild swelling and bruising are normal and typically resolve within 3–5 days.",
      "The full osseointegration process takes 3–6 months. Attend all scheduled follow-up visits so Dr. Kim can monitor healing.",
      "If a temporary restoration was placed, avoid biting directly on it with hard foods.",
    ],
  },
  {
    id: "posto-facial",
    title: "Post-Operative: Facial Injury & Jaw Surgery",
    items: [
      "Follow all dietary restrictions exactly as prescribed — a liquid or pureed diet is essential to protect fracture repairs during bone healing.",
      "Sleep with your head elevated on 2–3 pillows for the first week to reduce swelling.",
      "Take all prescribed antibiotics until the full course is complete, even if you feel better. Take pain medications as directed.",
      "Avoid contact sports, heavy lifting, and strenuous activity for a minimum of 6 weeks.",
      "Do not blow your nose forcefully if you had treatment involving the sinuses or orbital floor.",
      "Keep all follow-up appointments without exception — bone healing and hardware position must be monitored closely.",
      "Call our office or go to the ER if you experience fever over 101°F, increasing redness/swelling, discharge, or numbness not previously noted.",
    ],
  },
];

// ─── Patient FAQ ──────────────────────────────────────────────────────────────

const PATIENT_FAQS: FAQ[] = [
  {
    question: "Do you accept my insurance?",
    answer:
      "We accept most major PPO dental and medical insurance plans. We do not participate in HMO plans or Denti-Cal. Our team will verify your benefits before your appointment and provide you with a detailed cost estimate so there are no surprises.",
  },
  {
    question: "Do I need a referral to see Dr. Kim?",
    answer:
      "No referral is required. While many of our patients are referred by their general dentist or specialist, you are welcome to call us directly to schedule a consultation. Simply call (714) 529-0043.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring: a valid photo ID, your insurance card, a list of all current medications and supplements, and any relevant X-rays or records from your referring dentist. If you downloaded and completed the new patient forms in advance, bring those as well.",
  },
  {
    question: "What if I have a dental emergency?",
    answer:
      "Call our office at (714) 529-0043 immediately — we make every effort to accommodate same-day or next-day urgent appointments. If you experience uncontrolled bleeding, difficulty breathing or swallowing, severe swelling that is spreading to your neck, or any sign of airway compromise, go to the nearest emergency room immediately or call 911.",
  },
  {
    question: "How should I prepare my child for oral surgery?",
    answer:
      "Reassure your child that they will feel no pain during the procedure. Ensure they are well-rested the night before. If IV sedation or general anesthesia is planned, follow the NPO (nothing by mouth) instructions strictly. A parent or legal guardian must accompany minors and remain available at the office throughout the entire procedure.",
  },
  {
    question: "How long will my appointment take?",
    answer:
      "Consultation appointments typically last 30–60 minutes. Surgical appointment length depends on the procedure: wisdom tooth removal usually takes 1–2 hours, single implant placement takes 1–2 hours, and more complex reconstructive cases may take longer. You will receive a time estimate at your consultation.",
  },
  {
    question: "Is parking available at your office?",
    answer:
      "Yes, complimentary parking is available in our lot. If you are arriving via IV sedation, please have your driver drop you at the front entrance and park in any available space.",
  },
];

// ─── Insurance & Financing ────────────────────────────────────────────────────

const INSURANCE_ACCEPTED = [
  "Most major PPO dental insurance plans",
  "Most major PPO medical insurance plans",
  "Delta Dental PPO",
  "Cigna PPO",
  "Aetna PPO",
  "MetLife PPO",
  "United Concordia",
  "Guardian",
];

const PAYMENT_METHODS = [
  "Visa, Mastercard, American Express, Discover",
  "Personal check",
  "Cash",
  "CareCredit (0% financing available)",
  "In-office payment plans (ask at consultation)",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PatientResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1B3A5C] to-[#0f2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
            OC Implant Oral Surgery
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Patient Resources
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            Everything you need before and after your visit — forms, care
            instructions, answers to common questions, and insurance
            information.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button
              asChild
              className="bg-[#2A9D8F] hover:bg-[#238a7e] text-white px-6 py-5 font-semibold"
            >
              <a href="#forms">Download Forms</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-6 py-5 font-semibold bg-transparent"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Patient Forms */}
      <section id="forms" className="py-16 bg-[#F8FAFC] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
              New Patients
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] mt-2 mb-3">
              Patient Forms
            </h2>
            <p className="text-[#334155]/70 max-w-2xl">
              Download and complete these forms before your first appointment to
              save time. Bring the completed forms with you or ask our front desk
              to email them to you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FORMS.map((form) => (
              <div
                key={form.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#2A9D8F]/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-[#2A9D8F]/10 rounded-xl flex items-center justify-center">
                  <form.icon className="w-5 h-5 text-[#2A9D8F]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1B3A5C] mb-1">{form.title}</h3>
                  <p className="text-sm text-[#334155]/65 leading-relaxed">
                    {form.description}
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-[#2A9D8F]/40 text-[#2A9D8F] hover:bg-[#2A9D8F]/5 w-full"
                >
                  <a href="#" aria-label={`Download ${form.title}`}>
                    <Download className="w-4 h-4 mr-1.5" />
                    Download PDF
                  </a>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#334155]/50 mt-5">
            Need forms emailed to you? Call{" "}
            <a
              href="tel:7145290043"
              className="text-[#2A9D8F] hover:underline"
            >
              (714) 529-0043
            </a>{" "}
            and our front desk team will send them right away.
          </p>
        </div>
      </section>

      {/* Pre & Post-Op Instructions */}
      <section id="instructions" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
              Care Guidelines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] mt-2 mb-3">
              Pre &amp; Post-Operative Instructions
            </h2>
            <p className="text-[#334155]/70 max-w-2xl">
              Following these instructions carefully is the single most
              important thing you can do to ensure a smooth recovery and the
              best possible outcome.
            </p>
          </div>
          <Accordion type="multiple" className="space-y-3">
            {INSTRUCTIONS.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border border-gray-100 rounded-2xl overflow-hidden px-0"
              >
                <AccordionTrigger className="px-6 py-4 text-[#1B3A5C] font-semibold hover:text-[#2A9D8F] hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#334155]/80 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-amber-800">
              <strong>Have a question about your specific instructions?</strong>{" "}
              Call us at{" "}
              <a
                href="tel:7145290043"
                className="underline hover:text-amber-900"
              >
                (714) 529-0043
              </a>
              . We are happy to answer questions before or after your procedure.
            </p>
          </div>
        </div>
      </section>

      {/* Patient FAQ */}
      <section id="faq" className="py-16 bg-[#F8FAFC] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] mt-2 mb-3">
              Patient FAQ
            </h2>
            <p className="text-[#334155]/70 max-w-2xl">
              Answers to the questions we hear most often. Don&apos;t see yours
              here?{" "}
              <Link href="/contact" className="text-[#2A9D8F] hover:underline">
                Contact us
              </Link>{" "}
              and we&apos;ll get back to you promptly.
            </p>
          </div>
          <div className="max-w-3xl">
            <FAQAccordion items={PATIENT_FAQS} />
          </div>
        </div>
      </section>

      {/* Insurance & Financing */}
      <section id="insurance" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold text-[#2A9D8F] uppercase tracking-wider">
              Payment Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A5C] mt-2 mb-3">
              Insurance &amp; Financing
            </h2>
            <p className="text-[#334155]/70 max-w-2xl">
              We work with most major PPO plans and offer flexible financing
              options so that cost is never a barrier to getting the care you
              need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Insurance Card */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#1B3A5C]/10 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#1B3A5C]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] text-lg">
                  Insurance Accepted
                </h3>
              </div>
              <ul className="space-y-2 mb-6">
                {INSURANCE_ACCEPTED.map((ins) => (
                  <li key={ins} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] flex-shrink-0" />
                    <span className="text-sm text-[#334155]/80">{ins}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-gray-200">
                <p className="text-xs text-[#334155]/60 mb-1">
                  <strong className="text-[#334155]/80">Not accepted:</strong>{" "}
                  HMO plans, Denti-Cal, Medi-Cal
                </p>
                <p className="text-xs text-[#334155]/60">
                  Our team verifies your benefits and files all claims on your
                  behalf. You will receive a cost estimate before any treatment
                  begins.
                </p>
              </div>
            </div>

            {/* Financing Card */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#2A9D8F]/10 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#2A9D8F]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] text-lg">
                  Financing &amp; Payment
                </h3>
              </div>
              <div className="mb-5">
                <p className="text-sm text-[#334155]/80 leading-relaxed mb-4">
                  We offer 0% interest financing through{" "}
                  <strong>CareCredit</strong> — apply in minutes online and get
                  an instant credit decision. Spread the cost of your care over
                  manageable monthly payments with no interest during the
                  promotional period.
                </p>
                <Button
                  asChild
                  className="bg-[#2A9D8F] hover:bg-[#1B3A5C] text-white w-full font-semibold"
                >
                  <a
                    href="https://www.carecredit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply for CareCredit
                  </a>
                </Button>
              </div>
              <div className="pt-5 border-t border-gray-200">
                <p className="text-xs font-medium text-[#334155]/70 mb-2">
                  We also accept:
                </p>
                <ul className="space-y-1.5">
                  {PAYMENT_METHODS.map((method) => (
                    <li key={method} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] flex-shrink-0" />
                      <span className="text-xs text-[#334155]/70">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action Row */}
          <div className="mt-10 p-6 bg-[#1B3A5C] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white">
                Questions about coverage or cost?
              </p>
              <p className="text-white/70 text-sm mt-0.5">
                Our front desk team is happy to verify your benefits before your
                visit.
              </p>
            </div>
            <Button
              asChild
              className="bg-[#2A9D8F] hover:bg-[#238a7e] text-white font-semibold px-6 shrink-0"
            >
              <a href="tel:7145290043">
                <Phone className="w-4 h-4 mr-2" />
                (714) 529-0043
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
