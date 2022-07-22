const EN_US = {
  translations: {
    common: {
      custom_field: {
        cpf: 'CPF',
        phone: 'Phone',
        rg: 'RG',
      },
      back_to_home: 'Back to home',
      or: 'or',
      next: 'Next',
      search: 'Search',
      error: {
        generic_api_error:
          'Something went wrong. We are going to fix it. Try again later.',
        field_required: 'Field {{field_name}} is required',
        field_must_match: '{{field_name}} must match',
        valid_email: 'Must be a valid email',
        accept_terms_and_conditions:
          'You must accept the terms and conditions.',
        password_error:
          'Password must contain a min of 8 characters, one uppercase, one lowercase, one number and one special character',
        same_password_error:
          'New password must be different of current password',
        confirm_email:
          'Please use the email previously entered during registration',
        deactivated_account:
          'Your account has not yet been activated. Please check the link sent to your email.',
      },
      what_is_this: 'What is this?',
      more: 'more',
      terms: 'Terms and Conditions',
      and: 'and',
      privacy: 'Privacy and Policy',
      edit_profile: 'Edit profile',
      settings: 'Settings',
      sign_out: 'Sign out',
      save: 'Save',
      enable: 'Enable',
      disable: 'Disable',
      dark_mode: 'dark mode',
      messages: 'messages',
      votes: 'votes',
      yes: 'Yes',
      no: 'No',
      close: 'Close',
      send: 'Send',
      empty_content: 'Nothing to see here',
      try_again_later:
        'There is no content at this time. Please check again soon',
      enjoy_your_content: 'Enjoy your content',
      retry: 'Retry',
      access_your_account: 'Access your account',
      back: 'Back',
      cancel: 'Cancel',
      confirm: 'Confirm',
      confirm_signout: 'Are you sure you want to sign out?',
      update: 'Update',
      accept_all: 'I accept all',
      agree: 'Agree',
      cancel_registration: 'Cancel registration',
      push: {
        allow: 'Allow',
        cancel: 'No thanks',
        title: '{{org}} would like to send you push notifications',
      },
      disabled_chat: 'Disabled chat',
      months: {
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December',
      },
      content_not_exists: "We couldn't find this page",
      content_not_exists_description:
        'You may have typed the address incorrectly or you are using an outdated link.',
      action_not_allowed: 'You need to have an account to perform this action',
      create_a_new_account:
        "Creating an account is easy and free, create your own to have access to the platform's content!",
    },
    signin: {
      title: 'Access {{org}} now',
      subtitle: 'Please log into your account now',
      or: 'or',
      label: {
        email: 'Email',
        password: 'Password',
        dont_have_account: "Don't have an account?",
        save_as_default: 'Save as default',
      },
      actions: {
        login: 'Login',
        signup_here: 'Sign Up here',
        forgot_password: 'Forgot password?',
      },
      error: {
        wrong_credentials: 'You have entered an invalid username or password.',
        too_many_attempts:
          'Number of attempts exceeded. For your security, login is currently not possible. Try again later.',
      },
    },
    signup: {
      label: {
        email: 'Email',
        password: 'Password',
        confirm_email: 'Confirm Email',
      },
      registration: {
        title: "Don't have an account yet?",
        subtitle:
          'Provide your email address and choose a password to create your account and enjoy access to exclusive content.',
        already_have_account: 'You already have an account?',
        free_registration: 'Sign Up now!',
      },
      GDPR: {
        citizen: 'Are you a citizen or resident of the European Union?',
      },
      confirm_age: {
        title: 'Are you {{age}} years or older?',
      },
      reconfirm_age: {
        title: 'Did you enter it correctly?',
        subtitle:
          "It looks like you aren't old enough to have an account. If you entered the wrong age in error, please update it now. Otherwise you will not be able to continue registration and no data entered will be stored.",
        under_age: 'I am under {{age}}',
      },
      reconfirm_age_email: {
        title: 'AGE CONFIRMATION',
        subtitle:
          'By clicking "Agree" below, I certify that the following is accurate and true:',
        age_declaration:
          'I am an individual {{age}} years of age or older. I previously provided the wrong age to {{organization}}.',
        warning:
          'I understand that if {{organization}} discovers any of my statements to be inaccurate, it may disable and delete this account without notice.',
        input: 'Re-enter email',
      },
      our_politics: {
        title: 'Our Policies',
        description:
          'We want you to know exactly how our app works and how we keep your details recorded. We take the protection of your data very seriously and have updated our Privacy Policy and Terms and Conditions.',
        agree: 'I agree to the',
        confirm_you_read:
          'Please confirm that you have read both before proceeding.',
      },
      confirm_email: {
        title: 'Email verification',
        description: 'We sent you an email to confirm your account.',
        resend: 'Resend Email',
      },
      custom_fields: {
        title: 'Additional Information',
        subtitle: 'We need a little more information about you',
      },
      actions: {
        signup: 'Sign Up',
        signin_here: 'Sign In here',
        accept_terms: 'I accept all Terms and Conditions.',
        confirm: 'Confirm',
        register: 'Register',
        cancel: 'Cancel',
        back: 'Back',
      },
      error: {
        email_exists: 'Email address already in use.',
      },
    },
    recoverPassword: {
      title: 'Forgot your password? No problem!',
      subtitle: "We'll send to your email a code to reset your password.",
      sendCode: 'Send me a code',
      label: {
        code: 'Code',
      },
      success: {
        title: 'Password reset',
        description:
          'Your password has been saved and your account has been updated successfully.',
      },
      error: {
        title: 'Something went wrong!',
        description: 'We are going to fix it. Try again later.',
      },
    },
    updatePassword: {
      title: 'A code has been emailed to you',
      subtitle: 'Please use the code received and enter a new password',
      label: {
        updatePassword: 'Update password',
      },
    },
    activateAccount: {
      activating: 'Activating your account...',
      success: 'Your account has been successfully activated.',
      loginLink: 'Click here to access',
    },
    header: {
      tabs: {
        home: 'Home',
        live: 'Live',
        feed: 'Feed',
        categories: 'Categories',
        my_list: 'My List',
        settings: 'Settings',
        tags: 'Tags',
        tools: 'Tools',
        example: 'Example',
      },
      channel_selector: {
        select: 'Select a channel',
      },
      channel_search: 'Search channel...',
      userPopover: {
        edit_profile: 'Edit Profile',
        activate_dark: 'Activate dark mode',
        deactivate_dark: 'Deactivate dark mode',
        settings: 'Settings',
        exit: 'Exit',
      },
    },
    page: {
      search: {
        results_for: '{{count}} results found for {{string}}:',
        videos_section: 'Video',
        categories_section: 'Categories',
        live_events_section: 'Live Events',
      },
      home: {
        live: 'Live',
        featured_posts: 'Featured',
        featured_categories: 'Featured categories',
        popular: 'Popular',
        cardInfoViews: 'Views',
      },
      channels: {
        title: 'Choose a channel:',
        page_title: 'Channels',
        private_channel: 'Private Channel',
        incorrect_password: 'Incorrect password. Try again.',
      },
      feed: {
        comments: 'Comments',
        no_comments: 'No comments',
        comment: 'Comment',
        reactions: 'Reactions',
        no_reactions: 'No reactions',
        reaction: 'Reaction',
        no_more: 'Yay! You have seen it all',
        search_options: {
          recent: 'Most Recent',
          old: 'Oldest',
        },
      },
      categories: {
        action: 'Action',
        drama: 'Drama',
        family: 'Family',
        watch_now: 'Watch Now',
        my_list: 'My List',
        more_categories: 'More categories',
      },
      category: {
        videos: 'Videos',
        categories: 'Categories',
      },
      my_list: {
        my_list: 'My List',
        pinned_categories: 'Favorite Categories',
        pinned_videos: 'Favorite Videos',
      },
      tag: {
        no_content: 'Tag has no content',
      },
      account: {
        title: 'My Account',
        push_notifications: 'Push Notifications',
        security: 'Security',
        back: 'Back',
        on: 'on',
        cancel: 'CANCEL',
        delete: 'DELETE',
        update: 'UPDATE',
        update_password: 'Update password',
        new_password: 'New password',
        current_password: 'Current password',
        confirm_new_password: 'Confirm new password',
        password_updated: 'Password updated successfully',
        update_email: 'Update e-mail',
        new_email: 'New e-mail',
        confirm_new_email: 'Confirm new e-mail',
        email_updated: 'E-mail updated successfully',
        default: 'DEFAULT',
        pause: 'PAUSE',
        name: 'Your Name',
        username: 'Username',
        email: 'Email',
        first_name: 'First Name',
        last_name: 'Last Name',
        display_name: 'Display Name',
        address: 'Address',
        birthday: 'Birthday',
        password: 'Password',
        phone: 'Phone',
        account_info: 'Your Account Information',
        profile_info: 'Your Profile Information',
        other_info: 'Other Information',
        account_settings: 'Account Settings',
        language_selection: 'Language Selection',
        delete_account: 'Delete my Account',
        delete_my_account: 'I want to delete my account',
        delete_account_error: 'Sorry, your account cannot be deleted at this time',
        delete_account_info:
          'Please enter your password to confirm you would like to delete your account and have your personal information deleted. If you have a subscription on any app, you must go to the App Store to cancel your subscription. Deleting your account will not cancel any existing subscription. {{organization}} will send an email confirmation to the email used during registration.',
        billing_information: 'Your Billing Information',
        billing_history: 'View Billing History',
        your_subscription: 'Your Subscription',
        manage_subscription: 'Manage Your Subscription',
        monthly_plan: 'ABS Monthly Plan',
        next_billing: 'Next Billing Date',
        last_billing: 'Last Billing Date',
        pause_subscription: 'Pause your Subscription',
        payment_information: 'Your Payment Information',
        cancel_subscriptions: 'Cancel your Subscriptions',
        add_payment: 'Add Payment Method',
        payment_method: 'Payment Method',
        verify_password:
          'To update your email, you must enter your password to confirm this action.',
        minimum_age: 'You must be at least 13 years old to have an account',
        edit_avatar: 'Edit Avatar',
        close: 'close',
        crop_image: 'Crop Image',
        zoom: 'zoom',
        rotation: 'rotation',
        choose_new_photo: 'Choose new photo',
      },
      live: {
        live: 'Live',
        upcoming: 'Upcoming',
        past: 'Past',
      },
      checkout: {
        login: {
          title: 'Payment',
          subtitle: 'Please complete your purchase and enjoy your content',
          continue_with: 'Continue with',
          or: 'or',
          input_label_fullname: 'Full Name',
          input_label_email: 'Email',
          term_service:
            'By signing up, I agree to the {{org}} Privacy and Policy of Term of Service.',
          signup_btn: 'Sign Up',
          already_have_account: 'Already have an account? Log in here',
        },
        more_info: {
          title: 'Custom Field',
          subtitle: '{fullName} we need a little more information about you',
          inputName: 'Name',
          inputEmail: 'Email',
          inputGender: 'Gender',
          inputAddress: 'Address',
          inputCity: 'City',
          inputState: 'State',
          inputZip: 'ZIP',
          buttonNext: 'Next',
          textWrongAccount: 'Wrong account? ',
          textLogin: 'Log in',
        },
        card_info: {
          title: 'Card Info',
          subtitle: 'Please complete your purchase and enjoy your content',
          card_name: 'Name on Card',
          card_number: 'Card number',
          date_month: 'MM',
          date_year: 'YYYY',
          cvv: 'CVV',
          country: 'Country',
          installments: 'Installments',
          full_name: 'Full Name',
          email: 'E-mail',
          CPF: 'CPF',
          authorize:
            'I authorize {{org}} LLC, to send instructions to the financial institution that issued my card to receive payments from the card account, in accordance with the terms of my contract with you.',
          place_you_order: 'Place your order',
          mistakes: {
            full_name_required: 'Full name is required',
            month_required: 'Month is required',
            year_required: 'Year is required',
          },
          address01: 'Address 1',
          address02: 'Address 2',
          number: 'Number',
          complement: 'Complement',
          zip_code: 'Zip Code',
          district: 'Neighborhood',
          city: 'City',
          state: 'State',
        },
        modal: {
          success: {
            title: 'Payment Success',
            subtitle: 'Your payment has been successfully processed. ',
            close: 'Enjoy your content',
          },
          failure: {
            title: 'Something went worng!',
            subtitle: 'We are going to fix it. Try later.',
            close: 'Retry',
          },
        },
        password: {
          title: 'You are almos there',
          subtitle:
            'Your account is almost ready. Please choose a password for your account and enjoy the show.',
          password_input: 'Password',
          saveandcontinue: 'Save and continue',
        },
      },
      post: {
        participants: 'Participants:',
        reactions: 'Reactions',
        comments: 'Comments',
        comment: {
          hide: 'Hide',
          see: 'See',
          reply: 'reply',
          replies: 'replies',
          report: 'Report',
          edit: 'Edit',
          delete: 'Delete',
          comments: 'Comments',
          no_comments: 'No comments',
          comment: 'Comment',
          confirm_delete: 'Confirm delete',
          report_reason:
            'Give us the reason why you are reporting this content',
        },
        search_options: {
          recent: 'Most Recent',
          old: 'Oldest',
        },
        autoplay: 'Autoplay next video',
        redirect_next_video: 'Redirecting to next video...',
        related_videos: 'Related videos',
        views: 'views',
        add_a_comment: 'Add a comment…',
        reply: 'REPLY',
        private_content: {
          title: 'Private Content',
          subtitle: 'Please enter the password to access the content',
          access: 'Access',
          incorrect_password: 'Incorrect password. Try again.',
        },
        geolocked_content: {
          title: 'Geolocked content',
          subtitle: 'This content is not available for your country.'
        },
        live: {
          live_chat: {
            title: 'Live Chat',
            say_something: 'Say something...',
          },
          will_start_in: 'Live Event will start in',
          will_start_soon: 'Live Event will start soon',
          ended: 'Live Event ended',
          live: 'LIVE',
          upcoming: 'UPCOMING',
          finished: 'FINISHED',
          days: 'Days',
          hours: 'Hours',
          minutes: 'Minutes',
          seconds: 'Seconds',
        },
      },
      plan: {
        selectPlan: {
          title: 'Select Your Plan',
          select: 'Select',
          loading: 'Loading',
        },
        selectOption: {
          title: 'Select option:',
          choosePaymentMethod: 'Choose a payment method',
          bankCard: 'Bank Card',
          bankCardDesc: 'Pay with Visa, Mastercard, Maestro and Amex',
          pix: 'PIX',
          pixDesc: 'Fast, your payment approved on time',
        },
      },
    },
    cookieConsent: {
      notice: 'Notice.',
      description_1:
        'uses cookies to provide necessary website functionality, improve your experience and analyze our traffic. By using our website, you agree to',
      link: 'our Privacy Policy',
      description_2: 'and our cookies usage.',
      accept: 'Accept',
    },
  },
}

export default EN_US
