-- Disable Row Level Security temporarily for troubleshooting
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE custom_orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE bulk_orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers DISABLE ROW LEVEL SECURITY;
