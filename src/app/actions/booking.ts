'use server';

import { supabase } from '@/lib/supabase/client';

export async function submitBooking(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const pickup = formData.get('pickup') as string;
    const dropoff = formData.get('dropoff') as string;
    const datetime = formData.get('datetime') as string;

    try {
        const { error: dbError } = await supabase
            .from('bookings')
            .insert([
                {
                    full_name: name,
                    email,
                    phone,
                    pickup_location: pickup,
                    dropoff_location: dropoff,
                    booking_datetime: datetime,
                    status: 'pending'
                }
            ]);

        if (dbError) throw dbError;

        return {
            success: true,
            message: `Thank you ${name}! Your booking request has been received. Our team will contact you at ${phone} shortly to confirm the details.`
        };

    } catch (error: any) {
        console.error('Booking Error:', error);
        return {
            success: false,
            message: error.message || "Something went wrong. Please try again or call us directly."
        };
    }
}
