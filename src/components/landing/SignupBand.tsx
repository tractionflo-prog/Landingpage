import { Reveal } from "@/components/ui/Reveal";
import { SignupBlock } from "./SignupBlock";

type SignupBandProps = {
  headline: string;
  sub?: string;
};

export function SignupBand({ headline, sub }: SignupBandProps) {
  return (
    <section className="lp-signup-band">
      <div className="page-wrap">
        <Reveal className="lp-signup-band-inner">
          <div className="lp-signup-band-copy">
            <h2 className="lp-signup-band-title">{headline}</h2>
            {sub && <p className="lp-signup-band-sub">{sub}</p>}
          </div>
          <SignupBlock size="lg" align="left" />
        </Reveal>
      </div>
    </section>
  );
}
