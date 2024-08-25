import { Form } from "antd";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

// type TFormConfig = {
//   defaultValues?: Record<string, any>;
//   resolver?: any;
// };

// type TFormProps = {
//   onSubmit: SubmitHandler<FieldValues>;
//   children: ReactNode;
// } & TFormConfig;

const RSForm = ({ onSubmit, children, defaultValues, resolver }) => {
  const formConfig = {};

  //  default values & resolver set-up
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  //   const submit: SubmitHandler<FieldValues> = (data) => {
  const submit = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default RSForm;
