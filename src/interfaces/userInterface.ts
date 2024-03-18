
interface Usuario {
    id: number;
    email: string;
    password: string;
    rol: 'admin' | 'dev' | 'tester'
}

export default Usuario;