export interface Sismos {
    articles: Article[];
}

export interface Article{
    horaLocal: string;
    horaUtc: string;
    latitud: string;
    longitud: string;
    profundidad: string;
    magnitud: string;
    referencia: string;
    mapa: string;    
}