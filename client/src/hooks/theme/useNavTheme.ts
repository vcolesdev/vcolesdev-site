/**
 * useNavTheme()
 * Returns an object representing the themes available for the navigation bar.
 */
export default function useNavTheme() {
  const shadow = `0px 8px 40px 0px`;

  const colors = {
    light: (opacity: number) => `rgba(253, 240, 237, ${opacity})`, // melon
    dark: (opacity: number) => `rgba(55, 81, 95, ${opacity})`, // charcoal
    shadow: (opacity: number) => `rgba(144, 40, 20, ${opacity})`, // rosy brown
  };

  return {
    colors: colors,
    light: {
      transparent: colors.light(0),
      bg: colors.light(0.8),
      shadow: `${shadow} ${colors.shadow(0.2)}`,
    },
    dark: {
      transparent: colors.dark(0),
      bg: colors.dark(0.8),
      shadow: `${shadow} ${colors.dark(0.2)}`,
    },
    shadow: {
      transparent: colors.shadow(0),
      bg: colors.shadow(0.8),
      default: `${shadow} ${colors.shadow(0.2)}`,
    },
  };
}
