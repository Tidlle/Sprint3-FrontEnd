type Item = { data: string; especialidade: string; hora: string; local: string }
const ITENS: Item[] = [
  { data: '30/04/2025', especialidade: 'Clínico geral', hora: '20:19', local: 'Rua Teste' },
  { data: '08/05/2025', especialidade: 'Clínico geral', hora: '20:20', local: 'Rua Teste' },
  { data: '25/05/2025', especialidade: 'Clínico geral', hora: '21:02', local: 'Rua Teste' },
  { data: '20/05/2025', especialidade: 'Clínico geral', hora: '22:56', local: 'Rua teste' },
]

export default function Detalhes() {
  return (
    <div className="container-app">
      <div className="text-center mt-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-sm">Detalhes da(s) Consulta(s)</h1>
      </div>

      <div className="mx-auto w-full max-w-2xl grid gap-5">
        {ITENS.map((it, idx) => (
          <section key={idx} className="bg-white rounded-xl shadow border max-w-xl mx-auto p-5">
            <h2 className="font-extrabold text-xl text-[#1e78b3]">{it.data}</h2>
            <div className="mt-3 text-sm text-black">
              <p><strong>Especialidade:</strong> {it.especialidade}</p>
              <p><strong>Hora:</strong> {it.hora}</p>
              <p><strong>Local:</strong> {it.local}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
