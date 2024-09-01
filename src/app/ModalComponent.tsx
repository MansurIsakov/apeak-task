'use client';

import { useMedia, useModalSteps } from '@/hooks';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { StepIndicator } from '@/components/step-indicator';
import { StepOne, StepTwo } from './Steps';

export function ModalComponent() {
  const isSmallScreen = useMedia('(max-width: 639px)');
  const { currentStep, handleNext, handlePrevious } = useModalSteps();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Experience</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 overflow-hidden sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>
            <TitleIcon />
            Add experience
          </DialogTitle>
          <DialogDescription>
            Share where you’ve worked on your profile.
          </DialogDescription>
        </DialogHeader>

        {isSmallScreen ? (
          <SmallScreenContent
            currentStep={currentStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        ) : (
          <LargeScreenContent />
        )}
      </DialogContent>
    </Dialog>
  );
}

function TitleIcon() {
  return (
    <div
      className="after: border-component-border relative mb-4 hidden h-12 w-12 rounded-lg border p-3 shadow-xs sm:block"
      aria-hidden={true}>
      <span className="absolute -left-[24px] -top-[24px] h-[96px] w-[96px] rounded-full border border-gray-200 opacity-50"></span>
      <span className="absolute -left-[46px] -top-[46px] h-[140px] w-[140px] rounded-full border border-gray-200 opacity-50"></span>
      <span className="absolute -left-[64px] -top-[64px] h-[182px] w-[182px] rounded-full border border-gray-200 opacity-50"></span>
      <span className="absolute -left-[84px] -top-[84px] h-[226px] w-[226px] rounded-full border border-gray-200 opacity-50"></span>
      <Icons.Flag className="h-6 w-6" />
    </div>
  );
}

type SmallScreenContentProps = {
  currentStep: number;
  handleNext: () => void;
  handlePrevious: () => void;
};

function SmallScreenContent({
  currentStep,
  handleNext,
  handlePrevious,
}: SmallScreenContentProps) {
  return (
    <>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo textareaRows={2} />}
      <StepIndicator currentStep={currentStep} />
      <DialogFooter>
        {currentStep === 1 ? (
          <StepNavigationNext handleNext={handleNext} />
        ) : (
          <StepNavigationPrevious handlePrevious={handlePrevious} />
        )}
      </DialogFooter>
    </>
  );
}

function LargeScreenContent() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <StepOne />
      <StepTwo />
      <DialogFooter className="w-full sm:justify-between">
        <SaveDraftButton />
        <DialogClose asChild className="w-full">
          <Button type="button">Add experience</Button>
        </DialogClose>
      </DialogFooter>
    </div>
  );
}

function SaveDraftButton() {
  return (
    <DialogClose asChild className="w-full">
      <Button
        type="button"
        variant="secondary"
        className="flex items-center gap-1.5">
        <Icons.Save className="h-5 w-5" /> Save as draft
      </Button>
    </DialogClose>
  );
}

function StepNavigationNext({ handleNext }: { handleNext: () => void }) {
  return (
    <>
      <SaveDraftButton />
      <Button type="button" onClick={handleNext} className="w-full">
        Next
      </Button>
    </>
  );
}

function StepNavigationPrevious({
  handlePrevious,
}: {
  handlePrevious: () => void;
}) {
  return (
    <>
      <div className="flex gap-3">
        <Button
          type="button"
          variant="secondary"
          onClick={handlePrevious}
          className="w-full">
          Back
        </Button>
        <SaveDraftButton />
      </div>

      <DialogClose asChild className="w-full">
        <Button type="button">Add experience</Button>
      </DialogClose>
    </>
  );
}
