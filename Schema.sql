-- ============================================================
-- CURAVITA HOSPITAL DATABASE SCHEMA
-- Execute this SQL in your Supabase SQL Editor
-- ============================================================

-- 1. APPOINTMENTS TABLE
-- Stores patient booking requests submitted through the web form.
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    department TEXT NOT NULL,
    doctor TEXT DEFAULT 'Any available doctor',
    appointment_date DATE NOT NULL,
    appointment_time TEXT NOT NULL,
    reason TEXT
);

-- Enable Row Level Security (RLS) on appointments
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone (public/anonymous) to submit/insert an appointment
CREATE POLICY "Allow public inserts" 
ON public.appointments 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Policy: Allow authenticated users (Admin) to view all appointments
CREATE POLICY "Allow authenticated read" 
ON public.appointments 
FOR SELECT 
TO authenticated 
USING (true);


-- 2. ADMIN SETTINGS TABLE
-- Used to enforce a single-slot admin registration limit for the hospital portal.
CREATE TABLE IF NOT EXISTS public.admin_settings (
    id INT PRIMARY KEY DEFAULT 1,
    admin_email TEXT UNIQUE,
    claimed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    CONSTRAINT single_row CHECK (id = 1)
);

-- Enable Row Level Security (RLS) on admin_settings
ALTER TABLE public.admin_settings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to read admin status (checks if slot is already claimed)
CREATE POLICY "Allow public read admin_settings" 
ON public.admin_settings 
FOR SELECT 
TO public 
USING (true);


-- 3. HELPER FUNCTIONS (STORED PROCEDURES)

-- Check if the single admin slot has already been claimed
CREATE OR REPLACE FUNCTION public.is_admin_slot_claimed()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN EXISTS (SELECT 1 FROM public.admin_settings WHERE id = 1);
END;
$$;

-- Atomically claim the single admin slot during first-time setup
CREATE OR REPLACE FUNCTION public.claim_admin_slot(p_email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    INSERT INTO public.admin_settings (id, admin_email)
    VALUES (1, p_email);
    RETURN true;
EXCEPTION
    WHEN unique_violation THEN
        RETURN false;
END;
$$;

-- Unclaim admin slot if sign-up fails midway
CREATE OR REPLACE FUNCTION public.unclaim_admin_slot(p_email TEXT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    DELETE FROM public.admin_settings 
    WHERE id = 1 AND admin_email = p_email;
END;
$$;