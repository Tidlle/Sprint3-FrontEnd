import Card from '../components/Card'

export default function Sobre() {
  return (
    <div className="grid gap-6">
      <Card className="section-eq" title="Sobre o Projeto">
        <p className="text-muted">
          O APP HC tem como objetivo apoiar o fluxo de atendimento e agendamentos, com cadastro de pacientes,
          integração futura com API Java (Sprint 4) e boas práticas de UX.
        </p>
      </Card>
      <Card className="section-eq" title="Tecnologias">
        <ul className="list-disc pl-5 text-muted space-y-1">
          <li>React + Vite + TypeScript</li>
          <li>TailwindCSS (utilitarios responsivos)</li>
          <li>React Hook Form (validacao de formularios)</li>
          <li>React Router (rotas estaticas e dinamicas)</li>
          <li>fetch nativo para chamadas a API</li>
        </ul>
      </Card>
    </div>
  )
}
