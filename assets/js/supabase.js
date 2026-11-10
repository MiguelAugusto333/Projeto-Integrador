// Dados do projeto Supabase

const SUPABASE_URL = "https://qkbgdqqaqyoidppdoiuy.supabase.co";

const SUPABASE_KEY = "sb_publishable_vSO6-YSvJJhvi-4aZ2pwlg_eAuChn3K";

// Criando conexão com o banco

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase conectado!");