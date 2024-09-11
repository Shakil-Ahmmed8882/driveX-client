import { Form } from "antd";
import { ReactNode } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  FieldValues,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className?: string;
  isReset?: boolean ;
} & TFormConfig;

const DForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
  className,
  isReset,
}: TFormProps) => {
  // Define the formConfig type to include possible UseFormProps
  const formConfig: Partial<UseFormProps<FieldValues>> = {};

  //  default values & resolver set-up
  if (defaultValues) {
    formConfig.defaultValues = defaultValues;
  }

  if (resolver) {
    formConfig.resolver = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    if (isReset) {
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <Form
        layout="vertical"
        className={`${className}`}
        onFinish={methods.handleSubmit(submit)}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default DForm;
