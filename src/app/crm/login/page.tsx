'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TaxiButton from '@/components/TaxiButton';

export default function CRMLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const { error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (loginError) {
            setError(loginError.message);
            setLoading(false);
        } else {
            router.push('/crm');
            router.refresh();
        }
    };

    return (
        <main className="min-h-screen bg-navy text-white">
            <Navbar />
            <div className="pt-40 pb-24 flex items-center justify-center container mx-auto px-6">
                <div className="w-full max-w-md">
                    <div className="taxi-form-container relative p-10 animate-fade-in shadow-2xl border-gold/20">
                        <div className="form-bg-stars">
                            <div className="form-star"></div>
                            <div className="form-star"></div>
                        </div>

                        <div className="relative z-10">
                            <header className="mb-10 text-center">
                                <p className="form-flicker-title uppercase tracking-widest text-xs mb-2">Internal Access</p>
                                <h3 className="form-main-title !text-4xl">CRM LOGIN</h3>
                            </header>

                            <form onSubmit={handleLogin} className="space-y-6">
                                {error && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl text-xs font-bold text-center">
                                        {error}
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label className="taxi-form-label !text-[10px]">Admin Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="admin@italiaride.it"
                                        className="taxi-form-input !bg-white/5"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="taxi-form-label !text-[10px]">Secret Key</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            placeholder="••••••••"
                                            className="taxi-form-input !bg-white/5 !pr-12"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(v => !v)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gold transition-colors"
                                            tabIndex={-1}
                                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        >
                                            {showPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <TaxiButton
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-5"
                                    >
                                        {loading ? 'AUTHENTICATING...' : 'ACCESS DASHBOARD'}
                                    </TaxiButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

