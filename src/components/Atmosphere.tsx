/**
 * Fixed background: a soft lime gradient mesh over cream, plus a faint grid.
 * Purely decorative, so it is hidden from assistive tech and never intercepts
 * pointer events.
 */
export function Atmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-cream" />

      {/* Blooms. Kept low so the page reads as cream with a lime accent rather
          than a wash of yellow-green. */}
      <div className="absolute -top-[24rem] -right-[16rem] h-[42rem] w-[42rem] rounded-full bg-lime/14 blur-[150px]" />
      <div className="absolute top-[40%] -left-[22rem] h-[36rem] w-[36rem] rounded-full bg-lime-600/9 blur-[160px]" />
      <div className="absolute -bottom-[20rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-lime-700/7 blur-[160px]" />

      {/* Hairline grid, fading out toward the bottom of the viewport */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(13,15,6,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,15,6,0.045) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse 100% 70% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />
    </div>
  )
}
