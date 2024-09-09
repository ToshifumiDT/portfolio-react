import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
    return (
        <div className="contactform">
            <h2>Contact Us</h2>
            <form onSubmit="">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-2 text-white bg-slate-500 hover:bg-red-500">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
      </form>
        </div>
      );






}