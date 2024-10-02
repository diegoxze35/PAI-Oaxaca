const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRtb3Jlbm9tMjAwMkBhbHVtbm8uaXBuLm14Iiwicm9sZSI6IkV4dGVybm9zIiwibmJmIjoxNzI3ODMzNTU4LCJleHAiOjE3Mjc5MTk5NTgsImlhdCI6MTcyNzgzMzU1OCwiaXNzIjoic2VsZiIsImF1ZCI6ImxvY2FsaG9zdDo1NzI1MiJ9.84qq42sU52AaahAcNQa3WN7obzTimRQrSkDCPY3j6h8";
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