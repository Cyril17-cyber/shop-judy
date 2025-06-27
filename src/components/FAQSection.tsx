import { Search } from "@mui/icons-material";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Can I choose a specific delivery time?",
    answer:
      "We offer flexible delivery options, but specific time slots may vary depending on your location.",
  },
  {
    question: "Do you have a return Policy, and how do I process one?",
    answer:
      "Yes, you can initiate a return via your account under the orders section.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer: "Orders can be modified or canceled within 24 hours of placement.",
  },
  {
    question: "How do I contact customer support and what hours?",
    answer: "Our support is available 9am-5pm, Mon-Fri.",
  },
  {
    question: "Do you offer discounts or promotion?",
    answer:
      "We regularly offer promotions — subscribe to our newsletter to stay updated!",
  },
  {
    question: "Can I get product recommendations?",
    answer: "Yes, based on your browsing and purchase history.",
  },
];

const FAQItemComponent: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border p-4 rounded">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex justify-between items-center font-medium"
      >
        {question}
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col items-center mb-8">
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
          Got Questions? We have answers
        </h2>
        <div className="flex items-center border-2 border-gray-200 rounded-lg py-1 px-4 w-full lg:w-1/2 my-4">
          <input
            type="search"
            name="search"
            id="faq-search"
            placeholder="Search for Questions"
            autoComplete="off"
            className="mr-1 p-2 outline-none w-full text-xs lg:text-base"
          />
          <Search className="text-base! lg:text-lg! text-gray-300" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqData.map((item, idx) => (
          <FAQItemComponent key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
