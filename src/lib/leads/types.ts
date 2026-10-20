/**
 * The canonical shape of a lead, shared by every path that creates one.
 *
 * Both the public booking form on this site and the server-to-server intake
 * at /api/leads normalise into this before anything touches the database, so
 * there is one definition of what a lead is rather than one per entry point.
 */

export type LeadSourceSite = 'italytaxiservice' | 'rometransferservice';

export const leadSourceSites: LeadSourceSite[] = [
    'italytaxiservice',
    'rometransferservice',
];

/** Human-readable labels for the CRM. */
export const leadSourceSiteLabels: Record<LeadSourceSite, string> = {
    italytaxiservice: 'Italy Taxi Service',
    rometransferservice: 'Rome Transfer Service',
};

export interface LeadInput {
    /** Which website produced the lead. */
    sourceSite: LeadSourceSite;
    /** Which form or channel on that website, e.g. "Book Now Page". */
    sourceForm: string;

    fullName: string;
    email: string;
    phone: string;

    pickupLocation: string;
    dropoffLocation: string;
    /** Same raw string format the existing form stores: "YYYY-MM-DDTHH:MM". */
    bookingDatetime: string;
    flightNumber?: string;

    hasReturnTrip: boolean;
    returnPickupLocation?: string;
    returnDropoffLocation?: string;
    returnDatetime?: string;
    returnFlightNumber?: string;

    /** Total travelling, which is what the existing `passengers` column holds. */
    passengers: number;
    /** The split, where the form collects it. */
    adults?: number;
    children?: number;
    childAges?: string;

    /** Human-readable summary, which is what the existing `luggage` column holds. */
    luggage?: string;
    luggageHold?: number;
    luggageCabin?: number;

    serviceType?: string;
    customerMessage?: string;
    locale?: string;

    /** Supplied by the caller so a retry cannot create a second lead. */
    idempotencyKey?: string;
}

export interface CreatedLead {
    id: string | null;
    /** True when an existing lead with the same idempotency key was found. */
    deduplicated: boolean;
    /** False when the extended columns are missing, i.e. migration not run. */
    fullSchema: boolean;
    record: Record<string, unknown> | null;
}
