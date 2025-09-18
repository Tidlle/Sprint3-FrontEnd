import { useForm } from 'react-hook-form'

type Form = { especialidade: string; data: string; hora: string; observacoes?: string }

export default function Marcar() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<Form>()
  const onSubmit = async (data: Form) => {
    await new Promise(r => setTimeout(r, 500))
    alert('Consulta solicitada!\\n' + JSON.stringify(data, null, 2))
  }

  return (
    <div className="container-app">

      <form onSubmit={handleSubmit(onSubmit)} className="card-white bg-[#17A2A8] max-w-xl mx-auto p-5 grid gap-4">
        <h2 className="font-semibold text-white drop-shadow-sm">Marcar uma Consulta</h2>
        <label className="block">
          <span className="text-sm">Especialidade</span>
          <select className="text-[#17A2A8] mt-1 w-full rounded-lg border p-2" {...register('especialidade')}>
            <option>Clínico geral</option>
            <option>Pediatria</option>
            <option>Dermatologia</option>
          </select>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm">Data</span>
            <input type="date" className="text-[#17A2A8] mt-1 w-full rounded-lg border p-2" {...register('data')} />
          </label>
          <label className="block">
            <span className="text-sm">Hora</span>
            <input type="time" className="text-[#17A2A8] mt-1 w-full rounded-lg border p-2" {...register('hora')} />
          </label>
        </div>
        <label className="block">
          <span className="text-sm">Observações</span>
          <textarea className="text-[#17A2A8] mt-1 w-full rounded-lg border p-2" rows={4} {...register('observacoes')} />
        </label>

        <div>
          <button type="submit" disabled={isSubmitting} className="bg-brand text-white px-6 py-2 rounded-lg">
            {isSubmitting ? 'Enviando…' : 'Confirmar'}
          </button>
        </div>
      </form>
    </div>
  )
}
