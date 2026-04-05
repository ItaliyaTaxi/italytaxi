import { Metadata } from 'next';
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
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="••••••••"
                                        className="taxi-form-input !bg-white/5"
                                    />
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

export const metadata: Metadata = {
    alternates: { canonical: "/crm/login" }
};
