
-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Custom orders table
CREATE TABLE IF NOT EXISTS custom_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT NOT NULL,
  dimensions TEXT NOT NULL,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  description TEXT NOT NULL,
  attach_design BOOLEAN DEFAULT FALSE,
  inspiration TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bulk orders table
CREATE TABLE IF NOT EXISTS bulk_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_type TEXT NOT NULL,
  project_description TEXT NOT NULL,
  quantity TEXT NOT NULL,
  target_delivery_date TEXT,
  additional_requirements TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies to secure the tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE bulk_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies that allow anyone to insert but only authenticated users to select
CREATE POLICY "Allow inserts to everyone for contact_submissions" 
  ON contact_submissions FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow inserts to everyone for custom_orders" 
  ON custom_orders FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow inserts to everyone for bulk_orders" 
  ON bulk_orders FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow inserts to everyone for newsletter_subscribers" 
  ON newsletter_subscribers FOR INSERT 
  WITH CHECK (true);

-- Create policies that allow only authenticated users to select
CREATE POLICY "Allow select to authenticated users for contact_submissions" 
  ON contact_submissions FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow select to authenticated users for custom_orders" 
  ON custom_orders FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow select to authenticated users for bulk_orders" 
  ON bulk_orders FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow select to authenticated users for newsletter_subscribers" 
  ON newsletter_subscribers FOR SELECT 
  USING (auth.role() = 'authenticated');
