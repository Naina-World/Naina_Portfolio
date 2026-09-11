export default function Loading() {
  return (
    <div className="min-h-screen grid place-content-center gap-[15px] justify-items-center text-[#777e8c] text-xs bg-[#08090c]">
      <div className="w-[30px] h-[30px] border-2 border-[#272b34] border-t-[#ff4f9a] rounded-full animate-[spin_.7s_linear_infinite]" />
      <span>Loading portfolio...</span>
    </div>
  );
}