
-- Drop existing policies
DROP POLICY IF EXISTS "Allow inserts to everyone for contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow inserts to everyone for custom_orders" ON custom_orders;
DROP POLICY IF EXISTS "Allow inserts to everyone for bulk_orders" ON bulk_orders;
DROP POLICY IF EXISTS "Allow inserts to everyone for newsletter_subscribers" ON newsletter_subscribers;

-- Create new policies specifically for anonymous users
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

-- Also ensure authenticated users can insert
CREATE POLICY "Allow authenticated inserts for contact_submissions" 
  ON contact_submissions FOR INSERT 
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts for custom_orders" 
  ON custom_orders FOR INSERT 
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts for bulk_orders" 
  ON bulk_orders FOR INSERT 
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts for newsletter_subscribers" 
  ON newsletter_subscribers FOR INSERT 
  TO authenticated
  WITH CHECK (true);
