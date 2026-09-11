export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`page-heading max-w-[720px] mb-[55px] max-[700px]:mb-10 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="uppercase tracking-[.16em] text-[11px] text-[#888f9d] font-bold">{eyebrow}</p>}
      <h2 className="page-heading-h2 text-[clamp(36px,5vw,58px)] tracking-[-.055em] leading-none mt-[10px] mb-[17px]">{title}</h2>
      {description && <p className="text-[#9da3b1] leading-[1.7] m-0 max-w-[650px]">{description}</p>}
    </div>
  );
}
