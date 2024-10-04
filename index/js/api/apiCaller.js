const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRtb3Jlbm9tMjAwMkBhbHVtbm8uaXBuLm14Iiwicm9sZSI6IkV4dGVybm9zIiwibmJmIjoxNzI4MDA4MDU3LCJleHAiOjE3MjgwOTQ0NTcsImlhdCI6MTcyODAwODA1NywiaXNzIjoic2VsZiIsImF1ZCI6ImxvY2FsaG9zdDo1NzI1MiJ9.RI-kghRkLjmJu-XyNFLgGL8MNVx295FD4lS562sRCs0";
const URL = "https://sistemas.coneval.org.mx/SIID/api/V1/publico/pobreza";
export async function getPovertyConditionByIdAndYear(id, year=2020) {
    const paramethers = `/${year}/0/20/${id}/2`;
    const response = await fetch((URL + paramethers), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    return response.json();
}

export function toDomain(apiResponse) {
    return { 
        Descripción: apiResponse.Descripcion,
        Porcentage: apiResponse.Porcentaje,
        Personas: apiResponse.Personas,
        Carencia: apiResponse.Carencia
    };
}