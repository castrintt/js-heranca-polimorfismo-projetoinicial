import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./sistemaAutenticacao.js";


const dir = new Diretor('igor', 10000, 60649807375)
const ger = new Gerente('Romulin', 8000 , 5165564222)
const cl = new Cliente('Rodrigo', 62056555213)
