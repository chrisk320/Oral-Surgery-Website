export type ServiceStep = { title: string; description: string };
export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  candidates: string[];
  steps: ServiceStep[];
  recovery: string;
  recoverytips: string[];
  faqs: FAQ[];
  relatedSlugs: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    icon: "🦷",
    shortDescription:
      "Permanent, natural-looking tooth replacements anchored directly to your jawbone for a lifetime of confident smiles.",
    metaDescription:
      "Dr. Jone Kim provides expert dental implant surgery in Brea, CA. Permanent, natural-looking tooth replacements for single teeth, multiple teeth, or full arches. Call (714) 529-0043.",
    heroSubtitle:
      "The gold standard in permanent tooth replacement — look, feel, and function like natural teeth.",
    intro:
      "Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. Over time they fuse with the bone through a process called osseointegration, creating a stable, permanent foundation for replacement teeth — one that never slips, never decays, and prevents the bone loss that commonly follows tooth loss. Studies show that 69% of adults ages 35–44 have lost at least one permanent tooth, and by age 74, 26% have lost all of them. With an overall success rate of about 95% and nearly 50 years of clinical research behind them, implants are frequently the best long-term solution. Dr. Kim has placed thousands of implants using 3D imaging and guided surgical planning to ensure precision and predictable outcomes.",
    candidates: [
      "Adults with one or more missing teeth",
      "Patients with sufficient jawbone density to support an implant",
      "Non-smokers or those willing to quit prior to surgery",
      "Individuals with healthy gums and no untreated periodontal disease",
      "Those seeking a long-term, permanent solution over dentures or bridges",
    ],
    steps: [
      {
        title: "Initial Consultation & Evaluation",
        description:
          "Dr. Kim reviews your medical history, examines your mouth, and takes 3D cone-beam CT scans to assess bone volume and identify the optimal implant placement site.",
      },
      {
        title: "Treatment Planning",
        description:
          "Using the CT scan data and digital planning software, Dr. Kim designs a precise surgical guide to ensure the implant is placed at exactly the right angle and depth.",
      },
      {
        title: "Implant Placement Surgery",
        description:
          "The titanium implant post is placed into the jawbone under local anesthesia or sedation. The procedure typically takes 1–2 hours per implant. A temporary restoration may be placed the same day.",
      },
      {
        title: "Healing & Osseointegration",
        description:
          "Over the next 3–6 months, the implant fuses with the surrounding bone. During this period you'll wear a temporary restoration and attend follow-up visits to monitor healing.",
      },
      {
        title: "Abutment Placement",
        description:
          "Once osseointegration is complete, a small connector piece (abutment) is attached to the implant to support the final crown.",
      },
      {
        title: "Crown Placement",
        description:
          "Your custom-fabricated porcelain crown is attached to the abutment. It is color-matched and contoured to blend seamlessly with your surrounding teeth.",
      },
    ],
    recovery:
      "Most patients return to normal activities within a few days of implant surgery. Mild swelling, bruising, and discomfort are common in the first 48–72 hours and are managed with prescribed or over-the-counter pain medication. The full osseointegration process takes 3–6 months, during which regular follow-up appointments allow Dr. Kim to monitor progress and ensure the implant is integrating properly.",
    recoverytips: [
      "Apply ice packs to the cheek for 20 minutes on, 20 minutes off during the first 24 hours",
      "Stick to soft foods (yogurt, mashed potatoes, smoothies) for the first week",
      "Avoid smoking throughout the entire healing period",
      "Rinse gently with warm salt water starting 24 hours after surgery",
      "Do not disturb the surgical site with your tongue or fingers",
    ],
    faqs: [
      {
        question: "How long do dental implants last?",
        answer:
          "With proper care and maintenance, dental implants can last a lifetime. The crown on top typically lasts 10–20 years before needing replacement due to normal wear.",
      },
      {
        question: "Is the implant procedure painful?",
        answer:
          "Most patients report that the procedure is much more comfortable than they expected. Local anesthesia and sedation options ensure you feel no pain during surgery. Post-operative discomfort is manageable with over-the-counter pain medication.",
      },
      {
        question: "Am I a candidate for dental implants?",
        answer:
          "Most healthy adults with missing teeth are candidates. Adequate bone density is required; if bone loss has occurred, a bone graft may be needed first. Dr. Kim will evaluate your specific situation during a consultation.",
      },
      {
        question: "How much do dental implants cost?",
        answer:
          "The cost varies depending on the number of implants, whether bone grafting is needed, and the type of restoration. We accept CareCredit and offer flexible payment plans. A detailed cost estimate is provided at your consultation.",
      },
      {
        question: "How do I care for my implant?",
        answer:
          "Implants are cared for exactly like natural teeth — brush twice daily, floss, and attend regular dental checkups. Because implants can't decay, good gum health is the key to long-term success.",
      },
      {
        question: "Does Dr. Kim work with my regular dentist?",
        answer:
          "Yes — dental implants are a team effort. Dr. Kim handles the surgical component: placing the titanium implant post in the jawbone and monitoring osseointegration. Your restorative dentist (or a prosthodontist) then fabricates and places the final crown on the implant. Dr. Kim stays in close contact with your restorative team throughout the process to ensure a seamless outcome.",
      },
    ],
    relatedSlugs: ["wisdom-teeth", "anesthesia"],
  },
  {
    slug: "wisdom-teeth",
    title: "Wisdom Teeth Extraction",
    icon: "✦",
    shortDescription:
      "Safe, gentle removal of impacted or problematic wisdom teeth with sedation options to keep you comfortable.",
    metaDescription:
      "Wisdom teeth removal in Brea, CA by board-certified oral surgeon Dr. Jone Kim. Gentle extractions with IV sedation options. Call (714) 529-0043.",
    heroSubtitle:
      "Expert removal of impacted or problematic wisdom teeth — comfortable, safe, and efficient.",
    intro:
      "Wisdom teeth (third molars) are the last teeth to develop, typically appearing between ages 17 and 25. Modern diets and orthodontically aligned dental arches leave little room for these final molars, causing them to become impacted — blocked from erupting by overlying gum, bone, or adjacent teeth. Impacted wisdom teeth can cause pain, infection, crowding, and damage to adjacent teeth. Left untreated, the sac surrounding an impacted tooth can fill with fluid and form a cyst that hollows out the jaw and permanently damages surrounding bone and nerves. Studies estimate that about 85% of third molars will eventually need to be removed, and earlier removal — while roots are shorter and bone is less dense — means simpler surgery and faster healing. Dr. Kim specializes in all levels of impaction, from simple erupted extractions to complex deeply impacted surgical cases.",
    candidates: [
      "Patients experiencing pain or pressure at the back of the mouth",
      "Those with partially erupted or fully impacted wisdom teeth",
      "Individuals showing signs of infection, cysts, or crowding from wisdom teeth",
      "Patients whose wisdom teeth may threaten the health of adjacent molars",
      "Younger patients (17–25) for easier healing — preventive removal is often recommended",
    ],
    steps: [
      {
        title: "Consultation & X-Rays",
        description:
          "Dr. Kim takes a panoramic X-ray or 3D CBCT scan to assess the position, angle, and depth of each wisdom tooth and identify proximity to nerves and sinus cavities.",
      },
      {
        title: "Anesthesia Selection",
        description:
          "Based on the complexity and your comfort level, you'll choose from local anesthesia, nitrous oxide, oral sedation, or IV general anesthesia. Most patients opt for IV sedation to have all four removed at once.",
      },
      {
        title: "Surgical Removal",
        description:
          "Under anesthesia, Dr. Kim makes a small incision in the gum tissue, divides the tooth if necessary, and removes it in sections. The socket is cleaned and sutured. The entire procedure typically takes 45–90 minutes.",
      },
      {
        title: "Recovery Room",
        description:
          "You'll rest in our recovery area until the anesthesia wears off. A responsible adult must drive you home. You'll receive detailed post-operative instructions and a prescription for pain management.",
      },
    ],
    recovery:
      "Most patients recover fully within 3–5 days, though complete socket healing takes several weeks. Swelling peaks at 48–72 hours and then gradually subsides. A blood clot forms in the socket — protecting it is the most important part of early recovery. Dry socket (dislodging of the clot) is the most common complication and is easily treated if reported promptly.",
    recoverytips: [
      "Bite firmly on gauze for 45 minutes immediately after surgery to control bleeding",
      "Avoid straws, spitting, and smoking for at least 72 hours — suction can dislodge the clot",
      "Eat only soft foods (soup, applesauce, yogurt) for 3–5 days",
      "Apply ice packs 20 minutes on / 20 minutes off for the first 24 hours",
      "Sleep with your head elevated to reduce swelling",
      "Gently rinse with warm salt water starting 24 hours after surgery",
    ],
    faqs: [
      {
        question: "Do I need all four wisdom teeth removed at once?",
        answer:
          "It's not required, but removing all four at once is typically recommended so you only go through sedation and recovery once. Dr. Kim will advise based on your specific situation.",
      },
      {
        question: "At what age should wisdom teeth be removed?",
        answer:
          "The ideal window is between 17–25 when the roots are not fully formed and the bone is less dense, making removal easier and healing faster. However, wisdom teeth can be removed at any age when they are causing problems.",
      },
      {
        question: "What is dry socket and how do I prevent it?",
        answer:
          "Dry socket occurs when the blood clot in the extraction site is dislodged, exposing the bone. To prevent it: avoid straws, spitting, rinsing vigorously, and smoking for at least 72 hours after surgery.",
      },
      {
        question: "Will I be asleep during the procedure?",
        answer:
          "You have a choice. IV sedation is the most popular option — you will be deeply relaxed and have no memory of the procedure. Local anesthesia alone is also available for simpler cases.",
      },
      {
        question: "What happens if I wait and don't remove my wisdom teeth?",
        answer:
          "As wisdom teeth grow, their roots become longer and the surrounding bone becomes denser, making removal more difficult and complications more likely. If the sac around an impacted tooth becomes cystic, it can hollow out the jaw, permanently damage adjacent teeth and nerves, and in rare cases lead to tumor development requiring more extensive surgery. There are also no outward symptoms for many of these changes — damage can occur without you being aware of it. The AAOMS strongly recommends removal by early adulthood to prevent future problems and ensure optimal healing.",
      },
    ],
    relatedSlugs: ["anesthesia", "dental-implants"],
  },
  {
    slug: "anesthesia",
    title: "Anesthesia & Sedation",
    icon: "💉",
    shortDescription:
      "Full anesthesia and IV sedation services so even the most anxious patients can receive care comfortably.",
    metaDescription:
      "Dr. Jone Kim is a member of the American Dental Society of Anesthesiology and provides IV sedation, general anesthesia, and nitrous oxide for oral surgery procedures in Brea, CA.",
    heroSubtitle:
      "Specialized anesthesia care so you can receive the treatment you need — anxiety-free.",
    intro:
      "Dr. Kim holds a separate anesthesia permit and is a member of the American Dental Society of Anesthesiology. He personally administers all anesthesia for procedures performed at OC Implant Oral Surgery. As a result of his extensive surgical training, Dr. Kim is qualified to identify and assess sources of pain and anxiety, administer local anesthesia and all forms of sedation and general anesthesia, manage airways including endotracheal intubation, establish and maintain intravenous lines, and manage complications and emergencies that may arise during anesthesia. Whether you have dental anxiety, a complex procedure, or simply prefer to be comfortable, we have an anesthesia option for you — and patients routinely describe their experience as comfortable and surprisingly pleasant.",
    candidates: [
      "Patients with dental anxiety or phobia",
      "Those undergoing multiple procedures in a single visit",
      "Patients with a sensitive gag reflex",
      "Children or adults requiring complex oral surgery",
      "Anyone who simply prefers to be comfortable and anxiety-free during treatment",
    ],
    steps: [
      {
        title: "Pre-Operative Consultation",
        description:
          "Dr. Kim reviews your medical history, current medications, and health conditions to determine the safest and most appropriate anesthesia option.",
      },
      {
        title: "Pre-Op Instructions",
        description:
          "For IV sedation or general anesthesia, you will be instructed to have nothing to eat or drink for 6–8 hours prior to your procedure. A responsible adult driver is required.",
      },
      {
        title: "Anesthesia Administration",
        description:
          "An IV is started and the appropriate medications are administered. You will drift off to sleep within seconds. Vital signs are continuously monitored throughout the procedure.",
      },
      {
        title: "Procedure & Monitoring",
        description:
          "While you are sedated, Dr. Kim performs the procedure while a trained team member continuously monitors your oxygen levels, blood pressure, heart rate, and breathing.",
      },
      {
        title: "Recovery",
        description:
          "You will rest in our supervised recovery area until you are stable, alert, and comfortable. Your escort will receive discharge instructions before you go home.",
      },
    ],
    recovery:
      "Recovery from anesthesia is typically 1–2 hours in our office. Drowsiness, nausea, and disorientation are normal and usually resolve within a few hours. You should not drive, operate machinery, or make important decisions for 24 hours after IV sedation or general anesthesia.",
    recoverytips: [
      "Have a responsible adult drive you home and stay with you for the first few hours",
      "Rest for the remainder of the day after any sedation procedure",
      "Start with clear liquids and advance to soft foods as tolerated",
      "Avoid alcohol for 24 hours after anesthesia",
      "Do not drive or make important decisions for 24 hours",
    ],
    faqs: [
      {
        question: "What anesthesia options are available?",
        answer:
          "We offer four options: (1) Local anesthesia only — numbs the surgical area, you remain fully awake; (2) Nitrous oxide–oxygen (laughing gas) — mild relaxation and anxiety relief with rapid recovery; (3) Oral sedation — a pill taken before the procedure for moderate relaxation; (4) IV sedation/general anesthesia — the deepest level, administered intravenously so you drift off within seconds and have no memory of the procedure. Dr. Kim will recommend the most appropriate option based on your procedure, medical history, and comfort preferences.",
      },
      {
        question: "Is IV sedation safe?",
        answer:
          "Yes. Dr. Kim holds a specialized anesthesia permit and maintains Advanced Cardiac Life Support (ACLS) certification. All vital signs are continuously monitored by a dedicated team member throughout every procedure.",
      },
      {
        question: "How long will I be sedated?",
        answer:
          "IV sedation medications wear off quickly. Most patients are alert enough to go home 1–2 hours after the procedure ends, though grogginess may persist for several hours.",
      },
      {
        question: "Can I eat before my sedation procedure?",
        answer:
          "No. For your safety, you must have nothing to eat or drink for 6–8 hours before IV sedation or general anesthesia. Failure to follow these instructions will result in postponing your procedure.",
      },
    ],
    relatedSlugs: ["wisdom-teeth", "dental-implants"],
  },
  {
    slug: "tmj",
    title: "TMJ Treatment",
    icon: "🫦",
    shortDescription:
      "Diagnosis and treatment of temporomandibular joint disorders to relieve jaw pain, headaches, and clicking.",
    metaDescription:
      "TMJ disorder treatment in Brea, CA. Dr. Jone Kim diagnoses and treats jaw pain, clicking, and temporomandibular joint disorders. Call (714) 529-0043.",
    heroSubtitle:
      "Relieving jaw pain, chronic headaches, and joint dysfunction caused by TMJ disorders.",
    intro:
      "The temporomandibular joint (TMJ) connects your jawbone to your skull and acts as a sliding hinge. TMJ disorders (TMDs) cause pain and dysfunction in the jaw joint and muscles that control jaw movement. Dr. Kim provides comprehensive evaluation and treatment ranging from conservative non-surgical approaches to surgical intervention for severe cases.",
    candidates: [
      "Patients experiencing jaw pain, soreness, or aching",
      "Those with clicking, popping, or grinding sounds when opening or closing the mouth",
      "Individuals with difficulty or pain when chewing or yawning",
      "Patients with chronic headaches, facial pain, or ear pain of unknown origin",
      "Those whose jaw has locked open or closed",
    ],
    steps: [
      {
        title: "Comprehensive Evaluation",
        description:
          "Dr. Kim performs a thorough examination of your jaw joint, muscles, bite, and dental occlusion. Imaging (X-ray or MRI) may be ordered to assess the joint structures.",
      },
      {
        title: "Diagnosis",
        description:
          "Based on the exam and imaging findings, Dr. Kim identifies whether the TMD is muscular, joint-based (disc displacement), or related to dental occlusion — or a combination.",
      },
      {
        title: "Conservative Treatment",
        description:
          "Most cases are first managed with non-surgical options: custom occlusal splints (night guards), anti-inflammatory medications, physical therapy referrals, and lifestyle modifications.",
      },
      {
        title: "Advanced Treatment (if needed)",
        description:
          "If conservative therapy is insufficient, Dr. Kim may recommend arthrocentesis (joint irrigation), steroid injections, or in complex cases, arthroscopic surgery.",
      },
    ],
    recovery:
      "Recovery depends on the treatment approach. Non-surgical treatment (splint therapy) involves no downtime. Arthrocentesis patients typically return to normal activities within 1–2 days. Surgical procedures require a longer recovery with a soft diet and activity restrictions for 1–2 weeks.",
    recoverytips: [
      "Wear your night guard or splint as directed — consistency is key",
      "Apply warm compresses to the jaw area to relax the muscles",
      "Avoid hard, crunchy, or chewy foods that stress the joint",
      "Practice jaw-relaxation exercises as instructed by your physical therapist",
      "Minimize wide mouth opening (yawning, singing, dental procedures) during recovery",
    ],
    faqs: [
      {
        question: "What causes TMJ disorders?",
        answer:
          "TMJ disorders can stem from several sources: arthritis (from injury or nighttime grinding) causes joint-level pain; disc displacement or dislocation between the jawbone and socket produces clicking, popping, and limited opening; disc perforation creates a grating sound with movement; and rheumatoid arthritis or severe trauma can cause the joint surfaces to fuse, preventing jaw movement entirely. Separately, stress-induced jaw clenching causes painful muscle spasms (myofascial pain) that closely mimic joint-based TMD — which is why accurate diagnosis is essential before treatment begins.",
      },
      {
        question: "Can TMJ disorders be cured without surgery?",
        answer:
          "Yes — the majority of TMJ disorders respond well to conservative, non-surgical treatment. Surgery is reserved for cases that have not improved after thorough non-surgical management.",
      },
      {
        question: "Is a night guard the same as a TMJ splint?",
        answer:
          "They are similar but not identical. A night guard primarily protects teeth from grinding, while a TMJ splint is specifically designed to reposition the jaw and reduce joint stress. Dr. Kim will prescribe the appropriate device.",
      },
      {
        question: "How long does TMJ treatment take?",
        answer:
          "Conservative treatment typically spans 3–6 months. Many patients experience significant relief within the first few weeks of wearing a splint and making lifestyle changes.",
      },
    ],
    relatedSlugs: ["facial-injury", "oral-cancer"],
  },
  {
    slug: "oral-cancer",
    title: "Oral Cancer Screening",
    icon: "🔬",
    shortDescription:
      "Early detection and evaluation of oral lesions and abnormalities — critical for the best treatment outcomes.",
    metaDescription:
      "Oral cancer screening and evaluation in Brea, CA. Dr. Jone Kim evaluates suspicious lesions, performs biopsies, and coordinates care. Call (714) 529-0043.",
    heroSubtitle:
      "Early detection saves lives — comprehensive oral cancer evaluation by a board-certified oral surgeon.",
    intro:
      "Oral cancer affects the lips, tongue, cheeks, floor of the mouth, hard and soft palate, sinuses, and throat. Because the mouth is an area where changes can be easily seen, oral cancer can often be detected early — and early detection dramatically improves the chance of cure. Studies show the death rate from oral cancer is about four times higher for cigarette smokers than non-smokers; heavy alcohol use and smokeless tobacco are additional significant risk factors. Dr. Kim performs thorough oral cancer screenings, evaluates suspicious lesions, performs biopsies, and coordinates with oncology teams when necessary. Regular self-exams and annual professional screenings are the most powerful tools available for early detection.",
    candidates: [
      "Adults aged 40 and older (routine screening recommended)",
      "Tobacco users — cigarettes, cigars, pipes, chewing tobacco",
      "Heavy alcohol users",
      "Individuals with known HPV infection or history of HPV",
      "Anyone with persistent oral sores, white patches, red patches, or lumps that haven't healed",
      "Those with a personal or family history of oral cancer",
    ],
    steps: [
      {
        title: "Visual & Physical Examination",
        description:
          "Dr. Kim performs a systematic visual inspection of all oral tissues — lips, cheeks, tongue, floor of mouth, palate, and throat — as well as a palpation of the lymph nodes in the neck.",
      },
      {
        title: "Enhanced Screening (if indicated)",
        description:
          "For suspicious lesions, enhanced screening tools such as fluorescence visualization devices may be used to identify abnormal tissue not visible to the naked eye.",
      },
      {
        title: "Biopsy (if indicated)",
        description:
          "If a lesion is concerning, Dr. Kim performs an incisional or excisional biopsy under local anesthesia. The tissue sample is sent to an oral pathology laboratory for analysis.",
      },
      {
        title: "Results & Coordination",
        description:
          "Once biopsy results are received, Dr. Kim discusses findings with you and coordinates referrals to oncology, radiation therapy, or other specialists if needed.",
      },
    ],
    recovery:
      "A routine oral cancer screening has no recovery time. If a biopsy is performed, you may experience mild soreness at the biopsy site for 3–5 days, manageable with over-the-counter pain medication. Sutures (if placed) typically dissolve on their own within 1–2 weeks.",
    recoverytips: [
      "Avoid irritating foods (spicy, acidic, crunchy) near the biopsy site for several days",
      "Rinse gently with warm salt water twice daily to keep the site clean",
      "Do not prod the biopsy site with your tongue or fingers",
      "Report any unusual swelling, severe pain, or persistent bleeding promptly",
    ],
    faqs: [
      {
        question: "How often should I be screened for oral cancer?",
        answer:
          "Annual screening is recommended for all adults. Those with risk factors (tobacco use, heavy alcohol consumption, HPV history) should discuss more frequent screening with Dr. Kim.",
      },
      {
        question: "What does an oral cancer screening feel like?",
        answer:
          "A routine screening is completely painless and takes only a few minutes. Dr. Kim visually inspects your oral tissues and gently palpates the lymph nodes in your neck.",
      },
      {
        question: "What are the warning signs of oral cancer?",
        answer:
          "Key warning signs include: leukoplakia (white patches on the oral tissues), erythroplakia (red patches), erythroleukoplakia (mixed red and white patches), a sore that fails to heal and bleeds easily, an abnormal lump or thickening of oral tissues, chronic sore throat or hoarseness, difficulty chewing or swallowing, and a mass or lump in the neck. Your mouth is one of your body's most important early warning systems — don't ignore any suspicious lesion that persists beyond two weeks.",
      },
      {
        question: "How do I perform an oral cancer self-exam?",
        answer:
          "Dr. Kim recommends a monthly self-exam using a bright light and mirror: (1) Remove any dentures. (2) Look and feel inside your lips and the front of your gums. (3) Tilt your head back and inspect and feel the roof of your mouth. (4) Pull your cheek out to see its inner surface and the back of your gums. (5) Pull out your tongue and inspect all of its surfaces — top, bottom, and sides. (6) Feel for lumps or enlarged lymph nodes on both sides of your neck, including under the lower jaw. If you notice anything unusual, contact Dr. Kim for a prompt evaluation.",
      },
      {
        question: "Is oral cancer treatable?",
        answer:
          "When caught early (Stage I or II), oral cancer has a 5-year survival rate of over 80%. This is why routine screening and prompt evaluation of suspicious findings is so critical.",
      },
    ],
    relatedSlugs: ["tmj", "facial-injury"],
  },
  {
    slug: "facial-injury",
    title: "Facial Injury Treatment",
    icon: "🛡️",
    shortDescription:
      "Expert care for facial trauma, jaw fractures, and lacerations — from emergency treatment to full reconstruction.",
    metaDescription:
      "Facial trauma and injury treatment in Brea, CA. Dr. Jone Kim treats jaw fractures, facial lacerations, and orbital injuries. Board-certified oral and maxillofacial surgeon. Call (714) 529-0043.",
    heroSubtitle:
      "Comprehensive facial trauma care — from emergency stabilization to complete reconstruction.",
    intro:
      "Maxillofacial injuries — also called facial trauma — encompass any injury to the mouth, face, and jaw. Most are caused by sports mishaps, motor vehicle accidents, workplace accidents, or falls. If someone is unconscious, disoriented, nauseated, or dizzy after a facial injury, call 911 immediately and do not attempt to move them. If those symptoms are absent but the injury is severe or uncertain, go directly to the nearest emergency room. As a fellowship-trained oral and maxillofacial surgeon, Dr. Kim is uniquely qualified to treat all types of facial trauma — from simple lacerations requiring precise repair to complex jaw fractures and mid-face injuries requiring surgical reconstruction.",
    candidates: [
      "Patients with jaw fractures from accidents, sports injuries, or falls",
      "Individuals with facial lacerations requiring specialist repair",
      "Those with fractured cheekbones (zygomatic fractures) or orbital floor fractures",
      "Patients with tooth avulsion (knocked-out teeth) requiring immediate reimplantation",
      "Anyone referred for evaluation of a facial injury by an emergency department",
    ],
    steps: [
      {
        title: "Emergency Evaluation",
        description:
          "Dr. Kim or his team will see urgent cases as quickly as possible. A thorough evaluation including imaging (CT scan) identifies the extent and nature of the injuries.",
      },
      {
        title: "Stabilization & Planning",
        description:
          "For jaw fractures, temporary stabilization may be placed. A comprehensive treatment plan is developed based on the type, location, and severity of the fractures.",
      },
      {
        title: "Surgical Repair",
        description:
          "Fractures are repaired using titanium plates and screws placed through carefully positioned incisions — often inside the mouth to minimize visible scarring. Lacerations are meticulously repaired with attention to aesthetics.",
      },
      {
        title: "Post-Operative Monitoring",
        description:
          "Follow-up visits track healing, bone union, nerve recovery, and facial symmetry. Any hardware causing discomfort can be removed after healing is complete.",
      },
    ],
    recovery:
      "Recovery from facial fracture repair typically takes 4–8 weeks for bone union, with swelling and bruising resolving over 2–4 weeks. Jaw fracture patients are placed on a soft or liquid diet during healing. Full return to contact sports or strenuous activity is typically cleared at 6–8 weeks post-operatively.",
    recoverytips: [
      "Follow all dietary restrictions — a liquid or soft diet protects fracture repairs during healing",
      "Sleep with your head elevated to reduce swelling for the first week",
      "Take all prescribed antibiotics and pain medications as directed",
      "Avoid contact sports and heavy lifting for a minimum of 6 weeks",
      "Attend all follow-up appointments so Dr. Kim can monitor healing",
    ],
    faqs: [
      {
        question: "What types of facial fractures can Dr. Kim treat?",
        answer:
          "Dr. Kim treats mandible (jaw) fractures, zygomatic (cheekbone) fractures, orbital floor fractures, nasal fractures, frontal sinus fractures, and complex midface (Le Fort) fractures.",
      },
      {
        question: "Will there be visible scars?",
        answer:
          "Dr. Kim strategically places incisions inside the mouth whenever possible to avoid facial scars. For external lacerations, meticulous layered repair minimizes scarring. Scar management advice is provided at follow-up.",
      },
      {
        question: "How soon after an injury should I be seen?",
        answer:
          "As soon as possible. While some fractures do not require emergency same-day repair, early evaluation prevents swelling from obscuring the injuries and allows timely treatment planning. Call our office immediately for urgent injuries.",
      },
      {
        question: "Will the titanium plates need to be removed?",
        answer:
          "In most adults, titanium plates and screws remain in place permanently with no issues. Removal is only necessary if a plate becomes painful, infected, or palpable under the skin — which is uncommon.",
      },
      {
        question: "How can I prevent facial injuries during sports?",
        answer:
          "Dr. Kim advocates for seat belts, protective helmets, and custom-fitted mouth guards for anyone who participates in athletic activities at any level. Mouth guards are recommended for football, baseball, ice hockey, wrestling, boxing, lacrosse, field hockey, soccer, basketball, rugby, and other contact sports. Helmets are essential for biking, skiing, snowboarding, and horseback riding. Custom-fabricated mouth guards from a dentist offer superior fit, comfort, and protection compared to over-the-counter 'boil and bite' models — and are more likely to actually be worn. A good mouth guard should fit securely, be lightweight, allow normal breathing and speech, and cover both the upper teeth and gums.",
      },
    ],
    relatedSlugs: ["oral-cancer", "anesthesia"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedSlugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];
}
