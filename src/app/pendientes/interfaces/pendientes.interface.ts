export interface Pendientes {
    categoria: Categoria;
    categoria_id: number;
    created_at: Date;
    fecha: Date;
    hora: Date;
    pend: number;
    pendiente: string;
    updated_at:Date;
}

interface Categoria {
    catg: number;
    categoria: string;
    created_at: Date;
    updated_at: Date;
}