import { createClient } from '@supabase/supabase-js';
import { DB_API_KEY } from '$env/static/private';

export const supabase = createClient('https://fzrnynqnijbwvccckmxe.supabase.co', DB_API_KEY);
