const PT_BR = {
  translations: {
    common: {
      or: 'ou',
      error: {
        generic_api_error:
          'Algo deu errado. Nós vamos consertar isso. Tente mais tarde.',
        field_required: 'Campo {{field_name}} é obrigatório',
        field_must_match: '{{field_name}} deve ser igual',
        valid_email: 'Digite um email válido',
        accept_terms_and_conditions:
          'Você precisa aceitar os Termos e Condições',
        password_error:
          'A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
        confirm_email: 'Por favor, digite o mesmo email utilizado para o cadastro.'
        },
      what_is_this: 'O que é isso?',
      more: 'mais',
      terms: 'Termos e Condições',
      and: 'e',
      privacy: 'Política de Privacidade',
      edit_profile: 'Editar perfil',
      settings: 'Ajustes',
      sign_out: 'Sair',
      enable: 'Habilitar',
      disable: 'Desabilitar',
      dark_mode: 'modo escuro',
      messages: 'menssagens',
      votes: 'votos',
      yes: 'Sim',
      no: 'Não',
      close: 'Fechar',
      send: 'Enviar',
      enjoy_your_content: 'Aproveite seu conteúdo',
      retry: 'Tentar novamente',
      access_your_account: 'Acesse a sua conta',
      back: 'Voltar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      update: 'Atualizar',
      accept_all: 'Eu aceito todos os',
    },
    signin: {
      title: 'Acesse Fanhero agora',
      subtitle: 'Por favor acesse a sua conta agora',
      or: 'ou',
      label: {
        email: 'Email',
        password: 'Senha',
        dont_have_account: 'Não tem uma conta?',
        save_as_default: 'Salvar como padrão',
      },
      actions: {
        login: 'Entrar',
        signup_here: 'Registre-se',
        forgot_password: 'Esqueceu a senha?',
      },
    },
    signup: {
      label: {
        email: 'Email',
        password: 'Senha',
        confirm_email: 'Confirmar Email',
      },
      registration: {
        title: 'Não tem uma conta?',
        subtitle:
          'Insira seu endereço de e-mail e escolha uma senha para criar sua conta e ter acesso a conteúdos exclusivos.',
        already_have_account: 'Voce já tem uma conta?',
      },
      GDPR: {
        citizen: 'Você é cidadão ou residente da União Europeia?',
      },
      confirm_age: {
        title: 'Confirme que você tem mais que {{age}} anos para continuar',
      },
      reconfirm_age: {
        title: 'Você digitou corretamente?',
        subtitle:
          'Parece que você não tem idade suficiente para ter uma conta. Se você digitou a idade errada por engano, atualize-a agora. Caso contrário, você não poderá continuar o registro e nenhum dado inserido será armazenado.',
        under_age: 'Tenho menos de {{age}} anos',
      },
      reconfirm_age_email: {
        title: 'CONFIRMAÇÃO DA IDADE',
        subtitle:
          'Ao clicar em "Concordo" abaixo, certifico que o seguinte é preciso e verdadeiro:',
        age_declaration:
          'Eu sou um indivíduo com {{age}} anos de idade ou mais. Eu anteriormente forneci a idade errada para a {{organization}}.',
        warning:
          'Eu entendo que se a {{organization}} analisar que qualquer uma das minhas declarações é imprecisa, ela pode desativar e excluir esta conta sem aviso prévio.',
        input: 'Digite novamente o emai',
      },
      our_politics: {
        title: 'Nossa Política',
        description:
          'Queremos que você saiba exatamente como nosso aplicativo funciona e como mantemos seus dados registrados. Levamos a proteção de seus dados muito a sério e atualizamos nossa Política de Privacidade e Termos e Condições.',
        agree: 'Eu concordo com os',
        confirm_you_read:
          'Por favor, confirme que você leu ambos antes de continuar.',
      },
      confirm_email: {
        title: 'Verificação de Email',
        description: 'Nós enviamos um email para verificar sua conta.',
        resend: 'Reenviar Email',
      },
      custom_fields: {
        title: 'Informações adicionais',
        subtitle: 'Precisamos de um pouco mais de informações sobre você',
      },
      actions: {
        signup: 'Registrar',
        signin_here: 'Faça o Login',
        accept_terms: 'Eu aceito todos os Termos e Condições',
        confirm: 'Confirmar',
        register: 'Registrar',
        cancel: 'Cancelar',
        back: 'Voltar',
      },
      error: {
        email_exists: 'O endereço de email já está em uso.',
      },
    },
    recoverPassword: {
      title: 'Esqueceu a sua senha? Sem problemas!',
      subtitle:
        'Nós vamos te enviar um e-mail com o código para resetar a sua senha.',
      sendCode: 'Me envie o código',
      label: {
        code: 'Código',
      },
      success: {
        title: 'Senha atualizada',
        description:
          'Sua senha foi salva e sua conta foi atualizada com sucesso.',
      },
      error: {
        title: 'Algo deu errado!',
        description: 'Vamos consertá-lo. Tente mais tarde.',
      },
    },
    updatePassword: {
      title: 'Um código foi enviado para o seu email',
      subtitle: 'Por favor, use o código enviado e digite uma nova senha.',
      label: {
        updatePassword: 'Redefinir senha',
      },
    },
    header: {
      tabs: {
        home: 'Home',
        live: 'Live',
        feed: 'Feed',
        collections: 'Collections',
        my_list: 'My List',
        settings: 'Settings',
        tools: 'Tools',
        example: 'Example',
      },
      channel_selected: {
        select: 'Selecionar',
        channel: 'canal:',
      },
      channel_search: 'Buscar canal...',
      userPopover: {
        edit_profile: 'Editar perfil',
        activate_dark: 'Ativar modo escuro',
        deactivate_dark: 'Desativar modo escuro',
        settings: 'Ajustes',
        exit: 'Sair',
      },
    },
    page: {
      home: {
        live: 'Ao vivo',
        most_recent: 'Mais Recentes',
        popular: 'Popular',
      },
      channels: {
        title: 'Canais',
      },
      collection: {
        action: 'Ação',
        drama: 'Drama',
        family: 'Família',
        watch_now: 'Assistir agora',
        my_list: 'Minha Lista',
      },
      my_list: {
        my_list: 'Minha Lista',
        collection: 'Coleção',
      },
      account: {
        push: 'Push',
        back: 'Voltar',
        on: 'em',
        cancel: 'CANCELAR',
        delete: 'DELETAR',
        update: 'ATUALIZAR',
        default: 'PADRÃO',
        pause: 'PAUSAR',
        name: 'Nome',
        username: 'Username',
        email: 'Email',
        password: 'Senha',
        phone: 'Telefone',
        account_info: 'Informações da Conta',
        language_selection: 'Seleção de Idioma',
        delete_account: 'Deletar Conta',
        billing_information: 'Informações de Compra',
        billing_history: 'Ver Histórico de Compra',
        your_subscription: 'Sua Assinatura',
        manage_subscription: 'Gerenciar Assinatura',
        monthly_plan: 'Plano Mensal ABS',
        next_billing: 'Próxima Data de Pagamento',
        last_billing: 'Última Data de Faturamento',
        pause_subscription: 'Pausar Assinatura',
        payment_information: 'Suas Informações de Pagamento',
        cancel_subscriptions: 'Cancelar Assinaturas',
        add_payment: 'Adicionar Método de Pagamento',
        payment_method: 'Método de Pagamento',
      },
    },
  },
}

export default PT_BR
