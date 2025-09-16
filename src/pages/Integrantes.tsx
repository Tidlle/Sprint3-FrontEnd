import Card from '../components/Card'
import { INTEGRANTES } from '../data/integrantes'
import { Link } from 'react-router-dom'

export default function Integrantes() {
  return (
    <Card className="section-eq" title="Integrantes">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INTEGRANTES.map((m) => (
          <Link key={m.id} to={`/integrantes/${m.id}`} className="block p-4 rounded-xl border hover:shadow-soft transition bg-card">
            <p className="font-semibold">{m.nome}</p>
            <p className="text-sm text-muted">RM: {m.rm} · Turma: {m.turma}</p>
            {m.cargo && <p className="text-xs mt-1 text-muted">Função: {m.cargo.toUpperCase()}</p>}
          </Link>
        ))}
      </div>
    </Card>
  )
}
