-- Script to fix RLS issues for form submissions

-- 1. First, disable Row Level Security temporarily to verify form submissions are working
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE custom_orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE bulk_orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers DISABLE ROW LEVEL SECURITY;

-- 2. If you want to re-enable RLS with properly configured policies:
-- Uncomment and run these after confirming form submissions work

/*
-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE bulk_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Delete existing policies
DROP POLICY IF EXISTS "Allow inserts to everyone for contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow inserts to everyone for custom_orders" ON custom_orders;
DROP POLICY IF EXISTS "Allow inserts to everyone for bulk_orders" ON bulk_orders;
DROP POLICY IF EXISTS "Allow inserts to everyone for newsletter_subscribers" ON newsletter_subscribers;

DROP POLICY IF EXISTS "Allow select to authenticated users for contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow select to authenticated users for custom_orders" ON custom_orders;
DROP POLICY IF EXISTS "Allow select to authenticated users for bulk_orders" ON bulk_orders;
DROP POLICY IF EXISTS "Allow select to authenticated users for newsletter_subscribers" ON newsletter_subscribers;

-- Create improved policies
CREATE POLICY "Allow anonymous inserts for contact_submissions" 
  ON contact_submissions FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts for custom_orders" 
  ON custom_orders FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts for bulk_orders" 
  ON bulk_orders FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts for newsletter_subscribers" 
  ON newsletter_subscribers FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Also create select policies for authenticated users
CREATE POLICY "Allow select to authenticated users for contact_submissions" 
  ON contact_submissions FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow select to authenticated users for custom_orders" 
  ON custom_orders FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow select to authenticated users for bulk_orders" 
  ON bulk_orders FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow select to authenticated users for newsletter_subscribers" 
  ON newsletter_subscribers FOR SELECT 
  TO authenticated
  USING (true);
*/
