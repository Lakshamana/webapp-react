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
          'Password must contain a min of 8 characters, one uppercase, one lowercase, one number and one special character',
        confirm_email:
          'Please use the email previously entered during registration',
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
    },
    signin: {
      title: 'Access Fanhero now',
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
        wrong_credentials: 'Your login credentials are incorrect.',
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
      subtitle: 'Please use the code received and enter a new password',
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
        tags: 'Tags',
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
        title: 'Channels',
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
        push_notifications: 'Push Notifications',
        security: 'Security',
        back: 'Back',
        on: 'on',
        cancel: 'CANCEL',
        delete: 'DELETE',
        update: 'UPDATE',
        update_password: 'Update password',
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
        account_settings: 'Account Settings',
        language_selection: 'Language Selection',
        delete_account: 'Delete my Account',
        delete_account_info: 'Please enter your password to confirm you would like to delete your account and have your personal information deleted. If you have a subscription on any app, you must go to the App Store to cancel your subscription. Deleting your account will not cancel any existing subscription. {{organization}} will send an email confirmation to the email used during registration.',
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
    cookieConsent: {
      notice: 'Notice.',
      description_1: 'uses cookies to provide necessary website functionality, improve your experience and analyze our traffic. By using our website, you agree to',
      link: 'our Privacy Policy',
      description_2: 'and our cookies usage.',
      accept: 'Accept',
    },
  },
}

export default EN_US
