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

type InstructionSection = { heading: string; items: string[] };
type Instruction = { id: string; title: string; sections: InstructionSection[] };

const INSTRUCTIONS: Instruction[] = [
  {
    id: "preo-sedation",
    title: "Pre-Operative: General Anesthesia & IV Sedation",
    sections: [
      {
        heading: "Before Surgery",
        items: [
          "Do not eat or drink (including water) 6 hours prior to surgery.",
          "Arrange transportation with a responsible adult who will bring you to and from the office. This person must remain in the reception room during surgery.",
          "A responsible adult must take care of you for 6 hours after surgery.",
          "Do not drive or operate heavy machinery for 24 hours after surgery, or at any time while taking prescribed narcotic pain relievers.",
          "Wear short sleeves, comfortable and loose-fitting clothing on the day of surgery.",
          "Do not wear heavy make-up, jewelry, lipstick, nail polish, or contact lenses on the day of surgery. You may bring glasses — they will be removed before surgery.",
          "Urinate 30–60 minutes before surgery.",
          "Patients under age 18 must be accompanied by a parent or legal guardian.",
          "Brush and floss your teeth on the morning of surgery. Rinsing your mouth is okay.",
          "If you need to take prophylaxis antibiotics for a medical condition, take them with just a sip of water as instructed by your physician or Dr. Kim.",
          "If you are taking birth control pills or shots, be advised that antibiotics will lower their effectiveness.",
          "If you take any medications, please consult with Dr. Kim prior to surgery.",
        ],
      },
    ],
  },
  {
    id: "posto-anesthesia",
    title: "Post-Operative: General Anesthesia & IV Sedation",
    sections: [
      {
        heading: "DO NOT",
        items: [
          "Do not drive, exercise, ride a bike, skateboard, play sports, or operate heavy machinery for 24 hours after general anesthesia or IV sedation.",
          "Do not drive or operate heavy machinery if you are taking prescribed narcotic pain relievers after surgery.",
        ],
      },
      {
        heading: "Diet",
        items: [
          "A parent, legal guardian, or responsible person must take care of you for 24 hours after surgery.",
          "For the first 24 hours, consume only clear liquids (7-up, water, apple juice) and soft foods (ice cream, Jello, pudding, fruit or protein shakes). Do not chew any food while your tongue or lip(s) is numb — you may bite and injure yourself.",
          "After 24 hours you can eat soft foods (scrambled eggs, mashed potatoes, pasta, soft boneless chicken or beef), then gradually progress to solid food as tolerated.",
          "Do not eat or drink anything hot in temperature for 1 week. Warm coffee, tea, or soup is fine.",
          "Avoid crunchy and chewy food (nuts, popcorn, candies, hard crackers, chips) — they may get stuck in the surgical site and lead to infection.",
          "If you are diabetic or have a special diet, follow your diet guidelines and take your medications as instructed by your physician.",
          "Try to eat and drink a normal amount to avoid weakness or dizziness. Insufficient hydration may cause fever and delay healing.",
        ],
      },
      {
        heading: "Nausea",
        items: [
          "Medications used during general anesthesia or IV sedation can cause nausea. The most common cause after surgery is prescribed narcotic pain relievers (Vicodin, Codeine, Darvocet). You may also feel nauseated if you swallow large amounts of blood.",
          "If nauseated, try drinking clear liquids (7-up, plain water) in small amounts.",
          "If nausea continues, call Dr. Kim — an anti-nausea medication can be prescribed over the phone to your pharmacy.",
        ],
      },
      {
        heading: "Discomfort",
        items: [
          "Local anesthesia will usually last 2–4 hours, but numbness can last 6–12 hours.",
          "Start with over-the-counter pain relievers such as Tylenol or Advil (if not allergic). These are usually adequate for mild to moderate discomfort.",
          "If pain is not relieved by over-the-counter medication, take the prescription pain reliever from Dr. Kim. Do not drive or operate heavy machinery while taking prescription pain relievers.",
          "If you experience any reaction to medication, stop it immediately and call Dr. Kim.",
        ],
      },
    ],
  },
  {
    id: "posto-extraction",
    title: "Post-Operative: Tooth Extraction",
    sections: [
      {
        heading: "DO NOT",
        items: [
          "Do not rinse for 24 hours after surgery.",
          "Do not drink through a straw for 2–3 days after surgery.",
          "Do not brush the surgical site for 2–3 days. Brush everywhere except the surgical site and the teeth immediately adjacent to it.",
          "Do not drink alcohol or smoke for 48 hours after surgery.",
          "Do not eat or drink hot food or beverages for 1 week. Warm or room-temperature food and drinks are fine.",
          "Do not chew hard or crunchy food (popcorn, nuts, candies, crackers, chips) for 1–2 weeks.",
          "Do not disturb the surgical site with your tongue, finger, or any object.",
          "Do not swim, surf, or engage in any underwater activity for 1 week.",
        ],
      },
      {
        heading: "Bleeding",
        items: [
          "Place gentle pressure over the surgical site with the gauzes provided. Extra gauze is available at any pharmacy.",
          "Change gauze every 45–60 minutes or sooner as needed. Continue until bleeding stops. Some bleeding for several hours is normal.",
          "After 45–60 minutes, check the gauze. If there is only a small amount of redness or a mostly pinkish/orange color, bleeding has stopped. Slight intermittent bleeding for a few days is not unusual — replace the gauze and apply pressure if it occurs.",
          "Never sleep with gauze in your mouth.",
        ],
      },
      {
        heading: "Discomfort",
        items: [
          "Local anesthesia will usually last 2–4 hours, but numbness can last 6–12 hours.",
          "Start with over-the-counter pain relievers such as Tylenol or Advil (if not allergic). These are usually adequate for mild to moderate discomfort.",
          "If pain is not controlled by over-the-counter medication, take the prescription pain reliever from Dr. Kim. Do not drive or operate heavy machinery while taking prescription pain relievers.",
          "If you experience any medication reaction, stop it immediately and call Dr. Kim.",
        ],
      },
      {
        heading: "Antibiotics",
        items: [
          "If prescribed antibiotics, take them exactly as directed through the full course. Antibiotics help prevent infection.",
          "If you experience reactions (hives, swelling, or diarrhea), stop the medication immediately and call Dr. Kim.",
          "If you are taking birth control pills or shots, antibiotics will lower their effectiveness.",
        ],
      },
      {
        heading: "Sutures",
        items: [
          "If sutures are used, Dr. Kim will typically use dissolvable sutures that dissolve in 1–2 weeks. On rare occasions non-dissolvable sutures are used and will be removed in 1–2 weeks.",
        ],
      },
      {
        heading: "Swelling & Bruising",
        items: [
          "Some swelling and/or bruising is expected and varies among patients.",
          "Swelling typically peaks at 48–72 hours and takes 7–10 days to fully resolve.",
          "Apply an ice pack for 20 minutes on and off for the first 24 hours. Keeping your head slightly elevated with pillows during sleep also helps.",
          "After the first 24 hours, apply a heat pad or warm compress for the next 48 hours to further reduce swelling and bruising.",
        ],
      },
      {
        heading: "Diet",
        items: [
          "Do not chew on the surgical side. If surgery was on both sides, chew on the side with less surgery.",
          "For the first 12–24 hours, eat cold liquid-soft foods (ice cream, protein shakes, pudding, Jello) that require no chewing. Do not chew until all numbness in the tongue and lips has resolved.",
          "After 12–24 hours and once numbness is gone, you may eat soft foods (scrambled eggs, mashed potatoes, warm soup, pasta, soft boneless chicken or meat).",
          "Do not eat or drink anything hot in temperature for 1 week. Warm food and drinks are fine.",
          "Avoid crunchy and chewy food (nuts, popcorn, candies, crackers, chips) — they may get stuck in the surgical site and cause infection.",
          "If you are diabetic or have a special diet, follow your guidelines as instructed by your physician.",
          "Try to maintain adequate food and fluid intake to avoid weakness or dizziness. Insufficient hydration may cause fever and delay healing.",
        ],
      },
      {
        heading: "Oral Hygiene & Care",
        items: [
          "Good oral hygiene is essential to prevent infection.",
          "Brush your teeth gently but avoid the surgical site and adjacent teeth for 2–3 days.",
          "Starting the day after surgery, rinse gently with warm salt water (1 teaspoon in 1 quart of water) or plain water after every meal. After rinsing, open your mouth and let the water fall out — do not spit, as this can cause dry socket.",
          "Avoid alcohol-based mouthwashes (such as Listerine or Scope) for 3–4 days — they can irritate the surgical site.",
        ],
      },
      {
        heading: "Temporary Prosthesis or Denture",
        items: [
          "If instructed by Dr. Kim, you may use a temporary prosthesis or denture after surgery. If it causes pain or bleeding, remove it and schedule an office evaluation.",
          "Do not sleep with the temporary prosthesis or denture unless instructed by Dr. Kim.",
          "Clean the temporary prosthesis or denture daily with a toothbrush or cleaning solution.",
        ],
      },
      {
        heading: "Dry Socket",
        items: [
          "Dry socket is an inflammatory condition caused by the loss of the blood clot. It can occur if you spit, use a straw, rinse within 24 hours of surgery, or consume hot food — all of which can dislodge or prevent proper clot formation.",
          "Dry socket typically appears 3–5 days after surgery. Pain may radiate to the back of the lower jaw, the ear, or the side of the head.",
          "If you experience these symptoms, call our office. Dr. Kim or an assistant will place a medicated dressing in the socket to significantly reduce the discomfort.",
        ],
      },
    ],
  },
  {
    id: "posto-implant",
    title: "Post-Operative: Dental Implant Surgery",
    sections: [
      {
        heading: "DO NOT",
        items: [
          "Do not rinse for 24 hours after surgery.",
          "Do not brush the surgical site for 1 week. Brush everywhere except the surgical site and the teeth immediately adjacent to it.",
          "Do not drink alcohol or smoke for 48 hours after surgery.",
          "Do not eat or drink hot food or beverages for 1 week. Warm or room-temperature food and drinks are fine.",
          "Do not chew hard, crunchy, or chewy food (popcorn, nuts, candies, crackers, chips, etc.).",
          "Do not disturb the surgical site with your tongue, finger, or any object. If the site is close to your lip, do not pull your lip out — pressure can open the site and delay healing or cause infection.",
          "Do not swim, surf, or engage in any underwater activity for 1 week.",
        ],
      },
      {
        heading: "Bleeding",
        items: [
          "Place gentle pressure over the surgical site with the gauzes provided. Extra gauze is available at any pharmacy.",
          "Change gauze every 45–60 minutes or sooner as needed. Continue until bleeding stops.",
          "After 45–60 minutes, check the gauze. If there is only a small amount of redness or a mostly pinkish/orange color, bleeding has stopped. Slight intermittent bleeding for a few days is not unusual — replace the gauze and apply pressure if it occurs.",
          "Never sleep with gauze in your mouth.",
        ],
      },
      {
        heading: "Discomfort",
        items: [
          "Local anesthesia will usually last 2–4 hours, but numbness can last 6–12 hours.",
          "Start with over-the-counter pain relievers such as Tylenol or Advil (if not allergic). These are usually adequate for mild to moderate discomfort.",
          "If pain is not controlled by over-the-counter medication, take the prescription pain reliever from Dr. Kim. Do not drive or operate heavy machinery while taking prescription pain relievers.",
          "If you experience any medication reaction, stop it immediately and call Dr. Kim.",
        ],
      },
      {
        heading: "Antibiotics",
        items: [
          "If prescribed antibiotics, take them exactly as directed through the full course to help prevent infection.",
          "If you experience reactions (hives, swelling, or diarrhea), stop the medication immediately and call Dr. Kim.",
          "If you are taking birth control pills or shots, antibiotics will lower their effectiveness.",
        ],
      },
      {
        heading: "Sutures",
        items: [
          "If sutures are used, Dr. Kim will typically use dissolvable sutures that dissolve in 1–2 weeks. Occasionally non-dissolvable sutures are used and will be removed in 1–2 weeks.",
        ],
      },
      {
        heading: "Swelling & Bruising",
        items: [
          "Some swelling and/or bruising is expected and varies among patients.",
          "Swelling typically peaks at 48–72 hours and takes 7–10 days to fully resolve.",
          "Apply an ice pack for 20 minutes on and off for the first 24 hours. Keep your head slightly elevated with pillows during sleep.",
          "After the first 24 hours, apply a heat pad or warm compress for the next 48 hours to further reduce swelling and bruising.",
        ],
      },
      {
        heading: "Diet",
        items: [
          "If you had general anesthesia, also follow the post-op general anesthesia instructions.",
          "Do not chew on the surgical side. If surgery was on both sides, chew on the side with less surgery.",
          "For the first 12–24 hours, eat cold liquid-soft foods (ice cream, protein shakes, pudding, Jello) that require no chewing. Do not chew until all numbness in the tongue and lips has resolved.",
          "After 12–24 hours and once numbness is gone, you may eat soft foods (scrambled eggs, mashed potatoes, warm soup, pasta, soft boneless chicken or beef).",
          "Do not eat or drink anything hot in temperature for 1 week. Warm food and drinks are fine.",
          "Avoid crunchy and chewy food (nuts, popcorn, candies, crackers, chips) — they may get stuck in the surgical site and cause infection.",
          "If you are diabetic or have a special diet, follow your guidelines as instructed by your physician.",
          "Try to maintain adequate food and fluid intake to avoid weakness or dizziness. Insufficient hydration may cause fever and delay healing.",
        ],
      },
      {
        heading: "Oral Hygiene & Care",
        items: [
          "Good oral hygiene is essential to prevent infection.",
          "Brush your teeth gently but avoid the surgical site and adjacent teeth for 1 week.",
          "Starting the day after surgery, rinse gently with warm salt water (1 teaspoon in 1 quart of water) or plain water after every meal. After rinsing, open your mouth and let the water fall out. Do not rinse on the first day of surgery. Most patients rinse 6–8 times a day.",
          "Avoid alcohol-based mouthwashes (such as Listerine or Scope) for 3–4 days — they can irritate the surgical site.",
        ],
      },
      {
        heading: "Temporary Prosthesis or Denture",
        items: [
          "If instructed by Dr. Kim, you may use a temporary prosthesis or denture after surgery. If it causes pain or bleeding, remove it and schedule an office evaluation.",
          "Do not sleep with the temporary prosthesis or denture unless instructed by Dr. Kim.",
          "Clean the temporary prosthesis or denture daily with a toothbrush or cleaning solution.",
        ],
      },
    ],
  },
  {
    id: "posto-bonegraft",
    title: "Post-Operative: Bone Graft Surgery",
    sections: [
      {
        heading: "DO NOT",
        items: [
          "Do not rinse for 24 hours after surgery.",
          "Do not drink through a straw for 2–3 days after surgery.",
          "Do not brush the surgical site for 2–3 days. Brush everywhere except the surgical site and the teeth immediately adjacent to it.",
          "Do not drink alcohol or smoke for 48 hours after surgery.",
          "Do not eat or drink hot food or beverages for 1 week. Warm or room-temperature food and drinks are fine.",
          "Do not chew hard or crunchy food (popcorn, nuts, candies, crackers, chips) for 1–2 weeks.",
          "Do not disturb the surgical site with your tongue, finger, or any object.",
          "Do not swim, surf, or engage in any underwater activity for 1 week.",
        ],
      },
      {
        heading: "Bleeding",
        items: [
          "Place gentle pressure over the surgical site with the gauzes provided. Extra gauze is available at any pharmacy.",
          "Change gauze every 45–60 minutes or sooner as needed. Continue until bleeding stops.",
          "After 45–60 minutes, check the gauze. If there is only a small amount of redness or a mostly pinkish/orange color, bleeding has stopped. Slight intermittent bleeding for a few days is not unusual — replace the gauze and apply pressure if it occurs.",
          "Never sleep with gauze in your mouth.",
        ],
      },
      {
        heading: "Discomfort",
        items: [
          "Local anesthesia will usually last 2–4 hours, but numbness can last 6–12 hours.",
          "Start with over-the-counter pain relievers such as Tylenol or Advil (if not allergic). These are usually adequate for mild to moderate discomfort.",
          "If pain is not controlled by over-the-counter medication, take the prescription pain reliever from Dr. Kim. Do not drive or operate heavy machinery while taking prescription pain relievers.",
          "If you experience any medication reaction, stop it immediately and call Dr. Kim.",
        ],
      },
      {
        heading: "Antibiotics",
        items: [
          "If prescribed antibiotics, take them exactly as directed through the full course to help prevent infection.",
          "If you experience reactions (hives, swelling, or diarrhea), stop the medication immediately and call Dr. Kim.",
          "If you are taking birth control pills or shots, antibiotics will lower their effectiveness.",
        ],
      },
      {
        heading: "Sutures",
        items: [
          "If sutures are used, Dr. Kim will typically use dissolvable sutures that dissolve in 1–2 weeks. Occasionally non-dissolvable sutures are used and will be removed in 1–2 weeks.",
        ],
      },
      {
        heading: "Swelling & Bruising",
        items: [
          "Some swelling and/or bruising is expected and varies among patients.",
          "Swelling typically peaks at 48–72 hours and takes 7–10 days to fully resolve.",
          "Apply an ice pack for 20 minutes on and off for the first 24 hours. Keep your head slightly elevated with pillows during sleep.",
          "After the first 24 hours, apply a heat pad or warm compress for the next 48 hours to further reduce swelling and bruising.",
        ],
      },
      {
        heading: "Diet",
        items: [
          "If you had general anesthesia, also follow the post-op general anesthesia instructions.",
          "Do not chew on the surgical side. If surgery was on both sides, chew on the side with less surgery.",
          "For the first 12–24 hours, eat cold liquid-soft foods (ice cream, protein shakes, pudding, Jello) that require no chewing. Do not chew until all numbness in the tongue and lips has resolved.",
          "After 12–24 hours and once numbness is gone, you may eat soft foods (scrambled eggs, mashed potatoes, warm soup, pasta, soft boneless chicken or meat).",
          "Do not eat or drink anything hot in temperature for 1 week. Warm food and drinks are fine.",
          "Avoid crunchy and chewy food (nuts, popcorn, candies, crackers, chips) — they may get stuck in the surgical site and cause infection.",
          "If you are diabetic or have a special diet, follow your guidelines as instructed by your physician.",
          "Try to maintain adequate food and fluid intake to avoid weakness or dizziness. Insufficient hydration may cause fever and delay healing.",
        ],
      },
      {
        heading: "Oral Hygiene & Care",
        items: [
          "Good oral hygiene is essential to prevent infection.",
          "Brush your teeth gently but avoid the surgical site and adjacent teeth for 2–3 days.",
          "Starting the day after surgery, rinse gently with warm salt water (1 teaspoon in 1 quart of water) or plain water after every meal. After rinsing, open your mouth and let the water fall out — do not spit, as this can cause dry socket.",
          "Avoid alcohol-based mouthwashes (such as Listerine or Scope) for 3–4 days — they can irritate the surgical site.",
        ],
      },
      {
        heading: "Temporary Prosthesis or Denture",
        items: [
          "If instructed by Dr. Kim, you may use a temporary prosthesis or denture after surgery. If it causes pain or bleeding, remove it and schedule an office evaluation.",
          "Do not sleep with the temporary prosthesis or denture unless instructed by Dr. Kim.",
          "Clean the temporary prosthesis or denture daily with a toothbrush or cleaning solution.",
        ],
      },
    ],
  },
  {
    id: "posto-facial",
    title: "Post-Operative: Facial Injury & Jaw Surgery",
    sections: [
      {
        heading: "Recovery Guidelines",
        items: [
          "Follow all dietary restrictions exactly as prescribed — a liquid or pureed diet is essential to protect fracture repairs during bone healing.",
          "Sleep with your head elevated on 2–3 pillows for the first week to reduce swelling.",
          "Take all prescribed antibiotics until the full course is complete, even if you feel better. Take pain medications as directed.",
          "Avoid contact sports, heavy lifting, and strenuous activity for a minimum of 6 weeks.",
          "Do not blow your nose forcefully if you had treatment involving the sinuses or orbital floor.",
          "Keep all follow-up appointments without exception — bone healing and hardware position must be monitored closely.",
          "Call our office or go to the ER if you experience fever over 101°F, increasing redness or swelling, discharge, or numbness not previously noted.",
        ],
      },
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
                  {section.sections.map((sub, si) => (
                    <div key={si} className={si > 0 ? "mt-5" : ""}>
                      {section.sections.length > 1 && (
                        <p className="text-xs font-bold text-[#1B3A5C] uppercase tracking-wider mb-2">
                          {sub.heading}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {sub.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#334155]/80 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
