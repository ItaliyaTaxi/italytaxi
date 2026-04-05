"use client";

import Link from 'next/link';

interface TaxiButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function TaxiButton({
    children,
    href,
    onClick,
    className = "",
    type = "button",
    disabled
}: TaxiButtonProps) {
    const content = (
        <>
            <div className="inner" suppressHydrationWarning>
                {children}
            </div>
            <div className="fold"></div>
            <div className="points_wrapper">
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
            </div>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`taxi-button ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`taxi-button ${className}`}
        >
            {content}
        </button>
    );
}
