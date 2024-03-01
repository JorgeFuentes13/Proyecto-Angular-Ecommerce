
export interface Producto {
    id : number;
    nombre: string;
    precio: number;
    image: string;
    stock : number;
    atributos: [];
    categoria: string;
    marca: string;
}

export interface Categoria{
    id: number;
    nombre: string;
}