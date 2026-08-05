import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { FooterIcon } from "@/utils/Icons";


export default function ThankYou() {
  return (
    <main>
      <SectionWithContainer sectionClassName="bg-cream-bg">
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="max-w-sm w-full relative py-14 px-16 items-center">
            <FooterIcon/>
          </div>
          <p className="text-p2">THANK YOU FOR SUBMITTING</p>
          <h1 className="font-bold font-primary text-2xl md:text-5xl text-p2">
            We will get back to you shortly!
          </h1>
          <LinkButton
            href="/"
            label="Back to Home"
            className="w-fit mx-auto rounded-full"
          />
        </div>
      </SectionWithContainer>
    </main>
  );
}
