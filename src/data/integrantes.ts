export type Integrante = {
  id: string
  nome: string
  rm: string
  turma: string
  cargo?: 'dev' | 'ux' | 'po' | 'qa' | 'arq' | 'pm'
}

export const INTEGRANTES: Integrante[] = [
  { id: '1', nome: 'Eduardo Martins', rm: 'RM0001', turma: '1TDS', cargo: 'dev' },
  { id: '2', nome: 'Maria Silva', rm: 'RM0002', turma: '1TDS', cargo: 'ux' },
  { id: '3', nome: 'João Pedro', rm: 'RM0003', turma: '1TDS', cargo: 'po' },
  { id: '4', nome: 'Ana Paula', rm: 'RM0004', turma: '1TDS', cargo: 'qa' },
]
