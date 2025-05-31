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

type FormData = {
    email: string;
    subject: string;
    message: string;
};

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form data submitted:", data);
        alert(`Submitted your case: ${data.subject}`);
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-8 bg-white rounded-xl shadow-lg font-serif">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        className="px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email format'
                            }
                        })}
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">Subject:</label>
                    <input
                        type="text"
                        className="px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        {...register('subject', {
                            required: 'Subject is required',
                            pattern: {
                                value: /^.{10,30}$/,
                                message: 'Subject must be between 10 to 30 characters'
                            }
                        })}
                    />
                    {errors.subject && <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>}
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">Message:</label>
                    <textarea
                        rows={5}
                        className="px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        {...register('message', {
                            required: 'Message is required'
                        })}
                    />
                    {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                </div>

                <button
                    type="submit"
                    className="py-3 px-6 rounded-md text-white font-semibold bg-gradient-to-r from-green-300 to-green-600 hover:from-green-600 hover:to-green-800 shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
