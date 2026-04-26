"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { cn } from "@/lib/utils/cn";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary-500 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-text-primary pr-4">{question}</span>
        <span className={cn("shrink-0 transition-transform duration-300", isOpen && "rotate-180")}>
          <HiChevronDown className="h-5 w-5 text-text-tertiary" />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-base text-text-secondary leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
