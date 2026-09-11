import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { useSelector } from "react-redux";
import PageShell from "../components/layout/PageShell";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL||"http://localhost:5000/api/v1";

export default function ContactPage() {
  const profile = useSelector((state) => state.portfolio.profile);

  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const submit = async (event) => {
    event.preventDefault();

    setSent(false);
    setError("");
    setSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim() || undefined,
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Unable to send message");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageShell>
      <section
        className="
          py-[110px] pb-[50px] min-h-[50vh]
          [&_.page-heading]:mb-[30px]
          [&_.page-heading-h2]:text-[clamp(48px,7vw,82px)]
          max-[700px]:pt-[75px]
          pt-[90px]
          min-h-[calc(100vh-76px)]
        "
      >
        <div
          className="
            w-[min(1180px,calc(100%-40px))]
            mx-auto
            max-[700px]:w-[min(1180px,calc(100%-28px))]
            grid
            grid-cols-[.9fr_1.1fr]
            gap-[90px]
            items-start
            max-[900px]:grid-cols-1
            max-[900px]:gap-[55px]
            max-[700px]:gap-[45px]
          "
        >
          {/* LEFT SIDE */}
          <div>
            <p
              className="
                uppercase
                tracking-[.16em]
                text-[11px]
                text-[#888f9d]
                font-bold
              "
            >
              Let's connect
            </p>

            <h1
              className="
                text-[clamp(48px,6vw,78px)]
                tracking-[-.06em]
                leading-[.98]
                mt-[14px]
                mb-[22px]
                max-[700px]:text-[52px]
              "
            >
              Have an opportunity in mind?
            </h1>

            <p
              className="
                text-[#858b98]
                leading-[1.8]
                text-sm
                max-w-[520px]
              "
            >
              Tell me what you're building or what role you're hiring for.
              Send me a message and I'll get back to you.
            </p>

            <div
              className="
                mt-[35px]
                grid
                gap-[14px]
                [&_div]:flex
                [&_div]:gap-[10px]
                [&_div]:text-[#b5bac4]
                [&_div]:text-xs
                [&_div]:items-center
                [&_svg]:text-[#ff4f9a]
              "
            >
              <div>
                <Mail size={18} />
                <span>{profile?.email}</span>
              </div>

              <div>
                <MapPin size={18} />
                <span>{profile?.location}</span>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            className="
              border
              border-white/[.09]
              rounded-[18px]
              p-7
              bg-white/[.025]

              [&_label]:grid
              [&_label]:gap-2
              [&_label]:text-[#aeb3bf]
              [&_label]:text-[11px]
              [&_label]:mb-[17px]

              [&_input]:w-full
              [&_textarea]:w-full

              [&_input]:border
              [&_textarea]:border
              [&_input]:border-white/[.09]
              [&_textarea]:border-white/[.09]

              [&_input]:bg-[#0c0e13]
              [&_textarea]:bg-[#0c0e13]

              [&_input]:text-white
              [&_textarea]:text-white

              [&_input]:rounded-[9px]
              [&_textarea]:rounded-[9px]

              [&_input]:px-[13px]
              [&_textarea]:px-[13px]

              [&_input]:py-3
              [&_textarea]:py-3

              [&_input]:outline-none
              [&_textarea]:outline-none

              [&_textarea]:resize-y

              [&_input:focus]:border-[#ff4f9a]/50
              [&_textarea:focus]:border-[#ff4f9a]/50

              [&_input::placeholder]:text-[#4f5560]
              [&_textarea::placeholder]:text-[#4f5560]
            "
            onSubmit={submit}
          >
            {/* SUCCESS MESSAGE */}
            {sent && (
              <div
                className="
                  mb-[17px]
                  p-[11px]
                  rounded-lg
                  bg-[#42d392]/[.08]
                  text-[#66dca5]
                  text-[11px]
                "
              >
                Message sent successfully ✓
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div
                className="
                  mb-[17px]
                  p-[11px]
                  rounded-lg
                  bg-red-500/[.08]
                  text-red-400
                  text-[11px]
                "
              >
                {error}
              </div>
            )}

            {/* NAME */}
            <label>
              Your name

              <input
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                placeholder="John Doe"
              />
            </label>

            {/* EMAIL */}
            <label>
              Email

              <input
                name="email"
                type="email"
                required
                placeholder="john@example.com"
              />
            </label>

            {/* SUBJECT */}
            <label>
              Subject

              <input
                name="subject"
                type="text"
                maxLength={150}
                placeholder="Full Stack Developer opportunity"
              />
            </label>

            {/* MESSAGE */}
            <label>
              Message

              <textarea
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows="6"
                placeholder="Tell me about the opportunity..."
              />
            </label>

            {/* SUBMIT BUTTON */}
            <button
              className="
                cursor-pointer
                min-h-[45px]
                inline-flex
                items-center
                justify-center
                gap-2
                px-[18px]
                rounded-[10px]
                border
                border-white/[.09]
                font-bold
                text-[13px]
                transition-transform
                duration-200
                transition-colors
                hover:-translate-y-0.5
                hover:border-white/20
                bg-gradient-to-br
                from-[#ff4f9a]
                to-[#c13cff]
                border-0
                text-white
                shadow-[0_12px_35px_rgba(255,79,154,.16)]
                w-full
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
              type="submit"
              disabled={sending}
            >
              <Send size={17} />

              {sending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}