"use client";

// `query` makes the embed show the place the page is actually about. Without it
// the component keeps its original fixed Rome embed, so existing callers that
// pass no props render exactly as before.
export default function MapEmbed({ query, title }: { query?: string; title?: string } = {}) {
    const src = query
        ? `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
        : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.492291371422!2d12.486241!3d41.89021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604ec2a66e6b%3A0xc39f863e461234b!2sRome%21!5e0!3m2!1sen!2sit!4v1700000000000!5m2!1sen!2sit";

    return (
        <section className="w-full h-[450px] relative mt-20">
            <iframe
                title={title ?? (query ? `Map of ${query}` : "Italy Taxi Service Location")}
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
        </section>
    );
}
