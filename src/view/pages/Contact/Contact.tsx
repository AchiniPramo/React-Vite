// import './Contact.css';
// import { useForm } from "react-hook-form";
//
// type FormData = {
//     email: string;
//     subject: string;
//     message: string;
// };
//
// export function Contact() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm<FormData>();
//
//     const onSubmit = (data: FormData) => {
//         console.log("Form data submitted:", data);
//         alert(`Submitted your case: ${data.subject}`);
//     };
//
//     return (
//         <div className="form-container">
//             <h2>Contact Us</h2>
//             <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-group">
//                     <label>Email: </label>
//                     <input
//                         type="email"
//                         {...register('email', {
//                             required: 'Email is required',
//                             pattern: {
//                                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                                 message: 'Invalid email format'
//                             }
//                         })}
//                     />
//                     {errors.email ? <span className="error">{errors.email.message}</span>:''}
//                 </div>
//
//                 <div className="form-group">
//                     <label>Subject: </label>
//                     <input
//                         type="text"
//                         {...register('subject', {
//                             required: 'Subject is required',
//                             pattern: {
//                                 value: /^.{10,30}$/,
//                                 message: 'Subject must be between 10 to 30 characters'
//                             }
//                         })}
//                     />
//                     {errors.subject ? <span className="error">{errors.subject.message}</span>:''}
//                 </div>
//
//                 <div className="form-group">
//                     <label>Message: </label>
//                     <textarea
//                         rows={5}
//                         {...register('message', {
//                             required: 'Message is required'
//                         })}
//                     />
//                     {errors.message ? <span className="error">{errors.message.message}</span>:''}
//                 </div>
//
//                 <button type="submit" className="submit-btn">Submit</button>
//             </form>
//         </div>
//     );
// }


import { useForm } from "react-hook-form";
import { backendApi } from "../../../api.ts";

type FormData = {
    email: string;
    subject: string;
    message: string;
};

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        console.log("Form data submitted:", data);

        try {
            const response = await backendApi.post("/contacts/save", data);
            console.log("Backend response:", response.data);
            alert(`Submitted your case:\n${data.subject}`);
        } catch (error) {
            console.error("Error submitting contact:", error);
            alert("Failed to submit your message. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Contact us</h2>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Email:</label>
                    <input
                        type="email"
                        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4eaacf] ${
                            errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-red-600 text-sm mt-1">
              {errors.email.message}
            </span>
                    )}
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Subject:</label>
                    <input
                        type="text"
                        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4eaacf] ${
                            errors.subject ? "border-red-500" : "border-gray-300"
                        }`}
                        {...register("subject", {
                            required: "Subject is required",
                            pattern: {
                                value: /^.{10,30}$/,
                                message: "Subject must be between 10 to 30 characters",
                            },
                        })}
                    />
                    {errors.subject && (
                        <span className="text-red-600 text-sm mt-1">
              {errors.subject.message}
            </span>
                    )}
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Message:</label>
                    <textarea
                        rows={5}
                        className={`border rounded-md px-3 py-2 resize-none focus:outline-none ${
                            errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        {...register("message", { required: true })}
                    />
                    {errors.message && (
                        <span className="text-red-600 text-sm mt-1">
              Message is Required
            </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-green-700
                     text-white text-sm font-semibold py-2 rounded-md
                     shadow-md hover:from-green-600 hover:to-green-800
                     hover:shadow-lg transition duration-300 ease-in-out
                     transform hover:-translate-y-0.5 hover:scale-105"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
