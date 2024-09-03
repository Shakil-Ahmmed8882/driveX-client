import  { useState } from "react";
import DForm from "../../shared/forms/DForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import DInput from "../../shared/forms/DInput";
import DTextArea from "../../shared/forms/DTextArea";
import { Button, Col, Row } from "antd";
import { fieldsValidation } from "./utils";
import { toast } from "sonner";

const ContactPage = () => {
  const [errorObj, setError] = useState<{ error?: string; message?: string }>(
    {}
  );

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    try {
      fieldsValidation(data);
      setError({});
      
      toast.success("Send message to the DriveX")

    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0D0B0C] to-[#2A2829] p-3 md:p-6">
      <div className="max-w-3xl mx-auto bg-[#313131] mt-11 p-8 py-11 rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center md:pb-8">
          Contact Us
        </h1>
        <DForm onSubmit={handleSubmit} className="space-y-6">
          <Row gutter={16}>
            <Col md={{ span: 12 }} span={24}>
              <DInput type="text" name="name" label="Your name" />
              {errorObj.error === "name" && (
                <small className="text-red-500">{errorObj.message}</small>
              )}
            </Col>
            <Col md={{ span: 12 }} span={24}>
              <DInput type="text" name="email" label="@gmail.com" />
              {errorObj.error === "email" && (
                <small className="text-red-500">{errorObj.message}</small>
              )}
            </Col>
          </Row>
          <DTextArea name="message" placeholder="Message.." />
          {errorObj.error === "message" && (
            <small className="text-red-500">{errorObj.message}</small>
          )}
          <Button
            htmlType="submit"
            className="w-full border-none primaryGradient"
          >
            Send Message
          </Button>
        </DForm>
      </div>
    </div>
  );
};

export default ContactPage;
