import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../commponent/common/header/button";
import { ContactUsImage } from "../../assets/images";


export default function ContactUs() {
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        message: Yup.string().required("Message is required"),
    });

    const initialValues = {
        name: "",
        email: "",
        message: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log("Contact Form Data:", values);
        resetForm();
    };
    return (
        <section className="md:py-20 py-8 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-[minmax(100px,698px)_minmax(100px,582px)] gap-8 md:gap-12 items-center">
                    <div className="w-full pl-0 md:pl-10 md:order-1 order-2">
                        <div className="pb-6 md:pb-8">
                            <h2 className="text-3xl font-semibold text-[#141219] pb-2">Ready to dot your i’s and cross your t’s</h2>
                            <p className="text-base font-normal text-[#777B8B]">Our friendly team would love to hear from you.</p>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {() => (
                                <Form className="space-y-6">

                                    <div>
                                        <label className="block text-sm font-medium text-[#344054] pb-1.5">
                                            Name
                                        </label>
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Full name"
                                            className="w-full bg-[#F5F5F5] rounded-2xl text-base text-[#A4A7AE] font-normal px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="p"
                                            className="text-sm text-red-500 pt-1"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#344054]  pb-1.5">
                                            Email
                                        </label>
                                        <Field
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full bg-[#F5F5F5] rounded-2xl text-base text-[#A4A7AE] font-normal px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="p"
                                            className="text-sm text-red-500 pt-1"
                                        />
                                    </div>

                                    <div className="pb-2">
                                        <label className="block text-sm font-medium text-[#344054]  pb-1.5">
                                            Message
                                        </label>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            rows="4"
                                            placeholder="Leave us a message..."
                                            className="w-full bg-[#F5F5F5] rounded-2xl text-base text-[#A4A7AE] font-normal px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="p"
                                            className="text-sm text-red-500 pt-1"
                                        />
                                    </div>
                                    <Button text={`Send Message`} />
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="md:order-2 order-1">
                        <img src={ContactUsImage} alt="contact-us-image" width={590} height={590} loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}