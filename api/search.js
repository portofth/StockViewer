
export default async function handler(req, res) {
    
    const BRAPI_TOKEN = 'tr1TtVpKiTdTG8EuRpoPru'; 

    try {
        const response = await fetch(`https://brapi.dev/api/quote/list?token=${BRAPI_TOKEN}`);
        const data = await response.json();
        
        
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar ações' });
    }
}