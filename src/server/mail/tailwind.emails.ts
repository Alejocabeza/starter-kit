/** @type {import('tailwindcss').Config} */

/**
 * This is the Tailwind CSS configuration file for our email templates.
 * it defines the theme and any customizations we want to apply to our email styles.
 * We can extend the default Tailwind theme here to include custom colors, fonts, etc.
 * This configuration will be used by the @react-email/components library to style our email templates.
 * For more information on how to customize Tailwind CSS, you can refer to the official documentation:
 * https://tailwindcss.com/docs/configuration
 */

export default {
  theme: {
    extends: {
      colors: {},
      fontFamily: {},
      spacing: {},
      borderRadius: {},
    },
  },
};
