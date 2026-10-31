
"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Iram! I visited your website and would like to know more about your fitness coaching."
  );

  return (
    <a
      href={`https://wa.me/919541487835?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Iram on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105"
    >
      <MessageCircle size={27} />
    </a>
  );
}
