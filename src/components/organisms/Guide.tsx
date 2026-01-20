import { GUIDE_STEPS } from "@lib/constants/guide";
import AnimatedText from "@atoms/AnimatedText";
import CTAButton from "@atoms/CTAButton";
import GuideStep from "@molecules/GuideStep";
import { useNavigate } from "react-router-dom";
import { useNeonAuth } from "@lib/hooks/useNeonAuth";
import { useProfileStatus } from "@services/profiles/queries";

const Guide = () => {
  const navigate = useNavigate();
  const { user } = useNeonAuth();
  const { data: status } = useProfileStatus();

  const handleCTAClick = () => {
    // If not authenticated, open auth modal
    if (!user) {
      const authModalCheckbox = document.getElementById(
        "auth-modal",
      ) as HTMLInputElement;
      if (authModalCheckbox) {
        authModalCheckbox.checked = true;
      }
      return;
    }

    // If authenticated, redirect based on onboarding status
    if (!status || !status.has_profile || status.onboarding_step < 3) {
      navigate("/onboarding");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <section
      id="guide"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-20 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/30 dark:to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedText
            tag="h2"
            text="Cómo usar nuestra plataforma"
            delay={0.1}
            variant="title"
          />

          <AnimatedText
            tag="p"
            text="Sigue estos sencillos pasos para comenzar a planificar tu carrera universitaria de manera inteligente y eficiente."
            delay={0.2}
            variant="description"
          />
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {GUIDE_STEPS.map((step, index) => (
            <GuideStep
              key={index}
              stepNumber={index + 1}
              iconName={step.iconName}
              title={step.title}
              description={step.description}
              details={step.details}
              delay={0.2 + index * 0.2}
              direction={step.direction}
              isLast={index === GUIDE_STEPS.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <CTAButton
            label="Comenzar Ahora"
            delay={1.0}
            onClick={handleCTAClick}
          />

          <AnimatedText
            tag="p"
            text="Comienza a gestionar tu carrera académica de forma inteligente"
            delay={1.1}
            className="mt-6 text-gray-500 dark:text-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;
