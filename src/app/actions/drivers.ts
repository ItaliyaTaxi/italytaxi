'use server';

import { getServiceSupabase } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export interface Driver {
    id: string;
    name: string;
    whatsapp_number: string;
    city: string;
    coverage_areas: string | null;
    vehicle_type: string | null;
    vehicle_model: string | null;
    passenger_capacity: number | null;
    luggage_capacity: number | null;
    notes: string | null;
    status: 'active' | 'inactive';
    created_at: string;
    updated_at: string;
}

export interface DriverContact {
    id: string;
    booking_id: string | null;
    driver_id: string | null;
    driver_name: string | null;
    message_text: string | null;
    status: 'contacted' | 'confirmed' | 'rejected';
    contacted_at: string;
}

function field(formData: FormData, key: string): string | null {
    const v = formData.get(key);
    if (v === null || typeof v !== 'string') return null;
    const trimmed = v.trim();
    return trimmed === '' ? null : trimmed;
}

function intField(formData: FormData, key: string): number | null {
    const v = field(formData, key);
    if (v === null) return null;
    const n = parseInt(v, 10);
    return isNaN(n) ? null : n;
}

// ── Drivers CRUD ────────────────────────────────────────────────────────────

export async function listDriversAction(): Promise<Driver[]> {
    const supabase = getServiceSupabase();
    const { data, error } = await supabase
        .from('drivers')
        .select('*')
        .order('city', { ascending: true })
        .order('name', { ascending: true });
    if (error) throw new Error(error.message);
    return (data || []) as Driver[];
}

export async function createDriverAction(formData: FormData): Promise<Driver> {
    const supabase = getServiceSupabase();
    const name = field(formData, 'name');
    const whatsapp = field(formData, 'whatsapp_number');
    const city = field(formData, 'city');
    if (!name) throw new Error('Driver name is required.');
    if (!whatsapp) throw new Error('WhatsApp number is required.');
    if (!city) throw new Error('City is required.');

    const record = {
        name,
        whatsapp_number: whatsapp,
        city,
        coverage_areas: field(formData, 'coverage_areas'),
        vehicle_type: field(formData, 'vehicle_type'),
        vehicle_model: field(formData, 'vehicle_model'),
        passenger_capacity: intField(formData, 'passenger_capacity'),
        luggage_capacity: intField(formData, 'luggage_capacity'),
        notes: field(formData, 'notes'),
        status: field(formData, 'status') === 'inactive' ? 'inactive' : 'active',
    };

    const { data, error } = await supabase.from('drivers').insert([record]).select('*').single();
    if (error) throw new Error(error.message);
    revalidatePath('/crm');
    return data as Driver;
}

export async function updateDriverAction(id: string, formData: FormData): Promise<Driver> {
    const supabase = getServiceSupabase();
    if (!id) throw new Error('Driver id is required.');
    const name = field(formData, 'name');
    const whatsapp = field(formData, 'whatsapp_number');
    const city = field(formData, 'city');
    if (!name) throw new Error('Driver name is required.');
    if (!whatsapp) throw new Error('WhatsApp number is required.');
    if (!city) throw new Error('City is required.');

    const update = {
        name,
        whatsapp_number: whatsapp,
        city,
        coverage_areas: field(formData, 'coverage_areas'),
        vehicle_type: field(formData, 'vehicle_type'),
        vehicle_model: field(formData, 'vehicle_model'),
        passenger_capacity: intField(formData, 'passenger_capacity'),
        luggage_capacity: intField(formData, 'luggage_capacity'),
        notes: field(formData, 'notes'),
        status: field(formData, 'status') === 'inactive' ? 'inactive' : 'active',
    };

    const { data, error } = await supabase.from('drivers').update(update).eq('id', id).select('*').single();
    if (error) throw new Error(error.message);
    revalidatePath('/crm');
    return data as Driver;
}

export async function deleteDriverAction(id: string): Promise<{ success: true }> {
    const supabase = getServiceSupabase();
    const { error } = await supabase.from('drivers').delete().eq('id', id);
    if (error) throw new Error(error.message);
    revalidatePath('/crm');
    return { success: true };
}

// ── Contact history ─────────────────────────────────────────────────────────

export async function logDriverContactAction(payload: {
    booking_id: string | null;
    driver_id: string;
    driver_name: string;
    message_text: string;
}): Promise<DriverContact> {
    const supabase = getServiceSupabase();
    if (!payload.driver_id) throw new Error('Driver id is required.');
    const { data, error } = await supabase
        .from('driver_contacts')
        .insert([{
            booking_id: payload.booking_id,
            driver_id: payload.driver_id,
            driver_name: payload.driver_name,
            message_text: payload.message_text,
            status: 'contacted',
        }])
        .select('*')
        .single();
    if (error) throw new Error(error.message);
    revalidatePath('/crm');
    return data as DriverContact;
}

export async function listDriverContactsAction(bookingId: string): Promise<DriverContact[]> {
    const supabase = getServiceSupabase();
    if (!bookingId) return [];
    const { data, error } = await supabase
        .from('driver_contacts')
        .select('*')
        .eq('booking_id', bookingId)
        .order('contacted_at', { ascending: false });
    if (error) throw new Error(error.message);
    return (data || []) as DriverContact[];
}

export async function updateDriverContactStatusAction(
    id: string,
    status: 'contacted' | 'confirmed' | 'rejected',
): Promise<{ success: true }> {
    const supabase = getServiceSupabase();
    const { error } = await supabase.from('driver_contacts').update({ status }).eq('id', id);
    if (error) throw new Error(error.message);
    revalidatePath('/crm');
    return { success: true };
}
