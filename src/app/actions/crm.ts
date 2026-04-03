'use server';

import { getServiceSupabase } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function deleteBookingAction(id: string) {
    try {
        const supabase = getServiceSupabase();
        const { error } = await supabase.from('bookings').delete().eq('id', id);
        
        if (error) {
            console.error('[CRM Action] Error deleting booking:', error);
            throw new Error(error.message);
        }
        
        revalidatePath('/crm');
        return { success: true };
    } catch (e: any) {
        console.error('[CRM Action] Exception deleting booking:', e);
        throw new Error(e.message || 'Failed to delete booking');
    }
}

export async function deleteContactAction(id: string) {
    try {
        const supabase = getServiceSupabase();
        const { error } = await supabase.from('contacts').delete().eq('id', id);
        
        if (error) {
            console.error('[CRM Action] Error deleting contact:', error);
            throw new Error(error.message);
        }
        
        revalidatePath('/crm');
        return { success: true };
    } catch (e: any) {
        console.error('[CRM Action] Exception deleting contact:', e);
        throw new Error(e.message || 'Failed to delete contact');
    }
}
