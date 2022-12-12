import { createPolymorphicComponent } from "@mantine/core";
import { forwardRef } from "react";

import type { ReactNode, FormEvent } from "react";

interface FormProps {
  children: ReactNode;
  submitCallback: (event: FormEvent<HTMLFormElement>) => void;
  resetCallback?: (event: FormEvent<HTMLFormElement>) => void;
}

const _Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, submitCallback, resetCallback = () => {}, ...others }, ref) => (
    <form
      ref={ref}
      {...others}
      onSubmit={submitCallback}
      onReset={resetCallback}
    >
      {children}
    </form>
  )
);

export const GenericForm = createPolymorphicComponent<"form", FormProps>(_Form);
