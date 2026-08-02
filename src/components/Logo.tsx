import { site } from '../config/site'

/**
 * Brand mark paired with the name in the display face. The image carries an
 * empty alt because the wordmark beside it already names the link; giving both
 * the same text would announce "WeFaber" twice.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={site.logoImage}
        alt=""
        width={site.logoImageSize}
        height={site.logoImageSize}
        decoding="async"
        className="shrink-0 rounded-[7px]"
        style={{ width: site.logoImageSize, height: site.logoImageSize }}
      />
      <span className="font-display text-[0.95rem] font-[900] tracking-[-0.01em] uppercase">
        {site.name}
      </span>
    </span>
  )
}
