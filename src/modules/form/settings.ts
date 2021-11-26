export const customFields = [
  {
    type: 'text',
    name: 'name',
    label: 'Nome',
    placeholder: 'Preencha o nome',
    required: 'Nome é obrigatório'
  },
  {
    type: 'number',
    name: 'simultaneous_accesses',
    label: 'Acessos simultâneos',
    min: {
      value: 1,
      error: 'Mínimo de 1 acessos simultâneos',
    },
    max: {
      value: 10,
      error: 'Máximo de 10 acessos simultâneos',
    }
  },
  {
    type: 'select',
    name: 'role',
    label: 'Cargo',
    placeholder: 'Selecione o cargo',
    required: 'Cargo é obrigatório'
  },
  {
    type: 'checkbox',
    name: 'terms',
    label: 'Concorda com os termos de uso?',
    required: 'É obrigatório concordar com os termos'
  },
]