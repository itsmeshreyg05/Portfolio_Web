'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});


export type FormState = {
  message: string;
  status: 'idle' | 'success' | 'error';
};

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        message: 'Invalid form data. Please check your inputs.',
        status: 'error',
      };
    }
    
    // Here you would implement your email sending logic.
    // For this example, we'll just log the data to the console
    // and simulate a delay.
    console.log('New message from:', validatedFields.data);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      status: 'success',
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      status: 'error',
    };
  }
}
