const EN_US = {
  translations: {
    common: {
      or: 'or',
      error: {
        generic_api_error:
          'Something went wrong. We are going to fix it. Try again later.',
        field_required: 'Field {{field_name}} is required',
        field_must_match: '{{field_name}} must match',
        valid_email: 'Must be a valid email',
        accept_terms_and_conditions:
          'You must accept the terms and conditions.',
        password_error:
          'Password must contain min of 8 characteres, one uppercase, one lowercase, one number and one special character',
      },
      what_is_this: 'What is this?',
      more: 'more',
      terms: 'Terms and Conditions',
      and: 'and',
      privacy: 'Privacy and Policy',
      edit_profile: 'Edit profile',
      settings: 'Settings',
      sign_out: 'Sign out',
      enable: 'Enable',
      disable: 'Disable',
      dark_mode: 'dark mode',
      messages: 'messages',
      votes: 'votes',
      yes: 'Yes',
      no: 'No',
      close: 'Close',
      send: 'Send',
      enjoy_your_content: 'Enjoy your content',
      retry: 'Retry',
      access_your_account: 'Access your acount',
      back: 'Back',
      cancel: 'Cancel',
      confirm: 'Confirm',
      update: 'Update',
      accept_all: 'I accept all'
    },
    signin: {
      title: 'Access Fanhero now',
      subtitle: 'Please login into your account now',
      or: 'or',
      label: {
        email: 'Email',
        password: 'Password',
        dont_have_account: "Doesn't have an account?",
        save_as_default: 'Save as default',
      },
      actions: {
        login: 'Login',
        signup_here: 'Sign Up here',
        forgot_password: 'Forgot password?',
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
          "It looks like you aren't old enough to have a {{organization}} account. If you entered the wrong age in error, please update it now. Otherwise you will not be able to continue registration and no data entered will be stored.",
        under_age: 'I am under {{age}}',
      },
      our_politics: {
        title: 'Our Politics',
        description:
          'We want you to know exactly how our app works and how we keep your details recorded. We take the protection of your data very seriously and have updated our Privacy Policy and Terms and Conditions.',
        agree: 'I agree to the',
        confirm_you_read:
          'Please confirm that you have read both before proceeding.',
      },
      confirm_email: {
        title: 'Email verification',
        description: 'We sent you a email to confirm your account.',
        resend: 'Resend Email',
      },
      actions: {
        signup: 'Signup',
        signin_here: 'Sign In here',
        accept_terms: 'I accept all Terms and Conditions.',
        confirm: 'Confirm',
        register: 'Register',
        cancel: 'Cancel',
        back: 'Back',
      },
      error: {
        email_exists: 'A user with this email address already exists.',
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
      subtitle: 'Please, use this code and input a new password',
      label: {
        updatePassword: 'Update password',
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
        select: 'Select',
        channel: 'channel:',
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
      home: {
        live: 'Live',
        most_recent: 'Most Recents',
        popular: 'Popular',
      },
      channels: {
        title: 'Channels'
      },
      collection: {
        action: 'Action',
        drama: 'Drama',
        family: 'Family',
        watch_now: 'Watch Now',
        my_list: 'My List',
      },
      my_list: {
        my_list: 'My List',
        collection: 'Collection',
      },
      account: {
        push: 'Push',
        back: 'Back',
        on: 'on',
        cancel: 'CANCEL',
        delete: 'DELETE',
        update: 'UPDATE',
        default: 'DEFAULT',
        pause: 'PAUSE',
        name: 'Your Name',
        username: 'Username',
        email: 'Email',
        password: 'Password',
        phone: 'Phone',
        account_info: 'Your Account Information',
        language_selection: 'Language Selection',
        delete_account: 'Delete my Account',
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
      },
    },
  },
}

export default EN_US
