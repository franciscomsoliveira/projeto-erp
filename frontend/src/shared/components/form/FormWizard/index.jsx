import {
  WizardContainer,
  WizardSteps,
  WizardStep,
  WizardContent,
} from "./styles";

export function FormWizard({ steps = [], currentStep = 0, children }) {
  return (
    <WizardContainer>
      <WizardSteps>
        {steps.map((step, index) => (
          <WizardStep
            key={step}
            $active={index === currentStep}
            $completed={index < currentStep}
          >
            <span>{index + 1}</span>
            <strong>{step}</strong>
          </WizardStep>
        ))}
      </WizardSteps>

      <WizardContent>{children}</WizardContent>
    </WizardContainer>
  );
}
