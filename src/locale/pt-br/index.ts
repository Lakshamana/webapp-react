const PT_BR = {
  translations: {
    common: {
      custom_field: {
        cpf: 'CPF',
        phone: 'Telefone',
        rg: 'RG',
      },
      back_to_home: 'Voltar para o início',
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
        same_password_error: 'A nova senha deve ser diferente da senha atual',
        confirm_email:
          'Por favor, digite o mesmo email utilizado para o cadastro.',
      },
      what_is_this: 'O que é isso?',
      more: 'mais',
      terms: 'Termos e Condições',
      and: 'e',
      privacy: 'Política de Privacidade',
      edit_profile: 'Editar perfil',
      settings: 'Ajustes',
      sign_out: 'Sair',
      save: 'Salvar',
      enable: 'Habilitar',
      disable: 'Desabilitar',
      dark_mode: 'modo escuro',
      messages: 'mensagens',
      votes: 'votos',
      yes: 'Sim',
      no: 'Não',
      close: 'Fechar',
      send: 'Enviar',
      empty_content: 'Nenhum conteúdo',
      try_again_later: 'Tente novamente mais tarde',
      enjoy_your_content: 'Aproveite seu conteúdo',
      retry: 'Tentar novamente',
      access_your_account: 'Acesse a sua conta',
      back: 'Voltar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      confirm_signout: 'Tem certeza que deseja sair?',
      update: 'Atualizar',
      accept_all: 'Eu aceito todos os',
      push: {
        allow: 'Permitir',
        cancel: 'Não, obrigado.',
        title: '{{org}} gostaria de enviar notificações.',
      },
      disabled_chat: 'Chat desabilitado',
      months: {
        january: 'Janeiro',
        february: 'Fevereiro',
        march: 'Março',
        april: 'Abril',
        may: 'Maio',
        june: 'Junho',
        july: 'Julho',
        august: 'Agosto',
        september: 'Setembro',
        october: 'Outubro',
        november: 'Novembro',
        december: 'Dezembro',
      },
      content_not_exists: "Não foi possível encontrar esta página",
      content_not_exists_description:
        'Você pode ter digitado o endereço incorretamente ou está usando um link desatualizado.',
    },
    signin: {
      title: 'Acesse {{org}} agora',
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
      error: {
        wrong_credentials:
          'Você digitou um nome de usuário ou senha inválidos.',
        too_many_attempts:
          'Número de tentativas de login excedido. Para sua segurança, não é possível fazer o login no momento. Tente novamente mais tarde.',
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
    activateAccount: {
      activating: 'Ativando a sua conta...',
      success: 'Sua conta foi ativada com sucesso!',
      loginLink: 'Clique aqui para acessar',
    },
    header: {
      tabs: {
        home: 'Início',
        live: 'Ao vivo',
        feed: 'Feed',
        categories: 'Categorias',
        my_list: 'Minha lista',
        settings: 'Ajustes',
        tags: 'Tags',
        tools: 'Ferramentas',
        example: 'Exemplo',
      },
      channel_selector: {
        select: 'Selecione o canal',
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
        featured_posts: 'Destaques',
        featured_categories: 'Categorias em destaque',
        popular: 'Popular',
        cardInfoViews: 'Visualizações',
      },
      channels: {
        title: 'Escolha um canal:',
        page_title: 'Canais',
        private_channel: 'Canal privado',
        incorrect_password: 'Senha inválida. Tente novamente.',
      },
      feed: {
        comments: 'Comentários',
        no_comments: 'Sem comentários',
        comment: 'Comentário',
        reactions: 'Reações',
        no_reactions: 'Sem reações',
        reaction: 'Reação',
        search_options: {
          recent: 'Mais Recente',
          old: 'Mais Antiga',
        },
      },
      categories: {
        action: 'Ação',
        drama: 'Drama',
        family: 'Família',
        watch_now: 'Assistir agora',
        my_list: 'Minha Lista',
        more_categories: 'Mais categorias',
      },
      category: {
        videos: 'Vídeos',
        categories: 'Categorias',
      },
      my_list: {
        my_list: 'Minha Lista',
        pinned_categories: 'Categorias favoritas',
        pinned_videos: 'Vídeos favoritos',
      },
      tag: {
        no_content: 'Tag sem conteúdo',
      },
      account: {
        title: 'Minha conta',
        push_notifications: 'Notificações Push',
        security: 'Segurança',
        back: 'Voltar',
        on: 'em',
        cancel: 'CANCELAR',
        delete: 'DELETAR',
        update: 'ATUALIZAR',
        update_password: 'Atualizar senha',
        new_password: 'Nova senha',
        current_password: 'Senha atual',
        confirm_new_password: 'Confirmar nova senha',
        password_updated: 'Senha atualizada com sucesso',
        update_email: 'Atualizar e-mail',
        new_email: 'Novo e-mail',
        confirm_new_email: 'Confirmar novo e-mail',
        email_updated: 'E-mail atualizado com sucesso',
        default: 'PADRÃO',
        pause: 'PAUSAR',
        name: 'Nome',
        username: 'Username',
        email: 'Email',
        first_name: 'Primeiro Nome',
        last_name: 'Sobrenome',
        display_name: 'Nome para exibição',
        address: 'Endereço',
        birthday: 'Data de nascimento',
        password: 'Senha',
        phone: 'Telefone',
        account_info: 'Informações da Conta',
        profile_info: 'Informações de Perfil',
        other_info: 'Outras Informações',
        account_settings: 'Configurações da Conta',
        language_selection: 'Seleção de Idioma',
        delete_account: 'Deletar Conta',
        delete_my_account: 'Deletar a minha conta',
        delete_account_info:
          'Por favor digite sua senha para confirmar que você gostaria de deletar sua conta e ter sua informação pessoal removida. Se você é assinante em qualquer app, você precisa ir até a App Store para cancelar sua assinatura. Deletar sua conta não vai cancelar qualquer assinatura existente. {{organization}} irá enviar uma confirmação para o email usado durante o registro.',
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
        verify_password:
          'Para atualizar o seu email, você deve colocar sua senha para confirmar essa ação.',
        minimum_age:
          'Você precisa ter pelo menos 13 anos de idade para ter uma conta',
      },
      live: {
        live: 'Ao Vivo',
        upcoming: 'Próximas transmissões',
        past: 'Assistir Novamente',
      },
      checkout: {
        login: {
          title: 'Pagamento',
          subtitle: 'Por favor, complete sua compra e aproveite seu conteúdo',
          continue_with: 'Continue com',
          or: 'ou',
          input_label_fullname: 'Nome Completo',
          input_label_email: 'Email',
          term_service:
            'Ao se inscrever, concordo com a Política de Privacidade e Termos de Serviço do FanHero.',
          signup_btn: 'inscrever-se',
          already_have_account: 'já tem uma conta? Entre aqui',
        },
        more_info: {
          title: 'Campo customizado',
          subtitle:
            '{fullName} precisamos de um pouco mais de informações sobre você',
          inputName: 'Nome',
          inputEmail: 'Email',
          inputGender: 'Gênero',
          inputAddress: 'Endereço',
          inputCity: 'Cidade',
          inputState: 'Estado',
          inputZip: 'CEP',
          buttonNext: 'Próximo',
          textWrongAccount: 'Conta errada? ',
          textLogin: 'Conecte-se',
        },
        card_info: {
          title: 'Informações do cartão',
          subtitle: 'Finalize o pagamento e aproveite o conteúdo.',
          card_name: 'Nome no Cartão',
          card_number: 'Número do Cartão',
          date_month: 'MM',
          date_year: 'AAAA',
          cvv: 'CVV',
          country: 'Country',
          installments: 'Parcelas',
          full_name: 'Nome Completo',
          email: 'E-mail',
          CPF: 'CPF',
          authorize:
            'Autorizo ​​a FanHero LLC, a enviar instruções à instituição financeira que emitiu meu cartão para receber pagamentos da conta do cartão, de acordo com os termos do meu contrato com você.',
          place_you_order: 'Faça seu pedido',
          mistakes: {
            full_name_required: 'Nome Completo é obrigatorio',
            month_required: 'Mês é obrigatorio',
            year_required: 'Ano é obrigatorio',
          },
        },
        modal: {
          success: {
            title: 'Pago com sucesso',
            subtitle: 'Seu pagamento foi processado com sucesso.',
            close: 'Aproveite seu conteúdo',
          },
          failure: {
            title: 'Alguma coisa deu errado!',
            subtitle: 'Nós vamos corrigi-lo. Tente depois.',
            close: 'Repetir',
          },
        },
        password: {
          title: 'Você está quase lá',
          subtitle:
            'Sua conta está quase pronta. Escolha uma senha para sua conta e aproveite o show.',
          password_input: 'Senha',
          saveandcontinue: 'Salve e continue',
        },
      },
      post: {
        participants: 'Participantes:',
        reactions: 'Reações',
        comments: 'Comentários',
        comment: {
          hide: 'Esconder',
          see: 'Mostrar',
          reply: 'resposta',
          replies: 'respostas',
          report: 'Denunciar',
          edit: 'Editar',
          delete: 'Apagar',
          comments: 'Comentários',
          no_comments: 'Sem comentários',
          comment: 'Comentário',
          confirm_delete: 'Apagar comentário?',
          report_reason: 'Por que você está reportando este conteúdo?',
        },
        search_options: {
          recent: 'Mais Recente',
          old: 'Mais Antiga',
        },
        autoplay: 'Reproduzir automaticamente',
        redirect_next_video: 'Redirecionando para o próximo vídeo...',
        related_videos: 'Próximos vídeos',
        views: 'visualizações',
        add_a_comment: 'Adicionar um comentário...',
        reply: 'RESPONDER',
        private_content: {
          title: 'Conteúdo Privado',
          subtitle: 'Por favor, digite a senha para ter acesso ao conteúdo.',
          access: 'Acessar',
          incorrect_password: 'Senha inválida. Tente novamente.',
        },
        live: {
          live_chat: {
            title: 'Chat ao Vivo',
            say_something: 'Diga alguma coisa...',
          },
          will_start_in: 'A transmissão irá começar em',
          will_start_soon: 'A transmissão irá começar em breve',
          ended: 'A transmissão terminou',
          live: 'AO VIVO',
          upcoming: 'EM BREVE',
          finished: 'FINALIZADA',
          days: 'Dias',
          hours: 'Horas',
          minutes: 'Minutos',
          seconds: 'Segundos',
        },
      },
      plan: {
        selectPlan: {
          title: 'Selecione o seu plano',
          select: 'selecionar',
        },
        selectOption: {
          title: 'Selecione a opção:',
          choosePaymentMethod: 'Escolha um método de pagamento',
          bankCard: 'Cartão',
        }
      }
    },
    cookieConsent: {
      notice: 'Aviso prévio.',
      description_1:
        'usa cookies para fornecer a funcionalidade necessária do site, melhorar sua experiência e analisar nosso tráfego. Ao usar nosso site, você concorda com',
      link: 'nossa Política de Privacidade',
      description_2: 'e nosso uso de cookies.',
      accept: 'Aceitar',
    },
  },
}

export default PT_BR